import "./GridSection.css"

export default function GridSection() {
  const items = [
    {
      title: "Delicious Meals",
      description: "Experience a variety of amazing dishes from different cultures around the world.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Fresh Ingredients",
      description: "Our meals are prepared with only the freshest ingredients to maintain quality and taste.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Expert Chefs",
      description: "Our chefs are trained professionals with years of experience in culinary arts.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Diverse Menu",
      description: "Choose from a diverse menu that caters to various dietary preferences and restrictions.",
      image: "https://via.placeholder.com/600x400",
    },
  ]

  return (
    <section className="grid-section">
      <div className="grid-container">
        <div className="grid-header">
          <h2 className="grid-section-title">Explore Our Foods</h2>
          <p className="grid-section-description">Discover the best foods from over 1,000 restaurants</p>
        </div>

        <div className="grid">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              <div className="grid-image-container">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="grid-image" />
              </div>
              <div className="grid-content">
                <h3 className="grid-item-title">{item.title}</h3>
                <p className="grid-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

