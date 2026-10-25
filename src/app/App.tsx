import Navigation from '../components/layout/Navigation'
import BottomNav from '../components/layout/BottomNav'
import Footer from '../components/layout/Footer'
import HeroSection from '../features/hero/HeroSection'
import LoveLetter from '../features/love-letter/LoveLetter'
import TimelineSection from '../features/timeline/TimelineSection'
import GallerySection from '../features/gallery/GallerySection'
import ClosingSection from '../features/closing/ClosingSection'
import { sections } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import './app.css'

const sectionIds = sections.map((section) => section.id)

export default function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation activeId={activeId} />
      <main id="main">
        <div id="top" />
        <HeroSection />
        <div className="chapter-divider" aria-hidden="true" />
        <LoveLetter />
        <div className="chapter-divider" aria-hidden="true" />
        <TimelineSection />
        <div className="chapter-divider" aria-hidden="true" />
        <GallerySection />
        <ClosingSection />
      </main>
      <Footer />
      <BottomNav activeId={activeId} />
    </>
  )
}
