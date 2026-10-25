import { useEffect, useRef, useState } from 'react'
import { sections } from '../../data/navigation'
import { loveStory } from '../../data/loveStory'
import Icon from '../ui/Icon'
import './Navigation.css'

type NavigationProps = {
  activeId: string
}

export default function Navigation({ activeId }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const activeLabel = sections.find((section) => section.id === activeId)?.label ?? sections[0].label

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
    <header className="site-header">
      <div className="site-header__inner">
        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>

        <a className="brand" href="#our-story" onClick={close}>
          <span className="brand__name">Miora</span>
          <span className="brand__tag">Love Stories</span>
          <span className="brand__section" aria-hidden="true">
            {activeLabel}
          </span>
        </a>

        <nav id="site-menu" aria-label="Primary" className={open ? 'site-nav site-nav--open' : 'site-nav'}>
          <ul className="site-nav__list">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className="site-nav__link"
                  href={`#${section.id}`}
                  aria-current={section.id === activeId ? 'location' : undefined}
                  onClick={close}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="site-header__keepsake">Keepsake {loveStory.keepsakeNumber}</span>
      </div>
    </header>
  )
}
