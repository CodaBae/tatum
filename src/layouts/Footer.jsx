import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Twitter from "../assets/svg/twitter.svg";
import Logo from "../assets/svg/logo.svg";

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
          backgroundPosition:"center"
        }}
        className="flex w-full h-[270px] lg:h-[374px] flex-col items-center justify-center">
        <div className="lg:w-[664px] lg:h-[232px] flex flex-col items-center gap-[22px]">
        <p className="font-grava text-[27px] lg:text-[45px] font-semibold text-center leading-[35px] lg:leading-[60px] text-[#002244]">
            Stay smiling. <br /> Open an account today! 
          </p>
          <button
            className="bg-[#002244] w-[220px] h-[60px] p-3 group hover:bg-[#FFCC33]  hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg"
            type="button"
            onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1739456120/Tatum_Bank_Ind_acct_opening_form_1_a3yhbu.pdf", "_blank")}

          >
            <p className="font-grava text-[#FFCC33] text-base group-hover:text-[#002244]">
                Download form
            </p>
          </button>
        </div>
      </div>
      <div className="bg-[#fff] w-full px-5 lg:pl-[55px] lg:pr-[67px] pt-[61px] lg:pb-[10px] flex flex-col gap-[48px] lg:items-center">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[94px]">
          <div className="flex flex-col items-start gap-4 lg:w-[180px]">
            <div className="flex flex-col gap-3">
              <p className="font-grava text-[#002244] uppercase tracking-wide font-bo text-base">
                Contact us
              </p>
              <a 
                href="mailto:info@tatumbank.com"
                className="font-grava text-[#002244] block font-[300] text-sm "
              >
                info@tatumbank.com
              </a>
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
            <div className="flex flex-col gap-4 w-[85px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-bo">
                COMPANY
              </p>
              <div className="flex flex-col gap-4">
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/about", {
                    state: { section: "about" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  About us
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/about/careers", {
                    state: { section: "careers" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Careers
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Blogs
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/contact", {
                    state: { section: "contact" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Contact
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[126px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-bo">
                SERVICES
              </p>
              <div className="flex flex-col gap-4">
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/personal", {
                    state: { section: "personal" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Personal Banking
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/business", {
                    state: { section: "business" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Business Banking
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/corporate", {
                    state: { section: "corporate" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Corporate Banking
                </p>
                <p 
                  className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => navigate("/private", {
                    state: { section: "private" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Private Banking
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => {navigate("/institutional", {
                    state: { section: "institution" },
                  }); window.scrollTo(0, 0)}}
                >
                  Institutional Banking
                </p>
                <p className="font-grava text-[#002244] whitespace-nowrap text-sm cursor-pointer font-300"
                  onClick={() => {navigate("/digital", {
                    state: { section: "digital" },
                  }); window.scrollTo(0, 0)}}
                >
                  Digital Banking
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[156px]">
              <p className="font-grava text-base text-[#002244] tracking-wide font-bo">
                LEGAL
              </p>
              <div className="flex flex-col gap-4">
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/privacy-policy", {
                    state: { section: "privacy" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Privacy policy
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/terms", {
                    state: { section: "terms" },
                  },              window.scrollTo(0, 0)
                  )}
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
            <div className="flex flex-col gap-4 w-[97px]">
              <p className="font-grava text-base tracking-wide text-[#002244] font-bo">
                SUPPORT
              </p>
              <div className="flex flex-col gap-4">
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}} 
                >
                  FAQ
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Video Tutorials
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Media
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}} 
                >
                  Help Center
                </p>
                <p 
                  className="font-grava text-[#002244] text-sm whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/sitemap", {
                    state: { section: "site" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Sitemap
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[196px]">
              <p className="font-grava text-base tracking-wide text-[#002244] font-bo">
                ADDRESS
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-grava text-[#002244] text-sm cursor-pointer font-300">
                  Plot 1088, Cadastral Zone AO1, Area 3,Garki FCT  <br /> Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] bg-[#d7dce2] w-full"></div>
        <div className="flex flex-col lm:flex-row items-center w-full justify-between gap-[21px] lastF">
          <img
            src={Logo}
            alt="Logo"
            className="w-[109px] h-[44px] cursor-pointer"
            onClick={() => navigate("/", {
              state: { section: "home" },
            },              window.scrollTo(0, 0)
            )}
          />
       
          <div className="flex flex-col gap-1 x">
            <p className="text-xs text-[#002244] flex lg:justify-end font-grava font-300" >
              &copy; {new Date().getFullYear()}. Tatum Bank Ltd. RC RC7745719
            </p>
            <p className="text-xs text-[#002244] font-grava font-300">
              Licensed by the Central Bank of Nigeria. All deposits are insured by NDIC. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#ffcc33] h-[10px] w-full"></div>
    </>
  );
};

export default Footer;
