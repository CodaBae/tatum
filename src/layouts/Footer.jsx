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
        className="flex w-full h-[270px] lg:h-[342px] flex-col items-center justify-center">
        <div className="lg:w-[664px]  flex flex-col items-center gap-[32px]">
          <p className="font-grava text-[27px] lg:text-[47px] font-[500] tracking-[-0.02em] text-center leading-[35px] lg:leading-[120%] text-[#002244]">
            Stay smiling. <br /> Bank with Tatum! 
          </p>
          <button
            className="bg-[#EDEDED] w-auto cursor-default h-[60px] p-3 rounded-tl-lg rounded-br-lg" // hover:bg-[#FFCC33] group hover:border-[#002244]  hover:border-[1.5px]
            type="button"
            // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1740499249/TBL_Individual_Account_Opening_Form_wrhhls.ai", "_blank")}

          >

            <p className="font-grava font-[500] text-[#B0B0B0]  lg:text-[18px] "> {/*  text-[#FFCC33] group-hover:text-[#002244]*/}

                Account opening available soon
            </p>
          </button>
        </div>
      </div>
      <div className="bg-[#fff] w-full px-5 lg:pl-[56px] lg:pr-[56px] pt-[61px] lg:pb-6 flex flex-col gap-[30px] lg:items-center">
        <div className="flex flex-col lg:justify-center lg:flex-row gap-[40px] lg:gap-[96px]"> {/* lg:gap-[54px]  */}
          <div className="flex flex-col items-start gap-4 lg:w-[180px]">
            <div className="flex flex-col gap-3">

              <p className="font-grava text-[#002244] uppercase tracking-[0.05em] leading-6 font-[500] text-base">

                Contact us
              </p>
              <a 
                href="mailto:info@tatumbank.com"
                className="font-grava text-[#002244] block font-[400] text-[14px] leading-5 "
              >
                info@tatumbank.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src={Instagram} alt="Instagram" className="cursor-pointer" />
              <img src={Twitter} alt="Twitter" className="cursor-pointer" />
              <img src={LinkedIn} alt="LinkedIn" className="cursor-pointer" />
              {/* <img src={Facebook} alt="Facebook" className="cursor-pointer" /> */}
            </div>
            <div className="flex flex-col gap-2">
              <img src={Google} alt="Google" className="w-[140px] cursor-pointer opacity-30" />
              <img src={Apple} alt="Apple" className="w-[140px] cursor-pointer opacity-30" />
            </div>
          </div>

          <div className="lg:w-[1044px] grid grid-cols-2  lg:grid-cols-5 items-start gap-[40px] lg:gap-[94px]"> {/* lg:gap-[96px]  */}
            <div className="flex flex-col gap-6 lg:w-[114.53px]"> {/* lg:w-[85px] w-[114.53px]*/}
              <p className="font-grava text-base text-[#002244] tracking-[0.05em] leading-6 font-[500]">

                COMPANY
              </p>
              <div className="flex flex-col gap-[13px]">
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/about", {
                    state: { section: "about" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  About us
                </p>
                <p className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/about/careers", {
                    state: { section: "careers" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Careers
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Blogs
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/contact", {
                    state: { section: "contact" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Contact
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/investors", {
                    state: { section: "investors" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Investor Relations
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-[135.34px]"> {/* lg:w-[126px] w-[135.34px]*/}
              <p className="font-grava text-base text-[#002244] tracking-[0.05em] leading-6 font-[500]">

                SERVICES
              </p>
              <div className="flex flex-col gap-[13px]">
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/personal", {
                    state: { section: "personal" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Personal Banking
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/business", {
                    state: { section: "business" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Business Banking
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/corporate", {
                    state: { section: "corporate" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Corporate Banking
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => navigate("/private", {
                    state: { section: "private" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Private Banking
                </p>
                <p className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => {navigate("/institutional", {
                    state: { section: "institution" },
                  }); window.scrollTo(0, 0)}}
                >
                  Institutional Banking
                </p>
                <p className="font-grava text-[#002244] underline hover:no-underline whitespace-nowrap text-[14px] cursor-pointer font-[400]"
                  onClick={() => {navigate("/digital", {
                    state: { section: "digital" },
                  }); window.scrollTo(0, 0)}}
                >
                  Digital Banking
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-[155.05px]"> {/* lg:w-[156px] w-[155.05px]*/}
              <p className="font-grava text-base text-[#002244] tracking-[0.05em] leading-6 font-[500]">

                LEGAL
              </p>
              <div className="flex flex-col gap-[13px]">
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/privacy-policy", {
                    state: { section: "privacy" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Privacy policy
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/cookie-policy", {
                    state: { section: "cookie" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Cookie policy
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/terms", {
                    state: { section: "terms" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Terms of service
                </p>
                <p className="font-grava text-[#002244] text-[14px] whitespace-nowrap">
                  Whistle blower
                </p>
                <p className="font-grava text-[#002244] text-[14px] whitespace-nowrap">
                  Anti-Money Laundering
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-[97px]"> {/* lg:w-[97px] w-[97px]*/}
              <p className="font-grava text-base tracking-[0.05em] leading-6 text-[#002244] font-[500]">

                SUPPORT
              </p>
              <div className="flex flex-col gap-[13px]">
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}} 
                >
                  Help Center
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Media
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/resources", {
                    state: { section: "resources" },
                  },              window.scrollTo(0, 0)
                  ) }
                >
                  Video Tutorials
                </p>
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}} 
                >
                  FAQ
                </p>
                
                <p 
                  className="font-grava text-[#002244] underline hover:no-underline text-[14px] whitespace-nowrap cursor-pointer"
                  onClick={() => navigate("/sitemap", {
                    state: { section: "site" },
                  },              window.scrollTo(0, 0)
                  )}
                >
                  Sitemap
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-[196px]"> {/* lg:w-[196px] */}
              <p className="font-grava text-base tracking-[0.05em] leading-6 text-[#002244] font-[500]">

                ADDRESS
              </p>
              <div className="flex flex-col gap-[13px]">
                <p className="font-grava text-[#002244] text-[14px] cursor-pointer font-[400]">
                  Plot 1088, Cadastral <br /> Zone A01, Kaura<br /> Namoda Street,<br /> Area 3, Garki, Abuja.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#d7dce2] border-b-0 border-x-0 w-full pt-5"> {/* h-[0.5px] bg-[#d7dce2] w-full */}
          <div className="flex flex-col lm:flex-row items-center w-full justify-between gap-[21px] ">
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

              <p className="text-xs text-[#002244] flex lg:justify-end font-grava font-[400]" >
                &copy; {new Date().getFullYear()} Tatum Bank Ltd. RC RC7745719.
              </p>
              <p className="text-xs text-[#002244] font-grava font-[400]">
                Licensed by the Central Bank of Nigeria. All deposits are insured by NDIC. All rights reserved.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffcc33] h-[10px] w-full"></div>
    </>
  );
};

export default Footer;
