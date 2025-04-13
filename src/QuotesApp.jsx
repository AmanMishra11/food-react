import Navbar from "./components/Navbar"
import QuotePage from "./components/QuotePage"
import Footer from "./components/Footer"
import "./QuotesApp.css"

function QuotesApp() {
  return (
    <div className="quotes-app">
      <Navbar />
      <main>
        <QuotePage />
      </main>
      <Footer />
    </div>
  )
}

export default QuotesApp
