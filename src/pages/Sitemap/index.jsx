import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Sitemap = () => {

    const navigate = useNavigate()

    const  sitemapRef = useRef(null);
    const { state } = useLocation();

    // useEffect(() => {
    //     if (state?.section === "site" && sitemapRef.current) {
    //         sitemapRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state]);

  return (
    <div
        className='w-full mb-[56px] lg:mb-[60px] overflow-hidden' 
        data-aos-duration="3000" 
        ref={sitemapRef}
    >
        <div className='bg-[#FFCC33] w-full h-[184px] lg:h-[314px]  flex flex-col items-center justify-center'>
          <p className='font-bold text-[#002244] font-grava text-[34px] mt-[6%] lg:text-[75px]'>Sitemap</p>
        </div>

        <div className='w-full py-[56px] lg:py-[120px] px-5 lg:px-[56px] flex flex-col gap-[40px] md:gap-[120px]'>

          <div className="flex flex-col md:flex-row items-start gap-[40px] lm:gap-[286px] ">

            <div className="flex flex-col gap-[32px] w-[144px]">
              <p className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Company</p>
              <div className='flex flex-col gap-[30px]'>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/about", {
                    state: { section: "about" },
                  }) }
                >
                  About us
                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/about/careers", {
                    state: { section: "careers" },
                  }) }
                >
                  Careers
                </p>
                <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}} className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'>Blogs</p>
                <p onClick={() => {navigate("/contact"); window.scrollTo(0,0); handleClose()}} className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'>Contact</p>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] w-[183px]">
              <p className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Services</p>
              <div className='flex flex-col gap-[30px]'>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/personal", {
                    state: { section: "personal" },
                  }) }
                >
                  Personal Banking
                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/business", {
                    state: { section: "business" },
                  }) }
                >
                    Business Banking
                  </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/corporate", {
                    state: { section: "corporate" },
                  }) }
                >
                  Corporate Banking
                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/private", {
                    state: { section: "private" },
                  })}
                >
                  Private Banking
                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/digital", {
                    state: { section: "digital" },
                  })}
                >
                  Digital Banking
                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] whitespace-nowrap underline font-grava cursor-pointer'
                  onClick={() => navigate("/institutional", {
                    state: { section: "institution" },
                  })}
                >
                  Institutional Banking
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] w-[228px]">
              <p className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Legal</p>
              <div className='flex flex-col gap-[30px]'>
                <p 
                  className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/privacy-policy", {
                    state: { section: "privacy" },
                  })}
                >
                  Privacy policy
                </p>
                <p 
                  className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => navigate("/terms", {
                    state: { section: "terms" },
                  })}
                >
                  Terms of service
                </p>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava'>Whistle blower</p>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava'>Anti-money Laundering</p>
              </div>
            </div>

            {/* <div className="flex flex-col gap-[32px] w-[228px]">
              <p className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Account</p>
              <div className='flex flex-col gap-[30px]'>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => {navigate("/Personal/account",);  window.scrollTo(0, 0) }}
                >
                 Personal Account


                </p>
                <p 
                  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'
                  onClick={() => {navigate("/Business/account",);  window.scrollTo(0, 0) }}
                >
                   Business Account
                </p>
                <p  className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'  onClick={() => {navigate("/Corporate/account",);  window.scrollTo(0, 0) }}>Corporate Account</p>
                <p className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'  onClick={() => {navigate("/Private/account",);  window.scrollTo(0, 0) }}>Private Account</p>
                <p className='text-base lg:text-[20px]  font-[300] text-[#002244] underline font-grava cursor-pointer'  onClick={() => {navigate("/Institutional/account",);  window.scrollTo(0, 0) }}>Institutional Account</p>

              </div>
            </div> */}

          </div>

          <div className="flex flex-col md:flex-row items-start gap-[40px] lm:gap-[213px]">

            <div className="flex flex-col gap-[32px] w-[217px]">
              <p className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Resources</p>
              <div className='flex flex-col gap-[30px]'>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer' onClick={() => {navigate("/resources",);  window.scrollTo(0, 0) }}>Blogs</p>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer' onClick={() => {navigate("/resources",);  window.scrollTo(0, 0) }}>Press Release</p>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer' onClick={() => {navigate("/resources",);  window.scrollTo(0, 0) }}>Media Gallery</p>
                <p className='text-base lg:text-[20px] font-[300] text-[#002244] underline font-grava cursor-pointer' onClick={() => {navigate("/resources",);  window.scrollTo(0, 0) }}>Branch & ATM Locator</p>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] w-[167px]">
              <p onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='font-grava font-[450] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] text-[#002244]'>Support</p>
              <div className='flex flex-col gap-[30px]'>
                <p onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='text-base lg:text-[20px] text-[#002244] font-[300] underline font-grava cursor-pointer'>FAQ</p>
                <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}}  className='text-base lg:text-[20px] text-[#002244] font-[300] underline font-grava cursor-pointer'>Video Tutorials</p>
                <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}}  className='text-base lg:text-[20px] text-[#002244] font-[300] underline font-grava cursor-pointer'>Media</p>
                <p onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className='text-base lg:text-[20px] text-[#002244] font-[300] underline font-grava cursor-pointer'>Help Center</p>
              </div>
            </div>

        

          

          </div>

          

        </div>
    </div>
  )
}

export default Sitemap