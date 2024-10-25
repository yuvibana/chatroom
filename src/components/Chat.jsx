import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function Chat() {
  return (
    <div className='Chat flex-[2]'>
      <div className='ChatInfo bg-[#3e3c61] text-white p-2 flex justify-between items-center'>
        <span>Name</span>
        <div className='chatIcons flex items-center gap-3'>
          <span className='text-[20px] cursor-pointer'><GoDeviceCameraVideo /></span>
          <span className='text-[20px] cursor-pointer'><FaUserCheck /></span>
          <span className='text-[20px] cursor-pointer'><BsThreeDots /></span>
        </div>
      </div>
    </div>
  )
}

export default Chat