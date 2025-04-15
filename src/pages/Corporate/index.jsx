import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import Chairman from "../../assets/png/chairman.png";
import Corp from "../../assets/png/business_corp.png";
import Investment from "../../assets/png/investment.png";
import Treasury from "../../assets/png/treasury.png";
import Lending from "../../assets/png/lending.png";
import Partner from "../../assets/png/partner.png";
import Trade from "../../assets/png/trade.png";
import Layer from "../../assets/png/layer.png";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Check from "../../assets/svg/check.svg";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

import HeroSection from "../../components/HeroSection";
import Buttons from "../../components/Buttons";

const Corporate = () => {
  const [openTabOne, setOpenTabOne] = useState(true)
  const [openTabTwo, setOpenTabTwo] = useState(false)
  const [openTabThree, setOpenTabThree] = useState(false)
  const [openTabFour, setOpenTabFour] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);


  const corporateRef = useRef(null);
  const corpRef = useRef(null);
  const treasuryRef = useRef(null);
  const investmentRef = useRef(null);
  const tradeRef = useRef(null);
  const lendingRef = useRef(null);
  const strategicRef = useRef(null);
  const faqRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const { state } = useLocation();

  const navigate = useNavigate();

  const handleTabOne = () => {
    setOpenTabOne(!openTabOne);
  };

  const handleTabTwo = () => {
    setOpenTabTwo(!openTabTwo);
  };

  const handleTabThree = () => {
    setOpenTabThree(!openTabThree);
  };

  const handleTabFour = () => {
    setOpenTabFour(!openTabFour);
  };

  useEffect(() => {
 
    if (state?.section === "treasury" && treasuryRef.current) {
      treasuryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "corp" && corpRef.current) {
      corpRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "trade" && tradeRef.current) {
      tradeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "investment" && investmentRef.current) {
      investmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "lending" && lendingRef.current) {
      lendingRef.current.scrollIntoView({ behavior: "smooth" });
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
    <div className="w-full overflow-hidden" >
      {
        isMobile ? 
        //Mobile
        <section className="h-full w-full overflow-hidden outline-none">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-[762px] md:h-auto pl-5 pr-5 lm:pr-0 lm:pl-[56px] relative w-full flex flex-col  lm:items-center gap-0  md:pt-[93px] max-sm:pt-[30%] ">
            <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px] lm:mt-[3%]">
              <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
                <p
                  style={{ fontWeight: 450 }}
                  className={`animate__animated animate__fadeInUp  w-auto lm:w-[786px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px] font-medium leading-[40px] lm:leading-[55px]`}>
                  Powering Your <span className="font-bold">Business Growth</span>
                </p>
                <p
                  className={`animate__animated animate__fadeInUp animate__delay-06s w-auto md:w-[686px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}>
                  At Tatum Bank, we understand that businesses thrive when they
                  have the right financial partner—one that offers tailored
                  solutions, expert insights, and seamless banking services to
                  drive growth.
                </p>
                <div className="flex items-center mt-[12px] gap-3">
                  <button
                    className={`animate__animated animate__fadeInUp animate__delay-08s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                    type="button"
                    onClick={() =>
                      navigate("/corporate", {
                        state: { section: "corp" },
                      },window.scrollTo(0, 0))
                    }>
                    <p className="transition-colors duration-500 ease-in-out font-[450]  font-grava text-[#FFCC33] group-hover:text-[#002244]">
                      Find out more
                    </p>
                    <BsArrowRight
                      size={100}
                      className="w-5 h-5 mt-[2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex items-start absolute -bottom-20 lg:bottom-[-40.8%]" style={{zIndex:'99999'}}>
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
                    <div className="w-[60px] mt-1 lg:mt-1.5">
                        <img
                        src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                        alt="NDIC"
                        className="flex justify-start lm:inline-block h-[23px] md:w-[50px] md:h-[25px]"
                        />
                    </div>
                    </p>
                </p>
              </div>
            </div>
            {
              isMobile ?
              <div className="w-[120%]">
                <img
                  src={isMobile ? 'https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp' : 'https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp'}
                  alt="Family"
                  className={`animate__animated  relative  right-14 lm:right-[30%] h-[383px] top-[7%] `}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                />
              </div>
              :
              <img
                src={isMobile ? 'https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp' : 'https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp'}
                alt="Family"
                className={`animate__animated  relative lg:right-[32%] md:top-[-14%] lm:top-[6%] lg:w-[75%] `}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
              />
            }
          </div>
        </section>
        :
        //Desktop
        <section className="w-full h-full">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1740493265/cb_bg_m5ohdd.png"} 
            title={`Powering Your <br /> <span class="font-bold">Business Growth</span>`}
            content={`<p class="leading-[36.1px] whitespace-nowrap">At Tatum Bank, we understand that businesses thrive when they <span class="block">have the right financial partner—one that offers tailored solutions,</span> expert insights, and seamless banking services to drive growth.</p>`} 
            link={"/corporate"} 
            sectionName={"corp"} 
            mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp"} 
            mainImgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739211618/Corporate_banking_1_f9nnyk.webp"} 
            btnText={"Find out more"}
            styleP={{  marginTop: "-15%", height: "100vh", }}
          />
        </section>
      }
      

      <div ref={corpRef} className="bg-[#F9FAFB] md:h-auto lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lm:pl-[110px]  lg:pt-[0px] lg:pb-[0px] lg:pr-[110px] ">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Corp}
            alt="Saver"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 lg:gap-[48px] w-full md:w-[350px] lm:w-[565px]"
        >
          <div className="flex flex-col gap-2 md:gap-4  md:items-start items-center">
            <div className="flex flex-col w-full gap-[18px]">
              <p className="font-[450] text-[#002244] font-grava lm:-ml-1 text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
                Corporate Banking
              </p>
              <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[27px] text-center md:text-left tracking-[0.2%]">
                Whether you're looking to optimize cash flow, expand your
                operations, or navigate global trade, we are here to support
                your ambitions with expertise, innovation, and reliability.
              </p>
            </div>

            <Buttons 
              text="Find out more"
              link="/corporate/account"
              sect="account"
              className="lm:hidden"
            />

            {/* <button
              className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] px-5 lm:hidden h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
              type="button"
              onClick={() =>
                navigate("/corporate/account", {
                  state: { section: "account" },
                },window.scrollTo(0, 0))
              }>
              <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
                Find out more
              </p>
              <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
              />
            </button> */}
          </div>

          <Buttons 
              text="Find out more"
              link="/corporate/account"
              sect="account"
              className="hidden lm:flex"
            />

          {/* <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[28px] hidden lm:px-5 h-[59px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              },window.scrollTo(0, 0))
            }>
            <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button> */}
        </div>
        <img
          src={Corp}
          alt="Corp"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>

      <div
        ref={investmentRef}
        className="bg-[#FFF] md:h-auto lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[101px] lg:pl-[110px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Investment Services
            </p>
            <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Secure and grow your capital with our diverse investment offerings
              tailored to corporate clients. Our expert advisors provide
              strategic insights to help you maximize returns while minimizing
              risks.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Fixed Income & Treasury Bills
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Asset & Wealth Management
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Structured Investment Portfolios
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/contact", {
                state: { section: "contact" },
              },window.scrollTo(0, 0))
            }>
            <p className="transition-colors duration-500 ease-in-out font-[500] leading-[27px] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Talk to an advisor
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Investment}
            alt="Airplane"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        ref={treasuryRef}
        className="bg-[#F9FAFB] md:h-auto  flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[101px] lg:pl-[110px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Treasury}
            alt="Treasury"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]"
          data-aos="fade-left">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[450] text-[#002244] font-grava text-center lm:-ml-1 md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Treasury Management
            </p>
            <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Stay ahead with efficient liquidity management, risk mitigation,
              and cash flow optimization designed for today’s dynamic business
              environment. Our treasury solutions ensure that your capital works
              smarter for you.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Cash & Liquidity Management
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Foreign Exchange Services
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Interest Rate Risk Management
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/contact", {
                state: { section: "contact" },
              },window.scrollTo(0, 0))
            }>
            <p className="transition-colors duration-500 ease-in-out font-[500] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Talk to an advisor
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <img
          data-aos="fade-right"
          src={Treasury}
          alt="Treasury"
          className="flex md:hidden w-[295px] h-[295px]"
        />
      </div>

      <div
        ref={tradeRef}
        className="bg-[#FFF] md:h-auto lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[101px] lg:pl-[110px]">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[450] text-[#002244] font-grava text-center lm:-ml-1 md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Trade Finance
            </p>
            <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Expand your business with seamless international and domestic
              trade solutions. From import/export financing to letters of
              credit, we ensure your transactions are secure and hassle-free.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Letters of Credit & Guarantees
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Import & Export Financing
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[450] text-[#002244] text-center lm:mt-1 lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Supply Chain Finance
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              },window.scrollTo(0, 0))
            }>
            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Start trading smarter
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Trade}
            alt="Trade"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        ref={lendingRef}
        className="bg-[#F9FAFB] md:h-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[101px] lg:pl-[110px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Lending}
            alt="Lending"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]"
          data-aos="fade-left">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[450] text-[#002244] font-grava lm:-ml-1 text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Corporate Lending
            </p>
            <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Fuel your growth with customized financing solutions that align
              with your business goals. Whether you need working capital, asset
              financing, or expansion funding, we offer flexible loan structures
              to keep your business moving forward.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-3">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Term Loans & Working Capital Financing
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Asset & Equipment Financing
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Project & Infrastructure Financing
              </p>
            </div>
          </div>
          <button
            className="lm:mt-[32px] cursor-default bg-[#EDEDED] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center"
            type="button"
          >
            <p className=" font-[500] lg:leading-[27px] lg:text-[18px] font-grava text-[#B0B0B0]">
              To be available soon
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#B0B0B0] "
            />
          </button>
        </div>
        <img
          src={Lending}
          alt="Lending"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>

      <div
        ref={strategicRef}
        className="bg-[#FFF] md:h-auto lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[101px] lg:pl-[110px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Strategic Partnerships
            </p>
            <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              We believe in the power of collaborations that drive innovation
              and mutual growth. Our partnership solutions provide enterprises
              with access to exclusive financial products, industry insights,
              and customized banking support.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Co-Branded Financial Solutions
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[0.01em]">
                Technology & Fintech Collaborations
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-[500] text-[#002244] lm:mt-1 text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Industry-Specific Advisory
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              },window.scrollTo(0, 0))
            }>
            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px]] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Partner with us
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Partner}
            alt="Partner"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        ref={faqRef}
        className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start justify-between lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px] xl:px-[100px]">
        <div className="flex flex-col gap-6 w-full lm:w-[448px]">
          <p className="text-[#334E69] font-[400] text-[14px] leading-5 tracking-[0.2%] font-grava text-[11px] lg:text-[14px]">
            WHY CHOOSE US
          </p>
          <p className="font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br /> Corporate Banking.
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[710px]">

          <div
            className={`${openTabOne ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0`}
            onClick={handleTabOne}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                Expert Financial Advisory
              </p>
              {openTabOne ? (
                <img src={Minus} alt="Minus" />
              ) : (
                <img src={Plus} alt="Plus" />
              )}
            </div>

              <div
                ref={contentRef1}
                style={{
                  maxHeight: openTabOne
                    ? `${contentRef1.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabOne ? "" : " mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabOne ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  We provide industry-specific insights to help businesses make informed decisions.
                </p>
              </div>
            </div>

          <div
            className={`${openTabTwo ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
            onClick={handleTabTwo}
          >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Tailored Solutions
                </p>
                {openTabTwo ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef2}
                style={{
                  maxHeight: openTabTwo
                    ? `${contentRef2.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabTwo ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabTwo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Our products are designed with your business needs in mind.
                </p>
              </div>
            </div>

            <div
              className={`${openTabThree ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabThree}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Technology-Driven Banking 
                </p>
                {openTabThree ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef3}
                style={{
                  maxHeight: openTabThree
                    ? `${contentRef3.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabThree ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabThree ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Enjoy seamless banking with cutting-edge digital solutions.
                </p>
              </div>
            </div>

            <div
              className={`${openTabFour ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabFour}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Reliable Support
                </p>
                {openTabFour ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef4}
                style={{
                  maxHeight: openTabFour
                    ? `${contentRef4.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`mb-5 overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabFour ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Our dedicated corporate banking team is always available to
                  support you.
                </p>
              </div>
            </div>

        </div>
      </div>

      <div className="bg-[#fff] px-5 lm:px-[56px] py-[56px] lm:py-[60px] flex flex-col">
          <div 
              style={{
                  backgroundImage: `url(${Layer})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
              }}
              className="w-full h-auto lg:h-[440px] rounded-[32px]"
          >
              <div 
                  className="w-full h-full rounded-[32px] px-5 lm:px-[56px] py-[32px] gap-10 lg:gap-0 lm:py-[64px] flex flex-col lg:flex-row justify-between items-start lg:items-center"
                  style={{ backgroundColor: 'rgba(249, 250, 251, 0.9)' }}
              >
                  <div className='flex flex-col lm:w-[615px] lg:h-[312px] gap-5 lm:gap-[50px]'>
                      <div className="flex flex-col  gap-[20px]">
                          <p className="font-grava font-[450] text-[20px] leading-[25px] lm:text-[32px] lm:leading-[48px] tracking-[0.2%]" style={{color:'#002244'}}> 
                            {/* Let’s Build the Future of Your Business Together */}
                            Let’s Take Your Business To The Next Level!
                          </p>
                          <p className="font-grava font-[400] text-[14px] lm:text-[18px] leading-5 lm:leading-[27px] tracking-[0.2%]" style={{color:'#002244'}}> 
                            Your business deserves a bank that believes in your dreams as much as you do. 
                            Let’s talk about how Tatum Bank can empower you to achieve more or <span className="underline text-[#002244] font-[450]">Visit our nearest client centre</span> to get started
                          </p>
                      </div>
                      <button
                          className={`animate__animated animate__slow animate__fadeInUp transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33]  w-[190px] lm:w-[180px] py-4 rounded-tl-lg rounded-br-lg h-[51px] lg:h-[58px] gap-2 flex items-center justify-center`}
                          type='button'  
                          onClick={() => {navigate("/contact", { state: {section: "contact"}}), window.scrollTo(0, 0)}}
                          // /corporate/account { state: {section: "account"}}
                      >
                      <p 
                          className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]'
                      >
                       
                          Call us today
                      </p>
                      <BsArrowRight size={100}   
                          className='w-5 h-5 mt-[2px] text-[#FFCC33] group-hover:text-[#002244]' 
                      />
                      </button>
                  </div>
                  <div className=" lm:w-[468px] lm:h-[312px]">
                      <img src="https://res.cloudinary.com/code-idea/image/upload/v1739803749/shake_rib97r.png" alt="Meeting" className="w-[468px] lm:h-[312px] md:h-[300px]" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Corporate;
