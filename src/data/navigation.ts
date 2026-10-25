import type { IconName } from '../components/ui/Icon'

export interface NavSection {
  id: string
  /** Label in the header navigation. */
  label: string
}

/** Page order. These ids must exist as section ids in the page. */
export const sections: NavSection[] = [
  { id: 'our-story', label: 'Our Story' },
  { id: 'the-letter', label: 'The Letter' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'closing', label: 'Closing' },
]

export interface TabItem {
  id: string
  label: string
  icon: IconName
}

/** Mobile bottom tab bar, in the approved order. */
export const tabs: TabItem[] = [
  { id: 'our-story', label: 'Story', icon: 'story' },
  { id: 'milestones', label: 'Timeline', icon: 'timeline' },
  { id: 'gallery', label: 'Keepsakes', icon: 'keepsakes' },
  { id: 'the-letter', label: 'Letters', icon: 'letters' },
]
