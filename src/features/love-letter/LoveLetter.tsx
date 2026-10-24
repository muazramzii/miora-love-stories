import { useState } from 'react'
import SectionHeading from '../../components/ui/SectionHeading'
import { loveStory } from '../../data/loveStory'
import './LoveLetter.css'

export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  const { letterTitle, letterBody, letterSignOff, partnerNames } = loveStory

  return (
    <section id="letter" className="section" aria-labelledby="letter-title">
      <div className="container">
        <hr className="divider" />
        <div className="section__inner">
          <SectionHeading
            id="letter-title"
            eyebrow="A letter for you"
            title={letterTitle}
            lede="Something written slowly, kept just for you."
            center
          />

          <div className="letter">
            <button
              type="button"
              className={open ? 'envelope envelope--open' : 'envelope'}
              aria-expanded={open}
              aria-controls="letter-body"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="envelope__to">For {partnerNames[0]}</span>
              <span className="envelope__action">{open ? 'Close the letter' : 'Open the letter'}</span>
            </button>

            <div id="letter-body" role="region" aria-label={letterTitle}>
              {open && (
                <article className="letter__paper">
                  {letterBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="letter__signoff">{letterSignOff}</p>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
