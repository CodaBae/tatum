import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ArrowClick from "../../../assets/svg/arrow_click.svg";
import Clip from "../../../assets/svg/clip_triangle.svg";

import Man from "../../../assets/png/man.png";
import HeadShot from "../../../assets/png/headshot_mock_up.png";

import ManB from "../../../assets/png/man-b.jpg";
import ManC from "../../../assets/png/man-c.jpg";
import ManD from "../../../assets/png/man-d.jpg";
import ManE from "../../../assets/png/man-e.jpg";
import ManF from "../../../assets/png/man-f.jpg";
import ManG from "../../../assets/png/man-g.jpg";
import ManH from "../../../assets/png/man-h.jpg";
import ManI from "../../../assets/png/man-i.jpg";

const gridContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, //0.25,
    },
  },
};

const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const team = [
  {
    name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
    role: "Chairman, Board of Directors",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739438322/sam_b_p98pwm.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739438237/sam_rptg5m.jpg",
    bio: "Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades. He holds a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co in Abuja and has served as Secretary General of the Nigerian Bar Association, Abuja Branch, since 1994. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association.",
  },
  {
    name: "Niyi Adeseun",
    role: "Managing Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739438876/niyi_full_doynv5.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739438868/niyi_head_kpig71.jpg",
    bio: "Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations, risk management, business development, and financial services. He has held senior roles in several notable Nigerian banks, including Oceanic Bank, Crystal Bank, Standard Trust Bank, Skye Bank, and Heritage Bank. He was a key figure in the establishment of Heritage Bank in 2012, serving as Executive Director until 2017. Niyi holds an MBA from the University of Lagos, a Chartered Banker MBA from the University of Bangor, and is a Fellow of the Chartered Institute of Bankers (FCIB).",
  },
  {
    name: "George Okoh-Oboh",
    role: "Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739439246/george_full_cergcx.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739439233/george_head_omxel7.jpg",
    bio: "George Okoh-Oboh is the Group Managing Director of Binani Group of Companies, with decades of experience leading teams and driving organizational growth. She is the Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, with expertise in energy and precious metals industries. She holds an advanced Postgraduate Diploma in Business Leadership and Management and has been recognized with industry awards, including the 'Beacon of Hope for Africa’s Development' and 'West African Merit Award.'",
  },
  {
    name: "Samuel Otseliu Zibiri, SAN",
    role: "Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739439563/zib_full_ep7lyj.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739441604/zib_head_jngces.jpg",
    bio: "Samuel Otseliu Zibiri, SAN, is a distinguished Nigerian lawyer with a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co and has served as Secretary General of the Nigerian Bar Association, Abuja Branch. A Senior Advocate of Nigeria since 2011, he actively contributes to legal scholarship and human rights advocacy.",
  },
  {
    name: "Tonya Lawani",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739440129/tonya_full_wgbsap.jpg",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739440112/tonya_head_yb4uxl.jpg",
    role: "Non-Executive Director",
    bio: "Tonya Lawani is a seasoned entrepreneur with over 20 years of experience leading multiple businesses. As the Group Chief Executive of Seal Group, she oversees operations across industries such as manufacturing, hospitality, retail, and advertising. She founded Virgin Vie Angel Limited in 2005, ABC Inflatables Nigeria Limited, and The Virgin Hospitality Company. With a BSc in Economics and an MBA, she has attended executive education at Business School Netherlands and Harvard University.",
  },
  {
    name: "Francis Okosun",
    role: "Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739440632/francis_full_o940y2.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739440661/francis_head_v8uk6g.jpg",
    bio: "Francis Okosun is an accomplished real estate professional and the Senior Partner/CEO of Knight Frank Nigeria. With over two decades of experience, he has played a crucial role in maintaining Knight Frank's position as a leading estate surveying and valuation firm. He holds an MBA from Lagos State University and a Diploma in Estate Management from the Federal Polytechnic, Auchi. A Fellow of the Nigerian Institution of Estate Surveyors & Valuers, he has been recognized as the Real Estate Professional of the Year at the Nigeria BEMIS Honors Nite.",
  },
  {
    name: "Aminatu Dahiru Chiroma",
    role: "Non-Executive Director",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739440466/amina_head_d1tkq0.jpg",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739440486/amina_full_ykedrd.jpg",
    bio: "Aminatu Chiroma has a proven track record in fostering strong partnerships, streamlining operations, and implementing key performance metrics to enhance productivity. With expertise in project management, risk mitigation, and legal compliance, she has played a significant role in expanding market presence, optimizing supply chains, and integrating sustainable practices across international operations.",
  },
  {
    name: "Felix E. Igbinosa",
    role: "Independent Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739440930/felix_full_skyrye.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739440773/felix_mrt4mt.jpg",
    bio:  `
    Felix Igbinosa is a seasoned banker and professional with over three decades of Banking and Financial services experience. His expertise spans Banking Operations, Corporate Banking, Relationship Management, Internal Control, Audit, Information Technology, Corporate Services, General Administration and Project Management.
    
    Felix began his career as a Chartered Accountant in Practice and held senior positions at several leading financial institutions, including Allstates Trust Bank Plc, Co-operative Development Bank Plc, Continental Trust Bank Ltd, Omegabank Plc, Spring Bank Plc, where he was the pioneer Chief Inspector and UBA Plc. At UBA, he served as the Division Head, Group Internal Control, where he provided strategic oversight for the bank’s operations across Nigeria, 18 African countries, UBA CAPE (UK), and UBA New York (USA). Before his appointment as Divisional Head, he was the Regional Audit and Control Coordinator for UBA WAMZ, covering Ghana, Sierra Leone, and Liberia.
    
    From 2015 to 2023, Felix was the Chief Audit Executive (CAE) and Cluster Head at Ecobank, where he oversaw the bank’s Internal Audit and Management Services function, reporting directly to the Board Audit Committee. He was also responsible for the internal audit functions of the Ecobank Software Centre Nigeria and Ecobank Development Corporation (EDC).
    
    Felix holds a Higher National Diploma in Accountancy from the Federal Polytechnic, Auchi; a Bachelor’s degree in Business Management from the University of Sunderland, UK; and an MBA from the Federal University of Technology, Akure (FUTA). He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) (FCA) and the Chartered Institute of Taxation of Nigeria (CITN) (FCTI). Additionally, he is a Platinum Member of ISACA (USA) and an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria (CIBN) (HCIB), where he currently serves on the CIBN Investigation Panel.
    
    Felix was also the Chairman of the Association of Chief Audit Executives of Banks in Nigeria (ACAEBIN) until his retirement in July 2023.
    
    He is currently the Managing Partner at Felix Igbinosa & Co (Chartered Accountants) and the Managing Consultant at First VineField Consulting.
    ` },
  {
    name: "Abimbola Izu",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739441042/bimbs_full_spelpc.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739441068/bimbs_head_napcqe.jpg",
    role: "Independent Non-Executive Director",
    bio: "Abimbola Izu is an accomplished legal and business professional with a distinguished career spanning law, finance, corporate governance, and advisory services. She holds a law degree from the University of Ife (now Obafemi Awolowo University) and an LLM from the University of Warwick, UK, where she was a Foreign and Commonwealth Office scholar.",
  },
];

const Management = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const isTab = window.innerWidth < 1028;
  const isMobile = window.innerWidth < 768;

  return (
    <div className="w-full pt-6 lg:pt-[48px] overflow-hidden">
      <motion.div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lm:grid-cols-3 gap-4 lm:gap-5"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        {team.map((item, index) => {
          return (
            <motion.div
              // style={{
              //     backgroundImage: `url(${HeadShot})`,
              //     backgroundRepeat: "no-repeat",
              //     backgroundSize: isMobile ? "contain" : "cover"
              // }}
              variants={gridSquareVariants}
              className="flex flex-col gap-6"
              // className='h-[472px] lg:h-[529px] relative flex flex-col w-full cursor-pointer group transition-transform ease-in-out hover:-translate-y-3 '
              onClick={() => {
                navigate("/about/team-details", {
                  state: { section: "details", team: team[index] },
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div
                className="flex flex-col gap-6 "
                onClick={() => {
                  window.scrollTo(0, 0); // Scroll to the top first
                  navigate("/about/team-details", {
                    state: { section: "details", team: team[1] },
                  });
                }}
                
              >
                <div className="relative w-auto cursor-pointer h-auto  group overflow-hidden rounded-lg">
                  {/* Background Image */}
                  <img
                    src={item.headshot}
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
                  <div className="absolute -bottom-5 lg:-bottom-2 right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                    <img src={Clip} alt="Clip" className="teamBase" />
                  </div>
                  <div className="absolute -bottom-2 right-0 w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-grava font-semibold text-[#002244] text-[18px] md:text-[20px]">
                    {item.name}
                  </p>
                  <p className="font-grava text-[#002244] font-[300] text-sm md:text-base tracking-[0.2%] leading-[24px]">
                    {item.role}
                  </p>
                </div>
              </div>
              {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Aminatu Dahiru Chiroma</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Non-Executive Director</p>
                    </div>

                           {/* Bottom Left Clip 
                    <div className="absolute -bottom-5 lg:-bottom-5 right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-5 right-0 w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Management;
