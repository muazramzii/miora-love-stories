import type { LoveStory } from '../types/loveStory'

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
  anniversaryDate: '2021-02-14',

  hero: {
    eyebrow: 'A story made with love',
    headline: 'Our little story',
    intro: 'Every quiet morning, every shared laugh, kept in one small place just for the two of us.',
    image: {
      src: photo('1755884684493-16b21f4adf96'),
      alt: 'Two hands reaching toward each other, silhouetted against a golden sunset by the water',
      credit: 'Photo: Aurela Redenica / Unsplash',
    },
  },

  letterTitle: 'To the one who stayed',
  letterBody: [
    'I still remember how quiet the café was the day we met, and how loud my heart felt. I did not know then that an ordinary afternoon could quietly become the beginning of everything.',
    'You have a way of making small things feel like occasions: a shared umbrella, a late supper, a song hummed off-key while the kettle boils. Somehow those are the moments I hold closest.',
    'Thank you for your patience on my difficult days and your laughter on my good ones. Whatever comes next, I would like to walk through it beside you.',
  ],
  letterSignOff: 'Always yours, Adam',

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
