import React from 'react'

function Chats() {
  return (
    <div className='Chats py-1 px-2 border-b border-[#a1a1a1] cursor-pointer transition-all hover:bg-[#353261]'>
      <div className="user flex gap-1 items-center">
        <img className='h-[30px] rounded-full w-[30px] object-cover' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?semt=ais_hybrid" alt='' />
        <div className='text'>
          <span className='text-[14px] block font-bold'>Jhon</span>
          <span className='text-[14px] block'>Hello</span>
        </div>
      </div>
    </div>
  )
}

export default Chats