import { useState } from 'react'
import Button from '../../components/ui/Button'
import { loveStory } from '../../data/loveStory'
import { formatDate } from '../../utils/formatDate'
import './HeroSection.css'

export default function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false)
  const { hero, partnerNames, anniversaryDate } = loveStory

  return (
    <section id="our-story" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.headline}
          </h1>
          <p className="hero__partners">{partnerNames[0]} &amp; {partnerNames[1]}</p>
          <p className="hero__intro">{hero.intro}</p>
          <p className="hero__date">Together since {formatDate(anniversaryDate)}</p>
          <div className="hero__actions">
            <Button href="#the-letter">Read our story</Button>
          </div>
        </div>

        <figure className="hero__media">
          <div className="hero__frame">
            {imageFailed ? (
              <div className="hero__fallback" role="img" aria-label={hero.image.alt} />
            ) : (
              <img
                className="hero__image"
                src={hero.image.src}
                alt={hero.image.alt}
                width={1200}
                height={724}
                fetchPriority="high"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
          <figcaption className="hero__credit">{hero.image.credit}</figcaption>
        </figure>
      </div>
    </section>
  )
}
