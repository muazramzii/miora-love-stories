import { render, screen, within } from '@testing-library/react'
import TimelineSection from './TimelineSection'
import { loveStory } from '../../data/loveStory'

const { timeline } = loveStory

describe('TimelineSection', () => {
  it('renders the section heading and every chapter in the supplied order', () => {
    render(<TimelineSection />)
    expect(screen.getByRole('heading', { level: 2, name: timeline.title })).toBeInTheDocument()

    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items).toHaveLength(timeline.chapters.length)
    expect(timeline.chapters).toHaveLength(4)

    timeline.chapters.forEach((chapter, index) => {
      const item = within(items[index])
      expect(item.getByText(`${chapter.chapter} • ${chapter.date}`)).toBeInTheDocument()
      expect(item.getByRole('heading', { level: 3, name: chapter.title })).toBeInTheDocument()
      expect(item.getByText(chapter.description)).toBeInTheDocument()
      expect(item.getByText(chapter.place)).toBeInTheDocument()
    })
  })

  it('shows each photo with alt text and its memory-fragment caption', () => {
    render(<TimelineSection />)
    for (const chapter of timeline.chapters) {
      expect(screen.getByAltText(chapter.image!.alt)).toBeInTheDocument()
      expect(screen.getByText(chapter.fragment!)).toBeInTheDocument()
      expect(screen.getByText(chapter.caption!)).toBeInTheDocument()
    }
  })
})
