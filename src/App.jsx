import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App