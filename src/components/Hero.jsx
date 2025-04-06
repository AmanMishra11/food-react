import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Let us worry about the food</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi
          tempor at.
        </p>
        <div className="hero-buttons">
          <a href="/foods" className="hero-button primary">
            Get Started
          </a>
          <a href="/contact" className="hero-button secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

