import React from 'react'
import {Features, Navbar, Footer, AboutSection} from '../components'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="box mt-[30rem] md:mt-[-1rem] lg:mt-[-12rem]">
        <AboutSection />
      </div>
      <Features />
      <Footer />
    </div>
  )
}

export default About
