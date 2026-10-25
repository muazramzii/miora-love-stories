import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoveLetter from './LoveLetter'
import { loveStory } from '../../data/loveStory'

const { letter } = loveStory

describe('LoveLetter', () => {
  it('starts sealed: envelope card visible, letter text not rendered', () => {
    render(<LoveLetter />)
    expect(screen.getByRole('heading', { level: 2, name: letter.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: letter.sealed.to })).toBeInTheDocument()
    const open = screen.getByRole('button', { name: letter.sealed.openLabel })
    expect(open).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(letter.paper.paragraphs[0])).not.toBeInTheDocument()
  })

  it('breaking the seal reveals the letter as real text and moves focus to it', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)

    await user.click(screen.getByRole('button', { name: letter.sealed.openLabel }))

    for (const paragraph of letter.paper.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByText(letter.paper.signature)).toBeInTheDocument()
    expect(screen.getByRole('article', { name: letter.paper.heading })).toHaveFocus()
    expect(screen.queryByRole('button', { name: letter.sealed.openLabel })).not.toBeInTheDocument()
  })

  it('folds and reseals, returning focus to the open button', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)
    await user.click(screen.getByRole('button', { name: letter.sealed.openLabel }))

    const fold = screen.getByRole('button', { name: letter.paper.foldLabel })
    expect(fold).toHaveAttribute('aria-expanded', 'true')
    await user.click(fold)

    expect(screen.queryByText(letter.paper.paragraphs[0])).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: letter.sealed.openLabel })).toHaveFocus()
  })

  it('works from the keyboard and can be opened and closed repeatedly', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)

    for (let round = 0; round < 3; round++) {
      screen.getByRole('button', { name: letter.sealed.openLabel }).focus()
      await user.keyboard('{Enter}')
      expect(screen.getByText(letter.paper.paragraphs[0])).toBeInTheDocument()

      screen.getByRole('button', { name: letter.paper.foldLabel }).focus()
      await user.keyboard(' ')
      expect(screen.queryByText(letter.paper.paragraphs[0])).not.toBeInTheDocument()
    }
  })

  it('also opens when the envelope card itself is clicked', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)
    await user.click(screen.getByText(letter.sealed.text))
    expect(screen.getByText(letter.paper.paragraphs[1])).toBeInTheDocument()
  })

  it('never leaves both states on screen after rapid clicks', async () => {
    const user = userEvent.setup()
    render(<LoveLetter />)
    const open = screen.getByRole('button', { name: letter.sealed.openLabel })
    await user.tripleClick(open)
    const sealed = screen.queryByRole('button', { name: letter.sealed.openLabel })
    const paper = screen.queryByRole('article')
    expect(Boolean(sealed)).not.toBe(Boolean(paper))
  })
})
