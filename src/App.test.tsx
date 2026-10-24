import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the product name and tagline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Miora Love Stories' })).toBeInTheDocument()
    expect(screen.getByText('A little place for your love story.')).toBeInTheDocument()
  })
})
