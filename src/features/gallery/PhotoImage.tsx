import { useState } from 'react'

type PhotoImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/** An image with a quiet fallback panel if the file fails to load. */
export default function PhotoImage({ src, alt, className, loading = 'lazy' }: PhotoImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`photo-fallback ${className ?? ''}`} role="img" aria-label={alt} />
  }

  return <img className={className} src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />
}
