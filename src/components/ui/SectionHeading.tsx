type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  lede?: string
  center?: boolean
}

export default function SectionHeading({ id, eyebrow, title, lede, center }: SectionHeadingProps) {
  return (
    <header className={center ? 'section-heading section-heading--center' : 'section-heading'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {lede && <p className="section-heading__lede">{lede}</p>}
    </header>
  )
}
