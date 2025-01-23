import React, { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BiMinus } from 'react-icons/bi'

import Calculator from "../../assets/svg/calculator.svg"
import Estate from "../../assets/svg/real-estate.svg"
import Manager from "../../assets/svg/manager.svg"

import Bg from "../../assets/png/private-bg.jpeg"
import BgMobile from "../../assets/png/private-bg-mobile.jpeg"
import OfficeMan from "../../assets/png/office-man.jpeg"
import CardMan from "../../assets/png/card-man.jpeg"
import CallMan from "../../assets/png/call-man.jpeg"
import Brainstorm from "../../assets/png/brainstorm.jpeg"
import { useLocation, useNavigate } from 'react-router-dom'

const Private = () => {
  const [openTabOne, setOpenTabOne] = useState(false)
  const [openTabTwo, setOpenTabTwo] = useState(false)
  const [openTabThree, setOpenTabThree] = useState(false)

  const isTab = window.innerWidth < 1028;
  const isMobile = window.innerWidth < 768;

  const navigate = useNavigate()

  const privateRef = useRef(null);
  const faqRef = useRef(null);
  const { state } = useLocation();
  
  const handleTabOne = () => {
    setOpenTabOne(!openTabOne)
  }

  const handleTabTwo = () => {
    setOpenTabTwo(!openTabTwo)
  }

  const handleTabThree = () => {
    setOpenTabThree(!openTabThree)
  }

  useEffect(() => {
    if (state?.section === "private" && privateRef.current) {
      privateRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <div className='w-full' ref={privateRef}>
      <div 
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='h-[683px] lg:h-[723px] flex w-full flex-col bg-[#ccc] px-5 lg:px-[56px] py-[320px] relative'
      >
        <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
        <div className='flex flex-col md:w-[400px] lg:w-[622px] absolute bottom-0 lg:relative z-10 h-[237px] gap-6'>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <p className='font-grava text-[#fff] font-bold text-[32px] lg:text-[75px] leading-[40px] leading-[78px]'>Private Banking</p>
            <p className='font-grava text-[#fff] font-[350] text-sm leading-[20px] lg:text-[24px] lg:leading-[30px] '>
              We cater to your unique needs and turn your achievements into a long-lasting legacy.
            </p>
          </div>
          <button
            className='transition-all duration-300 ease-in-out outline-none group hover:bg-[#002244] bg-[#FFCC33] w-[174px] h-[44px] lg:w-[222px] lg:h-[58px] rounded-lg flex items-center justify-center p-4 gap-2'
          >
            <p className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] text-[#001F3E] font-medium text-sm lg:text-[18px] font-grava'>Open an account</p>
            <FaArrowRightLong className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] w-5 h-5 text-[#001F3E] mt-0.5' />
          </button>
        </div>
      </div>

      <div className='w-full px-5 lg:px-[56px] flex flex-col items-center  gap-5 py-[56px] lg:pt-[120px] lg:pb-[112px]'>
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-5'>

          <div 
            style={{
              backgroundImage: `url(${OfficeMan})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className=' w-full lg:w-[766px] relative h-[386px] lg:h-[420px] px-5 flex rounded-[24px]'
          >
            <div className="absolute inset-0 w-full rounded-[24px] h-auto bg-[#0005]" />
            <div className='flex flex-col gap-[32px] w-[310px] z-10 absolute bottom-5 lg:w-[620px]'>
              <div className='flex flex-col gap-4'>
                <p className='font-medium font-grava text-[#fff] text-[20px] lg:text-[28px]'>Wealth Management</p>
                <p className='text-[#fff] font-[350] font-grava text-base lg:text-[18px] '>
                  You might be saving for retirement, starting a new job, 
                  investing business profits, or planning for your family's future. 
                  Working closely with you, we ensure that your portfolio is in line with your long-term objectives, 
                  allowing you to achieve long-term success.
                </p>
              </div>
              <div 
                className='flex items-center cursor-pointer gap-2 group'
                onClick={() => navigate("/private/wealth-management", {
                  state: { section: "wealth" } }
                )}
              >
                <p className='font-medium font-grava text-sm lg:text-[18px] group-hover:mr-2  text-[#fff]'>Get Started</p>
                <FaArrowRightLong className='w-5 h-5 text-[#fff] mt-0.5 transition-all duration-300 group-hover:ml-2' />
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${Brainstorm})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className=' w-full  h-[371px] lg:w-[542px] lg:h-[420px] flex flex-col rounded-[24px] relative p-5'
          >
            <div className="absolute inset-0 w-full h-auto rounded-[24px] bg-[#0005]" />
            <div className='flex flex-col z-10 gap-[72px] lg:gap-[140px] absolute'>
              <img src={Manager} alt='Manager' className='w-[40px] h-[40px]' />

              <div className='flex flex-col gap-6 lg:gap-[32px] w-[310px] lg:w-[502px]'>
                <div className='flex flex-col gap-4'>
                  <p className='font-medium font-grava text-[#fff] text-[20px] lg:text-[28px]'>Investment Advisory</p>
                  <p className='text-[#fff] font-[350] font-grava text-base lg:text-[18px] '>
                    Accelerate your financial growth with actionable advice from seasoned professionals. 
                    Build, grow, and protect your wealth with strategies tailored to your goals.
                  </p>
                </div>
                <div 
                  className='flex items-center cursor-pointer gap-2 group'
                  onClick={() => navigate("/private/investement-advisory", {
                    state: { section: "invest" } }
                  )}
                >
                  <p className='font-medium font-grava text-sm lg:text-[18px] text-[#fff] group-hover:mr-2 '>Build Your Investment Plan Today</p>
                  <FaArrowRightLong className='w-5 h-5 text-[#fff] mt-1 transition-all duration-300 group-hover:ml-2' />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-5'>

          <div className='bg-[#FFCC33]  w-full  h-[371px] lg:w-[429px] lg:h-[530px] rounded-[24px] gap-[98px] lg:gap-[220px] p-5 flex flex-col gap-5'>
            <img src={Estate} alt='Estate'  className='w-[40px] h-[40px]' />
            <div className='flex flex-col gap-[32px] lg:w-[389px]'>
              <div className='flex flex-col gap-2 lg:gap-4'>
                <p className='font-medium font-grava text-[#002244] text-[20px] lg:text-[28px]'>Estate and Trust Planning</p>
                <p className='text-[#002244] font-[350] font-grava text-base lg:text-[18px] '>
                  Secure your legacy with expert estate planning. Make proactive decisions that ensure 
                  financial stability and security for years to come.
                </p>
              </div>
              <div 
                className='flex items-center cursor-pointer gap-2 group'
                onClick={() => navigate("/private/estate-and-trust-planning", {
                  state: { section: "estate" } }
                )}
              >
                <p className='font-medium font-grava text-sm lg:text-[18px] group-hover:mr-2 text-[#002244]'>Learn More</p>
                <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 transition-all duration-300 group-hover:ml-2' />
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${CardMan})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className=' w-full h-[419px] lg:w-[429px] lg:h-[530px] rounded-[24px] p-5 flex relative'
          >
            <div className="absolute inset-0 w-full h-auto rounded-[24px] bg-[#0005]" />
            <div className='flex flex-col gap-6 lg:gap-[32px] absolute bottom-5 z-10 w-[310px] lg:w-[90%]'> {/* lg:w-[389px] */}
              <div className='flex flex-col gap-2 lg:gap-4'>
                <p className='font-medium font-grava text-[#fff] text-[20px] lg:text-[28px]'>Personal Loans and Credit</p>
                <p className='text-[#fff] font-[350] font-grava text-base lg:text-[18px] '>
                  Get the credit you deserve and pursue your dreams with loans that work for you. 
                  From start to finish, we're here to help you succeed.
                </p>
              </div>
              <div 
                className='flex items-center cursor-pointer gap-2 group w-full'
                onClick={() => navigate("/private/personal-loans-and-credit", {
                  state: { section: "loan" } }
                )}
              >
                <p className='font-medium font-grava text-sm lg:text-[18px] group-hover:mr-2 text-[#fff]'>Explore Flexible Loan Options</p>
                <FaArrowRightLong className='w-5 h-5 text-[#fff] mt-1 transition-all duration-300 group-hover:ml-2' />
              </div>
            </div>
          </div>

          <div className='bg-[#002244] w-full lg:w-[429px] h-[371px] lg:h-[530px] rounded-[24px] gap-[62px] lg:gap-[190px] p-5 flex flex-col gap-5'>
            <img src={Calculator} alt='Calculator'  className='w-[40px] h-[40px]' />
            <div className='flex flex-col gap-6 lg:gap-[32px] w-[310px] lg:w-[389px]'>
              <div className='flex flex-col gap-2 lg:gap-4'>
                <p className='font-medium font-grava text-[#fff] text-[20px] lg:text-[28px]'>Custom Financial Solutions</p>
                <p className='text-[#fff] font-[350] font-grava text-base lg:text-[18px] '>
                  Discover, design, and improve your financial outlook with unique banking services 
                  tailored to your needs. Let us assist you in laying a solid foundation for maximizing 
                  your resources and, ultimately, achieving more.
                </p>
              </div>
              <div 
                className='flex items-center cursor-pointer gap-2 group'
                onClick={() => navigate("/private/custom-financial-solutions", {
                  state: { section: "custom" } }
                )}
              >
                <p className='font-medium font-grava text-sm lg:text-[18px] group-hover:mr-2 text-[#fff]'>Start Now</p>
                <FaArrowRightLong className='w-5 h-5 text-[#fff] mt-1 transition-all duration-300 group-hover:ml-2' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='flex flex-col items-center justify-center mx-auto gap-4 lg:gap-6 w-[90%] lg:w-[596px]'>
        <div className='bg-[#FFEFC0] rounded-[48px] w-[147px] h-[36px] py-4 px-[18px] flex items-center justify-center'>
          <p className='text-[#002244] font-grava text-sm font-medium'>Have Questions?</p>
        </div>
        <div className='w-[90%] lg:w-[490px] text-center'>
          <p className='text-[18px] lg:text-[32px] font-grava text-[#002244] font-medium '>
            We are here to listen, understand, and guide you toward the right solutions.
          </p>
        </div>
        <button
          className='transition-all duration-300 ease-in-out group hover:bg-[#002244] bg-[#FFCC33] w-[220px] lg:w-[277px] h-[44px] lg:h-[58px] rounded-tl-lg rounded-br-lg flex items-center justify-center p-4 gap-2'
        >
          <p className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] text-[#001F3E] font-medium text-sm lg:text-[18px] font-grava'>Schedule a Consultation</p>
          <FaArrowRightLong className='transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] w-5 h-5 text-[#001F3E] mt-[2px]' />
        </button>
      </div>

      <div className='mt-[56px] w-full relative'>
        <img src={CallMan} alt='CallMan' className='h-[531px] lg:h-[739px] object-cover w-full' />
        <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
      </div>

      <div ref={faqRef} className='bg-[#FFFAEB] flex w-full px-5 lg:px-0 py-[56px] lg:py-[112px] items-center justify-center'>
        <div className='w-full lg:w-[878px] mx-auto flex flex-col items-center'>
          <p className='text-[24px] lg:text-[40px] font-grava text-[#002244] font-medium'>Frequently Asked Questions</p>

          <div className='mt-[32px] lg:mt-[56px] flex flex-col gap-6 w-full'>

            <div onClick={handleTabOne} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-300 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium text-sm lg:text-[20px]'>How do I open an account with Tatum</p>
                {openTabOne ? <BiMinus className='text-[#001F3E] w-6 h-6'/> : <BsPlus className='text-[#001F3E] w-6 h-6' />}
              </div>
              {}
            </div>

            <div onClick={handleTabTwo} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-300 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium text-sm lg:text-[20px]'>Do you offer loans for small businesses?</p>
                {openTabTwo ? <BiMinus className='text-[#001F3E] w-6 h-6'/> : <BsPlus className='text-[#001F3E] w-6 h-6' />}
              </div>
              {}
            </div>

            <div onClick={handleTabThree} className='flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-transform duration-300 ease-in-out transform'>
              <div className='flex items-center justify-between'>
                <p className='font-grava text-[#475467] font-medium text-sm lg:text-[20px]'>What are the criterias for getting a loan</p>
                {openTabThree ? <BiMinus className='text-[#001F3E] w-6 h-6'/> : <BsPlus className='text-[#001F3E] w-6 h-6' />}
              </div>
              {}
            </div>

          </div>

          <div className='flex items-center mt-6 lg:mt-[32px] justify-center'>
            <p className='font-grava text-xs lg:text-[18px] text-[#334E69]'>Have more questions? Visit our <span className='text-sm lg:text-[20px] underline text-[#002244]'>Help Center</span></p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Private