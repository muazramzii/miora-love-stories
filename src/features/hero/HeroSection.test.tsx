import { fireEvent, render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'
import { loveStory } from '../../data/loveStory'

const { hero } = loveStory

describe('HeroSection', () => {
  it('renders the approved copy from the data file', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1, name: hero.title })).toBeInTheDocument()
    expect(screen.getByText(hero.dateline)).toBeInTheDocument()
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument()
    expect(screen.getByText(hero.callout.quote)).toBeInTheDocument()
    expect(screen.getByText(hero.memory.title)).toBeInTheDocument()
    expect(screen.getByText(hero.portrait.plate)).toBeInTheDocument()
  })

  it('links the call to action to the letter section', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: hero.cta })).toHaveAttribute('href', '#the-letter')
  })

  it('describes the portrait, and falls back gracefully if it fails to load', () => {
    render(<HeroSection />)
    const image = screen.getByAltText(hero.portrait.alt)
    expect(image.tagName).toBe('IMG')
    fireEvent.error(image)
    expect(screen.getByRole('img', { name: hero.portrait.alt }).tagName).toBe('DIV')
  })
})
