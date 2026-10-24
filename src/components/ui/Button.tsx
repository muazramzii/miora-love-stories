import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

type CommonProps = {
  variant?: Variant
  small?: boolean
  children: ReactNode
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

function classes(variant: Variant, small?: boolean, extra?: string) {
  return ['btn', `btn--${variant}`, small ? 'btn--small' : '', extra ?? ''].filter(Boolean).join(' ')
}

/** Renders a link when `href` is given, otherwise a real button. */
export default function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = 'primary', small, children, className, ...rest } = props

  if ('href' in props && props.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a {...anchorProps} className={classes(variant, small, className)}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" {...buttonProps} className={classes(variant, small, className)}>
      {children}
    </button>
  )
}
