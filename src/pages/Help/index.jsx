import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsArrowRight } from "react-icons/bs";

import Line from "../../assets/svg/line_b.svg"
import Plus from "../../assets/svg/plus.svg";
import Chat from "../../assets/svg/chat.svg";
import Locator from "../../assets/svg/locator.svg";
import Minus from "../../assets/svg/minus.svg";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";

const Help = () => {
  const [text, setText] = useState("")
  const [openDropdownOne, setOpenDropdownOne] = useState(true)
  const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
  const [openDropdownThree, setOpenDropdownThree] = useState(false)
  const [openDropdownFour, setOpenDropdownFour] = useState(false)
  const [openDropdownFive, setOpenDropdownFive] = useState(false)



  const isMobile = window.innerWidth < 768

  const handleDropdownOne= () => {
    setOpenDropdownOne(!openDropdownOne)

  }
  const handleDropdownTwo= () => {
    setOpenDropdownTwo(!openDropdownTwo)

  }
  const handleDropdownThree= () => {
    setOpenDropdownThree(!openDropdownThree)

  }
  const handleDropdownFour= () => {
    setOpenDropdownFour(!openDropdownFour)

  }
  const handleDropdownFive= () => {
    setOpenDropdownFive(!openDropdownFive)

  }
  return (
    <div className='w-full'>
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
                      Help & Support
                  </p>
                  <p 
                      className={`animate__animated  animate__fadeInUp animate__slow md:w-[265px] rotate-90 lg:rotate-0 lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                  >
                      If you require any assistance regarding our company, businesses or exploits, 
                      please don’t hesitate to contact us..
                  </p>
                
              </div>


          <div className="hidden lm:flex items-start absolute lg:bottom-[-94.9%]">
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
            src="https://res.cloudinary.com/code-idea/image/upload/v1739213447/hands_ibmssy.png"
            alt='Biz' 
            className={`animate__animated animate__fadeInRight relative -right-10 lm:right-52 w-[500vh]  lm:h-[741px] top-10 lg:top-5`} 
          />
        </div>
      </section>

      <section className='flex flex-col items-center justify-center  lg:pt-[110px] lg:pb-[88px]  gap-[56px] lm:gap-[72px]'>
        <div className='w-10/12 lm:w-[878px] h-[75px] rounded-2xl border flex items-center justify-between border-[#EAECF0] py-6 px-[32px]'>
          <input 
            className='w-8/12 text-[#546B82] text-[18px] outline-none font-grava font-[350]'
            type='text'
            placeholder='Enter keyword...'
            value={text}
            name="search"
            onChange={(e) => setText(e.target.value)}
          />
          <FiSearch className="w-5 h-5 text-[#002244] " />
        </div>
        <img src={Line} alt='Line' className='w-[80%]' />

        <div
          className='flex items-center flex-col gap-[56px] justify-center lm:w-[878px] w-11/12'
        >
          <div className='flex flex-col items-center gap-2 lm:gap-4'>
            <p className='font-grava font-medium text-[21px] lm:text-[48px] leading-[60px] tracking-[0.2%] text-[#002244]'>FAQs</p>
            <p className='font-[350] font-grava text-sm text-[#334E69]'>Have a question? We’re here to help.</p>
          </div>

          <div className='flex flex-col gap-6 w-full'>
            <div 
              onClick={handleDropdownOne} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>How can I contact Tatum Bank?</p>
               
                {openDropdownOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownOne && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        If you have any questions or need assistance, please email us at:
info@tatumbank.com
You can also visit our head office for in-person support during business hours.

                    </p>
                }
            </div>

            <div 
              onClick={handleDropdownTwo} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>How do I open an account with Tatum Bank?
                </p>
                {openDropdownTwo ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownTwo && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        You can open an account online via our website or visit our office. Required documents include:

                        A valid ID (NIN, International Passport, or Driver’s License).
                        Proof of address (utility bill or bank statement).
                        Two passport photographs.
                        BVN (Bank Verification Number).

                    </p>
                }
            </div>

            <div 
              onClick={handleDropdownThree} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Is Tatum Bank regulated by the Central Bank of Nigeria (CBN)?                </p>
                {openDropdownThree ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownThree && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        Yes, Tatum Bank is fully licensed and regulated by the Central Bank of Nigeria (CBN) and insured by the Nigeria Deposit Insurance Corporation (NDIC).

                    </p>
                }
            </div>

            <div 
              onClick={handleDropdownFour} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>Where is Tatum Bank located?                </p>
                {openDropdownFour ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownFour && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        Currently, we operate solely from our head office in Abuja, but we are expanding soon. Stay updated via our website and social media channels. <br />
Our head office is at:  <br />
Plot 1088, Cadastral Zone AO1, Area 3, Garki, FCT Abuja. <br />

                    </p>
                }
            </div>

            <div 
              onClick={handleDropdownFive} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium  lg:text-[20px]'>What types of banking services does Tatum Bank offer?
                </p>
                {openDropdownFive ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownFive && 
                    <p className='font-[350] font-grava tracking-[1.4%] text-sm lm:text-[20px] leading-[26px] text-[#334E69]'>
                        We offer five core segments:   <br />
•⁠  ⁠Personal Banking: For individuals   <br />
•⁠  ⁠Business Banking: For SMEs   <br />
•⁠  ⁠Institutional Banking: For organizations   <br />
•⁠  ⁠Corporate Banking: For larger enterprises   <br />
•⁠  ⁠Private Banking: For high-net-worth clients <br />

                    </p>
                }
            </div>

           
          </div>

          <div className='bg-[#FFFAEB] w-full lg:w-[1014px] rounded-[16px] px-5 lm:px-[32px] mt-[32px] flex flex-col lm:flex-row items-center gap-[32px] lm:gap-0 justify-between py-10 lm:py-[52px]'>
            <div className='flex flex-col w-[310px] lm:w-full items-center lm:items-start gap-2'>
              <p className='font-grava font-medium text-[#002244] text-[18px] lm:text-[28px] leading-[27px] lm:leading-[35px] '>Still have questions?</p>
              <p className='font-[350] text-[#334E69] text-center lm:text-left text-xs lm:text-sm'>Can’t find the answer you’re looking for? Please get in touch with our team.</p>
            </div>
            <button
              className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-[150px] lg:w-[166px] h-[56px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
              type='button'
               onClick={() => navigate("/", {state: {section: "home"}})}
            >
                <p className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Get in touch</p>
                <BsArrowRight size={100}   className='mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
            </button>
          </div>

        </div>

      </section>
      
      <section className='w-full px-5 lm:px-[56px] py-[56px] lm:py-[80px] flex flex-col lm:flex-row items-center gap-5'> 
          <div className='bg-[#FFFAEB] flex flex-col w-full lm:w-6/12 rounded-tl-[24px] rounded-br-[24px] h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
              <img src={Chat} alt='Chat' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
              <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                <p className='font-grava text-[#002244] text-[18px] lm:text-[24px] font-medium'>General support:</p>
                <p className='font-[350] font-grava text-[#334E69] text-sm lm:text-[20px]'>info@tatumbank.com</p>
              </div>
          </div>

          <div className='bg-[#FFFAEB] flex flex-col rounded-tl-[24px] rounded-br-[24px] w-full lm:w-6/12  h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
              <img src={Locator} alt='Locator' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
              <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                <p className='font-grava text-[#002244] text-[18px] lm:text-[24px] font-medium'>Head Office</p>
                <p className='font-[350] font-grava text-[#334E69] text-center text-sm lm:leading-[26px] leading-5 lm:text-[20px]'>Plot 1088, Cadastral Zone AO1, Area 3, Garki FCT Abuja</p>
              </div>
          </div>

      </section>
        

    </div>

  )
}

export default Help