import React from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
import { useDispatch } from 'react-redux'
import { PopuserData } from '../store/userSlice'
const UserNavbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {userData, setUserData, removeUser} = useLocalStorage("userData", null);
  const HandleLogout = ()=>{
    removeUser();
    dispatch(PopuserData());
    Navigate('/');
  }
  return (
    <div className='user-navbar sticky top-0 right-0 bg-white z-20 w-full h-20 shadow-md flex justify-between px-8 py-2 items-center'>
      <div className="quotes w-3/4 py-2 px-10">
        <p className="text text-2xl font-semibold">Your Fitness <span className="motto text-red-600">Our Efforts</span></p>
      </div>
      <button className="logout px-4 py-2 rounded-md bg-red-600 text-white font-medium" 
      onClick={HandleLogout}
      >Logout</button>
    </div>
  )
}

export default UserNavbar
