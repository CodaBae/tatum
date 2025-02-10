import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as LandingCarousel } from "react-responsive-carousel";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Slider as Slide } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/pagination";

import Family from "../../assets/png/family.png";
import Phone from "../../assets/png/phone.png";
import Smile from "../../assets/png/smile.png";
import Teach from "../../assets/png/teach.png";
import Boy from "../../assets/png/boy.png";
import Girl from "../../assets/png/girl.png";
import Farmer from "../../assets/png/farmer.png";
import SchoolGirl from "../../assets/png/school_girl.png";
import Tiles from "../../assets/png/tile.png";
import GreyCard from "../../assets/png/grey_card.png";
import SilverCard from "../../assets/png/silver_card.png";
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
import Arrow from "../../assets/svg/arrow_forward.svg";

import "./css/CardEffect.css";
import "./css/SliderStyles.css";
import "./css/CardScroll.css";
import "./css/Dot.css";
import "./css/SwiperSlide.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(500000); // Initial loan amount
  const [repay, setRepay] = useState(3); // Initial repay amount
  const [interest, setInterest] = useState(4); // Initial Interest

  const formatter = new Intl.NumberFormat("en-US");

  const navigate = useNavigate();

  const homeRef = useRef(null);
  const { state } = useLocation();

//   useEffect(() => {
//     if (state?.section === "home" && homeRef.current) {
//       homeRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [state]);

  const cardImages = [BlackCard, GreyCard, SilverCard, YellowCard, WhiteCard];

  const carouselRef = useRef(null);
  const angleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  // Auto scroll
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      angleRef.current += 0.5; // Adjust auto-scroll speed
      if (carouselRef.current) {
        carouselRef.current.style.transition = "transform 0.3s ease";
        carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }
    }, 30); // Adjust interval for speed

    return () => clearInterval(autoScrollInterval); // Cleanup on component unmount
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX || e.touches[0].clientX;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove, { passive: false });
    document.addEventListener("touchend", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();

    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    angleRef.current += deltaX * 0.5; // Adjust rotation sensitivity

    startXRef.current = currentX;

    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      carouselRef.current.style.transition = "none";
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleMouseMove);
    document.removeEventListener("touchend", handleMouseUp);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    angleRef.current += e.deltaY * 0.5; // Adjust scroll sensitivity

    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.3s ease";
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
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

  const fadeAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    let slideStyle = {
      position: "absolute",
      display: "block",
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
      prevStyle: { ...slideStyle },
    };
  };

  return (
    <div
      ref={homeRef}
      className="w-full pt-[40px]  lg:pt-[80px] overflow-hidden">
      <div className="w-full ">
        <LandingCarousel
          interval={4000}
          showArrows={false}
          // autoPlay={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          onChange={handleSlideChange}
          animationHandler={fadeAnimationHandler} // Use the custom fade animation
          transitionTime={500}
          swipeable={false} // Disable swiping for fade animation
          stopOnHover={false}>
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
              className="h-auto lg:h-[91vh] pt-[40px]  px-5 lg:px-[70px] relative w-full flex flex-col lg:flex-row items-center gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-10%]">
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
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    } md:w-[265px] lg:w-[530px] font-[300] text-sm font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Secure banking, low-interest loans, and profitable
                    investments for everyone.
                  </p>
                  <div className="flex items-center mt-[32px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 0
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } transition-all duration-500 ease-in-out hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center bg-[#002244] group hover:bg-[#FFCC33] p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }>
                      <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Open an Account
                      </p>
                      <BsArrowRight
                        size={100}
                        className="mt-[1px] transition-colors duration-500 ease-in-out w-5 h-5 text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>

                    <button
                      className={`${
                        activeIndex === 0
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } transition hover:border-b-0 cursor-pointer outline-none border border-x-0 border-t-0`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }>
                      <p className="font-grava text-sm whitespace-nowrap lg:text-base text-[#002244] font-medium">
                        Learn More
                      </p>
                    </button>
                  </div>
                </div>
                <div className="hidden lm:flex items-start absolute lg:bottom-[-65%]">
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
                // style={{
                //     display: isMobile ? "none" : "flex"
                // }}

                className={`${
                  activeIndex === 0
                    ? "animate__animated animate__fadeInRight"
                    : ""
                } relative -right-20 md:right-24  bottom-0 lg:right-44  lg:h-[750px]`}
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
              className="bg-[#FFCC33] h-auto lg:h-[91vh]  pt-[40px] px-5 lg:px-[70px] w-full flex flex-col lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-10%]">
                {" "}
                <div className="flex md:w-[350px] lm:w-[692px] flex-col items-start gap-2 lg:gap-5">
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
                        ? "animate__animated animate__fadeInUp animate__delay-1s "
                        : ""
                    } font-[350] font-grava text-sm lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}
                    // animate__delay-1s
                  >
                    Your money, your way. Experience banking that fits your
                    lifestyle, not the other way around.
                  </p>
                  <div className="flex items-center mt-[32px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 1
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }>
                      <p className="transition-colors duration-500 ease-in-out font-medium text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Explore Our Offerings
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>

                    <button
                      className={`${
                        activeIndex === 1
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } hidden transition hover:border-b-0 lg:flex cursor-pointer outline-none border border-x-0 border-t-0`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }>
                      <p className="font-grava text-base text-[#002244] font-medium">
                        Download App
                      </p>
                    </button>
                  </div>
                </div>
                <div className="hidden lm:flex items-start absolute lg:bottom-[-65%]">
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
                // style={{
                //     display: isMobile ? "none" : "flex"
                // }}
                className={`${
                  activeIndex === 1
                    ? "animate__animated animate__zoomIn   animate__slow"
                    : ""
                } object-cover   md:right-36 lm:right-[20rem] lm:h-[550px] lg:h-[1030px] relative lg:right-[33rem]`}
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
              className="bg-[#FFCC33] h-auto lg:h-[91vh] pt-[40px] px-5  lg:px-[70px] w-full flex flex-col lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-10%]">
                {" "}
                <div className="flex lm:w-[786px] flex-col items-start gap-2 lg:gap-5">
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
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    } md:w-[350px] font-[350] font-grava text-sm lg:text-[25px] lg:w-[623px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Instant access to the funds, insights, and support you need
                    to take your business further.
                  </p>
                  <div className="flex items-center mt-[12px] lg:mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 2
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/business", {
                          state: {
                            section: "business",
                          },
                        })
                      }>
                      <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Get Started with Business Banking
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>
                  </div>
                </div>
                <div className="hidden lm:flex items-start absolute lg:bottom-[-65%]">
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
                // style={{
                //     display: isMobile ? "none" : "flex"
                // }}
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__fadeInRight animate__slow"
                    : ""
                } top-6 lg:top-[10] -right-14 md:h-[500px] md:right-56 md:top-16 lg:h-[1000px] lg:top-40 lm:right-[24rem] lg:right-2/4 relative`}
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
              className="h-auto lg:h-[91vh] pt-[40px] px-5  lg:px-[70px] w-full flex flex-col lg:flex-row items-center relative gap-0">
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-10%]">
                {" "}
                <div className="flex lm:w-[786px] flex-col items-start gap-2 lg:gap-5">
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
                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                        : ""
                    } md:w-[350px] font-[350] font-grava text-sm lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34px]`}>
                    Access high-end services and exclusive investments, all in
                    one seamless experience.
                  </p>
                  <div className="flex items-center mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 3
                          ? "animate__animated animate__fadeInUp animate__delay-2s"
                          : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }>
                      <p className="font-medium transition-colors duration-500 ease-in-out text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        Get exclusive access
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>
                  </div>
                </div>
                <div className="hidden lm:flex items-start absolute lg:bottom-[-65%]">
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
                // style={{
                //     display: isMobile ? "none" : "flex"
                // }}
                className={`${
                  activeIndex === 3
                    ? "animate__animated animate__fadeInRight animate__slow"
                    : ""
                }  md:right-[8rem] lm:right-[14rem]  lg:h-[1000px] top-5 md:top-10 lg:top-20 lg:right-[25rem] relative`}
              />
            </div>
          </div>
        </LandingCarousel>
      </div>

      <div className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block ">
          <img
            src={Boy}
            alt="Boy"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium tracking-[0.25em] uppercase text-sm">
              Personal Banking
            </p>
            <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Interest-ing savings account to make your goals achievable.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/personal", {
                state: {
                  section: "personal",
                },
              })
            }>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33] "
            />
          </button>
        </div>
        <img
          data-aos="fade-right"
          src={Boy}
          alt="Boy"
          className="flex md:hidden w-[295px] h-[295px]"
        />
      </div>

      <div className="bg-[#F9FAFB] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[88px] lg:pr-[110px] lg:pl-[86px]">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium uppercase tracking-[0.25em] text-sm">
              CORPORATE Banking
            </p>
            <p className="font-medium w-[296px] lm:w-full text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Streamlined services for complex business needs.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate("/corporate", {
                state: {
                  section: "corporate",
                },
              })
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
            src={Girl}
            alt="Girl"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Farmer}
            alt="Farmer"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]"
          data-aos="fade-left">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium uppercase tracking-[0.25em] text-sm">
              Business Banking
            </p>
            <p className="font-medium w-[298px] lm:w-full text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Empowering small businesses with loans, tools, and expert support.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate("/business", {
                state: {
                  section: "business",
                },
              });
            }}>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
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
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]"
          data-aos="fade-right">
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] font-medium uppercase tracking-[0.25em] text-sm">
              PRIVATE Banking
            </p>
            <p className="font-medium text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Exclusive wealth management for discerning clients.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate("/private", {
                state: {
                  section: "private",
                },
              });
            }}>
            <p className="transition-colors duration-500 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#FFCC33]">
              Get Started
            </p>
            <BsArrowRight
              size={100}
              className="mt-[-2px] text-5xl   transition-colors duration-500 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={SchoolGirl}
            alt="SchoolGirl"
            className="w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${Tiles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[#FFFAEB] py-[56px] gap-[40px] lg:h-[1050px] flex flex-col items-center justify-center  lg:gap-[76px]">
        <div className="w-[336px] lg:w-[697px] flex flex-col items-center gap-3">
          <p className="text-[#002244] font-medium text-[24px] font-grava md:text-5xl lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[60px] text-center">
            Rewards and Benefits, Every Time You Spend.
          </p>
          <p className="text-sm lg:text-xl text-[#334E69] font-grava leading-[20px] lg:leading-[27px] text-center">
            Tatum cards keep up the pace, so your money is with you
            everywhere you go.
          </p>
        </div>
        {/* Desktop Card Layout */}
        {/* <div className='lm:flex items-center justify-center relative gap-4 hidden group transition'>
               <img src={BlackCard} alt="BlackCard" className='w-[240px] h-[360px]' />
               <img src={GreyCard} alt="GreyCard" className='w-[240px] h-[360px]' />
               <img src={SilverCard} alt="SilverCard" className='w-[240px] h-[360px]' />
               <img src={YellowCard} alt="YellowCard" className='w-[240px] h-[360px]' />
               <img src={WhiteCard} alt="WhiteCard" className='w-[240px] h-[360px]' />
            </div> */}

        {/* Rotating Card Effect (Desktop Only) */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{ perspective: "1000px" }}>
          <div
            ref={carouselRef}
            className="relative w-[400px] h-[400px] flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              cursor: "grab",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onWheel={handleWheel}>
            {cardImages.map((card, index) => {
              const angle = (index * 360) / cardImages.length;
              return (
                <img
                  key={index}
                  src={card}
                  alt="Card"
                  className="absolute w-full h-[250px] transition-transform duration-500"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(300px)`,
                    pointerEvents: "none",
                  }}
                />
              );
            })}
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
          className="transition-all duration-500 ease-in-out px-5 h-[44px] lg:h-[64px] flex items-center justify-center p-4 border-[1.5px] border-[#002244] rounded-tr-lg rounded-bl-lg group hover:bg-[#002244]"
          onClick={() => {
            navigate("/personal", {
              state: {
                section: "personalCard",
              },
            });
          }}>
          <p className="transition-colors duration-500 ease-in-out text-[#002244] font-medium font-grava group-hover:text-[#FFCC33] text-sm lg:text-base">
            Choose Your Tatum Card
          </p>
        </button>
      </div>

      <div className="bg-[#F9FAFB] flex items-center flex-col w-full px-5 py-[56px] gap-[40px] lg:h-[877px] lg:pt-[72px] lg:pb-[112px] lg:px-[56px]">
        <div className="flex flex-col items-center w-full lg:w-[653px] lg:h-[99px] gap-3">
          <p className="font-grava text-[#002244] text-sm lg:text-[18px]">
            Loan Calculator
          </p>
          <p className="font-grava text-[#002244] text-[24px] lg:text-[48px] whitespace-nowrap font-medium ">
            Instant loan, instant benefits
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-start gap-5">
          <div className="bg-[#FFFFFF] rounded-2xl flex flex-col py-[32px] px-5 gap-[40px] mx-auto w-full  lg:w-[728px]">
            <div className="flex items-center gap-3">
              <div className="transition ease-in-out delay-150 duration-500 w-[105px] md:w-[113px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center rounded-tl-lg rounded-br-lg bg-[#FFCC33]">
                <p className="text-[#002244] font-medium font-grava text-sm md:text-base">
                  Personal
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-500 w-[88px] md:w-[93px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border-[1.5px] border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
                <p className="text-[#002244] font-medium font-grava text-sm md:text-base">
                  Home
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-500 w-[75px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
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
                tipFormatter={(value) => formatter.format(value)}
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
          <div className="w-full flex flex-col items-center gap-5 lg:w-[580px]">
            <div className="lg:w-[580px] w-full bg-[#fff] rounded-2xl h-[160px] lg:h-[212px] px-5 lg:px-[28px] flex gap-4 md:gap-24 lg:gap-0 md:justify-center lg:justify-between items-center">
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
            <div className="w-full bg-[#fff] rounded-2xl gap-[56px] py-[32px] h-[300px] px-4 lg:px-[28px] flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 ">
                <button
                  className="transition-all duration-500 ease-in-out bg-[#FFCC33] w-[300px] group hover:border-[1.5px] hover:bg-[#fff] hover:border-[#002244] lg:w-[532px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-br-lg"
                  onClick={() => {
                    navigate("/business", {
                      state: {
                        section: "business",
                      },
                    });
                  }}>
                  <p className="transition-colors duration-500 ease-in-out font-grava text-[#002244] text-[18px] font-medium">
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
          className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center"
          type="button"
          onClick={() => {
            navigate("/resources", {
              state: {
                section: "resources",
              },
            });
          }}>
          <p className="transition-colors duration-500 ease-in-out font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]">
            Explore Our Resource Center
          </p>
        </button>
      </div>

      <div
        className="bg-[#F9FAFB] flex flex-col pt-[56px] pb-[49.5px] lg:py-[80px] gap-[49.5px] lg:gap-[32px] items-center px-5 lg:px-[88px]"
        data-aos="fade-up">
        <p className="font-medium text-[24px] lg:text-[48px] font-grava w-[300px] lg:w-full text-center text-[#002244]">
          Find what you need instantly.
        </p>
        {/* Mobile Card View */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20} // Space between slides
          slidesPerView={"auto"} // Automatically adjust to fit the number of cards
          grabCursor={true}
          autoplay={{
            delay: 3000, // Slide transition delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true} // Enables infinite looping of slides
          style={{
            display: isMobile ? "block" : "none",
          }}>
          {/* Individual Card */}
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Card} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Debit/Credit Cards
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Learn more
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={ATM} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                ATM Branch Locator
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Simply enter your location and find our closest branch on the
                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Check the nearest ATM branch
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Online} alt="Online" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Download our mobile app
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={USSD} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                No internet? No problem. Access your account, check balances,
                and perform essential transactions using our simple *911#. It is
                quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Dial *911#
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Loan} alt="Loan" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Loan calculator
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Easily calculate loan eligibility according to your current
                salary.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Try our loan calculator
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={FX} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                FX Market Rate
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Stay updated with real-time FX rates and make smarter, timely
                decisions in the global market.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Check our FX rates
              </p>
            </button>
          </SwiperSlide>
        </Swiper>
        {/* Tablets and Desktop Card Layout*/}
        <div className="hidden md:block w-full overflow-x-auto space-x-1 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Card} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Debit/Credit Cards
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[88%] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/personal", {
                  state: {
                    section: "personalCard",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Learn more
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto ">
            <img src={ATM} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                ATM Branch Locator
              </p>
              <p className="text-sm lg:text-base font-[350] font-grava text-[#002244]">
                Simply enter your location and find our closest branch on the
                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[88%] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/contact", {
                  state: {
                    section: "contact",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Check the nearest ATM branch
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col p-[26px] bg-[#fff]  h-[332px] lg:h-[356px] relative rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Online} alt="Online" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-sm lg:text-base font-[350] font-grava text-[#002244]">
                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[88%] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/digital", {
                  state: {
                    section: "digital",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Download our mobile app
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={USSD} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-sm lg:text-base font-[350] font-grava text-[#002244]">
                No internet? No problem. Access your account, check balances,
                and perform essential transactions using our simple *911#. It is
                quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[88%] h-[44px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/digital", {
                  state: {
                    section: "digital",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Dial *911#
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] md:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Loan} alt="Loan" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Loan calculator
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Easily calculate loan eligibility according to your current
                salary.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[88%] h-[44px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/digital", {
                  state: {
                    section: "digital",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
                Try our loan calculator
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={FX} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                FX Market Rate
              </p>
              <p className="text-sm lg:text-base font-grava font-[350] text-[#002244]">
                Stay updated with real-time FX rates and make smarter, timely
                decisions in the global market.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[88%] h-[44px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate("/digital", {
                  state: {
                    section: "digital",
                  },
                });
              }}>
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium  lg:text-base font-grava text-[#002244]">
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
