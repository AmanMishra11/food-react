import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">GeekFoods</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet
              nisi tempor at.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon">📘</span>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">📷</span>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">🔗</span>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/menu" className="footer-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="/restaurants" className="footer-link">
                  Restaurants
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="/terms" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="footer-link">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Contact</h3>
            <address className="footer-address">
              <p>123 Food Street</p>
              <p>Foodville, FD 12345</p>
              <p className="mt-3">Email: info@geekfoods.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GeekFoods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
