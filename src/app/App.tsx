import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import HeroSection from '../features/hero/HeroSection'
import LoveLetter from '../features/love-letter/LoveLetter'
import TimelineSection from '../features/timeline/TimelineSection'
import GallerySection from '../features/gallery/GallerySection'
import ClosingSection from '../features/closing/ClosingSection'
import './app.css'
import '../styles/responsive.css'

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
        <LoveLetter />
        <TimelineSection />
        <GallerySection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}
