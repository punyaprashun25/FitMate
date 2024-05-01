import React from 'react'
import video from '../assets/video.mp4'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='hero-section h-[70vh]'>
      <video src={video} type autoPlay loop muted playsInlineInline className='bg-video absolute top-0 left-0'>
      </video>
      <div className="text-section absolute z-10 w-60 top-64 md:top-[35vh] lg:top-[50vh] left-10 lg:left-28 text-black sm:text-white flex flex-col gap-3">
        <div className="text-heading flex gap-3 items-center">
          <div className="line h-[1px] bg-red-600 w-10"></div>
          <p className="heading font-bold text-2xl text-red-600">With FitMate</p>
        </div>
        <p className="quotes text-xl ">BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</p>
        <Link to='/about'><button className="explore text-white bg-red-600 rounded-md px-4 py-2">Explore More</button></Link>
      </div>
    </div>
  )
}

export default HeroSection
