import React from 'react'
import { GrGallery } from "react-icons/gr";

function Register() {
  return (
    <div className='formContainer bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
      <div className='formContainer_inner max-w-[300px] bg-white p-5 rounded'>
        <div className='head text-center'>
          <span className='logoText text-2xl font-bold text-gray-600'>Yuv's Chat Room</span>
          <span className='title block text-gray-600 font-semibold'>Register</span>
        </div>
        <form>
          <input className='bg-transparent outline-none p-2 border-b border-gray-400 w-full' type='text' placeholder='Name' />
          <input className='bg-transparent outline-none p-2 border-b border-gray-400 w-full' type='email' placeholder='Email' />
          <input className='bg-transparent outline-none p-2 border-b border-gray-400 w-full' type='password' placeholder='Password' />
          <div className='uploadimg relative py-2'>
            <input id="userImg" className='opacity-0' type='file' />
            <label className='cursor-pointer absolute top-2 flex items-center gap-2 font-semibold' htmlFor='userImg'>
              <GrGallery />
              Add an avtar</label>
          </div>
          <button className='py-2 px-5 bg-[#a7bcff] rounded w-full mb-2' type='submit'> Sign Up</button>
          <p>You do not have an account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register