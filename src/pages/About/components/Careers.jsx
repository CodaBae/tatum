import React, { useEffect, useRef, useState } from "react";
import heroImg from "../../../assets/svg/careersHeroImage.svg";
import ball1 from "../../../assets/svg/ball1.svg";
import ball2 from "../../../assets/svg/ball2.svg";
import ball3 from "../../../assets/svg/ball3.svg";
import arrow from "../../../assets/svg/buttonArrow.svg";
import arrow2 from "../../../assets/svg/buttonArrowBlue.svg";
import benefitsPerksBG from "../../../assets/svg/benefitsPerksBG.svg";
import benefitsBG2 from "../../../assets/svg/benefitsBG2.svg";
import PerksBennefitsIMG from "../../../assets/jpg/PerksBennefitsIMG.jpg";
import PerksBenefitCircle from "../../../assets/svg/PerksBenefitCircle.svg";
import PerksBenefitsWing1 from "../../../assets/svg/PerksBenefitsWing1.svg";
import PerksBenefitsWing2 from "../../../assets/svg/PerksBenefitsWing2.svg";
import graduateIcon from "../../../assets/svg/graduateIcon.svg";
import trainingIcon from "../../../assets/svg/trainingIcon.svg";
import connectivityIcon from "../../../assets/svg/connectivityIcon.svg";
import whiteArrowIcon from "../../../assets/svg/whiteArrowIcon.svg";
import Celebrations from "../../../assets/jpg/Celebrations.jpg";
import Retreats from "../../../assets/jpg/Retreats.jpg";
import Wellness from "../../../assets/jpg/Wellness.jpg";
import resourcesIcon from "../../../assets/svg/resourcesIcon.svg";
import policiesIcon from "../../../assets/svg/policiesIcon.svg";
import groupIcon from "../../../assets/svg/groupIcon.svg";
import applicationIcon from "../../../assets/svg/applicationIcon.svg";
import leftBlueArrow from "../../../assets/svg/leftBlueArrow.svg";
import rightBlueArrow from "../../../assets/svg/rightBlueArrow.svg";
import OnlineAssessments from "../../../assets/svg/OnlineAssessments.svg";
import interview from "../../../assets/svg/interview.svg";
import medical from "../../../assets/svg/medical.svg";
import training from "../../../assets/svg/training.svg";
import Physical from "../../../assets/svg/Physical.svg";
import verification from "../../../assets/svg/verification.svg";
import ApplynowImg from "../../../assets/svg/ApplynowImg.svg";
import Applynowimg2 from "../../../assets/svg/Applynowimg2.svg";
import ApplynowCircle from "../../../assets/svg/ApplynowCircle.svg";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import HeroSection from "../../../components/HeroSection";

const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100)

  const scrollableDivRef = useRef(null);

  const careersRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 1100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
    let scrollInterval;

    const handleResize = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }

      if (window.innerWidth < 768) {
        scrollInterval = setInterval(() => {
          if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
              left: 100,
              behavior: "smooth",
            });
          }
        }, 5000);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  const scrollDiv = (scrollOffset) => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };



  return (
    <div ref={careersRef} className="overflow-hidden">
      {/* Hero section */}
      {
        isMobile ? 
        //Mobile
        <div className="relative w-full h-[630px] lg:h-[713px]  overflow-hidden bg-[#FFCC33]">
        <img
          src={ball1}
          alt="ball"
          className="absolute w-[220px] h-[220px] lg:w-[479px] lg:h-[480px] left-[-10px] top-[280px] lg:left-[-100px] lg:top-[220px] "
        />
        <img
          src={ball2}
          alt="ball"
          className="absolute w-[64px] h-[64px] lg:w-[136px] lg:h-[136px] left-[255px] top-[100px] lg:left-[610px] lg:top-[135px] "
        />
        <img
          src={ball3}
          alt="ball"
          className="absolute hidden lg:block lg:w-[670px] lg:h-[670px] right-[0px] top-[294px]"
        />
        <div className="animate__animated animate__fadeInUp  absolute w-[274px] sm:w-[350px] top-[120px] left-[25px] lg:w-[531px] lg:top-[220px] lg:left-[56px] ">
          <h1 className="font-grava font-[700] w-[229px] sm:w-[350px] lg:w-[531px] text-[34px] sm:text-[50px] lg:text-[75px] lg:leading-[78.75px] lg:tracking-[0.05%] leading-[40px] tracking-[0.02%]  text-[#002244] pb-[12.5px] lg:pb-[25px]">
            Build Your Future with Us
          </h1>
          <p className="animate__animated  animate__fadeInUp animate__slow font-grava font-[350] text-[14px] sm:text-[18px] leading-[20px] tracking-[0.2%]  lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244] pb-[25px]">
            Working with Tatum Bank is more than just a career; it’s meaningful
            work that improves the lives of millions of people.
          </p>
          <button
            className={`animate__animated animate__slow animate__fadeInUp transition-all duration-300 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] w-[190px] lg:w-[243px] rounded-tl-lg rounded-br-lg h-[59px] gap-2 flex items-center justify-center`}
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium  lg:text-base font-grava text-[#FFCC33] group-hover:text-[#002244]">
              View open positions
            </p>
            <BsArrowRight size={100}   className="text-5xl  w-5 h-5 mt-[1px] transition-colors duration-300 ease-in-out text-[#FFCC33] group-hover:text-[#002244]" />
          </button>
        </div>
        <div className="animate__animated animate__fadeInRight absolute  bottom-[-80px] lm:bottom-[-40px] right-[-25px] lg:top-[80px] lg:right-[35px] lg:z-10">
          <div className="relative">
            <div className="absolute top-[18px] hidden lg:block lg:top-[40px] right-0 z-20 w-[75%] h-[20px] bg-[#FFCC33] "></div>
            <img
              src={isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1739277059/man_on_phone_cndrwb.png" : heroImg}
              alt="heroImg"
              className="w-[305px] h-[361px] sm:w-[420px] sm:h-auto lg:w-[585px] lg:h-[692px]"
            />
          </div>
        </div>
      </div> 
        :
        //Desktop
        <section className="w-full h-full ">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739209666/Slide_2_1_qjbpgq.png"} 
            title={` <span class="font-bold ">Build Your <br />Future with Us</span>`}
            content={"Working with Tatum Bank is more than just a career; it’s meaningful work that improves the lives of millions of people."} 
            link={"#"} 
            sectionName={"savings"} 
            mainImgDesktop={heroImg} 
            mainImgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739277059/man_on_phone_cndrwb.png"} 
            btnText={"View open positions"} 
          />
        </section>
      }


      {/* OPPOTUNITIES SECTION */}

      <div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row p-[25px] lg:p-[50px] mt-[35px] mb-[80px] lg:mt-[50px] lg:mb-[50px] gap-[20px] lg:gap-[140px]">
          <div className="w-[350px] sm:w-[545px] lg:w-[546px]">
            <h2 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:leading-[35px] sm:text-[34px] lg:text-[40px] lg:leading-[50px] lg:tracking-[0.2%] text-[#002244]">
              We are always seeking passionate, knowledgeable, ambitious and
              well-rounded individuals.
            </h2>
          </div>
          <div className="w-[350px] sm:w-[545px]  lg:w-[654px]">
            <p className="font-grava font-[350] text-[18px] leading-[27px] sm:text-[21px] sm:leading-[35px] tracking-[0.2%] lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244] mb-[20px]">
              We’re driven by innovation, collaboration, and a commitment to
              making a difference.
            </p>
            <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244] mb-[20px]">
              We’re committed to helping you reach your potential. Whether
              you’re a recent graduate or a seasoned professional, we offer
              tailored programs to suit your career stage.
            </p>
            <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244] mb-[20px]">
              Whether you're a recent graduate or a student seeking hands-on
              experience, we believe in giving you the tools, experiences, and
              support to unlock your potential.
            </p>
            <button className="pb-[4px]  border-b-[1px] border-[#002244]">
              <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244] flex items-center justify-start">
                Find opportunities
                <span className="">
                  <img
                    src={arrow2}
                    alt="-->"
                    className="  sm:pt-[2px] ml-[6px]"
                  />
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* BENEFITS AND PERKS SECTION */}

      <div className="relative w-full h-[1400px] lg:h-[1050px] bg-[#002244] lg:bg-[#ffffff]">
        <div>
          <img
            src={benefitsPerksBG}
            alt="benefitsPerksBG"
            className="hidden lg:block"
          />
          <img
            src={benefitsBG2}
            alt="benefitsPerksBG"
            className="sm:hidden w-[440px]"
          />
        </div>
        <div className="absolute top-[-40px] left-[25px]  lg:top-[-190px] lg:left-[56px] w-[215.37px] h-[240px] lg:w-[341px] lg:h-[380px] lg:z-10">
          <img
            src={PerksBennefitsIMG}
            alt="PerksBennefitsIMG"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[237px] left-[25px] lg:left-[56px] w-[350px] lg:w-[590px]">
          <h3 className="font-grava font-[500] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-[0.2%] text-[#FFCC33]">
            Grow with us
          </h3>
          <p className="font-grava font-[500] text-[24px] leading-[30px] lg:text-[34px] lg:leading-[40px] tracking-[1.4%] lg:tracking-[0.2%] text-[#ffffff]">
            When you join us, you’re not just taking on a job, you’re stepping
            into a career filled with growth, purpose, and opportunities to
            thrive.
          </p>
        </div>
        <div className="absolute top-[450px] lg:top-[535px] w-[100%] flex justify-center ">
          <div className="flex flex-col items-center lg:flex-row justify-center w-[1042px]">
            <img
              src={PerksBenefitCircle}
              alt="PerksBenefitCircle"
              className="w-[280px] lg:w-[384px] lg:z-10"
            />
            <div className=" absolute flex flex-col lg:flex-row items-center justify-center w-[1042px] h-[236px] gap-[150px] lg:gap-[320px] top-[420px] lg:top-[114px]">
              <div className="flex flex-col gap-[120px]">
                <div className="relative">
                  <img src={PerksBenefitsWing1} alt="PerksBenefitsWing" />
                  <div className="absolute top-[18px] left-[19px] w-[261px]">
                    <p className="font-grava font-[350] text-[20px] leading-[26px] tracking-[1.4%] text-[#ffffff]">
                      Access to world-class training programs
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={PerksBenefitsWing1} alt="PerksBenefitsWing" />
                  <div className="absolute top-[18px] left-[19px] w-[262px]">
                    <p className="font-grava font-[350] text-[20px] leading-[26px] tracking-[1.4%] text-[#ffffff]">
                      Flexible work arrangement for a better work-life balance
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[120px]">
                <div className="relative">
                  <img
                    src={PerksBenefitsWing2}
                    alt="PerksBenefitsWing"
                    className="hidden lg:block"
                  />
                  <img
                    src={PerksBenefitsWing1}
                    alt="PerksBenefitsWing"
                    className="lg:hidden"
                  />
                  <div className="absolute top-[18px] left-[19px] lg:left-[70px] w-[277px]">
                    <p className="font-grava font-[350] text-[20px] leading-[26px] tracking-[1.4%] text-[#ffffff] lg:text-right">
                      Competitive compensation and benefits
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={PerksBenefitsWing2}
                    alt="PerksBenefitsWing"
                    className="hidden lg:block"
                  />
                  <img
                    src={PerksBenefitsWing1}
                    alt="PerksBenefitsWing"
                    className="lg:hidden"
                  />
                  <div className="absolute top-[18px] left-[19px] lg:left-[41px] w-[306px]">
                    <p className="font-grava font-[350] text-[20px] leading-[26px] tracking-[1.4%] text-[#ffffff] lg:text-right">
                      A vibrant culture that celebrates diversity and inclusion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAREERS SECTION */}
      <div className="w-[100%] flex flex-col items-center lg:flex-row lg:justify-center ">
        <div className=" w-[350px] sm:w-[486px] lg:w-[1327px] flex flex-col  gap-[40px] mt-[50px] mb-[90px] ">
          <div className="flex flex-col w-[350px] sm:w-[486px] gap-[16px]">
            <h2 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
              Careers at Tatum Bank
            </h2>
            <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%] sm:text-[20px] sm:leading-[26px] sm:tracking-[1.4%] text-[#002244]">
              We’re committed to helping you reach your potential. Whether
              you’re a recent graduate or a seasoned professional, we offer
              tailored programs to suit your career stage.
            </p>
          </div>
          <div className=" w-[350px] sm:w-[486px] lg:w-[1327px] flex-col lg:flex-row flex gap-[20px]">
            <div className="w-[350px] sm:w-[429px] bg-[#F9FAFB] pt-[32px] pb-[32px] pl-[18px] pr-[18px] rounded-[24px] ">
              <div className="flex flex-col gap-[24px] sm:gap-[40px]">
                <div>
                  <img
                    src={graduateIcon}
                    alt="graduateIcon"
                    className="w-[50px] sm:w-[80px] "
                  />
                </div>
                <div className="flex flex-col gap-[16px] ">
                  <div>
                    <h1 className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                      Internships & Graduate Programs
                    </h1>
                  </div>
                  <div>
                    <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                      Are you ready to take your first step into the
                      professional world? At Tatum, we’re passionate about
                      nurturing the next generation of leaders and innovators.
                      Our Internships and Graduate Programs are designed to
                      equip you with real-world experience, mentorship, and
                      skills that will propel you toward a successful career.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="pb-[4px]  border-b-[1px] border-[#002244]">
                    <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244] flex justify-start">
                      Apply for an Internship
                      <span className="mt-[1px] ml-[6px]">
                        <img
                          src={arrow2}
                          alt="-->"
                          className="w-[20px] sm:w-[26px]"
                        />
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[350px] sm:w-[429px] bg-[#F9FAFB] pt-[32px] pb-[32px] pl-[18px] pr-[18px] rounded-[24px] ">
              <div className="flex flex-col gap-[24px] sm:gap-[40px]">
                <div>
                  <img
                    src={trainingIcon}
                    alt="graduateIcon"
                    className="w-[50px] sm:w-[80px] "
                  />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <h1 className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                      Leadership Training
                    </h1>
                  </div>
                  <div>
                    <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                      Our Leadership Training Program is designed to unlock your
                      potential and prepare you to take on critical leadership
                      roles in today’s dynamic world. We believe that great
                      leaders inspire change, drive innovation, and shape the
                      future. This program will help you gain the knowledge, and
                      skills to lead with impact.
                    </p>
                  </div>
                </div>
                <div className="pt-[25px]">
                  <button className="pb-[4px]  border-b-[1px] border-[#002244]">
                    <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244] flex justify-start">
                      Find opportunities
                      <span className="mt-[1px] ml-[6px]">
                        <img
                          src={arrow2}
                          alt="-->"
                          className="w-[20px] sm:w-[26px]"
                        />
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[350px] sm:w-[429px] bg-[#F9FAFB] pt-[32px] pb-[32px] pl-[18px] pr-[18px] rounded-[24px] ">
              <div className="flex flex-col gap-[24px] sm:gap-[40px]">
                <div>
                  <img
                    src={connectivityIcon}
                    alt="graduateIcon"
                    className="w-[50px] sm:w-[80px] "
                  />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <h1 className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                      Mentorship Opportunities
                    </h1>
                  </div>
                  <div>
                    <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                      Our mentorship opportunities connect you with seasoned
                      professionals who are committed to guiding you to achieve
                      your goals. Whether you're just starting your career or
                      looking to refine your skills, our mentorship programs are
                      designed to unlock your full potential.
                    </p>
                  </div>
                </div>
                <div className="pt-[25px]">
                  <button className="pb-[4px]  border-b-[1px] border-[#002244]">
                    <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244] flex justify-start">
                      Find opportunities
                      <span className="mt-[1px] ml-[6px]">
                        <img
                          src={arrow2}
                          alt="-->"
                          className="w-[20px] sm:w-[26px]"
                        />
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOB SEARCH SECTION */}

      <div>
        <div className="w-[100%] h-[809px] lg:h-[720px] bg-[#FFCC33] flex flex-col items-center gap-[40px] pt-[40px] lg:pt-[80px] pb-[80px]  mb-[10px] ">
          <div className="w-[1328px] flex justify-center lg:justify-start">
            <div className="w-[350px] sm:w-[500px] lg:w-[720px] ">
              <h2 className="font-grava font-[500] text-[28px] leading-[35px] lg:text-[40px] lg:leading-[50px] tracking-[0.2%] text-[#002244]">
                You’re the missing piece of our team! Check out our open
                positions.
              </h2>
            </div>
          </div>

          <div className="w-[350px] sm:w-[500px] lg:w-[1328px] flex flex-col gap-[32px]">
            <div className="bg-[#002244] lg:h-[152px] flex flex-col lg:flex-row lg:justify-between pt-[32px] pb-[32px] pr-[24px] pl-[24px] lg:pt-[46px] lg:pb-[46px] lg:pr-[48px] lg:pl-[48px] gap-[40px] lg:gap-[270px] rounded-[20px]">
              <div className="flex flex-col w-[249px] lg:w-[284px] gap-[8px] ">
                <div>
                  <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#E6E9EC]">
                    Position
                  </p>
                </div>
                <div>
                  <p className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#FFFFFF]">
                    Your next position at Tatum...
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[40px] lg:flex-row lg:justify-between lg:w-[376px] ">
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#E6E9EC]">
                      Team
                    </p>
                  </div>
                  <div>
                    <p className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#FFFFFF]">
                      Graduate Training
                    </p>
                  </div>
                </div>

                <div className="flex justify-between lg:block">
                  <div className="flex flex-col gap-[8px]">
                    <div>
                      <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#E6E9EC]">
                        Location
                      </p>
                    </div>
                    <div>
                      <p className="font-grava font-[500] text-[18px] leading-[27px] tracking-[0.2%] lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#FFFFFF]">
                        Abuja, NG
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden">
                    <img
                      src={whiteArrowIcon}
                      alt="whiteArrowIcon"
                      className="w-[24px] "
                    />
                  </div>
                </div>
              </div>

              <div className="items-center hidden lg:flex">
                <img src={whiteArrowIcon} alt="whiteArrowIcon" />
              </div>
            </div>

            <div className="">
              <div className="bg-[#ffffff] lg:w-[1328px] flex flex-col items-center lg:flex-row lg:justify-between pt-[32px] pb-[32px] pr-[24px] pl-[24px] lg:pt-[64px] lg:pb-[64px] lg:pr-[48px] lg:pl-[48px] rounded-[20px] gap-[40px] ">
                <div className="flex flex-col gap-[14px] w-[302px] lg:w-[621px]">
                  <h2 className="font-grava font-[500] text-[20px] leading-[25px] tracking-[1.4%] lg:text-[34px] lg:leading-[40px] lg:tracking-[0.2%] text-[#002244]">
                    Looking for your perfect role?
                  </h2>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] lg:text-[18px] lg:leading-[27px] tracking-[0.2%] text-[#002244]">
                    Your dream career starts here. Browse our open roles and
                    take the first step towards a rewarding future.
                  </p>
                </div>

                <div className="flex items-center">
                  <button
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__slow animate__fadeInUp"
                        : ""
                    } transition-all duration-300 ease-in-out bg-[#ffffff] group hover:bg-[#002244] hover:border-[1.5px] hover:border-[#ffffff] w-[302px] h-[48px] lg:w-[246px] lg:h-[64px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center border-[1px] border-[#002244] `}
                    type="button">
                    <p className="transition-colors duration-300 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#ffffff]">
                      Search jobs
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIVERSITY SECTION */}

      <div className=" flex justify-center">
        <div className="w-[1328px] flex flex-col items-center lg:items-start gap-[40px] mt-[50px] mb-[50px] ">
          <div className="w-[350px] sm:w-[486px] flex flex-col gap-[16px] ">
            <div>
              <h1 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
                Work. Play. Thrive.
              </h1>
            </div>
            <div>
              <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%] sm:text-[20px] sm:leading-[26px] sm:tracking-[1.4%] text-[#002244]">
                At Tatum, we don’t just work—we celebrate. From team-building
                events to wellness initiatives, our culture is vibrant and
                inclusive.
              </p>
            </div>
          </div>

          <div className="sm:w-[100%] flex justify-center">
            <div className="flex flex-col lg:flex-row gap-[20px] w-[350px] sm:w-[486px] lg:w-[100%]  ">
              <div className="relative">
                <div className="w-[350px] h-[300px] sm:w-[486px] sm:h-[auto] lg:w-[654px] lg:h-[762px] rounded-[24px] overflow-hidden ">
                  <img
                    src={Celebrations}
                    alt="Celebrations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

                <div className="absolute top-[230px] left-[20px] lg:top-[650px] lg:left-[32px] w-[410px] ">
                  <p className="font-grava font-[500] text-[20px] leading-[25px] tracking-[1.4%] lg:text-[34px] lg:leading-[40px] lg:tracking-[0.2%] text-[#ffffff]">
                    Celebrations of milestones and achievements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="relative">
                  <div className="w-[350px] h-[300px] sm:w-[486px] sm:h-[auto] lg:w-[654px] lg:h-[371px] rounded-[24px] overflow-hidden">
                    <img
                      src={Retreats}
                      alt="Retreats"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

                  <div className="absolute  top-[230px] left-[20px] lg:top-[259px] lg:left-[32px] w-[310px] lg:w-[410px] ">
                    <p className="font-grava font-[500] text-[20px] leading-[25px] tracking-[1.4%] lg:text-[34px] lg:leading-[40px] lg:tracking-[0.2%] text-[#ffffff]">
                      Team retreats and social events.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[350px] h-[300px] sm:w-[486px] sm:h-[auto] lg:w-[654px] lg:h-[371px] rounded-[24px] overflow-hidden ">
                    <img
                      src={Wellness}
                      alt="Wellness"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

                  <div className="absolute  top-[255px] left-[20px] lg:top-[259px] lg:left-[32px] w-[410px] ">
                    <p className="font-grava font-[500] text-[20px] leading-[25px] tracking-[1.4%] lg:text-[34px] lg:leading-[40px] lg:tracking-[0.2%] text-[#ffffff]">
                      Monthly wellness programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-[20px] mb-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-[32px] justify-between w-[350px] lg:w-[1328px]">
          <div className="w-[350px] sm:w-[500px] flex flex-col gap-[16px] ">
            <div>
              <h1 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
                Diversity, Equity, and Inclusion (DEI)
              </h1>
            </div>
            <div>
              <p className="font-grava font-[350] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[20px] sm:leading-[26px] sm:tracking-[1.4%] text-[#002244]">
                Empowering everyone, embracing differences. At Tatum, we
                celebrate diversity because it drives innovation and success.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="w-[350px] sm:w-[500px] lg:w-[685px] flex justify-between rounded-[16px] pt-[16px] pb-[16px] pl-[25px] pr-[24px] bg-[#F9FAFB] ">
              <div>
                <p className="font-grava font-[350] text-[14px]  tracking-[0.2%] sm:text-[20px]  sm:tracking-[1.4%] text-[#002244]">
                  Active Employee Resource Groups.
                </p>
              </div>
              <div>
                <img
                  src={resourcesIcon}
                  alt="resourcesIcon"
                  className="w-[20px] sm:w-[32px]"
                />
              </div>
            </div>

            <div className="w-[350px] sm:w-[500px] lg:w-[685px] flex justify-between rounded-[16px] pt-[16px] pb-[16px] pl-[25px] pr-[24px] bg-[#F9FAFB] ">
              <div>
                <p className="font-grava font-[350] text-[14px]  tracking-[0.2%] sm:text-[20px]  sm:tracking-[1.4%] text-[#002244]">
                  Equal opportunity policies.
                </p>
              </div>
              <div>
                <img
                  src={policiesIcon}
                  alt="resourcesIcon"
                  className="w-[20px] sm:w-[32px]"
                />
              </div>
            </div>

            <div className="w-[350px] sm:w-[500px] lg:w-[685px] flex justify-between rounded-[16px] pt-[16px] pb-[16px] pl-[25px] pr-[24px] bg-[#F9FAFB] ">
              <div>
                <p className="font-grava font-[350] text-[14px]  tracking-[0.2%] sm:text-[20px]  sm:tracking-[1.4%] text-[#002244]">
                  Programs to support underrepresented groups.
                </p>
              </div>
              <div>
                <img
                  src={groupIcon}
                  alt="resourcesIcon"
                  className="w-[20px] sm:w-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HIRING PROCCESS SECTION */}

      <div className=" bg-[#F9FAFB] h-[700px] lg:h-[796px] flex justify-center pt-[70px] ">
        <div className=" flex flex-col items-center lg:items-start gap-[40px] relative ">
          <div className=" flex lg:justify-between justify-center w-[1328px]  top-[80px] left-[56px ">
            <div className="w-[350px] sm:w-[486px] flex flex-col gap-[16px]">
              <div className="">
                <h2 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
                  Our Hiring Process
                </h2>
              </div>
              <div>
                <p className="font-grava font-[350] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[20px] sm:leading-[26px] sm:tracking-[1.4%] text-[#002244]">
                  At Tatum, we are committed to ensuring a transparent, fair,
                  and engaging recruitment experience. Here's what to expect:
                </p>
              </div>
            </div>
            <div className="hidden lg:flex gap-[16px]">
              <button onClick={() => scrollDiv(-300)}>
                <img
                  src={leftBlueArrow}
                  alt="leftBlueArrow"
                  className="p-[10px] rounded-full  hover:bg-[#E0E7EF] active:bg-[#D1D9E4] transition-all  flex items-center justify-center"
                />
              </button>
              <button onClick={() => scrollDiv(300)}>
                <img
                  src={rightBlueArrow}
                  alt="rightBlueArrow"
                  className="p-[10px] rounded-full  hover:bg-[#E0E7EF] active:bg-[#D1D9E4] transition-all  flex items-center justify-center"
                />
              </button>
            </div>
          </div>

          <div
            ref={scrollableDivRef}
            className=" absolute top-[170px] lg:top-[200px] gap-[20px] flex w-[370px] sm:w-[486px] lg:w-full overflow-x-auto scrollbar-hidden">
            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px]  flex flex-col ">
              <div>
                <img
                  src={applicationIcon}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Application
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    Submit your application online by completing the form and
                    attaching your CV. Be sure to highlight your skills,
                    experiences, and aspirations.
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px] flex flex-col     ">
              <div>
                <img
                  src={OnlineAssessments}
                  alt="OnlineAssessments"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Online Assessments
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    Take a series of online assessments designed to evaluate
                    your technical knowledge, problem-solving abilities, and
                    logical reasoning skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px] flex flex-col     ">
              <div>
                <img
                  src={Physical}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Physical Assessments
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    For roles requiring physical or practical tasks, you may be
                    invited to demonstrate your abilities through a structured
                    physical assessment.
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px]  flex flex-col     ">
              <div>
                <img
                  src={verification}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Document & Eligibility Verification
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    We will verify the authenticity of your credentials and
                    ensure that all necessary requirements for the role are met.
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px]  flex flex-col     ">
              <div>
                <img
                  src={interview}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Interview Stage
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    Engage in one-on-one or panel interviews to showcase your
                    skills, learn about the organization, and interact with top
                    management for alignment with our goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px]  flex flex-col ">
              <div>
                <img
                  src={medical}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Medical Fitness Assessment
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    Complete a medical fitness evaluation to ensure you meet thw
                    health and safety standards required for the role.
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-[32px] sm:gap-[48px] w-[300px] h-[244px] sm:w-[429px] sm:h-[298px] bg-[#ffffff] p-[24px] flex flex-col     ">
              <div>
                <img
                  src={training}
                  alt="applicationIcon"
                  className="w-[32px] sm:w-[40px]"
                />
              </div>
              <div className="w-[260px] sm:w-[381px] flex flex-col gap-[16px] sm:gap-[24px]">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] tracking-[0.2%] sm:text-[24px] sm:leading-[30px] sm:tracking-[1.4%] text-[#002244]">
                    Training Period
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[27px] sm:tracking-[0.2%] text-[#002244]">
                    Upon selection, participate in our immersive 6-month
                    training program (or specific period) to develop your skills
                    and understand our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-[300px]  w-[100%] flex justify-center mb-[80px]">
        <div className=" absolute top-[-150px] pl-[20px] pt-[56px] lg:pl-[56px] lg:pt-[39px] w-[350px] h-[545px]  lg:w-[1113px] lg:h-[418px] bg-[#002244]  rounded-tl-[24px]   rounded-br-[24px] sm:mt-[60px] lg:mt-[0px] ">
          <div className="flex flex-col-reverse lg:flex-row gap-[40px] lg:justify-between w-[310px] lg:w-[1001px] items-center">
            <div className="flex flex-col justify-center h-[170px] w-[310px] lg:h-[225px] lg:w-[473px]  gap-[32px]">
              <div className="flex flex-col w-[310px] lg:w-[473px] gap-[12px]">
                <h1 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] lg:text-[50px] lg:leading-[50px] lg:tracking-[0.2%] text-[#ffffff]">
                  Apply now!
                </h1>
                <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[20px] lg:leading-[26px] lg:tracking-[1.4%] text-[#ffffff]">
                  Join us and take your career to new heights, contributing to a
                  future where banking meets ambition and expertise.
                </p>
              </div>

              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244] hover:border-[1.5px] hover:border-[#ffcc33] w-[129px] h-[44px]  lg:w-[161px] sm:h-[53px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button">
                <p className="transition-colors duration-300 ease-in-out font-medium  lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                  Apply now
                </p>
                <BsArrowRight size={100}   className="text-5xl  w-5 h-5 mt-[1px] transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
              </button>
            </div>
            <div className=" relative w-[246px] h-[223px] lg:w-[248px] lg:h-[305.18px]">
              <img
                src={ApplynowImg}
                alt="Applynow"
                className="absolute top-[2px] lg:top-0 left-0 w-[131.56px] lg:w-[155.36px] "
              />
              <img
                src={Applynowimg2}
                alt="Applynowimg2"
                className="absolute top-[93px] left-[116px] lg:top-[151.66px] lg:left-[55.49px] w-[129.99px] lg:w-[153.51px] "
              />
              <img
                src={ApplynowCircle}
                alt="ApplynowCircle.svg"
                className="absolute top-[0px] left-[138px] lg:top-[72px] lg:left-[156px] w-[77.9px] lg:w-[92px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
