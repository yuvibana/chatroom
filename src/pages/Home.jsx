import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className='Home bg-[#a7bcff] min-h-[100vh] flex justify-center items-center'>
      <div className='max-w-[100%] w-full m-auto'>
        <div className='flex'>
          <SideBar />
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home