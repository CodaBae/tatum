import React, { useEffect, useRef } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import EstateBg from '../../../assets/png/estate-bg.jpeg'
import Business from '../../../assets/png/business_img.png'
import Guardian from '../../../assets/png/guardian.png'
import Health from '../../../assets/png/health.png'
import Trust from '../../../assets/png/trust.png'
import Will from '../../../assets/png/will.png'

import Forward from "../../../assets/svg/forward.svg"


const Estate = () => {

  const estateRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
      if (state?.section === "estate" && estateRef.current) {
        estateRef.current.scrollIntoView({ behavior: "smooth" });
      }
  }, [state]);

  return (
    <div ref={estateRef} className="w-full mb-[56px] lg:mb-[120px]">
      <div 
        style={{
            backgroundImage: `url(${EstateBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover" 
        }}
        className="w-full h-[434px] md:h-[693px] flex relative items-center justify-center"
      > 
        <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
              
        <p className='font-grava font-bold z-10 text-[#fff] text-center text-[32px] lg:text-[75px]'>Estate and Trust Planning</p>
              
        <div className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[125px] cursor-pointer group' onClick={() => navigate(-1)}>
            <MdKeyboardBackspace className='w-5 h-5 mt-[2px] text-[#fff] group-hover:mr-2' />
            <p className='font-grava text-[#fff] text-[20px] font-medium whitespace-nowrap transition-all duration-300 group-hover:ml-2'>Go back</p>
        </div>

        <div 
            className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
        >
            <p className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
                onClick={() => navigate("/", {
                    state: { section: "home" },
                })}
            >
                Home
            </p>
            <img src={Forward} alt="forward" className=""/>
            <p className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
                onClick={() => navigate("/private", {
                    state: { section: "private" },
                })}
            >
                Private
            </p>
            <img src={Forward} alt="forward" className=""/>
            <p className="font-[350] font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px]">
              Estate <span className='hidden md:inline-block'>and Trust</span> Planning
            </p>
        </div>

      </div>

      <div className='flex items-center justify-center w-full pt-[82px] pb-[88px] lg:py-[144px]'>
        <div className='flex flex-col items-center gap-[40px] w-[330px] lg:w-[530px] mx-auto'>
          <div className='flex flex-col items-center gap-4'>
            <p className='font-grava text-center text-[#002244] font-medium text-[24px] leading-[30px] lg:text-[48px] lg:leading-[60px] '>
              Estate and Trust Planning
            </p>
            <p className='font-[350] text-center lg:w-[444px] text-[#334E69] font-grava text-[20px]  '>
              Plan today to safeguard your family’s tomorrow with customized estate 
              and trust strategies 
              that honor your wishes.
            </p>
          </div>
          <button
            className='transition-all duration-300 ease-in-out bg-[#FFCC33] w-full md:w-[318px] h-[55px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
            type='button'
          >
            <p className='transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]'>Schedule a consultation now</p>
            <FaArrowRightLong className='mt-[2px] transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
          </button>
        </div>

      </div>

      <div 
        className='w-full pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] grid grid-cols-1 gap-[100px]'
        // style={{
        //      gridTemplateRows: 'repeat(6, 1fr)',
        // }}
      >
        <div 
            className='flex sticky top-[calc(8%+var(0rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFF5EB] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'
        >
            <div className='w-full md:w-7/12 flex flex-col gap-[50px] lg:gap-[88px]'>
                <div className='flex flex-col gap-[26px]'>
                    <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                      Will Preparation
                    </p>
                    <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                      Ensure your assets are distributed according to your wishes. With Tatum Bank, 
                      you can minimize disputes, avoid unnecessary legal challenges, and provide peace 
                      of mind for your loved ones. Protect your legacy and your family’s future
                    </p>
                </div>
                <div className='flex md:hidden'>
                    <img src={Will} alt='Will' className='w-[198px] mx-auto' />
                </div>
                <div className='flex items-center gap-2 cursor-pointer w-full group'>
                    <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                      Draft your will with us
                    </p>
                    <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                </div>
            </div>
            <div className='w-5/12 hidden md:flex justify-end'>
                <img src={Will} alt='Will' className='md:w-[198px] m lm:w-[290px] lm:h-[300px]' />
            </div>
        </div>

        <div className='flex sticky top-[calc(8%+var(2.25rem))] flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#EBFBFF] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
            <div className='w-full md:w-7/12 flex flex-col gap-[90px] lg:gap-[118px]'>
                <div className='flex flex-col gap-[26px]'>
                    <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                      Trust Creation and Administration
                    </p>
                    <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                      Protect your assets and achieve your financial goals with expertly designed trusts. 
                      Whether you aim to reduce tax liabilities, shield your wealth, or provide for specific 
                      beneficiaries, our professional administration ensures your trust is managed efficiently, 
                      complies with legal standards.
                    </p>
                </div>
                <div className='flex md:hidden'>
                    <img src={Trust} alt='Trust' className='w-[198px] mx-auto' />
                </div>
                <div className='flex items-center gap-2 w-full cursor-pointer group'>
                    <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                      Establish your trust—contact us today
                    </p>
                    <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-[1px] group-hover:ml-2' />
                </div>
            </div>
            <div className='w-5/12 hidden md:flex justify-end'>
                <img src={Trust} alt='Trust' className='md:w-[198px] lm:w-[316px] lm:h-[285px]' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FEF3F2] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
            <div className='w-full md:w-7/12 flex flex-col gap-[90px] lg:gap-[118px]'>
                <div className='flex flex-col gap-[26px]'>
                    <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                      Health and Financial <br /> Powers of Attorney
                    </p>
                    <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                      Life's unexpected events can leave you vulnerable. Health and Financial Powers of Attorney 
                      empower someone you trust to make important decisions for you if you can't. 
                      Protect yourself, your assets, and your loved ones.
                    </p>
                </div>
                <div className='flex md:hidden'>
                    <img src={Health} alt='Health' className='w-[198px] mx-auto' />
                </div>
                <div className='flex items-center gap-2 w-full cursor-pointer group'>
                    <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                      Get started now
                    </p>
                    <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
                </div>
            </div>
            <div className='w-5/12 hidden md:flex justify-end'>
                <img src={Health} alt='Health' className='md:w-[198px] lm:w-[320px] lm:h-[320px]' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#FFFAEB] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
          <div className='w-full md:w-7/12 flex flex-col gap-[90px] lg:gap-[118px]'>
              <div className='flex flex-col gap-[26px]'>
                  <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                    Guardianship Designations
                  </p>
                  <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                    Protect your children's well-being with Guardianship Designations. 
                    Choose the people youGuardianship Designations trust most to care for them if you are unable. 
                    This ensures their emotional, physical, and financial needs are met, providing you and your 
                    family with much-needed peace of mind.
                  </p>
              </div>
              <div className='flex md:hidden'>
                  <img src={Guardian} alt='Guardian' className='w-[198px] mx-auto' />
              </div>
              <div className='flex items-center gap-2 w-full group cursor-pointer'>
                  <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                    Create a guardianship plan now
                  </p>
                  <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
              </div>
          </div>
          <div className='w-5/12 hidden md:flex justify-end'>
              <img src={Guardian} alt='Guardian' className='md:w-[198px] lm:w-[364px] lm:h-[264px]' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between px-5 py-[32px] lg:py-[48px] lg:pl-[48px] lg:pr-[120px] items-center bg-[#ECFDF3] w-full rounded-[24px] h-[698px] md:h-[410px] lg:h-[510px]'>
          <div className='w-full md:w-7/12 flex flex-col gap-[90px] lg:gap-[118px]'>
              <div className='flex flex-col gap-[26px]'>
                  <p className='text-[#002244] font-medium font-grava text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]'>
                    Business Succession <br /> Planning
                  </p>
                  <p className='text-[#546B82] font-[350] font-grava text-base md:text-[20px] leading-[24px] lg:leading-[30px] '>
                    Make sure your family business transitions smoothly by creating a customized succession plan. 
                    We make it simple for you to handle leadership changes, ownership transfers, and tax planning. 
                    Ensure the success and future of your company.
                  </p>
              </div>
              <div className='flex md:hidden'>
                  <img src={Business} alt='Business' className='w-[198px] mx-auto' />
              </div>
              <div className='flex items-center gap-2 w-full group cursor-pointer'>
                <p className='font-grava text-[#002244] font-[350] tracking-wide text-sm lg:text-[20px] group-hover:mr-2'>
                  Schedule a consultation today
                </p>
                <FaArrowRightLong className='w-5 h-5 text-[#002244] mt-1 group-hover:ml-2' />
              </div>
          </div>
          <div className='w-5/12 hidden md:flex justify-end'>
              <img src={Business} alt='Business' className='md:w-[198px] lm:w-[332px] lm:h-[296px]' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Estate