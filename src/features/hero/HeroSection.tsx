import { useState } from 'react'
import Icon from '../../components/ui/Icon'
import { loveStory } from '../../data/loveStory'
import './HeroSection.css'

export default function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false)
  const { hero, partnerNames } = loveStory
  const couple = `${partnerNames[0]} & ${partnerNames[1]}`

  return (
    <section id="our-story" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__badge">
          <Icon name="sparkle" size={14} />
          <span>{hero.badge}</span>
        </p>
        <p className="hero__dateline">{hero.dateline}</p>
        <h1 id="hero-title" className="hero__title">
          {hero.title}
        </h1>
        <p className="hero__partners">{couple}</p>
        <p className="hero__subtitle">{hero.subtitle}</p>

        <aside className="hero__callout" aria-label={hero.callout.label}>
          <div className="hero__callout-card">
            <p className="label-sm hero__callout-label">{hero.callout.label}</p>
            <blockquote className="hero__quote">{hero.callout.quote}</blockquote>
            <p className="hero__signature">{hero.callout.signature}</p>
          </div>
          <div className="hero__location">
            <span className="eyebrow">{hero.location.label}</span>
            <span>{hero.location.value}</span>
          </div>
        </aside>

        <figure className="hero__portrait">
          <div className="hero__mat">
            <div className="hero__frame">
              {imageFailed ? (
                <div className="hero__fallback" role="img" aria-label={hero.portrait.alt} />
              ) : (
                <img
                  className="hero__image"
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  width={1000}
                  height={750}
                  fetchPriority="high"
                  onError={() => setImageFailed(true)}
                />
              )}
              <div className="hero__scrim" aria-hidden="true" />
              <div className="hero__overlay" aria-hidden="true">
                <span className="hero__tag">{hero.portrait.tag}</span>
                <span className="hero__place">{hero.portrait.place}</span>
              </div>
            </div>
            <figcaption className="hero__plate">
              <span>{hero.portrait.plate}</span>
              <span className="italic-serif hero__plate-names">{couple}</span>
            </figcaption>
          </div>
        </figure>

        <div className="hero__aside">
          <div className="hero__memory">
            <span className="eyebrow">{hero.memory.label}</span>
            <h3 className="hero__memory-title">{hero.memory.title}</h3>
            <p className="hero__memory-text">{hero.memory.text}</p>
            <p className="hero__memory-note">
              <Icon name="flower" size={18} />
              <span>{hero.memory.note}</span>
            </p>
          </div>
          <a className="btn btn--primary btn--block hero__cta" href="#the-letter">
            <span>{hero.cta}</span>
            <Icon name="arrow-down" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
