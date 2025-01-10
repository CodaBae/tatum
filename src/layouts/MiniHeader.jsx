import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 
import Menu from "../assets/svg/menu.svg" 
import Close from "../assets/svg/close.svg" 

import MobileNavBar from './MobileNavBar'




const MiniHeader = () => {
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()
 

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[100%] h-[58px] bg-[#fff] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[69px] h-[28px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2 ' onClick={() => setOpen(true)}>
              <CiSearch className='w-5 h-5 text-[#002244]'/>
              <img src={open ? Close : Menu} alt='icon' className='w-[24px] h-[24px]' />
            </div>
     
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader