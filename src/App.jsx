import React from 'react'
import {Homepage, About, Contact, Login, Signup, UserDashboard} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
