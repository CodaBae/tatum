import React, { useState, useEffect, useRef } from "react";
import heroImg from "../../assets/jpg/PersonalHeroImg.jpg";
import arrow from "../../assets/svg/buttonArrow.svg";
import arrow2 from "../../assets/svg/buttonArrowBlue.svg";
import ServicesCard1 from "../../assets/jpg/ServicesCard1.jpg";
import ServicesCard2 from "../../assets/jpg/ServicesCard2.jpg";
import ServicesCard3 from "../../assets/jpg/ServicesCard3.jpg";
import ServicesCard4 from "../../assets/jpg/ServicesCard4.jpg";
import whiteArrowIcon from "../../assets/svg/whiteArrowIcon.svg";
import beforeFAQ from "../../assets/jpg/beforeFAQ.jpg";
import plusIcon from "../../assets/svg/plusIcon.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Personal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const personalRef = useRef(null);
  const faqRef = useRef(null);
  const saveRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.section === "personal" && personalRef.current) {
      personalRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "save" && saveRef.current) {
      saveRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <div ref={personalRef}>
      <div className="relative overflow-hidden mt-[80px]">
        <div className="relative h-[619px] lg:h-[630px]">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
        </div>

        <div className="absolute w-[274px] top-[350px] left-[25px] sm:left-[40px] sm:w-[622px] lg:top-[215px] lg:left-[56px]">
          <h1 className="font-grava font-[700] w-[350px] sm:w-[622px] text-[32px] sm:text-[50px] lg:text-[75px] lg:leading-[78.75px] lg:tracking-[0.05%] leading-[40px] tracking-[0.02%] text-[#ffffff] pb-[12.5px] lg:pb-[25px]">
            Personal Banking
          </h1>
          <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[24px] lg:text-[24px] lg:leading-[30px] sm:leading-[30px] lg:tracking-[1.4%] sm:lg:tracking-[0.5%] text-[#ffffff] pb-[25px]">
            Our personal banking solutions are designed to add color to your
            financial journey and make managing your money both simple and
            rewarding.
          </p>
          <button
            className={`${
              activeIndex === 2
                ? "animate__animated animate__slow animate__fadeInUp"
                : ""
            } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244] hover:border hover:border-[#ffcc33] w-[174px] h-[44px]  lg:w-[223px] lg:h-[59px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
            type="button">
            <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
              Open an Account
            </p>
            <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
          </button>
        </div>
      </div>

      {/* SERVICES SECTION */}

      <div
        className="flex flex-col items-center pt-[80px] pb-[80px]"
        ref={saveRef}>
        {/* CARD ONE */}
        <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[0px] justify-between w-[1328px] pb-[35px] ">
          <div className=" relative w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] ">
            <div className="w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] overflow-hidden ">
              <img
                src={ServicesCard1}
                alt="ServicesCard1"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
            </div>

            <div className="absolute top-[190px] left-[20px] sm:top-[370px] sm:left-[24px] flex flex-col gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-[310px] sm:w-[558px]">
                <div>
                  <h1 className="font-grava font-[500] text-[20px] leading-[25px] sm:text-[28px] sm:leading-[35px] text-[#ffffff]">
                    Loans and Mortgages
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Buy your dream home with our flexible mortgage plans and
                    quick-access personal loans.
                  </p>
                </div>
              </div>
              <div>
                <button className="group w-full">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    learn more
                    <span className="group-hover:ml-2">
                      <img
                        src={whiteArrowIcon}
                        alt="whiteArrowIcon"
                        className="w-[20px] h-[20px] sm:w-[25.59px] sm:h-[25.59px] ml-[3px] pt-[2px] sm:ml-[7px] sm:pt-[5px]"
                      />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* CARD TWO */}
          <div className=" relative w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] ">
            <div className="w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] overflow-hidden ">
              <img
                src={ServicesCard2}
                alt="ServicesCard1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute top-[190px] left-[20px] sm:top-[370px] sm:left-[24px] flex flex-col gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-[310px] sm:w-[558px]">
                <div>
                  <h1 className="font-grava font-[500] text-[20px] leading-[25px] sm:text-[28px] sm:leading-[35px] text-[#ffffff]">
                    Investments
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Take advantage of our diversified investment options to help
                    secure your financial future.
                  </p>
                </div>
              </div>
              <div>
                <button className="group w-full">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    View Investment Options
                    <span className="group-hover:ml-2">
                      <img
                        src={whiteArrowIcon}
                        alt="whiteArrowIcon"
                        className="w-[20px] h-[20px] sm:w-[25.59px] sm:h-[25.59px] ml-[3px] pt-[2px] sm:ml-[7px] sm:pt-[5px]"
                      />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* CARD THREE */}
        <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[0px]  justify-between w-[1328px] ">
          <div className=" relative w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] ">
            <div className="w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] overflow-hidden ">
              <img
                src={ServicesCard3}
                alt="ServicesCard1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute top-[190px] left-[20px] sm:top-[370px] sm:left-[24px] flex flex-col gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-[310px] sm:w-[558px]">
                <div>
                  <h1 className="font-grava font-[500] text-[20px] leading-[25px] sm:text-[28px] sm:leading-[35px] text-[#ffffff]">
                    Insurance Services
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Life happens, be ready for it. Start protecting yourself and
                    loved ones with our affordable insurance plans.
                  </p>
                </div>
              </div>
              <div>
                <button className="group w-full">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    View our Insurance Plans
                    <span className="group-hover:ml-2">
                      <img
                        src={whiteArrowIcon}
                        alt="whiteArrowIcon"
                        className="w-[20px] h-[20px] sm:w-[25.59px] sm:h-[25.59px] ml-[3px] pt-[2px] sm:ml-[7px] sm:pt-[5px]"
                      />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* CARD FOUR */}
          <div className=" relative w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] ">
            <div className="w-[350px] h-[371px] sm:w-[654px] sm:h-[570px] rounded-[24px] overflow-hidden ">
              <img
                src={ServicesCard4}
                alt="ServicesCard1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute top-[190px] left-[20px] sm:top-[370px] sm:left-[24px] flex flex-col gap-[24px] sm:gap-[32px]">
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-[310px] sm:w-[558px]">
                <div>
                  <h1 className="font-grava font-[500] text-[20px] leading-[25px] sm:text-[28px] sm:leading-[35px] text-[#ffffff]">
                    Online Banking
                  </h1>
                </div>
                <div>
                  <p className="font-grava font-[350] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    A simple, secure, and always available way to access all
                    your banking needs digitally.
                  </p>
                </div>
              </div>
              <div>
                <button className="group w-full">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Get the App
                    <span className="group-hover:ml-2">
                      <img
                        src={whiteArrowIcon}
                        alt="whiteArrowIcon"
                        className="w-[20px] h-[20px] sm:w-[25.59px] sm:h-[25.59px] ml-[3px] pt-[2px] sm:ml-[7px] sm:pt-[5px]"
                      />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center w-[full] h-[180px] sm:h-[280px] bg-[#ffffff]">
        <div className="w-[310px] sm:w-[596px] flex flex-col items-center gap-[24px]">
          <div>
            <h2 className="font-grava font-[500] text-[18px] leading-[27px] sm:text-[32px] sm:leading-[40px] tracking-[0.2%] text-[#002244] text-center ">
              At Tatum Bank, we are fostering financial inclusivity. We're here
              to make banking feel less like banking and more like partnership.
            </h2>
          </div>
          <div>
            <button
              className={`${
                activeIndex === 2
                  ? "animate__animated animate__slow animate__fadeInUp"
                  : ""
              } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244] hover:border hover:border-[#ffcc33] w-[174px] h-[44px]  lg:w-[223px] lg:h-[59px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
              type="button">
              <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                Open an Account
              </p>
              <FaArrowRightLong className="w-5 h-5 mt-[1px] transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
            </button>
          </div>
        </div>
      </div>

      {/* BEFORE FAQ SECTION */}

      <div className="relative mt-[45px] overflow-hidden">
        <div className="relative h-[619px] lg:h-[715px]">
          <img
            src={beforeFAQ}
            alt="beforeFAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-[0.3] pointer-events-none"></div>
        </div>
      </div>

      {/* FAQ SECTION */}

      <div
        className="w-[full] h-[726px] bg-[#FFFAEB] flex items-center justify-center "
        ref={faqRef}>
        <div className="flex flex-col items-center w-[350px] sm:w-[650px] lg:w-[878px] gap-[56px] ">
          <div className="flex justify-center">
            <h1 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] w-[250px] sm:w-auto text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                What documents do I need to open a personal account?
              </p>
              <span>
                <img src={plusIcon} alt="plusIcon" className="w-[32px]" />
              </span>
            </div>
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                Is my money safe with Tatum
              </p>
              <span>
                <img src={plusIcon} alt="plusIcon" className="w-[32px]" />
              </span>
            </div>
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                How do I open an account with Tatum
              </p>
              <span>
                <img src={plusIcon} alt="plusIcon" className="w-[32px]" />
              </span>
            </div>
            <div className="flex justify-center  ">
              <p className="font-grava font-[350] text-[12px] leading-[18px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#002244]">
                Have more questions? Visit our
                <span className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[26px] sm:tracking-[1.4%] text-[#002244] pl-[5px] underline cursor-pointer">
                  Help Center
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
