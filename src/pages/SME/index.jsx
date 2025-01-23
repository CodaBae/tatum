import { useEffect, useRef, useState } from "react";
import smeHeroImg from "../../assets/jpg/smeHeroImg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import whiteArrowIcon from "../../assets/svg/whiteArrowIcon.svg";
import smeCard1 from "../../assets/jpg/smeCard1.jpg";
import smeCard2 from "../../assets/svg/smeCard2.svg";
import smeCard3 from "../../assets/jpg/smeCard3.jpg";
import smeCard5 from "../../assets/jpg/smeCard5.jpg";
import smeCard2Icon from "../../assets/svg/smeCard2Icon.svg";
import smeCard3Icon from "../../assets/svg/smeCard3Icon.svg";
import smeCard4Icon from "../../assets/svg/smeCard4Icon.svg";
import carrots from "../../assets/jpg/carrots.jpg";
import plusIcon from "../../assets/svg/plusIcon.svg";
import { useLocation } from "react-router-dom";

const SME = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const smeRef = useRef(null);
  const paymentRef = useRef(null);
  const faqRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
      if (state?.section === "sme" && smeRef.current) {
        smeRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (state?.section === "payment" && paymentRef.current) {
        paymentRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (state?.section === "faq" && faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [state]);

  return (
    <div ref={smeRef}>
      <div className="relative mt-[45px] overflow-hidden">
        <div className="relative h-[619px] lg:h-[715px]">
          <img
            src={smeHeroImg}
            alt="heroImg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-[0.2] pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className=" absolute w-[350px] top-[350px] left-[25px] sm:w-[622px] lg:top-[200px] lg:left-[56px] ">
          <h1 className="animate__animated animate__fadeInUp font-grava font-[700] w-[350px] sm:w-[622px] text-[32px] sm:text-[50px] lg:text-[75px] lg:leading-[78.75px] lg:tracking-[0.05%] leading-[40px] tracking-[0.02%]  text-[#ffffff] pb-[12.5px] lg:pb-[25px]">
            SME Banking
          </h1>
          <p className="font-grava font-[350] text-[14px] sm:text-[20px] leading-[20px] sm:leading-[27px] sm:w-[490px] lg:w-[622px] tracking-[0.2%]  lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#ffffff] pb-[25px]">
            At Tatum Bank, we understand the courage it takes to build a
            business from the ground up. That’s why we’re here as your partner,
            cheerleader, and advocate.
          </p>
          <button
            className={`animate__animated animate__slow animate__fadeInUp transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244]  w-[174px] h-[44px]  lg:w-[223px] lg:h-[59px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
            type="button"
          >
            <p className="animate__animated  animate__fadeInUp animate__slow transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
              Open an account
            </p>
            <FaArrowRightLong className="w-5 h-5 mt-[2px] transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
          </button>
        </div>
      </div>

      <div ref={paymentRef} className="flex flex-col items-center gap-[20px] mt-[80px] mb-[80px] ">
        <div className="flex gap-[20px] ">
          <div className="relative w-[429px] h-[524px] rounded-[24px] overflow-hidden ">
            <img
              src={smeCard1}
              alt="smeCard1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute w-[389px] h-[249px] top-[251px] left-[20px] flex flex-col justify-between">
              <div className=" flex flex-col gap-[16px]">
                <h1 className="font-grava font-[500] text-[28px] leading-[35px]   text-[#ffffff]  ">
                  Business Accounts
                </h1>
                <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%]  text-[#ffffff]  ">
                  Build your business on a solid foundation with our SME
                  accounts. We help keep your business moving with a reliable
                  payment solution that works everywhere and is designed to make
                  daily operations smoother.
                </p>
              </div>
              <div className=" h-[31px] flex items-start">
                <button>
                  <p className="font-grava group flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Get Started
                    <span className="flex group-hover:ml-2 items-center">
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#ffffff]  ml-[7px] mt-[5px] " />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-[429px] h-[524px] rounded-[24px] overflow-hidden bg-[#FFCC33] ">
            <img
              src={smeCard2}
              alt="smeCard1"
              className="w-full h-full object-cover"
            />
            <img
              src={smeCard2Icon}
              alt="smeCard2Icon"
              className="absolute top-[24px] left-[20px] "
            />

            <div className="absolute w-[389px] h-[249px] top-[270px] left-[20px] flex flex-col gap-[32px] ">
              <div className=" flex flex-col gap-[16px]">
                <h1 className="font-grava font-[500] text-[28px] leading-[35px]   text-[#002244]  ">
                  Expense Management Tools
                </h1>
                <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%]  text-[#002244]  ">
                  Clear insights into your business spending. Keep track of
                  every naira, manage budgets, and make informed decisions with
                  our easy-to-use tools.
                </p>
              </div>
              <div className=" h-[31px] flex items-start">
                <button className="group">
                  <p className="font-grava group-hover:mr-2 flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#002244]">
                    Learn More
                    <span className="flex group-hover:ml-2 items-center">
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] ml-[7px] mt-[5px] " />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-[429px] h-[524px] rounded-[24px] overflow-hidden ">
            <img
              src={smeCard3}
              alt="smeCard1"
              className="w-full h-full object-cover"
            />
            <img
              src={smeCard3Icon}
              alt="smeCard3Icon"
              className="absolute top-[24px] left-[20px] "
            />
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute w-[389px] h-[249px] top-[270px] left-[20px] flex flex-col  gap-[32px] ">
              <div className=" flex flex-col gap-[16px]">
                <h1 className="font-grava font-[500] text-[28px] leading-[35px]   text-[#ffffff]  ">
                  Loans & Credit Lines
                </h1>
                <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%]  text-[#ffffff]  ">
                  Your business deserves strong financial backing when you need
                  it. Are you looking to start a business, expand, or purchase
                  equipment? We’ve got you!
                </p>
              </div>
              <div className=" h-[31px] flex items-start">
                <button className="group">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Explore our financing plans
                    <span className="flex items-center group-hover:ml-2">
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#ffffff] ml-[7px] mt-[5px] " />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] ">
          <div className="relative w-[654px] h-[420px] rounded-[24px] overflow-hidden bg-[#002244] ">
            <img
              src={smeCard2}
              alt="smeCard1"
              className="w-full h-full object-cover"
            />
            <img
              src={smeCard4Icon}
              alt="smeCard3Icon"
              className="absolute top-[24px] left-[20px] "
            />

            <div className="absolute w-[389px] h-[249px] top-[170px] left-[20px] flex flex-col gap-[32px]  ">
              <div className=" flex flex-col gap-[16px]">
                <h1 className="font-grava font-[500] text-[28px] leading-[35px]   text-[#ffffff]  ">
                  Business Insurance
                </h1>
                <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%]  text-[#ffffff]  ">
                  Your peace of mind, our priority. We protect what you've built
                  with customizable insurance plans. You should safeguard your
                  assets, staff, and operations against unforeseen events.
                </p>
              </div>
              <div className=" h-[31px] flex items-start">
                <button className="group flex items-center ">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    View our insurance plans
                    <span className="group-hover:ml-2 flex items-center">
                      <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#ffffff] ml-[7px] mt-[5px] " />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-[654px] h-[420px] rounded-[24px] overflow-hidden ">
            <img
              src={smeCard5}
              alt="smeCard1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-[24px]"></div>

            <div className="absolute w-[389px] h-[249px] top-[170px] left-[20px] flex flex-col gap-[32px]  ">
              <div className=" flex flex-col gap-[16px]">
                <h1 className="font-grava font-[500] text-[28px] leading-[35px]   text-[#ffffff]  ">
                  Financial Planning & Advisory
                </h1>
                <p className="font-grava font-[350] text-[18px] leading-[27px] tracking-[0.2%]  text-[#ffffff]  ">
                  Get expert guidance for your business decisions. Our advisors
                  bring local market knowledge and practical solutions to help
                  you succeed.
                </p>
              </div>
              <div className=" h-[31px] flex items-start">
                <button className="group flex items-center">
                  <p className="group-hover:mr-2 font-grava flex font-[500] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[27px] tracking-[0.2%] text-[#ffffff]">
                    Learn More
                    <span className="flex items-center">
                      <FaArrowRightLong className="w-5 h-5 group-hover:ml-2 mt-[1px] transition-colors duration-300 ease-in-out text-[#ffffff] ml-[7px] mt-[5px] " />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-center w-[full] h-[180px] sm:h-[250px] bg-[#ffffff]">
          <div className="w-[310px] sm:w-[596px] flex flex-col items-center gap-[24px]">
            <div className="w-[490px] ">
              <h2 className="font-grava font-[500] text-[18px] leading-[27px] sm:text-[32px] sm:leading-[40px] tracking-[0.2%] text-[#002244] text-center ">
                We’re not just shaping the future of banking; we’re shaping your
                future too.
              </h2>
            </div>
            <div className="flex gap-[16px]">
              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244]  w-[174px] h-[44px]  lg:w-[272px] lg:h-[59px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button">
                <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                  Open an account today
                </p>
                <FaArrowRightLong className="mt-[2px] w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
              </button>
              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#ffffff] group hover:bg-[#002244] hover:border hover:border-[#ffffff] w-[302px] h-[48px] lg:w-[229px] lg:h-[59px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center border-[1px] border-[#002244] `}
                type="button">
                <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffffff]">
                  About tatum bank
                </p>
                <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffffff]" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative h-[619px] lg:h-[739px]">
            <img
              src={carrots}
              alt="carrots"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-[0.3] pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div ref={faqRef} className="w-[full] h-[726px] bg-[#FFFAEB] flex items-center justify-center ">
        <div className="flex flex-col items-center w-[350px] sm:w-[650px] lg:w-[878px] gap-[56px] ">
          <div className="flex justify-center">
            <h1 className="font-grava font-[500] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[40px] sm:leading-[50px] sm:tracking-[0.2%] text-[#002244]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] w-[250px] sm:w-auto text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                How do I open an account with Tatum
              </p>
              <span>
                <img src={plusIcon} alt="plusIcon" className="w-[32px]" />
              </span>
            </div>
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                Do you offer loans for small businesses?
              </p>
              <span>
                <img src={plusIcon} alt="plusIcon" className="w-[32px]" />
              </span>
            </div>
            <div className="w-[350px] sm:w-[650px] lg:w-[878px] h-[96px] rounded-[16px] border-[1px] border-[#002244] items-center flex justify-between p-[18px] sm:p-[32px] cursor-pointer ">
              <p className="font-grava font-[500] text-[14px] leading-[20px] tracking-[0.2%] sm:text-[20px] sm:leading-[25px] sm:tracking-[1.4%] text-[#475467]">
                What are the criterias for getting a loan
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

export default SME;
