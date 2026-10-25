import { useEffect, useRef, useState } from 'react'
import Icon from '../../components/ui/Icon'
import { loveStory } from '../../data/loveStory'
import './LoveLetter.css'

export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  const { letter } = loveStory
  const { sealed, paper } = letter
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const paperRef = useRef<HTMLElement>(null)
  const hasInteracted = useRef(false)

  // Move focus to the new state after the swap so keyboard users are not left behind.
  useEffect(() => {
    if (!hasInteracted.current) return
    if (open) paperRef.current?.focus()
    else openButtonRef.current?.focus()
  }, [open])

  const toggle = () => {
    hasInteracted.current = true
    setOpen((value) => !value)
  }

  return (
    <section id="the-letter" className="letter band" aria-labelledby="letter-title">
      <div className="letter__inner">
        <header className="letter__header">
          <span className="eyebrow">{letter.eyebrow}</span>
          <h2 id="letter-title" className="letter__title">
            {letter.title}
          </h2>
          <p className="letter__subtitle">{letter.subtitle}</p>
        </header>

        <div id="letter-body" className="letter__stage">
          {open ? (
            <article ref={paperRef} className="paper" tabIndex={-1} aria-label={paper.heading}>
              <div className="paper__top">
                <span className="paper__folio">
                  <Icon name="bookmark" size={18} />
                  <span>{paper.folio}</span>
                </span>
                <span className="paper__date">{paper.date}</span>
              </div>

              <div className="paper__letterhead">
                <span className="paper__greeting">{paper.greeting}</span>
                <span className="paper__rule" aria-hidden="true" />
                <h3 className="paper__heading">{paper.heading}</h3>
              </div>

              <div className="paper__body">
                {paper.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="paper__foot">
                <div>
                  <span className="paper__signoff">{paper.signoff}</span>
                  <span className="paper__signature">{paper.signature}</span>
                </div>
                <button
                  type="button"
                  className="btn btn--soft paper__fold"
                  aria-expanded={true}
                  aria-controls="letter-body"
                  onClick={toggle}
                >
                  <Icon name="mailbox" size={16} />
                  <span>{paper.foldLabel}</span>
                </button>
              </div>
            </article>
          ) : (
            <div className="seal-card" onClick={toggle}>
              <div className="seal" aria-hidden="true">
                <span className="seal__wax">{sealed.monogram}</span>
              </div>
              <span className="seal-card__label">{sealed.label}</span>
              <h3 className="seal-card__to">{sealed.to}</h3>
              <p className="seal-card__text">{sealed.text}</p>
              <button
                ref={openButtonRef}
                type="button"
                className="btn btn--primary seal-card__open"
                aria-expanded={false}
                aria-controls="letter-body"
                onClick={(event) => {
                  event.stopPropagation()
                  toggle()
                }}
              >
                <Icon name="mail-open" size={16} />
                <span>{sealed.openLabel}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
