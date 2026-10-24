import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { MemoryPhoto } from '../../types/loveStory'
import PhotoImage from './PhotoImage'

type LightboxProps = {
  photos: MemoryPhoto[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function Lightbox({ photos, index, onClose, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = photos.length
  const photo = photos[index]

  const go = (step: number) => onIndexChange((index + step + count) % count)

  // Lock background scroll while open, and restore it on close.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
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

  if (!photo) return null

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${photo.caption}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose}>
        Close
      </button>

      <figure className="lightbox__figure">
        <PhotoImage key={photo.id} className="lightbox__image" src={photo.src} alt={photo.alt} loading="eager" />
        <figcaption className="lightbox__caption">
          {photo.caption}
          <span className="lightbox__count" aria-live="polite">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>

      {count > 1 && (
        <div className="lightbox__nav">
          <button type="button" className="lightbox__btn" onClick={() => go(-1)} aria-label="Previous photo">
            Previous
          </button>
          <button type="button" className="lightbox__btn" onClick={() => go(1)} aria-label="Next photo">
            Next
          </button>
        </div>
      )}
    </div>,
    document.body,
  )
}
