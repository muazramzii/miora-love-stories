import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently under the reading line near the top of the
 * viewport. Falls back to the first id where IntersectionObserver is unavailable.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sectionIds = key.split('|')
    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const current = sectionIds.find((id) => visible.has(id))
        if (current) setActive(current)
      },
      // A thin band around 35% down the viewport acts as the "reading line".
      { rootMargin: '-35% 0px -64% 0px' },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [key])

  return active
}
