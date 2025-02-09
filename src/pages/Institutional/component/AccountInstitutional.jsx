import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

import Temple from "../../../assets/png/temple.png";
import TempleMobile from "../../../assets/png/temple_mobile.png";
import One from "../../../assets/png/one.png";
import Two from "../../../assets/png/two.png";
import Three from "../../../assets/png/three.png";
import Line from "../../../assets/png/line.png";

import CBN from "../../../assets/svg/cbn_logo.svg";
import NDIC from "../../../assets/svg/ndic.svg";
import Plus from "../../../assets/svg/plus.svg";
import Minus from "../../../assets/svg/minus.svg";

const AccountInstitutional = () => {
    const [openTabOne, setOpenTabOne] = useState(false)
    const [openTabTwo, setOpenTabTwo] = useState(false)
    const [openTabThree, setOpenTabThree] = useState(false)
    const [openDropdownOne, setOpenDropdownOne] = useState(false)
    const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
    const [openDropdownThree, setOpenDropdownThree] = useState(false)
        
    const isMobile = window.innerWidth < 768 
    const faqRef = useRef(null);
    const accountRef = useRef(null);
    const sectionRef = useRef(null);
            
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
                
    // useEffect(() => {
    //     if (state?.section === "faq" && faqRef.current) {
    //         faqRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    //     if (state?.section === "account" && accountRef.current) {
    //         accountRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state]);

  return (
    <div className='w-full overflow-hidden' ref={accountRef}>

        <section 

className='h-full w-full overflow-hidden outline-none  lg:h-[100vh]'>
<div 
                style={{
                    backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png" : "https://res.cloudinary.com/code-idea/image/upload/v1739210005/Slide_4_tf472w.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='  pl-5 lm:pl-[56px] relative w-full flex flex-col  lm:flex-row lm:items-center gap-0 lg:h-[100vh] max-sm:pt-[30%] ' //[694px]
            >
                <div className='w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p 
                            className={`animate__animated animate__fadeInUp lm:w-[873px] font-grava text-[#002244] text-left text-[32px] lm:text-[50px] lg:text-[75px] font-medium leading-[40px] lm:leading-[55px] lg:leading-[78px]`}
                        >
                            Empowering <br /> 
                            Institutions With <br />
                            <span className='font-bold'>Financial Solutions</span>
                        </p>
                        <p 
                            className={`animate__animated animate__fadeInUp animate__delay-04s w-[300px]  md:w-[749px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
                        >
                            Trusted banking solutions for NGOs, 
                            insurance companies, and financial institutions.
                        </p>
                        <div className='flex items-center mt-[12px] gap-3'>
                        <button
                                className={`animate__animated animate__fadeInUp animate__delay-06s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] w-[152px] lg:w-[174px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                                type='button'
                                onClick={() => sectionRef.current.scrollIntoView({ behavior: "smooth" })}
                            >
                                <p 
                                className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                >
                                    Learn more
                                </p>
                                <BsArrowRight size={100}  
                                    className='w-5 h-5 mt-[-2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]' 
                                />
                            </button>
                        </div>
                    </div>
                    <div className='hidden lm:flex items-start absolute lg:bottom-[-40%]'>
                        <p className='text-[#002244] font-grava text-sm md:text-base flex items-center whitespace-nowrap gap-2 '>
                            We are licensed by 
                            <img src={CBN} alt='CBN' className='inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]'/>
                            Deposit insured by
                            <img src={NDIC} alt='NDIC' className='inline-block mt-1 lg:mt-0 h-[16px] w-[60px] md:h-[28px]'/>
                        </p>
                    </div>
                </div>
                <img 
                    src={isMobile ? Temple : TempleMobile} 
                    alt='Temple' 
                    className={`animate__animated animate__fadeInRight relative lm:right-[15%] lm:top-[10%] lg:w-[75%] `} 
                />
            </div>
        </section>
        
        <section
            ref={sectionRef}
            className='bg-[#FFFAEB] flex flex-col h-auto items-center py-[56px] lm:py-[88px] px-5 lm:px-[56px] gap-[48px] lm:gap-[96px] w-full'
        >
            <div className='flex flex-col items-center lm:w-[612px] h-[130px] gap-4 mx-auto'>
                <p className="font-grava text-[24px] lm:text-[48px] text-[#002244] font-medium leading-[30px] lm:leading-[60px] tracking-[0.2%]">How to Open Your Account</p>
                <p className='font-[350] font-grava text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] text-center text-[#002244]'>
                    We offer secure online banking, 
                    convenient branch services, 
                    and reliable support whenever you need it.
                </p>
            </div>

            <div className='flex flex-col lm:flex-row items-center gap-[50px]'>
                <div className='flex flex-col items-center gap-6 w-[250px]'>
                    <img src={One} alt='One' className='w-[205px] h-[118px] lm:h-[165px]' />
                    <p className='font-grava text-sm lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] text-[#002244]'>Click “Download Form” below.</p>
                </div>
                <img src={Line} alt='Line' className='w-[49px] lm:w-[190px] rotate-90 lm:rotate-0' />
                <div className='flex flex-col items-center gap-6 w-[250px]'>
                    <img src={Two} alt='Two' className='w-[205px] h-[118px] lm:h-[165px]' />
                    <p className='font-grava text-sm lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%] text-[#002244]'>Fill out the PDF manually.</p>
                </div>
                <img src={Line} alt='Line' className='w-[49px] lm:w-[190px] rotate-90 lm:rotate-0' />
                <div className='flex flex-col items-center gap-6 w-[262px]'>
                    <img src={Three} alt='Three' className='w-[205px] h-[118px] lm:h-[165px]' />
                    <p className='font-grava text-sm text-center lm:text-[18px] text-[#002244] leading-5 lm:leading-[27px] tracking-[0.2%]'>Email your completed form to 📩<span className='underline'> accounts@tatumbank.com</span> </p>
                </div>
            </div>

            <button
                className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-[175px] lg:w-[194px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                type='button'
                onClick={() => window.open("https://drive.google.com/file/d/1jMMcfNn0kAZTBxYW9AjhujwtgvBxsx-0/view?usp=sharing", "_blank")}
            >
                <p className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Download Form</p>
                <BsArrowRight size={100}   className='mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
            </button>

        </section>

        <section className='bg-[#FFF] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]'>
            <div className='flex flex-col gap-6 w-full lm:w-[448px]'>
                <p className='text-[#334E69] font-[300] text-sm leading-5 tracking-[0.2%] font-grava'>WHY CHOOSE US</p>
                <p className='font-medium text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]'>Why Join Tatum <br />  Bank?</p>
            </div>
            <div className='flex flex-col w-full lm:w-[810px]'>
                <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5' onClick={handleTabOne}>
                    <div className='flex items-center justify-between'>
                    <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Security & Compliance</p>
                    {openTabOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    {openTabOne && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>
                        With strict regulatory compliance, we safeguard your funds 
                        while providing transparent reporting and governance support for financial accountability.
                    </p>}
                </div>
                <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabTwo}>
                    <div className='flex items-center justify-between'>
                    <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Strategic Partnership for Growth</p>
                    {openTabTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    {openTabTwo && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>
                        Beyond banking, we collaborate with institutions to drive economic development, 
                        offering advisory services, funding opportunities, and innovative digital 
                        tools for operational efficiency
                    </p>}
                </div>
                <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabThree}>
                    <div className='flex items-center justify-between'>
                    <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Tailored Solutions</p>
                    {openTabThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                    </div>
                    {openTabThree && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>
                        Tatum Bank offers bespoke banking products designed to meet the unique needs 
                        of government agencies and NGOs, ensuring seamless transactions, efficient fund management, 
                        and customized lending solutions.
                    </p>}
                </div>
            </div>
        </section>

    </div>
  )
}

export default AccountInstitutional