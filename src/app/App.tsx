import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import SectionHeading from '../components/ui/SectionHeading'
import HeroSection from '../features/hero/HeroSection'
import './app.css'
import '../styles/responsive.css'

/* Temporary markers: these sections are built in later phases. */
const upcomingSections = [
  { id: 'letter', title: 'The love letter' },
  { id: 'timeline', title: 'Our timeline' },
  { id: 'gallery', title: 'Memories' },
  { id: 'closing', title: 'Closing message' },
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <div id="top" />
        <HeroSection />
        {upcomingSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="section placeholder-section"
            aria-labelledby={`${section.id}-title`}
          >
            <hr className="divider placeholder-section__rule" />
            <div className="container">
              <SectionHeading
                id={`${section.id}-title`}
                eyebrow="Placeholder"
                title={section.title}
                center
              />
              <p className="placeholder-section__label">Coming in a later phase</p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
