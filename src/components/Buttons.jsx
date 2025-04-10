import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

const Buttons = ({ text, link, sect, className }) => {

    const navigate = useNavigate() 

  return (
        <button
            className={`${className} transition-all duration-500 ease-in-out bg-[#FFCC33] px-5 lm:w-[190.63px] h-[57px] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#002244] flex items-center justify-center`}
            type="button"
            onClick={() =>
                navigate(link, { state: { section: sect } }, window.scrollTo(0, 0))
            }
        >
            <p className="transition-colors duration-500 ease-in-out font-[500]  lg:text-[18px] font-grava text-[#002244] group-hover:text-[#FFCC33]">
              {/* Get started */}
                {text}
            </p>
            <BsArrowRight
                size={100}
                className="mt-[2px] text-5xl   transition-colors duration-500 font-medium ease-in-out w-5 h-5 text-[#002244] group-hover:text-[#FFCC33]"
            />
        </button>
  )
}

export default Buttons