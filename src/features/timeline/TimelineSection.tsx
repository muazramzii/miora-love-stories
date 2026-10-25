import Icon from '../../components/ui/Icon'
import { loveStory } from '../../data/loveStory'
import './TimelineSection.css'

export default function TimelineSection() {
  const { timeline } = loveStory

  return (
    <section id="milestones" className="timeline" aria-labelledby="timeline-title">
      <div className="container">
        <header className="section-heading timeline__header">
          <span className="eyebrow eyebrow--ruled">{timeline.eyebrow}</span>
          <h2 id="timeline-title" className="section-heading__title">
            {timeline.title}
          </h2>
          <p className="section-heading__lede">{timeline.subtitle}</p>
        </header>

        <ol className="chapters">
          {timeline.chapters.map((chapter, index) => (
            <li
              key={chapter.id}
              className={index === timeline.chapters.length - 1 ? 'chapter chapter--last' : 'chapter'}
            >
              <span className="chapter__pin" aria-hidden="true" />

              <div className="chapter__text">
                <p className="chapter__label">
                  {chapter.chapter} • {chapter.date}
                </p>
                <h3 className="chapter__title">{chapter.title}</h3>
                <p className="chapter__description">{chapter.description}</p>
                <p className="chapter__place">
                  <Icon name={chapter.icon} size={16} />
                  <span>{chapter.place}</span>
                </p>
              </div>

              {chapter.image && (
                <figure className="chapter__media">
                  <div className="chapter__mat">
                    <img
                      className="chapter__image"
                      src={chapter.image.src}
                      alt={chapter.image.alt}
                      width={900}
                      height={675}
                      loading="lazy"
                    />
                    {(chapter.fragment || chapter.caption) && (
                      <figcaption className="chapter__caption">
                        <span>{chapter.fragment}</span>
                        <span className="italic-serif chapter__quote">{chapter.caption}</span>
                      </figcaption>
                    )}
                  </div>
                </figure>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
