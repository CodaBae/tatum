import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

import Meeting from "../../assets/png/q_and_a.png";
import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

const Resources = () => {
  const [openDropdownOne, setOpenDropdownOne] = useState(false)
  const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
  const [openDropdownThree, setOpenDropdownThree] = useState(false)

  const isMobile = window.innerWidth < 768

  const navigate = useNavigate() 

  const resourcesRef = useRef(null);
  const faqRef = useRef(null);

  const { state } = useLocation();

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

      <section 

 className='h-full w-full outline-none '>
        <div 
            style={{
                backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png" : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='h-auto lm:h-[821px] pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
        >
          <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
              <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                  <p 
                      className={`animate__animated animate__fadeInUp lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[32px] lg:text-[75px] font-medium leading-[40px] lg:leading-[78px]`}
                  >
                      Media & Publications
                  </p>
                  <p 
                      className={`animate__animated  animate__fadeInUp animate__slow md:w-[265px] lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                  >
                      Learn about everything, from customer's success stories 
                      to getting informed with our latest news.
                  </p>
                
              </div>
              <div className="hidden lm:flex items-start absolute lg:bottom-[-102.9%]">
              <p className="text-[#002244] font-grava text-sm md:text-base flex items-center whitespace-nowrap gap-2 ">
                We are licensed by the Central Bank of Nigeria
                <img
                  src={CBN}
                  alt="CBN"
                  className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                />
                All deposits are insured by
                <img
                  src={NDIC}
                  alt="NDIC"
                  className="inline-block mt-1 lg:mt-0 h-[16px] w-[60px] md:h-[28px]"
                />
              </p>
            </div>
          </div>
          <img 
            src="https://res.cloudinary.com/code-idea/image/upload/v1739214013/camera_man_br9idr.png"
            alt='Biz' 
            className={`animate__animated animate__fadeInRight relative -right-10 lm:right-52 w-[500vh]  lm:h-[741px] top-10 `} 
          />
       
        </div>
      </section>
      
      <section  className='bg-[#fff] md:h-[400px] lg:h-[789px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0  py-[56px] px-5 lg:py-[102px] lg:px-[80px]'>
          <div data-aos="fade-right" className="hidden md:block" >
              <img 
                  src={Meeting} 
                  alt='Meeting' 
                  className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-auto transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
              />
          </div>
          <div className='flex flex-col items-center md:items-start gap-[40px] w-full md:w-[350px] lm:w-[611px]' data-aos="fade-left" >
              <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
                  <p className='font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>Content Unavailable!</p>
                  <p className="text-sm lm:text-[18px] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                    We're currently updating our resources to serve you better. 
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
                  <p className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Visit Homepage</p>
                  <BsArrowRight size={100}   className='mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
              </button>
          </div>
          <img src={Meeting} alt='Meeting' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
      </section>
      
      <section ref={faqRef} className='bg-[#F9FAFB] flex w-full px-5 lg:px-0 py-[56px] lg:py-[112px] items-center justify-center'>
        <div className='w-full lg:w-[878px] mx-auto flex flex-col items-center'>
          <p className='text-[24px] lg:text-[40px] font-grava text-[#002244] font-medium'>Frequently Asked Questions</p>

          <div className='mt-[32px] lg:mt-[56px] flex flex-col gap-6 w-full'>

            <div onClick={handleDropdownOne} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>What do I need to open an account?</p>
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
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Are there any account opening fees?</p>
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
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Can I manage my account on mobile?</p>
                {openDropdownThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
              { openDropdownThree && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        Yes! You can access your account on iOS and Android with the Tatum Mobile app.
                    </p>
                }
            </div>

          </div>

          <div className='flex items-center mt-6 lg:mt-[32px] justify-center'>
            <p className='font-grava text-xs lg:text-[18px] text-[#334E69]'>Have more questions? Visit our <span onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='text-sm lg:text-[20px] underline text-[#002244]'>Help Center</span></p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Resources