import React, { useState } from 'react'
import {Exercise, Home, Profile, Sidebar, UserNavbar} from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../components/useLocalStorage';
import { PushUserData } from '../store/userSlice';
const UserDashboard = () => {
  const [user, setUser] = useLocalStorage("userData", null);
  const storedUser = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const setupDashboard = ()=>{
    if(user!==null){
        if(!(storedUser && storedUser.length))
        {
          dispatch(PushUserData(user));
        }
    }
  }
  setupDashboard();
  const Navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");
  const sections = {
    "Home": <Home />,
    "Profile": <Profile />,
    "Exercise": <Exercise />

  }
  console.log(user);
  const redirectToHomepage = ()=>{
    alert("No user logged in!");
  }
  return (
    <div>
      {
        user!==null
        ?(
          <div className='flex w-full'>
            <Sidebar setCurrentPage={setCurrentPage}/>
            <div className='dashboard-container w-full fle flex-col'>
              <UserNavbar />
              {
                sections[currentPage]
              }
            </div>
          </div>
        )
        :redirectToHomepage()
      }
    </div>
  )
}

export default UserDashboard
