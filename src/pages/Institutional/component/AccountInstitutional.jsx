import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

import Temple from "../../../assets/png/temple.png";
import TempleMobile from "../../../assets/png/temple_mobile.png";
import One from "../../../assets/png/one.png";
import Two from "../../../assets/png/two.png";
import Three from "../../../assets/png/three.png";
import Line from "../../../assets/png/line.png";

import CorporateForm from "../../../assets/pdf/corporate_form.pdf" 

import CBN from "../../../assets/svg/cbn_logo.svg";
import NDIC from "../../../assets/png/ndic.png";
import Plus from "../../../assets/svg/plus.svg";
import Minus from "../../../assets/svg/minus.svg";
import HeroSection from '../../../components/HeroSection';

const AccountInstitutional = () => {
    const [openTabOne, setOpenTabOne] = useState(false)
    const [openTabTwo, setOpenTabTwo] = useState(false)
    const [openTabThree, setOpenTabThree] = useState(false)
    const [openDropdownOne, setOpenDropdownOne] = useState(false)
    const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
    const [openDropdownThree, setOpenDropdownThree] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
   
    const faqRef = useRef(null);
    const accountRef = useRef(null);
    const sectionRef = useRef(null);
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
                className='h-full w-full overflow-hidden outline-none'
            >
                <div 
                    style={{
                        backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png" : "https://res.cloudinary.com/code-idea/image/upload/v1740439020/Slide_2_1_lua8lb.png"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    className=' md:h-auto  pl-5 lm:pl-[56px] relative w-full flex flex-col  lg:flex-row lg:items-center gap-0 lg:h-[100vh] md:pt-[96px] lg:pt-0 max-sm:pt-[30%] ' //[694px]
                >
                    <div className='w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px]'>
                        <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                            <p 
                                className={`animate__animated animate__fadeInUp  w-[350px] lm:w-[873px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px] lg:text-[75px] font-medium leading-[40px] lm:leading-[55px] lg:leading-[78px]`}
                            >
                                Empowering <br /> 
                                Institutions With <br />
                                <span className='font-bold'>Financial Solutions</span>
                            </p>
                            <p 
                                className={`animate__animated animate__fadeInUp animate__delay-08s w-[313px]  md:w-[749px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
                            >
                                Trusted banking solutions for NGOs, 
                                insurance companies, and financial institutions.
                            </p>
                        
                        </div>
                        <div className="flex items-start absolute -bottom-20 lg:bottom-[-40%]" style={{zIndex:'99999'}}>
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
                    { isMobile ?
                        <div className='w-[450px]'>
                            <img 
                                src="https://res.cloudinary.com/code-idea/image/upload/v1739281660/zeus_temple_uqlweg.png"
                                alt='Temple' 
                                className={`animate__animated animate__fadeInRight relative right-8 top-14 lm:right-[15%] lm:top-[10%] lg:w-[75%] `} 
                            />
                        </div>
                        :
                        <img 
                            src={TempleMobile} 
                            alt='Temple' 
                            className={`animate__animated animate__fadeInRight relative lg:right-[15%] lg:top-[10%] lg:w-[75%] `} 
                        />
                    }
                </div>
            </section>
            : 
            //Desktop
            <section className="w-full h-full">
                <HeroSection
                    bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
                    bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740439020/Slide_2_1_lua8lb.png"} 
                    title={`Empowering <br /> Institutions With <br /> <span class='font-bold'>Financial Solutions</span>`}
                    content={`<p class="leading-[34.1px] text-[25px]">Trusted banking solutions for NGOs, insurance companies, and financial institutions.</p>`} 
                    link={"/personal"} 
                    sectionName={"savings"} 
                    mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739281660/zeus_temple_uqlweg.png"} 
                    mainImgDesktop={TempleMobile} 
                    styleP={{ height: "130", paddingLeft: "30%", marginTop: "-10%" }}
                />
            </section>
        }

        
        <section
            ref={sectionRef}
            className='bg-[#FFFAEB] flex flex-col h-min items-center py-[56px] lm:py-[88px] px-5 lm:px-[56px] gap-[48px] lm:gap-[96px] w-full'
        >
            <div className='flex flex-col items-center lm:w-[612px] h-[82px] lm:h-auto gap-4 mx-auto'>
                <p className="font-grava text-[24px] font-[500] lm:text-[48px] text-[#002244] leading-[30px] lm:leading-[60px] tracking-[0.2%]">How to Open Your Account</p>
                <p className='font-[400] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] text-center text-[#002244]'>
                    Open your account now to get started!
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
                href={CorporateForm}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                    Download Form
                </p>
            </a>

            {/* <button
                className=' p-4 bg-[#EDEDED] w-auto cursor-default h-[57px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center'
                type='button'
                // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1739456268/TBL_Corporate_Form_1_eeem6o.pdf", "_blank")}
            >
                <p className='font-[500] lg:text-[18px] lg:leading-[27px] font-grava text-[#B0B0B0]'>Account opening available soon</p>
                <BsArrowRight size={100}   className='mt-[2px] text-5xl  font-medium text-[#B0B0B0] w-5 h-5' />
            </button> */}

        </section>

        <section className='bg-[#FFF] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]'>
            <div className='flex flex-col gap-6 w-full lm:w-[448px]'>
                <p className='text-[#334E69] font-[400] leading-5 tracking-[0.2%] font-grava text-[11px] lg:text-[14px]'>WHY CHOOSE US</p>
                <p className='font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]'>Why Bank with  {isMobile ? null : <br />}  Tatum?</p>
            </div>
            <div className='flex flex-col w-full lm:w-[810px]'>

                <div
                    className={`${openTabOne ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0`}
                    onClick={handleTabOne}
                >
                    <div className="flex items-center justify-between">
                    <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                        Security & Compliance
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
                        className={`${openTabOne ? "" : " mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
                    >
                    <p
                        className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                            openTabOne ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                        } transition-opacity transition-transform duration-500 ease-in-out`}
                    >
                        With strict regulatory compliance, we safeguard your funds 
                        while providing transparent reporting and governance support for financial accountability.
                    </p>
                </div>
            </div>

            <div
                className={`${openTabTwo ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
                onClick={handleTabTwo}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                    Strategic Partnership for Growth
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
                className={`${openTabTwo ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabTwo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                    Beyond banking, we collaborate with institutions to drive economic development, 
                    offering advisory services, funding opportunities, and innovative digital 
                    tools for operational efficiency
                </p>
              </div>
            </div>

                {/* <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabTwo}>
                    <div className='flex items-center justify-between'>
                    <p className='text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Strategic Partnership for Growth</p>
                    {openTabTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    {openTabTwo && <p className='font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>
                        Beyond banking, we collaborate with institutions to drive economic development, 
                        offering advisory services, funding opportunities, and innovative digital 
                        tools for operational efficiency
                    </p>}
                </div> */}

            <div
              className={`${openTabThree ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabThree}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                Tailored Solutions
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
                className={`${openTabThree ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabThree ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                    Tatum Bank offers bespoke banking products designed to meet the unique needs 
                    of government agencies and NGOs, ensuring seamless transactions, efficient fund management, 
                    and customized lending solutions.
                </p>
              </div>
            </div>

         

            </div>
        </section>

    </div>
  )
}

export default AccountInstitutional