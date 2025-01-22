import { useState } from "react";
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

const Personal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative mt-[45px] overflow-hidden">
        <div className="relative h-[619px] lg:h-[715px]">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className=" absolute w-[350px] top-[350px] left-[25px] sm:w-[622px] lg:top-[250px] lg:left-[56px] ">
          <h1 className="font-grava font-[700] w-[350px] sm:w-[622px] text-[32px] sm:text-[50px] lg:text-[75px] lg:leading-[78.75px] lg:tracking-[0.05%] leading-[40px] tracking-[0.02%]  text-[#ffffff] pb-[12.5px] lg:pb-[25px]">
            Personal Banking
          </h1>
          <p className="font-grava font-[350] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[27px] sm:w-[490px] lg:w-[622px] tracking-[0.2%]  lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#ffffff] pb-[25px]">
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
              Open an account
            </p>
            <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
          </button>
        </div>
      </div>

      {/* SERVICES SECTION */}

      <div className="flex flex-col items-center pt-[80px] pb-[80px]">
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
                <button>
                  <p className="font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Learn more
                    <span>
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
                <button>
                  <p className="font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    View Investment Options
                    <span>
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
                <button>
                  <p className="font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    View our Insurance Plans
                    <span>
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
                <button>
                  <p className="font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Get the App
                    <span>
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
              <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
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

      <div className="w-[full] h-[726px] bg-[#FFFAEB] flex items-center justify-center ">
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
