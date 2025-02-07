import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Twitter from "../assets/svg/twitter.svg";

import Apple from "../assets/png/apple-store.png";
import Google from "../assets/png/google-play-store.png";
import World from "../assets/png/world.png";
import WorldSmall from "../assets/png/world_small.png";

const Footer = () => {

  const navigate = useNavigate()

  const isMobile = window.innerWidth < 768

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${isMobile ? WorldSmall : World})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex w-full h-[270px] lg:h-[374px] flex-col items-center justify-center">
        <div className="lg:w-[664px] lg:h-[232px] flex flex-col items-center gap-[32px]">
          <p className="font-grava text-[28px] lg:text-[56px] font-medium text-center leading-[35px] lg:leading-[70px] text-[#002244]">
            Stay smiling. <br /> Open an account today! 
          </p>
          <button
            className="bg-[#002244] w-[220px] h-[60px] p-3 group hover:bg-[#FFCC33]  hover:border hover:border-[#002244] rounded-tl-lg rounded-br-lg"
            type="button">
            <p className="font-grava text-[#FFCC33] group-hover:text-[#002244]">
              Open an Account Today
            </p>
          </button>
        </div>
      </div>
      <div className="bg-[#fff] w-full px-5 lg:pl-[55px] lg:pr-[67px] pt-[61px] lg:pb-[45px] flex flex-col gap-[48px] lg:items-center">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[94px]">
          <div className="flex flex-col items-start gap-6 lg:w-[180px]">
            <div className="flex flex-col gap-3">
              <p className="font-grava text-[#002244] uppercase tracking-wide font-medium text-base">
                Contact us
              </p>
              <p className="font-grava text-[#002244] font-[350] text-sm ">
                info@tatumbank.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={Instagram} alt="Instagram" className="cursor-pointer" />
              <img src={Twitter} alt="Twitter" className="cursor-pointer" />
              <img src={LinkedIn} alt="LinkedIn" className="cursor-pointer" />
              <img src={Facebook} alt="Facebook" className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-2">
              <img src={Google} alt="Google" className="w-[140px] cursor-pointer" />
              <img src={Apple} alt="Apple" className="w-[140px] cursor-pointer" />
            </div>
          </div>
          <div className="lg:w-[1044px] grid grid-cols-2 lg:flex items-start gap-[40px] lg:gap-[96px]">
            <div className="flex flex-col gap-6 w-[85px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-medium">
                COMPANY
              </p>
              <div className="flex flex-col gap-6">
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => navigate("/about", {
                    state: { section: "about" },
                  }) }
                >
                  About us
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => navigate("/about/careers", {
                    state: { section: "careers" },
                  })}
                >
                  Careers
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer">
                  Blogs
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer">
                  Contact
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-[126px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-medium">
                SERVICES
              </p>
              <div className="flex flex-col gap-6">
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => navigate("/personal", {
                    state: { section: "personal" },
                  })}
                >
                  Personal Banking
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => navigate("/business", {
                    state: { section: "business" },
                  })}
                >
                  Business Banking
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer">
                  Corporate Banking
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => navigate("/private", {
                    state: { section: "private" },
                  })}
                >
                  Private Banking
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => {navigate("/institutional", {
                    state: { section: "institution" },
                  }); window.scrollTo(0, 0)}}
                >
                  Institutional Banking
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => {navigate("/digital", {
                    state: { section: "digital" },
                  }); window.scrollTo(0, 0)}}
                >
                  Digital Banking
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-[156px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-medium">
                LEGAL
              </p>
              <div className="flex flex-col gap-6">
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/privacy-policy", {
                    state: { section: "privacy" },
                  })}
                >
                  Privacy policy
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/terms", {
                    state: { section: "terms" },
                  })}
                >
                  Terms of service
                </p>
                <p className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer">
                  Whistle blower
                </p>
                <p className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer">
                  Anti-Money Laundering
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-[97px]">
              <p className="font-grava text-base tracking-wide text-[#002244] font-medium">
                SUPPORT
              </p>
              <div className="flex flex-col gap-6">
                <p className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer">
                  FAQ
                </p>
                <p className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer">
                  Video Tutorials
                </p>
                <p className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer">
                  Help Center
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/sitemap", {
                    state: { section: "site" },
                  })}
                >
                  Sitemap
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-[196px]">
              <p className="font-grava text-base tracking-wide text-[#002244] font-medium">
                ADDRESS
              </p>
              <div className="flex flex-col gap-6">
                <p className="font-grava text-[#002244] text-sm cursor-pointer">
                  Plot 1088, Cadastral Zone AO1, Area 3, <br /> Garki FCT Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#546B82] w-full"></div>
        <div className="flex flex-col gap-[51px]">
          <div className="flex flex-col gap-[17px]">
            <p className="font-grava font-[350] text-[#002244] text-xs">
              If you would like to find out more about which Tatum entity you
              receive services from, please reach out to us via the contact
              options provided on our website or through our customer support
              channels. Nigerian banking services are offered by Tatum Bank Ltd
              (RC7745719) with a registered address at Plot 1088, Cadastral Zone
              AO1, Area 3, Garki FCT Abuja, Nigeria. Tatum Bank Ltd. is licensed
              by the Central Bank of Nigeria (CBN). Deposits are insured by the
              Nigerian Deposit Insurance Corporation (NDIC).
            </p>
            <p className="text-xs text-[#002244] font-grava">
              For assistance, please contact our Customer Support Team or refer
              to our <span className="underline cursor-pointer" onClick={() => {navigate("/privacy-policy"); window.scrollTo(0, 0)}}>Privacy Policy</span> and <span className="underline cursor-pointer" onClick={() => {navigate("/terms"); window.scrollTo(0, 0)}}>Terms of Service.</span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-10">
            <p className="text-xs text-[#002244] font-grava">
              &copy; {new Date().getFullYear()}. Tatum Bank Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFCC33] h-[14px] w-full"></div>
    </>
  );
};

export default Footer;
