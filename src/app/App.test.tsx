import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the hero with a single h1 and the main landmarks', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Our little story' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /hands reaching/i })).toBeInTheDocument()
  })

  it('toggles the mobile menu with the keyboard-accessible button', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('links every nav anchor to an existing section', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of nav.querySelectorAll('a[href^="#"]')) {
      const id = link.getAttribute('href')!.slice(1)
      expect(document.getElementById(id)).not.toBeNull()
    }
  })
})
