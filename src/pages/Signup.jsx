import React, { useDebugValue, useState } from 'react'
import { InputBox } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation, useGetUsersQuery } from '../store/apiSlice';

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPass: ""
  });
  const Navigate = useNavigate();

  const HandleClick = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setRegisterData({...registerData, [name]:value});
  }
  const {data} = useGetUsersQuery();
  // console.log(data.length);
  const [registerUser, {isError, isLoading}] = useRegisterUserMutation();
  const register = ()=>{
    const body = {
      "id": data.length+1,
      "personalDetails": {
        "name": registerData.name,
        "email": registerData.email,
        "password": registerData.password
      },
      "fitnessDetails": {
        "height": 0,
        "weight": 0
      }
    }
    registerUser(body);
  }
  function emailValidate(email)
  {
      let pattern = /^[a-zA-Z][a-zA-Z\d\.]*\@[a-zA-Z]+\.[a-zA-Z]{3,}/;
      if(!pattern.test(email))
      {
          return false;
      }
      else
          return true;
  }
  const isUserPresent = (data,email)=>{
    for(let i = 0; i<data.length; i++){
      if(data[i].personalDetails.email===email)
        return true;
    }
    return false;
  }
  const validateForm = ()=>{
    if(!registerData.name.length){
      alert("Name can't be blank!")
      return false;
    }
    else if(!emailValidate(registerData.email))
    {
      alert("Email is not valid!")
      return false;
    }
    else if(!(registerData.password.length >= 6)){
      alert("Password length should be greater than or equal to 6!")
      return false;
    }
    else if(!registerData.cnfPass.length){
      alert("Confim password field can't be blank!")
      return false;
    }
    else if(registerData.password !== registerData.cnfPass){
      alert("Password doesn't match!")
      return false;
    }
    else if(isUserPresent(data,registerData.email)){
      alert("Email address already present!")
      return false;
    }
    else
      return true;
  }
  
  const HandleSubmit = (event)=>{
    // get userdata by emailid & match
    event.preventDefault();
    if(validateForm()){
      register();
      alert("Successfully Registered!")
      Navigate('/login');
    }
  }
  // console.log(registerData);
  return (
    <div className='bg-black w-full px-6 h-screen flex flex-col items-center justify-center'>
      <form action="#" className='w-full px-8 py-8 flex justify-center flex-col items-center max-w-[400px] max-h-[650px] bg-white rounded-md gap-3'>
      <p className="text text-2xl font-medium mb-3 ">Create a new Account</p>
      <InputBox id={"name"} name={"name"} HandleClick={()=>HandleClick(event)} text={"Full Name:"} value={registerData.name}/>
      <InputBox id={"email"} name={"email"} HandleClick={()=>HandleClick(event)} type='email' text={"Email Id:"} value={registerData.email}/>
      <InputBox id={"password"} name={"password"} HandleClick={()=>HandleClick(event)} type='password' text={"Password:"} value={registerData.password}/>
      <InputBox id={"cnfPass"} name={"cnfPass"} HandleClick={()=>HandleClick(event)} type='password' text={"Confirm Password:"} value={registerData.cnfPass}/>
      <button className='bg-red-600 mt-3 text-white px-4 py-2 rounded-md'
      onClick={()=>HandleSubmit(event)}
      >Login</button>
      <p className="text">Already have an account ? <Link to='/login' className='text-violet-800'>Login here</Link></p>
      </form>
    </div>
  )
}

export default Signup
