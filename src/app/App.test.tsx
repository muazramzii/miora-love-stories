import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { loveStory } from '../data/loveStory'

describe('App', () => {
  it('renders the landmarks and a single h1', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus()
  })

  it('offers the five section links and the four mobile tabs in the approved order', () => {
    render(<App />)
    const primary = within(screen.getByRole('navigation', { name: 'Primary' }))
    expect(primary.getAllByRole('link').map((a) => a.textContent)).toEqual([
      'Our Story',
      'The Letter',
      'Milestones',
      'Gallery',
      'Closing',
    ])
    const tabs = within(screen.getByRole('navigation', { name: 'Quick sections' }))
    expect(tabs.getAllByRole('link').map((a) => a.textContent)).toEqual(['Story', 'Timeline', 'Keepsakes', 'Letters'])
  })

  it('marks one section as current in each navigation', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Our Story', current: 'location' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Story', current: 'location' })).toBeInTheDocument()
  })

  it('points every in-page anchor at exactly one existing element', () => {
    const { container } = render(<App />)
    const anchors = container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    expect(anchors.length).toBeGreaterThan(0)
    for (const anchor of anchors) {
      const id = anchor.getAttribute('href')!.slice(1)
      expect(container.querySelectorAll(`[id="${id}"]`), `#${id}`).toHaveLength(1)
    }
  })

  it('has no duplicate element ids', () => {
    const { container } = render(<App />)
    const ids = [...container.querySelectorAll('[id]')].map((el) => el.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('renders the closing message and a back-to-top link', () => {
    render(<App />)
    const closing = screen.getByRole('region', { name: loveStory.closing.title })
    expect(within(closing).getByText(loveStory.closing.quote)).toBeInTheDocument()
    expect(within(closing).getByRole('link', { name: loveStory.closing.backLabel })).toHaveAttribute('href', '#top')
  })
})
