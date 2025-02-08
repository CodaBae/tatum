import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import ArrowClick from "../../../assets/svg/arrow_click.svg";
import Clip from "../../../assets/svg/clip_triangle.svg";

import Man from "../../../assets/png/man.png"
import HeadShot from "../../../assets/png/headshot_mock_up.png"

import ManB from "../../../assets/png/man-b.jpg"
import ManC from "../../../assets/png/man-c.jpg"
import ManD from "../../../assets/png/man-d.jpg"
import ManE from "../../../assets/png/man-e.jpg"
import ManF from "../../../assets/png/man-f.jpg"
import ManG from "../../../assets/png/man-g.jpg"
import ManH from "../../../assets/png/man-h.jpg"
import ManI from "../../../assets/png/man-i.jpg"


const gridContainerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, //0.25,
      }
    }
}

const gridSquareVariants = { hidden: { opacity: 0}, show: { opacity: 1}}
const team = [
    {
      name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
      role: "Non-Executive Director",
      bio: "Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades. He holds a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co in Abuja and has served as Secretary General of the Nigerian Bar Association, Abuja Branch, since 1994. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association."
    },
    {
      name: "Niyi Adeseun",
      role: "Managing Director",
      bio: "Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations, risk management, business development, and financial services. He has held senior roles in several notable Nigerian banks, including Oceanic Bank, Crystal Bank, Standard Trust Bank, Skye Bank, and Heritage Bank. He was a key figure in the establishment of Heritage Bank in 2012, serving as Executive Director until 2017. Niyi holds an MBA from the University of Lagos, a Chartered Banker MBA from the University of Bangor, and is a Fellow of the Chartered Institute of Bankers (FCIB)."
    },
    {
      name: "Aminatu Dahiru Chiroma",
      role: "Executive Director",
      bio: "Aminatu Chiroma is the Group Managing Director of Binani Group of Companies, with decades of experience leading teams and driving organizational growth. She is the Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, with expertise in energy and precious metals industries. She holds an advanced Postgraduate Diploma in Business Leadership and Management and has been recognized with industry awards, including the 'Beacon of Hope for Africa’s Development' and 'West African Merit Award.'"
    },
    {
      name: "Aminatu Dahiru Chiroma",
      role: "Non-Executive Director",
      bio: "Aminatu Chiroma has a proven track record in fostering strong partnerships, streamlining operations, and implementing key performance metrics to enhance productivity. With expertise in project management, risk mitigation, and legal compliance, she has played a significant role in expanding market presence, optimizing supply chains, and integrating sustainable practices across international operations."
    },
    {
      name: "Felix E. Igbinosa",
      role: "Independent Non-Executive Director",
      bio: "Felix Igbinosa is a seasoned ex-banker with over three decades of experience in banking and financial services, specializing in corporate banking, relationship management, internal control, and audit. He held senior roles at Seven-UP Bottling Company Plc, Allstates Trust Bank, UBA Plc, and Ecobank, where he was the Chief Audit Executive (CAE) and Chief Risk Officer from 2015 to 2023. Felix holds a degree in Business Management from the University of Benin and multiple professional certifications, including Fellowship of CITN and ISACA (USA)."
    },
    {
      name: "Samuel Otseliu Zibiri, SAN",
      role: "Non-Executive Director",
      bio: "Samuel Otseliu Zibiri, SAN, is a distinguished Nigerian lawyer with a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co and has served as Secretary General of the Nigerian Bar Association, Abuja Branch. A Senior Advocate of Nigeria since 2011, he actively contributes to legal scholarship and human rights advocacy."
    },
    {
      name: "Tonya Lawani",
      role: "Non-Executive Director",
      bio: "Tonya Lawani is a seasoned entrepreneur with over 20 years of experience leading multiple businesses. As the Group Chief Executive of Seal Group, she oversees operations across industries such as manufacturing, hospitality, retail, and advertising. She founded Virgin Vie Angel Limited in 2005, ABC Inflatables Nigeria Limited, and The Virgin Hospitality Company. With a BSc in Economics and an MBA, she has attended executive education at Business School Netherlands and Harvard University."
    },
    {
      name: "Francis Okosun",
      role: "Non-Executive Director",
      bio: "Francis Okosun is an accomplished real estate professional and the Senior Partner/CEO of Knight Frank Nigeria. With over two decades of experience, he has played a crucial role in maintaining Knight Frank's position as a leading estate surveying and valuation firm. He holds an MBA from Lagos State University and a Diploma in Estate Management from the Federal Polytechnic, Auchi. A Fellow of the Nigerian Institution of Estate Surveyors & Valuers, he has been recognized as the Real Estate Professional of the Year at the Nigeria BEMIS Honors Nite."
    }
  ];



const Management = () => {

    const navigate = useNavigate();

    const { state } = useLocation()

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  

   

    

  return (
    <div className='w-full pt-6 lg:pt-[48px] overflow-hidden' >
        <motion.div 
            // data-aos="fade-up" 
            // data-aos-duration="1000" 
            className='grid grid-cols-1 md:grid-cols-2 lm:grid-cols-3 gap-4 lm:gap-5'
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
        >
            {team.map((item,index)=>{
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
                    navigate('/about/team-details', { state: { section: 'details', team: team[index] } });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <div className="relative w-auto cursor-pointer h-auto lg:h-[529px]  group overflow-hidden rounded-lg">
                                    {/* Background Image */}
                    <img src={HeadShot} alt="HeadShot" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-[0.5]" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

                    {/* Center Arrow */}
                    <img 
                        src={ArrowClick} 
                        alt="ArrowClick" 
                        className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="flex flex-col gap-[4px]">
                    <p className="font-grava font-semibold text-[#002244] text-[18px] md:text-[27px]">
                        {item.name}
                    </p>
                    <p className="font-grava text-[#002244] font-[300] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                    {item.role}
                    </p>
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

                )
            })}
           

        </motion.div>
    </div>
  )
}

export default Management