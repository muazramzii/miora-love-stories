import { useState } from 'react'
import Button from '../../components/ui/Button'
import { sampleStory } from '../../data/sampleStory'
import './HeroSection.css'

export default function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false)
  const { hero } = sampleStory

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{sampleStory.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {sampleStory.headline}
          </h1>
          <p className="hero__partners">{sampleStory.partners}</p>
          <p className="hero__intro">{sampleStory.intro}</p>
          <p className="hero__date">{sampleStory.anniversary}</p>
          <div className="hero__actions">
            <Button href="#letter">Read our story</Button>
          </div>
        </div>

        <figure className="hero__media">
          <div className="hero__frame">
            {imageFailed ? (
              <div className="hero__fallback" role="img" aria-label={hero.alt} />
            ) : (
              <img
                className="hero__image"
                src={hero.src}
                alt={hero.alt}
                width={1200}
                height={724}
                fetchPriority="high"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
          <figcaption className="hero__credit">{hero.credit}</figcaption>
        </figure>
      </div>
    </section>
  )
}
