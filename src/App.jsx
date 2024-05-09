import React, { useEffect, useState } from 'react'
import {Homepage, About, Contact, Login, Signup, UserDashboard} from './pages'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase/firebase';
const App = () => {
  const [user, setUser] = useState(null);
  const fetchUser = async() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    }
    )
  }
  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <BrowserRouter >
      <Routes>
          <Route path='/' element={user ? <Navigate to='/dashboard' /> : <Homepage />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
