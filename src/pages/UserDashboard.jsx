import React, { useState, useEffect } from 'react'
import { Exercise, Home, Profile, Sidebar, UserForm, UserNavbar, WorkoutHistory } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { auth, fireStore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { PushUserData } from '../store/userSlice';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  const userData = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    if(userData && userData.length > 0) return;
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(fireStore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap) {
          dispatch(PushUserData(docSnap.data()));
          console.log(docSnap.data());
        }
        else {
          console.log("User is not logged in");
        }
      }
    })
  }
  useEffect(() => {
    fetchUserDetails();
  }, [])

  return (
    <div>
      <div className='flex w-full'>
        <Sidebar />
        <div className='dashboard-container w-full flex flex-col'>
          <UserNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
