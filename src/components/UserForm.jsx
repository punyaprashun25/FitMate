import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import bmiCalculator from '../util/bmiCalc'
import { updateDetails } from '../firebase/Operation' 
import {fireStore} from '../firebase/firebase'
import { updateUserDetails } from '../store/userSlice'

const UserForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user.personalDetails.name,
    height: user.fitnessDetails.height,
    weight: user.fitnessDetails.weight,
    bmiValue: user.fitnessDetails.BmiValue, 
  });

  useEffect(()=>{
    const bmi = bmiCalculator(userData.height, userData.weight);
    if(bmi){
      setUserData({...userData, bmiValue: bmi});
    }
  },[userData.height, userData.weight]);

  const HandleChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setUserData({...userData, [name]:value});
  }

  const HandleUpdate = (event)=>{
    event.preventDefault();
    dispatch(updateUserDetails(userData));
    updateDetails(fireStore, "users",user.id,userData);
  }
  return (
    <div className="form-box w-full shadow-lg min-h-screen rounded-md flex gap-5 flex-col items-center mt-5 px-4 py-4">
      <p className="heading text-2xl font-medium ">Update your deetails</p>
      <form className='w-full px-8 py-6 flex justify-center flex-col items-center bg-white rounded-md gap-3'
      onSubmit={HandleUpdate}
      >
        <div className="w-full form-container flex justify-between">
          <div className="left w-full max-w-[49%]">
            <div className="details-box w-full px-2 py-2 flex flex-col gap-3">
              <p className="heading-label text-xl font-medium">Personal Details</p>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">User ID :</p>
                <input className="value w-[75%] text-center bg-slate-300 px-2 py-2 rounded-lg outline-none" value={user.id} type='text' contentEditable={false} />
              </div>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">Email :</p>
                <input className="value w-[75%] text-center bg-slate-300 px-2 py-2 rounded-lg outline-none" value={user.personalDetails.email} type='text' contentEditable={false} />
              </div>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">Name :</p>
                <input className="value w-[75%] text-center border px-2 py-2 rounded-lg outline-none" value={userData.name} type='text' name='name'
                onChange={HandleChange}
                />
              </div>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">Height :</p>
                <input className="value w-[75%] text-center border px-2 py-2 rounded-lg outline-none" value={userData.height} type='text' name='height'
                onChange={HandleChange}
                />
              </div>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">weight :</p>
                <input className="value w-[75%] text-center border px-2 py-2 rounded-lg outline-none" value={userData.weight} type='text' name='weight'
                onChange={HandleChange}
                />
              </div>
              <div className="detail flex gap-4 text-lg ml-10 items-center justify-between">
                <p className="label font-medium">BMI Value :</p>
                <input className="value w-[75%] text-center bg-slate-300 px-2 py-2 rounded-lg outline-none" value={userData.bmiValue} type='text' contentEditable={false} />
              </div>
              
            </div>
          </div>
          <div className="right w-full max-w-[49%] h-96 bg-green-600">

          </div>
        </div>
        <div className="div w-full flex items-center justify-center">
          <button className='bg-black  mt-3 text-white font-semibold px-6 py-4 rounded-md'
          >Update</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
