import { useCallback, useRef, useState } from 'react'
import SectionHeading from '../../components/ui/SectionHeading'
import { loveStory } from '../../data/loveStory'
import Lightbox from './Lightbox'
import PhotoImage from './PhotoImage'
import './Gallery.css'

export default function GallerySection() {
  const { gallery } = loveStory
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setActiveIndex(null)
    openerRef.current?.focus()
  }, [])

  const hasActive = activeIndex !== null && activeIndex >= 0 && activeIndex < gallery.length

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <hr className="divider" />
        <div className="section__inner">
          <SectionHeading
            id="gallery-title"
            eyebrow="Little keepsakes"
            title="Memories we keep"
            lede="Select a photo to see it larger."
            center
          />

          {gallery.length === 0 ? (
            <p className="gallery__empty">No memories have been added yet.</p>
          ) : (
            <ul className="gallery">
              {gallery.map((photo, index) => (
                <li key={photo.id} className="gallery__item">
                  <button
                    type="button"
                    className="gallery__button"
                    aria-label={`View larger: ${photo.caption}`}
                    onClick={(event) => {
                      openerRef.current = event.currentTarget
                      setActiveIndex(index)
                    }}
                  >
                    <PhotoImage className="gallery__image" src={photo.src} alt={photo.alt} />
                  </button>
                  <p className="gallery__caption">{photo.caption}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {hasActive && (
        <Lightbox photos={gallery} index={activeIndex} onClose={close} onIndexChange={setActiveIndex} />
      )}
    </section>
  )
}
