import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Forward from "../../../assets/svg/forward.svg"
import Management from './Management';
import Director from './Director';

const Teams = () => {
    const [activeTab, setActiveTab] = useState("management")

    const navigate = useNavigate()

    const teamsRef = useRef(null);
    const { state } = useLocation();

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    useEffect(() => {   
        if (state?.section === "teams" && teamsRef.current) {
            teamsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state])

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  

  return (
    <div className="w-full" ref={teamsRef}>
        <div 
            style={{
                backgroundImage: `url(${isTab ? HeaderImgMobile : HeaderImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
            className="w-full h-[434px] md:h-[793px] flex relative justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p 
                    className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/", {
                        state: { section: "home" },
                    })}
                >
                    Home
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/about", {
                        state: { section: "about" },
                    })}
                >
                    About Us
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-[350] font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px] "
                    // onClick={() => navigate("/about/teams", {
                    //     state: { section: "teams" },
                    // })}
                >
                    Board Members
                </p>
            </div>
        </div>
        <div className='bg-[#fff] pt-[82px] lg:pt-[152px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] flex flex-col gap-2'>
            <div className='flex items-center gap-5 lg:gap-[32px] border border-[#D0D5DD] border-x-0 border-t-0'>
                <div className={`${activeTab === "management" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[369px] flex items-start py-3 cursor-pointer `} onClick={() => handleTabChange("management")}>
                    <p className={`${activeTab === "management" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[40px] font-normal`}>
                        Management Team
                    </p>
                </div>
                <div className={`${activeTab === "board" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[369px] flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("board")}>
                    <p className={`${activeTab === "board" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[40px] font-normal`}>
                        Board of Directors
                    </p>
                </div>
            </div>
            <>
                {activeTab === "management" && <Management />}
                {activeTab === "board" && <Management />} {/* Director */}
            </>
        </div>


    </div>
  )
}

export default Teams