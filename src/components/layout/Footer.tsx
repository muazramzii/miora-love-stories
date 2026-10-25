import { loveStory } from '../../data/loveStory'
import './Footer.css'

export default function Footer() {
  const { footer } = loveStory

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__rule" aria-hidden="true" />
          <span className="footer__name">Miora</span>
          <span className="footer__rule" aria-hidden="true" />
        </div>
        <p className="footer__tagline">{footer.tagline}</p>
        <div className="footer__meta">
          <p>&copy; {new Date().getFullYear()} Miora Love Stories. All rights reserved.</p>
          <span className="footer__dot" aria-hidden="true">
            &bull;
          </span>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  )
}
