import React from 'react'
import { useNavigate } from 'react-router-dom';

import Man from "../../../assets/png/man.png"

const Management = () => {

    const navigate = useNavigate();

    const isTab = window.innerWidth < 1028;
    const isMobile = window.innerWidth < 768;  

  return (
    <div className='w-full pt-6 lg:pt-[48px]'>
        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-2 lm:grid-cols-3 gap-4 lm:gap-5'>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover" 
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Aminatu Dahiru Chiroma</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover" 
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Abimbola Izu</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover" 
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Felix E. Igbinosa</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Independent Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover" 
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Samuel Otseliu Zibiri, SAN</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover"
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Tonya Lawani</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover"
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Francis Okosun</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Non-Executive Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover"
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-center text-lg lg:text-[20px] font-grava'>Samuel Tomi Ologunorisa, SAN, <br /> FCIArb (UK)</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Chairman, Board of Directors</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover"
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Niyi Adeseun</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Managing Director</p>
                    </div>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${Man})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: isMobile ? "contain" : "cover"
                }}
                className='h-[472px] lg:h-[548px] relative flex flex-col w-full cursor-pointer'
                onClick={() => {navigate('/teams/details'); window.scrollTo(0, 0)}}
            >
                <div className='absolute bottom-14 lm:bottom-5 w-full'>
                    <div className='w-[90%] mx-auto py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFC9] to-[#FFFFFFE5] flex flex-col items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl'>
                        <p className='font-semibold text-[#002244] text-lg lg:text-[20px] font-grava'>Hassan Umar B/Magaji</p>
                        <p className='font-[350] text-[#002244] text-sm lg:text-base font-grava'>Executive Director</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Management