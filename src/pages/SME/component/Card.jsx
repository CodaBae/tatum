import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './card.css'; // Importing the CSS file





import goodMark from "../../../assets/svg/goodMark.svg";

import scrollImg1 from "../../../assets/jpg/scrollImg1.jpg";
import scrollImg2 from "../../../assets/jpg/scrollImg2.jpg";
import scrollImg3 from "../../../assets/jpg/scrollImg3.jpg";
import scrollImg4 from "../../../assets/jpg/scrollImg4.jpg";


const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">

      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="card"
      >
        <div className="w-full lg:w-[1328px] bg-[#F9FAFB] flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[50px] px-4 sm:px-[48px] rounded-tl-3xl rounded-br-3xl card__inner">
            <div className="w-full sm:w-[557px] flex flex-col gap-6 sm:gap-[32px]">
              <div className="flex flex-col gap-4 sm:gap-[16px]">
                <h1 className="font-grava font-medium text-2xl sm:text-4xl leading-[30px] sm:leading-[50px] text-[#002244]">
                  POS Services
                </h1>
                <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                  POS & Merchant Services for easy customer payments
                </p>
              </div>
              <div className="flex flex-col gap-8 sm:gap-[48px]">
                <div className="flex flex-col gap-6 sm:gap-[32px] items-start">
                  {/* List items */}
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Sell Smarter with our Advanced POS Systems
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={goodMark}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      alt="checkmark"
                    />
                    <p className="font-grava font-light text-base sm:text-lg leading-[20px] sm:leading-[27px] text-[#002244]">
                      Secure card processing, real-time sales analytics, and
                      inventory sync.
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-[254px] bg-[#ffcc33] hover:bg-[#002244] group py-3 sm:py-4 rounded-tl-lg rounded-br-lg gap-2 flex items-center justify-center transition-all duration-300">
                  <p className="font-grava font-medium  sm:text-base text-[#002244] group-hover:text-[#ffcc33]">
                    Request a POS system
                  </p>
                  <BsArrowRight size={100}   className="text-5xl  text-[#002244] group-hover:text-[#ffcc33] w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-[516px] h-[216px] sm:h-[385px] mt-8 lg:mt-0">
              <img
                src={scrollImg1}
                alt="POS system"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
    </div>
  );
};

export default Card;