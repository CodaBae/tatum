import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Forward from "../../../assets/svg/forward.svg"
import Management from './Management';
import Director from './Director';

const Teams = () => {
    const [activeTab, setActiveTab] = useState("board")

    const navigate = useNavigate()

    const teamsRef = useRef(null);
    const { state } = useLocation();

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    const team = [
        {
          name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
          role: "Non-Executive Director",
          bio: "Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades. He holds a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co in Abuja and has served as Secretary General of the Nigerian Bar Association, Abuja Branch, since 1994. Ologunorisa is a passionate advocate for human rights, having chaired the NBA Abuja FCT Human Rights Committee since 1994, and has contributed significantly to legal scholarship, including authoring 'Selected Judgment & Ruling of Hon. Justice L.H. Gummi' and serving as a consultant to the NYSC Law Reports. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association. His career is marked by exceptional legal achievements, advocacy, and a commitment to promoting human rights and legal standards both in Nigeria and globally."
        },
        {
          name: "Niyi Adeseun",
          role: "Managing Director",
          bio: "Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations, risk management, business development, and financial services. His career began in 1990 at Nigeria International Bank (now Citibank), and he has held senior roles in several notable Nigerian banks, including Oceanic Bank, Crystal Bank, Standard Trust Bank, Skye Bank, and Heritage Bank. Notably, he was a key figure in the establishment of Heritage Bank in 2012, serving as Executive Director until his retirement in 2017. He is the Managing Director and CEO of Greenbond Finance Company Limited, which he co-founded in 2022. Niyi holds multiple advanced degrees, including an MBA from the University of Lagos, a Chartered Banker MBA from the University of Bangor, and is a Fellow of the Chartered Institute of Bankers (FCIB). He possesses vast financial management, project structuring, and corporate finance expertise across sectors such as real estate and fintech. Niyi is also an alumnus of esteemed institutions like INSEAD and Harvard Business School."
        },
        {
          name: "Aminatu Dahiru Chiroma",
          role: "Executive Director",
          bio: "Aminatu Chiroma is a highly accomplished individual and Group Managing Director of Binani Group of Companies with decades of experience leading diverse teams and driving organizational growth through strategic planning, operational efficiency, and business development. Proven track record in fostering strong partnerships, streamlining operations, and implementing key performance metrics to enhance productivity and achieve company goals. Expertise in navigating complex challenges, ensuring compliance, and cultivating a culture of employee development. Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, with a deep understanding of the energy and precious metals industries. Demonstrated leadership in expanding market presence, optimizing supply chains, and integrating sustainable practices across international operations. She holds an advanced Postgraduate Diploma in Business Leadership and Management and a diverse skill set in project management, risk mitigation, legal compliance, and technology integration. Recognized for excellence within several industry awards, including the 'Beacon of Hope for Africa’s Development' and 'West African Merit Award.'"
        },
        {
          name: "Abimbola Izu",
          role: "Independent Non-Executive Director",
          bio: "Abimbola Izu is an accomplished legal and business professional with a distinguished career spanning law, finance, corporate governance, and advisory services. She holds a law degree from the University of Ife (now Obafemi Awolowo University) and an LLM from the University of Warwick, UK, where she was a Foreign and Commonwealth Office scholar. Abimbola is currently the Principal Advisor at Portalis Advisory Services, where she provides expert advice on infrastructure development, mergers and acquisitions, corporate governance, and finance transactions. Previously, she served as Executive Director, Corporate and Investment Bank at Polaris Bank, overseeing a portfolio of over ₦600bn across industries like oil and gas, telecommunications, banking, and real estate. She led the development of sustainable finance frameworks and the Environmental and Social Risk Management (ESRM) framework in collaboration with the IFC. She is best recognized for her leadership in brand management, particularly during her tenure at Skye Bank, where she spearheaded successful campaigns such as “I Wish” and “Skye High.” With a strong grounding in law and business, Abimbola continues to make significant contributions to Nigeria’s financial, legal, and sustainability sectors."
        }
      ];


    useEffect(() => {   
        if (state?.section === "teams" && teamsRef.current) {
            teamsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state])

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  

  return (
    <div className="w-full" ref={teamsRef}>
        <div 
            style={{
                backgroundImage: `url(${isTab ? HeaderImgMobile : HeaderImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
            className="w-full h-[434px] md:h-[793px] flex relative justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p 
                    className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/", {
                        state: { section: "home" },
                    })}
                >
                    Home
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/about", {
                        state: { section: "about" },
                    })}
                >
                    About Us
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p 
                    className="font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px] "
                    // onClick={() => navigate("/about/teams", {
                    //     state: { section: "teams" },
                    // })}
                >
                    Board Members
                </p>
            </div>
        </div>

        <div className='mt-[56px] lg:mt-[120px] w-full px-5 lg:px-[56px] '>
            <p className='font-grava text-[20px] lg:text-[32px] text-[#182230] leading-[30px] lg:leading-[40px] tracking-[0.064px]'>
                Our team of experienced leaders is focused on serving our clients, 
                transforming our business, generating long-term shareholder value 
                and driving a culture of excellence and accountability.  
            </p>
        </div>

        <div className='bg-[#fff] pt-[56px] lg:pt-[120px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] flex flex-col gap-2'>
            <div className='flex items-center gap-5 lg:gap-[32px] border border-[#D0D5DD] border-x-0 border-t-0'>
                {/* <div className={`${activeTab === "management" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[369px] flex items-start py-3 cursor-pointer `} onClick={() => handleTabChange("management")}>
                    <p className={`${activeTab === "management" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[40px] font-normal`}>
                        Management Team
                    </p>
                </div> */}
                <div className={`${activeTab === "board" ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]" : ""} lg:w-[369px] flex items-start py-3 cursor-pointer`} onClick={() => handleTabChange("board")}>
                    <p className={`${activeTab === "board" ? "text-[#002244]" : "text-[#B0BAC5]"} font-grava text-base lg:text-[40px] font-normal`}>
                        Board of Directors
                    </p>
                </div>
            </div>
            <>
                {activeTab === "management" && <Management />}
                {activeTab === "board" && <Management />} {/* Director */}
            </>
        </div>


    </div>
  )
}

export default Teams