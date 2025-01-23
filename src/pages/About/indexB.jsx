import React, { useEffect, useRef }  from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import OfficeGirlImg from "../../assets/png/office-girl.png";
import ManImg from "../../assets/png/smiling-man.png";

import HeaderImg from "../../assets/jpg/TeamPhoto.jpg";
import ArrowVector from "../../assets/svg/Arrow-Vector70.svg";
import teamImage from "../../assets/png/teamImg2.png";
import yellowImage from "../../assets/svg/yellowCircle.svg";
import cardimg from "../../assets/jpg/CardsImg1.jpg";
import card2img1 from "../../assets/svg/card2Img1.svg";
import card2img2 from "../../assets/svg/card2Img2.svg";
import card2img3 from "../../assets/svg/card2img3.svg";
import card2img4 from "../../assets/jpg/card2img4.jpg";
import card3img1 from "../../assets/jpg/card3img1.jpg";
import card3img2 from "../../assets/jpg/card3img2.jpg";
import MissionVisionImg from "../../assets/jpg/MissionVisionImg.jpg";
import cardIcon from "../../assets/svg/Cards.svg";
import ATMicon from "../../assets/svg/ATMicon.svg";
import OnlineBankingIcon from "../../assets/svg/OnlineBankingIcon.svg";
import USSDicon from "../../assets/svg/USSDicon.svg";
import calculatorIcon from "../../assets/svg/calculatorIcon.svg";
import FXicon from "../../assets/svg/FXicon.svg";




const AboutB = () => {

    const missionRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const teamsRef = useRef(null);
    const { state } = useLocation();

    const navigate = useNavigate();
    
    useEffect(() => {
    if (state?.section === "mission-and-vision" && missionRef.current) {
        missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "services" && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (state?.section === "teams" && teamsRef.current) {
        teamsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    }, [state]);

  return (
    <div className="w-full" ref={aboutRef}  id="about">
        <div 
            className="w-full h-[234px] lg:h-[542px] bg-[#FFCC33] flex py-[30px]  lg:py-[282px] relative justify-center"
        >                   
            <div className='w-[350px] md:w-[863px] flex items-center flex-col mx-auto gap-6 mt-[100px] lg:mt-0 lg:gap-[40px]'>
                <p className='text-[#002244] font-bold text-[28px] lg:text-[32px] leading-[32px] text-center lg:text-[75px] font-grava lg:leading-[78px]'>
                    Welcome to Tatum Bank
                </p>
            </div>
        </div>

        <div className='bg-[#fff] py-[56px] w-full lg:py-[120px] px-5 lg:px-[56px] flex flex-col md:flex-row items-center gap-[40px] items-center lm:justify-between lg:gap-[55px]'>
            <div data-aos="fade-right" className='hidden md:flex'>
                <img 
                    src={OfficeGirlImg} 
                    alt='OfficeGirlImg' 
                    className='md:w-[350px] md:h-[350px] lm:w-[587px] lm:h-[587px] transition-transform duration-300 ease-in-out transform hover:scale-110'
                />
            </div>
            <div className='flex flex-col w-full md:w-[350px] lm:w-[654px] gap-3 lm:gap-[32px]' data-aos="fade-left">
                <p className="font-semibold text-[#002244] font-grava text-[24px] lm:text-[40px]">Welcome to Tatum Bank</p>
                <div className="flex flex-col gap-2 lm:gap-4">
                    <p className="font-grava font-[350] text-[18px] lm:text-[24px] leading-[27px] lg:leading-[36px] tracking-wide text-[#334E69]">
                        Tatum Bank was founded in XXXX as a financial organization with the purpose of making banking 
                        accessible to all Nigerians.
                    </p>
                    <p className="font-grava font-[350] text-[18px] lm:text-[24px] leading-[27px] lg:leading-[36px] tracking-wide text-[#334E69]">
                        “Over the years, we have established ourselves as a reputable name in the finance industry, 
                        supporting individuals, small and medium-sized businesses, corporations, and private clients 
                        around the country. We are committed to innovation and embrace technology to deliver seamless, 
                        customer-centered banking experiences.
                    </p>
                </div>
            </div>
            <div data-aos="fade-right" className='flex md:hidden'>
                <img 
                    src={OfficeGirlImg} 
                    alt='OfficeGirlImg' 
                    className=' w-[295px] h-[295px]'
                />
            </div>
        </div>

        <div ref={teamsRef} className="w-full bg-[#F9FAFB] md:h-[780px] lg:h-[800px] flex flex-col md:flex-row items-start relative gap-10 lg:gap-0 justify-between pt-[40px] lg:pt-[80px]">
            <div data-aos="fade-up" className="w-full md:w-[600px] lg:w-[803px] flex flex-col pl-5 lg:pl-[56px] pr-5 lg:pr-0 gap-[49px] lg:gap-[89px]">
                <div className="flex flex-col gap-5 lg:gap-[40px]">
                    <p className="font-semibold text-[#002244] text-[24px] lm:text-[48px] leading-[60px]">Leadership</p>
                    <p className="font-grava font-[350] text-[#334E69] text-[18px] leading-[27px] lm:text-[24px] leading-[36px] tracking-wide">
                        Our primary business strategy is to continue to focus on the customer – the undisputed employer.
                        <span className="mt-2 block">
                            We are committed to ensuring a positive experience for our customers across all our touch 
                            points. We will continuously strive to simplify and streamline our process and ensure systems 
                            stability and reliable IT architecture to support our operations. We will proactively 
                            interrogate our systems, services and resources in order to constantly surpass the expectations 
                            of our customers.
                        </span>
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#334E69] font-grava text-base lm:text-[20px] italic">Aminatu Dahiru Chiroma</p>
                        <p className="font-grava font-[350] text-sm text-[#002244]">Non-Executive Director</p>
                    </div>
                </div>
                <button 
                    className="transition-all duration-300 ease-in-out group hover:bg-[#002244] bg-[#FFCC33] w-[297px] h-[63px] p-5 flex gap-2 items-center justify-center rounded-lg"
                    type="button"
                    onClick={() => navigate("/about/teams", { state: { section: "teams" } })}
                >
                    <p className="transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] font-medium text-[#002244] font-grava text-base">View our board of directors</p>
                    <FaArrowRightLong className="mt-[2px] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33] w-5 h-5 text-[#002244]"/>
                </button>
            </div>
            <div className="md:absolute md:bottom-0 md:right-0 -right-20">
                <img src={ManImg} alt="ManImg" className="w-full md:w-[350px] md:h-[350px] lm:w-[503px] lm:h-[683px]" />
            </div>
        </div>

        <div className="lg:mx-[55px] lg:my-[120px] mt-[56px]  mb-[50px]  w-auto">
            <div className="w-[100%]  pr-[170px] -0 lg:pl-0 ">
                <h1 className="font-grava flex justify-center lg:justify-start font-semibold text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px] tracking-[1.4%] lg:tracking-[0.2%] lg:mb-11 mb-7 text-[#002244] w-[100%]">
                Our Core Values
                </h1>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-[21px]">
                <div className=" w-[350px] h-[379px] lg:w-[458px] lg:h-[626px] rounded-[24px] overflow-hidden relative">
                <img
                    src={cardimg}
                    alt="cardimg"
                    className="object-cover w-full h-full"
                />

                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-[280.87px] left-[18.31px] lg:top-[502px] lg:z-10">
                    <h2 className="font-grava font-[500] text-[20px] lg:text-[25.57px] leading-[25px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                    Integrity
                    </h2>
                    <p className="font-grava font-[300] text-[16px] lg:text-[19.18px] leading-[24px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                    Upholding the highest ethical standards in all our services.
                    </p>
                </div>
                </div>

                <div className="">
                    <div className=" w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative  mb-[21px]">
                        <div className="flex">
                            <img
                                src={card2img1}
                                alt="card2img1"
                                className="w-[91.04px] h-[91.04px] lg:w-[123.54px] lg:h-[123.54px] absolute top-[28px] left-[20px] lg:top-[20.24px] lg:left-[18.11px]"
                            />

                            <img
                                src={card2img2}
                                alt="card2img2"
                                className="w-[75.34px] h-[75.34px] lg:w-[102.2px] lg:h-[102.2px] absolute top-[36px] left-[136.94px] lg:top-[29px] lg:left-[177px]"
                            />
                            <img
                                src={card2img3}
                                alt="card2img3"
                                className="w-[91.04px] h-[91.04px] lg:w-[123.59px] lg:h-[123.59px] absolute top-[28px] left-[238.96px] lg:top-[18.11px] lg:left-[315.36px]"
                            />
                        </div>
                        <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                        <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#002244] ">
                            Customer-Centricity
                        </h2>
                        <p className="font-grava font-[300] text-[16px] leading-[24px] lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#002244]">
                            Prioritizing our clients’ needs with <br />
                            personalized solutions for each user type.
                        </p>
                        </div>
                    </div>

                    <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
                        <div className="w-[350px] h-[269px] md:w-full lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                        <img
                            src={card2img4}
                            alt="card2Img4"
                            className="object-cover w-full h-full -translate-y-[0px]"
                        />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

                        <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                        <h2 className="font-grava font-[500] text-[20px] leading-[25px]  lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                            Inclusivity
                        </h2>
                        <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                            Ensuring everyone has access to financial <br />
                            tools, regardless of their background.
                        </p>
                        </div>
                        </div>
                        </div>
                    <div>
                    <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative mb-[21px] overflow-hidden">
                        <div className="w-[350px] h-[269px] md:w-[95%] lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                        <img
                            src={card3img1}
                            alt="card3img1"
                            className="object-cover w-full h-full -translate-y-[0px]"
                        />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

                        <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                        <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                            Innovation
                        </h2>
                        <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                            Leveraging technology to redefine modern banking.
                        </p>
                        </div>
                    </div>

                    <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
                        <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                        <img
                            src={card3img2}
                            alt="card2Img4"
                            className="object-cover w-full h-full -translate-y-[0px]"
                        />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

                        <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                        <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                            Sustainability
                        </h2>
                        <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                            Committed to supporting environmentally and socially
                            responsible practices.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mission / Vission Section */}
        
        <div ref={missionRef} id="mission-and-vision">
        <div className="flex flex-col lg:flex-row">
            <div className="bg-[#002244] w-[auto] h-[190px] lg:w-[767.088px] lg:h-[405.9174px] flex items-center justify-center">
            <div className="w-[350px] lg:w-[516.67px] lg:h-[115.05px]">
                <h1 className="font-grava font-[600] text-[24px] leading-[30px] lg:text-[42.62px] lg:leading-[53.27px] tracking-[1.4%] text-[#FFFFFF] text-center pb-2">
                Mission
                </h1>
                <p className="font-grava font-[300] text-[14px] leading-[20px] lg:text-[19.18px] lg:leading-[28.77px] tracking-[0.2%] text-[#FFFFFF] text-center">
                To improve the lives of Nigerians, particularly the youth, by
                offering innovative, easily accessible, and secure financial
                services that promote economic growth and personal success.
                </p>
            </div>
            </div>
            <div>
            <div className="bg-[#FFCC33] w-[auto] h-[190px] lg:w-[769.088px] lg:h-[405.9174px] flex items-center justify-center">
                <div className="w-[350px] lg:w-[516.67px] lg:h-[115.05px]">
                <h1 className="font-grava font-[600] text-[24px] leading-[30px] lg:text-[42.62px] lg:leading-[53.27px]  tracking-[1.4%] text-[#002244] text-center pb-2">
                    Vision
                </h1>
                <p className="font-grava font-[300] text-[14px] leading-[20px] lg:text-[19.18px] lg:leading-[28.77px]  tracking-[0.2%] text-[#002244] text-center">
                    To be Nigeria's most trusted and innovative financial partner,
                    promoting financial literacy and enabling prosperity for
                    future generations.
                </p>
                </div>
            </div>
            </div>
        </div>
        <div>
            <img
            src={MissionVisionImg}
            alt="MissionVisionImg"
            className=" w-[100%] h-[260px] lg:w-[100%] sm:h-[400px] lg:h-[745.78px] object-cover filter grayscale"
            />
        </div>
        </div>

        <div ref={servicesRef} className="flex w-full flex-col items-center justify-center py-[56px] lg:pt-[80px] lg:pb-[120px] bg-[#fff]">
            <div className="w-[350px] lg:w-[655px] flex flex-col items-center gap-4">
                <p className="text-[#002244] font-grava text-center font-medium text-[24px] lg:text-[40px]">
                    Experience modern banking with Tatum Bank. Secure, fast, and customer-focused services 
                    to help you save, borrow, and grow your wealth.
                </p>
            </div>

            <div className="hidden lg:block">
                <div className="relative w-[655px] h-[449px] ml-[15px]">
                    <div className="absolute top-[21px] left-[131.03px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                            Gen Z-Focused Solutions
                        </h3>
                    </div>
                    <div className="absolute top-[0px] left-[365px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="font-grava font-[500] text-[19.18px]  leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                            Cutting-Edge Digital Banking
                        </h3>
                    </div>
                    <div className="absolute top-[216px] left-[0px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                            Accessible and Inclusive
                        </h3>
                    </div>
                    <div className="absolute top-[239px] left-[232px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                            Financial Literacy Advocacy
                        </h3>
                    </div>
                    <div className="absolute top-[212px] left-[465px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                            Exceptional Support
                        </h3>
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default AboutB