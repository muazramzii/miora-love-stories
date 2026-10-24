import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import GallerySection from '../features/gallery/GallerySection'
import TimelineSection from '../features/timeline/TimelineSection'
import { loveStory } from '../data/loveStory'

// The components read from the central data object at render time, so edge cases
// are tested by temporarily swapping its fields (no network or mocking needed).
const original = { gallery: loveStory.gallery, timeline: loveStory.timeline }

afterEach(() => {
  loveStory.gallery = original.gallery
  loveStory.timeline = original.timeline
})

describe('accessibility regressions', () => {
  it('exposes the letter as one landmark, and no empty region while it is closed', () => {
    render(<App />)
    const named = screen.getAllByRole('region', { name: loveStory.letterTitle })
    expect(named).toHaveLength(1)
    expect(named[0].tagName).toBe('SECTION')
  })

  it('announces the caption and position when the photo changes', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    await user.click(screen.getByRole('button', { name: `View larger: ${loveStory.gallery[0].caption}` }))

    const dialog = screen.getByRole('dialog', { name: 'Photo viewer' })
    const caption = dialog.querySelector('figcaption')!
    expect(caption).toHaveAttribute('aria-live', 'polite')

    await user.click(within(dialog).getByRole('button', { name: 'Next photo' }))
    expect(caption).toHaveTextContent(loveStory.gallery[1].caption)
    expect(caption).toHaveTextContent(`2 / ${loveStory.gallery.length}`)
  })

  it('gives every button and link an accessible name', () => {
    render(<App />)
    for (const el of screen.getAllByRole('button')) expect(el).toHaveAccessibleName()
    for (const el of screen.getAllByRole('link')) expect(el).toHaveAccessibleName()
  })
})

describe('gallery edge cases', () => {
  it('renders an empty gallery without crashing and offers nothing to open', () => {
    loveStory.gallery = []
    render(<GallerySection />)
    expect(screen.getByText('No memories have been added yet.')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /view larger/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('hides Previous/Next for a single photo and ignores arrow keys', async () => {
    const user = userEvent.setup()
    loveStory.gallery = [loveStory.gallery[0]]
    render(<GallerySection />)
    await user.click(screen.getByRole('button', { name: /view larger/i }))

    const dialog = screen.getByRole('dialog')
    expect(within(dialog).queryByRole('button', { name: 'Next photo' })).not.toBeInTheDocument()
    expect(within(dialog).queryByRole('button', { name: 'Previous photo' })).not.toBeInTheDocument()
    await user.keyboard('{ArrowRight}{ArrowLeft}')
    expect(within(dialog).getByAltText(loveStory.gallery[0].alt)).toBeInTheDocument()
  })

  it('shows a fallback in the lightbox if the enlarged image fails, and recovers on navigation', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    await user.click(screen.getByRole('button', { name: `View larger: ${loveStory.gallery[0].caption}` }))
    const dialog = screen.getByRole('dialog')

    fireEvent.error(within(dialog).getByAltText(loveStory.gallery[0].alt))
    expect(within(dialog).getByRole('img', { name: loveStory.gallery[0].alt }).tagName).toBe('DIV')

    await user.click(within(dialog).getByRole('button', { name: 'Next photo' }))
    expect(within(dialog).getByAltText(loveStory.gallery[1].alt).tagName).toBe('IMG')
  })

  it('restores page scrolling when the lightbox unmounts without an explicit close', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<GallerySection />)
    await user.click(screen.getByRole('button', { name: `View larger: ${loveStory.gallery[0].caption}` }))
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).not.toBe('hidden')
  })
})

describe('timeline edge cases', () => {
  it('renders entries that have no image, and keeps long text', () => {
    const long = 'A very long event title '.repeat(10).trim()
    loveStory.timeline = [
      { id: 'a', date: '1 January 2020', title: long, description: 'x'.repeat(300) },
      { id: 'b', date: '2 February 2021', title: 'Second', description: 'Plain entry' },
    ]
    render(<TimelineSection />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.queryAllByRole('img')).toHaveLength(0)
    expect(screen.getByRole('heading', { name: long })).toBeInTheDocument()
  })

  it('keeps entries in the order supplied, not sorted', () => {
    loveStory.timeline = [
      { id: 'late', date: '2024', title: 'Late', description: 'd' },
      { id: 'early', date: '2020', title: 'Early', description: 'd' },
    ]
    render(<TimelineSection />)
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual(['Late', 'Early'])
  })
})
