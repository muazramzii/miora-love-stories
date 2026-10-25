import { useCallback, useRef, useState } from 'react'
import Icon from '../../components/ui/Icon'
import { loveStory } from '../../data/loveStory'
import Lightbox from './Lightbox'
import PhotoImage from './PhotoImage'
import './Gallery.css'

export default function GallerySection() {
  const { gallery } = loveStory
  const { plates } = gallery
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setActiveIndex(null)
    openerRef.current?.focus()
  }, [])

  const hasActive = activeIndex !== null && activeIndex >= 0 && activeIndex < plates.length

  return (
    <section id="gallery" className="gallery band" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery__header">
          <div>
            <span className="eyebrow">{gallery.eyebrow}</span>
            <h2 id="gallery-title" className="gallery__title">
              {gallery.title}
            </h2>
            <p className="gallery__lede">{gallery.subtitle}</p>
          </div>
          <p className="gallery__count">
            Plate Collection // {plates.length} Selected {plates.length === 1 ? 'Exposure' : 'Exposures'}
          </p>
        </header>

        {plates.length === 0 ? (
          <p className="gallery__empty">No memories have been added yet.</p>
        ) : (
          <ul className="plates">
            {plates.map((plate, index) => (
              <li key={plate.id} className={`plate plate--${plate.shape}`}>
                <button
                  type="button"
                  className="plate__open"
                  aria-label={`View larger: ${plate.title}`}
                  onClick={(event) => {
                    openerRef.current = event.currentTarget
                    setActiveIndex(index)
                  }}
                >
                  <span className="plate__frame">
                    <PhotoImage className="plate__image" src={plate.src} alt={plate.alt} />
                    <span className="plate__zoom" aria-hidden="true">
                      <Icon name="zoom" size={30} />
                    </span>
                  </span>
                </button>
                <p className="plate__caption">
                  <span className="plate__label">
                    {plate.plate}
                    <span className="plate__place"> • {plate.place}</span>
                  </span>
                  <span className="plate__title italic-serif">{plate.title}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasActive && (
        <Lightbox plates={plates} index={activeIndex} onClose={close} onIndexChange={setActiveIndex} />
      )}
    </section>
  )
}
