import { Card } from "./ui/card"
import { Clock, Users, Star } from "lucide-react"

export default function CardSection() {
  const cards = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24/7 Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Experienced Chefs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer the best experience with attention to details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

