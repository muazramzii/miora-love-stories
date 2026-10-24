import Button from '../../components/ui/Button'
import { loveStory } from '../../data/loveStory'
import './ClosingSection.css'

export default function ClosingSection() {
  const { closingTitle, closingMessage, partnerNames } = loveStory

  return (
    <section id="closing" className="section" aria-labelledby="closing-title">
      <div className="container">
        <hr className="divider" />
        <div className="section__inner closing">
          <p className="eyebrow">{partnerNames[0]} &amp; {partnerNames[1]}</p>
          <h2 id="closing-title" className="closing__title">
            {closingTitle}
          </h2>
          <p className="closing__message">{closingMessage}</p>
          <Button href="#top" variant="secondary">
            Back to top
          </Button>
        </div>
      </div>
    </section>
  )
}
