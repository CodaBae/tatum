import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

import News from './components/News';
import Press from './components/Press';
import FormDowload from './components/FormDowload';
import Media from './components/Media';
import HeroSection from '../../components/HeroSection';
import AccordionItem from '../../components/AccordionItem';

const Resources = () => {
  const [openDropdownOne, setOpenDropdownOne] = useState(false)
  const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
  const [openDropdownThree, setOpenDropdownThree] = useState(true)
  const [activeTab, setActiveTab] = useState("news")
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const navigate = useNavigate() 
  const { state } = useLocation();

  const resourcesRef = useRef(null);
  const faqRef = useRef(null);

  const handleTabChange = (value) => {  
    setActiveTab(value)
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



  // useEffect(() => {
  //     if (state?.section === "resources" && resourcesRef.current) {
  //       resourcesRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //     if (state?.section === "faq" && faqRef.current) {
  //       faqRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [state]);

    const handleDropdownOne = () => {
      setOpenDropdownOne(!openDropdownOne)
    }
        
    const handleDropdownTwo = () => {
      setOpenDropdownTwo(!openDropdownTwo)
    }
    
    const handleDropdownThree = () => {
      setOpenDropdownThree(!openDropdownThree)
    }
    

  return (
    <div className='w-full overflow-hidden' ref={resourcesRef}>
      {
        isMobile ?
          <section className='h-full w-full outline-none'>
            <div 
                style={{
                    backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png" : "https://res.cloudinary.com/code-idea/image/upload/v1740415878/slide_ib_desktop_bzw3af.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='h-[644px] lm:h-[794px] pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
            >
              <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
                  <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                      <p 
                          className={`animate__animated animate__fadeInUp  lm:w-[669px] capitalize font-grava text-[#002244] font-[700] text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}
                      >
                          Media & Resources
                      </p>
                      <p 
                          className={`animate__animated  animate__fadeInUp animate__delay-06s md:w-[265px] lg:w-[663px] font-[350] text-sm font-grava lg:text-[24px] text-[14px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                      >
                          Learn about everything, from customer's success stories to getting informed with our latest news.
                      </p>
                    
                  </div>
                  <div className="flex items-start absolute -bottom-20 lg:bottom-[-105.9%]" style={{zIndex:'99999'}}>
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
                src="https://res.cloudinary.com/code-idea/image/upload/v1739786262/young-man_dadzln.png"
                alt='Biz' 
                className={`animate__animated  relative -right-10 lm:right-0 w-[500vh] top-24 lm:top-36 lm:h-[865px]  `} //top-24  lm:h-[741px] lm:right-52
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
              />
          
            </div>
          </section>
        :
        <section className="w-full h-full ">
            <HeroSection
                bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png"} 
                bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740415878/slide_ib_desktop_bzw3af.png"} 
                title={` <span class="font-bold"> Media & Resources<span> `}
                content={'Learn about everything, from customer\'s success stories to getting informed with our latest news.'} 
                link={"/digital"} 
                sectionName={"digi"} 
                mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739786262/young-man_dadzln.png"} 
                mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739786262/young-man_dadzln.png"} 
                left={true}
            />
        </section>
      }

      {/*  */}
      
      <section className='bg-[#fff] pt-[56px] lg:pt-[102px] pb-[56px] lg:pb-[102px] px-5 lg:px-[56px] flex flex-col gap-2'>
        <div className='flex items-center gap-5 lg:gap-[32px] border border-[#D0D5DD] overflow-x-auto border-x-0 border-t-0'>
            <div className={`${activeTab === "news" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-auto flex items-start py-3 cursor-pointer `} onClick={() => handleTabChange("news")}>
                <p className={`${activeTab === "news" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[28px] whitespace-nowrap font-[400]`}>
                  Latest News
                </p>
            </div>
            <div className={`${activeTab === "press" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-auto flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("press")}>
                <p className={`${activeTab === "press" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[26px] whitespace-nowrap font-[400]`}>
                    Press Releases
                </p>
            </div>
            <div className={`${activeTab === "form" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-auto flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("form")}>
                <p className={`${activeTab === "form" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[26px] whitespace-nowrap font-[400]`}>
                    Form Downloads
                </p>
            </div>
            <div className={`${activeTab === "media" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-auto flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("media")}>
                <p className={`${activeTab === "media" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[26px] whitespace-nowrap font-[400]`}>
                    Media Gallery
                </p>
            </div>
        </div>
        <>
          {activeTab === "news" && <News />}
          {activeTab === "press" && <Press />} 
          {activeTab === "form" && <FormDowload />} 
          {activeTab === "media" && <Media />} 
        </>
      </section>
      
      
      <section ref={faqRef} className='bg-[#F9FAFB] flex w-full px-5 lg:px-0 py-[56px] lg:py-[112px] items-center justify-center'>
        <div className='w-full lg:w-[878px] mx-auto flex flex-col items-center'>
          <p className='text-[24px] lg:text-[40px] font-grava text-[#002244] font-[500]'>Frequently Asked Questions</p>

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
                <p className='font-grava text-[#475467] font-[500]  lg:text-[20px]'>What do I need to open an account?</p>
                {openDropdownOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownOne && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        Just a government-issued ID and your account opening is processed.
                    </p>
                }
            </div>

            <div onClick={handleDropdownTwo} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-[500]  lg:text-[20px]'>Are there any account opening fees?</p>
                {openDropdownTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
              { openDropdownTwo && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        No, you do not pay any fees to open an account
                    </p>
                }
            </div>

            <div onClick={handleDropdownThree} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-[500]  lg:text-[20px]'>Can I manage my account on mobile?</p>
                {openDropdownThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
              {openDropdownThree && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        Yes! You can access your account on iOS and Android with the Tatum Mobile app.
                    </p>
                }
            </div> */}

          </div>

          <div className='flex items-center mt-6 lg:mt-[32px] justify-center'>
            <p className='font-grava text-[14px] lg:text-[18px] text-[#334E69]'>Have more questions? Visit our <span onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='text-[14px] lg:text-[20px]  font-[500] text-[#002244]'>Help Center</span></p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Resources