import React from 'react'
import {Navbar, Footer, HeroSection, AboutSection, Features} from '../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="w-full section-container flex flex-col gap-4 px-8 items-center">
        <AboutSection />
        <Features />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
