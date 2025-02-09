import React, { useState, useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import PersonalImg from "../../assets/png/personal.png";
import Saver from "../../assets/png/saver.png";
import Milkshake from "../../assets/png/milkshake.png";
import Power from "../../assets/png/power.png";
import MoneyWoman from "../../assets/png/money_woman.png";
import Tiles from "../../assets/png/tile.png";
import Debit from "../../assets/png/debit.png";
import Credit from "../../assets/png/credit.png";
import Prepaid from "../../assets/png/prepaid.png";
import Layer from "../../assets/png/layer.png";
import Collab from "../../assets/png/collab.png";
import GreyCard from "../../assets/png/grey_card.png";
import SilverCard from "../../assets/png/silver_card.png";
import YellowCard from "../../assets/png/yellow_card.png";
import BlackCard from "../../assets/png/black_card.png";
import WhiteCard from "../../assets/png/white_card.png";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Check from "../../assets/svg/check.svg";
import Internet from "../../assets/svg/internet.svg";
import Mobile from "../../assets/svg/mobile.svg";
import Ussd from "../../assets/svg/ussd_darker.svg";

import "./css/Dot.css";

const Personal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedCard, setClickedCard] = useState("debit");

  const personalRef = useRef(null);
  const faqRef = useRef(null);
  const saveRef = useRef(null);
  const currentRef = useRef(null);
  const digitalRef = useRef(null);
  const fixedRef = useRef(null);
  const loanRef = useRef(null);
  const cardRef = useRef(null);

  const { state } = useLocation();

  const navigate = useNavigate();

  const handleClickCard = (value) => {
    setClickedCard(value);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    className: "m-0",
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // dots: true
        },
      },
    ],
  };

  useEffect(() => {
    if (state?.section === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "cards" && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "loans" && loanRef.current) {
      loanRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "savings" && saveRef.current) {
      saveRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "current" && currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "fixed" && fixedRef.current) {
      fixedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="overflow-hidden">
      <section className="h-full w-full outline-none  lg:h-[100vh]">
        <div
          style={{
            backgroundImage: `url(${
              isMobile
                ? "https://res.cloudinary.com/code-idea/image/upload/v1739209666/Slide_2_1_qjbpgq.png"
                : "https://res.cloudinary.com/code-idea/image/upload/v1739209666/Slide_2_1_qjbpgq.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="lm:h-[100vh] overflow-hidden  pl-5 lg:pl-[56px] relative w-full flex flex-col lm:flex-row items-center gap-0 max-sm:  max-sm:pt-[10%]" //[694px]
        >
          <div className="w-full  flex flex-col items-start relative pt-[64px] lm:pt-[0px] z-30 gap-[64px] lg:gap-[69px]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
              {/* First Text */}
              <p
                style={{ fontWeight: 450 }}
                className={`animate__animated animate__fadeInUp lm:w-[831px] capitalize font-grava text-[#002244] text-left text-[32px] lg:text-[75px] font-medium leading-[40px] lg:leading-[78px]`}>
                Personalized
                <br /> banking that{" "}
                <span className="font-bold">
                  keeps
                  <br /> you smiling
                </span>
              </p>

              {/* Second Text */}
              <p
                className={`animate__animated animate__fadeInUp animate__delay-04s md:w-[265px] lg:w-[737px] font-[300] text-sm font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                Explore tailored solutions that fit your lifestyle, empower{" "}
                <br></br> your goals, and make banking a joy.
              </p>

              {/* Button */}
              <div className="flex items-center mt-[32px] lg:mt-[12px] gap-3">
                <button
                  className={`animate__animated animate__fadeInUp animate__delay-06s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                  type="button"
                  onClick={() =>
                    navigate("/personal/account", {
                      state: { section: "account" },
                    })
                  }>
                  <p className="transition-colors duration-500 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                    Open a Personal Account
                  </p>
                  <BsArrowRight
                    size={100}
                    className="w-5 h-5 mt-[-2px] text-[#FFCC33] group-hover:text-[#002244]"
                  />
                </button>
              </div>
            </div>
            <div className="hidden lm:flex items-start absolute lg:bottom-[-31.5%]">
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
            src={
              "https://res.cloudinary.com/code-idea/image/upload/v1739211220/personal_banking_1_vgnhhq.webp"
            }
            alt="Family"
            // style={{
            //     display: isMobile ? "none" : "flex"
            // }}
            className={`animate__animated animate__fadeInRight relative lm:right-[10%] lm:top-[13%] lg:w-[50%] `}
          />
        </div>
      </section>

      <div
        ref={saveRef}
        className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Saver}
            alt="Saver"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-[350px] lm:w-[498px]">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium tracking-[0.25em] uppercase text-sm">
              Savings Account
            </p>
            <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Grow your savings effortlessly
            </p>
            <p className="text-sm lm:text-[18px] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%]">
              Our savings account helps you move your money with ease, offering
              security and successful transactions every single time
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/personal/account", { state: { section: "account" } })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <img
          data-aos="fade-right"
          src={Saver}
          alt="Saver"
          className="flex md:hidden w-[295px] h-[295px]"
        />
      </div>

      <div
        ref={currentRef}
        className="bg-[#F9FAFB] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[514px]">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium tracking-[0.25em] uppercase text-sm">
              Current Account
            </p>
            <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Enjoy simplified <br /> transactions daily
            </p>
            <p className="text-sm lm:text-[18px] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Manage your finances effortlessly with a current account. Enjoy
              unlimited transactions, seamless online banking, and quick access
              to funds on the go.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/personal/account", { state: { section: "account" } })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Milkshake}
            alt="Girl"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        ref={fixedRef}
        className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={
              "https://res.cloudinary.com/code-idea/image/upload/v1739057936/Frame_1171278628_lfnrcr.png"
            }
            alt="Power"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[580px]">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium tracking-[0.25em] uppercase text-sm">
              Fixed Deposits
            </p>
            <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Safe, secure and steadily rewarding
            </p>
            <p className="text-sm lm:text-[18px] font-grava font-[350] leading-[27px] text-center md:text-left tracking-[0.2%] w-[318px] lm:w-full">
              Grow your money with guaranteed returns. Our fixed deposits offer
              security, attractive interest rates, and flexible tenures for
              steady, risk-free earnings.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/personal/account", { state: { section: "account" } })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Learn More
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <img
          data-aos="fade-right"
          src={Power}
          alt="Power"
          className="flex md:hidden w-[295px] h-[295px]"
        />
      </div>

      <div
        ref={loanRef}
        className="bg-[#F9FAFB] flex flex-col py-[56px] px-5 lm:px-0 lm:py-[72px] items-center gap-10 lm:gap-[56px] w-full h-auto">
        <div className="flex gap-3 flex-col lm:w-[627px] mx-auto">
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#002244] font-[350] font-grava text-sm lg:text-[18px] leading-[27px] tracking-[0.2%]">
              Loans
            </p>
            <div className="w-[172px] rounded-[16px] h-[29px] bg-[#FFEFC0] flex flex-col items-center justify-center">
              <p className="font-grava text-xs text-[#546B82] uppercase leading-[12px]">
                to be available soon
              </p>
            </div>
          </div>
          <p className="font-medium font-grava text-[#002244] text-[28px] leading-[35px] lm:text-[48px] lm:leading-[60px] tracking-[0.2%] text-center">
            Empowering your dreams, every step of the way.
          </p>
        </div>

        <div data-aos="fade-left" className="flex lm:hidden">
          <img
            src={MoneyWoman}
            alt="Girl"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div
            data-aos="fade-right"
            className="flex flex-col items-center md:items-start gap-[32px] w-[250px] md:w-[350px] lm:w-[514px]">
            <div className="flex flex-col lm:flex-row items-center gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-medium text-base lm:text-[28px] leading-[35px] text-[#002244]">
                Personal Loans
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-medium text-base lm:text-[28px] whitespace-nowrap leading-[35px] text-[#002244]">
                Mortgage Loans
              </p>
            </div>
            <div className="flex flex-col lm:flex-row items-center gap-3">
              <img src={Check} alt="Check" className="" />
              <p className="font-grava font-medium text-base lm:text-[28px] leading-[35px] text-[#002244]">
                Auto Loans
              </p>
            </div>
            <button
              className="transition-all duration-500 ease-in-out bg-[#F2F4F7] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group  flex items-center justify-center"
              type="button"
              onClick={() =>
                navigate("/personal/account", { state: { section: "account" } })
              }>
              <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#98A2B3]">
                Coming Soon
              </p>
              <BsArrowRight
                size={100}
                className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#98A2B3] "
              />
            </button>
          </div>
          <div data-aos="fade-left" className="hidden lm:block">
            <img
              src={MoneyWoman}
              alt="Girl"
              className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${Tiles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ref={cardRef}
        className="bg-[#FFFAEB] py-[96px] gap-[40px] px-5 lm:px-[20%] lg:h-auto flex flex-col items-center justify-center lg:gap-[112px]" //[845px]
      >
        <div className="flex flex-col w-[296px] mx-auto gap-3 items-center">
          <p className="font-grava text-[#002244] font-medium text-[24px] leading-[30px] lm:text-[48px] lm:leading-[60px]">
            Tatum Cards
          </p>
          <p className="font-[350] font-grava text-[#334E69] text-sm leading-[20px] lm:text-[18px] lm:leading-[27px]">
            The perfect card for every moment
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-[56px]">
          <div
            className="flex flex-col gap-[32px] items-center w-[358px] cursor-pointer"
            onClick={() => handleClickCard("debit")}>
            <img
              src={Debit}
              alt="Debit"
              className={`${
                clickedCard === "debit" ? "" : "opacity-70"
              } rounded-[16px]`}
            />
            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center border border-[#002244]">
                <div
                  className={`${
                    clickedCard === "debit"
                      ? "bg-[#002244] rounded-full"
                      : "bg-transparent"
                  } w-6 h-6`}></div>
              </div>
              <p className="text-[#002244] font-grava font-medium">
                Debit cards
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-[32px] items-center w-[358px] cursor-pointer"
            onClick={() => handleClickCard("credit")}>
            <img
              src={Credit}
              alt="Credit"
              className={`${
                clickedCard === "credit" ? "" : "opacity-70"
              } rounded-[16px]`}
            />
            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center border border-[#002244]">
                <div
                  className={`${
                    clickedCard === "credit"
                      ? "bg-[#002244] rounded-full"
                      : "bg-transparent"
                  } w-6 h-6`}></div>
              </div>
              <p className="text-[#002244] font-grava font-medium">
                Credit cards
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-[32px] items-center w-[358px] cursor-pointer"
            onClick={() => handleClickCard("prepaid")}>
            <img
              src={Prepaid}
              alt="Prepaid"
              className={`${
                clickedCard === "prepaid" ? "" : "opacity-70"
              } rounded-[16px]`}
            />
            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center border border-[#002244]">
                <div
                  className={`${
                    clickedCard === "prepaid"
                      ? "bg-[#002244] rounded-full"
                      : "bg-transparent"
                  } w-6 h-6`}></div>
              </div>
              <p className="text-[#002244] font-grava font-medium">
                Prepaid cards
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lm:hidden w-full">
          <Slider {...settings}>
            <div className="slide-item slick-slide flex">
              <img
                src={BlackCard}
                alt="BlackCard"
                className="rounded-xl w-[50%] md:w-[100%]"
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src={GreyCard}
                alt="GreyCard"
                className="rounded-xl w-[50%] md:w-[100%]"
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src={SilverCard}
                alt="SilverCard"
                className="rounded-xl w-[50%] md:w-[100%]"
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src={YellowCard}
                alt="YellowCard"
                className="rounded-xl w-[50%] md:w-[100%]"
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src={WhiteCard}
                alt="WhiteCard"
                className="rounded-xl w-[50%] md:w-[100%]"
              />
            </div>
          </Slider>
        </div>

        <button
          className="transition-all duration-500 ease-in-out px-5 h-[44px] lg:h-[64px] flex items-center justify-center p-4 border-[2px] border-[#002244] rounded-tl-lg rounded-br-lg bg-[#002244] group hover:bg-[#fdf7e6]"
          onClick={() =>
            navigate("/digital", { state: { section: "digital" } })
          }>
          <p className="transition-colors duration-500 ease-in-out text-[#FFCC33] font-medium font-grava group-hover:text-[#002244] text-sm lg:text-base">
            Get Yours Today
          </p>
        </button>
      </div>

      <div
        ref={digitalRef}
        className="bg-[#F9FAFB] py-[56px] px-5 lm:px-0 lm:py-[72px] flex flex-col gap-[40px] lm:gap-[80px] items-center justify-center h-auto">
        <div className="flex flex-col items-center lm:w-[627px] gap-3">
          <p className="font-grava font-[350] text-[18px] leading-[27px] text-[#002244] tracking-[0.2%]">
            Digital Banking
          </p>
          <p className="font-grava text-[24px] lm:text-[48px] text-center font-medium leading-[30px] lm:leading-[60px] tracking-[0.2%] text-[#002244]">
            Everyday banking, anytime, anywhere.
          </p>
        </div>
        <div className="flex flex-col gap-[72px] items-center w-full">
          <div className="flex flex-col w-full lm:flex-row items-center justify-center gap-5">
            <div className="bg-[#fff] flex flex-col items-center justify-center gap-[32px] w-full lm:w-[429px] h-[225px] rounded-tl-2xl rounded-br-2xl">
              <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                <img
                  src={Internet}
                  alt="Internet"
                  className="w-[29px] h-[36px]"
                />
              </div>
              <p className="font-grava text-[#002244] text-base lm:text-[20px] font-medium leading-[25px] tracking-[0.28px]">
                Internet Banking
              </p>
            </div>
            <div className="bg-[#fff] flex flex-col items-center justify-center gap-[32px] w-full lm:w-[429px] h-[225px] rounded-tl-2xl rounded-br-2xl">
              <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                <img src={Mobile} alt="Mobile" className="w-[29px] h-[36px]" />
              </div>
              <p className="font-grava text-[#002244] text-base lm:text-[20px] font-medium leading-[25px] tracking-[0.28px]">
                Tatum Mobile App
              </p>
            </div>
            <div className="bg-[#fff] flex flex-col items-center justify-center gap-[32px] w-full lm:w-[429px] h-[225px] rounded-tl-2xl rounded-br-2xl">
              <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                <img src={Ussd} alt="Ussd" className="w-[29px] h-[36px]" />
              </div>
              <p className="font-grava text-[#002244] text-base lm:text-[20px] font-medium leading-[25px] tracking-[0.28px]">
                USSD
              </p>
            </div>
          </div>

          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[63px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/digital", { state: { section: "digital" } })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started Now
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
      </div>

      <div className="bg-[#fff] px-5 lm:px-[56px] py-[56px] lm:py-[120px] flex flex-col">
        <div
          style={{
            backgroundImage: `url(${Layer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[671px] lm:h-[440px] rounded-xl">
          <div
            className="w-full h-full rounded-xl px-5 lm:px-[56px] py-[32px] lm:py-[64px] flex flex-col lm:flex-row justify-between items-center"
            style={{
              backgroundColor: "rgb(244 245 246 / 95%)", // Brighter background with slight transparency
              zIndex: 1, // Ensures content stays above background
            }}>
            <div className="flex flex-col lm:w-[615px] lm:h-[312px] gap-[20px]">
              <p className="font-grava font-medium text-[20px] leading-[20px] lm:text-[32px] lm:leading-[48px] tracking-[0.2%]">
                At Tatum Bank, we are committed to providing you personalized
                banking, tailored to your needs and lifestyle.
              </p>
              <p className="font-grava font-[300] text-sm lm:text-[18px] leading-[27px] lm:w-[389px] tracking-[0.2%]">
                Ready to Experience Banking That Truly Keeps You Smiling?
              </p>
              <button
                className={`animate__animated animate__slow animate__fadeInUp transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 w-fit rounded-tl-lg rounded-br-lg h-[58px] gap-2 flex items-center justify-center`}
                type="button"
                onClick={() =>
                  navigate("/personal/account", {
                    state: {
                      section: "account",
                    },
                  })
                }>
                <p className="transition-colors duration-500 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                  Open an Account
                </p>
                <BsArrowRight
                  size={100}
                  className="w-5 h-5 mt-[-2px] text-[#FFCC33] group-hover:text-[#002244]"
                />
              </button>
            </div>
            <div className="lm:w-[468px] lm:h-[312px]">
              <img src={Collab} alt="Collab" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
