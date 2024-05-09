import React from 'react'

const ExerciseCard = ({gifUrl, name}) => {
  return (
    <div className='w-60 rounded-md shadow-md flex flex-col gap-4 text-center px-2 py-2'>
      <img src={gifUrl} alt="" />
      <p className="name capitalize">{name}</p>
    </div>
  )
}

export default ExerciseCard
