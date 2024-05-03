import React, { useState } from 'react'
import {Exercise, Home, Profile, Sidebar, UserNavbar, WorkoutHistory} from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../components/useLocalStorage';
import { PushUserData } from '../store/userSlice';
const UserDashboard = () => {
  const {userData} = useLocalStorage("userData", null);
  const storedUser = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const setupDashboard = ()=>{
    if(userData!==null){
        if(!(storedUser && storedUser.length))
        {
          dispatch(PushUserData(userData));
        }
    }
  }
  setupDashboard();
  const Navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");
  const sections = {
    "Home": <Home />,
    "Profile": <Profile />,
    "Exercise": <Exercise />,
    "WorkoutHistory": <WorkoutHistory />

  }
  
  const redirectToHomepage = ()=>{
    alert("No user logged in!");
    Navigate('/')
  }
  return (
    <div>
      {
        userData!==null
        ?(
          <div className='flex w-full'>
            <Sidebar setCurrentPage={setCurrentPage}/>
            <div className='dashboard-container w-full flex flex-col'>
              <UserNavbar />
              {
                sections[currentPage]
              }
            </div>
          </div>
        )
        :<div>{redirectToHomepage()}</div>
      }
    </div>
  )
}

export default UserDashboard
