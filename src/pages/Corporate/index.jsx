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

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Check from "../../assets/svg/check.svg";
import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

const Corporate = () => {
  const [openTabOne, setOpenTabOne] = useState(true)
  const [openTabTwo, setOpenTabTwo] = useState(false)
  const [openTabThree, setOpenTabThree] = useState(false)
  const [openTabFour, setOpenTabFour] = useState(false)

  const isMobile = window.innerWidth < 768;

  const corporateRef = useRef(null);
  const treasuryRef = useRef(null);
  const investmentRef = useRef(null);
  const tradeRef = useRef(null);
  const lendingRef = useRef(null);
  const strategicRef = useRef(null);
  const faqRef = useRef(null);

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

  // useEffect(() => {
  //   if (state?.section === "corporate" && corporateRef.current) {
  //     corporateRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (state?.section === "treasury" && treasuryRef.current) {
  //     treasuryRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (state?.section === "trade" && tradeRef.current) {
  //     tradeRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (state?.section === "faq" && faqRef.current) {
  //     faqRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (state?.section === "investment" && investmentRef.current) {
  //     investmentRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (state?.section === "lending" && lendingRef.current) {
  //     lendingRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [state]);

  return (
    <div className="w-full overflow-hidden" >
      <section className="h-full w-full overflow-hidden outline-none lg:h-[100vh]">
        <div
          style={{
            backgroundImage: `url(${
              isMobile
                ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png"
                : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="pl-5 pr-5 lm:pr-0 lm:pl-[56px] relative w-full flex flex-col lm:flex-row lm:items-center gap-0 lm:h-[100vh] max-sm:pt-[30%] ">
          <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
              <p
                style={{ fontWeight: 450 }}
                className={`animate__animated animate__fadeInUp w-auto lm:w-[786px] font-grava text-[#002244] text-left text-[32px] lm:text-[50px] lg:text-[75px] font-medium leading-[40px] lm:leading-[55px] lg:leading-[78px]`}>
                Powering Your <span className="font-bold">Business Growth</span>
              </p>
              <p
                className={`animate__animated animate__fadeInUp animate__delay-1s w-auto  md:w-[786px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}>
                At Tatum Bank, we understand that businesses thrive when they
                have the right financial partner—one that offers tailored
                solutions, expert insights, and seamless banking services to
                drive growth.
              </p>
              <div className="flex items-center mt-[12px] gap-3">
                <button
                  className={`animate__animated animate__fadeInUp animate__delay-2s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                  type="button"
                  onClick={() =>
                    navigate("/corporate/account", {
                      state: { section: "account" },
                    })
                  }>
                  <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                    Open a Corporate Account
                  </p>
                  <BsArrowRight
                    size={100}
                    className="w-5 h-5 mt-[-2px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                  />
                </button>
              </div>
            </div>
            <div className="hidden lm:flex items-start absolute lg:bottom-[-51%]">
              <p className="text-[#002244] font-grava text-sm md:text-base flex items-center whitespace-nowrap gap-2 ">
                We are licensed by
                <img
                  src={CBN}
                  alt="CBN"
                  className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                />
                Deposit insured by
                <img
                  src={NDIC}
                  alt="NDIC"
                  className="inline-block mt-1 lg:mt-0 h-[16px] w-[60px] md:h-[28px]"
                />
              </p>
            </div>
          </div>
          <img
            src={isMobile ? Chairman : Chairman}
            alt="Family"
            className={`animate__animated animate__fadeInRight relative lm:right-[32%] lm:top-[10%] lg:w-[75%] `}
          />
        </div>
      </section>

      <div className="bg-[#F9FAFB] md:h-auto lg:h-[873px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Corp}
            alt="Saver"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[565px]">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <div className="flex flex-col w-full gap-[18px]">
              <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]">
                Corporate Banking
              </p>
              <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
                Whether you're looking to optimize cash flow, expand your
                operations, or navigate global trade, we are here to support
                your ambitions with expertise, innovation, and reliability.
              </p>
            </div>

            <button
              className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[4px] px-5 lm:hidden h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
              type="button"
              onClick={() =>
                navigate("/corporate/account", {
                  state: { section: "account" },
                })
              }>
              <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
                Open a Corporate Account
              </p>
              <BsArrowRight
                size={100}
                className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
              />
            </button>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] mt-[28px] hidden lm:px-5 h-[59px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] lm:flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Open a Corporate Account
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
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
        className="bg-[#FFF] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[514px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Investment Services
            </p>
            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Secure and grow your capital with our diverse investment offerings
              tailored to corporate clients. Our expert advisors provide
              strategic insights to help you maximize returns while minimizing
              risks.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Fixed Income & Treasury Bills
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Asset & Wealth Management
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Structured Investment Portfolios
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Talk to an Advisor
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#F9FAFB] md:h-auto lg:h-[873px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
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
            <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Treasury Management
            </p>
            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Stay ahead with efficient liquidity management, risk mitigation,
              and cash flow optimization designed for today’s dynamic business
              environment. Our treasury solutions ensure that your capital works
              smarter for you.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Cash & Liquidity Management
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Foreign Exchange Services
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Interest Rate Risk Management
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Talk to an Advisor
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#FFF] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[514px]">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Trade Finance
            </p>
            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Expand your business with seamless international and domestic
              trade solutions. From import/export financing to letters of
              credit, we ensure your transactions are secure and hassle-free.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Letters of Credit & Guarantees
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Import & Export Financing
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
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
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Start Trading Smarter
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#F9FAFB] md:h-auto lg:h-[873px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[93px] md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
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
            <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Corporate Lending
            </p>
            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Fuel your growth with customized financing solutions that align
              with your business goals. Whether you need working capital, asset
              financing, or expansion funding, we offer flexible loan structures
              to keep your business moving forward.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Term Loans & Working Capital Financing
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Asset & Equipment Financing
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Project & Infrastructure Financing
              </p>
            </div>
          </div>
          <button
            className="transition-all duration-500 ease-in-out lm:mt-[32px] bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate/account", {
                state: { section: "account" },
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Apply for a Loan Now
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#FFF] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[514px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-4 md:items-start items-center">
            <p className="font-med text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px]">
              Strategic Partnerships
            </p>
            <p className="text-sm lm:text-[18px] text-[#002244] font-grava font-[350] leading-[20px] lm:leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              We believe in the power of collaborations that drive innovation
              and mutual growth. Our partnership solutions provide enterprises
              with access to exclusive financial products, industry insights,
              and customized banking support.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] mt-6">
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Co-Branded Financial Solutions
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
                Technology & Fintech Collaborations
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center lm:items-start gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-med text-[#002244] text-center lm:text-left text-base lm:text-[20px] leading-[25px] tracking-[1.4%]">
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
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Partner with Us
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start justify-between lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]">
        <div className="flex flex-col gap-6 w-full lm:w-[448px]">
          <p className="text-[#334E69] font-[300] text-sm leading-5 tracking-[0.2%] font-grava">
            WHY CHOOSE US
          </p>
          <p className="font-med text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br /> Corporate Banking.
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[710px]">
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5"
            onClick={handleTabOne}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Expert Financial Advisory
              </p>
              {openTabOne ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabOne && (
              <p className="font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Confidentiality and personalized attention at every level
              </p>
            )}
          </div>
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabTwo}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Tailored Solutions
              </p>
              {openTabTwo ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabTwo && (
              <p className="font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Confidentiality and personalized attention at every level
              </p>
            )}
          </div>
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabThree}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Technology-Driven Banking
              </p>
              {openTabThree ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabThree && (
              <p className="font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Enjoy seamless banking with cutting-edge digital solutions.
              </p>
            )}
          </div>
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 py-[32px]"
            onClick={handleTabFour}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Reliable Support
              </p>
              {openTabFour ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabFour && (
              <p className="font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Our dedicated corporate banking team is always available to
                support you.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
