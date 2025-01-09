import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as LandingCarousel } from 'react-responsive-carousel'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Slider } from 'antd';

import Family from "../../assets/png/family.png"
import Phone from "../../assets/png/phone.png"
import Smile from "../../assets/png/smile.png"
import Teach from "../../assets/png/teach.png"
import Boy from "../../assets/png/boy.png"
import Girl from "../../assets/png/girl.png"
import Farmer from "../../assets/png/farmer.png"
import SchoolGirl from "../../assets/png/school_girl.png"
import Tiles from "../../assets/png/tile.png"
import BlueCard from "../../assets/png/blue_card.png"
import YellowCard from "../../assets/png/yellow_card.png"
import BlackCard from "../../assets/png/black_card.png"
import WhiteCard from "../../assets/png/white_card.png"
import Staff from "../../assets/png/staff.png"
import Business from "../../assets/png/business.png"
import Ceremony from "../../assets/png/ceremony.png"


import CBN from "../../assets/svg/cbn_logo.svg"
import NDIC from "../../assets/svg/ndic.svg"
import Card from "../../assets/svg/credit_card.svg"
import ATM from "../../assets/svg/atm.svg"
import Loan from "../../assets/svg/loan.svg"
import FX from "../../assets/svg/fx.svg"
import USSD from "../../assets/svg/ussd.svg"
import Online from "../../assets/svg/online.svg"

import "./css/CardEffect.css"

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loanAmount, setLoanAmount] = useState(500000); // Initial loan amount
    const [repay, setRepay] = useState(3); // Initial repay amount
    const [interest, setInterest] = useState(4); // Initial Interest

    const handleLoanSliderChange = (value) => {
        setLoanAmount(value);
    };
    const handleRepaySliderChange = (value) => {
        setRepay(value);
    };
    const handleInterestSliderChange = (value) => {
        setInterest(value);
    };

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    
  return (
    <div className='w-full pt-[80px]'>
        <div className='w-full overflow-x-hidden'>
            <LandingCarousel 
                // dynamicHeight={true} 
                interval={5000} 
                showArrows={false} 
                autoPlay={true} 
                showIndicators={false} 
                showStatus={false} 
                showThumbs={false} 
                infiniteLoop={true}
                onChange={handleSlideChange}
            >
                <div className='h-full w-full outline-none'>
                    <div className='bg-[#FFCC33] h-[694px] px-[70px] w-full flex md:flex-row items-center gap-0'>
                        <div className='w-full flex flex-col items-start z-30 gap-[113px]'>
                            <div className='flex w-full flex-col items-start gap-5'>
                                <p 
                                    className={`${activeIndex === 0 ? 'animate__animated animate__fadeInUp' : ' '} w-[450px] font-grava text-[#002244] text-left text-[75px] font-bold leading-[78px]`}
                                >
                                    Your Smile, <br /> <span className='font-semibold '>Our Priority</span> 
                                </p>
                                <p 
                                    className={`${activeIndex === 0 ? "animate__animated  animate__fadeInUp animate__delay-2s" : ""} text-[25px] text-left text-[#002244] leading-[34px]`}
                                >
                                    Secure banking, low-interest loans, and profitable investments for everyone.
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button
                                        className={`${activeIndex === 0 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} hover:border hover:border-[#002244] w-[276px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center bg-[#002244] group hover:bg-[#FFCC33]`} 
                                        type='button'
                                    >
                                        <p 
                                            className='font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                        >
                                            Open an account today
                                        </p>
                                        <FaArrowRightLong 
                                            className='w-5 h-5  text-[#FFCC33] group-hover:text-[#002244]' 
                                        />
                                    </button>
                                    <button 
                                        className={`${activeIndex === 0 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} cursor-pointer outline-none border border-x-0 border-t-0`} 
                                        type='button'
                                    >
                                        <p className='font-grava text-base text-[#002244] font-medium'>Learn more</p>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-[#002244] font-grava text-base flex items-center whitespace-nowrap gap-2 '>
                                    We are licensed by 
                                    <img src={CBN} alt='CBN' className='inline-flex w-[21px] h-[28px]'/>
                                    Deposit insured by
                                    <img src={NDIC} alt='NDIC' className='inline-block w-[21px] h-[28px]'/>
                                </p>

                            </div>
                        </div>
                        <img 
                            src={Family} 
                            alt='Family' 
                            className={`${activeIndex === 0 ? "animate__animated animate__fadeInRight animate__delay-2s" : ""} h-[750px]`} 
                        />
                    </div>
                </div>
                <div className='h-full w-full outline-none'>
                    <div className='bg-[#FFCC33] h-[694px] px-[70px] w-full flex md:flex-row items-center relative gap-0'>
                        <div className='w-full flex flex-col items-start z-30 gap-[113px]'>
                            <div className='flex w-[692px] flex-col items-start gap-5'>
                                <p 
                                    className={`${activeIndex === 1 ? 'animate__animated animate__fadeInUp' : ' '} font-grava text-[#002244] text-left text-[75px] font-medium leading-[78px]`}
                                >
                                    Say Hello To Banking  <span className='font-semibold '>On The Go</span> 
                                </p>
                                <p 
                                    className={`${activeIndex === 1 ? "animate__animated animate__fadeInUp animate__delay-2s" : ""} text-[25px] text-left text-[#002244] leading-[34px]`}  
                                >
                                    Your money, your way. Experience banking that fits your lifestyle, not the other way around.
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button
                                        className={`${activeIndex === 1 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[276px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                                        type='button'
                                    >
                                        <p 
                                            className='font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                        >
                                            Explore our offerings
                                        </p>
                                        <FaArrowRightLong 
                                            className='w-5 h-5  text-[#FFCC33] group-hover:text-[#002244]' 
                                        />
                                    </button>
                                    <button 
                                        className={`${activeIndex === 1 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} cursor-pointer outline-none border border-x-0 border-t-0`}
                                        type='button'
                                      
                                    >
                                        <p className='font-grava text-base text-[#002244] font-medium'>Download App</p>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-[#002244] font-grava text-base flex items-center whitespace-nowrap gap-2 '>
                                    We are licensed by 
                                    <img src={CBN} alt='CBN' className='inline-flex w-[21px] h-[28px]'/>
                                    Deposit insured by
                                    <img src={NDIC} alt='NDIC' className='inline-block w-[21px] h-[28px]'/>
                                </p>

                            </div>
                        </div>
                        <img 
                            src={Phone} 
                            alt='Phone' 
                            className={`${activeIndex === 1 ? "animate__animated animate__zoomIn animate__delay-2s" : ""} h-[800px] absolute`} 
                        />
                    </div>
                </div>
                <div className='h-full w-full outline-none'>
                    <div className='bg-[#FFCC33] h-[694px] px-[70px] w-full flex md:flex-row items-center relative gap-0'>
                        <div className='w-full flex flex-col items-start z-30 gap-[113px]'>
                            <div className='flex w-[786px] flex-col items-start gap-5'>
                                <p 
                                    className={`${activeIndex === 2 ? 'animate__animated animate__fadeInUp' : ' '} font-grava text-[#002244] text-left text-[75px] font-medium leading-[78px]`}
                                >
                                    Smart Banking for Your  <span className='font-semibold '>Big Ideas.</span> 
                                </p>
                                <p 
                                    className={`${activeIndex === 2 ? "animate__animated animate__fadeInUp animate__delay-2s" : ""} text-[25px] w-[673px] text-left text-[#002244] leading-[34px]`}  
                                >
                                    Instant access to the funds, insights, and support you need to take your business further.
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button
                                        className={`${activeIndex === 2 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[363px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                                        type='button'
                                    >
                                        <p 
                                            className='font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                        >
                                            Get started with SME Banking
                                        </p>
                                        <FaArrowRightLong 
                                            className='w-5 h-5  text-[#FFCC33] group-hover:text-[#002244]' 
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-[#002244] font-grava text-base flex items-center whitespace-nowrap gap-2 '>
                                    We are licensed by 
                                    <img src={CBN} alt='CBN' className='inline-flex w-[21px] h-[28px]'/>
                                    Deposit insured by
                                    <img src={NDIC} alt='NDIC' className='inline-block w-[21px] h-[28px]'/>
                                </p>

                            </div>
                        </div>
                        <img 
                            src={Teach} 
                            alt='Teach' 
                            className={`${activeIndex === 2 ? "animate__animated animate__fadeInRight animate__delay-2s" : ""} h-[800px] top-0 -right-44 absolute`} 
                        />
                    </div>
                </div>
                <div className='h-full w-full outline-none'>
                    <div className='bg-[#FFCC33] h-[694px] px-[70px] w-full flex md:flex-row items-center relative gap-0'>
                        <div className='w-full flex flex-col items-start z-30 gap-[113px]'>
                            <div className='flex w-[786px] flex-col items-start gap-5'>
                                <p 
                                    className={`${activeIndex === 3 ? 'animate__animated animate__fadeInUp' : ' '} font-grava text-[#002244] text-left text-[75px] font-bold leading-[78px]`}
                                >
                                    Your Wealth, <br/> <span className='font-medium '> Expertly Managed </span> 
                                </p>
                                <p 
                                    className={`w-[636px] ${activeIndex === 3 ? "animate__animated animate__fadeInUp animate__delay-2s" : ""} text-[25px] text-left text-[#002244] leading-[34px]`}  
                                >
                                    Access high-end services and exclusive investments, all in one seamless experience.
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button
                                        className={`${activeIndex === 3 ? "animate__animated animate__delay-3s animate__fadeInUp" : ""} bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[264px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                                        type='button'
                                    >
                                        <p 
                                            className='font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]'
                                        >
                                            Get exclusive access
                                        </p>
                                        <FaArrowRightLong 
                                            className='w-5 h-5  text-[#FFCC33] group-hover:text-[#002244]' 
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-[#002244] font-grava text-base flex items-center whitespace-nowrap gap-2 '>
                                    We are licensed by 
                                    <img src={CBN} alt='CBN' className='inline-flex w-[21px] h-[28px]'/>
                                    Deposit insured by
                                    <img src={NDIC} alt='NDIC' className='inline-block w-[21px] h-[28px]'/>
                                </p>

                            </div>
                        </div>
                        <img 
                            src={Smile} 
                            alt='Smile' 
                            className={`${activeIndex === 3 ? "animate__animated animate__fadeInRight animate__delay-2s" : ""}  h-[900px] -right-96 absolute`} 
                        />
                    </div>
                </div>
            </LandingCarousel>
        </div>
        <div className='bg-[#fff] h-[705px] flex items-center justify-between py-[60px] pr-[110px] pl-[86px]'>
            <img src={Boy} alt='Boy' className='w-[571px] h-[585px]' data-aos="fade-right" />
            <div className='flex flex-col gap-5 w-[498px]' data-aos="fade-left" >
                <p className='font-grava text-[#334E69] font-medium uppercase text-sm' style={{ letterSpacing: "25%"}}>Personal Banking</p>
                <p className='font-medium text-[#002244] font-grava text-[48px] leading-[60px]'>Interest-ing savings account to make your goals achievable.</p>
                <button
                    className='bg-[#FFCC33] w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
                    type='button'
                >
                    <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Get Started</p>
                    <FaArrowRightLong className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' />
                </button>
            </div>
        </div>
        <div className='bg-[#F9FAFB] h-[705px] flex items-center justify-between py-[60px] pr-[110px] pl-[86px]'>
            <div className='flex flex-col gap-5 w-[498px]' data-aos="fade-right">
                <p className='font-grava text-[#334E69] font-medium uppercase text-sm' style={{ letterSpacing: "25%"}}>CORPORATE Banking</p>
                <p className='font-medium text-[#002244] font-grava text-[48px] leading-[60px]'>
                    Streamlined services for complex business needs.
                </p>
                <button
                    className='bg-[#FFCC33] w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
                    type='button'
                >
                    <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Get Started</p>
                    <FaArrowRightLong className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' />
                </button>
            </div>
            <img src={Girl} alt='Girl' className='w-[571px] h-[585px]' data-aos="fade-left"  />
        </div>
        <div className='bg-[#fff] h-[705px] flex items-center justify-between py-[60px] pr-[110px] pl-[86px]'>
            <img src={Farmer} alt='Farmer' className='w-[571px] h-[585px]' data-aos="fade-right" />
            <div className='flex flex-col gap-5 w-[498px]' data-aos="fade-left" >
                <p className='font-grava text-[#334E69] font-medium uppercase text-sm' style={{ letterSpacing: "25%"}}>SME Banking</p>
                <p className='font-medium text-[#002244] font-grava text-[48px] leading-[60px]'>Empowering small businesses with loans, tools, and expert support.</p>
                <button
                    className='bg-[#FFCC33] w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
                    type='button'
                >
                    <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Get Started</p>
                    <FaArrowRightLong className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' />
                </button>
            </div>
        </div>
        <div className='bg-[#F9FAFB] h-[705px] flex items-center justify-between py-[60px] pr-[110px] pl-[86px]'>
            <div className='flex flex-col gap-5 w-[498px]' data-aos="fade-right">
                <p className='font-grava text-[#334E69] font-medium uppercase text-sm' style={{ letterSpacing: "25%"}}>PRIVATE Banking</p>
                <p className='font-medium text-[#002244] font-grava text-[48px] leading-[60px]'>
                    Exclusive wealth management for discerning clients.
                </p>
                <button
                    className='bg-[#FFCC33] w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
                    type='button'
                >
                    <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Get Started</p>
                    <FaArrowRightLong className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' />
                </button>
            </div>
            <img src={SchoolGirl} alt='SchoolGirl' className='w-[571px] h-[585px]' data-aos="fade-left"  />
        </div>
        <div 
            style={{
                backgroundImage: `url(${Tiles})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='bg-[#FFFAEB] h-[1103px] flex flex-col items-center justify-center py-[95px] gap-[76px]'
        >
            <div className='w-[697px] flex flex-col items-center gap-3'>
                <p className='text-[#002244] font-medium text-[48px] leading-[60px] text-center'>
                    Rewards and Benefits, Every Time You Spend.
                </p>
                <p className='text-xl text-[#334E69] font-grava leading-[27px] text-center'>
                    Tatum cards keep up the pace, so your money is with you everywhere you go.
                </p>
            </div>
            <div className='flex items-center relative gap-4 group'>
                <div className='card-wrapper group-hover:gap-8'>
                    <img src={YellowCard} alt='YellowCard' className='card relative left-48' />
                    <img src={BlueCard} alt='BlueCard' className='card  z-10 relative right-0' />
                    <img src={WhiteCard} alt='WhiteCard' className='card z-20 relative right-36' />
                    <img src={BlackCard} alt='BlackCard' className='card z-30 relative right-72' />
                </div>
            </div>
            {/* <div className='flex items-center relative'>
                <img src={YellowCard} alt='YellowCard' className='w-[398px] relative left-48 ' />
                <img src={BlueCard} alt='BlueCard' className='w-[398px] z-10 relative right-0' />
                <img src={WhiteCard} alt='WhiteCard' className='w-[398px] z-20 relative right-36' />
                <img src={BlackCard} alt='BlackCard' className='w-[398px] z-30 relative right-72' />
            </div> */}
           <button
                className='w-[246px] h-[64px] p-4 border border-[#002244] rounded-tr-lg rounded-bl-lg group hover:bg-[#002244]'
           >
                <p className='text-[#002244] font-medium font-grava group-hover:text-[#FFCC33] text-base'>Choose your Tatum Card</p>
           </button>
        </div>
        <div 
            className='bg-[#F9FAFB] flex items-center flex-col w-full gap-[40px] h-[877px] pt-[72px] pb-[112px] px-[56px]'
        >
            <div className='flex flex-col items-center w-[653px] h-[99px] gap-3'>
                <p className='font-grava text-[#002244] text-[18px]'>Loan Calculator</p>
                <p className='font-grava text-[#002244] text-[48px] font-medium '>Instant loan, instant benefits</p>
            </div>
            <div className='flex items-start gap-5'>
                <div className='bg-[#FFFFFF] rounded-lg flex flex-col py-[32px] px-5 gap-[40px] w-[728px]'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[113px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#002244] rounded-tl-lg rounded-br-lg  hover:bg-[#FFCC33]'>
                            <p className='text-[#002244] font-medium font-grava text-base'>Personal</p>
                        </div>
                        <div className='w-[93px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#002244] rounded-tl-lg rounded-br-lg  hover:bg-[#FFCC33]'>
                            <p className='text-[#002244] font-medium font-grava text-base'>Home</p>
                        </div>
                        <div className='w-[75px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#002244] rounded-tl-lg rounded-br-lg  hover:bg-[#FFCC33]'>
                            <p className='text-[#002244] font-medium font-grava text-base'>Car</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold text-[#00224] font-grava text-[18px]'>Loan amount</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>NGN {loanAmount.toLocaleString()}</p>
                        </div>
                        <Slider 
                            defaultValue={500000}
                            min={10000}
                            max={1500000}
                            step={10000}
                            onChange={handleLoanSliderChange}
                            trackStyle={{ backgroundColor: '#ffcc33' }}
                            handleStyle={{ borderColor: '#ffcc33' }}
                        />
                        <div className='flex items-center justify-between'>
                            <p className='text-[18px] font-grava text-[#546B82]'>NGN 10,000</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>NGN 1,500,000</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold text-[#00224] font-grava text-[18px]'>You want to re-pay it over</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>{repay.toLocaleString()} Months</p>
                        </div>
                        <Slider 
                            defaultValue={1}
                            min={1}
                            max={48}
                            step={2}
                            onChange={handleRepaySliderChange}
                            trackStyle={{ backgroundColor: '#ffcc33' }}
                            handleStyle={{ borderColor: '#ffcc33' }} 
                        />
                        <div className='flex items-center justify-between'>
                            <p className='text-[18px] font-grava text-[#546B82]'>3 Months</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>48 Months</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold text-[#00224] font-grava text-[18px]'>Interest Rate</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>{interest.toLocaleString()}%</p>
                        </div>
                        <Slider 
                            defaultValue={1}
                            min={1}
                            max={24}
                            step={2}
                            onChange={handleInterestSliderChange}
                            trackStyle={{ backgroundColor: '#ffcc33' }}
                            handleStyle={{ borderColor: '#ffcc33' }}  
                        />
                        <div className='flex items-center justify-between'>
                            <p className='text-[18px] font-grava text-[#546B82]'>4%</p>
                            <p className='text-[18px] font-grava text-[#546B82]'>24%</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5 w-[580px]'>
                    <div className='w-full bg-[#fff] rounded-lg h-[245px] px-[28px] flex justify-between items-center'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-[#00224] font-grava text-[18px]'>Monthly Payments</p>
                            <p className='text-[18px] font-grava text-center text-[#546B82]'>NGN 50,000</p>
                        </div>
                        <div className='w-[1px] h-[120px] bg-[#D0D5DD]'></div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-[#00224] font-grava text-[18px]'>Total Payments</p>
                            <p className='text-[18px] font-grava text-center text-[#546B82]'>NGN 50,000</p>
                        </div>
                    </div>
                    <div className='w-full bg-[#fff] rounded-lg gap-[56px] py-[32px] h-[300px] px-[28px] flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-6 '>
                            <button className='bg-[#FFCC33] w-[532px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-br-lg'>
                                <p className='font-grava text-[#002244] text-[18px] font-medium'>Apply now</p>
                            </button>
                            <p className='text-base text-[#002244] font-grava'>Check eligibility</p>
                        </div>
                        <div className='border border-x-0 border-b-0 border-t-[#E6E9EC] pt-[32px]'>
                            <p className='font-grava text-[#546B82] text-sm'>
                                Terms & conditions applied. Actual installments may differ.
                            </p>
                        </div>   
                    </div>
                </div>

            </div>
        </div>

        <div
            className='bg-[#FFFFFF] flex flex-col items-center px-[55px] py-[72px] h-[996px] gap-[60px]'
        >
            <div className='flex flex-col items-center gap-3 w-[434px]'>
                <p className='font-medium text-[#002244] font-grava text-[48px] '>Tatum Insights.</p>
                <p className="text-[18px] text-center text-[#334E69] font-grava leading-[27px]">
                    Stay updated with our press releases, financial insights, and resource highlights
                </p>
            </div>
            <div className='flex items-center gap-5'>
                <div
                    className='flex flex-col w-[429px] gap-6'
                >
                    <img src={Staff} alt='Staff' className='' />
                    <div className='flex items-center justify-between'>
                        <div className='bg-[#F2F4F7] w-[108px] rounded-lg p-2'>
                            <p className='font-grava text-[#002244] text-sm'>Press release</p>
                        </div>
                        <p className='font-medium text-[#909CAB] font-grava'>December 30, 2024</p>
                    </div>
                    <p className='font-medium text-[#001F3E] text-xl font-grava'>
                        Tatum Bank Launches in February 2024, Redefining Digital Banking
                    </p>
                    <p className='text-base text-[#667085] font-grava leading-[24px]'>
                        Tatum Bank is set to launch this February, offering a fresh approach to traditional banking with digital tools ...
                    </p>
                    <p className='text-[#546B82] font-grava cursor-pointer text-sm underline'>Learn More</p>
                </div>
                <div
                    className='flex flex-col w-[429px] gap-6'
                >
                    <img src={Business} alt='Business' className='' />
                    <div className='flex items-center justify-between'>
                        <div className='bg-[#F2F4F7] w-[54px] rounded-lg p-2'>
                            <p className='font-grava text-[#002244] text-sm'>Blog</p>
                        </div>
                        <p className='font-medium text-[#909CAB] font-grava'>December 30, 2024</p>
                    </div>
                    <p className='font-medium text-[#001F3E] text-xl font-grava'>
                        Tips for Growing Your Business in a Digital World
                    </p>
                    <p className='text-base text-[#667085] font-grava leading-[24px]'>
                        Actionable insights and advice tailored for the growth of SMEs
                    </p>
                    <p className='text-[#546B82] font-grava cursor-pointer text-sm underline'>Learn More</p>
                </div>
                <div
                    className='flex flex-col w-[429px] gap-6'
                >
                    <img src={Ceremony} alt='Ceremony' className='' />
                    <div className='flex items-center justify-between'>
                        <div className='bg-[#F2F4F7] w-[66px] rounded-lg p-2'>
                            <p className='font-grava text-[#002244] text-sm'>Media</p>
                        </div>
                        <p className='font-medium text-[#909CAB] font-grava'>December 30, 2024</p>
                    </div>
                    <p className='font-medium text-[#001F3E] text-xl font-grava'>
                        Tatum Bank celebrates grand opening with ribbon-cutting ceremony
                    </p>
                    <p className='text-base text-[#667085] font-grava leading-[24px]'>
                        Tatum Bank officially opens its doors with a new branch, 
                        furthering financing inclusion in Eti Osa. Check out the...
                    </p>
                    <p className='text-[#546B82] font-grava cursor-pointer text-sm underline'>See photos</p>
                </div>
            </div>
            <button
                className='bg-[#FFCC33] w-[257px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center'
                type='button'
            >
                <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>
                    Explore Our Resource Center
                </p>
          </button>

        </div>

        <div className='bg-[#F9FAFB] flex flex-col py-[80px] gap-[32px] items-center px-[88px]'>
            <p className='font-medium text-[48px] font-grava text-[#002244]'>Find what you need instantly.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-lg gap-[40px]'>
                    <img src={Card} alt='Card' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>Debit/Credit Cards</p>
                        <p className='text-base font-medium font-grava text-[#000]'>Enjoy a card that never flops. Our Debit and credit cards are reliable and secure.</p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Learn more
                        </p>
                    </button>
                </div>
                <div className='flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-lg gap-[40px]'>
                    <img src={ATM} alt='ATM' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>ATM Branch Locator</p>
                        <p className='text-base font-medium font-grava text-[#000]'>
                            Simply enter your location and find our closest branch on the map.
                        </p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] mx-auto absolute bottom-5 h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Check the nearest ATM branch
                        </p>
                    </button>
                </div>
                <div className='flex flex-col p-[26px] bg-[#fff] h-[356px] relative rounded-lg gap-[40px]'>
                    <img src={Online} alt='Online' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>Online Banking</p>
                        <p className='text-base font-medium font-grava text-[#000]'>
                            Manage your accounts, pay bills, transfer funds, and track transactions anytime, anywhere. 
                            Our user-friendly mobile app serves you no matter where life takes you.
                        </p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Download our mobile app
                        </p>
                    </button>
                </div>
                <div className='flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-lg gap-[40px]'>
                    <img src={USSD} alt='USSD' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>USSD Banking</p>
                        <p className='text-base font-medium font-grava text-[#000]'>
                            No internet? No problem. Access your account, check balances, 
                            and perform essential transactions using our simple *911#. It is quick, secure, and reliable.
                        </p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Dial *911#
                        </p>
                    </button>
                </div>
                <div className='flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-lg gap-[40px]'>
                    <img src={Loan} alt='Loan' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>Loan calculator</p>
                        <p className='text-base font-medium font-grava text-[#000]'>
                            Easily calculate loan eligibility according to your current salary. 
                        </p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Try our loan calculator
                        </p>
                    </button>
                </div>
                <div className='flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-lg gap-[40px]'>
                    <img src={FX} alt='FX' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[#000]'>FX Market Rate</p>
                        <p className='text-base font-medium font-grava text-[#000]'>
                            Stay updated with real-time FX rates and make smarter, 
                            timely decisions in the global market.
                        </p>
                    </div>
                    <button
                        className='bg-[#fff] w-[356px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Check our FX rates
                        </p>
                    </button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Home