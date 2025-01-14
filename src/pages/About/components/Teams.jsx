import React from 'react'

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import Forward from "../../../assets/svg/forward.svg"

const Teams = () => {
  return (
    <div className="w-full">
        <div 
            style={{
                backgroundImage: `url(${HeaderImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className="w-full h-[693px] flex relative justify-center"
        > 
            <div 
                className="bg-[#FFCC33] flex items-center justify-center w-[493px] h-[66px] rounded-tl-lg rounded-bl-lg py-5 px-10"
            >
                <p className="font-[350] font-grava text-[#002244] text-[20px]">Home</p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-grava text-[#002244] text-[20px]">About Us</p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-medium font-grava text-[#002244] text-[20px]">Board Members</p>
            </div>
        </div>

    </div>
  )
}

export default Teams