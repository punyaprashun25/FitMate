import React from 'react'
import Image from '../assets/contact.png'
import HeadingLable from './HeadingLable'
const ContactSection = () => {
  return (
    <div className='w-full contact-section flex flex-col gap-4 md:flex-row-reverse justify-between md:px-20 py-5'>
      <img src={Image} alt="" className='max-w-96 h-auto'/>
      <div className="details-box w-full md:w-1/2 text-center flex flex-col gap-3 justify-center items-center md:items-start md:justify-start md:py-5 ">
        <HeadingLable headingText={'Contact Us'}/>
        <div className="details flex flex-col gap-4 text-left">
          <p className="text font-semibold">Name : <span className='value font-normal'>Punya Prashun</span></p>
          <p className="text font-semibold">Address : <span className='value font-normal'>Knowledge Park-II, Greater Noida, Uttar Pradesh, 201308</span></p>
          <p className="text font-semibold">Email : <span className='value font-normal'>punya.prasun.cs24@iilmcet.ac.in</span></p>
          <p className="text font-semibold">Mobile : <span className='value font-normal'>+91 9999999999</span></p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
