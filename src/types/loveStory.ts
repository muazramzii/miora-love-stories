export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  image?: string
  /** Required when `image` is set. */
  imageAlt?: string
}

export interface MemoryPhoto {
  id: string
  src: string
  alt: string
  caption: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  intro: string
  image: {
    src: string
    alt: string
    credit: string
  }
}

export interface LoveStory {
  partnerNames: [string, string]
  keepsakeNumber: string
  footer: { tagline: string; note: string }
  /** ISO date (YYYY-MM-DD). */
  anniversaryDate: string
  hero: HeroContent
  letterTitle: string
  letterBody: string[]
  letterSignOff: string
  timeline: TimelineItem[]
  gallery: MemoryPhoto[]
  closingTitle: string
  closingMessage: string
}
