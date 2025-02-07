import { useEffect, useRef, useState } from "react";
import smeHeroImg from "../../assets/svg/smeHeroImg.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import line from "../../assets/svg/line.svg";
import smeCard1 from "../../assets/jpg/smeCard1.jpg";
import smeCard2 from "../../assets/jpg/smeCard2.jpg";
import smeCard5 from "../../assets/jpg/smeCard5.jpg";
import LoanImg from "../../assets/svg/LoanImg.svg";
import goodMark from "../../assets/svg/goodMark.svg";
import AdvisoryImg from "../../assets/svg/AdvisoryImg.svg";
import SmeVector from "../../assets/svg/SmeVector.svg";
import scrollImg1 from "../../assets/jpg/scrollImg1.jpg";
import scrollImg2 from "../../assets/jpg/scrollImg2.jpg";
import scrollImg3 from "../../assets/jpg/scrollImg3.jpg";
import scrollImg4 from "../../assets/jpg/scrollImg4.jpg";

import Plus from "../../assets/svg/plus.svg";
import Minus from "../../assets/svg/minus.svg";

import carrots from "../../assets/jpg/carrots.jpg";
import plusIcon from "../../assets/svg/plusIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import cbn from "../../assets/svg/cbn.svg";
import ndic from "../../assets/svg/ndic.svg";
import ball1 from "../../assets/svg/ball1.svg";
import ball2 from "../../assets/svg/ball2.svg";
import ball3 from "../../assets/svg/ball3.svg";
import "./styles.css";

const SME = () => {
  const [openTabOne, setOpenTabOne] = useState(false);
  const [openTabTwo, setOpenTabTwo] = useState(false);
  const [openTabThree, setOpenTabThree] = useState(false);

  const handleTabOne = () => {
    setOpenTabOne(!openTabOne);
  };

  const handleTabTwo = () => {
    setOpenTabTwo(!openTabTwo);
  };

  const handleTabThree = () => {
    setOpenTabThree(!openTabThree);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const [loanAmount, setLoanAmount] = useState(100000);

  const [repayPeriod, setRepayPeriod] = useState(3);

  const [interest, setInterest] = useState(4);

  const handleChange = (e) => {
    setLoanAmount(Number(e.target.value));
  };

  const handleRepayChange = (e) => {
    setRepayPeriod(Number(e.target.value));
  };

  const handleInterest = (e) => {
    setInterest(Number(e.target.value));
  };

  const navigate = useNavigate()

  const smeRef = useRef(null);
  const paymentRef = useRef(null);
  const accountRef = useRef(null);
  const loanRef = useRef(null);
  const advisoryRef = useRef(null);
  const faqRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.section === "business" && smeRef.current) {
      smeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "account" && accountRef.current) {
      accountRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "loans" && loanRef.current) {
      loanRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "advisory" && advisoryRef.current) {
      advisoryRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="relative mt-[20px] overflow-hidden">
        <div className="relative h-[732px] lg:h-[694px] bg-[#FFCC33]">
          <img
            src={smeHeroImg}
            alt=""
            className="absolute w-[273.7px] h-[321.13px] sm:w-[410.55px] sm:h-[481.7px] top-[410px] sm:top-[250px] right-[10px] lg:w-[513px] lg:h-[602px] lg:top-[95px] sm:right-0 z-10"
          />

          <img
            src={ball1}
            alt="ball"
            className="absolute w-[220px] h-[220px] lg:w-[479px] lg:h-[480px] left-[-10px] top-[280px] lg:left-[-100px] lg:top-[180px] "
          />
          <img
            src={ball2}
            alt="ball"
            className="absolute w-[64px] h-[64px] lg:w-[136px] lg:h-[136px] left-[255px] top-[100px] lg:left-[921px] lg:top-[180px] "
          />
          <img
            src={ball3}
            alt="ball"
            className="absolute hidden lg:block lg:w-[670px] lg:h-[670px] right-[-130px] top-[20px]"
          />

          <img
            src={ball2}
            alt="ball"
            className="absolute w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] left-[255px] top-[100px] lg:left-[683px] lg:top-[500px] "
          />

          <div
            className="absolute 
             top-[64px] left-[20px] w-[350px]
             sm:top-[140px] sm:left-[40px] sm:w-[622px]
             lg:top-[250px] lg:left-[56px] lg:w-[873px]">
            <h1
              className="animate__animated animate__fadeInUp font-grava font-[500]
               w-[350px] sm:w-[622px] lg:w-[873px]
               text-[32px] sm:text-[50px] lg:text-[75px]
               leading-[40px] sm:leading-[60px] lg:leading-[78.75px]
               tracking-[0.02%] sm:tracking-[0.03%] lg:tracking-[0.05%]
               text-[#002244] pb-[12.5px] lg:pb-[25px]">
              Powering Your Business, <br />
              <span
                className="font-[700]
                 w-[350px] sm:w-[622px] lg:w-[873px]
                 text-[32px] sm:text-[50px] lg:text-[75px]
                 leading-[40px] sm:leading-[60px] lg:leading-[78.75px]
                 tracking-[0.02%] sm:tracking-[0.03%] lg:tracking-[0.05%]
                 text-[#002244] pb-[12.5px] lg:pb-[25px]">
                Supporting Your Dreams
              </span>
            </h1>

            <p
              className="font-grava font-[350]
               text-[14px] sm:text-[20px] lg:text-[24px]
               leading-[20px] sm:leading-[27px] lg:leading-[30px]
               sm:w-[490px] lg:w-[873px]
               tracking-[0.2%] lg:tracking-[1.4%]
               text-[#002244] pb-[25px]">
              At Tatum Bank, we go beyond banking; we partner with you to unlock
              opportunities, drive growth, and ensure your success.
            </p>

            <button
              onClick={() => navigate("/business/account", {
                state: {
                  section: "account"
                }
              })}
              type="button"
              className="animate__animated animate__slow animate__fadeInUp 
               transition-all duration-300 ease-in-out 
               bg-[#002244] group hover:bg-[#ffffff]
               w-[224px] sm:w-[260px] lg:w-[287px]
               h-[44px] sm:h-[50px] lg:h-[59px]
               rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center">
              <p
                className="animate__animated animate__fadeInUp animate__slow 
                 transition-colors duration-300 ease-in-out 
                 font-medium text-sm lg:text-base font-grava 
                 text-[#FFCC33] group-hover:text-[#002244]">
                Open a business account
              </p>
              <FaArrowRightLong
                className="w-5 h-5 mt-[2px] 
                 transition-colors duration-300 ease-in-out 
                 text-[#FFCC33] group-hover:text-[#002244]"
              />
            </button>
          </div>

          <div className="hidden lg:flex absolute top-[612px] left-[56px] gap-[10px] w-[100%]">
            <div className="flex w-[168px]">
              <p className="font-grava font-[350] w-[200px] text-[16px] sm:text-[16px] leading-[20px]   tracking-[0.2%]  lg:text-[16px] lg:leading-[20px] lg:tracking-[0.2%] text-[#002244]">
                We are licensed by
              </p>
              <img src={cbn} alt="" className="w-[21px] h-[28px] " />
            </div>
            <div className="flex w-[100%] ">
              <p className="font-grava font-[350] pr-[10px]  text-[16px] sm:text-[16px] leading-[20px]   tracking-[0.2%]  lg:text-[16px] lg:leading-[20px] lg:tracking-[0.2%] text-[#002244]">
                Deposit insured by
              </p>
              <img src={ndic} alt="" className=" w-[60.4px] h-[26.5px]" />
            </div>
          </div>
        </div>
      </div>

      {/* CARDS */}

      <div
        ref={accountRef}
        className="flex flex-col justify-center items-center gap-[20px] h-[1353.53px] sm:h-[1700.53px] lg:h-[1227px]">
        <div className="flex flex-col items-center gap-[72px] ">
          <div className="flex flex-col items-center gap-[16px]">
            <h1 className="font-grava font-[500] w-[350px] sm:w-[429px] text-center text-[28px] leading-[35px] tracking-[0.2%] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[60px] lg:tracking-[0.2%] text-[#002244]">
              Business Savings & Current Accounts
            </h1>
            <p className="font-grava font-[350] text-center w-[350px] sm:w-[429px] text-[16px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[24px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
              Whether you’re a startup, SME, or enterprise, our flexible
              accounts offer:
            </p>
          </div>

          <div className="flex flex-col gap-[56px]">
            <div className="flex flex-col lg:flex-row gap-[40px]">
              <div className="">
                <div className=" flex flex-col items-center gap-[32px] ">
                  <div className="w-[350px] h-[360px] sm:w-[450px] sm:h-[480px] lg:w-[542px] lg:h-[537px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                    <img
                      src={smeCard1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[12px] ">
                    <h1 className="font-grava font-[500]  text-[16px] sm:text-[16px] leading-[20px]   lg:text-[28px] lg:leading-[35px]  text-[#002244]">
                      Savings Accounts
                    </h1>
                    <p className="font-grava font-[350] text-center w-[350px] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
                      Competitive interest rates to grow your reserves.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex flex-col items-center gap-[32px] ">
                  <div className="w-[350px] h-[360px] sm:w-[450px] sm:h-[480px] lg:w-[542px] lg:h-[537px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                    <img
                      src={smeCard2}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[12px] ">
                    <h1 className="font-grava font-[500]  text-[16px] sm:text-[16px] leading-[20px]   lg:text-[28px] lg:leading-[35px]  text-[#002244]">
                      Current Accounts
                    </h1>
                    <p className="font-grava font-[350] text-center w-[350px] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
                      Seamless transactions, overdraft options, and
                      multi-currency support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244] hover:border hover:border-[#ffcc33] w-[190px] h-[55px]  lg:w-[220px] sm:h-[63px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button">
                <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                  Open an account
                </p>
                <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOAN CALCULATOR SECTION */}

      <div ref={loanRef}  className="pt-[56px] lg:pt-0 h-[1300px] lg:h-[937px] bg-[#F9FAFB] flex justify-center lg:items-center">
        <div className="flex flex-col items-center gap-[40px] w-[1328px] h-[753px] ">
          <div className=" flex flex-col items-center w-[836px] gap-[12px] ">
            <p className="font-grava font-[350] text-center text-[14px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
              Loan Calculator
            </p>
            <h1 className="font-grava font-[500] w-[350px] sm:w-[500px] lg:w-[836px] text-[24px] leading-[30px] tracking-[1.4%] sm:text-[32px] sm:leading-[40px] sm:tracking-[0.8%] lg:text-[48px] lg:leading-[60px] lg:tracking-[0.2%] text-[#002244] text-center">
              Get instant loan estimates and choose the right financing plan.
            </h1>
          </div>
          <div className=" flex flex-col lg:flex-row gap-[20px]">
            <div className="w-[350px] lg:w-[728px] flex flex-col items-center bg-[#ffffff] h-[554px] py-[32px] px-[24px] gap-[40px] rounded-[12px] ">
              <div className="flex w-[100%] justify-start ">
                <form className=" ">
                  <fieldset>
                    <legend className="sr-only">Select an Option</legend>
                    <div className="flex items-center">
                      {/* Personal */}
                      <label className="cursor-pointer  mr-2 last:mr-0">
                        <input
                          type="radio"
                          name="option"
                          value="personal"
                          className="peer sr-only"
                          defaultChecked
                        />
                        <div
                          className="px-[24px] py-[12px] w-[113px] h-[48px] rounded-tl-[8px] rounded-br-[8px] border border-[#002244] text-[#002244] 
                            peer-checked:bg-[#FFCC33] peer-checked:border-none  ">
                          <p className="font-grava font-[500] text-center text-[16px] leading-[24px] tracking-[0.2%] text-[#002244]">
                            Personal
                          </p>
                        </div>
                      </label>

                      {/* Home */}
                      <label className="cursor-pointer relative mr-2 last:mr-0">
                        <input
                          type="radio"
                          name="option"
                          value="home"
                          className="peer sr-only"
                        />
                        <div
                          className="px-[24px] py-[12px] w-[93px] h-[48px] rounded-tl-[8px] rounded-br-[8px] border border-[#002244] text-[#002244] 
                            peer-checked:bg-[#FFCC33] peer-checked:border-none">
                          <p className="font-grava font-[500] text-center text-[16px] leading-[24px] tracking-[0.2%] text-[#002244]">
                            Home
                          </p>
                        </div>
                      </label>

                      {/* Car */}
                      <label className="cursor-pointer relative mr-2 last:mr-0">
                        <input
                          type="radio"
                          name="option"
                          value="car"
                          className="peer sr-only"
                        />
                        <div
                          className="px-[24px] py-[12px] w-[75px] h-[48px] rounded-tl-[8px] rounded-br-[8px] border border-[#002244] text-[#002244] 
                            peer-checked:bg-[#FFCC33] peer-checked:border-none">
                          <p className="font-grava font-[500] text-center text-[16px] leading-[24px] tracking-[0.2%]  text-[#002244]">
                            Car
                          </p>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="w-[289px] h-[372px] lg:w-[680px] lg:h-[402px] flex flex-col gap-[48px] ">
                <div className="w-[289px] h-[92px]  lg:w-[680px] lg:h-[102px] flex flex-col gap-[16px] ">
                  {/* Label and current amount */}
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-gray-700">
                      <p className="font-grava font-[600] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-[0.2%]  text-[#002244]">
                        Loan amount
                      </p>
                    </label>
                    <span className="text-gray-600">
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        NGN 500,000
                      </p>
                    </span>
                  </div>

                  {/* Slider */}
                  <div className=" relative">
                    <input
                      type="range"
                      min={0}
                      max={1500000}
                      step={1000}
                      value={loanAmount}
                      onChange={handleChange}
                      className=" my-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFCC33 ${(
                          (loanAmount / 1500000) *
                          95
                        ).toFixed(2)}%, #F2F4F7 ${
                          (loanAmount / 1500000) * 100
                        }%)`,
                      }}
                    />
                  </div>

                  {/* Min/Max Labels */}
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        NGN {loanAmount.toLocaleString()}
                      </p>
                    </span>
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        NGN 1,500,000
                      </p>
                    </span>
                  </div>
                </div>

                <div className="w-[289px] h-[92px]  lg:w-[680px] lg:h-[102px] flex flex-col gap-[16px] ">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-gray-700">
                      <p className="font-grava font-[600] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-[0.2%]  text-[#002244]">
                        You want to re-pay it over
                      </p>
                    </label>
                    <span className="text-gray-600">
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        12 Months
                      </p>
                    </span>
                  </div>

                  {/* Slider */}
                  <input
                    type="range"
                    min={0}
                    max={48}
                    step={1}
                    value={repayPeriod}
                    onChange={handleRepayChange}
                    className="my-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFCC33 ${(
                        (repayPeriod / 48) *
                        95
                      ).toFixed(2)}%, #F2F4F7 ${(repayPeriod / 48) * 100}%)`,
                    }}
                  />

                  {/* Min/Max Labels */}
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        {repayPeriod.toLocaleString()} Month(s)
                      </p>
                    </span>
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        48 Months
                      </p>
                    </span>
                  </div>
                </div>

                <div className="w-[289px] h-[92px]  lg:w-[680px] lg:h-[102px] flex flex-col gap-[16px] ">
                  {/* Label and current amount */}
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-gray-700">
                      <p className="font-grava font-[600] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-[0.2%]  text-[#002244]">
                        Interest Rate
                      </p>
                    </label>
                    <span className="text-gray-600">
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        2.4%
                      </p>
                    </span>
                  </div>

                  {/* Slider */}
                  <input
                    type="range"
                    min={0}
                    max={24}
                    step={1}
                    value={interest}
                    onChange={handleInterest}
                    className=" my-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFCC33 ${(
                        (interest / 24) *
                        95
                      ).toFixed(2)}%, #F2F4F7 ${(interest / 24) * 100}%)`,
                    }}
                  />

                  {/* Min/Max Labels */}
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        {interest.toLocaleString()}%
                      </p>
                    </span>
                    <span>
                      <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                        24%
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[350px] h-[454px] lg:w-[580px] lg:h-[554px] flex flex-col gap-[22px] ">
              <div className="w-[350px] h-[160px] lg:w-[580px] lg:h-[245px] flex bg-[#ffffff] py-[46px] px-[28px] justify-between lg:gap-[102px] lg:justify-center items-center rounded-[12px] ">
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] lg:font-[600] lg:text-[18px] lg:leading-[27px] tracking-[0.2%]  text-[#002244]">
                    Monthly Payments
                  </h1>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                    NGN 50,000
                  </p>
                </div>
                <img src={line} alt="" />
                <div>
                  <h1 className="font-grava font-[500] text-[16px] leading-[24px] lg:font-[600] lg:text-[18px] lg:leading-[27px] tracking-[0.2%]  text-[#002244]">
                    Total Payments
                  </h1>
                  <p className="font-grava font-[350] text-[14px] leading-[20px] tracking-[0.2%] lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%]  text-[#002244]">
                    NGN 50,000
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[272px] lg:w-[580px] lg:h-[287px] flex flex-col gap-[40px] lg:gap-[56px] bg-[#ffffff] rounded-[12px] py-[32px] px-[24px] ">
                <div className="flex flex-col items-center gap-[24px] ">
                  <button
                    className={`${
                      activeIndex === 2
                        ? "animate__animated animate__slow animate__fadeInUp"
                        : ""
                    } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244]  w-[302px] h-[56px]  lg:w-[532px] sm:h-[67px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                    type="button">
                    <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                      Apply now
                    </p>
                    <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
                  </button>

                  <p className="font-grava font-[350] text-center text-[16px] w-[532px] leading-[24px] tracking-[0.2%]  text-[#002244] cursor-pointer  ">
                    Check eligibility
                  </p>
                </div>
                <div className="w-[302px] h-[64px]  lg:w-[532px] lg:h-[52px] border-t-[1px] border-[#E6E9EC] pt-[24px] lg:pt-0 flex items-end">
                  <p className="font-grava font-[350] text-center text-[14px] w-[532px] leading-[20px] tracking-[0.2%]  text-[#546B82]">
                    Terms & conditions applied. Actual installments may differ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1000px] lg:h-[705px] bg-[#FFFFFF] flex lg:flex-row flex-col-reverse  justify-between items-center py-[48px] px-[20px] sm:py-[60px] sm:pr-[101px] sm:pl-[110px] ">
        <div className="w-[309px] h-[317px] sm:w-[464px] sm:h-[476px] lg:w-[571px] lg:h-[585px] ">
          <img src={LoanImg} alt="" />
        </div>
        <div className=" sm:h-[200.53px] w-[350px] sm:w-[565px] lg:h-[424.53px] flex flex-col gap-[32px]">
          <div className="flex flex-col items-center gap-[16px] lg:w-[565px] lg:h-[197px] ">
            <h1 className="font-grava font-[500]  text-[24px] sm:text-[30px] leading-[30px]   lg:text-[40px] lg:leading-[50px] tracking-[1.4%] lg:tracking-[0.2%] text-center lg:text-start  text-[#002244]">
              Business Loans - Funding Your Business Growth
            </h1>
            <p className="font-grava font-[350] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-center lg:text-start text-[#002244]">
              Need capital to expand, restock, or invest in new opportunities?
              Our tailored loan solutions ensure you have the financial backing
              to keep your business moving forward.
            </p>
          </div>
          <div className="flex flex-col gap-[30px] sm:gap-[150px] lg:gap-[48px]  lg:h-[195.53px] ">
            <div className="sm:relative flex flex-col gap-[24px]">
              <div className="sm:absolute top-0 left-0 flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[500] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Working Capital Loans
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[0px] left-[286px] flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[500] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Working Capital Loans
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[60px] left-[0px] flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[500] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Working Capital Loans
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[60px] left-[286px]  flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[500] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[20px] lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Working Capital Loans
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[full] h-[100%] flex justify-center lg:justify-start items-end">
              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#ffcc33] group hover:bg-[#002244] hover:border hover:border-[#ffcc33] w-[129px] h-[44px] sm:w-[159px] sm:h-[59.5px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button">
                <p className="transition-colors duration-300 ease-in-out font-medium text-sm lg:text-base font-grava text-[#002244] group-hover:text-[#ffcc33]">
                  Apply now
                </p>
                <FaArrowRightLong className="w-5 h-5 transition-colors duration-300 ease-in-out text-[#002244] group-hover:text-[#ffcc33]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll section starts */}

      <div ref={paymentRef} className="py-8 px-4 sm:py-[88px] sm:px-[56px] flex flex-col gap-8 sm:gap-[64px]">
        <div className="flex flex-col items-center gap-12 sm:gap-[72px]">
          <div className="flex flex-col items-center gap-4 sm:gap-[16px]">
            <h1 className="font-grava font-medium w-[318px] sm:w-[500px] lg:w-[754px] text-2xl sm:text-3xl lg:text-[48px] leading-[30px] sm:leading-[40px] lg:leading-[60px] text-center text-[#002244]">
              Payment Solutions - Making Every Transaction Seamless
            </h1>
            <p className="font-grava font-light text-center w-[318px] sm:w-[450px] lg:w-[538px] text-sm sm:text-base lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[27px] text-[#002244]">
              We provide secure, fast, and efficient payment solutions that
              enable you to manage transactions effortlessly.
            </p>
          </div>
        </div>

        {/* Card 1 - POS Services */}
        <div className="flex justify-center gap-8 sm:gap-[64px]">
          <div className="w-full lg:w-[1328px] bg-[#F9FAFB] flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[50px] px-4 sm:px-[48px] rounded-tl-3xl rounded-br-3xl">
            <div className="w-full sm:w-[557px] flex flex-col gap-6 sm:gap-[32px]">
              <div className="flex flex-col gap-4 sm:gap-[16px]">
                <h1 className="font-grava font-medium text-2xl sm:text-4xl leading-[30px] sm:leading-[50px] text-[#002244]">
                  POS Services
                </h1>
                <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                  POS & Merchant Services for easy customer payments
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:gap-[48px]">
                <div className="flex flex-col gap-6 sm:gap-[32px] items-start">
                  {/* List items */}
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Sell Smarter with our Advanced POS Systems
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Secure card processing, real-time sales analytics, and
                      inventory sync.
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-[254px] bg-[#ffcc33] hover:bg-[#002244] group py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center transition-all duration-300">
                  <p className="font-grava font-medium text-sm sm:text-base text-[#002244] group-hover:text-[#ffcc33]">
                    Request a POS system
                  </p>
                  <FaArrowRightLong className="text-[#002244] group-hover:text-[#ffcc33] w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[516px] h-[216px] sm:h-[385px] mt-8 lg:mt-0">
              <img
                src={scrollImg1}
                alt="POS system"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Card 2 - Merchant Services */}
        <div className="flex justify-center gap-8 sm:gap-[64px]">
          <div className="w-full lg:w-[1328px] bg-[#F9FAFB] flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[50px] px-4 sm:px-[48px] rounded-tl-3xl rounded-br-3xl">
            <div className="w-full sm:w-[557px] flex flex-col gap-6 sm:gap-[32px]">
              <div className="flex flex-col gap-4 sm:gap-[16px]">
                <h1 className="font-grava font-medium text-2xl sm:text-4xl leading-[30px] sm:leading-[50px] text-[#002244]">
                  Merchant Services
                </h1>
                <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                  Accept Payments Anywhere, Anytime
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:gap-[48px]">
                <div className="flex flex-col gap-6 sm:gap-[32px] items-start">
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Payment gateways, QR codes, and card terminals.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Advanced security to protect your revenue.
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-[177px] bg-[#ffcc33] hover:bg-[#002244] group py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center transition-all duration-300">
                  <p className="font-grava font-medium text-sm sm:text-base text-[#002244] group-hover:text-[#ffcc33]">
                    Sign up now
                  </p>
                  <FaArrowRightLong className="text-[#002244] group-hover:text-[#ffcc33] w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[516px] h-[216px] sm:h-[385px] mt-8 lg:mt-0">
              <img
                src={scrollImg2}
                alt="Merchant services"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Card 3 - Online & Mobile Transfers */}
        <div className="flex justify-center gap-8 sm:gap-[64px]">
          <div className="w-full lg:w-[1328px] bg-[#FFFAEB] flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[50px] px-4 sm:px-[48px] rounded-tl-3xl rounded-br-3xl">
            <div className="w-full sm:w-[557px] flex flex-col gap-6 sm:gap-[32px]">
              <div className="flex flex-col gap-4 sm:gap-[16px]">
                <h1 className="font-grava font-medium text-2xl sm:text-4xl leading-[30px] sm:leading-[50px] text-[#002244]">
                  Online & Mobile Transfers
                </h1>
                <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                  Stay in control of your finances with our cutting-edge digital
                  banking solutions.
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:gap-[48px]">
                <div className="flex flex-col gap-6 sm:gap-[32px] items-start">
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Internet & Mobile Banking
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      24/7 Account Access & Monitoring
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-[177px] bg-[#ffcc33] hover:bg-[#002244] group py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center transition-all duration-300">
                  <p className="font-grava font-medium text-sm sm:text-base text-[#002244] group-hover:text-[#ffcc33]">
                    Sign up now
                  </p>
                  <FaArrowRightLong className="text-[#002244] group-hover:text-[#ffcc33] w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[516px] h-[216px] sm:h-[385px] mt-8 lg:mt-0">
              <img
                src={scrollImg3}
                alt="Mobile banking"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Card 4 - Payroll Management */}
        <div className="flex justify-center gap-8 sm:gap-[64px]">
          <div className="w-full lg:w-[1328px] bg-[#F9FAFB] flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[50px] px-4 sm:px-[48px] rounded-tl-3xl rounded-br-3xl">
            <div className="w-full sm:w-[557px] flex flex-col gap-6 sm:gap-[32px]">
              <div className="flex flex-col gap-4 sm:gap-[16px]">
                <h1 className="font-grava font-medium text-2xl sm:text-4xl leading-[30px] sm:leading-[50px] text-[#002244]">
                  Payroll Management
                </h1>
                <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                  Manage salaries, taxes, and benefits with ease.
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:gap-[48px]">
                <div className="flex flex-col gap-6 sm:gap-[32px] items-start">
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Bulk Payment Processing
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Advanced security to protect your revenue.
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-[208px] bg-[#ffcc33] hover:bg-[#002244] group py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center transition-all duration-300">
                  <p className="font-grava font-medium text-sm sm:text-base text-[#002244] group-hover:text-[#ffcc33]">
                    Get started now
                  </p>
                  <FaArrowRightLong className="text-[#002244] group-hover:text-[#ffcc33] w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[516px] h-[216px] sm:h-[385px] mt-8 lg:mt-0">
              <img
                src={scrollImg4}
                alt="Payroll management"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll section ends */}

      <div
      ref={advisoryRef}
        className="
    h-[1019.45px] sm:h-[1120.45px] lg:h-[705px] 
    bg-[#FFFFFF] 
    flex flex-col-reverse lg:flex-row 
    justify-between items-center 
    py-[60px] pr-[101px] pl-[110px] sm:pr-[80px] sm:pl-[80px]
  ">
        {/* Image container */}
        <div
          className="
      w-[309.41px] sm:w-[450px] lg:w-[571px] 
      h-[317px] sm:h-[460px] lg:h-[585px]
    ">
          <img src={AdvisoryImg} alt="" />
        </div>
        {/* Text and CTA container */}
        <div
          className="
      w-[350px] sm:w-[450px] lg:w-[565px] 
      h-[550.45px] sm:h-[540px] lg:h-[534.53px] 
      flex flex-col gap-[32px]
    ">
          {/* Heading and paragraph */}
          <div
            className="
        flex flex-col items-center sm:items-center gap-[16px]
        w-[350px] sm:w-[450px] lg:w-[565px] 
        h-[186px] sm:h-[216px] lg:h-[247px]
      ">
            <h1
              className="
          font-grava font-[500] 
          text-center lg:text-start 
          text-[24px] sm:text-[32px] lg:text-[40px] 
          leading-[30px] sm:leading-[40px] lg:leading-[50px] 
          tracking-[1.4%] sm:tracking-[0.8%] lg:tracking-[0.2%] 
          text-[#002244]
        ">
              Financial Advisory Services – Expert Guidance for Smart Decisions
            </h1>
            <p
              className="
          font-grava font-[350] 
          text-center lg:text-start 
          text-[14px] sm:text-[16px] lg:text-[18px] 
          leading-[20px] sm:leading-[24px] lg:leading-[27px] 
          tracking-[0.2%] text-[#002244]
        ">
              Your business success is our priority. Our expert advisory
              services help you make sound financial decisions that fuel
              business growth and sustainability.
            </p>
          </div>

          {/* List items and button */}
          <div
            className="
        flex flex-col items-center sm:items-start lg:items-start 
        gap-[48px] h-[255.53px]
      ">
            {/* Checkmark list */}
            <div className="flex flex-col gap-[32px] items-start">
              <div
                className="
            flex flex-col sm:flex-row items-center 
            w-full gap-[8px]
          ">
                <div className="w-[28px] h-[28px]">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p
                    className="
                font-grava font-[500] 
                text-[16px] sm:text-[18px] lg:text-[20px] 
                leading-[24px] sm:leading-[24px] lg:leading-[25px] 
                tracking-[0.2%] sm:tracking-[1.0%] lg:tracking-[1.4%] 
                text-[#002244]
              ">
                    Business & Investment Planning
                  </p>
                </div>
              </div>
              <div
                className="
            flex flex-col sm:flex-row items-center 
            gap-[8px]
          ">
                <div className="w-[28px] h-[28px]">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p
                    className="
                font-grava font-[500] 
                text-[16px] sm:text-[18px] lg:text-[20px] 
                leading-[24px] sm:leading-[24px] lg:leading-[25px] 
                tracking-[0.2%] sm:tracking-[1.0%] lg:tracking-[1.4%] 
                text-[#002244]
              ">
                    Expansion & Market Entry Strategies
                  </p>
                </div>
              </div>
              <div
                className="
            flex flex-col sm:flex-row items-center 
            w-full gap-[8px]
          ">
                <div className="w-[28px] h-[28px]">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p
                    className="
                font-grava font-[500] 
                text-[16px] sm:text-[18px] lg:text-[20px] 
                leading-[24px] sm:leading-[24px] lg:leading-[25px] 
                tracking-[0.2%] sm:tracking-[1.0%] lg:tracking-[1.4%] 
                text-[#002244]
              ">
                    Risk Management & Compliance
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="w-full h-full flex justify-center sm:justify-start items-end">
              <button
                className={`
            ${
              activeIndex === 2
                ? "animate__animated animate__slow animate__fadeInUp"
                : ""
            }
            transition-all duration-300 ease-in-out 
            bg-[#ffcc33] group hover:bg-[#002244] hover:border hover:border-[#ffcc33] 
            w-[178px] sm:w-[190px] lg:w-[210px] 
            h-[44px] sm:h-[59.5px] 
            rounded-tl-lg rounded-br-lg gap-2 
            flex items-center justify-center
          `}
                type="button">
                <p
                  className="
              transition-colors duration-300 ease-in-out 
              font-medium text-sm sm:text-base lg:text-base 
              font-grava 
              text-[#002244] group-hover:text-[#ffcc33]
            ">
                  Open an account
                </p>
                <FaArrowRightLong
                  className="
              w-5 h-5 
              transition-colors duration-300 ease-in-out 
              text-[#002244] group-hover:text-[#ffcc33]
            "
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={faqRef} className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]">
        <div className="flex flex-col gap-6 w-full lm:w-[448px]">
          <p className="text-[#334E69] font-[350] text-sm leading-5 tracking-[0.2%] font-grava">
            WHY CHOOSE US
          </p>
          <p className="font-medium text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br /> Private Banking.
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[710px]">
          <div
            className="flex flex-col gap-6 cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pb-5"
            onClick={handleTabOne}>
            <div className="flex items-center justify-between">
              <p className="text-[#546B82] font-grava text-base lm:text-[20px] leading-[25px] tracking-[0.2%]">
                Exclusive Access
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
                Unparalleled Service
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
                Discreet & Secure
              </p>
              {openTabThree ? (
                <img src={Minus} alt="Minus" className="" />
              ) : (
                <img src={Plus} alt="Plus" className="" />
              )}
            </div>
            {openTabThree && (
              <p className="font-[350] font-grava tracking-[0.2%] text-base lm:text-[18px] leading-[27px] text-[#334E69]">
                Confidentiality and personalized attention at every level
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="h-[794px] sm:h-[900px] lg:h-[680px] py-[60px] sm:py-[80px] lg:py-[120px] gap-[8px] rounded-[32px] flex justify-center">
        <div
          className="overflow-hidden h-[682px] sm:h-[750px] lg:h-[440px] 
               w-[350px] sm:w-[700px] lg:w-[1328px] 
               rounded-[32px] py-[32px] sm:py-[48px] lg:py-[64px] 
               px-[20px] sm:px-[32px] lg:px-[64px] 
               gap-[48px] sm:gap-[80px] lg:gap-[133px] 
               flex flex-col lg:flex-row bg-[#F9FAFB] justify-center items-center relative z-10">
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `url(${SmeVector})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2, // Adjust this value as needed
            }}
          />
          <div
            className="w-[310px] sm:w-[600px] lg:w-[615px] 
                    h-[257.99px] sm:h-[300px] lg:h-[312px]
                    flex flex-col gap-[40px] lg:justify-between ">
            <div className="flex flex-col gap-[16px]">
              <h1
                className="font-grava font-[500] text-[16px] sm:text-[22px] lg:text-[32px] 
                       leading-[20px] sm:leading-[24px] lg:leading-[48px] 
                       tracking-[0.2%] text-[#002244]">
                Let’s Build the Future of Your Business Together
              </h1>
              <p
                className="font-grava font-[350] text-[16px] sm:text-[20px] lg:text-[18px] 
                      leading-[20px] sm:leading-[24px] lg:leading-[27px] 
                      tracking-[0.2%] text-[#002244]">
                Your business deserves a bank that believes in your dreams as
                much as you do. Let’s talk about how Tatum Bank can empower you
                to achieve more or Visit our nearest branch to get started
              </p>
            </div>
            <div className="flex">
              <button
                className={`${
                  activeIndex === 2
                    ? "animate__animated animate__slow animate__fadeInUp"
                    : ""
                } transition-all duration-300 ease-in-out bg-[#002244] group 
              hover:bg-[#FFCC33] hover:border hover:border-[#002244] 
              w-[154px] sm:w-[170px] lg:w-[183px] 
              h-[51px] sm:h-[55px] lg:h-[59px] 
              rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button">
                <p
                  className="transition-colors duration-300 ease-in-out font-medium 
                        text-sm sm:text-base lg:text-base font-grava 
                        text-[#FFCC33] group-hover:text-[#002244]">
                  Call us today
                </p>
                <FaArrowRightLong
                  className="w-5 h-5 transition-colors duration-300 ease-in-out 
                                      text-[#FFCC33] group-hover:text-[#002244]"
                />
              </button>
            </div>
          </div>
          <div className="w-[310px] sm:w-[600px] sm:h-[500px] lg:h-[312px] lg:w-[468px] h-[312px]">
            <img
              src={smeCard5}
              alt=""
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SME;
