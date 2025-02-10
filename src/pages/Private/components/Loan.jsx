import React, { useEffect, useRef } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import EstateBg from '../../../assets/png/estate-bg.jpeg'

import Forward from "../../../assets/svg/forward.svg"

const Loan = () => {

    const loanRef = useRef(null);
    const { state } = useLocation();

    // useEffect(() => {
    //     if (state?.section === "loan" && loanRef.current) {
    //         loanRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [state]);

  return (
    <div ref={loanRef} className="w-full mb-[56px] lg:mb-[120px]">
        <div 
            style={{
                backgroundImage: `url(${EstateBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
            className="w-full h-[434px] md:h-[693px] flex relative items-center justify-center"
        > 
            <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
                      
            <p className='font-grava font-bold z-10 text-[#fff] text-center text-[32px] lg:text-[75px]'>Personal Loan and Credit</p>
                      
            <div className='absolute bottom-10 right-14 hidden md:flex items-center gap-3 w-[125px] cursor-pointer group' onClick={() => navigate(-1)}>
                <MdKeyboardBackspace className='w-5 h-5 mt-1 text-[#fff] group-hover:mr-2' />
                <p className='font-grava text-[#fff] text-[20px] font-medium whitespace-nowrap transition-all duration-500 group-hover:ml-2'>Go back</p>
            </div>
        
            <div 
                className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10"
            >
                <p className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/", {
                        state: { section: "home" },
                    })}
                >
                    Home
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
                    onClick={() => navigate("/private", {
                        state: { section: "private" },
                    })}
                >
                    Private
                </p>
                <img src={Forward} alt="forward" className=""/>
                <p className="font-[350] font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px]">
                    <span className='hidden md:inline-block'>Personal</span> Loans and Credit
                </p>
            </div>
    
        </div>
    </div>
  )
}

export default Loan