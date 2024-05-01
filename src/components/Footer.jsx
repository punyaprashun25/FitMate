import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full px-10 py-8 flex flex-col items-center gap-3 md:flex-row justify-around border-t-2 border-t-[rgba(0,0,0,0.1)] text-center'>
      <p className="info text-[rgba(0,0,0,0.8)]">
        In case of any concern, <span className='font-semibold'>Contact Us</span>
      </p>
      <p className="copyright text-[rgba(0,0,0,0.7)]">
        &copy; 2024 www.fitmate.com All rights reserved
      </p>
      <p className="about text-[rgba(0,0,0,0.7)]">
      Made with ❤️ by Punya Prashun
      </p>
    </div>
  )
}

export default Footer
