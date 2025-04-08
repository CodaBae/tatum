import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Check from "../../assets/svg/check.svg";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

import Golfer from "../../assets/png/golfer.png";
import Dining from "../../assets/png/dining.png";
import Airplane from "../../assets/png/airplane.png";
import Cards from "../../assets/png/atm_cards.png";
import HeroSection from "../../components/HeroSection";

const Private = () => {
  const [openTabOne, setOpenTabOne] = useState(true);
  const [openTabTwo, setOpenTabTwo] = useState(false);
  const [openTabThree, setOpenTabThree] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const isTab = window.innerWidth < 1028;
  

  const navigate = useNavigate();

  const privateRef = useRef(null);
  const wealthRef = useRef(null);
  const investRef = useRef(null);
  const cardRef = useRef(null);
  const faqRef = useRef(null);
  const { state } = useLocation();

  const handleTabOne = () => {
    setOpenTabOne(!openTabOne);
  };

  const handleTabTwo = () => {
    setOpenTabTwo(!openTabTwo);
  };

  const handleTabThree = () => {
    setOpenTabThree(!openTabThree);
  };

  useEffect(() => {
    if (state?.section === "wealth" && wealthRef.current) {
      wealthRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "invest" && investRef.current) {
      investRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "card" && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1100);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div className="w-full overflow-hidden">
      {
        isMobile ? 
        //Mobile
        <section className="h-full w-full overflow-hidden outline-none  lg:h-[120vh]">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="md:h-auto lg:h-[120vh] h-[794px] overflow-hidden  pl-5 lg:pl-[56px] relative w-full flex flex-col lg:flex-row items-center pt-[93px] lg:pt-0 gap-0 max-sm: max-sm:pt-[30%]" //[694px]
        >
          <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px] lm:mt-[3%]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5 ">
              <p
                style={{ fontWeight: 450 }}
                className={`animate__animated animate__fadeInUp  lm:w-[833px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px] lg:text-[75px] leading-[40px] lm:leading-[55px] lg:leading-[78px]`}
              >
                Exclusive. Personalized.{" "}
                <span className="font-bold ">Exceptional </span>
              </p>
              <p
                //
                className={`animate__animated animate__fadeInUp animate__delay-06s w-[300px]  md:w-[833px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
              >
                With privileged access to premium banking services, bespoke
                investment strategies, and the prestige of Tatum Private
                Banking, we keep you smiling—every step of the way.
              </p>
              <div className="flex items-center mt-[12px] gap-3">
                <button
                  className={`animate__animated animate__fadeInUp animate__delay-08s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                  type="button"
                  onClick={() => {
                    navigate(
                      "/private",
                      {
                        state: { section: "wealth" },
                      },
                      window.scrollTo(0, 0)
                    );
                  }}
                >
                  <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                    Find out more
                  </p>
                  <BsArrowRight
                    size={100}
                    className="w-5 h-5 mt-[2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-start absolute -bottom-20 lg:bottom-[-43%]" style={{zIndex:'99999'}}>
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
          <img
            src={"https://res.cloudinary.com/code-idea/image/upload/v1739211655/private_banking_1_rfixxb.webp"}
            alt="Family"
            className={`animate__animated animate__fadeInRight relative h-[400px] -top-10 -right-2 lm:right-5 md:top-5 lm:top-2 mt-24 lm:h-[688px] `}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="false"
          />
        </div>
      </section> 
        :
        //Desktop
        <section className="w-full h-full ">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739209917/Slide_3_2_hcvtic.png"} 
            title={`Exclusive. Personalized. <br/> <span class="font-bold ">Exceptional </span>`}
            content={"With privileged access to premium banking services, bespoke investment strategies, and the prestige of Tatum Private Banking, we keep you smiling—every step of the way."} 
            link={"/private"} 
            sectionName={"wealth"} 
            mainImgMobile={"https://framerusercontent.com/images/ExmGLhhfgX67COL5ILw0YCJP1Y.png"} 
            mainImgDesktop={"https://framerusercontent.com/images/ExmGLhhfgX67COL5ILw0YCJP1Y.png"} 
            btnText={"Find out more"} 
            styleP={{ height: "150%", marginLeft: "45%", marginTop: "5%" }}

          />
        </section>
      }

      <div
        ref={wealthRef}
        className="bg-[#fff] md:h-auto lg:h-[873px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5  lg:pt-[110px] lg:pb-[88px]  lg:pr-[110px] lg:pl-[86px]"
      >
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Dining}
            alt="Saver"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-[450] tracking-[0.25em] uppercase text-sm text-[11px] lg:text-[14px] ">
              Wealth Management Advisory
            </p>
            <div className="flex flex-col w-full gap-[18px]">
              <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
                Your Wealth, Our{" "}
                <span className="block md:inline-block">Expertise.</span>
              </p>
              <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[300] leading-[27px] text-center md:text-left tracking-[0.2%]">
                At Tatum Bank, we go beyond banking—we curate personalized
                wealth growth strategies that align with your financial
                ambitions. Whether you seek investment diversification, estate
                planning, or asset protection, our seasoned advisors craft
                bespoke solutions that optimize your wealth.
              </p>
            </div>

            <p
              className="font-grava font-bo text-[#002244] text-center lm:text-left text-base lm:text-[18px]  tracking-[1.4%]"
              style={{
                lineHeight: "27px",
                marginTop: "2%",
                marginBottom: "-2%",
              }}
            >
              Our Expertise Covers:
            </p>

            <button
              className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] px-5 lm:hidden h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
              type="button"
              onClick={() => {
                navigate(
                  "/private/account",
                  {
                    state: { section: "account" },
                  },
                  window.scrollTo(0, 0)
                );
              }}
            >
              <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
                {/* Get started */}
                Find out more
              </p>
              <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
              />
            </button>

            <div className="flex flex-col gap-[20px] mt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Portfolio Management{" "}
                  <span className="font-[300]  ">
                    – Tailored investment strategies for sustainable growth.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Estate & Legacy Planning{" "}
                  <span className="font-[300]">
                    – Secure your legacy with expert guidance.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Real Estate Advisory{" "}
                  <span className="font-[300] ">
                    – Strategic insights for profitable investments.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Alternative Investments{" "}
                  <span className="font-[300]">
                    – Access exclusive opportunities in private equity, hedge
                    funds, and more.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[28px] hidden px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate(
                "/private/account",
                {
                  state: { section: "account" },
                },
                window.scrollTo(0, 0)
              );
            }}
          >
            <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              {/* Get started */}
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <img
          src={Dining}
          alt="Dining"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>

      <div
        ref={investRef}
        className="bg-[#F9FAFB] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]"
      >
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[514px]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <div className="flex flex-col lm:flex-row items-center gap-2">
              <p className="font-grava text-[#334E69] font-[450] tracking-[0.25em]  uppercase text-[14px]">
                Exclusive Banking Benefits
              </p>
              <div className="w-[121px] h-[29px] bg-[#FFEFC0] rounded-[16px] flex items-center justify-center">
                <p className="uppercase text-[#546B82] text-[12px] tracking-wide font-grava font-semibold">
                  coming soon
                </p>
              </div>
            </div>
            <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              More Than Banking. A Lifestyle.
            </p>
            <p className="text-[14px] lm:text-[18px] font-grava font-[300] text-[#002244] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Our Private Banking clients enjoy a world of privileges, from
              preferential rates to VIP lifestyle benefits. Stay tuned for the
              launch of our exclusive suite of bespoke banking experiences,
              crafted just for you.
            </p>
          </div>
          <button
            className="lm:mt-[32px] cursor-default bg-[#EDEDED] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center"
            type="button"
          >
            <p className=" font-[300]  lg:text-[18px] font-grava text-[#B0B0B0]">
              To be available soon
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl  font-medium ease-in-out w-5 h-5 text-[#B0B0B0]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Airplane}
            alt="Airplane"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        ref={cardRef}
        className="bg-[#fff] md:h-auto lg:h-[873px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]"
      >
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Cards}
            alt="Cards"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]"
          data-aos="fade-left"
        >
          <div className="flex gap-5 lm:gap-[20px] flex-col">
            <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
              <p className="font-grava text-[#334E69] font-[450] tracking-[0.25em] uppercase text-[14px]  lg:text-[14px] ">
                Tatum Black Card
              </p>
              <div className="flex flex-col w-full gap-[18px]">
                <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
                  The Ultimate Symbol of Prestige
                </p>
                <p className="text-[14px] lm:text-[18px] font-grava text-[#002244] font-[300] leading-[27px] text-center md:text-left tracking-[0.2%]">
                  Designed for the elite few, the Tatum Black Card is more than
                  just a payment solution—it’s a statement of status and access
                  to unparalleled privileges worldwide.
                </p>
              </div>
            </div>

            <button
              className="bg-[#EDEDED] cursor-default px-5 mx-auto md:hidden h-[54px] rounded-tl-lg rounded-br-lg gap-2  flex items-center justify-center"
              type="button"
            >
              <p className=" font-[300]  lg:text-[18px] font-grava text-[#B0B0B0] ">
                {/* Apply for the Tatum Black Card */}
                To be available soon
              </p>
              <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl  font-medium ease-in-out w-5 h-5 text-[#B0B0B0]"
              />
            </button>

            <div className="flex flex-col lm:flex-row items-center gap-2">
              <p
                className="font-grava font-bo text-[#002244] text-center lm:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                style={{ lineHeight: "27px" }}
              >
                Exclusive Benefits:
              </p>
              <div className="w-[121px] h-[29px] bg-[#FFEFC0] rounded-[16px] flex items-center justify-center">
                <p className="uppercase text-[#546B82] text-[12px] tracking-wide font-grava font-semibold">
                  coming soon
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] mt-3">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Global Concierge Services
                  <span className="font-[300] ">
                    – 24/7 personalized assistance, anywhere in the world.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Luxury Travel Perks{" "}
                  <span className="font-[300] ">
                    – First-class upgrades, VIP airport lounges, and premium
                    hotel benefits.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  High Spending Limits{" "}
                  <span className="font-[300] ">
                    – Unmatched flexibility for high-value transactions.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[450] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  style={{ lineHeight: "27px" }}
                >
                  Exclusive Event Access{" "}
                  <span className="font-[300]">
                    – Invitations to premium experiences, from fashion shows to
                    private auctions..
                  </span>
                </p>
              </div>
            </div>
          </div>

          <button
            className=" bg-[#EDEDED] mt-[28px] cursor-default hidden w-[272px] lg:w-[318px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 md:flex items-center justify-center"
            type="button"
          >
            <p className="font-[300]  lg:text-[18px] font-grava text-[#B0B0B0]">
              {/* Apply for the Tatum Black Card */}
              To be available soon
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl  font-medium ease-in-out w-5 h-5 text-[#B0B0B0]"
            />
          </button>
        </div>
        <img
          src={Cards}
          alt="Cards"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>

      <div
        ref={faqRef}
        className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]"
      >
        <div className="flex flex-col gap-6 w-full lm:w-[448px]">
          <p className="text-[#002244] font-[300] text-sm leading-5 tracking-[0.2%] font-grava text-[11px] lg:text-[14px]">
            WHY CHOOSE US
          </p>
          <p className="font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br />  Private Banking?
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[710px]">
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5"
            onClick={handleTabOne}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Exclusive Access
              </p>
              {openTabOne ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabOne && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Bespoke financial solutions tailored for high-net worth individuals
              </p>
            )}
          </div>
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabTwo}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Unparalleled Service
              </p>
              {openTabTwo ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabTwo && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Dedicated relationship managers who understand your unique needs
              </p>
            )}
          </div>
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabThree}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Discreet & Secure
              </p>
              {openTabThree ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabThree && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Confidentiality and personalized attention at every level
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
