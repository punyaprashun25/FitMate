import React from 'react'

const MultiSelectionBox = ({list}) => {
  return (
    <div className='box flex flex-col gap-2'>
      {
        list?
        list.map((item)=>{
           return <p className="item">{item}</p>
        })
        :null
      }
    </div>
  )
}

export default MultiSelectionBox
