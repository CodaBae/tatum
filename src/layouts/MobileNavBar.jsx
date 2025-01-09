import React, { useState } from 'react'
// import { IoClose } from 'react-icons/io5';
// import Close from "../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'


const MobileNavBar = ({ handleClose }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    
    const navigate = useNavigate()


    const Dropdown = () => {
        setShowDropdown(prev => !prev)
    }



  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        {/* <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-end items-center">
              <IoClose className="w-5 h-5 cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <p onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-neue  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Home</p>
                <p onClick={() => {navigate("/about"); window.scrollTo(0,0); handleClose()}} className="font-neue  cursor-pointer font-semibold text-[17px]  text-[#00141B]">About</p>
                <p onClick={() => {navigate("/services"); window.scrollTo(0,0); handleClose()}} className="font-neue  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Services</p>
                <p onClick={() => {navigate("/gallery"); window.scrollTo(0,0); handleClose()}} className="font-neue  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Gallery</p>
            </div>
          
        </div> */}
    </div>
  )
}

export default MobileNavBar