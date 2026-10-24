import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <hr className="divider" />
        <div className="footer__inner">
          <div>
            <p className="footer__brand">Miora Love Stories</p>
            <p className="footer__tagline">A little place for your love story.</p>
          </div>
          <div className="footer__meta">
            <p>Made with love</p>
            <p>&copy; {new Date().getFullYear()} Miora Studio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
