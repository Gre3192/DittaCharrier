import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import About from "./components/About"
import AppointmentForm from "./components/AppointmentForm"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-sans text-stone-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}
