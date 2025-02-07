import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import Institution from "../../assets/png/institute.png";
import Sector from "../../assets/png/sector.png";
import NGO from "../../assets/png/ngo.png";
import Layer from "../../assets/png/layer.png";
import Kids from "../../assets/png/kids.png";

import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Check from "../../assets/svg/check.svg";


const Institutional = () => {
    const [openTabOne, setOpenTabOne] = useState(false)
    const [openTabTwo, setOpenTabTwo] = useState(false)
    const [openTabThree, setOpenTabThree] = useState(false)
    const [openTabFour, setOpenTabFour] = useState(false)

    const { state } = useLocation()
    const faqRef = useRef(null)
    const InstitutionRef = useRef(null)

    const isMobile  = window.innerWidth

    const navigate = useNavigate()
  
    useEffect(() => {
        if (state?.section === "faq" && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "institution" && InstitutionRef.current) {
            InstitutionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state]);

    const handleTabOne = () => {
        setOpenTabOne(!openTabOne)
    }
    
    const handleTabTwo = () => {
        setOpenTabTwo(!openTabTwo)
    }
    
    const handleTabThree = () => {
        setOpenTabThree(!openTabThree)
    }

    const handleTabFour = () => {
        setOpenTabFour(!openTabFour)
    }
    


    return (
        <div className='w-full' ref={InstitutionRef}>

            <section className='h-full w-full overflow-hidden outline-none'>
                <div 
                    style={{
                        backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png" : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    className='h-[732px] lm:h-[694px] pt-[127px] lm:pt-0 pl-5 lm:pl-[56px] relative w-full flex flex-col  lm:flex-row lm:items-center gap-0'
                >
                    <div className='w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px]'>
                        <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                            <p 
                                className={`animate__animated animate__fadeInUp lm:w-[873px] font-grava text-[#002244] text-left text-[32px] lm:text-[50px] lg:text-[75px] font-medium leading-[40px] lm:leading-[55px] lg:leading-[78px]`}
                            >
                                Empowering <br /> 
                                Institutions With <br />
                                <span className='font-bold'>Financial Excellence</span>
                            </p>
                            <p 
                                className={`animate__animated  animate__fadeInUp animate__slow w-[300px]  md:w-[749px] font-[350] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
                            >
                                At Tatum Bank, we understand the unique financial needs of 
                                institutions and are committed to providing tailored made banking solutions.
                            </p>
                            <div className='flex items-center mt-[12px] gap-3'>
                                <button
                                    className={`animate__animated animate__slow animate__fadeInUp transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[152px] lg:w-[175px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                                    type='button'
                                    onClick={() => navigate("/institutional/account", {state: {
                                        section: "account"
                                    }})}
                                >
                                    <p 
                                    className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                    >
                                        Get Started
                                    </p>
                                    <FaArrowRightLong
                                        className='w-5 h-5 mt-[1px] transition-colors duration-300 ease-in-out text-[#FFCC33] group-hover:text-[#002244]' 
                                    />
                                </button>
                            </div>
                        </div>
                        <div className='hidden lm:flex items-start absolute -bottom-28'>
                            <p className='text-[#002244] font-grava text-sm md:text-base flex items-center whitespace-nowrap gap-2 '>
                                We are licensed by 
                                <img src={CBN} alt='CBN' className='inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]'/>
                                Deposit insured by
                                <img src={NDIC} alt='NDIC' className='inline-block mt-1 lg:mt-0 h-[16px] w-[60px] md:h-[28px]'/>
                            </p>
                        </div>
                    </div>
                    <img 
                        src={Institution} 
                        alt='Temple' 
                        className={`animate__animated animate__zoomIn relative lm:right-44 h-[605px] lg:mt-20 lm:h-[641px]`} 
                    />
                </div>
            </section>
            
            <section className='bg-[#fff] md:h-auto lg:h-[1028px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]'>
                <div data-aos="fade-right" className="hidden md:block" >
                    <img 
                        src={Sector} 
                        alt='Sector' 
                        className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110 ' 
                    />
                </div>
                <div className='flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]' data-aos="fade-left" >
                    <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                        <p className='font-grava text-[#334E69] font-medium tracking-[25%] uppercase text-sm'>Our Institutional Banking Solutions</p>
                        <div className='flex flex-col w-full gap-[18px]'>
                            <p className='font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>
                                Public Sector Institutional  <span className='block md:inline-block'>Banking.</span> 
                            </p>
                            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                                Efficient financial management is critical to delivering public services effectively. 
                                Our banking solutions help government agencies, ministries, and public enterprises 
                                manage funds securely and efficiently.
                            </p>
                        </div>
                       
                        <button
                            className='transition-all duration-300 ease-in-out bg-[#FFCC33] mt-[4px] w-[141px] lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                            type='button'
                            onClick={() => navigate("/institutional/account", {state: {
                                section: "account"
                            }})}
                        >
                            <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Get started</p>
                            <FaArrowRightLong className='mt-[1px] transition-colors duration-300 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                        </button>

                        <p className='font-grava text-[#334E69] font-medium tracking-[25%] uppercase text-sm mt-[16px] '>
                            key offerings:
                        </p>
        
                        <div className='flex flex-col gap-[32px] mt-6'>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                Public Sector Financial Management <span className='font-[350] lm:font-normal'>
                                – Simplified revenue collection, budgeting, and fund disbursement solutions.
                                </span>
                            </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                 Treasury & Liquidity Management <span className='font-[350] lm:font-normal'>
                                 – Optimized cash flow for enhanced financial planning.
                                </span>
                            </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                             Collections & Payment Solutions  
                             <span className='font-[350] lm:font-normal'>
                              - Automated tax collections, school fees payments, and bulk payments.
                            </span>
                            </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Payroll Management <span className='font-[350] lm:font-normal'>
                                    – Secure salary disbursements and pension processing.
                                    </span>
                                </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Digital Banking for Public Institutions  <span className='font-[350] lm:font-normal'>
                                    </span>
                                    – Secure salary disbursements and pension processing.
                                </p>
                            </div>
                        </div>
        
                    </div>
                    <button
                        className='transition-all duration-300 ease-in-out bg-[#FFCC33] mt-[28px] hidden lm:w-[168px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center'
                        type='button'
                        onClick={() => navigate("/institutional/account", {state: {
                            section: "account"
                        }})}
                    >
                        <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Get started</p>
                        <FaArrowRightLong className='mt-[1px] transition-colors duration-300 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                    </button>
                </div>
                <img src={Sector} alt='Sector' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
            </section>

            <section className='bg-[#F9FAFB] md:h-[400px] lg:h-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]'>
                <div className='flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]' data-aos="fade-right" >
                    <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                        <p className='font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>
                            Non-Government Institution Banking
                        </p>
                        <p className="text-sm lm:text-[18px] font-grava font-[350] text-[#002244] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
                            We provide customized banking solutions for NGOs, educational institutions, 
                            healthcare providers, and international organizations, ensuring secure 
                            transactions and efficient fund management.
                        </p>

                        <button
                            className='transition-all duration-300 ease-in-out bg-[#FFCC33] mt-[4px] w-[293px] lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                            type='button'
                            onClick={() => navigate("/institutional/account", {state: {
                                section: "account"
                            }})}
                        >
                            <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Talk to Our Relationship Managers</p>
                            <FaArrowRightLong className='mt-[1px] transition-colors duration-300 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                        </button>

                        <p className='font-grava text-[#334E69] font-medium tracking-[25%] uppercase text-sm mt-[16px] '>
                            key offerings:
                        </p>
        
                        <div className='flex flex-col gap-[32px] mt-6'>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                Cash & Liquidity Management  <span className='font-[350] lm:font-normal'>
                                – Ensure funds are readily available for operational needs.
                                </span>
                            </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                            <img src={Check} alt="Check" className='' />
                            <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                Collections & Payments <span className='font-[350] lm:font-normal'>
                                – Seamless donor fund processing, school tuition payments, and supplier transactions.
                                </span>
                            </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Foreign Exchange & Trade Services  
                                    <span className='font-[350] lm:font-normal'>
                                    – Smooth cross-border transactions for international organizations.
                                    </span>
                                </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Bespoke Loan & Financing Solutions <span className='font-[350] lm:font-normal'>
                                    – Access tailored credit facilities to support growth.
                                    </span>
                                </p>
                            </div>
                            <div className='flex flex-col lm:flex-row items-center lm:items-start gap-3'>
                                <img src={Check} alt="Check" className='' />
                                <p className='font-grava font-medium text-[#002244] text-center lm:text-left lm:text-[20px] leading-[25px] tracking-[1.4%]'>
                                    Multi-Channel Banking <span className='font-[350] lm:font-normal'>
                                    </span>
                                    – Bank anytime, anywhere via our secure digital platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className='transition-all duration-300 ease-in-out lm:mt-[32px] bg-[#FFCC33] w-[198px] lg:w-[342px] h-[59px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] hidden lm:flex items-center justify-center'
                        type='button'
                        onClick={() => navigate("/institutional/account", {state: {
                            section: "account"
                        }})}
                    >
                        <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Talk to Our Relationship Managers</p>
                        <FaArrowRightLong className='mt-[2px] transition-colors duration-300 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                    </button>
                </div>
                <div data-aos="fade-left">
                    <img 
                        src={NGO} 
                        alt='NGO' 
                        className='w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110'   
                    />
                </div>
            </section>

            <section className='bg-[#F9FAFB] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]'>
                <div className='flex flex-col gap-6 w-full lm:w-[581px]'>
                    <p className='text-[#334E69] font-[350] text-sm leading-5 tracking-[0.2%] font-grava'>WHY CHOOSE US</p>
                    <p className='font-medium text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]'>Why Choose Tatum <br /> for Institutional Banking?</p>
                </div>
                <div className='flex flex-col w-full lm:w-[663px]'>
                    <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5' onClick={handleTabOne}>
                        <div className='flex items-center justify-between'>
                        <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Tailored Solutions</p>
                        {openTabOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        {openTabOne && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>Confidentiality and personalized attention at every level</p>}
                    </div>
                    <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabTwo}>
                        <div className='flex items-center justify-between'>
                        <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Secure & Efficient Transactions</p>
                        {openTabTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        {openTabTwo && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>Confidentiality and personalized attention at every level</p>}
                    </div>
                    <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabThree}>
                        <div className='flex items-center justify-between'>
                        <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Dedicated Relationship Managers</p>
                        {openTabThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        {openTabThree && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>Expert financial guidance and personalized service.</p>}
                    </div>
                    <div className='flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]' onClick={handleTabFour}>
                        <div className='flex items-center justify-between'>
                        <p className='text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]'>Innovative Payment & Collection Systems</p>
                        {openTabFour ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        {openTabFour && <p className='font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]'>
                            Simplified revenue and fund management solutions.
                        </p>}
                    </div>
                </div>
            </section>

            <section className="bg-[#fff] px-5 lm:px-[56px] py-[56px] lm:py-[120px] flex flex-col">
                <div 
                    style={{
                        backgroundImage: `url(${Layer})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    className="w-full h-[621px] lm:h-[440px] rounded-xl"
                >
                    <div 
                        className="w-full h-full rounded-xl px-5 lm:px-[56px] py-[32px] lm:py-[64px] flex flex-col lm:flex-row gap-[50px] justify-between items-center"
                        style={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                    >
                    <div className="flex flex-col lm:w-[615px] lm:h-[312px] gap-[20px]">
                        <p className="font-grava font-medium text-[20px] leading-[20px] lm:text-[32px] lm:leading-[48px] tracking-[0.2%]">
                            Experience institutional banking built for efficiency.
                        </p>
                        <p className="font-grava font-[350] text-sm lm:text-[18px] leading-[27px]  tracking-[0.2%]">
                            Contact us to explore solutions tailored to your institution.  
                        </p>
                        <button
                            className={`animate__animated animate__slow animate__fadeInUp transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[164px] rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center p-4 lm:mt-[80px] justify-center`}
                            type='button'
                        >
                        <p 
                            className='transition-colors duration-300 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                        >
                            Contact us
                        </p>
                        <FaArrowRightLong 
                            className='w-5 h-5 mt-[1px] text-[#FFCC33] group-hover:text-[#002244]' 
                        />
                        </button>
                    </div>
                    <div className="lm:w-[468px] lm:h-[312px]">
                        <img src={Kids} alt="Kids" className="" />
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Institutional