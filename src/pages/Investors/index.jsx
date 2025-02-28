import React, { useRef, useEffect, useState} from 'react'
import { useLocation, useNavigate} from "react-router-dom"

import Download from "../../assets/svg/download.svg";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import HeroSection from '../../components/HeroSection';

const Investors = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    const navigate = useNavigate()
    const { state } = useLocation();
  
    const resourcesRef = useRef(null); 
    const faqRef = useRef(null); 

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
    <div className='w-full overflow-hidden' ref={resourcesRef}>
        {
            isMobile ?
            //Mobile
            <section className='h-full w-full outline-none '>
                <div 
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    className='h-[644px] lm:h-[821px] pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
                >
                <div className='w-full flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p 
                            className={`animate__animated animate__fadeInUp  lm:w-[669px] capitalize font-grava text-[#002244] font-[700] text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}
                        >
                            Investor Relations
                        </p>
                        <p 
                            className={`animate__animated  animate__fadeInUp animate__delay-06s md:w-[265px] lg:w-[663px] font-[350] text-sm font-grava lg:text-[24px] text-[14px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                        >
                            Get the latest financial news, reports, and information for investors and shareholders.
                        </p>
                        
                    </div>
                    <div className="flex items-start absolute -bottom-20 lg:bottom-[-115.9%]" style={{zIndex:'99999'}}>
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
                    src="https://res.cloudinary.com/code-idea/image/upload/v1739872457/investors_udnzgp.png"
                    alt='Biz' 
                    className={`animate__animated  relative -right-10 lm:right-0 w-[500vh] top-24   lm:h-[841px]  `} //top-24  lm:h-[741px] lm:right-52
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                />
            
                </div>
            </section>
            :
            //Desktop
            <section className="w-full h-full ">
                <HeroSection
                    bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png"} 
                    bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"} 
                    title={` <span class="font-bold"> Investor Relations<span> `}
                    content={'Get the latest financial news, reports, and information for investors and shareholders.'} 
                    link={"/digital"} 
                    sectionName={"digi"} 
                    mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739872457/investors_udnzgp.png"} 
                    mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739872457/investors_udnzgp.png"} 
                    styleP={{ height: "130%", marginLeft: "40%", marginTop: "10%" }}

                />
            </section>
            
        }
        
    
        <section className='bg-[#fff] pt-[56px] lg:pt-[70px] pb-[56px] lg:pb-[70px] px-5 lg:px-[56px] flex flex-col gap-2'>
            <div className='bg-[#FCFCFD] rounded-[16px] px-4 lm:px-[32px] p-[32px] gap-[32px] flex flex-col'>
                <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                    <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[1.4%] leading-[18px] lm:leading-[26px]'>Annual Reports</p>
                    <button 
                        className='cursor-default bg-[#EDEDED]  w-full lm:w-auto h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                        // onClick={() => window.open("", "_blank")}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[400]  lg:text-[18px] font-grava text-[#B0B0B0]'>Coming soon</p> {/* group-hover:text-[#FFCC33] */}
                        {/* <img src={Download} alt='download' className='' /> */}
                    </button>
                </div>
                <div className='h-[1px] w-full bg-[#EAECF0]'></div>
                <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                    <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[1.4%] leading-[18px] lm:leading-[26px]'>Shareholders Subscriber Form</p>
                    <button 
                        className='cursor-default bg-[#EDEDED]  w-full lm:w-auto h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                        // onClick={() => window.open("", "_blank")}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[400]  lg:text-[18px] font-grava text-[#B0B0B0]'>Coming soon</p> {/* group-hover:text-[#FFCC33] */}
                        {/* <img src={Download} alt='download' className='' /> */}
                    </button>
                </div>
                <div className='h-[1px] w-full bg-[#EAECF0]'></div>
                <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                    <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[1.4%] leading-[18px] lm:leading-[26px]'>Corporate Governance Documents</p>
                    <button 
                        className='cursor-default bg-[#EDEDED]  w-full lm:w-auto h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                        // onClick={() => window.open("", "_blank")}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[400]  lg:text-[18px] font-grava text-[#B0B0B0]'>Coming soon</p> {/* group-hover:text-[#FFCC33] */}
                        {/* <img src={Download} alt='download' className='' /> */}
                    </button>
                </div>
                <div className='h-[1px] w-full bg-[#EAECF0]'></div>
                <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                    <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[1.4%] leading-[18px] lm:leading-[26px]'>Investor FAQs</p>
                    <button 
                        className='cursor-default bg-[#EDEDED]  w-full lm:w-auto h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                        // onClick={() => window.open("", "_blank")}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[400]  lg:text-[18px] font-grava text-[#B0B0B0]'>Coming soon</p> {/* group-hover:text-[#FFCC33] */}
                        {/* <img src={Download} alt='download' className='' /> */}
                    </button>
                </div>
           
            </div>
        </section>

    </div>
  )
}

export default Investors