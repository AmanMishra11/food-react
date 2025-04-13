
import "./App.css"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import GridSection from "./components/GridSection";
import Footer from "./components/Footer";

function Home() { 
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CardSection />
        <GridSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;