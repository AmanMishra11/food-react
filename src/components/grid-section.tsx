import Image from "next/image"

export default function GridSection() {
  const items = [
    {
      title: "Delicious Meals",
      description: "Experience a variety of amazing dishes from different cultures around the world.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Fresh Ingredients",
      description: "Our meals are prepared with only the freshest ingredients to maintain quality and taste.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Expert Chefs",
      description: "Our chefs are trained professionals with years of experience in culinary arts.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Diverse Menu",
      description: "Choose from a diverse menu that caters to various dietary preferences and restrictions.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Foods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the best foods from over 1,000 restaurants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 h-64 relative rounded-lg overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
