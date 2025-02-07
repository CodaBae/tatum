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
      name: "Aminatu Dahiru Chiroma",
      role: "Non-Executive Director",
      bio: "Aminatu Chiroma is a highly accomplished individual and Group Managing Director of Binani Group of Companies with decades of experience leading diverse teams and driving organizational growth through strategic planning, operational efficiency, and business development. Proven track record in fostering strong partnerships, streamlining operations, and implementing key performance metrics to enhance productivity and achieve company goals. Expertise in navigating complex challenges, ensuring compliance, and cultivating a culture of employee development. Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, with a deep understanding of the energy and precious metals industries. Demonstrated leadership in expanding market presence, optimizing supply chains, and integrating sustainable practices across international operations. She holds an advanced Postgraduate Diploma in Business Leadership and Management and a diverse skill set in project management, risk mitigation, legal compliance, and technology integration. Recognized for excellence within several industry awards, including the 'Beacon of Hope for Africa’s Development' and 'West African Merit Award.'"
    }
  ];


const Management = () => {

    const navigate = useNavigate();

    const { state } = useLocation()

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  

   

    

  return (
    <div className='w-full pt-6 lg:pt-[48px]' >
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
                    <img src={HeadShot} alt="HeadShot" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-[0.5]" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>

                    {/* Center Arrow */}
                    <img 
                        src={ArrowClick} 
                        alt="ArrowClick" 
                        className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </div>

                <div className="flex flex-col gap-[4px]">
                    <p className="font-grava font-semibold text-[#002244] text-[18px] md:text-[27px]">
                        {item.name}
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
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