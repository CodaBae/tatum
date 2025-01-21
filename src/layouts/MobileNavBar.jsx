import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useNavigate } from 'react-router-dom'


const MobileNavBar = ({ handleClose }) => {
    const [openAboutDropdown, setOpenAboutDropdown] = useState(false);
    const [openPersonalDropdown, setOpenPersonalDropdown] = useState(false);
    const [openSmeDropdown, setOpenSmeDropdown] = useState(false);
    const [openCorporateDropdown, setOpenCorporateDropdown] = useState(false);
    const [openPrivateDropdown, setOpenPrivateDropdown] = useState(false);
    const [openResourcesDropdown, setOpenResourcesDropdown] = useState(false);
    
    const navigate = useNavigate()

    const handleAbout = () => {
      setOpenAboutDropdown(!openAboutDropdown)
    }

    const handlePersonal = () => {
      setOpenPersonalDropdown(!openPersonalDropdown)
    }

    const handleSme = () => {
      setOpenSmeDropdown(!openSmeDropdown)
    }

    const handleCorporate = () => {
      setOpenCorporateDropdown(!openCorporateDropdown)
    }

    const handlePrivate = () => {
      setOpenPrivateDropdown(!openPrivateDropdown)
    }

    const handleResources = () => {
      setOpenResourcesDropdown(!openResourcesDropdown)
    }



  return (
    <div 
      className="fixed top-14 bg-[#FDF7E7] w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" 
      style={{zIndex: 9999}}
    >
       <div className="px-5 py-[32px] flex flex-col gap-[36px]">
          <p className="font-medium font-grava text-[#334E69] text-base uppercase cursor-pointer" onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}}>Home</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between" onClick={handleAbout}>
              <p className="font-medium font-grava text-[#334E69] text-base uppercase">About Us</p>
              {openAboutDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
              {
                openAboutDropdown && (
                  <div className='flex flex-col gap-6 mt-3'>
                      <p onClick={() => {navigate("/about"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">COMPANY OVERVIEW</p>
                      <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">MISSION AND VISION</p>
                      <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">SERVICES</p>
                      <p onClick={() => {navigate("/teams"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">BOARD MEMBERS</p>
                      <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">CAREERS</p>
                  </div>
                )
              }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handlePersonal}>
              <p className="font-medium font-grava text-[#334E69] text-base tracking-wide uppercase">PERSONAL</p>
              {openPersonalDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openPersonalDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Savings Accounts</p>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Current Accounts</p>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Cards ( Debit, Credit, Virtual)</p>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Loans and Mortgages</p>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Insurance Services</p>
                    <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">FAQ</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleSme}>
              <p className="font-medium font-grava text-[#334E69] text-base tracking-wide uppercase">sme</p>
              {openSmeDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openSmeDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Business Accounts</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Payment solutions</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Loans and Credit Lines</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Expense Management Tools</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Business Insurance</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Financial Planning and Advisory</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">FAQ</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleCorporate}>
              <p className="font-medium font-grava text-[#334E69] tracking-wide text-base uppercase">Corporate</p>
              {openCorporateDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openCorporateDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Treasury Management</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Trade Finance</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Investment Banking</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Payroll Management</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Corporate Lending and Leasing</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Risk Management</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">FAQ</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handlePrivate}>
              <p className="font-medium font-grava text-[#334E69] text-base tracking-wide uppercase">Private</p>
              {openPrivateDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openPrivateDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Wealth Management</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Investment Advisory</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Estate and Trust Planning</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Personal Loans and Credit</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Custom Financial Solutions</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">FAQ</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleResources}>
              <p className="font-medium font-grava text-[#334E69] text-base tracking-wide uppercase">Resources</p>
              {openResourcesDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openResourcesDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Blog</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Press Release</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Media Gallery</p>
                  <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide text-[#334E69] text-base uppercase">Branch & ATM Locator</p>
                </div>
              )
            }
          </div>
          <p className="font-medium font-grava tracking-wide text-[#334E69] text-base uppercase">Help & Support</p>
          <p className="font-medium font-grava tracking-wide text-[#334E69] text-base uppercase">Contact us</p>
       </div>
    </div>
  )
}

export default MobileNavBar