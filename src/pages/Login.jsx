import React, { useState } from 'react'
import { InputBox } from '../components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PopuserData, PushUserData } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../store/apiSlice';
import useLocalStorage from '../components/useLocalStorage'
const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {data : users , isLoading, isError, error} = useGetUsersQuery();
  const [user, setUser] = useState({});

  // localstorage
  const {userData, setUserData} = useLocalStorage("userData",null);

  const getUserData =async (emailId)=>{
    if(isError){
      alert(error.error)
    }
    else{
      for(let i = 0; i<users.length; i++){
        if(users[i].personalDetails.email===emailId){
          setUser(users[i]);
          setUserData(users[i]);
        }
      }
    }
  }
  const validateUser = (user, emailId, pass)=>{
    if(user){
      if(user.personalDetails.password===pass){
        dispatch(PushUserData(user));
        return true;
      }
    }
    else
      return false;

  }

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const HandleClick = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({...loginData, [name]:value});
  }

  const HandleSubmit = async(event)=>{
    // get userdata by emailid & match
    event.preventDefault();
   await getUserData(loginData.email).then(()=>{

    if(validateUser(user, loginData.email, loginData.password))
    {
      console.log(user);
      Navigate('/dashboard')
    }
    else{
      alert("Login details are incorrect!")
    }
   });
  

  }
  return (
    <div className='bg-black w-full px-6 h-screen flex flex-col items-center justify-center'>
      <form action="#" className='w-full px-8 py-8 flex justify-center flex-col items-center max-w-[400px] max-h-[650px] bg-white rounded-md gap-3'>
      <p className="text text-2xl font-medium mb-3 ">Login to your Account</p>
      <InputBox id={"email"} name={"email"} HandleClick={()=>HandleClick(event)} type='email' text={"Email Id:"}/>
      <InputBox id={"password"} name={"password"} HandleClick={()=>HandleClick(event)} type='password' text={"Password:"}/>
      <button className='bg-red-600 mt-3 text-white px-4 py-2 rounded-md'
      onClick={()=>HandleSubmit(event)}
      >Login</button>
      <p className="text">Don't have an account ? <Link to='/signup' className='text-violet-800'>Create one</Link></p>
      </form>
    </div>
  )
}

export default Login
