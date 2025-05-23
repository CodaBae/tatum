import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

// SVGS
import NDIC from "../assets/svg/ndic.svg";
import CBN from "../assets/svg/cbn_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const HeroSection = ({
  bgMobile,
  bgDesktop,
  title,
  content,
  link,
  sectionName,
  mainImgMobile,
  mainImgDesktop,
  btnText,
  styleP,
  left
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="h-full w-full overflow-hidden outline-none">
      <div
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[100vh] lg:h-[100vh] pt-[64px] px-5 lg:pl-[60px] lg:pr-[0px] relative w-full flex flex-col lg:flex-row items-center gap-0"
      >
        <div className="w-full lg:w-[15%] flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
          <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
            <p className="animate__animated animate__fadeInUp lg:w-[831px] font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-[500] leading-[40px] lg:leading-[78px]">
              <p dangerouslySetInnerHTML={{ __html: title }} />
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-08s md:w-[265px] lg:w-[731px]  font-[400] text-[14px] font-grava lg:text-[25px] text-left tracking-[0.01em] text-[#002244] leading-[20px] lg:leading-[155%]">
              {/* {content} */}
              <p dangerouslySetInnerHTML={{ __html: content }} />

            </p>
            <div className="flex items-center mt-[10px] mb-[-5%] lg:mt-[12px] gap-3 animate__animated animate__fadeInUp animate__delay-10s">
              {btnText && (
                <button
                  className={`${location.pathname === "/about/careers" ? "bg-[#EDEDED]" : "bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244]"} transition-all duration-500 ease-in-out  lm:w-[194.63px] rounded-tl-lg rounded-br-lg h-[57px] gap-2 flex items-center justify-center p-5`}
                  type="button"
                  onClick={() => {
                    navigate(link, {
                      state: { section: `${sectionName}` },
                    });
                    window.scrollTo(0, 0);
                  }}
                >
                  <p className={`${location.pathname === "/about/careers" ? "text-[#B0B0B0]" : " text-[#FFCC33] group-hover:text-[#002244]"} transition-colors duration-500 ease-in-out whitespace-nowrap font-[500] lg:text-[18px] font-grava`}>
                    {btnText}
                  </p>
                  <BsArrowRight
                    size={100}
                    className={`${location.pathname === "/about/careers" ? "text-[#B0B0B0]" : "text-[#FFCC33] group-hover:text-[#002244]"} mt-[2px] transition-colors duration-500 ease-in-out w-5 h-5 `}
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-[85%] flex justify-center items-center"
          style={
            left
              ? {
                  height: "92vh",
                  overflow: "hidden",
                  paddingTop: "15%",
                  paddingLeft: "38%",
                }
              : {
                  height: "92vh",
                  overflow: "hidden",
                  paddingTop: `${location.pathname === "/personal/account/savings" || location.pathname === "/personal/account/current" ? "7%" : "11%"}`,
                }
          }
        >
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="false"
            src={mainImgDesktop}
            alt="MainImg"
            style={styleP}
            loading="lazy"
            className="w-full max-w-[400px] lg:max-w-full object-cover"
          />
        </div>

        {/* License and Insurance Info */}
        <div className="absolute bottom-[13.5%] left-5 lg:left-[60px] text-[#002244] font-grava text-sm md:text-base flex items-center gap-2">
          We are licensed by the Central Bank of Nigeria
          <img src={CBN} alt="CBN" className="w-[21px] h-[28px]" />
          &nbsp;|&nbsp; All deposits are insured by
          <img src={NDIC} alt="NDIC" className="w-[50px] h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
