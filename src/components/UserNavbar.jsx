import React from 'react'

const UserNavbar = () => {
  return (
    <div className='user-navbar w-full h-20 shadow-md flex justify-between px-8 py-2 items-center'>
      <div className="quotes w-3/4 py-2 px-10">
        <p className="text text-2xl font-semibold">Your Fitness <span className="motto text-red-600">Our Efforts</span></p>
      </div>
      <button className="logout px-4 py-2 rounded-md bg-red-600 text-white font-medium">Logout</button>
    </div>
  )
}

export default UserNavbar
