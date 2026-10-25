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
  /** Small pill shown above the title on mobile. */
  badge: string
  dateline: string
  title: string
  subtitle: string
  callout: { label: string; quote: string; signature: string }
  location: { label: string; value: string }
  memory: { label: string; title: string; text: string; note: string }
  cta: string
  portrait: {
    src: string
    alt: string
    tag: string
    place: string
    plate: string
  }
}

export interface LetterContent {
  eyebrow: string
  title: string
  subtitle: string
  sealed: {
    monogram: string
    label: string
    to: string
    text: string
    openLabel: string
  }
  paper: {
    folio: string
    date: string
    greeting: string
    heading: string
    paragraphs: string[]
    signoff: string
    signature: string
    foldLabel: string
  }
}

export interface LoveStory {
  partnerNames: [string, string]
  keepsakeNumber: string
  footer: { tagline: string; note: string }
  hero: HeroContent
  letter: LetterContent
  timeline: TimelineItem[]
  gallery: MemoryPhoto[]
  closingTitle: string
  closingMessage: string
}
