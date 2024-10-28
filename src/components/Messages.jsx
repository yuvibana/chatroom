import React, { useState } from 'react'

function Messages() {
  // const [owner, setOwner] = useState('owner')
  const [owner, setOwner] = useState('')

  return (
    <div className={`messages bg-gray-200`}>
      <div className={`flex items-start gap-5 p-2 ${owner}`}>
        <div className='messageInfo '>
          <img className='h-[35px] w-[35px] m-auto rounded-full object-cover' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?semt=ais_hybrid" alt="" />
          <span className='status text-sm text-gray-400'>Just Now</span>
        </div>
        <div className='messageContent'>
          <p className='py-1 mesage_info_in px-2 text-white bg-blue-950 rounded'>hello</p>
          <img className='w-[50%]' src="https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?semt=ais_hybrid" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Messages