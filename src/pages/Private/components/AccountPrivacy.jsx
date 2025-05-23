import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

import Bentley from "../../../assets/png/bentley.png";
import One from "../../../assets/png/one.png";
import Two from "../../../assets/png/two.png";
import Three from "../../../assets/png/three.png";
import Line from "../../../assets/png/line.png";

import IndividualForm from "../../../assets/pdf/individual_form.pdf" 

import CBN from "../../../assets/svg/cbn_logo.svg";
import NDIC from "../../../assets/png/ndic.png";
import Plus from "../../../assets/svg/plus.svg";
import Minus from "../../../assets/svg/minus.svg";
import HeroSection from '../../../components/HeroSection';

const AccountPrivacy = () => {
    const [openTabOne, setOpenTabOne] = useState(false)
    const [openTabTwo, setOpenTabTwo] = useState(false)
    const [openTabThree, setOpenTabThree] = useState(false)
    const [openDropdownOne, setOpenDropdownOne] = useState(false)
    const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
    const [openDropdownThree, setOpenDropdownThree] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
   
    const faqRef = useRef(null);
    const accountRef = useRef(null);
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);
    const contentRef3 = useRef(null);
        
    const { state } = useLocation()

    const handleTabOne = () => {
        setOpenTabOne(!openTabOne)
    }
        
    const handleTabTwo = () => {
        setOpenTabTwo(!openTabTwo)
    }
                
    const handleTabThree = () => {
        setOpenTabThree(!openTabThree)
    }
    
    const handleDropdownOne = () => {
        setOpenDropdownOne(!openDropdownOne)
    }
            
    const handleDropdownTwo = () => {
        setOpenDropdownTwo(!openDropdownTwo)
    }
    
    const handleDropdownThree = () => {
        setOpenDropdownThree(!openDropdownThree)
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

  return (
    <div className='w-full overflow-hidden' ref={accountRef}>
        {
            isMobile ? 
            //Mobile
            <section 
            className='w-full overflow-hidden outline-none lg:h-[100vh]'>
            <div 
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className=' h-[690px] md:h-auto pl-5 lm:pl-[56px] relative w-full flex flex-col  lg:flex-row lm:items-center gap-0 lg:h-[100vh] md:pt-[93px] pt-0 max-sm:pt-[30%] ' //[694px]
            >
                <div className='w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px] lm:mt-[1s%]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p style={{fontWeight:450}}
                            className={`animate__animated animate__fadeInUp  w-[350px] lm:w-[873px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px] lg:text-[75px] font-bold leading-[40px] lm:leading-[55px] lg:leading-[78px]`}
                        >
                            Exclusive  Banking <span className='font-medium' >Services at Tatum</span>
                        </p>
                        <p 
                            className={`animate__animated animate__fadeInUp animate__delay-08s w-[300px]  md:w-[749px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
                        >
                            Enjoy priority and bespoke banking services, investment options, 
                            wealth management, and dedicated relationship managers to help 
                            achieve your financial goals.
                        </p>
                        {/* <div className='flex items-center mt-[12px] gap-3'>
                            <a
                                className={`animate__animated animate__fadeInUp block animate__animated animate__fadeInUp animate__delay-10s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] w-[152px] lg:w-[174px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                                type='button'
                                href='#section'
                            >
                                <p 
                                className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                >
                                    Learn more
                                </p>
                                <BsArrowRight size={100}  
                                    className='w-5 h-5 mt-[2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]' 
                                />
                            </a>
                        </div> */}
                    </div>
                    <div className="flex items-start absolute -bottom-20 lg:bottom-[-45.2%]" style={{zIndex:'99999'}}>
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
                            <div className="w-[60px] mt-1 lg:mt-1.5">
                                <img
                                src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                                alt="NDIC"
                                className="flex justify-start lm:inline-block h-[23px] md:w-[50px] md:h-[25px]"
                                />
                            </div>
                            </p>
                        </p>
                    </div>
                </div>
                <img 
                    src={Bentley} 
                    alt='Bentley' 
                    className={`animate__animated animate__fadeInRight relative -right-5 top-20 md:right-0 lg:right-[18%] md:top-[10%] lg:top-[-10%] lg:w-[55%] `} 
                />
            </div>
        </section> 
            :
            //Desktop
            <section className="w-full h-full">
                <HeroSection
                    bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
                    bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"} 
                    title={`<span class='font-[700]' >Exclusive Banking </span> Services at Tatum`}
                    content={`<p class="whitespace-nowrap leading-[34.1px]">Enjoy priority and bespoke banking services, investment options,<span class="block"> wealth management, and dedicated relationship managers to </span> help achieve your financial goals.</p>`} 
                    link={"/personal"} 
                    sectionName={"savings"} 
                    mainImgMobile={Bentley} 
                    mainImgDesktop={Bentley} 
                    styleP={{ height: "130", paddingLeft: "30%", marginTop: "-10%" }}
                />
            </section>
        }

        <section
            id='section'
            className='bg-[#FFFAEB] flex flex-col h-auto lg:h-min items-center py-[56px] lm:py-[88px] px-5 lm:px-[56px] gap-[48px] lm:gap-[96px] w-full'
        >
            <div className='flex flex-col items-center lm:w-[612px] h-[82px] lm:h-auto gap-4 mx-auto'>
                <p className="font-grava text-[24px] lm:text-[48px] text-[#002244] font-[500] leading-[30px] lm:leading-[60px] tracking-[0.2%]">How to Open Your Account</p>
                <p className='font-[400] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] text-center text-[#002244]'>
                 Open your account today and enjoy bespoke banking services tailored for you.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
                <div className='flex flex-col items-center gap-6 w-[250px]'>
                    <img src={One} alt='One' className='w-[205px] h-[118px] md:h-auto lg:h-[165px]' /> {/* [118px] */}
                    <p className='font-grava font-[400] text-[14px] lm:text-[18px] leading-5 lm:whitespace-nowrap lm:leading-[27px] tracking-[0.2%] text-[#002244]'>Click “Download Form” below.</p>
                </div>
                <img src={Line} alt='Line' className='w-[49px] lg:w-[190px] lg:mb-10 rotate-90 lg:rotate-0' />
                <div className='flex flex-col items-center gap-6 w-[250px]'>
                    <img src={Two} alt='Two' className='w-[205px] h-[118px] md:h-auto lm:h-[165px]' />
                    <p className='font-grava font-[400] text-[14px] lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] lm:whitespace-nowrap text-[#002244]'>Fill out the PDF manually.</p>
                </div>
                <img src={Line} alt='Line' className='w-[49px] lg:w-[190px] lg:mb-10 rotate-90 lg:rotate-0' />
                <div className='flex flex-col items-center gap-6 w-[262px]'>
                    <img src={Three} alt='Three' className='w-[205px]  h-[118px] md:h-auto lg:h-[165px]' />
                    <p className='font-grava font-[400] text-[14px] text-center lm:text-[18px] text-[#002244] leading-5 lm:whitespace-nowrap lm:leading-[27px] tracking-[0.2%]'>Email your completed form to <span className='block'>📩  <span className='underline'>accounts@tatumbank.com</span></span> </p>
                </div>
            </div>

            <a
                className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[60px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group " // bg-[#EDEDED] w-[326.27px]
                href={IndividualForm}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                    Download Form
                </p>
            </a>

            {/* <button
                className=' bg-[#EDEDED] w-auto cursor-default p-4 h-[57px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center'
                type='button'
                // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1740499249/TBL_Individual_Account_Opening_Form_wrhhls.ai", "_blank")}
            >
                <p className=' font-[500] text-[#B0B0B0] lg:text-[18px] lg:leading-[27px] font-grava '>Account opening available soon</p>
                <BsArrowRight size={100}   className='mt-[2px] text-5xl  text-[#B0B0B0] font-medium  w-5 h-5' />
            </button> */}

        </section>

        <section className='bg-[#FFF] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]'>
            <div className='flex flex-col gap-6 w-full lm:w-[448px]'>
                <p className='text-[#334E69] font-[300] text-sm leading-5 tracking-[0.2%] font-grava text-[11px] lg:text-[14px]'>WHY CHOOSE US</p>
                <p className='font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]'>Why Bank with  {isMobile ? null : <br />}  Tatum?</p>
            </div>
            <div className='flex flex-col w-full lm:w-[810px]'>

                <div
                    className={`${openTabOne ? " lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0`}
                    onClick={handleTabOne}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                            Bespoke Financial Solutions
                        </p>
                        {openTabOne ? (
                        <img src={Minus} alt="Minus" />
                        ) : (
                        <img src={Plus} alt="Plus" />
                        )}
                    </div>

                    <div
                        ref={contentRef1}
                        style={{
                        maxHeight: openTabOne
                            ? `${contentRef1.current?.scrollHeight}px`
                            : "0px",
                        }}
                        className={`${openTabOne ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
                    >
                        <p
                        className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                            openTabOne ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                        } transition-opacity transition-transform duration-500 ease-in-out`}
                        >
                            Enjoy personalized wealth management, 
                            tailored investment strategies, and 
                            exclusive financing options designed to grow and protect your assets.
                        </p>
                    </div>
                </div>

            <div
              className={`${openTabTwo ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabTwo}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                    Unparalleled Service
                </p>
                {openTabTwo ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef2}
                style={{
                  maxHeight: openTabTwo
                    ? `${contentRef2.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabTwo ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabTwo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                    Dedicated relationship managers who understand your unique needs
                </p>
              </div>
            </div>

            <div
              className={`${openTabThree ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col  cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabThree}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                    Seamless Global Banking
                </p>
                {openTabThree ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef3}
                style={{
                  maxHeight: openTabThree
                    ? `${contentRef3.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabThree ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabThree ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                    Experience secure, borderless banking with multi-currency accounts, 
                    offshore investment opportunities,
                    and a seamless digital experience for effortless transactions anywhere in the world.
                </p>
              </div>
            </div>

            </div>
        </section>
        
            
        {/* <div ref={faqRef} className='bg-[#F9FAFB] flex w-full px-5 lg:px-0 py-[56px] lg:py-[112px] items-center justify-center'>
            <div className='w-full lg:w-[878px] mx-auto flex flex-col items-center'>
                <p className='text-[24px] lg:text-[40px] font-grava text-[#002244] font-medium'>Frequently Asked Questions</p>
    
                <div className='mt-[32px] lg:mt-[56px] flex flex-col gap-6 w-full'>
    
                <div onClick={handleDropdownOne} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                    <div className='flex items-center justify-between'>
                    <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>What do I need to open an account?</p>
                    {openDropdownOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    { openDropdownOne && 
                        <p className='font-[300] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                            Just a government-issued ID and your account opening is processed.
                        </p>
                    }
                </div>
    
                <div onClick={handleDropdownTwo} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                    <div className='flex items-center justify-between'>
                    <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Are there any account opening fees?</p>
                    {openDropdownTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    { openDropdownTwo && 
                        <p className='font-[300] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                            No, you do not pay any fees to open an account
                        </p>
                    }
                </div>
    
                <div onClick={handleDropdownThree} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                    <div className='flex items-center justify-between'>
                    <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Can I manage my account on mobile?</p>
                    {openDropdownThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    { openDropdownThree && 
                        <p className='font-[300] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                            Yes! You can access your account on iOS and Android with the Tatum Mobile app.
                        </p>
                    }
                </div>
    
                </div>
    
                <div className='flex items-center mt-6 lg:mt-[32px] justify-center'>
                <p className='font-grava lg:text-[18px] text-[#334E69]'>Have more questions? Visit our <span onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='lg:text-[20px] underline text-[#002244]'>Help Center</span></p>
                </div>
            </div>
    
        </div> */}
            
             
    </div>
  )
}

export default AccountPrivacy