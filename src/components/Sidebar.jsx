import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function SideBar() {
  const Styles = {
    minHeight: 'calc(100% - 40px)',
  };
  return (
    <div style={Styles} className='SideBar relative flex-1 bg-[#3e3c61] text-white'>
      <div className='sideBar_in fixed overflow-y-scroll w-[33.4%] top-0 bottom-0'>
        <Navbar />
        <Search />
        <div className='chatsContainer'>
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
          <Chats />
        </div>
      </div>
    </div>
  )
}

export default SideBar