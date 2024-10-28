import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";


function Navbar() {
  return (
    <div className='Navbar flex justify-between items-center bg-[#2f2d52] py-3 px-2 sticky top-0'>
      <span className='logoText text-[16px] font-bold'> Chat Room</span>
      <div className="user flex gap-1 items-center">
        <img className='h-[22px] rounded-full w-[22px] object-cover' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?semt=ais_hybrid" alt='' />
        <span className='text-[16px]'>Jhon</span>
        <span className='logout py-1 px-2 bg-[#3e3c61] cursor-pointer rounded'>
          <RiLogoutCircleLine />
        </span>
      </div>
    </div>
  )
}

export default Navbar