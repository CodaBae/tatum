import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"

import NDIC from "../../assets/svg/ndic.svg";
import CBN from "../../assets/svg/cbn_logo.svg";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import HeroSection from '../../components/HeroSection';
import AccordionItem from '../../components/AccordionItem';

const InternetBanking = () => {
    const [openDropdownOne, setOpenDropdownOne] = useState(false)
    const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
    const [openDropdownThree, setOpenDropdownThree] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
    

    const faqRef = useRef(null); 

    const navigate = useNavigate()

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
    <div className='w-full'>
        {
            isMobile ?
            //Mobile 
            <section className='h-full w-full outline-none '>
            <div 
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1740415901/slide_ib_mobile_d1leny.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='h-[744px] lm:h-[821px] pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col  items-center gap-0' //[694px]
            >
            <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
                <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                    <p 
                        className={`animate__animated animate__fadeInUp font-[450] lm:w-[692px] capitalize font-grava text-[#002244]  text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}
                    >
                        Say hello to <br /> banking <span className='font-[700]'> on the go</span>
                    </p>
                    <p 
                        className={`animate__animated  animate__fadeInUp animate__delay-06s md:w-[265px] lg:w-[692px] font-[300] text-sm font-grava lg:text-[25px] text-[14px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                    >
                        Your money, your way. Experience banking that fits your lifestyle, not the other way around.
                    </p>
                    
                </div>
                <div className="flex items-start absolute -bottom-20 lg:bottom-[-68.9%]" style={{zIndex:'99999'}}>
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
                src="https://res.cloudinary.com/code-idea/image/upload/v1739956611/couple_f6bcnm.png"
                alt='Biz' 
                className={`animate__animated  relative -left-5 lm:right-24 lm:left-auto w-full lm:w-[789px] top-28 lm:top-14 h-[386px] lm:h-[724px]  `} //top-24  lm:h-[741px] lm:right-52
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
                    bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1740415901/slide_ib_mobile_d1leny.png"} 
                    bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740415878/slide_ib_desktop_bzw3af.png"} 
                    title={`Say Hello To <br /> Banking <span class='font-[700]'> On The Go</span> `}
                    content={`<p class="leading-[34.1px]">Your money, your way. Experience banking that fits your lifestyle, not the other way around.</p>`} 
                    link={"/digital"} 
                    sectionName={"digi"} 
                    mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739956611/couple_f6bcnm.png"} 
                    mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739956611/couple_f6bcnm.png"} 
                    styleP={{ height: "120%", marginLeft: "25%", marginTop: "-10%" }}
                />
            </section>
        }
        

        <section className='bg-[#fff] pt-[56px] lg:pt-[102px] lg:h-min pb-[56px] lg:pb-[102px] px-5 lg:px-[56px] flex flex-col lm:flex-row items-start lm:items-center gap-[40px] lm:gap-[150px]'>
            <div data-aos="fade-right">
                <img 
                    src={"https://res.cloudinary.com/code-idea/image/upload/v1739957492/construction_u5txc9.png"} 
                    alt='Construction' 
                    className='flex w-full h-[290px] lg:w-[571px] lg:h-auto transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                />
            </div>
            <div className='flex flex-col items-start gap-5 lm:gap-[40px] w-full md:w-[350px] lm:w-[611px]' data-aos="fade-left" >
                <div className="flex flex-col gap-2 md:gap-3 items-start">
                    <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>Under Construction!</p>
                    <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[27px] text-left tracking-[0.01em]">
                        We're currently updating our website to serve you better. 
                        This doesn't mean we're not working – we're behind the scenes, 
                        crafting exceptional content that will be worth the wait.
                    </p>
                </div>
                <button
                    className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-[169px] lg:w-[200px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                    type='button'
                    onClick={() => {
                        navigate(
                        "/",
                        {
                            state: { section: "home" },
                        },
                        window.scrollTo(0, 0)
                        );
                    }}
                >
                    <p className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Visit Homepage</p>
                    <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                </button>
            </div>
        </section>

        <section ref={faqRef} className='bg-[#F9FAFB] flex w-full px-5 lg:px-0 py-[56px] lg:py-[112px] items-center justify-center'>
            <div className='w-full lg:w-[878px] mx-auto flex flex-col items-center'>
                <p className='text-[24px] lg:text-[48px] font-grava text-[#002244] leading-[60px] font-[450]'>Frequently Asked Questions</p>

                <div className='mt-[32px] lg:mt-[56px] flex flex-col gap-6 w-full'>
                    <div className="space-y-5">
                        <AccordionItem
                            question="What do I need to open an account?"
                            answer="Just a government-issued ID and your account opening is processed."
                            defaultOpen={true}
                        />
                        <AccordionItem
                            question="Are there any account opening fees?"
                            answer="No, you do not pay any fees to open an account."
                        />
                        <AccordionItem
                            question="Can I manage my account on mobile?"
                            answer="Yes! You can access your account on iOS and Android with the Tatum Mobile app."
                        />
                    </div>
                    

                    {/* <div onClick={handleDropdownOne} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                        <div className='flex items-center justify-between'>
                        <p className='font-grava text-[#475467] font-[450] lg:text-[20px]'>What do I need to open an account?</p>
                        {openDropdownOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        { openDropdownOne && 
                            <p className='font-[300] font-grava tracking-[1.4%] text-[14px] lm:text-[20px] leading-[26px] text-[#334E69]'>
                                Just a government-issued ID and your account opening is processed.
                            </p>
                        }
                    </div>

                    <div onClick={handleDropdownTwo} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                        <div className='flex items-center justify-between'>
                        <p className='font-grava text-[#475467] font-[450] lg:text-[20px]'>Are there any account opening fees?</p>
                        {openDropdownTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        { openDropdownTwo && 
                            <p className='font-[300] font-grava tracking-[1.4%] text-[14px] lm:text-[20px] leading-[26px] text-[#334E69]'>
                                No, you do not pay any fees to open an account
                            </p>
                        }
                    </div>

                    <div onClick={handleDropdownThree} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
                        <div className='flex items-center justify-between'>
                        <p className='font-grava text-[#475467] font-[450] lg:text-[20px]'>Can I manage my account on mobile?</p>
                        {openDropdownThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
                        </div>
                        { openDropdownThree && 
                            <p className='font-[300] font-grava tracking-[1.4%] text-[14px] lm:text-[20px] leading-[26px] text-[#334E69]'>
                                Yes! You can access your account on iOS and Android with the Tatum Mobile app.
                            </p>
                        }
                    </div> */}

                </div>
{/* 
                <div className='flex items-center mt-6 lg:mt-[32px] justify-center'>
                <p className='font-grava text-xs lg:text-[18px] text-[#334E69]'>Have more questions? Visit our <span onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='text-sm lg:text-[20px] underline text-[#002244]'>Help Center</span></p>
                </div> */}
            </div>
        </section>

    </div>
  )
}

export default InternetBanking