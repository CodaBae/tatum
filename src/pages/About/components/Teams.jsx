import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Forward from "../../../assets/svg/forward.svg"
import Management from './Management';
import Director from './Director';

const Teams = () => {
    const [activeTab, setActiveTab] = useState("board")
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);


   

    const navigate = useNavigate()

    const teamsRef = useRef(null);
    const { state } = useLocation();

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);

  

    // useEffect(() => {   
    //     if (state?.section === "teams" && teamsRef.current) {
    //         teamsRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state])



  return (
    <div className="w-full overflow-hidden" ref={teamsRef}>
        <div 
            style={{
                backgroundImage: "url(https://res.cloudinary.com/code-idea/image/upload/v1739531942/meeting_elj39a.jpg)",                          //`url(${isTab ? HeaderImgMobile : HeaderImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: `${isMobile ? "434px" : "693px"}`,
                backgroundPosition: "center",  
            }}
            className="w-full h-[434px] md:h-[693px] flex relative justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p 
                    className="font-[300] font-grava text-[#002244] text-[14px] lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/", {
                        state: { section: "home" },
                    })}
                >
                    Home
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-[300] font-grava text-[#002244] whitespace-nowrap text-[14px] lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/about", {
                        state: { section: "about" },
                    })}
                >
                    About Us
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-semibold font-grava whitespace-nowrap text-[#002244] text-[14px] lm:text-[20px] "
                    // onClick={() => navigate("/about/teams", {
                    //     state: { section: "teams" },
                    // })}
                >
                    Leadership Team 
                </p>
            </div>
        </div>

        <div className='mt-[56px] lg:mt-[84px] w-full px-5 lg:px-[56px] '>  {/* lg:mt-[120px] */}
            <p className='font-grava text-[20px] lg:text-[27px] text-[#002244] leading-[30px] lg:leading-[40px] tracking-[0.064px]'>
                Our team of experienced leaders is focused on serving our clients, 
                transforming our business, generating long-term shareholder value 
                and driving a culture of excellence and accountability.  
            </p>
        </div>

        <div className='bg-[#fff] pt-[56px] pb-[56px] px-5 lg:px-[56px] flex flex-col gap-2'> {/* lg:pb-[120px] lg:pt-[120px]*/}
            <div className='flex items-center gap-5 lg:gap-[32px] border border-[#D0D5DD] border-x-0 border-t-0'>
                {/* <div className={`${activeTab === "management" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[289px] flex items-start py-3 cursor-pointer `} onClick={() => handleTabChange("management")}>
                    <p className={`${activeTab === "management" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[40px] font-normal`}>
                        Management Team
                    </p>
                </div> */}
                <div className={`${activeTab === "board" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[289px] flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("board")}>
                    <p className={`${activeTab === "board" ? "text-[#002244]" : "text-[#002244]"} font-grava text-base lg:text-[30px] font-normal`}>
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