import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setIsComplete, removeDailyTask, addHistory } from '../store/userSlice';
import { deleteTask, setIsCompleteTask } from '../firebase/Operation';
import { fireStore } from '../firebase/firebase';

const DailyCard = ({challenge, id, isCompleted}) => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);

  const HandleChange = ()=>{
    dispatch(setIsComplete({id: id, status:!isCompleted}));
    setIsCompleteTask(fireStore, "users", user.id, id, !isCompleted);
  }

  const HandleDelete = ()=>{
    // delete functionalities
    dispatch(removeDailyTask(id));
    deleteTask(fireStore, "users", user.id, id)
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
      <CiCircleRemove size={24} onClick={HandleDelete} className='cursor-pointer'/>
    </div>
  )
}

export default DailyCard
