import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CBN from "../../assets/svg/cbn_logo.svg";
import NDIC from "../../assets/png/ndic.png";
import SlimStar from "../../assets/svg/slim_star.svg";
import MissionStar from "../../assets/svg/mission_star.svg";
import Moon from "../../assets/svg/moon.svg";
import Arrow from "../../assets/svg/arrow.svg";
import ArrowClick from "../../assets/svg/arrow_click.svg";
import Check from "../../assets/svg/check.svg";
import Clip from "../../assets/svg/clip_triangle.svg";
import Microphone from "../../assets/svg/microphone.svg";
import Telescope from "../../assets/svg/telescope.svg";

import People from "../../assets/png/people.png";
import Pie from "../../assets/png/pie.png";
import Treasure from "../../assets/png/treasure.png";
import Settings from "../../assets/png/settings.png";
import Business from "../../assets/png/business_img.png";
import Shake from "../../assets/png/shake.png";
import ShakeMobile from "../../assets/png/shake_mobile.png";
import Shape from "../../assets/png/shape.png";
import Play from "../../assets/png/play.png";
import Learn from "../../assets/png/learn.png";
import Aunty from "../../assets/png/aunty.png";
import Core from "../../assets/png/core_bg.png";
import ManB from "../../assets/png/man_b.png";
import ManC from "../../assets/png/man_c.png";
import ManD from "../../assets/png/man_d.png";
import Girl from "../../assets/png/yellow_girl.png";
import Unique from "../../assets/png/unique_bg.png";
import HeadShot from "../../assets/png/headshot_mock_up.png";
import Layer from "../../assets/png/layer.png";
import HeroSection from "../../components/HeroSection";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const teamsRef = useRef(null);
  const servicesRef = useRef(null);
  const { state } = useLocation();

  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Nnamdi Peters",
      role: "Client",
      text: `"Ever since I switched to Tatum Bank, managing my finances has become incredibly straightforward. Their online platform and customer service have always makes me happy"`,
    },
    {
      name: "Jamal Thompson",
      role: "Client",
      text: `"Tatum Bank's customized loan alternatives and custom budgeting tools have changed the way I manage my finances. I can tell they genuinely care about my long-term success."`,
    },
    {
      name: "David Williams Atata",
      role: "CFO at NovaTech Industries",
      text: `"Running my own company comes with its own set of financial challenges, and Tatum Bank understands those obstacles inside and out."`,
    },
  ];

  const team = [
    {
        name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
        pic: "https://res.cloudinary.com/code-idea/image/upload/v1739438322/sam_b_p98pwm.jpg",
        role: "Chairman, Board of Directors",
        bio: 
          `<div class="flex flex-col gap-5">
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades. He holds a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co in Abuja and has served as Secretary General of the Nigerian Bar Association, Abuja Branch, since 1994. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association.</p>
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Ologunorisa is a passionate advocate for human rights, having chaired the NBA Abuja FCT Human Rights Committee since 1994, and has contributed significantly to legal scholarship, including authoring "Selected Judgment & Ruling of Hon. Justice L.H. Gummi" and serving as a consultant to the NYSC Law Reports. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association.</p>
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>His career is marked by exceptional legal leadership, advocacy, and a commitment to promoting human rights and legal standards both in Nigeria and globally.</p>
          </div>`
    },
    {
      name: "Niyi Adeseun",
      role: "Managing Director",
      pic: "https://res.cloudinary.com/code-idea/image/upload/v1739438876/niyi_full_doynv5.jpg",
      bio: 
        `<div class="flex flex-col gap-5">
          <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations, risk management, business development, and financial services. His career began in 1990 at Nigeria International Bank (now Citibank), and he has held senior roles in several notable Nigerian banks, including Oceanic Bank, Crystal Bank, Standard Trust Bank, Skye Bank, and Heritage Bank.</p>
          <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Notably, he was a key figure in the establishment of Heritage Bank in 2012, serving as Executive Director until his retirement in 2017. He is the Managing Director and CEO of Greenbond Finance Company Limited, which he co-founded in 2022. Niyi holds multiple advanced degrees, including an MBA from the University of Lagos, a Chartered Banker MBA from the University of Bangor, and is a Fellow of the Chartered Institute of Bankers (FCIB).</p>
          <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>He possesses vast financial management, project structuring, and corporate finance expertise across sectors such as real estate and fintech. Niyi is also an alumnus of esteemed institutions like INSEAD and Harvard Business School.</p>
        </div>`
    },
    // {
    //   name: "Samuel Otseilu Zibiri, SAN",
    //   role: "Non-Executive Director",
    //   pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531124/Samuel_full_n376id.jpg",
    //   bio: 
    //     `<div class="flex flex-col gap-5">
    //       <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Samuel Ofseilu Zibiri, SAN, is a distinguished Nigerian lawyer with an extensive educational background and a distinguished career. He holds an LLB (Hons) from Ahmadu Bello University and a Diploma in International Commercial Arbitration from Jesus College, Oxford.</p>
    //       <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'> 
    //         His professional journey began in 1987 as a Pupil Counsel and has since spanned various leadership roles, 
    //         including Managing Partner at Cosmic Chambers and Principal Partner at El-Shaddai Chambers. 
    //         Zibiri has played significant roles within the Nigerian Bar Association (NBA), including serving as 
    //         Public Relations Officer, Vice Chairman, and currently as Chairman of the NBA Abuja Branch Disciplinary 
    //         Committee.
    //       </p>
    //       <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>
    //         He has vast experience in litigation, corporate law, debt management, and election petition tribunals. 
    //         A registered practitioner with the Securities and Exchange Commission (SEC), Zibiri specializes in 
    //         debt recovery and capital market matters. Fluent in multiple languages, including English, Afemai, Hausa, 
    //         and Yoruba, Zibiri's career reflects his commitment to the ethical practice of law and his influential 
    //         role in shaping the legal landscape in Nigeria.
    //       </p>
    //     </div>`
    // },
    {
        name: "Mr George Okoh-Oboh",
        pic: "https://res.cloudinary.com/code-idea/image/upload/v1739439246/george_full_cergcx.jpg",
        role: "Executive Director",
        bio: 
          `<div class="flex flex-col gap-5">
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Mr George Oko-Oboh is a results-driven and highly accomplished Executive Director with over two decades of experience in the banking industry, including senior leadership roles in various Banks. Known for his strategic vision, integrity, and a relentless focus on achieving organizational excellence. A dynamic leader with strong communication skills and a deep commitment to fostering collaboration and organizational success.</p>
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Mr George is equipped with a solid educational background, including a Doctorate of Philosophy in Business Administration from Prowess University, Delaware, and a Chartered Banker MBA from the University of Bangor, UK, complemented by an MBA in General Management from the University of Abuja. Additionally, he holds a BSc in Banking & Finance. His commitment to professional development is demonstrated by various certifications, including fellowship status in the Chartered Institute of Bankers Nigeria (CIBN) and the Chartered Institute of Information and Strategy Management (CIISM). He has also attended specialized training programs such as Strategic Negotiations at Harvard Business School and Senior Management Programs.</p>
            <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>With an unwavering commitment to leadership and continuous learning, he remains focused on shaping business strategies that drive sustained success and foster a high-performance culture.</p>
          </div>`
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num + 1).padStart(2, "0");

  useEffect(() => {
   
    if (state?.section === "mission-and-vision" && missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "teams" && teamsRef.current) {
      teamsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
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
    <div
      className="w-full flex flex-col overflow-hidden"
      ref={aboutRef}
      id="about"
    >
      {
        isMobile ? 
        // Mobile
       <section 
          className='h-full w-full overflow-hidden outline-none md:h-[100vh]' 
        >
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[786px] md:h-[100vh] overflow-hidden pl-5 relative w-full flex flex-col items-center gap-0  md:pt-[96px]  max-sm:pt-[30%]" //[694px]
        >
          <div className="w-full flex flex-col items-start relative z-30 gap-[64px]">
            <div className="flex w-full flex-col items-start gap-2 lg:gap-5">
              <p               
                style={{fontWeight:450}}
                className={`animate__animated animate__fadeInUp  lm:w-[450px] font-grava text-[#002244] text-left text-[34px] lm:text-[50px]  font-medium leading-[40px] lm:leading-[55px] `}
              >
                Welcome to <br /> <span className="font-bold">Tatum Bank</span>
              </p>
              <p
                className={`animate__animated   animate__fadeInUp animate__delay-06s w-[280px]  md:w-[530px] lm:w-[571px] font-[300] text-sm font-grava md:text-[25px] text-left text-[#002244] leading-[20px] md:leading-[34px]`}
              >
                We are more than a financial institution; we are your trusted partner 
                dedicated to safeguarding your financial wellbeing.
              </p>
            </div>

            <div className="flex items-start absolute -bottom-20 lg:bottom-[-70%]" style={{zIndex:'99999'}}>
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
          <img
            src={'https://res.cloudinary.com/code-idea/image/upload/v1739211090/Adobe_Express_-_file_10_1_ycolam.webp'}
            alt="Family"
            data-aos="fade-left"
            loading="lazy"
            data-aos-duration="1000"
            // data-aos-once="false"
            className={`top-12 -right-14 lm:-right-24 lg:top-[35%] animate__animated relative lg:w-[57%] `} 
            //top-8
            />
        </div>
      </section> 
        :
        // Desktop
        <section className="w-full ">
          <HeroSection 
            bgMobile={"https://res.cloudinary.com/code-idea/image/upload/v1739270902/bg_mobile_areyrd.png"} 
            bgDesktop={"https://res.cloudinary.com/code-idea/image/upload/v1739209567/Slide_3_1_eei8jr.png"} 
            title={` Welcome to <br /> <span class="font-bold">Tatum Bank</span>`}
            content={`We are more than a financial institution; we are your<span class="block"> trusted partner dedicated to safeguarding your </span> financial wellbeing.`} 
            link={"/personal"} 
            sectionName={"savings"} 
            mainImgMobile={"https://framerusercontent.com/images/Mu86Y79csh9l6TTNfaBOTXmk.png"} 
            mainImgDesktop={"https://framerusercontent.com/images/Mu86Y79csh9l6TTNfaBOTXmk.png"} 
            left={true}
          />
        </section>
      }
    
    <section className="px-5 lm:px-[56px] lm:h-[643px] pt-[50px]" ref={missionRef}>
      <div className=" flex flex-col md:flex-row items-start justify-between ">
        <div className="flex flex-col gap-4 lm:gap-5 w-full  md:w-6/12  lm:py-[15px] lg:pr-[59px]">
          <div className="flex items-center justify-between">
            <p className="text-[#002244] font-grava font-[600]  text-[28px] lg:text-[56px] tracking-wider"> {/* font-bo */}
              Our Story
            </p>
            {/* <img
              src={SlimStar}
              alt="SlimStar"
              className="w-[48px] h-[55px] hidden lg:block"
            /> */}
          </div>
          <p className="text-[#002244] font-[350] font-grava leading-[24px] lg:leading-[155%] text-base lg:text-[18px] tracking-[0.336px]">
            Inspired by our name, Tatum—a refined form of the Latin word Tutum, 
            meaning "a safe place" or "refuge"—we are committed to being a secure 
            and dependable guardian of your financial goals and aspirations.
          </p>
          <p className="text-[#002244] font-[350] font-grava leading-[24px] lg:leading-[155%] text-base lg:text-[18px] tracking-[0.336px]">
            Our journey is rooted in the promise to provide a safe haven where customers 
            can confidently entrust their finances. We deliver on this promise through 
            innovative products, advanced technology, and unparalleled service, designed 
            to support every step of your financial journey.
          </p>
          <p className="text-[#002244] font-[350] font-grava leading-[24px] lg:leading-[155%] text-base lg:text-[18px] tracking-[0.336px]">
            At Tatum Bank,{" "}
            <span className="font-semibold italic">we keep you smiling.</span>
          </p>
        </div>
        <div className="flex flex-col w-full md:w-6/12 pt-[32px] lm:py-[32px] lm:border-dashed lm:border-[1px] lm:border-r-0 lm:border-y-0 lm:border-[#C9C9C9]">
          <div className="items-start lm:items-center flex flex-col gap-6 lg:pt-0 pb-[38px] md:pl-5   lm:border-dashed lm:border-[1px] lm:border-x-0 lm:border-t-0 lm:border-[#C9C9C9]">
            <img
              src={Telescope}
              alt="MissionStar"
              className="w-[40px] h-[40px] md:w-[66px] md:h-[66px]"
            />
            <div className="flex flex-col items-start lm:items-center gap-3">
              <p className="font-grava text-[#002244] font-semibold leading-[30px] tracking-[0.336px] text-[18px] lm:text-[24px]">
                  Vision
              </p>
              <p className="font-grava text-base text-left lm:text-center lg:text-[18px] text-[#002244] font-[350] leading-[150%] tracking-[0.336px]">
                To be Nigeria's preferred financial services provider.
              </p>
            </div>
          </div>
          <div className="items-start flex flex-col gap-6 relative lm:items-center lm:pt-[38px] md:pl-5 ">
            <img
              src={Microphone}
              alt="Moon"
              className="w-[40px] h-[40px] md:w-[66px] md:h-[66px]"
            />
            <div className="flex flex-col items-start lm:items-center gap-3">
              <p className="font-grava text-[#002244] font-[550] leading-[30px] tracking-[0.336px] text-[18px] lm:text-[24px]">
                Mission Statement 
              </p>
              <p className="font-grava text-base text-left lm:text-center lg:text-[18px] text-[#002244] font-[350] leading-[150%] tracking-[0.336px]">
                "To meet our customers' financial needs 
                through innovative, 
                technology-driven products and services, <br></br>delivered with ease."
              </p>
              <div className="hidden lm:flex items-end justify-end absolute -bottom-20 right-0">
                <img src={Shape} alt="Shape" className="w-[48px] h-[66px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="w-full flex flex-col gap-[56px]  overflow-hidden lm:gap-[92px] ">

    <section className="flex flex-col lg:flex-row items-start lg:h-auto px-5 lm:px-[56px] gap-4 lg:gap-[32px]">
      <div
        style={{
          backgroundImage: `url(${Aunty})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full lg:w-[844px] h-[428px] md:h-[600px] lg:h-[859px] relative rounded-tr-3xl rounded-br-3xl"
      >

        <div className="lm:w-[64px] flex flex-col gap-[14px] absolute bottom-8 left-4 lm:left-8">
          <div
            className="bg-[#fff] flex items-center p-2 cursor-pointer rounded-[32px] gap-2 w-[211px] lm:w-[296px]"
            data-aos="fade-up"
            data-aos-delay="0"
            onClick={() => {
              navigate("/digital")
              window.scrollTo(0, 0)
            }}
          >
            <img src={Check} alt="Check" className="" />
            <p className="font-grava text-[#002244] leading-[20px] whitespace-nowrap font-[500]  w-[211px] lm:leading-[24px] text-[14px] lm:text-[20px]">
              Gen Z-Focused Solutions
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#fff] flex items-center p-2 rounded-[32px] gap-2  lm:w-[340px] cursor-pointer"
            onClick={() => {
              navigate("/digital")
              window.scrollTo(0, 0)
            }}
          >
            <img src={Check} alt="Check" className="" />
            <p className="font-grava text-[#002244] leading-[20px] whitespace-nowrap font-[500] lm:leading-[24px] text-[14px] lm:text-[20px]">
              Cutting-Edge Digital Banking
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#fff] flex items-center p-2 rounded-[32px] cursor-pointer gap-2 w-[203px] lm:w-[287px]"
            onClick={() => {
              navigate("/personal/account")
              window.scrollTo(0, 0)
            }}
          >
            <img src={Check} alt="Check" className="" />
            <p className="font-grava text-[#002244] leading-[20px] whitespace-nowrap font-[500] lm:leading-[24px] text-[14px] lm:text-[20px]">
              Accessible and Inclusive
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-[#fff] flex items-center p-2 rounded-[32px] gap-2 w-[230px] lm:w-[326px]"
            onClick={() => {
              navigate("/personal/account")
              window.scrollTo(0, 0)
            }}
          >
            <img src={Check} alt="Check" className="" />
            <p className="font-grava text-[#002244] leading-[20px] whitespace-nowrap font-[500] lm:leading-[24px] text-[14px] lm:text-[20px]">
              Financial Literacy Advocacy
            </p>

          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-[33px] lg:w-[452px]">
        <img src={Play} alt="Play" className="lg:w-[452px] lg:h-[412px]" />
        <img src={Learn} alt="Learn" className="lg:w-[452px] lg:h-[412px]" />
      </div>
    </section>

      <section
       ref={servicesRef}
        style={{
          backgroundImage: `url(${Core})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-auto lg:h-[916px] py-[56px] lg:py-[112px] px-5 lm:px-[87px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lm:gap-[33px]"
      >
        <div className="flex flex-col gap-5">
          <p className="font-grava font-medium text-[28px] lm:text-[60px] leading-[35px] lm:leading-[72px] text-[#002244]">
            Our{" "}
            <span className="font-bold">
              Core <br /> Values
            </span> <span className="font-bold">(TECII)</span>
          </p>
          <p className="font-grava text-base lm:text-[24px] text-[#002244] font-[350] leading-6 lm:leading-[30px] tracking-[0.336px]">
            Our values are intrinsic to how we operate and how we serve our
            customers to deliver exemplary financial services.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="bg-[#FFFFFF] flex flex-col gap-[40px] h-auto lm:h-[330px] rounded-[20px] p-6 lm:py-[40.5px] lm:px-6"
        >
          <img src={Treasure} alt="Treasure" className="w-[83px] h-[64px]" />
          <div className="flex flex-col gap-4">
            <p className="text-[#002244] font-[450] font-grava text-[18px] lm:text-[24px] leading-[27px] lm:leading-[30px] tracking-[0.336px]">
              Teamwork
            </p>

            <p className="text-[14px] lm:text-[20px] text-[#002244] font-[350] leading-5 lm:leading-[33px] font-grava">

              By combining our diverse strengths and perspectives, we create
              exceptional experiences together.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[#FFFFFF] flex flex-col gap-[40px] h-auto lm:h-[330px] rounded-[20px] p-6 lm:py-[40.5px] lm:px-6"
        >
          <img src={Business} alt="Business" className="w-[59px] h-[64px]" />
          <div className="flex flex-col gap-4">
            <p className="text-[#002244] font-grava font-[450] text-[18px] lm:text-[24px] leading-[27px] lm:leading-[30px] tracking-[0.336px]">
              Excellence
            </p>

            <p className="text-[14px] lm:text-[20px] text-[#002244] font-[350] leading-5 lm:leading-[33px] font-grava">

              We reimagine banking with creative solutions that make your
              financial journey rewarding.
            </p>
          </div>
        </div>
       
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[#FFFFFF] flex flex-col gap-[40px]  h-auto lm:h-[330px] rounded-[20px]  p-6 lm:py-[40.5px] lm:px-6"
        >
          <img src={Pie} alt="Pie" className="w-[83px] h-[64px]" />
          <div className="flex flex-col gap-4">
            <p className="text-[#002244] font-grava font-[450] text-[18px] lm:text-[24px] leading-[27px] lm:leading-[30px] tracking-[0.336px]">
              Customer-Centricity
            </p>

            <p className="text-[14px] lm:text-[20px] text-[#002244] font-[350] leading-5 lm:leading-[33px] font-grava">

              Your dreams and satisfaction drive our decisions, making banking
              worth smiling about.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-[#FFFFFF] flex flex-col gap-[40px] h-auto lm:h-[330px] rounded-[20px] p-6 lm:py-[40.5px] lm:px-6"
        >
          <img src={People} alt="People" className="w-[83px] h-[64px]" />
          <div className="flex flex-col gap-4">
            <p className="text-[#002244] font-grava font-[450] text-[18px] lm:text-[24px] leading-[27px] lm:leading-[30px] tracking-[0.336px]">
              Integrity
            </p>

            <p className="text-[14px] lm:text-[20px] text-[#002244] font-[350] leading-5 lm:leading-[33px] font-grava">

              We build trust through transparent actions that brighten your
              banking experience.
            </p>
          </div>
        </div>
       
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-[#FFFFFF] flex flex-col gap-[40px] h-auto lm:h-[330px] rounded-[20px] p-6 lm:py-[40.5px] lm:px-6"
        >
          <img src={Settings} alt="Settings" className="w-[83px] h-[64px]" />
          <div className="flex flex-col gap-4">
            <p className="text-[#002244] font-grava font-[450] text-[18px] lm:text-[24px] leading-[27px] lm:leading-[30px] tracking-[0.336px]">
              Innovation
            </p>

            <p className="text-[14px] lm:text-[20px] text-[#002244] font-[350] leading-5 lm:leading-[33px] font-grava">

              With creativity and forward-thinking, we transform banking into something truly remarkable.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-5 lg:px-[56px] mb-[56px] lm:mb-[62px] flex flex-col gap-[32px] lm:gap-[56px]"
        ref={teamsRef}
      >
        <div className="flex items-center justify-between">
          <p className="font-grava font-medium text-[#002244] text-[28px] leading-[35px] lm:text-[60px] lm:leading-[72px]">
            Board & <span className="font-bold">Leadership.</span>
          </p>
          <div
            className="hidden md:flex items-center gap-6 group"
            onClick={() =>
              navigate("/about/teams", { state: { section: "teams" } }, window.scrollTo(0, 0))
            }
          >
            <p className="text-[#19352D] text-[20px] cursor-pointer group-hover:mr-2 font-grava leading-[130%] tracking-[0.01em] font-[400]">
              See all Board Members
            </p>
            <img
              src={Arrow}
              alt="Arrow"
              className="w-[56px] h-[40px] transition-all duration-500 group-hover:ml-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lm:grid-cols-3 gap-10">
          {/* First Card with Hover Effect */}
          <div
            className="flex flex-col gap-6"
            onClick={() => {
              navigate("/about/team-details", {
                state: { section: "details", team: team[0] },
              },window.scrollTo(0, 0));
            }}
          >
            <div className="relative w-auto cursor-pointer h-[387px] md:h-auto group overflow-hidden rounded-lg">
              {/* Background Image */}
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739531326/Samuel_head_dlvi63.jpg"
                alt="HeadShot"
                className="w-full h-[552px] object-cover transition-all duration-500 "
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

              {/* Center Arrow */}
              <img
                src={ArrowClick}
                alt="ArrowClick"
                className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
               <div className="absolute -bottom-5 lg:-bottom-2 -right-1 w-[47.87px] h-[53.32px] z-10 clip-path-triangle" style={{    marginTop: "-10%"}}>
                    <img src={Clip} alt='Clip' className='teamBase' />
                </div>
                <div className="absolute -bottom-2 right-0 w-[40.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <p className="font-grava font-semibold text-[#002244] leading-6 lm:leading-[34.18px] text-[18px] tracking-[0.01em] md:text-[20px] lm:text-[23px] lg:text-[27.35px]">
                Samuel Tomi Ologunorisa, SAN, FCIArb (UK) {/* <br /> */}
              </p>

              <p className="font-grava text-[#002244] font-[400] text-[14px] md:text-base lm:text-[21.88px] tracking-[0.2%] leading-[32.82px]">

                Chairman, Board of Directors
              </p>
            </div>
          </div>

          {/* Second Card (Hover Effect) */}
          <div
            className="flex flex-col gap-6 "
            onClick={() => {
              navigate("/about/team-details", {
                state: { section: "details", team: team[1] },
              },window.scrollTo(0, 0));
            }}
          >
            <div className="relative w-auto cursor-pointer h-[387px] md:h-auto  group overflow-hidden rounded-lg">
              {/* Background Image */}
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739530969/Niyi_head_oihrr0.jpg"
                alt="HeadShot"
                className="w-full h-[552px] object-cover transition-all duration-500 "
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

              {/* Center Arrow */}
              <img
                src={ArrowClick}
                alt="ArrowClick"
                className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
               <div className="absolute -bottom-5 lg:-bottom-2 -right-1 w-[47.87px] h-[53.32px] z-10 clip-path-triangle" style={{    marginTop: "-10%"}}>
                    <img src={Clip} alt='Clip' className='teamBase' />
                </div>
                <div className="absolute -bottom-2 right-0 w-[40.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-grava font-semibold text-[#002244] leading-6 lm:leading-[34.18px] text-[18px] tracking-[0.01em] md:text-[20px] lm:text-[23px] lg:text-[27.35px]">
                Niyi Adeseun
              </p>

              <p className="font-grava text-[#002244] font-[400] text-[14px] md:text-base lm:text-[21.88px] tracking-[0.2%] leading-[32.82px]">

                Managing Director
              </p>
            </div>
          </div>

          {/* Third Card (Hover Effect) */}
          <div
            className="flex flex-col gap-6"
            onClick={() => {
              navigate("/about/team-details", {
                state: { section: "details", team: team[2] },
              },window.scrollTo(0, 0));
            }}
          >
            <div className="relative w-auto cursor-pointer h-[387px] md:h-auto  group overflow-hidden rounded-lg">
              {/* Background Image */}
              <img
                src="https://res.cloudinary.com/code-idea/image/upload/v1739531460/George_head_em2hcr.jpg"
                // src="https://res.cloudinary.com/code-idea/image/upload/v1739531118/Samuel_head_hfkams.jpg"
                alt="HeadShot"
                className="w-full h-[552px] object-cover transition-all duration-500 "
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

              {/* Center Arrow */}
              <img
                src={ArrowClick}
                alt="ArrowClick"
                className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
                <div className="absolute -bottom-5 lg:-bottom-2 -right-1 w-[47.87px] h-[53.32px] z-10 clip-path-triangle" style={{    marginTop: "-10%"}}>
                    <img src={Clip} alt='Clip' className='teamBase' />
                </div>
                <div className="absolute -bottom-2 right-0 w-[40.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
            </div>
            <div className="flex flex-col gap-[5px]">
            <p className="font-grava font-semibold text-[#002244] leading-6 lm:leading-[34.18px] text-[18px] tracking-[0.01em] md:text-[20px] lm:text-[23px] lg:text-[27.35px]">
                {/* Samuel Otseilu Zibiri, SAN */}
                Mr George Oko-Oboh
              </p>

              <p className="font-grava text-[#002244] font-[400] text-[14px] md:text-base lm:text-[21.88px] tracking-[0.2%] leading-[32.82px]">

                Executive Director
              </p>
            </div>
          </div>

        
        </div>
        
        <button 
          onClick={() =>
            navigate("/about/teams", { state: { section: "teams" } }, window.scrollTo(0, 0))
          }
          className="lm:hidden flex justify-center p-4 items-center gap-3 bg-[#FFCC33] rounded-tr-[16px] rounded-bl-[16px] h-[52px]"
        >
          <p className="text-[#19352D] text-[14px] cursor-pointer group-hover:mr-2 font-grava leading-[26px] tracking-[0.01em] font-400">
            See all Team Members
          </p>
          <img
            src={Arrow}
            alt="Arrow"
            className="w-[28px] h-[20px] transition-all duration-500 group-hover:ml-2"
          />
        </button>
      </section>

      <section className="px-5 lm:px-[56px] mb-[56px] hidden bg-[#fff]">
        <div className="relative w-full h-min-auto rounded-xl">
        
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Layer})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              opacity: 1.3, // Reduced opacity from 0.2 to 0.1
              zIndex: 0,
              borderRadius:'5%'
              
            }}
          />
          
    
          <div
            className="relative w-full h-full rounded-xl px-5 lm:px-[56px] py-[48px] lm:py-[64px] flex flex-col lm:flex-row gap-10 lm:gap-0 justify-between items-center"
            style={{ 
              backgroundColor: 'rgb(244 245 246 / 95%)', // Brighter background with slight transparency
              zIndex: 1 // Ensures content stays above background
            }}
          >
            
            <div className="flex flex-col gap-5 lm:gap-[80px] lm:w-[346px]">
              <p className="font-grava text-[#002244] leading-[35px] lm:leading-[72px] font-medium text-[28px] lm:text-[60px]">
                Words from <span className="font-bold">our clients.</span>
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-[230px] bg-[#002244]"></div>
                <p className="text-[#002244] font-grava text-base lm:text-[20px] leading-[26px] tracking-[0.01em]">
                  {formatNumber(activeIndex)}
                  <span className="text-[#8A99A9] font-[300]">
                    / {formatNumber(testimonials.length - 1)}
                  </span>
                </p>
              </div>
            </div>

           
            <div className="flex flex-col gap-5 w-full lm:gap-[40px] lm:w-[766px] relative h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                >
                  <p className="font-grava text-[#002244] leading-[26px] lm:leading-[49px] text-[20px] lm:text-[34px]  " style={{fontWeight:350}}>
                    {testimonial.text}
                  </p>

                  <br></br>
                  <div className="flex gap-4 mt-5">
                    <img src={Girl} alt="" className="w-[64px] h-[64px] rounded-full" />
                    <div className="flex flex-col gap-2">
                      <p className="font-grava text-[#002244] font-semibold text-[20px] leading-[25px] tracking-[0.01em]">
                        {testimonial.name}
                      </p>
                      <p className="font-[300] font-grava text-[#002244] text-sm lm:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>





      {/* <section className="px-5 lm:px-[56px] mb-[56px] bg-[#fff]">
            <div
                style={{
                    backgroundImage: `url(${Layer})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                className="w-full h-min-auto lm:h-[440px] rounded-xl"
            >
                <div 
                    className="w-full h-full rounded-xl px-5 lm:px-[56px] py-[48px] lm:py-[64px] flex flex-col lm:flex-row gap-10 lm:gap-0 justify-between items-center"
                    style={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                 
                >
                    <div className="flex flex-col gap-5 lm:gap-[80px] lm:w-[346px] ">
                        <p className="font-grava text-[#002244] leading-[35px] lm:leading-[72px] font-medium text-[28px] lm:text-[60px]">Words from 
                            <span className="font-bold"> our clients.</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-[230px] bg-[#002244]"></div>

                            <p className="text-[#002244] font-grava text-base lm:text-[20px] leading-[26px] tracking-[0.01em]">01 <span className="text-[#8A99A9] font-[350] opacity- 0"></span>/ 03</p>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 lm:gap-[40px] lm:w-[766px]">
                        <p className="font-grava text-[#002244] leading-[26px] lm:leading-[49px] text-[20px] lm:text-[34px]">
                            "Tatum Bank doesn't just handle my finances – they understand my vision. 
                            Their personal approach and innovative solutions helped my business thrive."
                        </p>
                        <div className="flex gap-4">
                            <img src={Girl} alt="" className="w-[64px] h-[64px]" />
                            <div className="flex flex-col gap-2">

                                <p className="font-grava text-[#002244] font-semibold text-[20px] leading-[25px] tracking-[0.01em]">Jennifer monye</p>
                                <p className="font-[350] font-grava text-[#002244] text-sm lm:text-base">Business Owner</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      {/* <section
            style={{
                backgroundImage: `url(${Unique})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className="h-[708px] py-[96px] px-[56px] flex flex-col gap-[72px]"
        >
            <div className="flex items-center justify-between">
                <div className="w-[421px] ">
                    <p className="font-grava text-[60px] font-medium leading-[72px]">
                        Our<span className="font-bold"> Unique Selling Points</span>  </p>
                </div>
                <div className="flex items-center gap-6 group">
                    <p className="text-[#19352D] text-[20px] cursor-pointer group-hover:mr-2 font-grava leading-[26px] tracking-[0.01em]">Contact us</p>
                    <img src={Arrow} alt="Arrow" className="w-[56px] h-[40px] transition-all duration-500 group-hover:ml-2" />
                </div>
            </div>

            <div className="flex items-center gap-5">
                <div className="w-[317px] h-[300px] gap-[32px] cursor-pointer hover:scale-105 rounded-tl-[16px] rounded-br-[16px] flex flex-col items-center justify-center bg-[#fff]">
                    <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.49992 0C1.87125 -1.90734e-06 1.29606 0.353748 1.01246 0.914819C0.728865 1.47589 0.785777 2.14971 1.15858 2.65592L1.16007 2.65791C1.2181 2.73578 1.38693 2.96231 1.49157 3.10086C1.7026 3.38027 2.00596 3.77793 2.37791 4.25454C3.12042 5.206 4.1426 6.48024 5.25317 7.75935C6.35655 9.03018 7.57992 10.344 8.72206 11.3531C9.29122 11.856 9.87947 12.3185 10.4531 12.6643C10.981 12.9826 11.7063 13.3333 12.4999 13.3333C13.2934 13.3333 14.0187 12.9826 14.5466 12.6643C15.1202 12.3185 15.7085 11.856 16.2776 11.3531C17.4198 10.344 18.6432 9.03021 19.7466 7.75939C20.8572 6.48029 21.8794 5.20607 22.6219 4.25462C22.9938 3.77802 23.2972 3.38035 23.5082 3.10095C23.6121 2.96349 23.7797 2.73854 23.839 2.65896L23.8419 2.65511C24.2147 2.14891 24.271 1.47599 23.9874 0.914913C23.7038 0.353838 23.1286 7.9155e-05 22.4999 7.72476e-05L2.49992 0ZM4.15139 12.7585C4.05041 12.6248 3.89443 12.4156 3.84184 12.345C3.29599 11.6038 2.25266 11.4455 1.5115 11.9913C0.770334 12.5372 0.612665 13.5814 1.15851 14.3226L1.16 14.3246C1.21803 14.4024 1.38686 14.629 1.4915 14.7675C1.70253 15.0469 2.00589 15.4446 2.37783 15.9212C3.12035 16.8727 4.14253 18.1469 5.2531 19.426C6.35648 20.6969 7.57985 22.0106 8.72199 23.0198C9.29115 23.5227 9.8794 23.9852 10.453 24.331C10.9809 24.6492 11.7062 25 12.4998 25C13.2933 25 14.0187 24.6492 14.5466 24.331C15.1202 23.9852 15.7084 23.5227 16.2776 23.0198C17.4198 22.0106 18.6431 20.6969 19.7465 19.4261C20.8571 18.147 21.8793 16.8727 22.6219 15.9213C22.9916 15.4476 23.6225 14.6122 23.8373 14.3278L23.8377 14.3274L23.8412 14.3227C24.3871 13.5815 24.2294 12.5373 23.4883 11.9914C22.7471 11.4456 21.7038 11.6039 21.1579 12.345C20.9559 12.6125 20.3537 13.4096 19.994 13.8705C19.2733 14.794 18.2896 16.0198 17.2296 17.2407C16.1623 18.4698 15.0504 19.656 14.0705 20.5219C13.5786 20.9565 13.1592 21.2752 12.8256 21.4763C12.6667 21.5721 12.5601 21.621 12.4998 21.6456C12.4395 21.621 12.3329 21.5721 12.174 21.4763C11.8404 21.2752 11.421 20.9565 10.9291 20.5219C9.94922 19.6561 8.83731 18.4698 7.77011 17.2407C6.7101 16.0198 5.7264 14.794 5.00568 13.8705C4.646 13.4096 4.3534 13.026 4.15139 12.7585Z" fill="#002244"/>
                        </svg>
                    </div>
                    <p className="font-grava text-[#002244] text-[20px] font-medium leading-[25px] tracking-[0.28px]"> Gen Z-Focused Solutions </p>
                </div>
                <div className="w-[317px] h-[300px] gap-[32px] cursor-pointer hover:scale-105 rounded-tl-[16px] rounded-br-[16px] flex flex-col items-center justify-center bg-[#fff]">
                    <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25008 3.49998C7.25008 1.88915 8.55592 0.583313 10.1667 0.583313C11.7776 0.583313 13.0834 1.88915 13.0834 3.49998C13.0834 4.66348 12.4021 5.66786 11.4167 6.13597V9.74998L25.5834 9.74998L25.5834 6.13597C24.598 5.66786 23.9167 4.66348 23.9167 3.49998C23.9167 1.88915 25.2226 0.583313 26.8334 0.583313C28.4442 0.583313 29.7501 1.88915 29.7501 3.49998C29.7501 4.66348 29.0688 5.66786 28.0834 6.13597L28.0834 9.76866C30.4195 9.97918 32.2501 11.9425 32.2501 14.3333L32.2501 27.6666C32.2501 30.198 30.1981 32.25 27.6667 32.25H26.1915L25.8119 34.148C25.5154 35.6304 23.7883 36.3134 22.5581 35.4347L18.6428 32.638C18.2894 32.3857 17.8661 32.25 17.4319 32.25H9.33341C6.80211 32.25 4.75008 30.198 4.75008 27.6666L4.75008 14.3333C4.75008 11.9425 6.58071 9.97918 8.91675 9.76866V6.13597C7.93135 5.66786 7.25008 4.66348 7.25008 3.49998ZM15.2447 22.6444C14.7722 22.1411 13.9812 22.1161 13.4778 22.5887C12.9745 23.0612 12.9496 23.8522 13.4221 24.3556C14.6333 25.6457 16.4891 26.4166 18.5001 26.4166C20.5111 26.4166 22.3668 25.6457 23.5781 24.3556C24.0506 23.8522 24.0256 23.0612 23.5223 22.5887C23.019 22.1161 22.228 22.1411 21.7554 22.6444C21.0664 23.3783 19.8967 23.9166 18.5001 23.9166C17.1034 23.9166 15.9338 23.3783 15.2447 22.6444ZM11.8334 16.8333C11.8334 15.9128 12.5796 15.1666 13.5001 15.1666H13.515C14.4355 15.1666 15.1817 15.9128 15.1817 16.8333C15.1817 17.7538 14.4355 18.5 13.515 18.5H13.5001C12.5796 18.5 11.8334 17.7538 11.8334 16.8333ZM21.8185 16.8333C21.8185 15.9128 22.5647 15.1666 23.4852 15.1666H23.5001C24.4206 15.1666 25.1667 15.9128 25.1667 16.8333C25.1667 17.7538 24.4206 18.5 23.5001 18.5H23.4852C22.5647 18.5 21.8185 17.7538 21.8185 16.8333ZM3.08342 15.6191C1.36214 16.4091 0.166748 18.1478 0.166748 20.1658C0.166748 22.1837 1.36214 23.9224 3.08342 24.7124L3.08342 15.6191ZM36.8334 20.1658C36.8334 22.1837 35.638 23.9224 33.9167 24.7124V15.6191C35.638 16.4091 36.8334 18.1478 36.8334 20.1658Z" fill="#002244"/>
                        </svg>
                    </div>
                    <p className="font-grava text-[#002244] text-[20px] font-medium leading-[25px] tracking-[0.28px]">Cutting-Edge Digital Banking</p>
                </div>
                <div className="w-[317px] h-[300px] gap-[32px] cursor-pointer hover:scale-105 rounded-tl-[16px] rounded-br-[16px] flex flex-col items-center justify-center bg-[#fff]">
                    <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5002 0.583313C15.0484 0.583313 12.2502 3.38153 12.2502 6.83331C12.2502 9.70793 14.1909 12.1293 16.8335 12.8586V16.8333H12.6669L12.572 16.8333H12.572H12.572C11.2781 16.8333 10.166 16.8332 9.27567 16.9358C8.33871 17.0438 7.39551 17.2876 6.60314 17.9668C5.7737 18.6777 5.43764 19.5813 5.29377 20.4985C5.16654 21.3097 5.16668 22.3059 5.16684 23.3858L5.16685 23.5V24.1413C2.52418 24.8707 0.583496 27.292 0.583496 30.1666C0.583496 33.6184 3.38172 36.4166 6.8335 36.4166C10.2853 36.4166 13.0835 33.6184 13.0835 30.1666C13.0835 27.292 11.1428 24.8707 8.50019 24.1413V23.5C8.50019 22.2668 8.50497 21.537 8.58684 21.0151C8.65283 20.5943 8.73798 20.5255 8.76793 20.5013L8.77244 20.4976C8.83434 20.4446 9.00574 20.3223 9.65728 20.2472C10.3338 20.1693 11.2514 20.1666 12.6669 20.1666H24.3335C25.749 20.1666 26.6666 20.1693 27.3431 20.2472C27.9946 20.3223 28.166 20.4446 28.2279 20.4976L28.2324 20.5013C28.2624 20.5255 28.3475 20.5943 28.4135 21.0151C28.4954 21.537 28.5002 22.2668 28.5002 23.5V24.1413C25.8575 24.8707 23.9168 27.292 23.9168 30.1666C23.9168 33.6184 26.715 36.4166 30.1668 36.4166C33.6186 36.4166 36.4168 33.6184 36.4168 30.1666C36.4168 27.292 34.4762 24.8707 31.8335 24.1413V23.5L31.8335 23.3858C31.8337 22.3059 31.8338 21.3097 31.7066 20.4985C31.5627 19.5813 31.2267 18.6777 30.3972 17.9668C29.6049 17.2876 28.6617 17.0438 27.7247 16.9358C26.8344 16.8332 25.7222 16.8333 24.4284 16.8333H24.4284H24.4283L20.1668 16.8333V12.8586C22.8095 12.1292 24.7502 9.70791 24.7502 6.83331C24.7502 3.38153 21.9519 0.583313 18.5002 0.583313Z" fill="#002244"/>
                        </svg>
                    </div>
                    <p className="font-grava text-[#002244] text-[20px] font-medium leading-[25px] tracking-[0.28px]">Accessible and Inclusive</p>
                </div>
                <div className="w-[317px] h-[300px] gap-[32px] cursor-pointer hover:scale-105 rounded-tl-[16px] rounded-br-[16px] flex flex-col items-center justify-center bg-[#fff]">
                    <div className="w-[72px] h-[72px] rounded-[36px] bg-[#FFFAEB] flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 2.58331C12.8873 2.58331 6.75 8.84834 6.75 16.5345C6.75 21.6147 9.294 25.4686 13.2214 27.8323C13.3857 27.9311 13.4669 28.0693 13.4862 28.1852L13.9519 30.9795C14.1081 31.9165 14.7004 32.6868 15.5 33.0966V35.5C15.5 37.3409 16.9924 38.8333 18.8333 38.8333H22.1667C24.0076 38.8333 25.5 37.3409 25.5 35.5V33.0046C26.215 32.5773 26.7369 31.8504 26.8821 30.9795L27.3478 28.1852C27.3672 28.0688 27.4483 27.9317 27.6106 27.8345C31.5311 25.4873 34.25 21.6444 34.25 16.5345C34.25 8.84834 28.1127 2.58331 20.5 2.58331ZM22.1667 33.4166H18.8333V35.5H22.1667V33.4166Z" fill="#002244"/>
                        </svg>
                    </div>
                    <p className="font-grava text-[#002244] text-[20px] font-medium leading-[25px] tracking-[0.28px]">Financial Literacy Advocacy</p>
                </div>
            </div>

        </section> */}
    </div>
  );
};

export default About;
