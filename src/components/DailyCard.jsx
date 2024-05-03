import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
const DailyCard = ({challenge, tasks, setTasks, index}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const HandleChange = ()=>{
        setIsCompleted(!isCompleted);
    }
    const HandleDelete = (index)=>{
      console.log(index);
      const updatedTasks = tasks.filter((item,ind)=>ind!==index);
      console.log((updatedTasks));
      setTasks(updatedTasks);
    }
    
  return (
    <div className={'dailyCard rounded-md justify-center gap-3 items-center w-40 h-40 flex flex-col text-white bg-red-600 text-md text-center'}>
      <div className={"challege-text font-semibold "+(isCompleted ? "line-through " : "no-underline")}>
        {challenge}
      </div>
      <div className="check-box flex items-center gap-2" >
        <input type="checkbox" name="completed" id="completed" className='border-none outline-none h-5 w-5 accent-green-600' onChange={()=>HandleChange()} checked={isCompleted}/>
        <label htmlFor="completed text-xs" onClick={()=>HandleChange()}>Completed</label>
      </div>
      <CiCircleRemove size={24} onClick={()=>HandleDelete(index)} className='cursor-pointer'/>
    </div>
  )
}

export default DailyCard
