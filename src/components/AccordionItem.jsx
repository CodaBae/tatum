import { useState } from "react";
import Plus from "../assets/svg/plus.svg";
import Minus from "../assets/svg/minus.svg";

const AccordionItem = ({ question, answer,  defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col cursor-pointer gap-4 px-4 py-[18px] lg:p-[32px] border border-[#546B82] rounded-[16px] w-full h-auto transition-all duration-500 ease-in-out"
    >
      {/* Question and Icon */}
      <div className="flex items-center justify-between">
        <p className="font-grava text-[#475467] font-[500] lg:text-[20px]">
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
        <p className="font-[350] font-grava tracking-[1.4%] text-[14px] lm:text-[20px] leading-[26px] text-[#334E69]">
          {answer}
        </p>
      </div>
    </div>
  );
};

// const Accordion = () => {
//   return (
    
//   );
// };

export default AccordionItem;
