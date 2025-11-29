import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Projects from '../component/Projects'
import Work from '../component/Work'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Work/>
     <Contact/>
    </div>
  )
}

export default Home
