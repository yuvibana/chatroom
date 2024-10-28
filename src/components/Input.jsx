import React from 'react'
import { GrGallery } from "react-icons/gr";

function Input() {
  return (
    <div className='input bg-white flex justify-between items-center p-2 fixed bottom-0 right-0 w-[67%]'>
      <input type='text' className='p-2 w-[80%] outline-none' placeholder='Type something...' />
      <div className='iconsdiv_input'>
        <div className='iconsdiv flex items-center gap-3'>
          <img src="" alt='' />
          <div className='filebox'>
            <input type='file' className='hidden' id='file' />
            <label className='text-3xl cursor-pointer text-gray-700' htmlFor='file'>
              <GrGallery />
            </label>
          </div>
          <button className='btn text-xl bg-blue-950 text-white py-2 px-3 rounded'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Input