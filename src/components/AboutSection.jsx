import React from 'react'
import Hero from '../assets/about.png'
import HeadingLable from './HeadingLable'
const AboutSection = () => {
  return (
    <div className='about w-full px-6 mt-[-50%] md:mt-[15%] lg:mt-[30%] mb-10 flex flex-col gap-5 md:flex-row md:justify-center'>
      <img src={Hero} alt="" />
      <div className="about-details flex flex-col text-center gap-4 w-full md:w-1/2  md:justify-center items-center">
        <HeadingLable headingText={"About Us"}/>
        <div className="content-box font-bold text-xl">
          SAF BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
        </div>
        <div className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sequi aspernatur, quo excepturi, doloribus asperiores nobis obcaecati ad officia odit eveniet quis incidunt porro totam aliquid ea commodi praesentium ducimus inventore tempore iure minima impedit!
        </div>
      </div>
    </div>
  )
}

export default AboutSection
