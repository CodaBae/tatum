import { useState } from "react";
import Plus from "../assets/svg/plus.svg";
import Minus from "../assets/svg/minus.svg";

const AccordionItem = ({ question, answer,  defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${defaultOpen ? "lg:pt-[14px] lg:pb-[16px] lg:pl-[18px] lg:pr-[14px]   gap-[8px]" : " lg:pb-[16px] lg:pr-[14px] lg:pl-[18px]  "} flex flex-col cursor-pointer px-4 py-[18px]  border border-[#546B82] rounded-[16px] w-full h-auto transition-all duration-500 ease-in-out`}
    >
      {/* Question and Icon */}
      <div className="flex items-center justify-between">
        <p className="font-grava text-[#475467] font-[500] tracking-[-0.01em] text-[14px] lg:text-[20px]">
          {question}
        </p>
        <img src={isOpen ? Minus : Plus} alt="toggle-icon" />
      </div>

      {/* Answer with smooth transition */}
      <div
        className={`grid transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 hidden"
        }`}
      >
        <p className="font-[400] font-grava tracking-[-0.01em] text-[14px] lm:text-[18px] leading-[1.5em] text-[#334E69]">
          {answer}
        </p>
      </div>
    </div>
  );
};


export default AccordionItem;
