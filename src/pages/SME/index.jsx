import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

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

import { useLocation, useNavigate } from "react-router-dom";
import CBN from "../../assets/svg/cbn.svg";
import NDIC from "../../assets/png/ndic.png";
import ball1 from "../../assets/svg/ball1.svg";
import ball2 from "../../assets/svg/ball2.svg";
import ball3 from "../../assets/svg/ball3.svg";
// import "./styles.css";
import "./card.css";

import Lenis from "@studio-freight/lenis";
import HeroSection from "../../components/HeroSection";
import Buttons from "../../components/Buttons";

const SME = () => {
 const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const [openTabOne, setOpenTabOne] = useState(true);
  const [openTabTwo, setOpenTabTwo] = useState(false);
  const [openTabThree, setOpenTabThree] = useState(false);
  const [openTabFour, setOpenTabFour] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    // Scroll animation loop
    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Scroll tracking for stacking logic
    lenis.on("scroll", () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      console.log("Container is in view:", isInView);

      if (isInView) {
        // This is where you add your custom stacking or animation logic
        console.log("StackingCards is in view!");
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Card data
  const cards = [
    {
      title: "POS Services",
      description: "POS & Merchant Services for easy customer payments",
      points: [
        "Sell Smarter with our Advanced POS Systems",
        "Secure card processing, real-time sales analytics, and inventory sync.",
      ],
      image: scrollImg1,
      bgImage:
        "https://res.cloudinary.com/code-idea/image/upload/v1739051008/Frame_1171279498_vbfddc.png",
    },
    {
      title: "Merchant Services",
      description: "Accept Payments Anywhere, Anytime",
      points: [
        "Payment gateways, QR codes, and card terminals.",
        "Advanced security to protect your revenue.",
      ],
      image: scrollImg2,
      bgImage:
        "https://res.cloudinary.com/code-idea/image/upload/v1739051008/Frame_1171279316_c2szw1.png",
    },
    {
      title: "Online & Mobile Transfers",
      description: "Stay in control of your finances with our cutting-edge digital banking solutions.",
      points: ["Internet & Mobile Banking", "24/7 Account Access & Monitoring"],
      image: scrollImg3,
      bgImage:
        "https://res.cloudinary.com/code-idea/image/upload/v1739051008/Frame_1171279318_buwox2.png",
    },
    {
      title: "Payroll Management",
      description: "Pay salaries on time, handle taxes, and manage employee benefits.",
      points: ["Bulk Payment Processing", "Advanced security to protect your revenue."],
      image: scrollImg4,
      bgImage:
        "https://res.cloudinary.com/code-idea/image/upload/v1739051008/Frame_1171279318_1_tom8hu.png",
    },
  ];

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


  const navigate = useNavigate();

  const smeRef = useRef(null);

  const paymentRef = useRef(null);

  const accountRef = useRef(null);
  const loanRef = useRef(null);
  const advisoryRef = useRef(null);
  const faqRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {

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

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1100);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);



  return (
    <div ref={smeRef} className="">
      {
        isMobile ?
        //Mobile
        <section className="h-full w-full outline-none">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[794px] overflow-hidden  pl-5  relative w-full flex flex-col items-center gap-0 md:pt-[93px] max-sm:pt-[30%]" //[694px]
        >
          <div className="w-full flex flex-col items-start relative z-30 gap-[64px] lm:gap-[113px] lm:mt-[5%]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
              <p
                style={{ fontWeight: 450 }}
                className={`animate__animated animate__fadeInUp  lm:w-[833px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px]  leading-[40px] lm:leading-[55px] lg:leading-[78px]`}>
                  Powering Your <br /> Business, {" "}
                <spen className="font-bold ">Supporting Your Dreams</spen>
              </p>
              <p
                //
                className={`animate__animated animate__fadeInUp animate__delay-06s w-[350px]  md:w-[761px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}>
                At Tatum Bank, we go beyond banking; we partner with you to
                unlock opportunities, drive growth, and ensure your
                success.
              </p>
              <div className="flex items-center mt-[10px] mb-[-5%]  gap-3">
                <button
                  className={`animate__animated animate__fadeInUp animate__delay-10s transition-all duration-500 ease-in-out bg-[#002244] group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-lg rounded-br-lg h-[54px] gap-2 flex items-center justify-center px-5 py-2`}
                  type="button"
                  onClick={() =>
                    navigate("/business", {state: {section: "account"}}, window.scrollTo(0, 0))
                  }>
                  <p className="transition-colors duration-500 ease-in-out font-[300]  lg:text-[18px] font-grava text-[#FFCC33] group-hover:text-[#002244]">
                    Find out more
                  </p>
                  <BsArrowRight
                    size={100}
                    className="text-5xl w-5 h-5 mt-[2px] text-[#FFCC33] group-hover:text-[#002244]"
                  />
                </button>
              </div>
            </div>
            
            <div className="flex items-start absolute -bottom-20 md:bottom-[-60%] lg:bottom-[-42%]" style={{zIndex:'99999'}}>
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
                  <div className="w-[60px] mt-1 lg:mt-1.5">
                      <img
                      src="https://framerusercontent.com/images/8RboGMFeYPRw74A3ZLlxVzosFE.png" //{NDIC}
                      alt="NDIC"
                      className="flex justify-start lm:inline-block h-[23px] md:w-[50px] md:h-[25px]"
                      />
                  </div>
                  </p>
              </p>
            </div>
          </div>
          {
            isMobile ? 
            <div className="w-[300px]">
              <img
                src={'https://res.cloudinary.com/code-idea/image/upload/v1739211382/business_banking_1_ujom76.webp'}
                alt="Family"
                className={`animate__animated relative top-[29.5%] -right-10  `}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
              />
            </div>
            :
            <img
              src={'https://res.cloudinary.com/code-idea/image/upload/v1739211382/business_banking_1_ujom76.webp'}
              alt="Family"
              className={`animate__animated relative md:top-[14%] lm:top-[10%] right-24 md:w-[50%] lg:w-[43%]`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="false"
            />
          }
        </div>
      </section> 
        :
        //Desktop
        <section className="w-full h-full">
          <HeroSection
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739209791/Slide_2_2_ekpalr.png"} 
            title={`<span class="leading-[105%]">Powering Your <br /> Business, <span class="font-bold ">Supporting Your Dreams</span></span>`}
            content={`<p class="leading-[34.1px] whitespace-nowrap">At Tatum Bank, we go beyond banking; we partner with you to <span class="block"> unlock opportunities, drive growth, and ensure your success.</span></p>`} 
            link={"/business"} 
            sectionName={"account"} 
            mainImgMobile={"https://framerusercontent.com/images/N9YZp61YAlG8btmizwhy867eyI.png"} 
            mainImgDesktop={"https://framerusercontent.com/images/N9YZp61YAlG8btmizwhy867eyI.png"} 
            btnText={"Find out more"}
            styleP={{  marginTop: "-15%" }}
            left={true}

          />
        </section>
      }
      

      {/* CARDS */}

      <div
        ref={accountRef}
        className="flex flex-col justify-center items-center gap-[20px] h-[1353.53px] sm:h-[1700.53px] lg:h-[1228px]">
        <div className="flex flex-col items-center gap-[72px] ">
          <div className="flex flex-col items-center gap-[16px]">
            <h1 className="font-grava font-[450] w-[350px] sm:w-[429px] text-center text-[28px] leading-[35px] tracking-[0.2%] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[60px] lg:tracking-[0.2%] text-[#002244]">
              Business Savings & Current Accounts
            </h1>
            <p className="font-grava font-[300] text-center w-[350px] sm:w-[429px] lg:w-[497px] text-[16px] leading-[20px] tracking-[0.2%] sm:text-[18px] sm:leading-[24px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
              Whether you're a startup, SME, or enterprise, our flexible accounts are designed to power up your business.
            </p>
          </div>

          <div className="flex flex-col gap-[56px]">
            <div className="flex flex-col lg:flex-row gap-[40px]">
              <div data-aos="fade-right" className="">
                <div className=" flex flex-col items-center gap-[32px] ">
                  <div className="w-[350px] h-[360px] sm:w-[450px] sm:h-[480px] lg:w-[542px] lg:h-[537px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                    <img
                      src={smeCard1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[12px] ">
                    <h1 className="font-grava font-[450]  text-[16px] sm:text-[16px] leading-[20px]   lg:text-[28px] lg:leading-[35px]  text-[#002244]">
                      Savings Accounts
                    </h1>
                    <p className="font-grava font-[300] text-center w-[350px] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
                      Competitive interest rates to grow your reserves.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className=" flex flex-col items-center gap-[32px] ">
                  <div className="w-[350px] h-[360px] sm:w-[450px] sm:h-[480px] lg:w-[542px] lg:h-[537px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                    <img
                      src={smeCard2}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[12px] ">
                    <h1 className="font-grava font-[450]  text-[16px] sm:text-[16px] leading-[20px]   lg:text-[28px] lg:leading-[35px]  text-[#002244]">
                      Current Accounts
                    </h1>
                    <p className="font-grava font-[300] text-center w-[330px] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-[#002244]">
                      Seamless transactions, overdraft options, and
                      multi-currency support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Buttons 
                text="Find out more"
                link="/business/account"
                sect=""
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={loanRef} className="lg:h-[705px] bg-[#F9FAFB] flex lg:flex-row flex-col-reverse  justify-between gap-[96px] items-center py-[48px] px-[20px] sm:py-[60px] sm:pr-[101px] sm:pl-[110px] ">    {/*h-[1000px]  */} 
        <div
          data-aos="fade-right"
          className="w-[309px] h-[317px] sm:w-[464px] sm:h-[476px] lg:w-[571px] lg:h-[585px] ">
          <img src={LoanImg} alt="" />
        </div>
        <div
          data-aos="fade-left"
          className="w-[350px] sm:w-[565px] lg:h-[424.53px] flex flex-col gap-[32px]" //sm:h-[200.53px]
        >
          <div className="flex flex-col items-center gap-[16px] lg:w-[565px] lg:h-[197px] ">
            <h1 className="font-grava font-[450]  text-[24px] sm:text-5xl leading-[30px]   lg:text-[40px] lg:leading-[50px] tracking-[1.4%] lg:tracking-[0.2%] text-center lg:text-start  text-[#002244]">
              Business Loans - Funding Your Business Growth
            </h1>
            <p className="font-grava font-[400] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]  lg:text-[18px] lg:leading-[27px] lg:tracking-[0.2%] text-center lg:text-start text-[#002244]">
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
                  <p className="font-grava font-[450] text-[16px] leading-[20px] tracking-[0.2%]  lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Working Capital Loans
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[0px] left-[286px] flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[450] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]   lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Trade & Export Financing
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[60px] left-[0px] flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[450] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]   lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    SME & Start-up Loans
                  </p>
                </div>
              </div>
              <div className="sm:absolute top-[60px] left-[286px]  flex flex-col sm:flex-row items-center gap-[8px]">
                <div className="w-[28px] h-[28px] ">
                  <img src={goodMark} alt="" />
                </div>
                <div>
                  <p className="font-grava font-[450] text-[16px] sm:text-[16px] leading-[20px] tracking-[0.2%]   lg:leading-[25px] lg:tracking-[1.4%] text-[#002244]">
                    Asset Financing
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[full] h-[100%] flex justify-center lg:justify-start items-end">
              <button
                className={`
                  animate__animated animate__slow animate__fadeInUp
                  bg-[#EDEDED] cursor-default w-[199px] h-[44px] sm:w-[199px] lg:w-[242px] sm:h-[59.5px] rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
                type="button"
              >
                <p className=" font-[450] lg:text-[18px] lg:leading-[27px] font-grava text-[#B0B0B0] ">
                  To be available soon
                </p>
                <BsArrowRight
                  size={100}
                  className="text-5xl mt-[2px]  w-5 h-5  text-[#B0B0B0]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      
      
      <div
        ref={containerRef}
        className=" px-4 pt-8 pb-[88px] lg:py-[88px] sm:px-[56px] flex flex-col   relative"
      >
        <div className="flex flex-col items-center gap-12 sm:gap-[72px]">
          <div className="flex flex-col items-center gap-4 sm:gap-[16px]">
            <h1 className="font-grava font-[450] w-[318px] sm:w-[500px] lg:w-[754px] text-2xl sm:text-3xl lg:text-[48px] leading-[30px] sm:leading-[40px] lg:leading-[60px] text-center text-[#002244]">
              Payment Solutions - Making Every Transaction Seamless
            </h1>
            <p className="font-grava font-[300] text-center w-[318px] sm:w-[450px] lg:w-[538px] text-[14px] sm:text-base lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[27px] text-[#002244]">
              We provide secure, fast, and efficient payment solutions that enable you to manage transactions effortlessly.
            </p>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="card-stack " 
          style={{
            height: `${cards.length * 100}vh`, // Adjust height based on number of cards
          }}
        >
          {cards.map((card, index) => {

            return (
              <div
                key={index}
                className="card-container"
                style={{
                  top: `${index * 6 + 10}vh`,
                  zIndex: cards.length + index,
                  position: "sticky",
                }}
              >
                <div
                  className="card-inner"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full  flex flex-col gap-6 sm:gap-[32px]">
                    <div className="flex flex-col gap-4 sm:gap-[12px]">
                      <h1 className="font-grava font-[450] text-2xl sm:text-4xl lg:text-[40px] leading-[30px] sm:leading-[50px] text-[#002244]">
                        {card.title}
                      </h1>
                      <p className="font-grava font-[400] text-base sm:text-lg lg:text-[18px] leading-[20px] sm:leading-[27px] text-[#002244]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-8 sm:gap-[48px] lg:gap-[80px]">
                      <div className="flex flex-col gap-6 sm:gap-[16px] items-start">
                        {card.points.map((point, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <img src={goodMark} className="w-6 h-6 sm:w-7 sm:h-7" alt="checkmark" />
                            <p className="font-grava font-[400] text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                      <button
                        className="w-[217px] sm:w-[254px] cursor-default bg-[#EDEDED] py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center"
                      >
                        <p className="font-grava font-[450] sm:text-[18px] text-[#B0B0B0]">
                          To be available soon
                        </p>
                        <BsArrowRight
                          size={20}
                          className="text-[#B0B0B0]"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[45vh] sm:h-[385px] mt-8 lg:mt-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={advisoryRef}
        className="
          h-[1019.45px] sm:h-[1120.45px] lg:h-[705px] 
          bg-[#FFFFFF] 
          flex flex-col-reverse lg:flex-row 
          justify-between items-center 
          py-[60px] pr-[101px] pl-[110px] sm:pr-[80px] sm:pl-[80px]
        "
      >
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
      flex flex-col items-center lg:items-start gap-[32px]
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
          font-grava font-[450] 
          text-center lg:text-start 
          text-[24px] sm:text-[34px] lg:text-[40px] 
          leading-[30px] sm:leading-[40px] lg:leading-[50px] 
          tracking-[1.4%] sm:tracking-[0.8%] lg:tracking-[0.2%] 
          text-[#002244]
        ">
              Financial Advisory Services – Expert Guidance for Smart Decisions
            </h1>
            <p
              className="
          font-grava font-[400] 
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
        flex flex-col items-center  lg:items-start 
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
                font-grava font-[450] 
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
                font-grava font-[450] 
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
                font-grava font-[450] 
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
              <Buttons 
                text="Find out more"
                link="/business/account"
                sect=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={faqRef}
        className="bg-[#F9FAFB] flex flex-col lm:flex-row items-start lm:gap-[64px] gap-[48px] py-[56px] px-5 lm:py-[80px] lm:px-[59px]">
        <div className="flex flex-col gap-6 w-full lm:w-[448px]">
          <p className="text-[#334E69] font-[500]  leading-5 tracking-[0.25em] font-grava text-[11px] lg:text-[14px]">
            WHY CHOOSE US
          </p>
          <p className="font-[450] text-[#002244] font-grava text-[24px] lm:text-[48px] leading-[30px] lm:leading-[60px] tracking-[0.2%]">
            Why Choose Tatum <br /> Business Banking.
          </p>
        </div>
        <div className="flex flex-col w-full lm:w-[710px]">
          
           <div
              className={`${openTabOne ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0`}
              onClick={handleTabOne}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  We Understand Your Business
                </p>
                {openTabOne ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef1}
                style={{
                  maxHeight: openTabOne
                    ? `${contentRef1.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabOne ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabOne ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Whether you're just starting or expanding, we provide customized
                  solutions that fit your unique needs
                </p>
              </div>
            </div>

            <div
              className={`${openTabTwo ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabTwo}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Customer-Centric Approach 
                </p>
                {openTabTwo ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef2}
                style={{
                  maxHeight: openTabTwo
                    ? `${contentRef2.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabTwo ? "" : "mb-5"}  overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabTwo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  We don't just serve businesses; we build relationships. Our dedicated business banking team is always
                  available to support you.
                </p>
              </div>
            </div>

            <div
              className={`${openTabThree ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabThree}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  Technology-Driven Excellence  
                </p>
                {openTabThree ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef3}
                style={{
                  maxHeight: openTabThree
                    ? `${contentRef3.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabThree ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabThree ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  Enjoy seamless, secure, and innovative banking tailored for your business.
                </p>
              </div>
            </div>

            <div
              className={`${openTabFour ? "lg:pb-[38px] gap-[8px]" : ""} flex flex-col cursor-pointer border border-[#E6E9EC] border-x-0 border-t-0 pt-[32px]`}
              onClick={handleTabFour}
            >
              <div className="flex items-center justify-between">
                <p className="text-[#546B82] font-grava font-[450] text-base lm:text-[20px] leading-[25px] tracking-[-0.01em]">
                  We Keep You Smiling! 
                </p>
                {openTabFour ? (
                  <img src={Minus} alt="Minus" />
                ) : (
                  <img src={Plus} alt="Plus" />
                )}
              </div>

              <div
                ref={contentRef4}
                style={{
                  maxHeight: openTabFour
                    ? `${contentRef4.current?.scrollHeight}px`
                    : "0px",
                }}
                className={`${openTabFour ? "" : "mb-5"} overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p
                  className={`font-[400] font-grava tracking-[-0.01em] text-base lm:text-[18px] leading-[27px] lg:leading-[1.5em] text-[#334E69] ${
                    openTabFour ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  } transition-opacity transition-transform duration-500 ease-in-out`}
                >
                  With Tatum Bank, banking is effortless, rewarding, and stress-free.
                </p>
              </div>
            </div>
        
        </div>
      </div>

      <div className="h-[794px] sm:h-[900px] lg:h-[680px] py-[60px] sm:py-[80px] lg:py-[120px] gap-[8px] rounded-[32px] flex justify-center">
        <div
          style={{
            backgroundColor: "rgb(244 245 246 / 95%)", // Brighter background with slight transparency
            zIndex: 1, // Ensures content stays above background
          }}
          className="overflow-hidden h-[682px] sm:h-[750px] lg:h-[440px] 
               w-[90%]  lg:w-[90%] 
               rounded-[32px] py-[32px] sm:py-[48px] lg:py-[64px] 
               px-[20px] sm:px-[32px] lg:px-[64px] 
               gap-[48px] sm:gap-[80px] lg:gap-[133px] 
               flex flex-col lg:flex-row bg-[#F9FAFB] justify-center lg:items-center relative z-10">
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `url(${SmeVector})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.07, // Adjust this value as needed
            }}
          />
          <div
            className="w-[310px] sm:w-[600px] lg:w-[615px] 
                    h-[257.99px] sm:h-[300px] lg:h-[312px]
                    flex flex-col gap-[40px] lg:justify-between ">
            <div className="flex flex-col gap-[16px]">
              <h1
                className="font-grava font-[500] text-[16px] sm:text-[22px] lg:text-[32px] 
                       leading-[20px] sm:leading-[24px] whitespace-nowrap lg:leading-[48px] 
                       tracking-[0.2%] text-[#002244]">
                Let’s Build the Future of Your Business <br />Together
              </h1>
              <p
                className="font-grava font-[400] text-[16px] sm:text-[20px] lg:text-[18px] 
                      leading-[20px] sm:leading-[24px] lg:leading-[27px] 
                      tracking-[0.2%] text-[#002244]">
                Your business deserves a bank that believes in your dreams as
                much as you do. Let’s talk about how Tatum Bank can empower you
                to achieve more or <span className="underline font-[450]">Visit our nearest client centre</span> to get started
              </p>
            </div>
            <div className="flex">
              <button
                className={`animate__animated animate__slow animate__fadeInUp
                  transition-all duration-500 ease-in-out border bg-[#002244] group 
              hover:bg-opacity-0  hover:border-[#002244]
              w-[154px] sm:w-[170px] lg:w-[219px] 
              h-[51px] sm:h-[55px] lg:h-[59px] 
              rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center`}
              onClick={() => {
                navigate("/contact"),
                window.scrollTo(0, 0)
                }}
              >
                <p
                  className="transition-colors duration-500 ease-in-out font-[450] 
                        text-[14px] sm:text-base lg:text-[18px] font-grava 
                        text-[#FFCC33] group-hover:text-[#002244]">
                  Call us today
                </p>
                <BsArrowRight
                  size={100}
                  className="w-5 h-5 mt-[2px] transition-colors duration-500 ease-in-out 
                                      text-[#FFCC33] " //group-hover:text-[#002244]
                />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[600px] lg:h-[312px] lg:w-[468px] h-[312px]"> {/*  sm:h-[500px] */}
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
