import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

function SideBar() {
  return (
    <div className='SideBar flex-1 bg-[#3e3c61] text-white'>
      <Navbar />
      <Search />
    </div>
  )
}

export default SideBar