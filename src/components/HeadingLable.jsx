import React from 'react'

const HeadingLable = ({headingText}) => {
  return (
    <div className="text-heading flex gap-3 items-center">
          <div className="line h-[1px] bg-red-600 w-10"></div>
          <p className="heading font-bold text-2xl text-red-600">{headingText}</p>
    </div>
  )
}

export default HeadingLable
