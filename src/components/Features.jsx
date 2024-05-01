import React from 'react'
import FeatureCard from './FeatureCard'
import HeadingLable from './HeadingLable'
const Features = () => {
  const features = ['Heath Tracking', 'AI Generated Diet Plan', 'Exercise Guidance', '24x7 Support']
  return (
    <div className="feautures-box flex flex-col gap-4 mb-6">
      <HeadingLable headingText={'Our Features'}/>
      <div className='features grid justify-between grid-cols-1 gap-8 md:gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4'>
      {
        features.map((feature)=>{
          return <FeatureCard feature={feature}/>
        })
      }
    </div>
    </div>
  )
}

export default Features
