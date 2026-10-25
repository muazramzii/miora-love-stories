import SectionHeading from '../../components/ui/SectionHeading'
import { loveStory } from '../../data/loveStory'
import './TimelineSection.css'

export default function TimelineSection() {
  const { timeline } = loveStory

  return (
    <section id="milestones" className="section" aria-labelledby="timeline-title">
      <div className="container">
        <hr className="divider" />
        <div className="section__inner">
          <SectionHeading
            id="timeline-title"
            eyebrow="Our journey"
            title="The moments in between"
            center
          />

          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.id} className="timeline__item">
                <p className="timeline__date">{item.date}</p>
                <div className="timeline__body">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__text">{item.description}</p>
                  {item.image && (
                    <img
                      className="timeline__image"
                      src={item.image}
                      alt={item.imageAlt ?? ''}
                      width={900}
                      height={600}
                      loading="lazy"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
