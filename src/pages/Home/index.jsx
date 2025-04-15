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
import { useLocation, useNavigate } from "react-router-dom";

import Boy from "../../assets/png/boy.png";
import Girl from "../../assets/png/girl.png";
import Farmer from "../../assets/png/tailor.png";
import SchoolGirl from "../../assets/png/school_girl.png";
import Tiles from "../../assets/png/tile.png";
import Staff from "../../assets/png/staff.png";
import Ceremony from "../../assets/png/ceremony.png";
import Business from "../../assets/png/business.png";
import NDIC from "../../assets/svg/ndic.svg";
// import NDIC from "../../assets/png/ndic.png";

import CBN from "../../assets/svg/cbn_logo.svg";
import Card from "../../assets/svg/credit_card.svg";
import ATM from "../../assets/svg/atm.svg";
import Loan from "../../assets/svg/loan.svg";
import FX from "../../assets/svg/fx.svg";
import USSD from "../../assets/svg/ussd.svg";
import Online from "../../assets/svg/online.svg";
import Arrow from "../../assets/svg/arrow_forward.svg";

import "./css/CardEffect.css";
import "./css/CardEffectMain.css";
import "./css/SliderStyles.css";
import "./css/CardScroll.css";
import "./css/Dot.css";
import "./css/SwiperSlide.css";
import CookieConsent from "../../CookieConsent";
import $ from 'jquery';
import './CardCarousel.css'; // Create this file for styles

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(500000); // Initial loan amount
  const [repay, setRepay] = useState(3); // Initial repay amount
  const [interest, setInterest] = useState(4); // Initial Interest
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [isManualTransition, setIsManualTransition] = useState(false);

  const formatter = new Intl.NumberFormat("en-US");
  

  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const carousel1Ref = useRef(null);

  const [currdeg, setCurrdeg] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const autoplayIntervalRef = useRef(null);

  useEffect(() => {
    const carousel = $(carouselRef.current);

  const rotate = (direction) => {
    let newDeg = currdeg;
    if (direction === "n") {
      newDeg -= 60;
    } else if (direction === "p") {
      newDeg += 60;
    }
    setCurrdeg(newDeg);
    updateRotation(newDeg);
  };

  const updateRotation = (deg) => {
    carousel.css({
      "-webkit-transform": `rotateY(${deg}deg)`,
      "-moz-transform": `rotateY(${deg}deg)`,
      "-o-transform": `rotateY(${deg}deg)`,
      "transform": `rotateY(${deg}deg)`
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setStartRotation(currdeg);
    carousel.removeClass('manual-transition');
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dragDistance = e.pageX - startX;
    const rotationDelta = dragDistance / 5;
    const newDeg = startRotation + rotationDelta;
    setCurrdeg(newDeg);
    updateRotation(newDeg);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    carousel.addClass('manual-transition');
    updateRotation(currdeg);
  };

  const startAutoplay = () => {
    if (!autoplayIntervalRef.current && isPageVisible) {
      carousel.removeClass('manual-transition');
      autoplayIntervalRef.current = setInterval(() => {
        setCurrdeg((prevDeg) => prevDeg - 0.3);
      }, 16);
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      setIsPageVisible(false);
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    } else {
      setIsPageVisible(true);
      if (!isDragging) {
        setTimeout(() => {
          carousel.removeClass('manual-transition');
          startAutoplay();
        }, 100);
      }
    }
  };

  carousel.on("mousedown", handleMouseDown);
  $(document).on("mousemove", handleMouseMove);
  $(document).on("mouseup mouseleave", handleMouseUp);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  startAutoplay();

  carousel.on("mouseenter mousedown", () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }).on("mouseleave", () => {
    if (!isDragging && isPageVisible) {
      carousel.removeClass('manual-transition');
      startAutoplay();
    }
  });

  return () => {
    carousel.off("mousedown", handleMouseDown);
    $(document).off("mousemove", handleMouseMove);
    $(document).off("mouseup mouseleave", handleMouseUp);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };
}, [currdeg, isDragging, startX, startRotation, isPageVisible]);


  // const carouselRef = useRef(null);
  const autoplayInterval = useRef(null);
 
  const currdegRef = useRef(currdeg);

  // Keep currdegRef in sync with state
  useEffect(() => {
    currdegRef.current = currdeg;
  }, [currdeg]);

  const updateRotation = (deg) => {
    // Rotation is handled via style prop
  };

  const startAutoplay = () => {
    if (!autoplayInterval.current && isPageVisible) {
      setIsManualTransition(false);
      autoplayInterval.current = setInterval(() => {
        const newDeg = currdegRef.current - 0.3;
        currdegRef.current = newDeg;
        setCurrdeg(newDeg);
      }, 16);
    }
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  };

  // Autoplay setup
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Visibility change handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const visible = !document.hidden;
      setIsPageVisible(visible);
      
      if (visible) {
        if (!isDragging.current) {
          setTimeout(() => {
            setIsManualTransition(false);
            startAutoplay();
          }, 100);
        }
      } else {
        stopAutoplay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Mouse handlers
  const handleRotate = (direction) => {
    const newDeg = direction === 'n' ? currdeg - 60 : currdeg + 60;
    setIsManualTransition(true);
    setCurrdeg(newDeg);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startRotation.current = currdegRef.current;
    setIsManualTransition(false);

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const dragDistance = e.pageX - startX.current;
      const newDeg = startRotation.current + (dragDistance / 5);
      setCurrdeg(newDeg);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      setIsManualTransition(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
  };

  const handleMouseEnterOrDown = () => {
    stopAutoplay();
  };

  const handleMouseLeaveOrUp = () => {
    if (!isDragging.current && isPageVisible) {
      setIsManualTransition(false);
      startAutoplay();
    }
  };

  // Add touch handlers
const handleTouchStart = (e) => {
  isDragging.current = true;
  startX.current = e.touches[0].pageX;
  startRotation.current = currdegRef.current;
  setIsManualTransition(false);
  stopAutoplay();
};

const handleTouchMove = (e) => {
  if (!isDragging.current) return;
  const dragDistance = e.touches[0].pageX - startX.current;
  const newDeg = startRotation.current + (dragDistance / 3); // More sensitive for mobile
  setCurrdeg(newDeg);
};

const handleTouchEnd = () => {
  isDragging.current = false;
  setIsManualTransition(true);
  if (isPageVisible) {
    startAutoplay();
  }
};

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    className: "m-0",
    autoplaySpeed: 3000,
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="w-full pt-[40px]  lg:pt-[80px] "
    >
      <div className="w-full outline-none lm:h-[100vh] ">
        <LandingCarousel
          interval={5000}
          showArrows={false} //
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          onChange={handleSlideChange}
          animationHandler={fadeAnimationHandler} // Use the custom fade animation
          transitionTime={500}
          swipeable={false} // Disable swiping for fade animation
          stopOnHover={false}
        >
          <div className="overflow-y-scroll h-full lm:overflow-y-hidden w-full outline-none">
            <div
              style={{
                backgroundImage: `url(${
                  isMobile
                    ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"
                    : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="h-[764px] lg:h-[91vh] pt-[64px] lm:pt-[40px]  px-5 lg:px-[60px] relative w-full flex flex-col lg:flex-row items-center gap-0"
            >
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
                <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 0 ? "animate__animated animate__fadeInUp " : " "
                    } lg:w-[450px] font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-bold leading-[40px] lg:leading-[105%]`}
                  >
                    Your Smile, <br />{" "}
                    <span className="" style={{ fontWeight: 450 }}>
                      Our Priority
                    </span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 0
                        ? "animate__animated animate__fadeInUp animate__delay-08s"
                        : ""
                    } md:w-[265px] lg:w-[530px] font-[400] text-[14px] font-grava lg:text-[25px] text-left text-[#002244] leading-[20px] lg:leading-[34.1px]`}
                  >
                    Secure banking, flexible loans, and profitable
                    investments for everyone.
                  </p>
                  <div
                    className={`flex items-center mt-[10px] mb-[-5%] lg:mt-[12px] gap-3 ${
                      activeIndex === 0
                        ? "animate__animated animate__fadeInUp animate__delay-10s"
                        : ""
                    }`}
                  >
                    <button
                      className={`${
                        activeIndex === 0 ? " " : ""
                      } transition-all duration-500 ease-in-out hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center bg-[#002244] group hover:bg-[#FFCC33] p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/personal", {
                          state: {
                            section: "personal",
                          },
                        })
                      }
                    >

                      <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">

                        {/* Open an account  */}
                        Find out more
                      </p>
                      <BsArrowRight
                        size={100}
                        className="mt-[2px] transition-colors duration-500 ease-in-out w-5 h-5 text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>

                    <button
                      className={`${
                        activeIndex === 0 ? "" : ""
                      } transition hover:border-b-0 cursor-pointer outline-none border-[#002244] border border-x-0 border-t-0`}
                      type="button"
                      onClick={() =>
                        navigate("/about", {
                          state: {
                            section: "about",
                          },
                        })
                      }
                    >
                      <p className="font-grava text-[14px] whitespace-nowrap lg:text-[16px] text-[#002244] font-[500]">
                        Learn more
                      </p>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start absolute -bottom-20 md:-bottom-32 lm:bottom-[-45%]" style={{zIndex:'99999'}}>
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
                      <div className="w-[60px] mt-0 lg:mt-1.5">
                        <img
                          src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                          alt="NDIC"
                          className="flex justify-start lm:inline-block mt-1 lg:mt-0  h-[25px] md:w-[21px] md:h-[28px]" // h-[23px] 
                        />
                      </div>
                    </p>
                  </p>
                </div>

              </div>
              {
                isMobile ?
                <div className="max-w-[400px]">
                  <img
                    key={activeIndex}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    src={"https://res.cloudinary.com/code-idea/image/upload/v1739269942/family_mobile_cizeg0.png"}
                    alt="Family"
                    className={`${
                      activeIndex === 0 ? "animate__animated " : ""
                    } relative md:right-14 -bottom-12 lm:right-24 top-28 -right-6 h-[400.01px]`}
                  />
                </div>
                :
                <img
                  key={activeIndex}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  src={"https://res.cloudinary.com/code-idea/image/upload/v1739212376/file_28_1_1_vahr1z.webp"}
                  alt="Family"
                  className={`${
                    activeIndex === 0 ? "animate__animated " : ""
                  } relative md:right-14 bottom-0 lm:right-24 top-28 -right-5 h-[560.01px]  lg:right-[25%] lg:top-[3.5%] lm:h-[80vh]`}
                />

              }
            </div>
          </div>

          <div className="h-full w-full outline-none">
            <div
              style={{
                backgroundImage: `url(${
                  isMobile
                    ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png" 
                    : "https://res.cloudinary.com/code-idea/image/upload/v1736507610/Slide_2_avjdnz.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="bg-[#FFCC33] h-[794px] lg:h-[91vh] md:pt-[93px] pt-[64px] px-5 lg:px-[60px] w-full flex flex-col lg:flex-row items-center relative gap-0"
            >
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
                {" "}
                <div className="flex md:w-[350px] lm:w-[692px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    style={{ fontWeight: 450 }}
                    className={`${
                      activeIndex === 1 ? "animate__animated animate__fadeInUp " : " "
                    } font-grava text-[#002244] text-left text-[34px] lg:text-[75px] font-[500] leading-[40px] lg:leading-[105%]`}
                  >
                    Say Hello To {" "}
                    <span className="block ">Banking <span className="font-bold">On The Go</span></span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 1
                        ? "animate__animated animate__fadeInUp animate__delay-08s "
                        : ""

                    } font-[400] font-grava text-[14px] lg:text-[25px]  text-left text-[#002244] leading-[20px] lg:leading-[34.1px]`}

                    // animate__animated animate__fadeInUp animate__delay-08s
                  >
                    Your money, your way. Experience banking that fits your
                    lifestyle, not the other way around.
                  </p>
                  <div
                    className={`flex items-center mt-[10px] mb-[-5%] lg:mt-[12px] gap-3 ${
                      activeIndex === 1
                        ? "animate__animated animate__fadeInUp animate__delay-10s"
                        : ""
                    }`}
                  >
                    <button
                      className={`${
                        activeIndex === 1 ? "" : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }
                    >
                      <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        {/* Explore our offerings */}
                        Find out more
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>

                    <button
                      className={`${
                        activeIndex === 1 ? "" : ""
                      } hidden transition hover:border-b-0 lg:flex cursor-pointer outline-none border border-x-0 border-t-0`}
                      type="button"
                      onClick={() =>
                        navigate("/digital", {
                          state: {
                            section: "digital",
                          },
                        })
                      }
                    >
                      <p className="font-grava text-base text-[#002244] font-[500]">
                        To be available soon
                        {/* Download App */}
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex items-start absolute -bottom-20 md:-bottom-32 lg:bottom-[-40%]">
                  <p className="text-[#002244] font-grava text-sm md:text-base flex flex-col lm:flex-row lm:items-center whitespace-nowrap gap-1">
                    <p className="flex items-center gap-2">
                      We are licensed by the Central Bank of Nigeria
                      <img
                        src={CBN}
                        alt="CBN"
                        className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                      />
                    </p>
                    <p className="flex items-center gap-2">
                      All deposits are insured by
                      <div className="w-[60px]">
                        <img
                          src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                          alt="NDIC"
                          className="flex justify-start lm:inline-block mt-1 lg:mt-0 h-[25px] md:w-[21px] md:h-[28px]" //h-[23px]
                        />
                      </div>
                    </p>
                  </p>
                </div>

              </div>
              {
                isMobile ?
                <div className="w-[400px]">
                  <img
                    src="https://res.cloudinary.com/code-idea/image/upload/v1739290246/phone_gt2kbz.png"
                    alt="Phone"
                    className={`${
                      activeIndex === 1
                        ? "animate__animated animate__zoomIn animate__slow"
                        : ""
                    } object-cover top-28 h-[350px] -right-5 md:right-16 lm:right-[10rem] lm:h-[550px] lg:h-[1030px] relative lg:right-[33rem]`}
                    // animate__animated animate__fadeInUp animate__delay-10s
                  />
                </div>
                :
                <img
                  src="https://res.cloudinary.com/code-idea/image/upload/v1736507834/5807348_1_ubm6ct.png"
                  alt="Phone"
                  className={`${
                    activeIndex === 1
                      ? "animate__animated animate__zoomIn   animate__slow"
                      : ""
                  } object-cover top-16 h-[550px] right-5 md:right-16 lm:right-[10rem] lm:h-[550px] lg:h-[1030px] relative lg:right-[33rem]`}
                  // animate__animated animate__fadeInUp animate__delay-10s
                />
              }
            </div>
          </div>

          <div className="h-full w-full outline-none">
            <div
              style={{
                backgroundImage: `url(${
                  isMobile
                    ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png" 
                    : "https://res.cloudinary.com/code-idea/image/upload/v1739207398/Nav_Slide_s_wwtfon.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="bg-[#FFCC33] h-[794px] lg:h-[91vh] pt-[64px] md:pt-[93px] lm:pt-[40px] px-5  lg:px-[60px] w-full flex flex-col lg:flex-row items-center relative gap-0"
            >
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
                {" "}
                <div className="flex lm:w-[786px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    style={{ fontWeight: 450 }}
                    className={`${
                      activeIndex === 2 ? "animate__animated animate__fadeInUp " : " "
                    } font-grava text-[#002244] font-[500] text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[105%]`}
                  >
                    Smart Banking for <br/> {" "}
                    <span>Your </span><span className="font-bold ">Big Ideas.</span>
                  </p>
                  <p
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__fadeInUp animate__delay-08s"
                        : ""

                    } md:w-[350px] font-[400] font-grava text-[14px] lg:text-[25px] lg:w-[623px] text-left text-[#002244] leading-[20px] lg:leading-[34.1px]`}

                  >
                    Instant access to the funds, insights, and support you need
                    to take your business further.
                  </p>
                  <div className="flex items-center mt-[12px] lg:mt-[12px] gap-3 ">
                    <button
                      className={`${
                        activeIndex === 2
                          ? "animate__animated animate__fadeInUp animate__delay-10s"
                          : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center p-5`}
                      type="button"
                      onClick={() =>
                        navigate("/business", {
                          state: {
                            section: "business",
                          },
                        })
                      }
                    >
                      <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        {/* Get started with Business Banking */}
                        Find out more
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-start absolute -bottom-20 md:-bottom-24 lg:bottom-[-35%]">
                  <p className="text-[#002244] font-grava text-sm md:text-base flex flex-col lm:flex-row lm:items-center whitespace-nowrap gap-1">
                    <p className="flex items-center gap-2">
                      We are licensed by the Central Bank of Nigeria
                      <img
                        src={CBN}
                        alt="CBN"
                        className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                      />
                    </p>
                    <p className="flex items-center gap-2">
                      All deposits are insured by
                      <div className="w-[60px]">
                        <img
                          src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                          alt="NDIC"
                          className="flex justify-start lm:inline-block mt-1 lg:mt-0 h-[25px] md:w-[21px] md:h-[28px]" // h-[23px]
                        />
                      </div>
                    </p>
                  </p>
                </div>
              </div>
              {
                isMobile ? 
                <div className="w-[600px] "> 
                  <img
                    src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/file_34_1_owpqgw.png"
                    alt="Teach"
                    key={activeIndex}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__slow"
                        : ""
                    }  md:right-[8rem] lm:right-[20rem] h-[500px] lg:h-[1000px] top-32 md:top-10 lg:top-20 lg:right-[40rem] relative`}
                  />
                </div> :
                <img
                  src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/file_34_1_owpqgw.png"
                  alt="Teach"
                  key={activeIndex}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  className={`${
                    activeIndex === 2
                      ? "animate__animated animate__slow"
                      : ""
                  }  md:right-[8rem] lm:right-[20rem] h-[550px] lg:h-[1000px] top-24 md:top-12 lg:top-32 lg:right-[40rem] relative`}
                />
              }
            </div>
          </div>

          <div className="h-full w-full outline-none">
            <div
              style={{
                backgroundImage: `url(${
                  isMobile
                    ? "https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png" 
                    : "https://res.cloudinary.com/code-idea/image/upload/v1739207738/Slide5_mgoygd.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="h-[794px] lg:h-[91vh] pt-[64px] md:pt-[93px]  lm:pt-[40px] px-5  lg:px-[60px] w-full flex flex-col lg:flex-row items-center relative gap-0"
            >
              <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lg:gap-[113px] lg:mt-[-6%]">
                {" "}
                <div className="flex lm:w-[786px] flex-col items-start gap-2 lg:gap-5">
                  <p
                    className={`${
                      activeIndex === 3 ? "animate__animated animate__fadeInUp " : " "
                    } font-grava text-[#002244] font-bold text-left text-[34px] lg:text-[75px] leading-[40px] lg:leading-[105%]`}
                  >
                    Your Wealth, <br />{" "}
                    <span className=" " style={{ fontWeight: 450 }}>
                      {" "}
                      Expertly Managed{" "}
                    </span>
                  </p>
                  <p
                    className={`lg:w-[616px] ${
                      activeIndex === 3
                        ? "animate__animated animate__fadeInUp animate__delay-08s"
                        : ""

                    } md:w-[350px] font-[400] font-grava text-[14px] lg:text-[25px]  text-left text-[#002244] leading-[20px] lg:leading-[34.1px]`}

                  >
                    Access high-end services and exclusive investments, all in
                    one seamless experience.
                  </p>
                  <div className="flex items-center mt-[12px] gap-3">
                    <button
                      className={`${
                        activeIndex === 3
                          ? "animate__animated animate__fadeInUp animate__delay-10s"
                          : ""
                      } transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] px-5 rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center`}
                      type="button"
                      onClick={() =>
                        navigate("/private", {
                          state: {
                            section: "private",
                          },
                        })
                      }
                    >
                      <p className="font-[450] transition-colors duration-500 ease-in-out lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                        {/* Get exclusive access */}
                        Find out more
                      </p>
                      <BsArrowRight
                        size={100}
                        className="w-5 h-5 mt-[1px] transition-colors duration-500 ease-in-out text-[#FFCC33] group-hover:text-[#002244]"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-start absolute -bottom-20 lg:bottom-[-35%]">
                  <p className="text-[#002244] font-grava text-sm md:text-base flex flex-col lm:flex-row lm:items-center whitespace-nowrap gap-1">
                    <p className="flex items-center gap-2">
                      We are licensed by the Central Bank of Nigeria
                      <img
                        src={CBN}
                        alt="CBN"
                        className="inline-flex w-[12px] h-[16px] lg:w-[21px] md:h-[28px]"
                      />
                    </p>
                    <p className="flex items-center gap-2">
                      All deposits are insured by
                      <div className="w-[60px]">
                        <img
                          src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                          alt="NDIC"
                          className="flex justify-start lm:inline-block mt-1 lg:mt-0 h-[25px] md:w-[21px] md:h-[28px]" // h-[23px]
                        />
                      </div>
                    </p>
                  </p>
                </div>

              </div>
              {
                isMobile ?
                <div className="w-[600px]">
                  <img
                  src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/wmremovxyz.png"
                  alt="Smile"
                  key={activeIndex}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  className={`${
                    activeIndex === 3
                      ? "animate__animated "
                      : ""
                  }  md:right-[8rem] lm:right-[14rem] -right-10 h-[550px] top-14 md:top-10 lg:top-5 lg:right-[25rem] relative`}
                />
                </div>
                :
                <img
                  src="https://res.cloudinary.com/code-idea/image/upload/v1736507863/wmremovxyz.png"
                  alt="Smile"
                  key={activeIndex}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  className={`${
                    activeIndex === 3
                      ? "animate__animated "
                      : ""
                  }  md:right-[1rem] lm:right-[14rem] h-[550px] lg:h-[1000px] top-10 md:top-10  lg:top-14 lg:right-[25rem] relative`}
                />
              }
            </div>
          </div>
        </LandingCarousel>
      </div>

      <div className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:pt-[0px] lg:pb-[60px] lg:pr-[106px] lg:pl-[91px]"> {/* lg:h-min */}
        <div data-aos="fade-right" className="hidden md:block ">
          <img
            src={Boy}
            alt="Boy"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105 "
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]"
        >
          <div className="flex flex-col gap-2 md:gap-[21px] md:items-start items-center ">
            <p className="font-grava text-[#334E69] lm:ml-1 font-[500] tracking-[0.2em] uppercase leading-[130%] text-[11px] lg:text-[14px]">
              Personal Banking
            </p>
            <p className="font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Interest-ing savings account to make your goals achievable.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5  lg:w-[190.63px]  h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate(
                "/personal",
                {
                  state: {
                    section: "personal",
                  },
                },
                window.scrollTo(0, 0)
              )
            }
          >

            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">

              {/* Get started */}
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-[500] ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33] "
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

      <div className="bg-[#F9FAFB] md:h-[400px] lg:h-[698px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[93px] lg:pl-[105px]"> {/* lg:h-[705px] */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]"
        >
          <div className="flex flex-col gap-2 md:gap-[14px] md:items-start items-center">
            <p className="font-grava text-[#475466] lm:ml-1 leading-[130%] font-[500] uppercase tracking-[0.2em] text-[11px] lg:text-[14px]">
              CORPORATE Banking
            </p>
            <p className="font-[500] w-[296px] lm:w-full text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Streamlined services for complex business needs.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 lg:w-[190.63px] h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() =>
              navigate(
                "/corporate",
                {
                  state: {
                    section: "corporate",
                  },
                },
                window.scrollTo(0, 0)
              )
            }
          >

            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">

              {/* Get started */}
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 font-[500] ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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

      <div className="bg-[#fff] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[110px] lg:pl-[86px]">
        <div data-aos="fade-right" className="hidden md:block">
          <img
            src={Farmer}
            alt="Farmer"
            className="hidden md:flex w-[295px] h-[295px] lm:w-[350px] lm:h-[350px] lg:w-[571px] lg:h-[585px] transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px] lg:w-[571px]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] lm:ml-1 font-[500] uppercase tracking-[0.2em] leading-[130%] text-[11px] lg:text-[14px]">
              Business Banking
            </p>
            <p className="font-[500] w-[298px] lm:w-full text-[#002244] font-grava text-center md:text-left text-[24px] tracking-[-0.01em] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Empowering small businesses with loans, tools, and expert support.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5  lg:w-[190.63px]  h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate(
                "/business",
                {
                  state: {
                    section: "business",
                  },
                },
                window.scrollTo(0, 0)
              );
            }}
          >

            <p className="transition-colors duration-500 ease-in-out font-[500] text-[14px] lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">

              {/* Get started */}
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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

      <div className="bg-[#F9FAFB] h-[649px] md:h-[400px] lg:h-[705px] flex flex-col md:flex-row items-center gap-[40px] md:gap-0 md:justify-between py-[56px] px-5 lg:py-[60px] lg:pr-[106px] lg:pl-[112px]">
        <div
          className="flex flex-col items-center md:items-start gap-5 w-[250px] md:w-[350px] lm:w-[498px]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center">
            <p className="font-grava text-[#334E69] lm:ml-1 font-[500] uppercase tracking-[0.2em] leading-[130%] text-[11px] lg:text-[14px]">
              PRIVATE Banking
            </p>
            <p className="font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px]">
              Exclusive wealth management for discerning clients.
            </p>
          </div>
          <button
            className="transition-all duration-500 ease-in-out bg-[#FFCC33] lg:w-[190.63px] px-5 h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center"
            type="button"
            onClick={() => {
              navigate(
                "/private",
                {
                  state: {
                    section: "private",
                  },
                },
                window.scrollTo(0, 0)
              );
            }}
          >

            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">

              {/* Get started */}
              Find out more
            </p>
            <BsArrowRight
              size={100}
              className="mt-[2px] text-5xl   transition-colors duration-500 ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
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
        className="bg-[#FFFAEB] py-[56px] gap-[40px] lg:h-[907px] flex flex-col items-center justify-center lg:gap-[76px]"
      >
        <div className="w-[336px] lg:w-[697px] flex flex-col items-center gap-3">
          <p className="text-[#002244] font-[450] text-[24px] font-grava md:text-5xl lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[60px] text-center">
           Your Money, <span className="block text-center">Everywhere You Go</span> 
          </p>
          <p className="text-[14px] lg:text-[18px] text-[#334E69] lg:w-[456px] font-grava font-[400] leading-[20px] lg:leading-[27px] text-center">
            Tatum cards keep up the pace, so you're always connected to your finances .
          </p>
        </div>
        {/* Desktop Card Layout */}

        {/* Rotating Card Effect (Desktop Only) */}

        <div className="hidden lm:flex items-center justify-center">
          <div className="container">
            <div 
              ref={carouselRef}
              className={`carousel ${isManualTransition ? 'manual-transition' : ''}`}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={handleMouseEnterOrDown}
              onMouseLeave={handleMouseLeaveOrUp}
              style={{
                transform: `rotateY(${currdeg}deg)`,
                transition: isManualTransition ? 'transform 0.6s ease-out' : 'none',
              }}
            >


              
                <div className="item a">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739468477/black_card_front_okhfiz.png" className="rounded-[24px]"/>
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739468935/black_card_back_ibhvow.png" alt="card-1-back" className="rounded-[24px]"/>
                    </div>
                </div>
                <div className="item b">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739468972/afrigo_card_front_ezlerd.png" alt="card-2-front" className="rounded-[24px]"/>
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739468979/afrigo_card_back_tvghzx.png" className="rounded-[24px]"/>
                    </div>
                </div>
                <div className="item c">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469071/silver_card_front_n89kpq.png" className="rounded-[24px]"/>
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469080/silver_card_back_rt9tta.png" alt="card-3-back" className="rounded-[24px]" />
                    </div>
                </div>
                <div className="item d">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469169/white_card_front_txnjsq.png" alt="card-4-front" className="rounded-[24px]"/>
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469177/white_card_back_bpc5fr.png" alt="card-4-back" className="rounded-[24px]"/>
                    </div>
                </div>
                <div className="item e">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469219/yellow_card_front_le79ge.png" alt="card-5-front" className="rounded-[24px]"/>
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469231/yellow_card_back_ljaal4.png" alt="card-5-back" className="rounded-[24px]"/>
                    </div>
                </div>
                <div className="item f">
                    <div className="card-face card-front">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469071/silver_card_front_n89kpq.png" alt="card-6-front" className="rounded-[24px]" />
                    </div>
                    <div className="card-face card-back">
                        <img src="https://res.cloudinary.com/code-idea/image/upload/v1739469080/silver_card_back_rt9tta.png" className="rounded-[24px]"/>
                    </div>
                </div>
            </div>
          </div>
          <div className="next">Next</div>
          <div className="prev">Prev</div>
        </div>

        {/* Mobile */}
        <div className="lm:hidden w-full">
          <Slider {...settings}>
            <div className="slide-item slick-slide flex">
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739468477/black_card_front_okhfiz.png"
                alt="BlackCard"
                className="rounded-xl w-[45%] md:w-[75%] lm:w-[100%]"
              
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739468972/afrigo_card_front_ezlerd.png"
                alt="GreyCard"
                className="rounded-xl w-[45%] md:w-[75%] lm:w-[100%]"
              />
            </div>
            <div className="slide-item flex justify-center" >
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739469071/silver_card_front_n89kpq.png"
                alt="SilverCard"
              
                className="rounded-xl w-[45%] md:w-[75%] lm:w-[100%]"
               
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739469219/yellow_card_front_le79ge.png"
                alt="YellowCard"
        
                className="rounded-xl w-[45%] md:w-[75%] lm:w-[100%]"
                // className="rounded-xl w-full max-w-[400px] mx-auto"
              />
            </div>
            <div className="slide-item flex justify-center">
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739469169/white_card_front_txnjsq.png"
                alt="WhiteCard"
                className="rounded-xl w-[45%] md:w-[75%] lm:w-[100%]"
                // className="rounded-xl w-full max-w-[400px] mx-auto"
              />
            </div>
          </Slider>
        </div>

        <button
          className="px-5 h-[44px] lg:h-[64px] lg:mt-8 flex items-center cursor-default justify-center opacity-50 p-4 border-[1.5px] border-[#002244] rounded-tl-lg rounded-br-lg"
        >

          <p className=" text-[#002244] font-[500] font-grava text-[14px] lg:text-[16px]">

            {/* Choose your Tatum Card */}
            To be available soon
          </p>
        </button>
      </div>

      {/* <div className="bg-[#F9FAFB] flex items-center flex-col w-full px-5 py-[56px] gap-[40px] lg:h-[877px] lg:pt-[72px] lg:pb-[112px] lg:px-[56px]">
        <div className="flex flex-col items-center w-full lg:w-[653px] lg:h-[99px] gap-3">
          <p className="font-grava text-[#334E69] font-[500] uppercase tracking-[0.2em] text-sm">
            Loan Calculator
          </p>
          <p className="font-grava text-[#002244] text-[24px] lg:text-[48px] whitespace-nowrap font-[500] ">
            Instant loan, instant benefits
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-start gap-5">
          <div className="bg-[#FFFFFF] rounded-2xl flex flex-col py-[32px] px-5 gap-[40px] mx-auto w-full  lg:w-[728px]">
            <div className="flex items-center gap-3">
              <div className="transition ease-in-out delay-150 duration-500 w-[105px] md:w-[113px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center rounded-tl-lg rounded-br-lg bg-[#FFCC33]">
                <p className="text-[#002244] font-[500] font-grava text-sm md:text-base">
                  Personal
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-500 w-[88px] md:w-[93px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border-[1.5px] border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
                <p className="text-[#002244] font-[500] font-grava text-sm md:text-base">
                  Home
                </p>
              </div>
              <div className="transition ease-in-out delay-150 duration-500 w-[75px] cursor-pointer h-[48px] p-1 flex flex-col items-center justify-center bg-transparent border border-[#98A2B3] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33]">
                <p className="text-[#002244] font-[500] font-grava text-sm md:text-base">
                  Car
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#002244] font-grava text-base lg:text-[18px]">
                  Loan amount
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
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
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  NGN 10,000
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  NGN 1,500,000
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#002244] font-grava text-base lg:text-[18px]">
                  You want to re-pay it over
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
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
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  3 Months
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  48 Months
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#002244] font-grava text-base lg:text-[18px]">
                  Interest Rate
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
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
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  4%
                </p>
                <p className="text-sm lg:text-[18px] font-grava text-[#002244]">
                  24%
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 lg:w-[580px]">
            <div className="lg:w-[580px] w-full bg-[#fff] rounded-2xl h-[160px] lg:h-[212px] px-5 lg:px-[28px] flex gap-4 md:gap-24 lg:gap-0 md:justify-center lg:justify-between items-center">
              <div className="flex flex-col gap-4">
                <p
                  className="font-semibold text-[#002244] font-grava text-base lg:text-[18px]"
                  style={{ color: "#002244" }}
                >
                  Monthly Payments
                </p>
                <p className="text-base lg:text-[18px] font-grava text-center text-[#002244]">
                  NGN 50,000
                </p>
              </div>
              <div className="w-[1px] h-[120px] bg-[#D0D5DD]"></div>
              <div className="flex flex-col gap-4">
                <p
                  className="font-semibold text-[#002244] font-grava text-base lg:text-[18px]"
                  style={{ color: "#002244" }}
                >
                  Total Payments
                </p>
                <p className="text-base lg:text-[18px] font-grava text-center text-[#002244]">
                  NGN 50,000
                </p>
              </div>
            </div>
            <div className="w-full bg-[#fff] rounded-2xl gap-[56px] py-[32px] h-[300px] px-4 lg:px-[28px] flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 ">
                <button
                  className="transition-all duration-500 ease-in-out bg-[#FFCC33] w-[300px] group hover:border-[1.5px] hover:bg-[#fff] hover:border-[#002244] lg:w-[532px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-br-lg"
                  onClick={() => {
                    navigate(
                      "/business",
                      {
                        state: {
                          section: "business",
                        },
                      },
                      window.scrollTo(0, 0)
                    );
                  }}
                >
                  <p className="transition-colors duration-500 ease-in-out font-grava text-[#002244] text-[18px] font-[500]">
                    Apply now
                  </p>
                </button>
                <p className="text-base text-[#002244] font-grava cursor-pointer">
                  Check eligibility
                </p>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="lg:w-[532px] w-full h-[1px] bg-[#E6E9EC]"></div>
                <p className="font-grava text-[#002244] text-center text-sm">
                  Terms & conditions applied. Actual installments may differ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="bg-[#FFFFFF] flex flex-col items-center px-5 lg:px-[55px] py-[72px] lg:h-[996px] gap-[60px]"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[434px]">
          <p className="font-[500] text-[#002244] font-grava text-[24px] lg:text-[48px] ">
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
              <p className="font-[500] text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-[500] text-[#001F3E] text-xl font-grava">
              Tatum Bank Launches in February 2024, Redefining Digital Banking
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Tatum Bank is set to launch this February, offering a fresh
              approach to traditional banking with digital tools ...
            </p>
            <p
              onClick={() => {
                navigate(
                  "/resources",
                  {
                    state: {
                      section: "resources",
                    },
                  },
                  window.scrollTo(0, 0)
                );
              }}
              className="text-[#002244] font-grava cursor-pointer text-sm underline"
            >
              Learn more
            </p>
          </div>
          <div className="flex flex-col lg:w-[429px] gap-3 lg:gap-6">
            <img src={Business} alt="Business" className="" />
            <div className="flex items-center justify-between">
              <div className="bg-[#F2F4F7] w-[54px] rounded-lg p-2">
                <p className="font-grava text-[#002244] text-sm">Blog</p>
              </div>
              <p className="font-[500] text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-[500] text-[#001F3E] text-xl font-grava">
              Tips for Growing Your Business in a Digital World
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Actionable insights and advice tailored for the growth of SMEs
            </p>
            <p
              onClick={() => {
                navigate(
                  "/resources",
                  {
                    state: {
                      section: "resources",
                    },
                  },
                  window.scrollTo(0, 0)
                );
              }}
              className="text-[#002244] font-grava cursor-pointer text-sm underline"
            >
              Learn more
            </p>
          </div>
          <div className="flex flex-col lg:w-[429px] gap-3 lg:gap-6">
            <img src={Ceremony} alt="Ceremony" className="" />
            <div className="flex items-center justify-between">
              <div className="bg-[#F2F4F7] w-[66px] rounded-lg p-2">
                <p className="font-grava text-[#002244] text-sm">Media</p>
              </div>
              <p className="font-[500] text-[#909CAB] font-grava">
                December 30, 2024
              </p>
            </div>
            <p className="font-[500] text-[#001F3E] text-xl font-grava">
              Tatum Bank celebrates grand opening with ribbon-cutting ceremony
            </p>
            <p className="text-sm lg:text-base text-[#667085] font-grava leading-[24px]">
              Tatum Bank officially opens its doors with a new branch,
              furthering financing inclusion in Eti Osa. Check out the...
            </p>
            <p
              onClick={() => {
                navigate(
                  "/resources",
                  {
                    state: {
                      section: "resources",
                    },
                  },
                  window.scrollTo(0, 0)
                );
              }}
              className="text-[#002244] font-grava cursor-pointer text-sm underline"
            >
              See photos
            </p>
          </div>
        </div>
        <button
          className="transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#090540] flex items-center justify-center"
          type="button"
          onClick={() => {
            navigate(
              "/resources",
              {
                state: {
                  section: "resources",
                },
              },
              window.scrollTo(0, 0)
            );
          }}
        >
          <p className="transition-colors duration-500 ease-in-out font-[500] text-base font-grava text-[#090540] group-hover:text-[#FFCC33]">
            Explore our resource centre
          </p>
        </button>
      </div> */}

      <div
        className="bg-[#F9FAFB] flex flex-col pt-[56px]  pb-[49.5px] lg:pt-[75px] lg:pb-[75px] gap-[49.5px] lg:gap-[32px] items-center px-5 lg:px-[56px]"
        data-aos="fade-up"
      >
        <p className="font-[500] text-[24px] lg:text-[48px] font-grava w-[300px] lg:w-full text-center text-[#002244]">
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
          }}
        >
          {/* Individual Card */}
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Card} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                Debit/Credit Cards
              </p>
              <p className="text-sm lg:text-base font-grava font-[300] text-[#002244]">
                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute bottom-5 cursor-default w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] opacity-20 border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}

              <p className="relative z-10 font-[400]  lg:text-[16px] font-grava text-[#002244]">

                {/* Learn more */}
                To be available soon
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={ATM} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                Client Centres
              </p>

              <p className="text-[14px] lg:text-base font-grava font-[350] text-[#002244]">
                Simply enter your location and find our closest Client Centres on the

                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>
              <p className="relative z-10 font-[300]  lg:text-base font-grava text-[#002244]">
                Check the nearest center near you
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Online} alt="Online" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-sm lg:text-base font-grava font-[300] text-[#002244]">
                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 cursor-default w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] opacity-20 border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}
              <p className="relative z-10 font-[300] lg:text-base font-grava text-[#002244]">
                To be available soon
                {/* Download our mobile app */}
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={USSD} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-sm lg:text-base font-grava font-[300] text-[#002244]">
                No internet? No problem. Access your account, check balances, 
                and perform essential transactions using our simple *365#. 
                It is quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 cursor-default w-[80%] h-[44px] lg:w-[356px] opacity-20 lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}
              <p className="relative z-10  font-[300] lg:text-base font-grava text-[#002244]">
                To be available soon
                {/* Dial *911# */}
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Loan} alt="Loan" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                Help and Support
              </p>
              <p className="text-sm lg:text-base font-grava font-[300] text-[#002244]">
                Access our comprehensive knowledge base for instant answers. 
                Find guides, tutorials, and FAQs to help you navigate our platform with ease.
                {/* Need help? Send us an email at <a href="info@tatumbank.com." className="underline">info@tatumbank.com.</a>
                {" "}Our team is always on standby to assist, and resolve any issues. */}
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              onClick={() => {navigate("/help"), window.scrollTo(0, 0)}}
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>
              <p className="relative z-10  font-[300] lg:text-base font-grava text-[#002244]">
                Visit Help Center
              </p>
            </button>
          </SwiperSlide>
          <SwiperSlide className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={FX} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-[450] font-grava text-[#002244]">
                Contact Us
              </p>
              <p className="text-sm lg:text-base font-grava font-[300] text-[#002244]">
                Get in touch with our dedicated support team available 24/7. 
                We're here to help through chat, call, or email for all your questions and concerns.
              </p>
            </div>
            <button
              className="absolute cursor-default bottom-5 w-[80%] h-[44px] lg:w-[356px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>
              <p className="relative z-10 font-[300]  lg:text-base font-grava text-[#002244]">
                Reach Out
              </p>
            </button>
          </SwiperSlide>
        </Swiper>

        {/* Tablets and Desktop Card Layout*/}
        <div className="hidden  w-full overflow-x-auto space-x-1 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Card} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                Debit/Credit Cards
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">

                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute cursor-default bottom-5 w-[80%] h-[44px] lg:w-[88%] opacity-20 lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              // onClick={() => {
              //   navigate("/personal", {
              //     state: {
              //       section: "personalCard",
              //     },
              //   });
              // }}
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}
              <p className="relative z-10 font-[450] lg:text-base font-grava text-[#002244]">
                To be available soon
                {/* Learn more */}
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[332px] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto ">
            <img src={ATM} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                Client Centres
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">
                Simply enter your location and find our closest Client Centres on the

                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] h-[44px] lg:w-[88%] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              onClick={() => {
                navigate(
                  "/contact",
                  {
                    state: {
                      section: "contact",
                    },
                  },
                  window.scrollTo(0, 0)
                );
              }}
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>

              <p className="relative z-10 font-[500] lg:text-base leading-6 font-grava text-[#002244]">

                Check the nearest center near you
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col p-[26px] bg-[#fff]  h-[332px] lg:h-[356px] relative rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Online} alt="Online" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">

                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 cursor-default w-[80%] h-[44px] lg:w-[88%] lg:h-[54px] border opacity-20 border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}
              <p className="relative z-10 font-[450]  lg:text-base font-grava text-[#002244]">
                To be available soon
                {/* Download our mobile app */}
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={USSD} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">

                No internet? No problem. Access your account, check balances, 
                and perform essential transactions using our simple *365#. 
                It is quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] cursor-default lg:w-[88%] h-[44px] lg:h-[54px] border opacity-20 border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button"
              // onClick={() => {
              //   navigate(
              //     "/digital",
              //     {
              //       state: {
              //         section: "digital",
              //       },
              //     },
              //     window.scrollTo(0, 0)
              //   );
              // }}
            >
              {/* <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span> */}
              <p className="relative z-10 font-[450] lg:text-base font-grava text-[#002244]">
                To be available soon
                {/* Dial *911# */}
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] md:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={Loan} alt="Loan" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                Help & Support
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">

                Access our comprehensive knowledge base for instant answers. 
                Find guides, tutorials, and FAQs to help you navigate our platform with ease.
              </p>
            </div>
            <button
              className="absolute  bottom-5 w-[80%] lg:w-[88%] h-[44px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              onClick={() => {navigate("/help"), window.scrollTo(0, 0)}}
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>

              <p className="relative z-10 font-[500] lg:text-base leading-6 font-grava text-[#002244]">

                Visit Help Centre
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[85%] sm:w-[80%] md:w-auto">
            <img src={FX} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">

              <p className="text-[20px] tracking-[0.01em] leading-[30px] font-[500] font-grava text-[#002244]">
                Contact Us
              </p>
              <p className="text-[16px] lg:text-base leading-6 font-grava font-[400] text-[#002244]">

                Get in touch with our dedicated support team available 24/7. 
                We're here to help through chat, call, or email for all your questions and concerns.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[80%] lg:w-[88%] h-[44px] lg:h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}
            >
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-500 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"
              ></span>

              <p className="relative z-10 font-[500] lg:text-base leading-6 font-grava text-[#002244]">

                Reach Out
              </p>
            </button>
          </div>
        </div>
      </div>
      <CookieConsent />
    </div>
  );
};

export default Home;
