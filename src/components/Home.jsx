import React, { useEffect, useState } from 'react'
import DailyCard from './DailyCard'
import BmiSection from './BmiSection';
import { CiSquarePlus } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { generateRandomQuote } from '../util/quotes';
import { useSelector } from 'react-redux';
import { addDailyTask } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../firebase/Operation';
import {fireStore} from '../firebase/firebase'

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [IsAdding, setIsAdding] = useState(false);
  const user = useSelector((state)=>state.user);
  const [quotes, setQuotes] = useState("");

  const dispatch = useDispatch();


  const HandleChange = (event) => {
    setNewTask(event.target.value);
  }
  const HandleAddTask = () => {
    setIsAdding(true);
  }
  
  const HandleAddNewTask = async() => {
    if (newTask.length >= 4) {
      // update task
      const timeStamp = new Date().toLocaleDateString();
      dispatch(addDailyTask({id: uuidv4(), dateAdded: timeStamp, taskName: newTask, isComplete: false}));
      addTask(fireStore, "users", user.id,{id: uuidv4(), dateAdded: timeStamp, taskName: newTask, isComplete: false});
      setNewTask("");
      setIsAdding(false);
    }
    else {
      alert("Input length should be greater than 3!")
    }
  }
  useEffect(()=>{
    const quotes = generateRandomQuote();
    setQuotes(quotes);

  },[])

  return (
    <div className="home-box flex flex-col gap-3">
      <div className="content-box w-full px-8 py-8 flex flex-col lg:flex-row gap-5">
        <div className="Target-goal w-full lg:w-1/2 h-[24rem] rounded-md bg-red-400">
          <iframe src="https://www.youtube.com/embed/HQfF5XRVXjU" title="1DX Mark III - Cinematic Gym Fitness Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className='w-full h-full rounded-md' allowFullScreen></iframe>
        </div>
        <div className="bmi-cal w-full lg:w-1/2 bg-green-500 rounded-md">
          <BmiSection />
        </div>
      </div>
      <div className="heading-text w-full h-12 flex items-center justify-center shadow-md bg-slate-500 text-white text-xl font-semibold">Random Quotes</div>
      <div className="quotes-box flex justify-center items-center py-5">
        <p className="quote text-lg">{quotes}</p>
      </div>
      <div className="heading-text w-full mt-2 h-12 flex items-center justify-center shadow-md bg-slate-500 text-white text-xl font-semibold">Daily Tasks</div>
      <div className="dailyChallege-box w-full flex gap-10 flex-wrap px-8 py-8">
        {
          user.dailyTasks && user.dailyTasks.length
            ? user.dailyTasks.map((task) => {
              return <DailyCard challenge={task.taskName} key={task.id} id={task.id} isCompleted={task.isComplete}/>
            })
            : null
        }
        <div className={'dailyCard rounded-md justify-center gap-4 items-center w-64 h-40 flex flex-col text-white bg-red-600 text-md text-center'}>
          {
            IsAdding
              ? <div className='addNew flex flex-col gap-3 items-center'>
                <input type="text" placeholder='Add new task here' value={newTask} className='px-4 p-4 outline-none w-full bg-transparent rounded-md placeholder:text-white text-white text-center'
                  onChange={() => HandleChange(event)}
                />
                <button className="add bg-black w-1/2 px-2 py-2 rounded-md border-none"
                  onClick={HandleAddNewTask}
                >Add</button>
                <CiCircleRemove size={24} onClick={() => setIsAdding(false)} />
              </div>
              : <CiSquarePlus size={36} className='cursor-pointer' onClick={HandleAddTask} />
          }
        </div>
      </div>
    </div>
  )
}

export default Home
