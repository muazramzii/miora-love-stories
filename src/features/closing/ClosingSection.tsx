import Icon from '../../components/ui/Icon'
import { loveStory } from '../../data/loveStory'
import './ClosingSection.css'

export default function ClosingSection() {
  const { closing } = loveStory

  return (
    <section id="closing" className="closing" aria-labelledby="closing-title">
      <div className="container closing__inner">
        <span className="closing__badge" aria-hidden="true">
          <Icon name="heart" size={24} />
        </span>
        <span className="eyebrow">{closing.eyebrow}</span>
        <h2 id="closing-title" className="closing__title">
          {closing.title}
        </h2>
        <blockquote className="closing__quote">{closing.quote}</blockquote>
        <p className="closing__monogram">
          <span className="closing__rule" aria-hidden="true" />
          <span>{closing.monogram}</span>
          <span className="closing__rule" aria-hidden="true" />
        </p>
        <a className="btn btn--soft closing__back" href="#top">
          <Icon name="arrow-up" size={16} />
          <span>{closing.backLabel}</span>
        </a>
        <p className="closing__dedication">{closing.dedication}</p>
      </div>
    </section>
  )
}
