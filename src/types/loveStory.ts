export interface TimelineChapter {
  id: string
  chapter: string
  date: string
  title: string
  description: string
  place: string
  icon: 'coffee' | 'compass' | 'sunset' | 'heart'
  /** Optional: a chapter without a photo still renders cleanly. */
  image?: { src: string; alt: string }
  fragment?: string
  caption?: string
}

export interface TimelineContent {
  eyebrow: string
  title: string
  subtitle: string
  chapters: TimelineChapter[]
}

export interface GalleryPlate {
  id: string
  /** e.g. "Plate 01" */
  plate: string
  place: string
  title: string
  /** Longer description shown in the lightbox. */
  detail: string
  /** Shown in the mobile lightbox, e.g. "October 2021". */
  date: string
  /** "wide" is landscape (16:10), "tall" is portrait (4:5) in the editorial grid. */
  shape: 'wide' | 'tall'
  src: string
  alt: string
}

export interface GalleryContent {
  eyebrow: string
  title: string
  subtitle: string
  plates: GalleryPlate[]
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
  timeline: TimelineContent
  gallery: GalleryContent
  closingTitle: string
  closingMessage: string
}
