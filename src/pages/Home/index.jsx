import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as LandingCarousel } from "react-responsive-carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import { Slider as Slide } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Family from "../../assets/png/family.png";
import Phone from "../../assets/png/phone.png";
import Smile from "../../assets/png/smile.png";
import Teach from "../../assets/png/teach.png";
import Boy from "../../assets/png/boy.png";
import Girl from "../../assets/png/girl.png";
import Farmer from "../../assets/png/farmer.png";
import SchoolGirl from "../../assets/png/school_girl.png";
import Tiles from "../../assets/png/tile.png";
import BlueCard from "../../assets/png/blue_card.png";
import YellowCard from "../../assets/png/yellow_card.png";
import BlackCard from "../../assets/png/black_card.png";
import WhiteCard from "../../assets/png/white_card.png";
import Staff from "../../assets/png/staff.png";
import Business from "../../assets/png/business.png";
import Ceremony from "../../assets/png/ceremony.png";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/svg/ndic.svg";
import Card from "../../assets/svg/credit_card.svg";
import ATM from "../../assets/svg/atm.svg";
import Loan from "../../assets/svg/loan.svg";
import FX from "../../assets/svg/fx.svg";
import USSD from "../../assets/svg/ussd.svg";
import Online from "../../assets/svg/online.svg";

import "./css/CardEffect.css";
import "./css/SliderStyles.css";
import "./css/CardScroll.css";
import "./css/Dot.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(500000); // Initial loan amount
  const [repay, setRepay] = useState(3); // Initial repay amount
  const [interest, setInterest] = useState(4); // Initial Interest
  const [activeCard, setActiveCard] = useState(false);

  const formatter = new Intl.NumberFormat("en-US");

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
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

  const handleLoanSliderChange = (value) => {
    setLoanAmount(value);
  };
  const handleRepaySliderChange = (value) => {
    setRepay(value);
  };
  const handleInterestSliderChange = (value) => {
    setInterest(value);
  };

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleCardEnter = () => {
    setActiveCard(true);
  };

  const handleCardLeave = () => {
    setActiveCard(false);
  };

  const isTab = window.innerWidth < 1028;
  const isMobile = window.innerWidth < 768;

  return (
    <div className="w-full pt-[40px]  lg:pt-[80px]">
      <div className="w-full overflow-x-hidden">
        <LandingCarousel
          // dynamicHeight={true}
          interval={5000}
          showArrows={false}
          autoPlay={true} //   {false}
          showIndicators={false} // {true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          onChange={handleSlideChange}>
          <div className="h-full w-full outline-none">
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
              className="h-[374px] lg:h-[694px] pt-[40px] lg:pt-0 px-5 lg:px-[70px] relative w-full flex lg:flex-row items-center gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px]">
                <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 0
                        ? "animate__animated animate__fadeInUp"
                        : " "
                    } lg:w-[450px] font-grava text-[#002244] text-left text-[32px] lg:text-[75px] font-bold leading-[40px] lg:leading-[78px]`}>
                    Your Smile, <br />{" "}
                    <span className="font-medium ">Our Priority</span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 0
                        ? "animate__animated  animate__fadeInUp animate__slow"
                        : ""
                    } text-sm lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Secure banking, low-interest loans, and profitable
                    investments for everyone.
                  </p>
                  <div className="flex items-center mt-[32px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 0
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } transition-all duration-300 ease-in-out  hover:border hover:border-[#002244] w-[216px] lg:w-[276px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center bg-[#002244] group hover:bg-[#FFCC33]`}
                      type="button">
                      <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Open an account today
                      </p>
                      <FaArrowRightLong className="transition-colors duration-300 ease-in-out w-5 h-5 text-[#FFCC33] group-hover:text-[#002244]" />
                    </button>
                    <button
                      className={`${
                        activeIndex === 0
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } cursor-pointer outline-none border border-x-0 border-t-0`}
                      type="button">
                      <p className="font-grava text-sm whitespace-nowrap lg:text-base text-[#002244] font-medium">
                        Learn more
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex items-start absolute -bottom-36">
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
                      className="inline-block mt-1 lg:mt-0 h-[16px] w-[21px] md:h-[28px]"
                    />
                  </p>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1736507865/file_28_1_cu7s3e.png"
                alt="Family"
                style={{
                  display: isTab ? "none" : "flex",
                }}
                className={`${
                  activeIndex === 0 ? "animate__animated animate__zoomIn" : ""
                } relative right-44 h-[750px]`}
              />
            </div>
          </div>

          <div className="h-full w-full outline-none">
            <div
              style={{
                backgroundImage: `url(${
                  isMobile
                    ? "https://res.cloudinary.com/code-idea/image/upload/v1736507687/Slide_rn3tcj.png"
                    : ""
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="bg-[#FFCC33] h-[374px] lg:h-[694px]  pt-[40px] px-5 lg:pt-0 lg:px-[70px] w-full flex lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px]">
                <div className="flex lg:w-[692px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 1
                        ? "animate__animated animate__fadeInUp"
                        : " "
                    } font-grava text-[#002244] text-left text-[32px] lg:text-[75px] font-medium leading-[40px] lg:leading-[78px]`}>
                    Say Hello To Banking{" "}
                    <span className="font-bold ">On The Go</span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 1
                        ? "animate__animated animate__fadeInUp animate__slow "
                        : ""
                    } text-sm lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                    // animate__delay-1s
                  >
                    Your money, your way. Experience banking that fits your
                    lifestyle, not the other way around.
                  </p>
                  <div className="flex items-center mt-[32px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 1
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[276px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                      type="button"
                      //animate__delay-2s
                    >
                      <p className="transition-colors duration-300 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Explore our offerings
                      </p>
                      <FaArrowRightLong className="w-5 h-5  text-[#FFCC33] group-hover:text-[#002244]" />
                    </button>
                    <button
                      className={`${
                        activeIndex === 1
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } hidden lg:flex cursor-pointer outline-none border border-x-0 border-t-0`}
                      type="button"
                      //  animate__delay-2s
                    >
                      <p className="font-grava text-base text-[#002244] font-medium">
                        Download App
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex items-start absolute -bottom-36">
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
                      className="inline-block mt-1 lg:mt-0 h-[16px] w-[21px] md:h-[28px]"
                    />
                  </p>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1736507834/5807348_1_ubm6ct.png"
                alt="Phone"
                style={{
                  display: isTab ? "none" : "flex",
                }}
                className={`${
                  activeIndex === 1
                    ? "animate__animated animate__zoomIn  animate__slow"
                    : ""
                } object-cover h-[1030px] relative right-[33rem]`}
                // animate__delay-2s
              />
            </div>
          </div>

          <div className="h-full w-full outline-none">
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
              className="bg-[#FFCC33] h-[374px] lg:h-[694px] pt-[40px] px-5 lg:pt-0 lg:px-[70px] w-full flex lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start z-30 gap-[64px] relative lg:gap-[113px]">
                <div className="flex lg:w-[786px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__fadeInUp"
                        : " "
                    } font-grava text-[#002244] font-medium text-left text-[32px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}>
                    Smart Banking for Your{" "}
                    <span className="font-bold ">Big Ideas.</span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__fadeInUp animate__slow"
                        : ""
                    } text-sm lg:text-[25px] lg:w-[623px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Instant access to the funds, insights, and support you need
                    to take your business further.
                  </p>
                  <div className="flex items-center mt-[12px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 2
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[300px] lg:w-[363px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                      type="button">
                      <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Get started with SME Banking
                      </p>
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#FFCC33] group-hover:text-[#002244]" />
                    </button>
                  </div>
                </div>
                <div className="flex items-start absolute -bottom-36">
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
                      className="inline-block mt-1 lg:mt-0 h-[16px] w-[21px] md:h-[28px]"
                    />
                  </p>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/file_34_1_owpqgw.png"
                alt="Teach"
                style={{
                  display: isTab ? "none" : "flex",
                }}
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__zoomIn animate__slow"
                    : ""
                } h-[1000px] top-40 right-2/4 relative`}
              />
            </div>
          </div>

          <div className="h-full w-full outline-none">
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
              className="h-[374px] lg:h-[694px] pt-[40px] px-5 lg:pt-0 lg:px-[70px] w-full flex lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start z-30 relative gap-[64px] lg:gap-[113px]">
                <div className="flex lg:w-[786px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 3
                        ? "animate__animated animate__fadeInUp"
                        : " "
                    } font-grava text-[#002244] font-bold text-left text-[32px] lg:text-[75px] leading-[40px] lg:leading-[78px]`}>
                    Your Wealth, <br />{" "}
                    <span className="font-medium "> Expertly Managed </span>
                  </p>
                  <p
                    className={`lg:w-[616px] ${
                      activeIndex === 3
                        ? "animate__animated animate__fadeInUp animate__slow"
                        : ""
                    } text-sm lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Access high-end services and exclusive investments, all in
                    one seamless experience.
                  </p>
                  <div className="flex items-center mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 3
                          ? "animate__animated animate__slow animate__fadeInUp"
                          : ""
                      } transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border hover:border-[#002244] w-[264px] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                      type="button">
                      <p className="font-medium transition-colors duration-300 ease-in-out text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Get exclusive access
                      </p>
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#FFCC33] group-hover:text-[#002244]" />
                    </button>
                  </div>
                </div>
                <div className="flex items-start absolute -bottom-36">
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
                      className="inline-block mt-1 lg:mt-0 h-[16px] w-[21px] md:h-[28px]"
                    />
                  </p>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/wmremovxyz.png"
                alt="Smile"
                style={{
                  display: isTab ? "none" : "flex",
                }}
                className={`${
                  activeIndex === 3
                    ? "animate__animated animate__zoomIn animate__slow"
                    : ""
                }  h-[1000px] top-20 right-[25rem] relative`}
              />
            </div>
          </div>
        </LandingCarousel>
      </div>
      <div className="bg-[#fff] h-[649px] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right">
          <img
            src={Boy}
            alt="Boy"
            className="hidden md:flex w-[295px] h-[295px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110 "
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[400px] lg:w-[498px]"
          data-aos="fade-left">
          <p
            className="font-grava text-[#334E69] font-medium uppercase text-sm"
            style={{ letterSpacing: "25%" }}>
            Personal Banking
          </p>
          <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[22px] md:text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
            Interest-ing savings account to make your goals achievable.
          </p>
          <button
            className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[141px] lg:w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get started
            </p>
            <FaArrowRightLong className="transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]" />
          </button>
        </div>
        <img
          src={Boy}
          alt="Boy"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>
      <div className="bg-[#F9FAFB] h-[649px] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[400px] lg:w-[498px]"
          data-aos="fade-right">
          <p
            className="font-grava text-[#334E69] font-medium uppercase text-sm"
            style={{ letterSpacing: "25%" }}>
            CORPORATE Banking
          </p>
          <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[22px] md:text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
            Streamlined services for complex business needs.
          </p>
          <button
            className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[141px] lg:w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get started
            </p>
            <FaArrowRightLong className="transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]" />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={Girl}
            alt="Girl"
            className="w-[295px] h-[295px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <div className="bg-[#fff] h-[649px] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right">
          <img
            src={Farmer}
            alt="Farmer"
            className="hidden md:flex w-[295px] h-[295px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[400px] lg:w-[498px]"
          data-aos="fade-left">
          <p
            className="font-grava text-[#334E69] font-medium uppercase text-sm"
            style={{ letterSpacing: "25%" }}>
            SME Banking
          </p>
          <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[22px] md:text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
            Empowering small businesses with loans, tools, and expert support.
          </p>
          <button
            className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[141px] lg:w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get started
            </p>
            <FaArrowRightLong className="transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]" />
          </button>
        </div>
        <img
          src={Farmer}
          alt="Farmer"
          className="flex md:hidden w-[295px] h-[295px]"
          data-aos="fade-right"
        />
      </div>
      <div className="bg-[#F9FAFB] h-[649px] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[400px] lg:w-[498px]"
          data-aos="fade-right">
          <p
            className="font-grava text-[#334E69] font-medium uppercase text-sm"
            style={{ letterSpacing: "25%" }}>
            PRIVATE Banking
          </p>
          <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[22px] md:text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
            Exclusive wealth management for discerning clients.
          </p>
          <button
            className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[141px] lg:w-[176px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get started
            </p>
            <FaArrowRightLong className="transition-colors duration-300 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]" />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={SchoolGirl}
            alt="SchoolGirl"
            className="w-[295px] h-[295px] lg:w-[571px] lg:h-[585px] transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Tiles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[#FFFAEB] h-[627px] md:h-[900px] lg:h-[1050px] flex flex-col items-center justify-center gap-[20px] lg:gap-[76px]">
        <div className="w-[336px] lg:w-[697px] flex flex-col items-center gap-3">
          <p className="text-[#002244] font-medium text-[24px] md:text-[30px] lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[60px] text-center">
            Rewards and Benefits, Every Time You Spend.
          </p>
          <p className="text-sm lg:text-xl text-[#334E69] font-grava leading-[20px] lg:leading-[27px] text-center">
            Tatum cards keep up the pace, so your money is with you
            everywhere you go.
          </p>
        </div>
        <div className="lg:flex items-center relative gap-4 hidden group transition">
          <div
            className="card-wrapper group-hover:gap-6 lg:justify-end overflow-y-hidden lg:overflow-x-hidden"
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}>
            <img
              src={YellowCard}
              alt="YellowCard"
              className={`${
                activeCard ? "lg:w-[25%]" : "lg:relative  lg:left-48"
              } card w-[50%] rounded-bl-xl rounded-br-xl  lg:h-[500px] lg:w-[25%] `}
            />
            <img
              src={BlueCard}
              alt="BlueCard"
              className={`${
                activeCard
                  ? "lg:w-[25%]"
                  : "lg:relative  z-10 lg:relative lg:right-0"
              } card rounded-bl-xl rounded-br-xl  w-[50%] lg:h-[500px] lg:w-[25%]`}
            />
            <img
              src={WhiteCard}
              alt="WhiteCard"
              className={`${
                activeCard
                  ? "lg:w-[25%]"
                  : "lg:relative z-20 lg:relative lg:right-36"
              } card rounded-bl-xl rounded-br-xl  w-[50%] lg:h-[500px] lg:w-[25%] `}
            />
            <img
              src={BlackCard}
              alt="BlackCard"
              className={`${
                activeCard
                  ? "lg:w-[25%]"
                  : "lg:relative z-30 lg:relative lg:right-72"
              } card rounded-bl-xl rounded-br-xl w-[50%] lg:h-[500px] lg:w-[25%]`}
            />
          </div>
        </div>
        <div className="lg:hidden w-full">
          <Slider {...settings}>
            <div className="slide-item">
              <img src={YellowCard} alt="YellowCard" className="w-[234px]" />
            </div>
            <div className="slide-item">
              <img src={BlueCard} alt="BlueCard" className="w-[234px]" />
            </div>
            <div className="slide-item">
              <img src={WhiteCard} alt="WhiteCard" className="w-[234px]" />
            </div>
            <div className="slide-item">
              <img src={BlackCard} alt="BlackCard" className="w-[234px]" />
            </div>
          </Slider>
        </div>
        <button className="transition-all duration-300 ease-in-out w-[246px] h-[64px] p-4 border border-[#002244] rounded-tr-lg rounded-bl-lg group hover:bg-[#002244]">
          <p className="transition-colors duration-300 ease-in-out text-[#002244] font-medium font-grava group-hover:text-[#FFCC33] text-base">
            Choose your Tatum Card
          </p>
        </button>
      </div>
      <div className="bg-[#F9FAFB] flex items-center flex-col w-full px-5 py-[56px] gap-[40px] lg:h-[877px] lg:pt-[72px] lg:pb-[112px] lg:px-[56px]">
        <div className="flex flex-col items-center w-full lg:w-[653px] h-[99px] gap-3">
          <p className="font-grava text-[#002244] text-sm lg:text-[18px]">
            Loan Calculator
          </p>
          <p className="font-grava text-[#002244] text-[24px] lg:text-[48px] font-medium ">
            Instant loan, instant benefits
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="bg-[#FFFFFF] rounded-lg flex flex-col py-[32px] px-5 gap-[40px] mx-auto w-auto lg:w-[728px]">
            <div className="flex items-center gap-3">
              <div className="transition ease-in-out delay-150 duration-300 w-[105px] md:w-[113px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center rounded-tl-lg rounded-br-lg bg-[#FFCC33]">
                <p className="text-[#002244] font-medium font-grava text-sm md:text-base">
                  Personal
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-300 w-[88px] md:w-[93px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
                <p className="text-[#002244] font-medium font-grava text-sm md:text-base">
                  Home
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-300 w-[75px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
                <p className="text-[#002244] font-medium font-grava text-sm md:text-base">
                  Car
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#00224] font-grava text-base lg:text-[18px]">
                  Loan amount
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  NGN {loanAmount.toLocaleString()}
                </p>
              </div>
              <Slide
                defaultValue={500000}
                min={10000}
                max={1500000}
                step={10000}
                onChange={handleLoanSliderChange}
                trackStyle={{
                  backgroundColor: "#ffcc33",
                  height: "8px",
                  borderRadius: "8px",
                }}
                className="custom-slider"
              />
              <div className="flex items-center justify-between">
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  NGN 10,000
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  NGN 1,500,000
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#00224] font-grava text-base lg:text-[18px]">
                  You want to re-pay it over
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  {repay.toLocaleString()} Months
                </p>
              </div>
              <Slide
                defaultValue={3}
                min={1}
                max={48}
                step={2}
                onChange={handleRepaySliderChange}
                trackStyle={{
                  backgroundColor: "#ffcc33",
                  height: "8px",
                  borderRadius: "8px",
                }}
                className="custom-slider"
              />
              <div className="flex items-center justify-between">
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  3 Months
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  48 Months
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#00224] font-grava text-base lg:text-[18px]">
                  Interest Rate
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  {interest.toLocaleString()}%
                </p>
              </div>
              <Slide
                defaultValue={4}
                min={1}
                max={24}
                step={2}
                onChange={handleInterestSliderChange}
                trackStyle={{
                  backgroundColor: "#ffcc33",
                  height: "8px",
                  borderRadius: "8px",
                }}
                className="custom-slider"
              />
              <div className="flex items-center justify-between">
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  4%
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#546B82]">
                  24%
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:w-[580px]">
            <div className="lg:w-full bg-[#fff] w-auto rounded-lg h-[160px] lg:h-[212px] px-5 lg:px-[28px] flex gap-4 lg:gap-0 lg:justify-between items-center">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[#00224] font-grava text-base lg:text-[18px]">
                  Monthly Payments
                </p>
                <p className="text-base lg:text-[18px] font-grava text-center text-[#546B82]">
                  NGN 50,000
                </p>
              </div>
              <div className="w-[1px] h-[120px] bg-[#D0D5DD]"></div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[#00224] font-grava text-base lg:text-[18px]">
                  Total Payments
                </p>
                <p className="text-base lg:text-[18px] font-grava text-center text-[#546B82]">
                  NGN 50,000
                </p>
              </div>
            </div>
            <div className="w-full bg-[#fff] rounded-lg gap-[56px] py-[32px] h-[300px] px-4 lg:px-[28px] flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 ">
                <button className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[300px] group hover:border hover:bg-[#fff] hover:border-[#002244] lg:w-[532px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-br-lg">
                  <p className="transition-colors duration-300 ease-in-out font-grava text-[#002244] text-[18px] font-medium">
                    Apply now
                  </p>
                </button>
                <p className="text-base text-[#002244] font-grava cursor-pointer">
                  Check eligibility
                </p>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="lg:w-[532px] w-full h-[1px] bg-[#E6E9EC]"></div>
                <p className="font-grava text-[#546B82] text-center text-sm">
                  Terms & conditions applied. Actual installments may differ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#FFFFFF] flex flex-col items-center px-5 lg:px-[55px] py-[72px] lg:h-[996px] gap-[60px]"
        data-aos="fade-up">
        <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[434px]">
          <p className="font-medium text-[#002244] font-grava text-[24px] lg:text-[48px] ">
            Tatum Insights.
          </p>
          <p className="text-sm lg:text-[18px] text-center text-[#334E69] font-grava leading-[20px] lg:leading-[27px]">
            Stay updated with our press releases, financial insights, and
            resource highlights
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col  lg:w-[429px] gap-3 lg:gap-6">
            <img src={Staff} alt="Staff" className="" />
            <div className="flex items-center justify-between">
              <div className="bg-[#F2F4F7] w-[108px] rounded-lg p-2">
                <p className="font-grava text-[#002244] text-sm">
                  Press release
                </p>
              </div>
              <p className="font-medium text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-medium text-[#001F3E] text-xl font-grava">
              Tatum Bank Launches in February 2024, Redefining Digital Banking
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Tatum Bank is set to launch this February, offering a fresh
              approach to traditional banking with digital tools ...
            </p>
            <p className="text-[#546B82] font-grava cursor-pointer text-sm underline">
              Learn more
            </p>
          </div>
          <div className="flex flex-col lg:w-[429px] gap-3 lg:gap-6">
            <img src={Business} alt="Business" className="" />
            <div className="flex items-center justify-between">
              <div className="bg-[#F2F4F7] w-[54px] rounded-lg p-2">
                <p className="font-grava text-[#002244] text-sm">Blog</p>
              </div>
              <p className="font-medium text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-medium text-[#001F3E] text-xl font-grava">
              Tips for Growing Your Business in a Digital World
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Actionable insights and advice tailored for the growth of SMEs
            </p>
            <p className="text-[#546B82] font-grava cursor-pointer text-sm underline">
              Learn more
            </p>
          </div>
          <div className="flex flex-col lg:w-[429px] gap-3 lg:gap-6">
            <img src={Ceremony} alt="Ceremony" className="" />
            <div className="flex items-center justify-between">
              <div className="bg-[#F2F4F7] w-[66px] rounded-lg p-2">
                <p className="font-grava text-[#002244] text-sm">Media</p>
              </div>
              <p className="font-medium text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-medium text-[#001F3E] text-xl font-grava">
              Tatum Bank celebrates grand opening with ribbon-cutting ceremony
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Tatum Bank officially opens its doors with a new branch,
              furthering financing inclusion in Eti Osa. Check out the...
            </p>
            <p className="text-[#546B82] font-grava cursor-pointer text-sm underline">
              See photos
            </p>
          </div>
        </div>
        <button
          className="transition-all duration-300 ease-in-out bg-[#FFCC33] w-[257px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center"
          type="button">
          <p className="transition-colors duration-300 ease-in-out font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]">
            Explore Our Resource Center
          </p>
        </button>
      </div>

      <div
        className="bg-[#F9FAFB] flex flex-col py-[80px] gap-[32px] items-center px-5 lg:px-[88px]"
        data-aos="fade-up">
        <p className="font-medium text-[24px] lg:text-[48px] font-grava w-[300px] lg:w-full text-center text-[#002244]">
          Find what you need instantly.
        </p>
        <div className="flex w-full overflow-x-auto space-x-5 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* <div className='flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-[24px] gap-[40px] w-[80%] sm:w-[70%] md:w-auto'>
            <img src={Card} alt='Card' className='w-[43px] h-[35px]' />
            <div className='flex flex-col gap-3'>
                <p className='text-lg font-medium font-grava text-[002244]'>Debit/Credit Cards</p>
                <p className='text-base font-grava font-[350] text-[#002244]'>
                    Enjoy a card that never flops. Our Debit and credit cards are reliable and secure.
                </p>
            </div>
            <button
                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#fff] w-[274px] lg:w-[366px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                type='button'
            >
                <p className='font-medium text-base font-grava text-[#002244]'>
                    Learn more
                </p>
            </button>
        </div> */}
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-lg gap-[40px] w-[100%] sm:w-[80%] md:w-auto ">
            <img src={Card} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[002244]">
                Debit/Credit Cards
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[356px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Learn more
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto ">
            <img src={ATM} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                ATM Branch Locator
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                Simply enter your location and find our closest branch on the
                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[340px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Check the nearest ATM branch
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col p-[26px] bg-[#fff] h-[400px] lg:h-[356px] relative rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={Online} alt="Online" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[340px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Download our mobile app
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={USSD} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                No internet? No problem. Access your account, check balances,
                and perform essential transactions using our simple *911#. It is
                quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[340px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Dial *911#
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={Loan} alt="Loan" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Loan calculator
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Easily calculate loan eligibility according to your current
                salary.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[340px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Try our loan calculator
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={FX} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                FX Market Rate
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Stay updated with real-time FX rates and make smarter, timely
                decisions in the global market.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[340px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Check our FX rates
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
