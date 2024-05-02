import React from 'react'
import { ContactSection, Navbar, Footer} from '../components'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="box h-[80vh] md:mt-28 lg:mt-32 flex flex-col justify-center items-center"><ContactSection /></div>
      <Footer />
    </div>
  )
}

export default Contact
