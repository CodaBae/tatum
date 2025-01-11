import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlLock } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 
import Padlock from "../assets/svg/padlock.svg"
import Savings from "../assets/svg/savings.svg"
import Current from "../assets/svg/current.svg"
import Card from "../assets/svg/card.svg"
import Mortgage from "../assets/svg/mortgage.svg"
import Insurance from "../assets/svg/insurance.svg"
import Faq from "../assets/svg/faq.svg"

import './css/Header.css';

const Header = () => {
  const [showAppsDropdown, setShowAppsDropdown] = useState(false);

  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setShowAppsDropdown(true)
  }

  const handleMouseLeave = () => {
    setShowAppsDropdown(false)
  }

  return (
    <div className='bg-[#fff] fixed z-50 w-full px-[46px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[109px] h-[44px] cursor-pointer' onClick={() => navigate("/")}/>
        <div className='flex items-center gap-[32px]'>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/")}>Home</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => navigate("/about")}>About Us</p>
            <div className="relative inline-block dropdown-wrapper">
              <div 
                  onClick={() => {navigate("/personal") }}
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
              >
                Personal 
              </div> 
              {showAppsDropdown && (
                  <div className="dropdown-menu bg-[#fff] shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[566px]" onMouseOver={() => setShowAppsDropdown(true)}> {/*  */}
                      <div className="block flex items-start gap-5 cursor-pointer px-8 py-10 text-BLUE-_200">
                        <div className="flex flex-col gap-4 w-[237px]">
                          <div className='flex flex-row gap-1.5'>
                            <img src={Savings} alt='Savings' className="w-[40px] h-[40px]" />
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Savings Accounts</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Flexible options to grow your savings.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-1.5'>
                            <img src={Current} alt='Current' className="w-[40px] h-[40px]"/>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Current Accounts</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Easy solutions for daily banking.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-1.5'>
                            <img src={Card} alt='Card' className="w-[40px] h-[40px]"/>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Cards ( Debit, Credit, Virtual)</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Seamless payments anywhere, anytime.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-1.5'>
                            <img src={Mortgage} alt='Mortgage' className="w-[40px] h-[40px]"/>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Loans and Mortgages</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Tailored financing to achieve your goals.</p>
                            </div>
                          </div>

                        </div>
                        <div className="bg-[#E6E9EC] w-[1px] h-[208px]"></div>
                        <div className="flex flex-col gap-4">
                          <div className='flex flex-row gap-1.5'>
                            <img src={Insurance} alt='Insurance' className="w-[40px] h-[40px]"/>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Insurance Services</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Protect what matters most.</p>
                            </div>
                          </div>
                          <div className='flex flex-row gap-1.5'>
                            <img src={Faq} alt='Faq' className="w-[40px] h-[40px]"/>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>FAQ</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Quick answers to your banking questions.</p>
                            </div>
                          </div>
                         </div>
                      </div>
                  </div>
              )}
          </div>
  
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
            className='bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#090540]'
            type='button'
            onClick={() => navigate("/")}
          >
            <SlLock
              className='w-5 h-5 text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]'
            />
            <p
              className='font-medium text-base font-grava text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]'
            >
              Internet Banking
            </p>
          </button>


          {/* <button
            className='bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:transition hover:duration-100 hover:delay-75 hover:ease-in-out hover:bg-[#090540] flex items-center justify-center'
            type='button'
          >
            <SlLock className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' onClick={() => navigate("/")} />
            <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Internet Banking</p>
          </button> */}
        </div>        
    </div>
  )
}

export default Header