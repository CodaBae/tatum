import React, { useState, useEffect, useRef } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRightLong } from 'react-icons/fa6';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Forward from "../../../assets/svg/forward.svg"

import Block from "../../../assets/png/block.png"
import Brick from "../../../assets/png/brick.png"
import Lever from "../../../assets/png/lever.png"
import Pipe from "../../../assets/png/pipe.png"
import Up from "../../../assets/png/up.png"
import File from "../../../assets/png/reload-file.png"
import Gold from "../../../assets/png/gold.png"
import Growth from "../../../assets/png/growth.png"
import House from "../../../assets/png/locked-house.png"
import Report from "../../../assets/png/report.png"
import Settings from "../../../assets/png/settings.png"
import One from "../../../assets/png/one.png"
import Two from "../../../assets/png/two.png"
import Three from "../../../assets/png/three.png"

import OfficeMan from "../../../assets/png/office-man.jpeg"

import "./css/Wealth.css"

const Wealth = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardHeight = 600; // Approximate height of each card
    const currentIndex = Math.floor(scrollPosition / cardHeight);
    setVisibleIndex(currentIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navigate = useNavigate()

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  
      
    const cardRef = useRef(null);
    const cardInnerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !cardInnerRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentageY = Math.min(Math.max((windowHeight - cardRect.top) / windowHeight, 0), 1);

      // Adjust scale and brightness
      const scale = 1 - percentageY * 0.1;
      const brightness = 1 - percentageY * 0.4;

      cardInnerRef.current.style.transform = `scale(${scale})`;
      cardInnerRef.current.style.filter = `brightness(${brightness})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    

  return (
    <div className="w-full mb-[56px] lg:mb-[194px]">
        <div 
            style={{
                backgroundImage: `url(${OfficeMan})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
            className="w-full h-[434px] md:h-[693px] flex relative items-center justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />

            <p className='font-grava font-bold z-10 text-[#fff] text-[32px] lg:text-[75px] '>Wealth Management</p>

            <div className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[115px] cursor-pointer' onClick={() => navigate(-1)}>
                <MdKeyboardBackspace className='w-5 h-5 mt-1 text-[#fff]' />
                <p className='font-grava text-[#fff] text-[20px] font-medium'>Go back</p>
            </div>
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px]">Home</p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px]">Private</p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px]">Wealth management</p>
            </div>
        </div>

        <div className='w-full px-5 lg:pl-[56px] lg:px-0 pt-[56px] lg:pt-[148px] pb-[112px] lg:pb-[120px] flex flex-col items-center gap-[32px] lg:gap-[56px]'>
            <div className='flex flex-col items-center gap-4 lg:w-[666px] mx-auto'>
                <p className='font-grava text-center text-[#002244] font-medium text-[24px] leading-[30px] lg:text-[48px] lg:leading-[60px] '>
                    Wealth Management for High Net Worth Individuals
                </p>
                <p className='font-[350] text-center lg:w-[444px] text-[#334E69] font-grava text-[20px]  '>
                    Experience peace of mind knowing your money is in good hands.
                </p>
            </div>
                                    {/* Desktop */}
            <div className='w-full'>
                <Swiper
                    modules={[Autoplay]} 
                    spaceBetween={20} // Space between slides
                    slidesPerView={'auto'} // Automatically adjust to fit the number of cards
                    grabCursor={true}
                    autoplay={{
                        delay: 3000, // Slide transition delay in milliseconds
                        disableOnInteraction: false, // Continue autoplay after interaction
                        }}
                    loop={true} // Enables infinite looping of slides
                    style={{
                        display: isMobile ? "none" : "block" 
                    }}
                >
                                            {/* Individual Card */}
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto ">
                        <img src={Block} alt="Block" className="w-[93px] h-[131px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Creation</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto">
                        <img src={Pipe} alt="Pipe" className="w-[85px] h-[114px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Growth</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto">
                        <img src={Up} alt="Up" className="w-[94px] h-[104px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Protection</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto">
                        <img src={Brick} alt="Brick" className="w-[69px] h-[124px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Generational Transfers</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto">
                        <img src={Lever} alt="Lever" className="w-[107px] h-[105px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Succession Planning</p>      
                    </SwiperSlide>                    
                </Swiper>
            </div>

                                    {/* Mobile */}
            <div className="w-full flex lm:hidden flex-col gap-5 ">
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-full ">
                    <img src={Block} alt="Block" className="w-[93px] h-[131px]" />
                    <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Creation</p> 
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-full ">
                    <img src={Pipe} alt="Pipe" className="w-[85px] h-[114px]" />
                    <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Growth</p>   
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-full ">
                    <img src={Up} alt="Up" className="w-[94px] h-[104px]" />
                    <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Protection</p>      
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-full ">
                    <img src={Brick} alt="Brick" className="w-[69px] h-[124px]" />
                    <p className="text-lg font-medium font-grava text-[#8A99A9]">Generational Transfers</p>       
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-full ">
                    <img src={Lever} alt="Lever" className="w-[107px] h-[105px]" />
                    <p className="text-lg font-medium font-grava text-[#8A99A9]">Succession Planning</p>      
                </div>
            </div>

            <div className='flex flex-col w-full md:flex-row items-center md:w-[443px] mx-auto gap-4'>
                <button
                    className='transition-all duration-300 ease-in-out bg-[#FFCC33] w-full md:w-[262px] h-[55px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                    type='button'
                >
                    <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Login to your account</p>
                    <FaArrowRightLong className='transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                </button>
                <button className='cursor-pointer border border-[#8A99A9] w-full md:w-[165px] h-[55px] flex items-center justify-center'>
                    <p className='text-[#8A99A9] font-medium text-[18px]'>Sign up</p>
                </button>
            </div>

        </div>

        <div 
            className='w-full pt-[56px] md:pt-[80px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] grid grid-cols-1 gap-[100px]'
        //     style={{
        //         gridTemplateRows: 'repeat(6, 1fr)',
        //     }}
        >
            <div 
                className='flex sticky top-[calc(8%+var(0rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]'
            >
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Personalized Investment Management
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Achieve your financial targets with our personalized investment management solutions. 
                            We guide you with expert portfolio construction, strategic asset allocation, and 
                            diversified approaches to maximize your returns.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={File} alt='File' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Schedule a Free Consultation</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={File} alt='File' className='md:w-[198px] m lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex sticky top-[calc(8%+var(2.25rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFFAEB] w-full rounded-[24px] h-[710px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Plan for a Comfortable Retirement
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            We help you create and implement strategies to build a robust retirement plan, 
                            accumulate wealth, and save more than enough to fund a fulfilling life after work.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Gold} alt='File' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Contact Us for a Personalized Plan</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Gold} alt='File' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FEF3F2] w-full rounded-[24px] h-[678px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Strategic Tax Planning for Smarter Investments
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Keep more of your hard-earned money. 
                            Get the help you need to optimize your investments for tax efficiency through 
                            strategies like tax-loss harvesting and maximizing eligible deductions.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Report} alt='Report' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Request a Portfolio Review</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Report} alt='Report' className='md:w-[198px] m lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFFAEB] w-full rounded-[24px] h-[638px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Smart Risk Management for a Worry-Free Life
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Be prepared. Protect what matters most with comprehensive risk management 
                            and insurance solutions for life, health, disability, and long-term care.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Settings} alt='Settings' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Get a Free Insurance Quote</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='5/12 hidden md:flex justify-end'>
                    <img src={Settings} alt='Settings' className='md:w-[198px] m lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F0FBFF] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Comprehensive Asset Protection and Distribution
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Plan for the future with comprehensive Estate Planning services. 
                            We help you distribute your assets thoughtfully and create a personalized plan, 
                            including wills, trusts, and charitable giving strategies, to protect your assets 
                            and facilitate a smooth transition.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={House} alt='House' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Download Our Estate Planning Guide</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={House} alt='House' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#ECFDF3] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[60px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Expert Support for Budgeting and Financial Growth
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Get access to a personal account manager and a comprehensive set of tools 
                            to help you manage your day-to-day finances, including budgeting and cash 
                            flow optimization for wealth preservation.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Growth} alt='Growth' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px]'>Learn more</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-0.5' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Growth} alt='Growth' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

        </div>


        <div className='flex flex-col items-center justify-center gap-[32px] lg:gap-[56px] w-full px-5 lg:px-[56px] '>
            <p className='text-[#002244] font-grava font-medium text-[24px] lg:text-[48px]'>Get Started in 3 Easy Steps</p>
            <div className='w-full flex flex-col md:flex-row item-center gap-5'>
                <div className='bg-[#F9FAFB] md:w-4/12 lg:w-[429px] h-[270px] rounded-[24px] flex flex-col items-center justify-center gap-[41px]'>
                    <img src={One} alt='One' className='w-[25px]' />
                    <p className='font-grava font-medium tracking-wide text-base lg:text-[20px] text-[#8A99A9]'>Sign Up or Log In</p>
                </div>
                <div className='bg-[#F9FAFB] md:w-4/12 lg:w-[429px]  h-[270px] rounded-[24px] flex flex-col items-center justify-center gap-[41px]'>
                    <img src={Two} alt='Two' className='w-[50px]' />
                    <p className='font-grava font-medium tracking-wide text-base lg:text-[20px] text-[#8A99A9]'>Define Your Financial Goals</p>
                </div>
                <div className='bg-[#F9FAFB] md:w-4/12 lg:w-[429px] h-[270px]  rounded-[24px] flex flex-col items-center justify-center gap-[41px]'>
                    <img src={Three} alt='Three' className='w-[50px]' />
                    {/* <p className='font-[900] font-grava text-[112px] text-[#E6E9EC]'>3</p> */}
                    <p className='font-grava font-medium tracking-wide text-center text-base lg:text-[20px] text-[#8A99A9]'>Connect with Your Personal Account Manager</p>
                </div>
            </div>
            <div className='flex flex-col w-full md:flex-row items-center md:w-[443px] mx-auto gap-4'>
                <button
                    className='transition-all duration-300 ease-in-out bg-[#FFCC33] w-full md:w-[262px] h-[55px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                    type='button'
                >
                    <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Login to your account</p>
                    <FaArrowRightLong className='transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                </button>
                <button className='cursor-pointer border border-[#8A99A9] w-full md:w-[165px] h-[55px] flex items-center justify-center'>
                    <p className='text-[#8A99A9] font-medium text-sm lg:text-[18px]'>Sign up</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Wealth