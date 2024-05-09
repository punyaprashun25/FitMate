import React from 'react'
import FeatureCard from './FeatureCard'
import HeadingLable from './HeadingLable'
const Features = () => {
  const features = ['Heath Tracking', 'AI Generated Diet Plan', 'Exercise Guidance', '24x7 Support']
  return (
    <div className="feautures-box px-6 flex flex-col gap-4 justify-center items-center mb-6">
      <HeadingLable headingText={'Our Features'}/>
      <div className='features grid justify-between grid-cols-1 gap-8 md:gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4'>
      {
        features.map((feature, index)=>{
          return <FeatureCard feature={feature} key={index}/>
        })
      }
    </div>
    </div>
  )
}

export default Features
