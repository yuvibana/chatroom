import React from 'react'

function Login() {
  return (
    <div className='formContainer bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
      <div className='formContainer_inner max-w-[300px] bg-white p-5 rounded'>
        <div className='head text-center'>
          <span className='logoText text-2xl font-bold text-gray-600'>Yuv's Chat Room</span>
          <span className='title block text-gray-600 font-semibold'>Login</span>
        </div>
        <form>
          <input className='bg-transparent outline-none p-2 border-b border-gray-400 w-full' type='email' placeholder='Email' />
          <input className='bg-transparent outline-none p-2 w-full' type='password' placeholder='Password' />

          <button className='py-2 px-5 bg-[#a7bcff] rounded w-full mb-2' type='submit'> Sign In</button>
          <p>You don't have an account? Register</p>
        </form>
      </div>
    </div>)
}

export default Login