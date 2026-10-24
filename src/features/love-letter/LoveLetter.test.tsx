import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoveLetter from './LoveLetter'
import { loveStory } from '../../data/loveStory'

describe('LoveLetter', () => {
  it('keeps the letter closed until opened, then reveals real text', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)

    const button = screen.getByRole('button', { name: /open the letter/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(loveStory.letterBody[0])).not.toBeInTheDocument()

    await user.click(button)

    expect(screen.getByRole('button', { name: /close the letter/i })).toHaveAttribute('aria-expanded', 'true')
    for (const paragraph of loveStory.letterBody) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByText(loveStory.letterSignOff)).toBeInTheDocument()
  })

  it('closes again, and works from the keyboard', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)

    screen.getByRole('button', { name: /open the letter/i }).focus()
    await user.keyboard('{Enter}')
    expect(screen.getByText(loveStory.letterBody[0])).toBeInTheDocument()

    await user.keyboard(' ')
    expect(screen.queryByText(loveStory.letterBody[0])).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open the letter/i })).toHaveAttribute('aria-expanded', 'false')
  })
})
