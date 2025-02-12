import React, { useEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'

import Forward from "../../../assets/svg/forward.svg"

import Brainstorm from '../../../assets/png/brainstorm.jpeg'
import Pie from '../../../assets/png/pie.png'
import Bar from '../../../assets/png/bar.png'
import FileB from '../../../assets/png/file_b.png'
import People from '../../../assets/png/people.png'

const Investment = () => {
    
    const navigate = useNavigate()

    const investRef = useRef(null);
    const { state } = useLocation();

    // useEffect(() => {
    //     if (state?.section === "invest" && investRef.current) {
    //         investRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state]);

  return (
    <div ref={investRef} className="w-full mb-[56px] lg:mb-[120px]">
        <div 
            style={{
                backgroundImage: `url(${Brainstorm})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
            className="w-full h-[434px] md:h-[693px] flex relative items-center justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
        
            <p className='font-grava font-bold z-10 text-[#fff] text-[34px] lg:text-[75px]'>Investment Advisory</p>
        
            <div className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[125px] cursor-pointer group' onClick={() => navigate(-1)}>
                <MdKeyboardBackspace className='w-5 h-5 mt-[-2px] text-[#fff] group-hover:mr-2' />
                <p className='font-grava text-[#fff] text-[20px] font-medium whitespace-nowrap transition-all duration-500 group-hover:ml-2'>Go back</p>
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
                <p className="font-[350] font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px]">
                    Investment Advisory
                </p>
            </div>
        </div>
        
        <div className='flex items-center justify-center w-full pt-[82px] pb-[88px] lg:py-[144px]'>
            <div className='flex flex-col items-center gap-4 w-[350px] lg:w-[666px] mx-auto'>
                <p className='font-grava text-center text-[#002244] font-medium text-[24px] leading-[30px] lg:text-[48px] lg:leading-[60px] '>
                    Investment Advisory
                </p>
                <p className='font-[350] text-center lg:w-[444px] text-[#334E69] font-grava text-[20px]  '>
                    Make Smart Investment Decisions Every Day with Tatum Bank
                </p>
            </div>
        </div>

        <div 
            className='w-full  pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] grid grid-cols-1 gap-[100px]'
        //     style={{
        //         gridTemplateRows: 'repeat(6, 1fr)',
        //     }}
        >
            <div 
                className='flex sticky top-[calc(8%+var(0rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#ECFDF3] w-full rounded-[24px] h-[730px] md:h-[410px] lg:h-[510px]'
            >
                <div className='w-full md:w-7/12 flex flex-col gap-[50px] lg:gap-[88px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Comprehensive Portfolio Management for Every Investor
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Achieve higher investment returns with a portfolio designed to balance growth and stability.
                             We strategically allocate assets and diversify them across different industries to 
                             capitalize on opportunities. Join Tatum and keep your investments aligned with your goals, 
                             even during market fluctuations.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={FileB} alt='File' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer w-full group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                            Build Your Tailored Portfolio Today
                        </p>
                        <BsArrowRight size={100}   className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={FileB} alt='File' className='md:w-[198px] m lm:w-[304px] lm:h-[304px]' />
                </div>
            </div>

            <div className='flex sticky top-[calc(8%+var(2.25rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFFAEB] w-full rounded-[24px] h-[710px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[50px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Strategic Risk Management for Secure Investments
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            We safeguard your investments by analyzing market trends to identify potential risks, 
                            employing hedging strategies to offset losses, and designing insurance plans that shield 
                            your portfolio from unexpected downturns.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Pie} alt='Pie' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                            Protect Your Investments Now
                        </p>
                        <BsArrowRight size={100}   className='w-5 h-5 text-[#002244] mt-[-2px] group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Pie} alt='Pie' className='md:w-[198px] lm:w-[297px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FEF3F2] w-full rounded-[24px] h-[678px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[50px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            Investment Research and Analysis
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            We help you identify the right mix of assets, stocks, bonds, and mutual funds—specific 
                            to your unique goals and risk tolerance, then guide you through the investment 
                            decisions that optimize your portfolio performance.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={Bar} alt='Bar' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 w-full cursor-pointer group'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                            Get Expert Insights on Your Investments
                        </p>
                        <BsArrowRight size={100}   className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={Bar} alt='Bar' className='md:w-[198px] lm:w-[273px] lm:h-[366px]' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#F9FAFB] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
                <div className='w-full md:w-7/12 flex flex-col gap-[50px] lg:gap-[118px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                            High-Net-Worth <br /> Investing
                        </p>
                        <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                            Our high-net-worth investment strategies offer exclusive opportunities like private equity, 
                            venture capital, and real estate investment trusts (REITs) to help grow your wealth. 
                            We also provide access to hedge funds and structured products designed to deliver 
                            higher returns while managing risk. Take control of your financial future and invest in 
                            tailored solutions that align with your goals.
                        </p>
                    </div>
                    <div className='flex md:hidden'>
                        <img src={People} alt='People' className='w-[198px] mx-auto' />
                    </div>
                    <div className='flex items-center gap-2 w-full group cursor-pointer'>
                        <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                            Explore Exclusive Investment Opportunities
                        </p>
                        <BsArrowRight size={100}   className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                    </div>
                </div>
                <div className='w-5/12 hidden md:flex justify-end'>
                    <img src={People} alt='People' className='md:w-[198px] lm:w-[300px] lm:h-[234px]' />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Investment