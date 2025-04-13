
import { useState } from "react"
import { Link } from "react-router-dom" 
import "./Navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">GeekFoods</span>
            </Link>
          </div>

          {}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/quote" className="nav-link">
              Quote
            </Link>
            {}
            <a href="/restaurants" className="nav-link">
              Restaurants
            </a>
            <a href="/foods" className="nav-link">
              Foods
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </nav>

          {}
          {}
        </div>
      </div>

      {}
      <button
        className="menu-toggle-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>
      
      {}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link to="/" className="mobile-nav-link active">
              Home
            </Link>
            <Link to="/quote" className="mobile-nav-link">
              Quote
            </Link>
            {}
            <a href="/restaurants" className="mobile-nav-link">
              Restaurants
            </a>
            <a href="/foods" className="mobile-nav-link">
              Foods
            </a>
            <a href="/contact" className="mobile-nav-link">
              Contact
            </a>
            <a href="/login" className="mobile-cta-button">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}