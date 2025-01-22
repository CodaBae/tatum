import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Man from "../../../assets/png/man.png"

import InstagramWhite from "../../../assets/svg/instagram_white.svg"
import TwitterWhite from "../../../assets/svg/twitter_white.svg"
import LinkedInWhite from "../../../assets/svg/linkedin_white.svg"
import FacebookWhite from "../../../assets/svg/facebook_white.svg"


const TeamDetails = () => {

  const navigate = useNavigate();

  const isTab = window.innerWidth < 1028;
  const isMobile = window.innerWidth < 768;  

  return (
    <div className='w-full'>
      <div 
          className="w-full h-[434px] md:h-[534px] bg-[#FFCC33] flex py-[160px] md:py-[220px] lm:py-[229px] relative justify-center"
        > 
          {/* <div className="absolute inset-0 w-full h-auto bg-[#0005]" /> */}
          <div className='w-[350px] md:w-[851px] flex items-center flex-col mx-auto gap-6 lg:gap-[40px]'>

            <div className='flex flex-col items-center gap-2 lg:gap-4'>
              <p className='text-[#002244] font-semibold text-[32px] leading-[32px] text-center lg:text-[48px] font-grava lg:leading-[48px]'>Aminatu Dahiru Chiroma</p>
              <p className='font-[350] text-[20px] text-[#002244] leading-[26px] font-grava '>Non-Executive Director</p>
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
            <MdKeyboardBackspace className='w-5 h-5 mt-0.5 text-[#002244] transition-all duration-300 group-hover:mr-2' />
            <p className='font-grava text-[#002244] text-[20px] font-medium whitespace-nowrap'>Go back</p>
          </div>

      </div>
      <div className='flex flex-col gap-4 lg:gap-[40px] px-5 lg:px-[56px] pt-[40px] lg:pt-[80px] pb-[56px] lg:pb-[120px]'>
        <div 
          data-aos="fade-up" 
          data-aos-duration="1000"
          className='flex flex-col lg:flex-row items-start gap-6 lg:gap-[48px]'
        >
          <img src={Man} alt='Man' className='md:w-full lg:w-[429px]' />
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-4'>
              <p className='font-[350] font-grava text-[#002244] text-lg lg:text-[24px] leading-[27px] lg:leading-[38px]'>
                Aminatu Chiroma is a highly accomplished individual and Group Managing Director of 
                Binani Group of Companies with decades of experience leading diverse teams and 
                driving organizational growth through strategic planning, operational efficiency, 
                and business development.
              </p>
              <p className='font-[350] font-grava text-[#002244] text-lg lg:text-[24px] leading-[27px] lg:leading-[38px]'>
                Proven track record in fostering strong partnerships, streamlining operations, 
                and implementing key performance metrics to enhance productivity and achieve company goals. 
                Expertise in navigating complex challenges, ensuring compliance, and cultivating a culture of 
                employee development.
              </p>
              <p className='font-grava font-[350] text-[#002244] text-lg lg:text-[24px] leading-[27px] lg:leading-[38px]'>
                Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, 
                with a deep understanding of the energy and precious metals industries. 
                Demonstrated leadership in expanding market presence, optimizing supply chains, 
                and integrating sustainable practices across international operations. 
                She holds an advanced Postgraduate Diploma in Business Leadership and Management 
                and a diverse skill set in project management, risk mitigation, legal compliance, 
                and technology integration. Recognized for excellence within several industry awards, 
                including the “Beacon of Hope for Africa’s Development” and “West African Merit Award.”
              </p>
            </div>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default TeamDetails