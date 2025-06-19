import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import ProjectsGrid from './components/ProjectsGrid';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
       <Navbar />
       <Hero />
       <About />
       <Certificates />
       <ProjectsGrid />
       <Skills />
       <ContactMe />
       <Footer />
     </div>
  )
}

export default App
