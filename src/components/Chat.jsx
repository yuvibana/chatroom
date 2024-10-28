import React from 'react'
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Message from './Message';
import Input from './Input';

function Chat() {
  return (
    <div className='Chat flex-[2]'>
      <div className='ChatInfo bg-[#3e3c61] text-white py-3 px-2 flex justify-between items-center sticky top-0'>
        <span>Name</span>
        <div className='chatIcons flex items-center gap-3'>
          <span className='text-[20px] cursor-pointer'><GoDeviceCameraVideo /></span>
          <span className='text-[20px] cursor-pointer'><FaUserCheck /></span>
          <span className='text-[20px] cursor-pointer'><BsThreeDots /></span>
        </div>
      </div>
      <Message />
      <Input />
    </div>
  )
}

export default Chat