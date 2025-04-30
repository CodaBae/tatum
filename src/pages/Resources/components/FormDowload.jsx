import React from 'react'

import Download from "../../../assets/svg/download.svg";

import IndividualForm from "../../../assets/pdf/individual_form.pdf" 
import CorporateForm from "../../../assets/pdf/corporate_form.pdf"

const FormDowload = () => {
  return (
    <div className='w-full pt-[48px] lg:pb-[56px]'>
        <section
            className='bg-[#FCFCFD] rounded-[16px] px-4 lm:px-[32px] p-[32px] gap-[32px] flex flex-col'
        >
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Personal Account Form</p>
                <a
                    className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[57px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group   " // bg-[#EDEDED] w-[326.27px]
                    href={IndividualForm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                        Download Form
                    </p>
                </a>
                {/* <button 
                    className='bg-[#EDEDED] w-full lm:w-auto cursor-default h-[57px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                    // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1740499249/TBL_Individual_Account_Opening_Form_wrhhls.ai", "_blank")}
                >
                    <p className=' font-[500]  lg:text-[18px] font-grava text-[#B0B0B0]'>Account opening available soon</p> {/* group-hover:text-[#FFCC33] */}
                    {/* <img src={Download} alt='download' className='' /> 
                </button> */}
            </div>
            <div className='h-[1px] w-full bg-[#EAECF0]'></div>
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Business Account Form</p>
                <a
                    className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[57px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group   " // bg-[#EDEDED] w-[326.27px]
                    href={CorporateForm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                        Download Form
                    </p>
                </a>
                {/* <button 
                    className=' bg-[#EDEDED] w-full lm:w-auto h-[57px] cursor-default rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                    // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1739456268/TBL_Corporate_Form_1_eeem6o.pdf", "_blank")}
                >
                    <p className=' font-[500]  lg:text-[18px] font-grava text-[#B0B0B0]'>Account opening available soon</p> {/*  group-hover:text-[#FFCC33] */}
                    {/* <img src={Download} alt='download' className='' /> 
                </button> */}
            </div>
            <div className='h-[1px] w-full bg-[#EAECF0]'></div>
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Corporate Account Form</p>
                <a
                    className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[57px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group   " // bg-[#EDEDED] w-[326.27px]
                    href={CorporateForm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                        Download Form
                    </p>
                </a>
                {/* <button 
                    className='bg-[#EDEDED] w-full lm:w-auto h-[57px] cursor-default rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244] 
                    // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1739456268/TBL_Corporate_Form_1_eeem6o.pdf", "_blank")}
                >
                    <p className=' font-[500]  lg:text-[18px] text-[#B0B0B0] font-grava'>Account opening available soon</p> {/*  group-hover:text-[#FFCC33] */}
                    {/* <img src={Download} alt='download' className='' /> 
                </button> */}
            </div>
            <div className='h-[1px] w-full bg-[#EAECF0]'></div>
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Private Account Form</p>
                <a
                    className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[57px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group   " // bg-[#EDEDED] w-[326.27px]
                    href={IndividualForm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                        Download Form
                    </p>
                </a>
                {/* <button 
                    className='bg-[#EDEDED] w-full lm:w-auto h-[57px] cursor-default rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                    // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1740499249/TBL_Individual_Account_Opening_Form_wrhhls.ai", "_blank")}
                >
                    <p className=' font-[500]  lg:text-[18px] text-[#B0B0B0] font-grava'>Account opening available soon</p> {/*  group-hover:text-[#FFCC33] */}
                    {/* <img src={Download} alt='download' className='' /> 
                </button> */}
            </div>
            <div className='h-[1px] w-full bg-[#EAECF0]'></div>
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Institutional Account Form</p>
                <a
                    className=" bg-[#002244] w-auto flex flex-col items-center justify-center cursor-pointer h-[57px] p-3 rounded-tl-lg rounded-br-lg hover:bg-[#FFCC33] group   " // bg-[#EDEDED] w-[326.27px]
                    href={CorporateForm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="font-grava font-[500]  text-[#FFCC33] group-hover:text-[#002244]  lg:text-[18px] "> {/* text-[#B0B0B0] */}
                        Download Form
                    </p>
                </a>
                {/* <button 
                    className='bg-[#EDEDED] w-full lm:w-auto cursor-default h-[57px] rounded-tl-lg rounded-br-lg gap-2  flex items-center px-5 py-4 justify-center lm:justify-between' //group hover:bg-[#002244]
                    // onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1739456268/TBL_Corporate_Form_1_eeem6o.pdf", "_blank")}
                >
                    <p className=' font-[500]  lg:text-[18px] font-grava text-[#B0B0B0]'>Account opening available soon</p> {/*  group-hover:text-[#FFCC33] */}
                    {/* <img src={Download} alt='download' className='' /> 
                </button> */}
            </div>
            {/* <div className='h-[1px] w-full bg-[#EAECF0]'></div>
            <div className='flex flex-col items-start lm:flex-row lm:items-center justify-between  gap-4 lm:gap-auto'>
                <p className='font-grava text-[#002244] font-[500] text-[14px] lm:text-[20px] tracking-[0.01em] leading-[18px] lm:leading-[130%]'>Instant Account Form</p>
                <button 
                    className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-full lm:w-[148px] h-[57px] rounded-tl-lg rounded-br-lg gap-2 flex items-center px-5 py-4 justify-center lm:justify-between' 
                    onClick={() => window.open("https://res.cloudinary.com/code-idea/image/upload/v1740499249/TBL_Individual_Account_Opening_Form_wrhhls.ai", "_blank")}
                >
                    <p className='transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244]'>Account opening available soon</p>
                    <img src={Download} alt='download' className='' />
                </button>
            </div> */}


        </section>
    </div>
  )
}

export default FormDowload