import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let us worry about the food</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi
          tempor at.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/foods"
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

