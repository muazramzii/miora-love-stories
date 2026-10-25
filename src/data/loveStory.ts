import type { LoveStory } from '../types/loveStory'
import { imageUrl } from './images'

/*
 * Fictional sample content for the portfolio demo. Not real people.
 * Edit this file to change names, dates, the letter, the timeline,
 * the gallery and the closing message.
 *
 * Photos are free-licence images from Unsplash (Unsplash License);
 * credits are listed in the README.
 */
const photo = (id: string, width = 1200, quality = 75) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=${quality}&w=${width}&auto=format&fit=crop`

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

  timeline: [
    {
      id: 'first-meet',
      date: '14 February 2021',
      title: 'The day we met',
      description: 'A small café, two coffees and a conversation that refused to end.',
    },
    {
      id: 'first-trip',
      date: '9 July 2021',
      title: 'Our first trip together',
      description: 'A slow weekend by the sea, with sandy shoes and sunsets neither of us wanted to leave.',
      image: photo('1635084666136-5d80b782d895', 900),
      imageAlt: 'A quiet beach at sunset with a pair of footprints in the golden sand',
    },
    {
      id: 'first-home',
      date: '3 March 2022',
      title: 'A place of our own',
      description: 'Boxes everywhere, one good lamp, and a promise to make the small flat feel like home.',
    },
    {
      id: 'new-year',
      date: '1 January 2024',
      title: 'A promise at midnight',
      description: 'We counted down together and agreed to keep choosing each other, year after year.',
    },
  ],

  gallery: [
    {
      id: 'balcony-coffee',
      src: photo('1757840621498-87169d06d79e'),
      alt: 'Two small cups of coffee on a round table on a balcony, with green leaves behind',
      caption: 'Slow Sunday mornings',
    },
    {
      id: 'roses',
      src: photo('1771142480968-6036543055f7'),
      alt: 'A bouquet of soft pink and cream roses',
      caption: 'Flowers on an ordinary Tuesday',
    },
    {
      id: 'beach',
      src: photo('1635084666136-5d80b782d895'),
      alt: 'A quiet beach at sunset with footprints in the golden sand',
      caption: 'The evening by the sea',
    },
    {
      id: 'window-cups',
      src: photo('1635956541203-4625130f761f'),
      alt: 'White coffee cups on a wooden table beside a soft, bright window',
      caption: 'Our favourite corner',
    },
    {
      id: 'dunes',
      src: photo('1757924787010-80d15d292726', 800, 45), // fine sand texture compresses poorly: keep it small
      alt: 'Rippled sand with a trail of footprints at sunset',
      caption: 'Wherever the path goes',
    },
    {
      id: 'golden-hour',
      src: photo('1755884684493-16b21f4adf96'),
      alt: 'Two hands reaching toward each other against a golden sunset',
      caption: 'Hand in hand',
    },
  ],

  closingTitle: 'With all my love',
  closingMessage:
    'Thank you for every ordinary day that you turned into a memory. This little place is only a small way of saying: I am so glad it is you.',
}
