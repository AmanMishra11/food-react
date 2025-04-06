"use client"

import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              <span className="logo-text">GeekFoods</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="desktop-nav">
            <a href="/" className="nav-link active">
              Home
            </a>
            <a href="/quote" className="nav-link">
              Quote
            </a>
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

          <div className="desktop-cta">
            <a href="/login" className="cta-button">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <span className="icon-close">✕</span> : <span className="icon-menu">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a href="/" className="mobile-nav-link active">
              Home
            </a>
            <a href="/quote" className="mobile-nav-link">
              Quote
            </a>
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

