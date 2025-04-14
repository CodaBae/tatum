import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import Line from "../../assets/svg/line_b.svg"
import Plus from "../../assets/svg/plus.svg";
import Chat from "../../assets/svg/chat.svg";
import Locator from "../../assets/svg/locator.svg";
import Minus from "../../assets/svg/minus.svg";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import HeroSection from '../../components/HeroSection';

const Help = () => {
  const [text, setText] = useState("")
  const [openDropdownOne, setOpenDropdownOne] = useState(true)
  const [openDropdownTwo, setOpenDropdownTwo] = useState(false)
  const [openDropdownThree, setOpenDropdownThree] = useState(false)
  const [openDropdownFour, setOpenDropdownFour] = useState(false)
  const [openDropdownFive, setOpenDropdownFive] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

  const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
            setIsSmall(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

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
            className='h-[794px] lm:h-[821px] pt-[40px] overflow-hidden pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
          >
            <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-0 z-30 gap-[64px] lg:gap-[69px]'>
                <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                  {/* lm:pt-[50px] */}
                    <p 
                        className={`animate__animated animate__fadeInUp  lm:-ml-1 lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-bo leading-[40px] lg:leading-[78px]`}
                        >
                        Help & Support
                    </p>
                    <p 
                        className={`animate__animated  animate__fadeInUp animate__delay-06s w-[350px] md:w-[265px] rotate-90 lg:rotate-0 lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-[34px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                    >
                        If you require any assistance regarding our company, businesses or exploits, 
                        please don’t hesitate to contact us..
                    </p>
                  
                </div>

                <div className="flex items-start absolute -bottom-20 lg:bottom-[-138%]" style={{zIndex:'99999'}}>
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

            {
              isSmall ? 
              <div className='w-[450px]'>
                <img 
                  src="https://res.cloudinary.com/code-idea/image/upload/v1739217338/hands_flbj3u.png"
                  alt='Biz' 
                  className={`animate__animated  relative -right-2 lm:right-52 lm:h-[741px] -top-12`} 
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                />
              </div>
              :
              <img 
                src="https://res.cloudinary.com/code-idea/image/upload/v1739295233/hands_2_lxguos.png"
                alt='Biz' 
                className={`animate__animated  relative -right-10 lm:right-64 w-[500vh]  lm:h-[720px] top-10 lg:top-8`}  
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
                //{`animate__animated  relative -right-10 lm:right-52 w-[500vh]  lm:h-[741px] top-10 lg:top-5`} 
              />
            }

          </div>
        </section>
        :
        //Desktop
        <section className="w-full h-full ">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"} 
            title={` <span class="font-bold">Help & Support<span> `}
            content={'If you require any assistance regarding our company, businesses or exploits, please don’t hesitate to contact us.'} 
            link={"/digital"} 
            sectionName={"digi"} 
            mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739295233/hands_2_lxguos.png"} 
            mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739217338/hands_flbj3u.png"} 
            styleP={{ height: "90vh", marginLeft: "16%", marginTop: "-11.5%" }}
          />
        </section>
      }

      <section className='flex flex-col items-center justify-center pt-[56px] lg:pt-[110px] lg:pb-[16px]  gap-[56px] lm:gap-[39px]'>
        <div className='w-10/12 lm:w-[878px] h-[52px] lm:h-[75px] rounded-2xl border flex items-center justify-between border-[#EAECF0] py-6 px-[32px]'>
          <input 
            className='w-8/12 text-[#546B82] text-[18px] outline-none font-grava font-[300]'
            type='text'
            placeholder='Enter keywords...'
            value={text}
            name="search"
            onChange={(e) => setText(e.target.value)}
          />
          <FiSearch className="w-[22px] h-[22px] text-[#002244] " />
        </div>
        <img src={Line} alt='Line' className='w-[80%]' />

        <div
          className='flex items-center flex-col gap-[56px] justify-center lm:w-[878px] w-11/12'
        >
          <div className='flex flex-col items-center gap-2 lm:gap-4'>
            <p className='font-grava font-[500] text-[21px] lm:text-[48px] leading-[60px] tracking-[0.01em] text-[#002244]'>FAQs</p>
            <p className='font-[400] font-grava text-[14px] lm:text-[18px] leading-5 text-[#334E69]'>Have a question? We’re here to help.</p>
          </div>

          <div className='flex flex-col gap-6 w-full'>
            {/* <div 
              onClick={handleDropdownOne} 
              className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform'
            >
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#334E69] font-[450] lg:text-[20px]'>How can I contact Tatum Bank?</p>
               
                {openDropdownOne ? <img src={Minus} alt='Minus' className='' /> : <img src={Plus} alt='Plus' className='' />}
              </div>
                { openDropdownOne && 
                    <p 
                      className='font-[300] font-grava tracking-[1.4%] text-[14px] lm:text-[20px] leading-[26px] text-[#334E69]'
                    >
                        If you have any questions or need assistance, please email us at:
                        info@tatumbank.com
                        You can also visit our head office for in-person support during business hours.

                    </p>
                }
            </div> */}
            <div 
              onClick={handleDropdownOne} 
              className={`${openDropdownOne ? "lg:pt-[14px] lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]" : "lg:pt-[30px] lg:pr-[14px] lg:pb-[16px] lg:pl-[18px] h-[90px]"} flex flex-col cursor-pointer gap-4 px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform`}
            >
              <div className="flex items-center justify-between">
                <p className="font-grava text-[#334E69] font-[500] text-[16px] tracking-[-0.01em] lg:text-[20px]">How can I contact Tatum Bank?</p>
                {openDropdownOne ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="Plus" />}
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdownOne ? "max-h-[200px] opacity-100" : "h-[0px] opacity-0 hidden"
                }`}
              >
                <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
                  If you have any questions or need assistance, please email us at: info@tatumbank.com.
                  You can also visit our head office for in-person support during business hours.
                </p>
              </div>
            </div>
            

            <div 
              onClick={handleDropdownTwo} 
              className={`${openDropdownTwo ? "lg:pt-[14px] lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]" : "lg:pt-[30px] lg:pr-[14px] lg:pb-[16px] lg:pl-[18px] h-[90px]"} flex flex-col cursor-pointer gap-4 px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform`}
            >
              <div className="flex items-center justify-between">
                <p className="font-grava text-[#334E69] font-[500] tracking-[-0.01em] text-[16px] lg:text-[20px]">How do I open an account with Tatum Bank?</p>
                {openDropdownTwo ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="Plus" />}
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdownTwo ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
              >
                <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
                  You can open an account online via our website or visit our office. Required documents include:

                  A valid ID (NIN, International Passport, or Driver’s License).
                  Proof of address (utility bill or bank statement).
                  Two passport photographs.
                  BVN (Bank Verification Number).
                </p>
              </div>
            </div>

            <div 
              onClick={handleDropdownThree} 
              className={`${openDropdownThree ? "lg:pt-[14px] lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]" : "lg:pt-[30px] lg:pr-[14px] lg:pb-[16px] lg:pl-[18px] h-[90px]"} flex flex-col cursor-pointer gap-4 px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform`}
            >
              <div className="flex items-center justify-between">
                <p className="font-grava text-[#334E69] font-[500] tracking-[-0.01em] text-[16px] lg:text-[20px]">Is Tatum Bank regulated by the Central Bank of Nigeria (CBN)? </p>
                {openDropdownThree ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="Plus" />}
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdownThree ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
              >
                <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
                  Yes, Tatum Bank is fully licensed and regulated by the Central Bank of Nigeria (CBN) and insured by the Nigeria Deposit Insurance Corporation (NDIC).
                </p>
              </div>
            </div>

            <div 
              onClick={handleDropdownFour} 
              className={`${openDropdownFour ? "lg:pt-[14px] lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]" : "lg:pt-[30px] lg:pr-[14px] lg:pb-[16px] lg:pl-[18px] h-[90px]"} flex flex-col cursor-pointer gap-4 px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform`}
            >
              <div className="flex items-center justify-between">
                <p className="font-grava text-[#334E69] font-[500] text-[16px] tracking-[-0.01em] lg:text-[20px]">Where is Tatum Bank located?  </p>
                {openDropdownFour ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="Plus" />}
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdownFour ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
              >
                <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
                  Currently, we operate solely from our head office in Abuja, but we are expanding soon. Stay updated via our website and social media channels. <br />
                  Our head office is at:  <br />
                  Plot 1088, Cadastral Zone AO1, Area 3, Garki, FCT Abuja. <br />
                </p>
              </div>
            </div>

            <div 
              onClick={handleDropdownFive} 
              className={`${openDropdownFive ? "lg:pt-[14px] lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]" : "lg:pt-[30px] lg:pr-[14px] lg:pb-[16px] lg:pl-[18px] h-[90px]"} flex flex-col cursor-pointer gap-4 px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-500 ease-in-out transform`}
            >
              <div className="flex items-center justify-between">
                <p className="font-grava text-[#334E69] font-[500] tracking-[-0.01em] text-[16px] lg:text-[20px]">What types of banking services does Tatum Bank offer?</p>
                {openDropdownFive ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="Plus" />}
              </div>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdownFive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 hidden"
                }`}
              >
                <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
                    We offer five core segments:   <br />
                    •⁠  ⁠Personal Banking: For individuals   <br />
                    •⁠  ⁠Business Banking: For SMEs   <br />
                    •⁠  ⁠Institutional Banking: For organizations   <br />
                    •⁠  ⁠Corporate Banking: For larger enterprises   <br />
                    •⁠  ⁠Private Banking: For high-net-worth clients <br />
                </p>
              </div>
            </div>
           
          </div>

          <div className='bg-[#FFFAEB] w-full lg:w-[1014px] rounded-[16px] px-5 lm:px-[32px] mt-[32px] flex flex-col lm:flex-row items-center gap-[32px] lm:gap-0 justify-between py-10 lm:py-[52px]'>
            <div className='flex flex-col w-[310px] lm:w-full items-center lm:items-start gap-2'>
              <p className='font-grava font-[500] text-[#002244] text-[18px] lm:text-[28px] leading-[27px] lm:leading-[35px] '>Still have questions?</p>
              <p className='font-[400] text-[#334E69] font-grava w-[264px] md:w-auto mx-auto lm:mx-0 text-center lm:text-left text-[12px]  lg:text-[20px]'>Can’t find the answer you’re looking for? Please get in touch with our team.</p>
            </div>
            <button
              className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-[150px] lg:w-[186px] h-[56px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
              type='button'
              // onClick={() => navigate("/", {state: {section: "home"}})}
              onClick={() => {navigate("/contact", { state: {section: "contact"}}),window.scrollTo(0, 0)}}
            >
                <p className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Get in touch</p>
                <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
            </button>
          </div>

        </div>

      </section>
      
      <section className='w-full px-5 lm:px-[56px] py-[56px] lm:pt-[69px] lm:pb-[109px] flex flex-col lm:flex-row items-center gap-5'> 
          <div className='bg-[#FFFAEB] flex flex-col w-full lm:w-6/12 rounded-tl-[24px] rounded-br-[24px] h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
              <img src={Chat} alt='Chat' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
              <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                <p className='font-grava text-[#002244] text-[18px] leading-[30px] tracking-[0.01em] lm:text-[24px] font-[500]'>General support:</p>
                <p className='font-[400] font-grava text-[#334E69] text-[14px] leading-[130%] tracking-[0.01em] lm:text-[20px]'>info@tatumbank.com</p>
              </div>
          </div>

          <div className='bg-[#FFFAEB] flex flex-col rounded-tl-[24px] rounded-br-[24px] w-full lm:w-6/12  h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
              <img src={Locator} alt='Locator' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
              <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                <p className='font-grava text-[#002244] text-[18px] leading-[30px] tracking-[0.01em] lm:text-[24px] font-[500]'>Head Office</p>
                <p className='font-[400] font-grava text-[#334E69] text-[14px] leading-[130%] text-center tracking-[0.01em] lm:text-[20px]'>Plot 1088, Cadastral Zone AO1, Area 3, Garki FCT Abuja</p>
              </div>
          </div>

      </section>
        

    </div>

  )
}

export default Help