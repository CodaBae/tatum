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
            <motion.div 
          
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[529px] relative flex flex-col w-full cursor-pointer group transition-transform ease-in-out hover:-translate-y-3 '
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Samuel Tomi Ologunorisa, SAN, <br /> FCIArb (UK)
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Non-Executive Director
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

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Niyi Adeseun
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Managing Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Abimbola Izu</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>

                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}
            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Aminatu Dahiru Chiroma
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Aminatu Dahiru Chiroma
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Abimbola Izu
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Independent Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Felix E. Igbinosa
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Independent Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Samuel Otseliu Zibiri, SAN
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Tonya Lawani
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

            <motion.div 
                // style={{
                //     backgroundImage: `url(${ManB})`,
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: isMobile ? "contain" : "cover" 
                // }}
                variants={gridSquareVariants}
                className="flex flex-col gap-6"
                // className='h-[472px] lg:h-[548px] relative flex flex-col rounded-tl-3xl group rounded-br-3xl w-full cursor-pointer transition-transform ease-in-out hover:-translate-y-3'
                onClick={() => {navigate('/about/team-details'); window.scrollTo(0, 0)}}
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
                        Francis Okosun
                    </p>
                    <p className="font-grava text-[#002244] font-[350] text-sm md:text-[21px] tracking-[0.2%] leading-[24px]">
                        Non-Executive Director
                    </p>
                </div>

                {/* <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                                               {/* Bottom Left Clip 
                    <div className="absolute -bottom-14 right-3 lg:-bottom-5 lg:right-0 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                        <img src={Clip} alt='Clip' className='' />
                    </div>
                    <div className="absolute -bottom-14 lg:-bottom-5 right-0 w-[55.87px] lg:w-[47.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div> */}

            </motion.div>

        </motion.div>
    </div>
  )
}

export default Management