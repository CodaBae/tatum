import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import Biz from "../../assets/png/businessman.png";
import Talk from "../../assets/png/talk.png";
import Phone from "../../assets/png/phone_b.png";
import Apple from "../../assets/png/apple-store.png";
import Google from "../../assets/png/google-play-store.png";
import Ussd from "../../assets/png/ussd_service.png";
import Atm from "../../assets/png/atm.png";
import Security from "../../assets/png/security.png";
import Layer from "../../assets/png/layer.png";
import Meeting from "../../assets/png/meeting.png";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Check from "../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";
import HeroSection from '../../components/HeroSection';

const Digital = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { state } = useLocation()
    const digitalRef = useRef(null)
    const digiRef = useRef(null)

    const navigate = useNavigate()


    useEffect(() => {
        if (state?.section === "digi" && digiRef.current) {
            digiRef.current.scrollIntoView({ behavior: "smooth" });
          }
    }, [state])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div className='overflow-hidden'>
        <section className="w-full h-full ">
            <HeroSection
                bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
                bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740439020/Slide_2_1_lua8lb.png"} 
                title={`Seamless. Secure. <span class='font-bold'>Convenient. </span> `}
                content={'Whether you\'re at home, at work, or on the go, our digital banking solutions are designed to make your life easier. Because at Tatum Bank, "We Keep You Smiling".'} 
                link={"/digital"} 
                sectionName={"digi"} 
                mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739211619/businessman-looking-tablet_23-2148634753_1_rehuca.webp"} 
                mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739211619/businessman-looking-tablet_23-2148634753_1_rehuca.webp"} 
                btnText={"Find out more"} 
            />
      </section>

       {/* <section 
            className='h-full w-full outline-none  lg:h-[798px]'
        >
            <div 
                style={{
                    backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png" : "https://res.cloudinary.com/code-idea/image/upload/v1740439020/Slide_2_1_lua8lb.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='lg:h-[798px] h-[790px] lm:h-auto pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col md:pt-[60px] lg:pt-[40px] lg:flex-row items-center gap-0' //[694px]
            >
                <div className='w-full  flex flex-col items-start relative pt-[64px] lm:pt-[3%] z-30 gap-[64px] lg:gap-[69px]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p  style={{fontWeight:450}}
                            className={`animate__animated animate__fadeInUp font-bold animate__delay-04s lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}
                        >
                            Seamless. Secure. <span className=''>Convenient. </span> 
                        </p>
                        <p              

                            className={`animate__animated animate__fadeInUp animate__delay-06s md:w-[500px] lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-[34px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                        >
                            Whether you're at home, at work, or on the go, our digital banking solutions
                            are designed to make your life easier. Because at Tatum Bank, "We Keep You Smiling”.
                        </p>
                        <div className='flex items-center mt-[10px] mb-[-5%] lg:mt-[12px] gap-3'>
                            <button
                                className={`animate__animated animate__fadeInUp animate__delay-10s  transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] w-[175px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                                onClick={() =>
                                    navigate("/digital", {
                                      state: { section: "digi" },
                                    },window.scrollTo(0, 0))
                                  }
                                //animate__animated animate__fadeInUp animate__delay-10s
                            >
                                <p 
                                    className='transition-colors duration-500 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                
                                >
                                    {/* Get started 
                                    Find out more
                                </p>
                                <BsArrowRight size={100}  
                                    className='w-5 h-5  mt-[2px] text-[#FFCC33] group-hover:text-[#002244]' 
                                />
                            </button>
                        
                        </div>
                    </div>
                    <div className="flex items-start absolute -bottom-20 md:bottom-[-56%] lg:bottom-[-44%]" style={{zIndex:'99999'}}>
                        <p className="text-[#002244] font-grava text-sm md:text-base flex flex-col lm:flex-row lm:items-center whitespace-nowrap gap-1">
                            <p className="flex items-center gap-2">
                            We are licensed by the Central Bank of Nigeria
                            <div className="lm:w-[30px]">
                                <img
                                src={CBN}
                                alt="CBN"
                                className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                                tyle={{zIndex:'99999'}}
                                />
                            </div>
                            </p>
                            <p className="flex items-center gap-2" tyle={{zIndex:'99999'}}>
                            All deposits are insured by
                            <div className="lm:w-[60px] mt-1 lg:mt-1.5">
                                <img
                                src={NDIC}
                                alt="NDIC"
                                className="flex justify-start lm:inline-block h-[20px] w-[37px] md:w-[50px] md:h-[25px]"
                                />
                            </div>
                            </p>
                        </p>
                    </div>
                </div>
                <img 
                    src={'https://res.cloudinary.com/code-idea/image/upload/v1739211619/businessman-looking-tablet_23-2148634753_1_rehuca.webp'} 
                    alt='Biz' 
                    className={`animate__animated  relative -right-2 h-[400px] lg:right-44 top-20 md:top-40 md:h-[450px] lm:h-[790px] lg:top-16`} 
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                />
            </div>
        </section> */}

        <section ref={digiRef} className='bg-[#fff] md:h-auto lg:h-[1094px] flex flex-col gap-[40px]  md:gap-[48px]  py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'>
            <div className='flex flex-col md:flex-row  items-center gap-[40px] md:gap-[93px] md:justify-between'>
                <div data-aos="fade-right" className="hidden md:block" >
                    <img 
                        src={Talk} 
                        alt='Sector' 
                        className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                    />
                </div>
                <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]' data-aos="fade-left" >
                    <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                        <div className='flex flex-col w-full gap-[18px]'>
                            <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>
                                Internet Banking – Bank with Ease, Anytime. 
                            </p>
                            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                                Enjoy 24/7 access to your accounts with our secure and
                                intuitive Internet Banking platform.
                            </p>
                        </div>
                        
                        <button
                            className='transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] w-[234px] lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                            type='button'  onClick={() => navigate("/personal/account", { state: {section: "account"}},window.scrollTo(0, 0))}
                        >
                            <p className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Find out more</p>
                            <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                        </button>

                        <p className='font-grava text-[#334E69] font-semibold tracking-[0.01em] leading-[25px]  text-[18px] mt-[16px] '>
                            Features & Login
                        </p>
        
                        <div className='flex flex-col gap-[32px] mt-6'>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                View account balances and statements
                            </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                Transfer funds seamlessly
                            </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                Pay bills and schedule payments
                            </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] text-center lm:mt-1 md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Request and manage your chequebooks
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] text-center lm:mt-1 md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Set up standing orders and manage beneficiaries
                                </p>
                            </div>
                        </div>
        
                    </div>
                    <button
                        className='transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[28px] hidden lm:w-[274px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center'
                        type='button'  onClick={() => navigate("/personal/account", { state: {section: "account"}},window.scrollTo(0, 0))}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[500] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Find out more</p>
                        <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                    </button>
                </div>
                <img src={Talk} alt='Talk' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
            </div>
            <div className='bg-[#EAECF0] w-full h-[0.5px]'></div>
            <div className='flex flex-col gap-[32px]'>
                <p className='font-grava text-[#334E69] text-[13px] font-[500] leading-[16px] tracking-[0.25em] uppercase text-[11px] lg:text-[14px]'>Registration Guide</p>
                <div className='flex flex-wrap gap-[32px]'>
                    <p className='text-[#002244] font-medium font-grava text-[20px] tracking-[1.4%] leading-[25px]'>1. Getting started is easy!</p>
                    <p className='text-[#002244] font-medium font-grava text-[20px] tracking-[1.4%] leading-[25px]'>2. Visit our Internet Banking portal.</p>
                    <p className='text-[#002244] font-medium font-grava text-[20px] tracking-[1.4%] leading-[25px]'>3. Click "Register Now" and follow the steps.</p>
                    <p className='text-[#002244] font-medium font-grava text-[20px] tracking-[1.4%] leading-[25px]'>3. Secure your login details and start banking instantly!</p>
                </div>
                <button
                    className='mt-[4px] w-[199px] lm:w-[254px] h-[58px] rounded-tl-lg rounded-br-lg gap-2 bg-[#EDEDED] flex items-center justify-center'
                    type='button' 
                >
                    <p className='font-[500] lg:text-[18px] font-grava text-[#B0B0B0]'>To be available soon</p>
                    <BsArrowRight size={100}  className='mt-[2px] text-5xl font-medium ease-in-out w-5 h-5  text-[#B0B0B0]' />
                </button>
            </div>
        </section>

        <section className='bg-[#F9FAFB] h-auto lg:h-[894px] flex flex-col gap-[40px] py-[60px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'>
            <div className='flex flex-col md:flex-row items-center gap-[40px] lm:gap-[93px] justify-between'>
                <div className='flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]' data-aos="fade-right" >
                <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                    <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]'>
                        Tatum Mobile App – Bank on the Move
                    </p>
                    <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
                        Your bank is now in your pocket! Enjoy effortless banking on the go—wherever, whenever. 
                        Our Mobile Banking is designed to fit your lifestyle, keeping you connected, in control, 
                        and always smiling.
                    </p>
                </div>

                <p className='font-grava text-[#334E69] font-[500] tracking-[25%] uppercase text-[13px] mt-[16px] '>
                    Features
                </p>

                <div className='flex flex-col gap-[32px] mt-6'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Transfer funds with ease
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Pay bills and top up airtime
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Track transactions in real-time
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Secure biometric login (Fingerprint/Face ID)
                        </p>
                    </div>
                </div> 
                </div>
                <div data-aos="fade-left">
                    <img 
                        src={Phone} 
                        alt='Phone' 
                        className='w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[620px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105'   
                    />
                </div>
            </div>
            <div className='bg-[#EAECF0] w-full h-[1px]'></div>
            <div className='flex flex-col gap-6'>
                <p className='font-grava font-[500] text-[13px] text-[#334E69] uppercase tracking-[0.25em] leading-4'>To be available soon</p> {/* Download the App */}
                <div className='flex items-center gap-2'>
                    <img src={Google} alt='Google' className='w-[135px] h-[40px] lm:w-[175px] lm:h-[52px] opacity-50' />
                    <img src={Apple} alt='Apple' className='w-[135px] h-[40px] lm:w-[175px] lm:h-[52px] opacity-50' />
                </div>
            </div>
        </section>

        <section className='bg-[#fff] md:h-auto flex flex-col gap-[40px]  md:gap-[48px]  py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'> {/* lg:h-[932px] */}
            <div className='flex flex-col md:flex-row  items-center gap-[40px] md:gap-[93px] md:justify-between'>
                <div data-aos="fade-right" className="hidden md:block" >
                    <img 
                        src='https://res.cloudinary.com/code-idea/image/upload/v1739794707/ussd_huhuf5.png' 
                        alt='Ussd' 
                        className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                    />
                </div>
                <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]' data-aos="fade-left" >
                    <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                        <div className='flex flex-col w-full gap-[18px]'>
                            <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>
                                *365# - Dial, Transact and Smile
                            </p>
                            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                                No internet? No problem! Our USSD service lets you bank with just a simple dial.
                            </p>
                        </div>
                        
                        <button
                            className='mt-[4px] w-[199px] lm:hidden h-[58px] rounded-tl-lg rounded-br-lg gap-2 bg-[#EDEDED] flex items-center justify-center'
                            type='button'
                        >
                            <p className='font-[500] lg:text-[18px] font-grava text-[#B0B0B0]'>To be available soon</p>
                            <BsArrowRight size={100}  className='mt-[2px] text-5xl font-medium ease-in-out w-5 h-5  text-[#B0B0B0]' />
                        </button>

                        <p className='font-grava text-[#334E69] font-[500] tracking-[25%] uppercase text-[13px] mt-[16px] '>
                            Features
                        </p>
        
                        <div className='flex flex-col gap-[32px] mt-6'>
                            {/* <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                View account balances and statements
                            </p>
                            </div> */}
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Send money instantly
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Pay bills on the go
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Buy airtime for yourself and others
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Check balances and mini statements
                                </p>
                            </div>
                            {/* <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Dial *365# to get started!
                                </p>
                            </div> */}
                        </div>
        
                    </div>
                </div>
                <img src='https://res.cloudinary.com/code-idea/image/upload/v1739794707/ussd_huhuf5.png' alt='Ussd' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
            </div>
            <div className='bg-[#EAECF0] w-full h-[1px]'></div>
            <div className='flex flex-col gap-8'>
                <p className='font-grava text-[#334E69] text-sm font-medium leading-4 tracking-widest uppercase'>
                    Registration Guide
                </p>
    
                <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
                    <p className='text-[#002244] font-[500] font-grava text-base md:text-lg tracking-wide leading-6'>
                        1. Dial *365# from your registered phone number.
                    </p>
                    <p className='text-[#002244] font-[500] font-grava text-base md:text-lg tracking-wide leading-6'>
                        2. Follow the prompts to activate.
                    </p>
                    <p className='text-[#002244] font-[500] font-grava text-base md:text-lg tracking-wide leading-6'>
                        3. Start transacting instantly!
                    </p>
                </div>

                <button
                    className='mt-[4px] w-[199px] lm:w-[254px] h-[58px] rounded-tl-lg rounded-br-lg gap-2 bg-[#EDEDED] flex items-center justify-center'
                    type='button'
                >
                    <p className='font-[500] lg:text-[18px] font-grava text-[#B0B0B0]'>To be available soon</p>
                    <BsArrowRight size={100}  className='mt-[2px] text-5xl font-medium ease-in-out w-5 h-5  text-[#B0B0B0]' />
                </button>
            </div>

        </section>

        <section className='bg-[#F9FAFB] md:h-auto lg:h-[1023px] flex flex-col gap-[48px] py-[60px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'>
            <div className='flex flex-col md:flex-row items-center gap-[40px] lm:gap-[93px] justify-between'>
                <div className='flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]' data-aos="fade-right" >
                <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                    <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]'>
                        ATM & Card Services – Banking designed for your convenience.
                    </p>
                    <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
                        Access your funds securely with our ATM and card solutions.
                    </p>
                </div>

                <p className='font-grava text-[#334E69] font-[500] tracking-[25%] uppercase text-[13px] mt-[16px] '>
                    Features
                </p>

                <div className='flex flex-col gap-[32px] mt-6'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Cash withdrawals & deposits
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center lm:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            Balance inquiry & mini statements
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                        <img src={Check} alt="Check" className='' />
                        <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                            PIN change for added security
                        </p>
                    </div>
                </div> 
                </div>
                <div data-aos="fade-left">
                    <img 
                        src={Atm} 
                        alt='Atm' 
                        className='w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105'   
                    />
                </div>
            </div>
            <div className='bg-[#EAECF0] w-full h-[1px]'></div>
            <div className='flex flex-col gap-6'>
                <p className='font-grava font-[500] text-[13px] text-[#334E69] uppercase tracking-widest leading-4'>Card Services</p>
                <div className='flex flex-col lm:flex-row gap-6'>
                    {/* <div className='flex flex-col lm:flex-row items-start lm:items-center gap-6 lm:gap-[32px]'> */}
                        <p className='text-[#002244] font-[500] font-grava text-sm lm:text-[20px] tracking-[1.4%] leading-5 lm:leading-[25px]'>1. Debit, Credit & Prepaid Cards.</p>
                        <p className='text-[#002244] font-[500] font-grava text-sm lm:text-[20px] tracking-[1.4%] leading-5 lm:leading-[25px]'>2. Contactless Payments.</p>
                    {/* </div> */}
                    <p className='text-[#002244] font-[500] font-grava text-sm lm:text-[20px] tracking-[1.4%] leading-5 lm:leading-[25px]'>3. Card Management via Mobile App</p>
                </div>
                <button
                    className='mt-[8px] w-[199px] lm:w-[254px] h-[58px] rounded-tl-lg rounded-br-lg gap-2 group bg-[#EDEDED] flex items-center justify-center'
                    type='button' //lm:w-[174px] w-[159px]
                >
                    <p className='font-[500]  lg:text-[18px] font-grava text-[#B0B0B0]'>To be available soon</p>
                    <BsArrowRight size={100}   className='mt-[2px] text-5xl font-medium ease-in-out w-5 h-5 text-[#B0B0B0]' />
                </button>
            </div>
        </section>

        <section className='bg-[#fff] md:h-auto lg:h-[705px] flex flex-col gap-[40px]  md:gap-[48px]  py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'>
            <div className='flex flex-col md:flex-row  items-center gap-[40px] md:gap-[93px] md:justify-between'>
                <div data-aos="fade-right" className="hidden md:block" >
                    <img 
                        src={Security} 
                        alt='Security' 
                        className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                    />
                </div>
                <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]' data-aos="fade-left" >
                    <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                        <div className='flex flex-col w-full gap-[18px]'>
                            <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>
                                Security Tips – Bank Smart, Stay Safe
                            </p>
                            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                                Your security is our priority. Here’s how to protect yourself while banking online
                            </p>
                        </div>
                        
                        <button
                            className='transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] w-[234px] lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                            type='button'  onClick={() => navigate("/personal/account", { state: {section: "account"}},window.scrollTo(0, 0))}
                        >
                            <p className='transition-colors duration-500 ease-in-out font-[500] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Find out more</p>
                            <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                        </button>
        
                        <div className='flex flex-col gap-[32px] mt-6'>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Never share your PIN, OTP, or password
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Enable biometric login for extra security
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Always log out after each session
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-[500] text-[#002244] lm:mt-1 text-center md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Report suspicious activities immediately
                                </p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                                <p className='font-grava font-[500] text-[#002244] text-center md:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Need Help? 
                                </p>
                            </div>
                            <button
                                className='transition-all duration-500 hidden lm:flex ease-in-out bg-[#FFCC33] mt-[4px] w-[234px] md:w-[251px] md:h-[56px] h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] items-center justify-center'
                                type='button'  onClick={() => navigate("/contact", { state: {section: "contact"}},window.scrollTo(0, 0))}
                            >
                                <p className='transition-colors duration-500 ease-in-out font-[500] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Call our 24/7 Support</p>
                                <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                            </button>
                        </div>
        
                    </div>
                </div>
                <img src={Security} alt='Security' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
            </div>
        </section>

        <div className="bg-[#fff] px-5 lm:px-[56px] py-[56px] lm:py-[120px] flex flex-col">
            <div 
                style={{
                    backgroundImage: `url(${Layer})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className="w-full h-auto lm:h-[440px] rounded-xl"
            >
                <div 
                    className="w-full h-full rounded-xl px-5 lm:px-[56px] py-[32px] lm:py-[64px] flex flex-col lm:flex-row gap-[50px] lm:gap-0 justify-between items-center"
                    style={{ backgroundColor: 'rgba(249, 250, 251, 0.9)' }}
                >
                    <div className='flex flex-col lm:w-[615px] lm:h-[312px] gap-5 lm:gap-[100px]'>
                        <div className="flex flex-col  gap-[20px]">
                            <p className="font-grava font-[500] text-[20px] leading-[20px] lm:text-[34px] lm:leading-[48px] tracking-[0.2%]" style={{color:'#002244'}}> 
                                Tatum Bank – We Keep You Smiling.
                            </p>
                            <p className="font-grava font-[300] text-sm lm:text-[18px] leading-[27px] tracking-[0.2%]" style={{color:'#002244'}}> 
                                At Tatum Bank, we keep you smiling with banking that fits your lifestyle! 
                                Choose the digital banking solution that works for you and enjoy seamless, 
                                secure, and stress-free transactions.
                            </p>
                        </div>
                        <button
                            className={`animate__animated animate__slow animate__fadeInUp transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] w-[163px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                            type='button'  onClick={() => navigate("/contact", { state: {section: "contact"}},window.scrollTo(0, 0))}
                        >
                        <p 
                            className='transition-colors duration-500 ease-in-out font-[500] text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]'
                        >
                            {/* Get started today. */}
                            Contact us
                        </p>
                        <BsArrowRight size={100}   
                            className='w-5 h-5 mt-[2px] text-[#FFCC33] group-hover:text-[#002244]' 
                        />
                        </button>
                    </div>
                    <div className="lm:w-[468px] lm:h-[312px]">
                        <img src={Meeting} alt="Meeting" className="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Digital