import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { LuFormInput } from "react-icons/lu";
import { useSelector} from 'react-redux';

const Sidebar = () => {
  const user = useSelector((state)=>state.user);
  const Navigate = useNavigate();
  const HandleNavigate = (path)=>{
      Navigate(path);
  }

  return (
    <div className='w-72 hidden md:flex h-screen flex-col items-center gap-16 sticky left-0 top-0 shadow-md px-4 py-16'>
      <div className="logo h-24 flex flex-col gap-8 items-center">
        <Link to='/dashboard'>
          <div className="logo flex gap-4">
              <p className="company-text flex items-center text-2xl font-bold"><span className='text-red-500'>Fit</span>Mate</p>
          </div>
        </Link>
        <div className="greet flex flex-col gap-2 text-center text-2xl font-medium">
          <p className="hi">Hi,</p>
          <p className="name text-2xl font-medium">{user.personalDetails.name}</p>
        </div>
      </div>
      <div className="links font-semibold text-xl w-full text-center text-gray-700 px-6 flex flex-col gap-2">
        <div className="link-box w-full py-3 border-b-2 flex items-center gap-2">
          <FaHome />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("")}>Home</p>
        </div>
        <div className="link-box w-full py-3 border-b-2 flex items-center gap-2">
          <CgGym />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("exercise")}>Exercise Guide</p>
        </div>
        <div className="link-box w-full py-3 border-b-2 flex items-center gap-2">
          <LuFormInput />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("userform")}>Update Details</p>
        </div>
        <div className="link-box w-full py-3 border-b-2 flex items-center gap-2">
          <CiBookmark />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("history")}>History</p>
        </div>
        <div className="link-box w-full py-3 border-b-2 flex items-center gap-2 ">
          <FaRegUserCircle />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("profile")}>Profile</p>
        </div>
        <div className="link-box w-full py-3 flex items-center gap-2">
          <IoSettingsOutline />
          <p className="text cursor-pointer" onClick={()=>HandleNavigate("Setting")}>Setting</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
