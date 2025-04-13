import "./CardSection.css"

export default function CardSection() {
  const cards = [
    {
      icon: "⏱️",
      title: "24/7 Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
    {
      icon: "👨‍🍳",
      title: "Experienced Chefs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
  ]

  return (
    <section className="card-section">
      <div className="card-container">
        <div className="card-header">
          <h2 className="card-section-title">Why Choose Us</h2>
          <p className="card-section-description">We offer the best experience with attention to details</p>
        </div>

        <div className="card-grid">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <span>{card.icon}</span>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
