import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ArrowClick from "../../../assets/svg/arrow_click.svg";
import Clip from "../../../assets/svg/clip_triangle.svg";

const gridContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, //0.25,
    },
  },
};

const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const team = [
  {
    name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
    role: "Chairman, Board of Directors",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531337/Samuel_full_glq9yh.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531326/Samuel_head_dlvi63.jpg",
    bio:  
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades. He holds a Bachelor of Laws from the University of Lagos and a Diploma in International Commercial Arbitration from Oxford University. Since 1989, he has been the Principal Partner at Sam Ologunorisa (SAN) & Co in Abuja and has served as Secretary General of the Nigerian Bar Association, Abuja Branch, since 1994. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Ologunorisa is a passionate advocate for human rights, having chaired the NBA Abuja FCT Human Rights Committee since 1994, and has contributed significantly to legal scholarship, including authoring <span class="italics">"Selected Judgment & Ruling of Hon. Justice L.H. Gummi" </span> and serving as a consultant to the NYSC Law Reports. A Senior Advocate of Nigeria (SAN) since 2011, he is also an active member of international legal bodies like the African Bar Association and the International Bar Association.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>His career is marked by exceptional legal leadership, advocacy, and a commitment to promoting human rights and legal standards both in Nigeria and globally.</p>
      </div>`
  },
  {
    name: "Niyi Adeseun",
    role: "Managing Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739530975/Niyi_full_umdhtc.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739530969/Niyi_head_oihrr0.jpg",
    bio:
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations, risk management, business development, and financial services. His career began in 1990 at Nigeria International Bank (now Citibank), and he has held senior roles in several notable Nigerian banks, including Oceanic Bank, Crystal Bank, Standard Trust Bank, Skye Bank, and Heritage Bank.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Notably, he was a key figure in the establishment of Heritage Bank in 2012, serving as Executive Director until his retirement in 2017. He is the Managing Director and CEO of Greenbond Finance Company Limited, which he co-founded in 2022. Niyi holds multiple advanced degrees, including an MBA from the University of Lagos, a Chartered Banker MBA from the University of Bangor, and is a Fellow of the Chartered Institute of Bankers (FCIB).</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>He possesses vast financial management, project structuring, and corporate finance expertise across sectors such as real estate and fintech. Niyi is also an alumnus of esteemed institutions like INSEAD and Harvard Business School.</p>
      </div>`
  },
  // {
  //   name: "Mr George Oko-Oboh",
  //   role: "Executive Director",
  //   pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531471/George_full_wm65x9.jpg",
  //   headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531460/George_head_em2hcr.jpg",
  //   bio: `<div class="flex flex-col gap-5">
  //           <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Mr George Oko-Oboh is a results-driven and highly accomplished Executive Director with over two decades of experience in the banking industry, including senior leadership roles in various Banks. Known for his strategic vision, integrity, and a relentless focus on achieving organizational excellence. A dynamic leader with strong communication skills and a deep commitment to fostering collaboration and organizational success.</p>
  //           <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>Mr George is equipped with a solid educational background, including a Doctorate of Philosophy in Business Administration from Prowess University, Delaware, and a Chartered Banker MBA from the University of Bangor, UK, complemented by an MBA in General Management from the University of Abuja. Additionally, he holds a BSc in Banking & Finance. His commitment to professional development is demonstrated by various certifications, including fellowship status in the Chartered Institute of Bankers Nigeria (CIBN) and the Chartered Institute of Information and Strategy Management (CIISM). He has also attended specialized training programs such as Strategic Negotiations at Harvard Business School and Senior Management Programs.</p>
  //           <p class='font-grava font-[300] text-[#002244] text-lg lg:text-[19px] leading-[27px] lg:leading-[1.5em]'>With an unwavering commitment to leadership and continuous learning, he remains focused on shaping business strategies that drive sustained success and foster a high-performance culture.</p>
  //         </div>`
  // },
  {
    name: "Samuel Otseilu Zibiri, SAN",
    role: "Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531124/Samuel_full_n376id.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531118/Samuel_head_hfkams.jpg",
    bio: 
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Samuel Ofseilu Zibiri, SAN, is a distinguished Nigerian lawyer with an extensive educational background and a distinguished career. He holds an LLB (Hons) from Ahmadu Bello University and a Diploma in International Commercial Arbitration from Jesus College, Oxford.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'> 
          His professional journey began in 1987 as a Pupil Counsel and has since spanned various leadership roles, 
          including Managing Partner at Cosmic Chambers and Principal Partner at El-Shaddai Chambers. 
          Zibiri has played significant roles within the Nigerian Bar Association (NBA), including serving as 
          Public Relations Officer, Vice Chairman, and currently as Chairman of the NBA Abuja Branch Disciplinary 
          Committee.
        </p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>
          He has vast experience in litigation, corporate law, debt management, and election petition tribunals. 
          A registered practitioner with the Securities and Exchange Commission (SEC), Zibiri specializes in 
          debt recovery and capital market matters. Fluent in multiple languages, including English, Afemai, Hausa, 
          and Yoruba, Zibiri's career reflects his commitment to the ethical practice of law and his influential 
          role in shaping the legal landscape in Nigeria.
        </p>
      </div>`
  },
  {
    name: "Tonya Lawani",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531747/Tonya_head_shwxqs.jpg",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531759/Tonya_full_ko1tmo.jpg",
    role: "Non-Executive Director",
    bio: 
    `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Tonya Lawani is a seasoned entrepreneur with over 20 years of experience and a remarkable track record of success across multiple industries. As the Group Chief Executive of Seal Group, she oversees a diverse conglomerate with businesses in manufacturing, hospitality, retail, advertising, medical equipment procurement, and more.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>She founded Virgin Vie Angel Limited in 2005, a leading hospitality branding and merchandising company. She went on to establish several successful subsidiaries, including ABC Inflatables Nigeria Limited, which has become a key player in innovative advertising in Nigeria, and The Virgin Hospitality Company, which serves over 500 hotels. She also founded the Quick Print Shop Limited to complete the value chain for her businesses.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>With a BSc in Economics and an MBA, Tonya has demonstrated top leadership and management skills, combining executive education at institutions like Business School Netherlands and Harvard University. As a business impact leader, she has hosted large-scale events like the Lagos Enterprise Summit and the HSE Summit, both of which attracted thousands of attendees. Tonya is also a published author of the best-selling <span class="font-semibold">"Succeed Business Planner"</span> and is passionate about promoting entrepreneurship, leadership, and social responsibility.</p>
      </div>`
  },
  {
    name: "Francis Okosun",
    role: "Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739530851/Fracis_full_azftod.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739530860/Fracis_head_npa6re.jpg",
    bio: 
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Francis Okosun is a certified mediator, an accomplished real estate personality and the Senior Partner/CEO of Knight Frank Nigeria, where he oversees the strategic direction and growth of the business across Nigeria and West Africa. With a career spanning over two decades, he has held key leadership roles, including Partner In-Charge of Knight Frank Estate Agency, where he played a critical role in maintaining the firm’s position as a leading independent estate surveying and valuation firm in Nigeria.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>His tenure at Knight Frank began in 2000, and his leadership has consistently driven the company’s growth through innovative strategies and sustainable business practices. Francis holds a Master’s in Business Administration from Lagos State University and a Diploma in Estate Management from the Federal Polytechnic, Auchi.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>A Fellow of the Nigerian Institution of Estate Surveyors & Valuers and a member of the Royal Institution of Chartered Surveyors, he is highly regarded in the industry. His accolades include being named Real Estate Professional of the Year at the Nigeria NIESV 15th Honours Nite. Francis’ leadership and expertise continue to shape the success of Knight Frank Nigeria.</p>
      </div>`
  },
  {
    name: "Aminatu Dahiru Chiroma",
    role: "Non-Executive Director",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531224/Aminatu_head_yawefq.jpg",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531230/Aminatu_full_pgal7k.jpg",
    bio: 
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Aminatu Chiroma is a highly accomplished individual and Group Managing Director of Binani Group of Companies with decades of experience leading diverse teams and driving organizational growth through strategic planning, operational efficiency, and business development.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Proven track record in fostering strong partnerships, streamlining operations, and implementing key performance metrics to enhance productivity and achieve company goals. Expertise in navigating complex challenges, ensuring compliance, and cultivating a culture of employee development.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Founder and CEO of Exon Energy Resources and Exon Gold and Trading Limited, with a deep understanding of the energy and precious metals industries. Demonstrated leadership in expanding market presence, optimizing supply chains, and integrating sustainable practices across international operations. She holds an advanced Postgraduate Diploma in Business Leadership and Management and a diverse skill set in project management, risk mitigation, legal compliance, and technology integration. Recognized for excellence within several industry awards, including the “Beacon of Hope for Africa’s Development” and “West African Merit Award.”</p>
      </div>`
  },
  {
    name: "Felix E. Igbinosa",
    role: "Independent Non-Executive Director",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739530622/Felix_full_fkbi48.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739530488/Felix_head_qez04g.jpg",
    bio:  
    `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Felix Igbinosa is a seasoned banker and professional with over three decades of Banking and Financial services experience. His expertise spans Banking Operations, Corporate Banking, Relationship Management, Internal Control, Audit, Information Technology, Corporate Services, General Administration and Project Management.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Felix began his career as a Chartered Accountant in Practice and held senior positions at several leading financial institutions, including Allstates Trust Bank Plc, Co-operative Development Bank Plc, Continental Trust Bank Ltd, Omegabank Plc, Spring Bank Plc, where he was the pioneer Chief Inspector and UBA Plc. At UBA, he served as the Division Head, Group Internal Control, where he provided strategic oversight for the bank’s operations across Nigeria, 18 African countries, UBA CAPE (UK), and UBA New York (USA), before his appointment as Divisional Head, he was the Regional Audit and Control Coordinator for UBA WAMZ, covering Ghana, Sierra Leone, and Liberia.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>From 2015 to 2023, Felix was the Chief Audit Executive (CAE) and Cluster Head at Ecobank, where he oversaw the bank’s Internal Audit and Management Services function, reporting directly to the Board Audit Committee. He was also responsible for the internal audit functions of the Ecobank Software Centre Nigeria and Ecobank Development Corporation (EDC).</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Felix holds a Higher National Diploma in Accountancy from the Federal Polytechnic, Auchi; a Bachelor’s degree in Business Management from the University of Sunderland, UK; and an MBA from the Federal University of Technology, Akure (FUTA). He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) (FCA) and the Chartered Institute of Taxation of Nigeria (CITN) (FCTI). Additionally, he is a Platinum Member of ISACA (USA) and an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria (CIBN) (HCIB), where he currently serves on the CIBN Investigation Panel.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Felix was also the Chairman of the Association of Chief Audit Executives of Banks in Nigeria (ACAEBIN) until his retirement in July 2023.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>He is currently the Managing Partner at Felix Igbinosa & Co (Chartered Accountants) and the Managing Consultant at First VineField Consulting.</p>
      </div>`
  },
  {
    name: "Abimbola Izu",
    pic: "https://res.cloudinary.com/code-idea/image/upload/v1739531628/Abimbola_full_old2cz.jpg",
    headshot: "https://res.cloudinary.com/code-idea/image/upload/v1739531621/Abimbola_head_briac3.jpg",
    role: "Independent Non-Executive Director",
    bio: 
      `<div class="flex flex-col gap-5">
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Abimbola Izu is an accomplished legal and business professional with a distinguished career spanning law, finance, corporate governance, and advisory services. She holds a law degree from the University of Ife (now Obafemi Awolowo University) and an LLM from the University of Warwick, UK, where she was a Foreign and Commonwealth Office scholar.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>Abimbola is currently the Principal Advisor at Portalls Advisory Services, where she provides expert advice on infrastructure development, mergers and acquisitions, corporate governance, and finance transactions. Previously, she served as Executive Director, Corporate and Investment Bank at Polaris Bank, overseeing a portfolio of over ₦600bn across industries like oil and gas, telecommunications, banking, and real estate. She led the development of sustainable finance frameworks and the Environmental and Social Risk Management (ESRM) framework in collaboration with the IFC.</p>
        <p class='font-grava font-[350] text-[#002244] text-lg lg:text-[18px] leading-[27px] lg:leading-[1.6em]'>She is best recognized for her leadership in brand management, particularly during her tenure at Skye Bank, where she spearheaded successful campaigns such as “I Wish” and “Skye High.” With a strong background in law and business, Abimbola continues to make significant contributions to Nigeria’s financial, legal, and sustainability sectors.</p>
      </div>`
  },
];

const Management = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-6 lg:pt-[48px] overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lm:grid-cols-3 gap-5 lm:gap-10"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        {team.map((item, index) => {
          return (
            <motion.div
              variants={gridSquareVariants}
              className="flex flex-col gap-[33px]"
              // className='h-[472px] lg:h-[529px] relative flex flex-col w-full cursor-pointer group transition-transform ease-in-out hover:-translate-y-3 '
              onClick={() => {
                navigate("/about/team-details", {
                  state: { section: "details", team: team[index] },
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div
                className="flex flex-col gap-6 "
                onClick={() => {
                  window.scrollTo(0, 0); // Scroll to the top first
                  navigate("/about/team-details", {
                    state: { section: "details", team: team[1] },
                  });
                }}
                
              >
                <div className="relative w-auto cursor-pointer h-[387px] md:h-auto  group overflow-hidden rounded-lg">
                  {/* Background Image */}
                  <img
                    src={item.headshot}
                    alt="HeadShot"
                    className="w-full h-[529px] object-cover transition-all duration-500 rounded-[24px]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#FFCC33] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>

                  {/* Center Arrow */}
                  <img
                    src={ArrowClick}
                    alt="ArrowClick"
                    className="absolute w-12 h-12 inset-0 m-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                    <div className="absolute -bottom-5 lg:-bottom-2 -right-1 w-[47.87px] h-[53.32px] z-10 clip-path-triangle">
                      <img src={Clip} alt='Clip' className='teamBase' />
                    </div>
                  <div className="absolute -bottom-2 right-0 w-[40.87px] h-[53.32px]  bg-white clip-path-triangle"></div>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="font-grava font-semibold tracking-[0.01em] text-[#002244] text-[18px] md:text-[20px] lm:text-[27.35px] lm:leading-[34.18px]">
                    {item.name}
                  </p>
                  <p className="font-grava text-[#002244] font-[350] text-[14px] md:text-base lm:text-[21.88px] tracking-[0.2%] leading-[24px] lm:leading-[32.82px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Management;
