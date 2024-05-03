import React, { useState } from 'react'
import DailyCard from './DailyCard'
import BmiSection from './BmiSection';
import { CiSquarePlus } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { generateRandomQuote } from '../util/quotes';

const Home = () => {
  const todayTask = ["Workout / Sport Session", "Water intake [8 glasses]", "Food Consumption [2000Kcal/day]"]
  const [tasks, setTasks] = useState(todayTask);
  const [newTask, setNewTask] = useState("");
  const [IsAdding, setIsAdding] = useState(false);

  const HandleChange = (event) => {
    setNewTask(event.target.value);
  }
  const HandleAddTask = () => {
    setIsAdding(true);
  }
  const HandleAddNewTask = () => {
    if (newTask.length >= 4) {
      setTasks((tasks) => { return [...tasks, newTask] });
      setNewTask("");
      setIsAdding(false);
    }
    else {
      alert("Input length should be greater than 3!")
    }
  }

  return (
    <div className="home-box flex flex-col gap-3">
      {/* <div className="heading-text w-full h-12 flex items-center justify-center shadow-md bg-slate-500 text-white text-xl font-semibold">Utilities</div> */}
      <div className="content-box w-full px-8 py-8 flex flex-col lg:flex-row gap-5">
        <div className="Target-goal w-full lg:w-1/2 h-[24rem] rounded-md bg-red-400">
          <iframe src="https://www.youtube.com/embed/HQfF5XRVXjU" title="1DX Mark III - Cinematic Gym Fitness Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='w-full h-full rounded-md' allowfullscreen></iframe>
        </div>
        <div className="bmi-cal w-full lg:w-1/2 bg-green-500 rounded-md">
          <BmiSection />
        </div>
      </div>
      <div className="heading-text w-full h-12 flex items-center justify-center shadow-md bg-slate-500 text-white text-xl font-semibold">Random Quotes</div>
      <div className="quotes-box flex justify-center items-center py-5">
        <p className="quote text-lg">{generateRandomQuote()}</p>
      </div>
      <div className="heading-text w-full mt-2 h-12 flex items-center justify-center shadow-md bg-slate-500 text-white text-xl font-semibold">Daily Tasks</div>
      <div className="dailyChallege-box w-full flex gap-10 flex-wrap px-8 py-8">
        {
          tasks && tasks.length
            ? tasks.map((task, index) => {
              return <DailyCard challenge={task} key={index} index={index} tasks={tasks} setTasks={setTasks} />
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
