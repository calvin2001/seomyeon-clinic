import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Hero />
      <About />
      <Services />
      <Location />
      <Footer />
      <Navigation />
    </div>
  )
}

export default App