import type { SVGProps } from 'react'

/** Lightweight inline icons (stroke style) so no icon font is needed. */
const paths = {
  'arrow-down': <path d="M12 5v14M6 13l6 6 6-6" />,
  'arrow-up': <path d="M12 19V5M6 11l6-6 6 6" />,
  'arrow-left': <path d="M19 12H5M11 6l-6 6 6 6" />,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  flower: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c-1-3-1-5 0-7 1 2 1 4 0 7zM14 12c3-1 5-1 7 0-2 1-4 1-7 0zM12 14c1 3 1 5 0 7-1-2-1-4 0-7zM10 12c-3 1-5 1-7 0 2-1 4-1 7 0z" />
    </>
  ),
  bookmark: <path d="M7 4h10v16l-5-4-5 4z" />,
  'mail-open': (
    <>
      <path d="M3 10l9-6 9 6v9H3z" />
      <path d="M3 10l9 6 9-6" />
    </>
  ),
  mailbox: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="1" />
      <path d="M3 8l9 6 9-6" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M16 10h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  sunset: <path d="M3 18h18M7 18a5 5 0 0 1 10 0M12 5v3M5 9l2 2M19 9l-2 2" />,
  story: (
    <>
      <path d="M5 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H5z" />
      <path d="M19 4h-6v16a2 2 0 0 1 2-2h4z" />
    </>
  ),
  timeline: <path d="M7 4v16M7 8h10M7 16h10M17 6v4M17 14v4" />,
  keepsakes: (
    <>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <path d="M5 9v10h14V9M10 13h4" />
    </>
  ),
  letters: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M21 21l-5-5M11 8v6M8 11h6" />
    </>
  ),
} as const

export type IconName = keyof typeof paths

type IconProps = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName
  size?: number
  /** Provide a label only when the icon conveys meaning by itself. */
  label?: string
}

export default function Icon({ name, size = 18, label, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
