/*
 * TEMPORARY placeholder photography (Unsplash, free under the Unsplash License).
 * Every image used by the site is referenced from here only, so replacing a photo
 * means editing one line. Verify licences / swap for real photos before a public
 * portfolio deployment. Credits are also listed in the README.
 */
const build = (id: string, width: number, quality: number) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=${quality}&w=${width}&auto=format&fit=crop`

type Placeholder = { id: string; credit: string }

const sources = {
  tuscanRoad: { id: '1518098268026-4e89f1a2cd8e', credit: 'Luca Micheli' },
  stoneAlley: { id: '1719921220054-722018f84442', credit: 'Rafael Garcin' },
  picnic: { id: '1760915170446-9c5b0b67b6e2', credit: 'Redd Francisco' },
  cafeCups: { id: '1635956541203-4625130f761f', credit: 'Sixteen Miles Out' },
  balconyCoffee: { id: '1757840621498-87169d06d79e', credit: 'Duc Van' },
  goldenHands: { id: '1755884684493-16b21f4adf96', credit: 'Aurela Redenica' },
} satisfies Record<string, Placeholder>

export type ImageKey = keyof typeof sources

/** Returns a sized Unsplash URL for a registered placeholder. */
export function imageUrl(key: ImageKey, width = 1200, quality = 72): string {
  return build(sources[key].id, width, quality)
}

export const imageCredits: { key: ImageKey; credit: string }[] = (Object.keys(sources) as ImageKey[]).map(
  (key) => ({ key, credit: sources[key].credit }),
)
