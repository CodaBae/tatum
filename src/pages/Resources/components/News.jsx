import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import Meeting from "../../../assets/png/q_and_a.png";

const News = () => {

    const navigate = useNavigate()
// md:h-[400px] lg:h-[789px] lg:px-[80px]

    const isMobile = window.innerWidth < 768;
    
  return (
    <div className='w-full'>
        <section  className='bg-[#fff] flex flex-col md:flex-row items-center gap-[40px] md:gap-0  pt-6 px-5 lg:pt-[48px] lg:pb-0 '>
                <div data-aos="fade-right"  >
                    <img 
                        src={isMobile ? "https://res.cloudinary.com/code-idea/image/upload/v1739786787/meeting_mobile_f8sc3t.png" : `${Meeting}`} 
                        alt='Meeting' 
                        className='flex w-[350px] h-[350px] lg:w-[571px] lg:h-auto transition-transform duration-500 ease-in-out transform hover:scale-105 ' 
                    />
                </div>
                <div className='flex flex-col items-start gap-[40px] w-full md:w-[350px] lm:w-[611px]' data-aos="fade-left" >
                    <div className="flex flex-col gap-2 md:gap-3 items-start">
                        <p className='font-[500] text-[#002244] font-grava text-center md:text-left text-[24px] lg:text-[40px] leading-[30px] lg:leading-[50px]'>Content Unavailable!</p>
                        <p className="text-[14px] lm:text-[18px] text-[#002244] font-grava font-[350] leading-[27px] text-left tracking-[0.2%]">
                            We're currently updating our resources to serve you better. 
                            This doesn't mean we're not working – we're behind the scenes, 
                            crafting exceptional content that will be worth the wait.
                        </p>
                    </div>
                    <button
                    className='transition-all duration-500 ease-in-out bg-[#FFCC33] w-[169px] lg:w-[200px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center'
                    type='button'
                    onClick={() => {
                        navigate(
                        "/",
                        {
                            state: { section: "home" },
                        },
                        window.scrollTo(0, 0)
                        );
                    }}
                    >
                        <p className='transition-colors duration-500 ease-in-out font-[400]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]'>Visit Homepage</p>
                        <BsArrowRight size={100}   className='mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]' />
                    </button>
                </div>
                {/* <img 
                    src="https://res.cloudinary.com/code-idea/image/upload/v1739292199/chat_aql9uh.png" 
                    alt='Meeting' 
                    className='flex md:hidden w-[295px] h-[295px]' 
                    data-aos="fade-right" 
                /> */}
        </section>
    </div>
  )
}

export default News