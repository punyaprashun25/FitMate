import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className='card h-60 w-60 flex justify-center items-center rounded-md bg-red-600 text-white text-xl font-semibold'>
      {feature}
    </div>
  )
}

export default FeatureCard
