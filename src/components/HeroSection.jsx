import React, { useState, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs';

//SVGS
import NDIC from "../assets/svg/ndic.svg";
import CBN from "../assets/svg/cbn_logo.svg";

    const HeroSection = ({ 
        bgMobile, 
        bgDesktop, 
        title, 
        content, 
        link, 
        sectionName,
        mainImgMobile, 
        mainImgDesktop, 
        btnText 
    }) => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        <div className="h-full w-full outline-none">       
            <div
                style={{
                backgroundImage: `url(${
                    isMobile
                    ? bgMobile
                    : bgDesktop
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}
                className="h-[764px] lg:h-[91vh] pt-[64px] lm:pt-[40px]  px-5 lg:px-[60px] relative w-full flex flex-col lg:flex-row items-center gap-0"
            >
                <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
                <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
                    <p
                    className={`${"animate__animated animate__fadeInUp "
                    } lg:w-[450px] font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-medium leading-[40px] lg:leading-[78px]`}
                    >
                        <p dangerouslySetInnerHTML={{ __html: title }}/> {/* I used this because some header have break rule */}
                    </p>
                    <p
                    className={`${
                    "animate__animated animate__fadeInUp animate__delay-08s"
                    } md:w-[265px] lg:w-[530px] font-[300] text-sm font-grava lg:text-[25px] text-[34px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                    >
                        {content}
                    </p>
                    <div
                        className={`flex items-center mt-[10px] mb-[-5%] lg:mt-[12px] gap-3 ${
                            "animate__animated animate__fadeInUp animate__delay-10s"
                        }`}
                    >
                    <button
                        className={`transition-all duration-500 ease-in-out hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center bg-[#002244] group hover:bg-[#FFCC33] p-5`}
                        type="button"
                        onClick={() => {
                            navigate(link, {
                                state: { section: `${sectionName}`}
                            }), window.scrollTo(0, 0)}
                        }
                    >
                        <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                            {btnText}
                        </p>
                        <BsArrowRight
                            size={100}
                            className="mt-[2px] transition-colors duration-500 ease-in-out w-5 h-5 text-[#FFCC33] group-hover:text-[#002244]"
                        />
                    </button>

            
                    </div>
                </div>
                
                <div className="flex items-start absolute -bottom-20 md:-bottom-32 lm:bottom-[-45%]" style={{zIndex:'99999'}}>
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
                        <div className="lm:w-[60px] mt-0 lg:mt-1.5">
                        <img
                            src={NDIC}
                            alt="NDIC"
                            className="flex justify-start lm:inline-block mt-1 lg:mt-0 h-[23px] w-[21px] md:h-[28px]"
                        />
                        </div>
                    </p>
                    </p>
                </div>

                </div>
                {
                    isMobile ?
                    <div className="max-w-[400px]">
                        <img
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-once="false"
                            src={mainImgMobile}
                            alt="Family"
                            className={`relative md:right-14 -bottom-12 lm:right-24 top-28 -right-6 h-[400.01px]`}
                        />
                    </div>
                    :
                    <img
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        src={mainImgDesktop}
                        alt="MainImg"
                        className={`relative md:right-14 bottom-0 lm:right-24 top-28 -right-5 h-[560.01px]  lg:right-[25%] lg:top-[3.5%] lm:h-[80vh]`}
                    />
                }
            </div>        
        </div>
    )
    }

export default HeroSection