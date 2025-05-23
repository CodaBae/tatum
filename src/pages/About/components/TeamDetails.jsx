import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Man from "../../../assets/png/man.png"
import HeadShot from "../../../assets/png/headshot_mock_up.png"


import Clip from "../../../assets/svg/clip_triangle.svg";
import InstagramWhite from "../../../assets/svg/instagram_white.svg"
import TwitterWhite from "../../../assets/svg/twitter_white.svg"
import LinkedInWhite from "../../../assets/svg/linkedin_white.svg"
import FacebookWhite from "../../../assets/svg/facebook_white.svg"


const TeamDetails = () => {

  const navigate = useNavigate();

  const isTab = window.innerWidth < 1028;
  const isMobile = window.innerWidth < 768;  

  const { state } = useLocation()
  const detailsRef = useRef(null)

  
  // useEffect(() => {   
  //     if (state?.section === "details" && detailsRef.current) {
  //         detailsRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  // }, [state])

  return (
    <div className='w-full overflow-hidden'>
          
          {/* Desktop Hero Section  */}
      <div className='h-[160px] hidden lm:flex justify-end items-end relative bg-[#FFCC33]'>
        <div 
          className='absolute bottom-6 right-1 hidden md:flex items-center gap-3 w-[270px] cursor-pointer group' 
          onClick={() => navigate('/about/teams')}
        >
          <MdKeyboardBackspace className='w-5 h-5 mt-0.5 text-[#002244] transition-all duration-500 group-hover:mr-2' />

          <p className='font-grava text-[#002244] leading-[25px] tracking-[0.01em] text-[16px] font-[400] whitespace-nowrap'>Back to leadership team</p>

        </div>
      </div>
        

            {/* Mobile Hero Section  */}
      <div 
          className="lm:hidden w-full h-[434px] md:h-[534px] bg-[#FFCC33] flex py-[160px] md:py-[220px] lm:py-[229px] relative justify-center"
        > 
          <div className='w-[350px] md:w-[851px] flex items-center flex-col mx-auto gap-6 lg:gap-[40px]'>

            <div className='flex flex-col items-center gap-2 lg:gap-4'>
              <p className='text-[#002244] font-semibold text-[34px] leading-[32px] text-center lg:text-[48px] font-grava lg:leading-[48px]'>{state?.team.name}</p>
              <p className='font-[300] text-[20px] text-[#002244] leading-[26px] font-grava '>{state?.team.role}</p>
            </div>

            <div className='flex items-center gap-3'>
              <div className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                <img src={InstagramWhite} alt='InstagramWhite' className='w-5 h-5 lg:w-6 lg:h-6' />
              </div>
              <div className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                <img src={TwitterWhite} alt='TwitterWhite' className='w-5 h-5 lg:w-6 lg:h-6' />
              </div>
              <div className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                <img src={LinkedInWhite} alt='LinkedInWhite' className='w-5 h-5 lg:w-6 lg:h-6' />
              </div>
              <div className='h-[40px] w-[40px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                <img src={FacebookWhite} alt='FacebookWhite' className='w-5 h-5 lg:w-6 lg:h-6' />
              </div>
            </div>

          </div>
          <div 
            className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[115px] cursor-pointer group' 
            onClick={() => navigate(-1)}
          >
            <MdKeyboardBackspace className='w-5 h-5 mt-0.5 text-[#002244] transition-all duration-500 group-hover:mr-2' />
            <p className='font-grava text-[#002244] text-[20px] font-medium whitespace-nowrap'>Go back</p>
          </div>

      </div>

      <div className='flex flex-col gap-4 lg:gap-[40px] px-5 lg:pl-[50px] lg:pr-[59px] pt-[40px] lg:py-[74px] pb-[56px]'>
        <div 
          data-aos="fade-up" 
          data-aos-duration="1000"
          className='flex flex-col lm:flex-row items-start gap-6 lg:gap-[55px]'
        >
          <div className="flex flex-col gap-[18px] w-[429px]">
            <div className="relative w-auto cursor-pointer   group overflow-hidden rounded-lg">
              <img
                src={state?.team.pic}
                alt="HeadShot"
                className="lm:w-[429px] w-[350px] rounded-[24px]"
              />
              <div className=" absolute -bottom-3 right-[4.9rem] lg:-bottom-2 h-[45.32px]  lg:-right-1 lg:w-[47.87px] lg:h-[53.32px] z-10 clip-path-triangle">
                <img src={Clip} alt='Clip' className='teamBase' />
              </div>
              <div className=" absolute -bottom-2 right-[4.7rem] lg:-bottom-2 lg:right-0 w-[50px] h-[55px] lg:w-[40.87px] lg:h-[53.32px]  bg-white clip-path-triangle"></div>
            </div>
            <div className='w-[429px] hidden lm:flex flex-col items-start gap-6 lg:gap-3'>

              <div className='flex flex-col items-start '>
                <p className='font-[350] text-[18.88px] text-[#002244] leading-[26px] lm:leading-[32.82px] font-grava '>{state?.team.role}</p>
                <p className='text-[#002244] font-[600] text-[24px] leading-[34px] font-grava '>{state?.team.name}</p>

              </div>

              <div className='flex items-center gap-3'>
                <div className='h-[40px] w-[40px] lg:h-[35px] lg:w-[35px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                  <img src={InstagramWhite} alt='InstagramWhite' className='w-5 h-5' />
                </div>
                <div className='h-[40px] w-[40px] lg:h-[35px] lg:w-[35px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                  <img src={TwitterWhite} alt='TwitterWhite' className='w-5 h-5 ' />
                </div>
                <div className='h-[40px] w-[40px] lg:h-[35px] lg:w-[35px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                  <img src={LinkedInWhite} alt='LinkedInWhite' className='w-5 h-5 ' />
                </div>
                <div className='h-[40px] w-[40px] lg:h-[35px] lg:w-[35px] rounded-full bg-[#002244] flex items-center justify-center cursor-pointer'>
                  <img src={FacebookWhite} alt='FacebookWhite' className='w-5 h-5 ' />
                </div>
              </div>

            </div>
          </div>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-4'>
              <div dangerouslySetInnerHTML={{ __html: state.team.bio }}/>
             
              {/* <p className='font-grava font-[300] text-[#002244] text-lg lg:text-[24px] leading-[27px] lg:leading-[38px]'>
              {state?.team.bio}
              </p> */}
            </div>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default TeamDetails