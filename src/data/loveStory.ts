import type { LoveStory } from '../types/loveStory'
import { imageUrl } from './images'

/*
 * Fictional sample content for the portfolio demo. Not real people.
 * Edit this file to change names, dates, the letter, the timeline,
 * the gallery and the closing message.
 *
 * Photos are temporary Unsplash placeholders registered in ./images.ts;
 * credits are listed in the README.
 */
export const loveStory: LoveStory = {
  partnerNames: ['Alya', 'Adam'],
  keepsakeNumber: 'No. 12',
  footer: {
    tagline: 'A quiet digital sanctuary and keepsake monograph crafted to hold moments, letters, and memory.',
    note: 'Bound with care & bespoke grace',
  },

  hero: {
    badge: 'A Bespoke Keepsake',
    dateline: 'October 14, 2021 — Three Years of Forever',
    title: 'Our Little Story',
    subtitle: 'A celebration of ordinary moments made extraordinary together.',
    callout: {
      label: 'Chapter I • Genesis',
      quote:
        '“Here is a gentle space carved out of time, holding the laughter we shared in quiet alleys, the promises spoken in whispers, and every small chapter that brought us here.”',
      signature: 'A & A',
    },
    location: { label: 'Location', value: 'Florence & Chianti, Tuscany' },
    memory: {
      label: 'Archived Memory',
      title: 'Golden Hour in the Hills',
      text: 'A reminder that love is not counted by days, but by the quiet peace felt when hands find each other naturally.',
      note: 'Preserved forever',
    },
    cta: 'Read The Love Letter',
    portrait: {
      src: imageUrl('tuscanRoad', 1000),
      alt: 'A winding road lined with cypress trees across rolling Tuscan hills under a glowing orange and pink sunset',
      tag: 'Keepsake Edition',
      place: 'Tuscany, Autumn',
      plate: 'Plate 01 // Memory Folio',
    },
  },

  letter: {
    eyebrow: 'Archival Document • Private Correspondence',
    title: 'The Sealed Letter',
    subtitle: 'A sacred note handwritten for the three-year milestone',
    sealed: {
      monogram: 'A&A',
      label: 'Strictly Confidential',
      to: 'To My Dearest Alya',
      text: 'This envelope was sealed on October 14, 2024. Break the seal to unveil Adam’s reflections on the past three years.',
      openLabel: 'Break Seal & Read',
    },
    paper: {
      folio: 'Keepsake Monograph No. 12',
      date: 'October 14, 2024',
      greeting: 'Alya,',
      heading: 'To the One Who Holds My Heart',
      paragraphs: [
        'I remember with startling clarity the rain that fell across the cafe awnings three years ago today. You were shaking raindrops from your hair, laughing at the unexpected deluge, and right in that sudden, unchoreographed second, the world seemed to grow quiet and true.',
        'These thirty-six months together have taught me that love isn’t grand declarations made from mountaintops; it lives quietly in the shared morning coffees, in your hand resting in mine across small bistro tables, and in the unspoken glances that tell me everything will be gentle and warm.',
        'Thank you for being my haven and my greatest inspiration. Wherever our path wanders in the years waiting ahead—through ancient cobblestones or quiet sunlit hills—my heart will always find its compass in you.',
      ],
      signoff: 'Bound in devotion,',
      signature: 'Adam',
      foldLabel: 'Fold & Reseal Letter',
    },
  },

  timeline: {
    eyebrow: 'Chronicles of Love',
    title: 'The Chapters of Us',
    subtitle: 'Every step, every turn, every glance that led us home.',
    chapters: [
      {
        id: 'the-day-we-met',
        chapter: 'Chapter 01',
        date: 'October 14, 2021',
        title: 'The Day We Met',
        description:
          'A gentle drizzle blanketed the cobblestones outside the cafe. We shared an umbrella, two cappuccinos with speckled ceramic mugs, and conversation that lasted until the cafe chairs were stacked for the evening.',
        place: 'Piazza Della Signoria',
        icon: 'coffee',
        image: {
          src: imageUrl('cafeCups', 900),
          alt: 'White coffee cups on a wooden cafe table beside a soft, bright window',
        },
        fragment: 'Memory Fragment I',
        caption: '“Where forever began”',
      },
      {
        id: 'our-first-journey',
        chapter: 'Chapter 02',
        date: 'December 24, 2021',
        title: 'Our First Journey',
        description:
          'Getting happily lost inside ancient sun-bleached archways. With cold fingers woven together and wind carrying the smell of fresh woodsmoke, we realized home was no longer a place, but a person.',
        place: 'Southern Tuscany Roadtrip',
        icon: 'compass',
        image: {
          src: imageUrl('stoneAlley', 900),
          alt: 'A narrow stone alley between old buildings, leading toward a small wooden door',
        },
        fragment: 'Memory Fragment II',
        caption: 'Pienza, Evening',
      },
      {
        id: 'a-golden-summer-sunset',
        chapter: 'Chapter 03',
        date: 'July 19, 2023',
        title: 'A Golden Summer Sunset',
        description:
          'A woolen blanket spread on the rolling hillside overlooking the distant shimmering valley. With bread, wine, and endless laughter, we watched the sky melt into violet and gold, dreaming about our next fifty years.',
        place: 'Val d’Orcia Ridge',
        icon: 'sunset',
        image: {
          src: imageUrl('picnic', 900),
          alt: 'A wicker picnic basket with rosé wine and glasses resting on a cream blanket',
        },
        fragment: 'Memory Fragment III',
        caption: 'Sundown at the Ridge',
      },
      {
        id: 'three-years-and-beyond',
        chapter: 'Chapter 04',
        date: 'October 14, 2024',
        title: 'Three Years & Beyond',
        description:
          'One thousand and ninety-six days of choosing you each morning. As we reflect on our path, we celebrate not just what we have experienced, but the vast, beautiful tapestry yet waiting to be woven.',
        place: 'An Infinite Horizon',
        icon: 'heart',
        image: {
          src: imageUrl('goldenHands', 900),
          alt: 'Two hands reaching toward each other, silhouetted against a golden sunset by the water',
        },
        fragment: 'Memory Fragment IV',
        caption: 'October 14, 2024',
      },
    ],
  },

  gallery: {
    eyebrow: 'Preserved Visual Monograph',
    title: 'Glimpses of Light',
    subtitle: 'Click any keepsake photograph to inspect the archival plate',
    plates: [
      {
        id: 'plate-01',
        plate: 'Plate 01',
        place: 'Golden Hour in Chianti',
        title: 'Autumn Walk',
        detail: 'Golden hour through the Chianti olive groves, Tuscany',
        date: 'October 2021',
        shape: 'wide',
        src: imageUrl('tuscanRoad', 1400),
        alt: 'A winding road lined with cypress trees across rolling Tuscan hills under a glowing orange and pink sunset',
      },
      {
        id: 'plate-02',
        plate: 'Plate 02',
        place: 'Hand in Hand',
        title: 'Quiet Morning',
        detail: 'Hand in hand over cappuccinos, Piazza Della Signoria',
        date: 'November 2021',
        shape: 'tall',
        src: imageUrl('balconyCoffee', 1000),
        alt: 'Two small cups of coffee on a round table on a balcony, with green leaves behind',
      },
      {
        id: 'plate-03',
        plate: 'Plate 03',
        place: 'Wandering Florence',
        title: 'Alleyways of Joy',
        detail: 'Afternoon stroll down warm cobblestone streets of Pienza',
        date: 'June 2022',
        shape: 'tall',
        src: imageUrl('stoneAlley', 1000),
        alt: 'A narrow stone alley between old buildings, leading toward a small wooden door',
      },
      {
        id: 'plate-04',
        plate: 'Plate 04',
        place: 'Sunset Picnic',
        title: 'Summer Horizon',
        detail: 'Picnic sunset along the panoramic ridge of Val d’Orcia',
        date: 'September 2023',
        shape: 'wide',
        src: imageUrl('picnic', 1400),
        alt: 'A wicker picnic basket with rosé wine and glasses resting on a cream blanket',
      },
    ],
  },

  closing: {
    eyebrow: 'Closing Inscription',
    title: 'To a Lifetime of Small Wonders',
    quote:
      '“Thank you for being my anchor, my sweetest adventure, and my favorite reason to smile. I choose you yesterday, today, and for all our tomorrows.”',
    monogram: 'A & A',
    backLabel: 'Return to Beginning',
    dedication: 'Miora Love Stories • A bespoke digital keepsake crafted with devotion for Alya & Adam',
  },
}
