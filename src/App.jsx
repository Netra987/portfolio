import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import DataViz from './components/DataViz'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-dark min-h-screen font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <DataViz />
        <Contact />
      </main>
    </div>
  )
}

export default App