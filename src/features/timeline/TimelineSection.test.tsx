import { render, screen, within } from '@testing-library/react'
import TimelineSection from './TimelineSection'
import { loveStory } from '../../data/loveStory'

describe('TimelineSection', () => {
  it('renders every entry in the supplied order', () => {
    render(<TimelineSection />)
    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items).toHaveLength(loveStory.timeline.length)

    loveStory.timeline.forEach((entry, index) => {
      const item = within(items[index])
      expect(item.getByText(entry.date)).toBeInTheDocument()
      expect(item.getByRole('heading', { name: entry.title })).toBeInTheDocument()
      expect(item.getByText(entry.description)).toBeInTheDocument()
    })
  })

  it('shows an image only for entries that have one, with alt text', () => {
    render(<TimelineSection />)
    const withImage = loveStory.timeline.filter((entry) => entry.image)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(withImage.length)
    for (const entry of withImage) {
      expect(entry.imageAlt).toBeTruthy()
      expect(screen.getByAltText(entry.imageAlt!)).toBeInTheDocument()
    }
  })
})
