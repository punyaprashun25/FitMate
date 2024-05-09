import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PopuserData } from '../store/userSlice';
const Navbar = () => {
  const Navigation = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const HandleMenu = () => {
    setShowMenu(true);
  }
  const HandleCloseMenu = () => {
    setShowMenu(false);
  }
  const HandleLogin = () => {
    Navigation('/login')
  }
  const HandleLogout = () => {
    dispatch(setUserLoggedIn(false));
    dispatch(PopuserData());
    Navigation('/')
  }

  return (
    <div className='navbar w-full absolute z-20 bg-black top-0 left-0 h-20 flex items-center justify-between px-8 text-white'>
      <Link to='/'>
        <div className="logo flex gap-4">
          <p className="company-text flex items-center text-2xl font-bold"><span className='text-red-500'>Fit</span>Mate</p>
        </div>
      </Link>
      <div className="hamburger md:hidden">
        <RxHamburgerMenu size={32} onClick={HandleMenu} />
      </div>
      <div className="button-box hidden items-center gap-10 text-md font-bold md:flex">
        <Link to='/'>
          <div className="btn flex flex-col items-center cursor-pointer">
            <p className="text">Home</p>
          </div>
        </Link>
        <Link to='/about'>
          <div className="btn flex flex-col items-center cursor-pointer">
            <p className="text">About</p>
          </div>
        </Link>
        <Link to='/contact'>
          <div className="btn flex flex-col items-center cursor-pointer">
            <p className="text">Contact</p>
          </div>
        </Link>
        <button className='bg-red-500 px-4 py-2 rounded-md text-white'
          onClick={HandleLogin}
        >Login</button>
      </div>
      <div className={`link-menu absolute flex-col text-black gap-4 items-end px-12 py-8 z-10 top-0 left-0 w-full bg-white ` + (showMenu ? 'flex' : 'hidden')}>
        <RxCross1 size={20} onClick={HandleCloseMenu} />
        <Link to='/' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
          <p className="text text-xl font-semibold">Home</p>
        </Link>
        <Link to='/about' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
          <p className="text text-xl font-semibold">About</p>
        </Link>
        <Link to='/contact' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
          <p className="text text-xl font-semibold">Contact</p>
        </Link>
        <Link to='/login' className='flex w-full items-center justify-center gap-2 py-5 border-b-2'>
          <p className="text text-xl font-semibold">Login</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
