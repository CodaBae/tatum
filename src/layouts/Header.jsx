import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 
import Padlock from "../assets/svg/padlock.svg"
import { SlLock } from 'react-icons/sl'

const Header = () => {
  
  const navigate = useNavigate()

  return (
    <div className='bg-[#fff] fixed z-50 w-full px-[46px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[109px] h-[44px] cursor-pointer' onClick={() => navigate("/")}/>
        <div className='flex items-center gap-[32px]'>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/")}>Home</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/about")}>About Us</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/personal")}>Personal</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/sme")}>SME</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/corporate")}>Corporate</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/private")}>Private</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/resources")}>Resources</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/help-and-support")}>Help & Support</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/contact Us")}>Contact Us</p>
        </div>
        <div className='flex items-center gap-[15px]'>
          <CiSearch className='w-5 h-5 text-[#002244]'/>
          <button
            className='bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
            type='button'
          >
            <SlLock className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' onClick={() => navigate("/")} />
            {/* <img src={Padlock} alt="Padlock" className='w-5 h-5' /> */}
            <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Internet Banking</p>
          </button>
        </div>        
    </div>
  )
}

export default Header