import React from 'react'
import { useState } from 'react';
import './bmi.css'
const BmiSection = () => {
  const [heightValue, setHeightValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [bmiValue, setBmiValue] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const HandleHeight = (event)=>{
    setHeightValue(event.target.value);
  }
  const HandleWeight = (event)=>{
    setWeightValue(event.target.value)
  }
  const calculateBmi = () => {
    if (heightValue &&heightValue>0 && weightValue &&weightValue>0) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = '';
      if (bmi < 18.5) {
        message = 'You are Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight';
      } else {
        message = 'You are Obese';
      }
      setBmiMessage(message);
    } else {
      alert("Input invalid!")
      setBmiValue('');
      setBmiMessage('');
    }
  };
  const HandleClick = ()=>{
    calculateBmi();
  }
  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur()
  
    // Prevent the page/container scrolling
    e.stopPropagation()
  
    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }
  return (
    <div className='Bmi-calculator w-full flex flex-col gap-4 px-8 py-8 text-white'>
      <p className="heading-text text-center">BMI Calculator</p>
      <div className="inp-box flex flex-col gap-3">
        <label htmlFor="height" >Height (cm)</label>
        <input type="number" name="weight" id="weight" style={{}} className='outline-none px-4 py-2 bg-transparent border-b-2' onWheel={numberInputOnWheelPreventChange} value={heightValue} onChange={()=>HandleHeight(event)}/>
      </div>
      <div className="inp-box flex flex-col gap-3">
        <label htmlFor="height">Weight (kg)</label>
        <input type="number" name="weight" id="weight" className='outline-none px-4 py-2 bg-transparent border-b-2' value={weightValue} onWheel={numberInputOnWheelPreventChange} onChange={()=>HandleWeight(event)}/>
      </div>
      <button className="calc outline-none px-4 mt-3 py-2 rounded-md bg-white text-black font-medium"
      onClick={HandleClick}
      >Calculate</button>
      {
        bmiMessage!==""
        ?<div className="result-box text-center flex flex-col gap-3">
          <span className="result">{bmiValue}</span>
          <span className="result">{bmiMessage}</span>
        </div>
        :null
      }
    </div>
  )
}

export default BmiSection
