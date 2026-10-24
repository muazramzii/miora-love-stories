import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GallerySection from './GallerySection'
import { loveStory } from '../../data/loveStory'

const { gallery } = loveStory
const last = gallery.length - 1

function openPhoto(index: number) {
  return screen.getByRole('button', { name: `View larger: ${gallery[index].caption}` })
}

describe('GallerySection', () => {
  it('renders every photo with alt text and caption', () => {
    render(<GallerySection />)
    for (const photo of gallery) {
      expect(screen.getByAltText(photo.alt)).toBeInTheDocument()
      expect(screen.getByText(photo.caption)).toBeInTheDocument()
    }
  })

  it('opens the lightbox on click and shows the selected photo', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(openPhoto(2))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(within(dialog).getByAltText(gallery[2].alt)).toBeInTheDocument()
    expect(within(dialog).getByText(gallery[2].caption)).toBeInTheDocument()
    expect(within(dialog).getByText(`3 / ${gallery.length}`)).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('navigates with next and previous, wrapping at both ends', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)

    await user.click(openPhoto(0))
    const dialog = screen.getByRole('dialog')

    await user.click(within(dialog).getByRole('button', { name: 'Previous photo' }))
    expect(within(dialog).getByText(gallery[last].caption)).toBeInTheDocument()

    await user.click(within(dialog).getByRole('button', { name: 'Next photo' }))
    expect(within(dialog).getByText(gallery[0].caption)).toBeInTheDocument()

    await user.click(within(dialog).getByRole('button', { name: 'Next photo' }))
    expect(within(dialog).getByText(gallery[1].caption)).toBeInTheDocument()
  })

  it('supports arrow keys', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    await user.click(openPhoto(0))

    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toHaveTextContent(gallery[1].caption)
    await user.keyboard('{ArrowLeft}{ArrowLeft}')
    expect(screen.getByRole('dialog')).toHaveTextContent(gallery[last].caption)
  })

  it('closes with the Close button, restoring scroll and focus', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    const opener = openPhoto(1)

    await user.click(opener)
    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).not.toBe('hidden')
    expect(opener).toHaveFocus()
  })

  it('closes with Escape and returns focus to the photo that opened it', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    const opener = openPhoto(3)

    await user.click(opener)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus()
    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(opener).toHaveFocus()
  })

  it('keeps focus inside the dialog when tabbing', async () => {
    const user = userEvent.setup()
    render(<GallerySection />)
    await user.click(openPhoto(0))
    const dialog = screen.getByRole('dialog')

    for (let i = 0; i < 6; i++) await user.tab()
    expect(dialog).toContainElement(document.activeElement as HTMLElement)
  })

  it('shows a fallback instead of a broken image', () => {
    render(<GallerySection />)
    const image = screen.getByAltText(gallery[0].alt)
    fireEvent.error(image)
    expect(screen.getByRole('img', { name: gallery[0].alt }).tagName).toBe('DIV')
  })
})
