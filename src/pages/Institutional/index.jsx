import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import Institution from "../../assets/png/institute.png";
import Sector from "../../assets/png/sector.png";
import NGO from "../../assets/png/ngo.png";
import Layer from "../../assets/png/layer.png";
import Kids from "../../assets/png/kids.png";

import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";
import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import Check from "../../assets/svg/check.svg";

import HeroSection from "../../components/HeroSection";
import Buttons from "../../components/Buttons";

const Institutional = () => {
    const [openTabOne, setOpenTabOne] = useState(true)
    const [openTabTwo, setOpenTabTwo] = useState(false)
    const [openTabThree, setOpenTabThree] = useState(false)
    const [openTabFour, setOpenTabFour] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const { state } = useLocation();

  const publicRef = useRef(null);
  const govRef = useRef(null);
  const whyRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (state?.section === "public" && publicRef.current) {
      publicRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "gov" && govRef.current) {
      govRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "why" && whyRef.current) {
      whyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

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
        <section className="w-full overflow-hidden outline-none">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="md:h-auto overflow-hidden  pl-5 lg:pl-[56px] relative w-full flex flex-col lg:flex-row items-center gap-0 md:pt-[93px] pt-0  max-sm:pt-[30%]" //[694px]
        >
          <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px] lm:mt-[3%]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
              <p
                style={{ fontWeight: 450 }}
                className={`animate__animated animate__fadeInUp  w-[350px] lm:w-[873px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px] lg:text-[75px] font-medium leading-[40px] lm:leading-[55px] lg:leading-[78px]`}>
                Empowering <br />
                Institutions with <br />
                <span className="font-bold">Financial Excellence</span>
              </p>
              <p
                className={`animate__animated animate__fadeInUp animate__delay-06s w-[340px]  md:w-[749px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}>
                At Tatum Bank, we understand the unique financial needs of
                institutions and are committed to providing tailor made
                banking solutions.
              </p>
              <div className="flex items-center mt-[12px] gap-3">
                <button
                  className={`animate__animated animate__fadeInUp animate__delay-08s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[rgb(0,34,68)] px-5 rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                  type="button"
                  onClick={() =>
                    navigate("/institutional", {
                      state: { section: "public" },
                    },window.scrollTo(0, 0))
                  }
                >
                  <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                    {/* Get Started */}
                    Find out more
                  </p>
                  <BsArrowRight
                    size={100}
                    className="w-5 h-5 mt-[2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-start absolute -bottom-20 lg:bottom-[-18.9%]" style={{zIndex:'99999'}}>
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
            <div className="w-[557px]">
              <img
                src={'https://res.cloudinary.com/code-idea/image/upload/v1739281418/institutional_mobile_uife0m.png'}
                alt="Temple"
                className={`animate__animated h-[500px] -right-16 relative  lm:h-[100vh]`}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
              />
            </div>
            :
            <img
              src={'https://res.cloudinary.com/code-idea/image/upload/v1739211619/institutional_tatum_1_1_h6pymk.webp'}
              alt="Temple"
              className={`animate__animated relative lg:right-[30%] lm:h-[120vh]`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="false"
            />
          }
        </div>
      </section>
        :
        //Desktop
        <section className="w-full h-full ">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739210005/Slide_4_tf472w.png"} 
            title={`<p class="leading-[105%]">Empowering <br /> Institutions with <br /> <span class="font-bold">Financial Excellence</span></p>`}
            content={`<p class="text-[24px] ">At Tatum Bank, we understand the unique financial needs of institutions and are committed to providing tailor made banking solutions.</p>`} 
            link={"/institutional"} 
            sectionName={"public"} 
            mainImgDesktop={"https://framerusercontent.com/images/qYOFTBego7ZczScWMFQnCCyT7jU.png"} 
            mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739281418/institutional_mobile_uife0m.png"} 
            btnText={"Find out more"} 
            styleP={{ marginLeft: "27%", marginTop: "-10%" }}
          />
        </section>

      }

  

      <section 
        ref={publicRef}
        className="bg-[#fff] md:h-auto lg:h-min flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]"
      >
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Sector}
            alt="Sector"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]"
          data-aos="fade-left">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-grava text-[#334E69] leading-[130%] font-[450] lm:ml-1 tracking-[0.25em] uppercase text-[14px] text-center sm:text-left ">
              Our Institutional Banking Solutions
            </p>
            <div className="flex flex-col w-full gap-[18px]">
              <p className="font-[450] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
                Public Sector Institutional{" "}
                <span className="block md:inline-block">Banking.</span>
              </p>
              <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[400] leading-[27px] text-center md:text-left tracking-[0.2%]">
                Efficient financial management is critical to delivering public
                services effectively. Our banking solutions help government
                agencies, ministries, and public enterprises manage funds
                securely and efficiently.
              </p>
            </div>

            <button
              className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] px-5 lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
              type="button"
              onClick={() =>
                navigate("/institutional/account", {
                  state: {
                    section: "account",
                  },
                },window.scrollTo(0, 0))
              }>
              <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
                {/* Get started */}
                Find out more
              </p>
              <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
              />
            </button>

            <p
              className="font-grava text-[#002244] text-[18px] font-[500] tracking-[25%]  mt-[16px] "
              style={{ letterSpacing: "1px" }}>
              Key Offerings:
            </p>

            <div className="flex flex-col gap-[20px] mt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  // style={{ lineHeight: "27px" }}
                >
                  Public Sector Financial Management{" "}
                  <span className="font-[400]">
                    – Simplified revenue collection, budgeting, and fund
                    disbursement solutions.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  // style={{ lineHeight: "27px" }}
                >
                  Treasury & Liquidity Management{" "}
                  <span className="font-[400]  ">
                    – Optimized cash flow for enhanced financial planning.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  // style={{ lineHeight: "27px" }}
                >
                  Collections & Payment Solutions
                  <span className="font-[400]">
                    - Automated tax collections, school fees payments, and bulk
                    payments.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  // style={{ lineHeight: "27px" }}
                >
                  Payroll Management{" "}
                  <span className="font-[400]">
                    – Secure salary disbursements and pension processing.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[1.4%]"
                  // style={{ lineHeight: "27px" }}
                >
                  Digital Banking for Public Institutions{" "}
                  <span className="font-[400]">
                    {" "}
                    – Secure salary disbursements and pension processing.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Buttons 
              text="Find out more"
              link="/institutional/account"
              sect="account"
              className="hidden lm:flex mt-[28px]"
          />
          {/* <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[28px] hidden lm:w-[168px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/institutional/account", {
                state: {
                  section: "account",
                },
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
          src={Sector}
          alt="Sector"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </section>

      <section 
        ref={govRef}
        className="bg-[#F9FAFB] md:h-min flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[101px] lg:pl-[110px]"
      >
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[565px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
              Non-Government Institution Banking
            </p>
            <p className="text-[14px] lm:text-[18px] font-grava font-[400] text-[#002244] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              We provide customized banking solutions for NGOs, educational
              institutions, healthcare providers, and international
              organizations, ensuring secure transactions and efficient fund
              management.
            </p>

            <button
              className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] px-5 lm:hidden h-[44px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
              type="button"
              onClick={() => {
                navigate("/contact", { // /institutional/account
                  state: {
                    section: "contact", //account
                  },
                }),window.scrollTo(0, 0)
              }}>
              <p className="transition-colors duration-500 whitespace-nowrap ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
                Talk to our relationship managers
              </p>
              <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
              />
            </button>

            <p
              className="font-grava text-[#002244] lm:text-[18px] font-[500] tracking-[0.01em] leading-[25px]  mt-[16px] "
            >
              Key Offerings:
            </p>

            <div className="flex flex-col gap-[32px] mt-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                  // style={{ lineHeight: "27px" }}
                >
                  Cash & Liquidity Management{" "}
                  <span className="font-[400]">
                    – Ensure funds are readily available for operational needs.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                  // style={{ lineHeight: "27px" }}
                >
                  Collections & Payments{" "}
                  <span className="font-[400]  ">
                    – Seamless donor fund processing, school tuition payments,
                    and supplier transactions.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                  // style={{ lineHeight: "27px" }}
                >
                  Foreign Exchange & Trade Services
                  <span className="font-[400]  ">
                    – Smooth cross-border transactions for international
                    organizations.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                  // style={{ lineHeight: "27px" }}
                >
                  Bespoke Loan & Financing Solutions{" "}
                  <span className="font-[400]  ">
                    – Access tailored credit facilities to support growth.
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <img src={Check} alt="Check" className="" />
                <p
                  className="font-grava font-[500] text-[#002244] text-center md:text-left text-base lm:text-[18px] leading-[25px] tracking-[0.01em]"
                  // style={{ lineHeight: "27px" }}
                >
                  Multi-Channel Banking{" "}
                  <span className="font-[400]  ">
                    {" "}
                    – Bank anytime, anywhere via our secure digital platforms.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] w-[198px] lg:w-[355.81px] h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] hidden lm:flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate("/contact", {
                state: {
                  section: "contact",
                },
              }),window.scrollTo(0, 0)}
            }
            >
            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Talk to our relationship managers
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={NGO}
            alt="NGO"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </section>

      <section
        ref={whyRef} 
        className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start mt-[56px] lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]">
        <div className="flex flex-col gap-6 w-full lm:w-[581px]">
          <p className="text-[#334E69] font-[400] text-sm leading-5 tracking-[0.2%] font-grava text-[11px] lg:text-[14px]">
            WHY CHOOSE US
          </p>
          <p className="font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br /> Bank  for Institutional Banking?
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[663px]">

          <div
            className={`${openTabOne ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0`}
            onClick={handleTabOne}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                Tailored Solutions
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
                  Custom-built financial services for your institution's unique needs
                </p>
              </div>
            </div>

          {/* <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5"
            onClick={handleTabOne}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Tailored Solutions
              </p>
              {openTabOne ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabOne && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Custom-built financial services for your institution's unique needs
              </p>
            )}
          </div> */}

          <div
            className={`${openTabTwo ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
            onClick={handleTabTwo}
          >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                Secure & Efficient Transactions
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
                  Robust digital platforms for seamless banking
                </p>
              </div>
            </div>

          {/* <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabTwo}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Secure & Efficient Transactions
              </p>
              {openTabTwo ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabTwo && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Robust digital platforms for seamless banking
              </p>
            )}
          </div> */}

            <div
              className={`${openTabThree ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabThree}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Dedicated Relationship Managers
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
                  Expert financial guidance and personalized service.
                </p>
              </div>
            </div>

          {/* <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabThree}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Dedicated Relationship Managers
              </p>
              {openTabThree ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabThree && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Expert financial guidance and personalized service.
              </p>
            )}
          </div> */}

            <div
              className={`${openTabFour ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabFour}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Innovative Payment & Collection Systems
                </p>
                {openTabFour ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef3}
                style={{
                  maxHeight: openTabFour
                    ? `${contentRef3.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabFour ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabFour ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Simplified revenue and fund management solutions.
                </p>
              </div>
            </div>

          {/* <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabFour}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Innovative Payment & Collection Systems
              </p>
              {openTabFour ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabFour && (
              <p className="font-[300] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Simplified revenue and fund management solutions.
              </p>
            )}
          </div> */}
        </div>
      </section>

      <section
        className="bg-[#fff] px-5 lm:px-[56px] py-[56px]  flex flex-col"
        style={{
          zIndex: 1,
        }}>
        <div
          style={{
            backgroundImage: `url(${Layer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative", // Add relative positioning
          }}
          className="w-full  md:h-auto lm:h-[440px] rounded-xl"> {/* h-[621px] */}
          {/* Overlay div for image opacity */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              backgroundColor: "rgb(244 245 246 / 75%)",
            }}
          />

          <div
            className="w-full h-full rounded-xl px-5 lm:px-[56px] py-[32px] lm:py-[64px] flex flex-col lm:flex-row gap-[50px] lm:gap-0 lm:justify-between lg:items-center relative z-10"
            style={{
              backgroundColor: "rgba(249, 250, 251, 0.8)",
            }}>
            <div className="flex flex-col lm:w-[715px] lm:h-[312px] gap-[20px]">
              {/* ... rest of your content ... */}
              <p className="font-grava font-[500] text-[#002244] text-[20px] leading-[20px] lm:text-[34px] lm:leading-[48px] tracking-[0.01em]">
                Experience institutional banking built for efficiency.
              </p>
              <p className="font-grava font-[400] text-[#002244] text-[14px] lm:text-[18px] leading-[27px]  tracking-[0.01em]">
                Contact us to explore solutions tailored to your institution.
              </p>
              <button
                className={`animate__animated animate__slow animate__fadeInUp transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33]  px-5 w-fit rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center p-4 lm:mt-[80px] justify-center`}
                type="button"
                onClick={() => {
                  navigate("/contact", {
                    state: {
                      section: "contact",
                    }
                  }),window.scrollTo(0, 0)}
                }
                >
                <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                  Contact us
                </p>
                <BsArrowRight
                  size={100}
                  className="w-5 h-5 mt-[2px] text-[#FFCC33] group-hover:text-[#002244]"
                />
              </button>
            </div>
            <div className="lm:w-[468px] lm:h-[312px] ">
              <img 
                src="https://res.cloudinary.com/code-idea/image/upload/v1739959311/institution_zx64tn.jpg" 
                alt="Kids" 
                className="rounded-xl md:h-[312px] lm:w-[468px] lm:h-[312px]" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institutional;
