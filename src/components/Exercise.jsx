import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import ExerciseCard from './ExerciseCard';

const Exercise = () => {

  const [targetList, setTargetList] = useState([]);
  const [bodyList, setBodyList] = useState([]);
  const [currentSelection, setCurrentSelection] = useState("");
  const [currentExercise, setCurrentExercise] = useState("");
  const [exercise, setExercise] = useState([]);
  
  const HandleChangeSelection = (event)=>{
    setCurrentSelection((curr)=>curr = event.target.value);
  }
  const HandleChangeExercise = (event)=>{
    setCurrentExercise((curr)=>curr = event.target.value);
  }
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/${currentSelection}List`,
      headers: {
        'X-RapidAPI-Key': '4333735405msh71644b09a9d2b8ap1b2647jsncb879284679c',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    const fetchData = async()=>{
      try {
        const response = await axios.request(options);
        if(currentSelection==='bodyPart'){
          setBodyList(response.data);
          setCurrentExercise(response.data[0]);
        }
        else{
          setTargetList(response.data);
          setCurrentExercise(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[currentSelection])

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/${currentSelection}/${currentExercise}`,
      headers: {
        'X-RapidAPI-Key': '4333735405msh71644b09a9d2b8ap1b2647jsncb879284679c',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    const fetchData = async()=>{
      try {
        const response = await axios.request(options);
        console.log(currentExercise, currentExercise);
        console.log(response.data);
        setExercise(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[currentExercise])
  
  return (
    <div className='w-full'>
      <div className="selection-box flex w-full px-8 h-16 shadow-md items-center justify-center gap-5">
        <p className="text">Select Your Exercise : </p>
        <select name="exerciseType" className='outline-none px-3 py-2 rounded-sm bg-slate-500 text-white' id="type" onChange={()=>HandleChangeSelection(event)}>
          <option value="" className=''>Select Category by</option>
          <option value="bodyPart" className=''>Body Parts List</option>
          <option value="target" className=''>Target List</option>
        </select>
        <select name="exercise" className='outline-none px-3 capitalize py-2 rounded-sm text-white bg-gray-900' id="type" onChange={()=>HandleChangeExercise(event)}>
          {
            currentSelection === "bodyPart"
            ? bodyList.map((item, index)=>{
              return <option value={item} key={index} className='capitalize'>{item}</option>
            })
            : (currentSelection === "target"
              ? targetList.map((item,index)=>{
                return <option value={item} key={index} className='capitalize'>{item}</option>
              })
              :<option value="">Select Exercise</option>
            )
          }
        </select>
      </div>
      <div className="exercise-box px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          exercise && exercise.length
          ? exercise.map((itemData)=>{
            return <ExerciseCard key={itemData.id} gifUrl={itemData.gifUrl} name={itemData.name} />
          })
          :null
        }
      </div>
    </div>
  )
}

export default Exercise
