import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Hero />
      <About />
      <Services />
      <Location />
    </div>
  )
}

export default App