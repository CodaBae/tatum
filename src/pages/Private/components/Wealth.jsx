import React, { useState, useEffect, useRef } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRightLong } from 'react-icons/fa6';

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
    const [activeCard, setActiveCard] = useState(0);
    const cardsRef = useRef([]);

    const wealthRef = useRef(null);
    const { state } = useLocation();


    const navigate = useNavigate()

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  
    
    
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               const index = cardsRef.current.indexOf(entry.target);
//               setActiveCard(Math.min(index, cardsRef.current.length - 1));
//             }
//           });
//         },
//         { 
//           threshold: 0.4,
//           rootMargin: '0px 0px -30% 0px' 
//         }
//       )

//     cardsRef.current.forEach(card => {
//       if (card) observer.observe(card);
//     });

//         return () => observer.disconnect();
//     }, []);

    // Helper function to assign refs
    
    useEffect(() => {
        const handleScroll = () => {
          cardsRef.current.forEach((card, index) => {
            if (!card) return;
            
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const progress = Math.min(1, Math.max(0, (windowHeight - cardTop) / windowHeight));
            
            const scale = 1 - (0.1 * (cardsData.length - 1 - index)) * progress;
            const brightness = 1 - (0.4 * (cardsData.length - 1 - index)) * progress;
            
            // card.style.transform = `scale(${scale})`;
            // card.style.filter = `brightness(${brightness})`;
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    
    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
        cardsRef.current.push(el);
        }
    };

    useEffect(() => {
      if (state?.section === "wealth" && wealthRef.current) {
        wealthRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [state]);

    const cardsData = [
        {
            title: "Personalized Investment Management",
            content: `Achieve your financial targets with our personalized investment management solutions. 
                We guide you with expert portfolio construction, strategic asset allocation, and diversified 
                approaches to maximize your returns.`,
            navTitle: "Schedule a Free Consultation",
            img: File
        },
        {
            title: "Plan for a Comfortable Retirement",
            content: `We help you create and implement strategies to build a robust retirement plan, 
                    accumulate wealth, and save more than enough to fund a fulfilling life after work.`,
            navTitle: "Contact Us for a Personalized Plan",
            img: File
        },
        {
            title: "Plan for a Comfortable Retirement",
            content: `We help you create and implement strategies to build a robust retirement plan, 
                    accumulate wealth, and save more than enough to fund a fulfilling life after work.`,
            navTitle: "Contact Us for a Personalized Plan",
            img: File
        },
    ]

  return (
    <div className="w-full mb-[56px] lg:mb-[194px]" ref={wealthRef}>
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

            <div className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[125px] cursor-pointer group' onClick={() => navigate(-1)}>
                <MdKeyboardBackspace className='w-5 h-5 mt-[2px] text-[#fff] group-hover:mr-2' />
                <p className='font-grava text-[#fff] text-[20px] font-medium whitespace-nowrap transition-all duration-300 group-hover:ml-2'>Go back</p>
            </div>
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/", {
                        state: { section: "home" },
                    })}
                >
                    Home
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/private", {
                        state: { section: "private" },
                    })}
                >
                    Private
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px]">Wealth management</p>
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
                    slidesPerView={'4'} // Automatically adjust to fit the number of cards
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
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center gap-5 bg-[#F9FAFB] h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto lg:w-[217px] ">
                        <img src={Block} alt="Block" className="w-[93px] h-[131px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Creation</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto lg:w-[217px]">
                        <img src={Pipe} alt="Pipe" className="w-[85px] h-[114px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Growth</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto lg:w-[217px]">
                        <img src={Up} alt="Up" className="w-[94px] h-[104px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Wealth Protection</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto lg:w-[217px]">
                        <img src={Brick} alt="Brick" className="w-[69px] h-[124px]" />
                        <p className="text-lg font-medium font-grava text-[#8A99A9]">Generational Transfers</p>      
                    </SwiperSlide>
                    <SwiperSlide className="flex-shrink-0 flex flex-col items-center justify-center bg-[#F9FAFB] gap-5 h-[232px] rounded-[24px] w-[317px] sm:w-[80%] md:w-auto lg:w-[217px]">
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
                    <FaArrowRightLong className='transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33] mt-1' />
                </button>
                <button 
                    className='transition-all duration-300 ease-in-out group hover:bg-[#002244] cursor-pointer border border-[#8A99A9] w-full md:w-[165px] h-[55px] flex items-center justify-center'
                    type='button'
                >
                    <p className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] text-[#8A99A9] font-medium text-[18px]'>Sign up</p>
                </button>
            </div>

        </div>

                    {/* Stacking Cards */}
        {/* <div 
            className='w-full pt-[56px] md:pt-[80px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] grid grid-cols-1 gap-[100px]'
        >
            <div 
                ref={addToRefs} 
                className={`stacking-card ${activeCard === 0 ? "active" : ""} flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
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
                    <div className='flex items-center gap-2 cursor-pointer w-full group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Schedule a Free Consultation</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={File} alt='File' className='md:w-[198px] m lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div 
                ref={addToRefs}
                className={`sticky top-4 transition-all duration-300 ${
                    activeCard === 1 ? 'z-[60] scale-100' : 'z-[50] scale-95 opacity-90'
                } flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
            >
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
                    <div className='flex items-center gap-2 w-full group cursor-pointer'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Contact Us for a Personalized Plan</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-[1px] group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Gold} alt='Gold' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div 
                ref={addToRefs}
                className={`sticky top-4 transition-all duration-300 ${
                    activeCard === 2 ? 'z-[60] scale-100' : 'z-[50] scale-95 opacity-90'
                } flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
            >
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Request a Portfolio Review</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Report} alt='Report' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div 
                ref={addToRefs}
                className={`sticky top-4 transition-all duration-300 ${
                    activeCard === 3 ? 'z-[60] scale-100' : 'z-[50] scale-95 opacity-90'
                } flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
            >
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
                    <div className='flex items-center gap-2 w-full group cursor-pointer '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Get a Free Insurance Quote</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='5/12 hidden md:flex justify-end'>
                    <img src={Settings} alt='Settings' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div 
                ref={addToRefs}
                className={`sticky top-4 transition-all duration-300 ${
                    activeCard === 4 ? 'z-[60] scale-100' : 'z-[50] scale-95 opacity-90'
                } flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
                // className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F0FBFF] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'
            >
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Download Our Estate Planning Guide</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={House} alt='House' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div 
                ref={addToRefs}
                className={`sticky top-4 transition-all duration-300 ${
                    activeCard === 5 ? 'z-[60] scale-100' : 'z-[50] scale-95 opacity-90'
                } flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]`}
                // className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#ECFDF3] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'
            >
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Learn more</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Growth} alt='Growth' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

        </div> */}

<div 
            className='w-full pt-[56px] md:pt-[80px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] grid grid-cols-1 gap-[100px]'
        >
            <div 
                className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F6F6FD] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]'
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
                    <div className='flex items-center gap-2 cursor-pointer w-full group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Schedule a Free Consultation</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={File} alt='File' className='md:w-[198px] m lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFFAEB] w-full rounded-[24px] h-[710px] md:h-[410px] lg:h-[510px]'>
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
                    <div className='flex items-center gap-2 w-full group cursor-pointer'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Contact Us for a Personalized Plan</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-[1px] group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Gold} alt='Gold' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Request a Portfolio Review</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Report} alt='Report' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
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
                    <div className='flex items-center gap-2 w-full group cursor-pointer '>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Get a Free Insurance Quote</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='5/12 hidden md:flex justify-end'>
                    <img src={Settings} alt='Settings' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Download Our Estate Planning Guide</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
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
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>Learn more</p>
                        <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Growth} alt='Growth' className='md:w-[198px] lm:w-[241px] lm:h-[366px]' />
                </div>
            </div>

        </div>


        <div 
            data-aos="fade-up" 
            data-aos-duration="3000" 
            className='flex flex-col items-center justify-center gap-[32px] lg:gap-[56px] w-full px-5 lg:px-[56px]'
        >
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
                    <p className='font-grava font-medium tracking-wide text-center text-base lg:text-[20px] text-[#8A99A9]'>Connect with Your Personal Account Manager</p>
                </div>
            </div>
            <div className='flex flex-col w-full md:flex-row items-center md:w-[443px] mx-auto gap-4'>
                <button
                    className='transition-all duration-300 ease-in-out bg-[#FFCC33] w-full md:w-[262px] h-[55px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                    type='button'
                >
                    <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Login to your account</p>
                    <FaArrowRightLong className='transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33] mt-1' />
                </button>
                <button 
                    className='transition-all duration-300 ease-in-out group hover:bg-[#002244] cursor-pointer border border-[#8A99A9] w-full md:w-[165px] h-[55px] flex items-center justify-center'
                    type='button'
                >
                    <p className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] text-[#8A99A9] font-medium text-[18px]'>Sign up</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Wealth