import React, { useEffect, useState, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import Call from "../../assets/png/call_center.png"
import InfoSmall from "../../assets/png/info_small.png"
import InfoBig from "../../assets/png/info_big.png"
import MapSmall from "../../assets/png/map_small.png"
import MapBig from "../../assets/png/map_big.png"

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Chat from "../../assets/svg/chat.svg";
import Locator from "../../assets/svg/locator.svg";
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const isMobile = window.innerWidth < 768

    const contactRef = useRef(null)
    const { state } = useLocation()

    // useEffect(() => {
    //     if (state?.section === "contact" && contactRef.current) {
    //         contactRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state])

        
       

  return (
    <div className='w-full overflow-hidden' ref={contactRef}>

        <section 
            className='h-full w-full outline-none'
        >
            <div 
                style={{
                    backgroundImage: `url(${isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png" : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='h-auto lm:h-[821px] pt-[40px] overflow-hidden  pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
            >
                <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p  
                      className={`animate__animated animate__fadeInUp lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[32px] lg:text-[75px] font-medium leading-[40px] lg:leading-[78px]`}
                      >
                            Contact Us
                        </p>
                        <p 
                            className={`animate__animated  animate__fadeInUp animate__slow md:w-[265px] lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                        >
                            If you require any assistance regarding our company, businesses or exploits, please don’t hesitate to contact us..
                        </p>
                        
                    </div>
                    <div className="hidden lm:flex items-start absolute lg:bottom-[-104.9%]">
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
                    src={isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1739217338/hands_flbj3u.png": "https://res.cloudinary.com/code-idea/image/upload/v1739213039/woman_laughing_sq4zu7.png"}
                    alt='Biz' 
                    className={`animate__animated animate__fadeInRight relative -left-2 lm:right-28 w-[786px]  lm:h-[811px] lg:top-20`} 
                />
            </div>
        </section>

        <section className='bg-[#fff] md:h-[400px] lg:h-[789px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[175px]  py-[56px] px-5 lg:py-[102px] lg:px-[80px]'>
            <div data-aos="fade-right" className="hidden md:block" >
                <img 
                    src={Call} 
                    alt='Meeting' 
                    className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                />
            </div>
            <div className='flex flex-col items-center md:items-start gap-[40px] w-full md:w-[350px] lm:w-[498px]' data-aos="fade-left" >
                <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
                    <p className='font-medium text-[#002244] font-grava text-center md:text-left text-sm leading-[30px] lg:leading-[18px] tracking-widest uppercase'>CONTACT US</p>
                    <p className='font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>Got questions, complaints, or feedback?</p>
                    <p className="text-sm lm:text-[18px] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                        If you require any assistance regarding our company, 
                        businesses or exploits, please don’t hesitate to contact us. 
                        We would be more than happy to help you out.
                    </p>
                </div>
            </div>
            <img src={Call} alt='Call' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
        </section>

        <section data-aos="fade-up"  data-aos-duration="3000" className='bg-[#F9FAFB] flex flex-col px-5 gap-[56px] lm:px-[56px] py-[56px] lm:py-[80px] '>
            <div className='flex flex-col gap-4 w-full lm:w-[354px]'>
                <p className='font-grava text-[#002244] font-medium leading-[40px] lm:leading-[60px] text-[32px] lm:text-[48px] '>Get in Touch</p>
                <p className='font-[350] font-grava text-[#002244] text-sm lm:text-[18px] '>Fill the form below and a member of our team will be in touch with you.</p>
            </div>
            <div className='flex  flex-col lm:flex-row items-center gap-[82px]'>
                <div className='flex flex-col gap-[32px] w-full lm:w-7/12'>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-medium text-[#334E69] font-grava text-[14px] lm:text-[18px] '>Name</label>
                        <input 
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter name'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                        />
                    </div>
                    <div className='flex flex-col lm:flex-row items-center gap-5'>
                        <div className='flex flex-col gap-[14px] w-full lm:w-6/12'>
                            <label className='font-medium text-[#334E69] font-grava text-[14px] lm:text-[18px] '>Phone Number</label>
                            <input 
                                name='phone'
                                type='number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter Phone'
                                className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                            />
                        </div>
                        <div className='flex flex-col gap-[14px] w-full lm:w-6/12'>
                            <label className='font-medium text-[#334E69] font-grava text-[14px] lm:text-[18px] '>Email</label>
                            <input 
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter email'
                                className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-medium text-[#334E69] font-grava text-[14px] lm:text-[18px] '>Subject</label>
                        <input 
                            name='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder='Enter Subject'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-medium text-[#334E69] font-grava text-[14px] lm:text-[18px] '>Message</label>
                        <textarea 
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Enter message here'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[190px] lm:h-[256px]'
                        ></textarea>
                    </div>
                    <button
                        className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-full lg:w-[188px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                        type='button'
                    >
                            <p className='transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Send message</p>
                            <BsArrowRight size={100}   className='mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                        </button>
                </div>
                <div className='flex flex-col w-full lm:w-4/12'>
                  <img src={isMobile ? InfoSmall : InfoBig} alt='info' className='' />
                </div>
            </div>
        </section>

        <section data-aos="fade-up"   data-aos-duration="3000"  className='flex px-5 py-[112px] lm:py-[136px] lm:px-[56px] flex-col items-center justify-center gap-[56px]'>
            <div className='flex flex-col gap-4 w-full items-center lm:w-[461px]'>
                <p className='font-grava text-[28px] font-medium lm:text-[48px] text-[#002244] leading-[35px] lm:leading-[60px]'>Our Office Locator</p>
                <p className='font-[350] font-grava text-center text-[#002244] text-sm lm:text-[18px] leading-5 lm:leading-[27px]'>Find our nearest branch and ATM locations for convenient and accessible banking services.</p>
            </div>
            <img src={isMobile ? MapSmall : MapBig} alt='map' className='' />

            <div className='w-full flex flex-col lm:flex-row gap-5'>
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
            </div>

        </section>
    </div>
  )
}

export default Contact