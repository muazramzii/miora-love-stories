import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import './Navigation.css'

const links = [
  { href: '#letter', label: 'Letter' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#gallery', label: 'Memories' },
  { href: '#closing', label: 'Closing' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__bar">
        <a className="nav__brand" href="#top" onClick={close}>
          Miora Love Stories
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-menu"
          aria-label="Primary"
          className={open ? 'nav__menu nav__menu--open' : 'nav__menu'}
        >
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#letter" variant="secondary" small onClick={close}>
            Explore our story
          </Button>
        </nav>
      </div>
    </header>
  )
}
