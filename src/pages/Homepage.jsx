import React from 'react'
import {Navbar, Footer, HeroSection, AboutSection, Features, ContactSection} from '../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="w-full section-container flex flex-col gap-4 items-center">
        <AboutSection />
        <Features />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
