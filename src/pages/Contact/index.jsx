import React, { useEffect, useState, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import Call from "../../assets/png/call_center.png"
import InfoSmall from "../../assets/png/info_small.png"
import InfoBig from "../../assets/png/info_big.png"
import MapSmall from "../../assets/png/map_small.png"
import MapBig from "../../assets/png/map_big.png"

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Chat from "../../assets/svg/chat.svg";
import Locator from "../../assets/svg/locator.svg";
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../../components/HeroSection'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100)
    const [isSmall, setIsSmall] = useState(window.innerWidth < 768)
    

    const contactRef = useRef(null)
    const { state } = useLocation()

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (state?.section === "contact" && contactRef.current) {
    //         contactRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state])

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
    
  return (
    <div className='w-full overflow-hidden' ref={contactRef}>
        {
            isMobile ? 
            //Mobile
            <section className='h-full w-full outline-none'>
            <div 
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className='h-[794px] lm:h-[120vh] pt-[40px] overflow-hidden  pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0' //[694px]
            >
                <div className='w-full  flex flex-col items-start relative pt-[88px] lm:pt-[50px] z-30 gap-[64px] lg:gap-[69px]'>
                    <div className='flex w-full flex-col items-start gap-2 lg:gap-5'>
                        <p  
                      className={`animate__animated animate__fadeInUp lm:-ml-1 animate__delay-04s lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-[700] leading-[40px] lg:leading-[78px]`}
                      >
                            Contact Us
                        </p>
                        <p 
                            className={`animate__animated  animate__fadeInUp animate__delay-06s w-[300px] md:w-[265px] lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-[34px]  text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                        >
                            If you require any assistance regarding our company, businesses or exploits, please don’t hesitate to contact us..
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
                                className="flex justify-start lm:inline-block  h-[20px] w-[37px] md:w-[50px] md:h-[25px]"
                                />
                            </div>
                            </p>
                        </p>
                    </div>
                 
                </div>
                {
                    isSmall ? 
                    <div className='w-[400px]'>
                        <img 
                            src="https://res.cloudinary.com/code-idea/image/upload/v1740397436/customer-call_jznewu.png"
                            alt='Biz' 
                            className={`animate__animated  relative -left-2  h-[450px] top-28`} // h-[500px]
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-once="false"
                        />
                    </div>
                    :
                    <img 
                        src="https://res.cloudinary.com/code-idea/image/upload/v1740397436/customer-call_jznewu.png"
                        alt='Biz' 
                        className={`animate__animated  relative  w-[786px] lm:right-28 h-[650px] lg:top-16`} //lm:right-60  -left-2 lg:top-20  lm:h-[811px] 
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-once="false"
                    />

                }
            </div>
        </section>
            :
            // Desktop
            <section className="w-full h-full ">
                <HeroSection
                    bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
                    bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740415878/slide_ib_desktop_bzw3af.png"} 
                    title={` <span class="font-bold">Contact Us<span> `}
                    content={'<span class="text-[24px]">If you require any assistance regarding our company, businesses or exploits, please don’t hesitate to contact us.</span>'} 
                    link={"/digital"} 
                    sectionName={"digi"} 
                    mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740397436/customer-call_jznewu.png"} 
                    mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1740397436/customer-call_jznewu.png"} 
                    styleP={{ height: "130%", marginLeft: "40%", marginTop: "5%" }}

                />
            </section>
        }
        
        <section className='bg-[#fff] md:h-[400px] lg:h-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[175px]  py-[56px] px-5 lg:py-[49px] lg:pr-[101px] lg:pl-[110px]'>
            <div data-aos="fade-right" className="hidden md:block" >
                <img 
                    src={Call} 
                    alt='Meeting' 
                    className='hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                />
            </div>
            <div className='flex flex-col items-center md:items-start gap-[40px] w-full md:w-[350px] lm:w-[498px]' data-aos="fade-left" >
                <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
                    <p className='font-[300] text-[#002244] font-grava text-center md:text-left text-[14px] leading-[30px] lg:leading-[130%] tracking-[0.25em] uppercase lm:ml-1.5'>CONTACT US</p>
                    <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>Got questions, complaints, or feedback?</p>
                    <p className="text-[14px] lm:whitespace-nowrap lm:text-[20px] font-grava font-[400] text-[#002244] leading-[27px] text-center md:text-left tracking-[0.2%]">
                        If you require any assistance regarding our company,
                        <span className="lg:block">businesses or exploits, please don’t hesitate to</span> 
                        contact us. We would be more than happy to help 
                        <span className="lg:block">you out.</span> 
                    </p>
                </div>
            </div>
            <img src={Call} alt='Call' className='flex md:hidden w-[295px] h-[295px]' data-aos="fade-right" />
        </section>

        <section data-aos="fade-up"  data-aos-duration="3000" className='bg-[#F9FAFB] flex flex-col px-5 gap-[49px] lm:px-[56px] py-[56px] lm:py-[80px] '>
            <div className='flex flex-col gap-4 w-full lm:w-[815px]'>
                <p className='font-grava text-[#002244] font-[450] leading-[40px] lm:leading-[60px] text-[34px] lm:text-[48px] lm:-ml-1'>Get in Touch</p>
                <p className='font-[300] font-grava text-[#002244] text-[14px] lm:text-[18px] '>Fill the form below and a member of our team will be in touch with you.</p>
            </div>
            <div className='flex  flex-col lm:flex-row items-center gap-[82px]'>
                <div className='flex flex-col gap-[32px] w-full lm:w-7/12'>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-[500] text-[#334E69] font-grava text-[14px] lm:text-[18px] lm:leading-[27px]'>Name</label>
                        <input 
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter first and last name'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                        />
                    </div>
                    <div className='flex flex-col lm:flex-row items-center gap-5'>
                        <div className='flex flex-col gap-[14px] w-full lm:w-6/12'>
                            <label className='font-[500] text-[#334E69] font-grava text-[14px] lm:text-[18px] lm:leading-[27px]'>Phone Number</label>
                            <input 
                                name='phone'
                                type='number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter your phone number'
                                className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                            />
                        </div>
                        <div className='flex flex-col gap-[14px] w-full lm:w-6/12'>
                            <label className='font-[500] text-[#334E69] font-grava text-[14px] lm:text-[18px] lm:leading-[27px]'>Email</label>
                            <input 
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='johndoe@gmail.com'
                                className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-[500] text-[#334E69] font-grava text-[14px] lm:text-[18px] lm:leading-[27px]'>Subject</label>
                        <input 
                            name='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder='Enter contact subject'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[64px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[14px]'>
                        <label className='font-[500] text-[#334E69] font-grava text-[14px] lm:text-[18px] lm:leading-[27px]'>Message</label>
                        <textarea 
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Enter your message here'
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-full px-6 font-grava py-5 h-[190px] lm:h-[256px]'
                        ></textarea>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input 
                            name='subject'
                            type='checkbox'
                            onChange={() => {}}
                            className='border outline-none text-[#546B82] bg-[#F9FAFB] border-[#B0BAC5] rounded-lg w-5 h-5 '
                        />
                        <p className='font-[300] font-grava text-[14px] lm:text-[16px] text-[#002244] leading-[1.4em]'>
                            By ticking this box, I consent to Tatum Bank making use of my information to process my request 
                            in accordance with the <span className='font-[450] underline cursor-pointer font-grava' onClick={() => {navigate("/privacy-policy"), window.scrollTo(0, 0)}}>Privacy Policy.</span>
                        </p>
                    </div>
                    <button
                        className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-full lg:w-[188px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                        type='button'
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] lg:leading-[27px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Send message</p>
                        <BsArrowRight size={100}  className='mt-[2px] text-5xl transition-colors duration-500 font-[450] ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                    </button>
                </div>
                <div className='flex flex-col w-full lm:w-4/12'>
                  <img src={isMobile ? InfoSmall : InfoBig} alt='info' className='' />
                </div>
            </div>
        </section>

        <section data-aos="fade-up"   data-aos-duration="3000"  className='flex px-5 py-[112px] lm:pt-[56px] lm:pb-[105px] lm:mt-[49px] lm:px-[56px] flex-col items-center justify-center gap-[28px]'>
            <div className="flex flex-col gap-[44px] w-full items-center justify-center">
                <div className='flex flex-col gap-4 w-full items-center lm:w-[461px]'>
                    <p className='font-grava text-[28px] font-[500] lm:text-[48px] text-[#002244] leading-[35px] lm:leading-[60px]'>Our Office Locator</p>
                    <p className='font-[400] font-grava text-center text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[27px]'>Find our nearest Client Center and ATM locations for convenient and accessible banking services.</p>
                </div>
                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=9.033,7.500&output=embed&markers=9.033,7.500`}
                    className="w-full h-[304px] lm:h-[719px] rounded-lg"
                ></iframe>
            </div>

            <div className='w-full flex flex-col lm:flex-row gap-5'>
                <div className='bg-[#FFFAEB] flex flex-col w-full lm:w-6/12 rounded-tl-[24px] rounded-br-[24px] h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
                    <img src={Chat} alt='Chat' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
                    <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                        <p className='font-grava text-[#002244] text-[18px] lm:text-[24px] tracking-[0.01em] font-[450]'>General support:</p>
                        <p className='font-[300] font-grava text-[#334E69] text-[14px] tracking-[0.01em] leading-[130%] lm:text-[20px]'>info@tatumbank.com</p>
                    </div>
                </div>
                
                <div className='bg-[#FFFAEB] flex flex-col rounded-tl-[24px] rounded-br-[24px] w-full lm:w-6/12  h-[234px] lm:h-[338px] items-center justify-center gap-[32px]'>
                    <img src={Locator} alt='Locator' className='w-[48px] h-[48px] lm:w-[80px] lm:h-[80px]' />
                    <div className='flex flex-col items-center gap-3 w-[304px] lm:w-[481px]'>
                    <p className='font-grava text-[#002244] text-[18px] lm:text-[24px] tracking-[0.01em] font-[450]'>Head Office</p>
                    <p className='font-[300] font-grava text-[#334E69] tracking-[0.01em] text-center text-[14px] lm:leading-[130%] leading-5 lm:text-[20px]'>Plot 1088, Cadastral Zone AO1, <br /> Kaura Namoda Street, Area 3, Garki FCT Abuja</p>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Contact