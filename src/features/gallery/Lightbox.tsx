import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from '../../components/ui/Icon'
import type { GalleryPlate } from '../../types/loveStory'
import PhotoImage from './PhotoImage'

type LightboxProps = {
  plates: GalleryPlate[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

const SWIPE_DISTANCE = 50

export default function Lightbox({ plates, index, onClose, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)
  const count = plates.length
  const plate = plates[index]

  const go = (step: number) => onIndexChange((index + step + count) % count)

  // Lock background scroll while open, and restore it on close. Padding offsets the
  // vanishing scrollbar so the page behind does not jump sideways.
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style
    const root = document.documentElement
    const scrollbar = root.clientWidth > 0 ? Math.max(0, window.innerWidth - root.clientWidth) : 0
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [])

  // Keyboard: Escape closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft' && count > 1) {
        onIndexChange((index - 1 + count) % count)
      } else if (event.key === 'ArrowRight' && count > 1) {
        onIndexChange((index + 1) % count)
      } else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement
        if (event.shiftKey && active === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && active === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [index, count, onClose, onIndexChange])

  if (!plate) return null

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0].clientX
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || count < 2) return
        const delta = event.changedTouches[0].clientX - touchStartX.current
        touchStartX.current = null
        if (delta <= -SWIPE_DISTANCE) go(1)
        else if (delta >= SWIPE_DISTANCE) go(-1)
      }}
    >
      <div className="lightbox__panel">
        <div className="lightbox__top">
          <div className="lightbox__meta" aria-hidden="true">
            <span className="lightbox__date">{plate.date}</span>
            <span className="lightbox__count">
              {index + 1} of {count}
            </span>
          </div>
          <button ref={closeRef} type="button" className="lightbox__close" aria-label="Close" onClick={onClose}>
            <Icon name="close" size={24} />
          </button>
        </div>

        <figure className="lightbox__figure">
          <div className="lightbox__stage">
            <PhotoImage key={plate.id} className="lightbox__image" src={plate.src} alt={plate.alt} loading="eager" />
          </div>
          {/* Live region: screen readers hear the new plate and position after Previous/Next */}
          <figcaption className="lightbox__caption" aria-live="polite">
            <span className="lightbox__plate">
              {plate.plate} // {plate.title}
            </span>
            <span className="lightbox__detail">{plate.detail}</span>
            <span className="sr-only">
              {index + 1} of {count}
            </span>
          </figcaption>
        </figure>

        {count > 1 && (
          <div className="lightbox__controls">
            <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={() => go(-1)}>
              <Icon name="arrow-left" size={18} />
              <span>Previous</span>
            </button>
            <span className="lightbox__dot" aria-hidden="true" />
            <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={() => go(1)}>
              <span>Next</span>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
