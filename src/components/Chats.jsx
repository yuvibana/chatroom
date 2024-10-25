import React from 'react'

function Chats() {
  return (
    <div className='Chats'>
      <user_div className="user flex gap-1 items-center">
        <img className='h-[22px] rounded-full w-[22px] object-cover' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?semt=ais_hybrid" alt='' />
        <span className='text-[16px]'>Jhon</span>
        <span className='text-[16px]'>user Chat Last Msg</span>
        <span className='logout py-1 px-2 bg-[#3e3c61] cursor-pointer rounded'>
          <RiLogoutCircleLine />
        </span>
      </user_div>
    </div>
  )
}

export default Chats