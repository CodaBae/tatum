import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const MobileTerms = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabName, setTabName] = useState("intro");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  const termsRef = useRef(null);
  const { state } = useLocation();

  // useEffect(() => {
  //   if (state?.section === "terms" && termsRef.current) {
  //     termsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [state]);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1100);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  const introductionRef = useRef(null);
  const userRef = useRef(null);
  const acceptanceRef = useRef(null);
  const serviceRef = useRef(null);
  const eligibilityRef = useRef(null);
  const intellectRef = useRef(null);
  const contentRef = useRef(null);
  const partyRef = useRef(null);
  const disclaimerRef = useRef(null);
  const limitationRef = useRef(null);
  const indemnificationRef = useRef(null);
  const lawRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickedTab = (value, index) => {
    setTabName(value);
    setActiveTab(index);

    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000); // Allow observer updates after 1 second

    const refs = {
      intro: introductionRef,
      user: userRef,
      acceptance: acceptanceRef,
      service: serviceRef,
      eligibility: eligibilityRef,
      intellect: intellectRef,
      content: contentRef,
      party: partyRef,
      disclaimer: disclaimerRef,
      limitation: limitationRef,
      indemnification: indemnificationRef,
      law: lawRef,
      contact: contactRef,
    };

    refs[value]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sectionRefs = [
      introductionRef.current,
      userRef.current,
      acceptanceRef.current,
      serviceRef.current,
      eligibilityRef.current,
      intellectRef.current,
      contentRef.current,
      partyRef.current,
      disclaimerRef.current,
      limitationRef.current,
      indemnificationRef.current,
      lawRef.current,
      contactRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll) return; // Skip observer updates during manual scroll

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.indexOf(entry.target);
            if (index !== -1) setActiveTab(index + 1);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full mb-[56px] lg:mb-[120px] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="3000"
      ref={termsRef}
    >
        <div 
            style={{ 
                backgroundImage: `url(https://framerusercontent.com/images/NUH4eUyFO0g76XT8Hd1XgCyLmUU.png)`, 
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="bg-[#FFCC33] w-full h-[254px] px-5 lm:px-0 lg:h-[320px]  flex flex-col items-center justify-center" //lg:h-[294px] 
        >
            <p className="font-bold text-[#002244] text-center font-grava text-[34px] mt-[6%] lg:text-[71px] leading-[125%]  ">
                Terms and Conditions for {isMobile ? null : <br />}
                Tatum Bank’s Mobile App
            </p>
        </div>

        <div className="flex flex-col items-start gap-[40px] px-5 lg:px-16 pt-[56px] lg:pt-[114px] bg-[#fff] relative">

            <div className="flex flex-col gap-[40px] lg:flex-1 ">

                <div ref={userRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        1. Introduction
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        1.1. These Terms and Conditions ("Terms") govern your use of Tatum Bank’s Application ("App"). 
                        By downloading, accessing, or using the App, you agree to be unconditionally bound by these 
                        Terms and Conditions. If you do not agree, do not use the App.
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        1.2. The App is provided by Tatum Bank, a licensed financial institution regulated by the 
                        Central Bank of Nigeria (CBN) and other relevant authorities.
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        1.3. These Terms and Conditions comply with Nigerian laws, including the <span className="font-[450]"> CBN Regulatory
                        Framework</span> for Mobile Money Services, the <span className="font-[450]">Nigeria Data Protection (NDPA) Act (2023), </span>  
                        <span className="font-[450]">Cybercrime (Prohibition, Prevention, Etc) Act 2015 with amendment act 2024.</span> 
                        {/* (as amended), and other applicable international standards. */}
                    </p>
                </div>

                <div ref={acceptanceRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        2. Eligibility
                    </p>
                    <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                        2.1. To use the App, you must:
                        <li> - Be at least 18 years old or the legal age of maturity in your jurisdiction. </li>  
                        <li> - Have a valid account with Tatum Bank or be willing to open  one on this App. </li>  
                        <li> 
                            - Provide accurate and complete information during registration/Account Opening, 
                            including your Bank Verification Number (BVN), National Identity Number (NIN), 
                            Proof of Address and any other document as required by CBN regulations. 
                        </li>  
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        2.2. By using the App, you have confirmed that you meet these eligibility requirements.
                    </p>
                </div>

                <div ref={serviceRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        3. Account Registration and Security
                    </p>
                    <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                        3.1. You are responsible for: 
                        <li> 
                            - The maintenance of the <span className="font-[450]">confidentiality</span> of your login credentials 
                            (e.g., username, password, Personal Identification Number (PIN), One Time Password (OTP). 
                        </li>  
                        <li> - All activities that occur under your account.</li>  
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        3.2. You must immediately notify Tatum Bank of any unauthorized access, loss of device, or breach of security.
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        3.3. Tatum Bank reserves the right with or without your notice and authority to suspend or terminate your account if fraudulent
                        activity is suspected or in compliance with the CBN guidelines on fraud prevention, order of court or any statutory agency.
                    </p>
                </div>

                <div ref={eligibilityRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        4. Permitted Use
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        4.1. The App is intended for personal and non-commercial use only. 
                    </p>
                    <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                        4.2. You agree not to: 
                        <li> 
                            - Use the App for illegal, fraudulent or unauthorized purposes, including money laundering, 
                            terrorism financing, or other financial crimes as prohibited by CBN regulations.  
                        </li>  
                        <li> - Reverse engineer, decompile, or attempt to extract the source code of the App. </li>  
                        <li> - Transmit viruses, malware, or any harmful code through the App.</li>  
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        5. Privacy and Data Protection
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        5.1. Your use of the App is subject to our Privacy Policy, which outlines how we collect, 
                        use/process, and protect your data in compliance with the <span className="font-[450]">Nigeria Data Protection Act (NDPA), 
                        2023</span> and CBN guidelines on data protection. 
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        5.2. By using the App, you consent to the collection and processing of your data as described 
                        in the Privacy Policy.  
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        5.3. We may share your information with third parties only as necessary to provide services, 
                        comply with CBN regulations, or as required by law.  
                    </p>
                </div>

                <div ref={contentRef} className="flex gap-4 flex-col ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        6. Intellectual Property
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        6.1. All intellectual property rights in the App, including but not limited to trademarks, 
                        logos, and software patents, are owned by Tatum Bank or its licensors.  
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        6.2. You are granted a limited, non-exclusive, non-transferable license to use the App 
                        for its intended purpose.  
                    </p>
                </div>

                <div ref={partyRef} className="flex gap-4 flex-col ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        7. Transactions and Liability
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        7.1. You are responsible for all transactions conducted through your account.
                    </p>
                    <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                        7.2. Tatum Bank is not liable and shall not be sanctioned for: 
                        <li> 
                            - Losses arising from unauthorized transactions due to your negligence 
                            (e.g., sharing login credentials). 
                        </li>  
                        <li> - Delays or failures caused by third-party services (e.g., network providers).</li>
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        7.3. You must report any unauthorized transactions within 24 hours of discovery, 
                        as required by CBN guidelines on electronic payments. 
                    </p>
                </div>

                <div ref={disclaimerRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        8. Fees
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        8.1. The use of the App may be subject to charges as contained in the transaction Fees 
                        displayed during your transactions, which complies with CBN regulations on transparency and 
                        disclosure. 
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        8.2. Tatum Bank reserves the right to modify fees with prior notice to customers in line 
                        with CBN requirements.   
                    </p>
                </div>

                <div ref={limitationRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        9. Termination
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        9.1. Tatum Bank may suspend or terminate your access to the App at any time for violation of 
                        these Terms and Conditions, suspected fraud, criminal activities or non-compliance with CBN 
                        regulations. 
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        9.2. You may terminate your use of the App by uninstalling it. 
                    </p>
                </div>

                <div ref={indemnificationRef} className="flex gap-4 flex-col ">

                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        10. Amendments to Terms
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        10.1. Tatum Bank reserves the right to modify these Terms at any time to comply with 
                        CBN regulations or other legal requirements. Any modification shall be reflected on the App.
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        10.2. Continued use of the App after changes constitutes your acceptance of the revised Terms. 
                    </p>
                </div>

                <div ref={contactRef} className="flex flex-col gap-4 ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        11. Governing Law and Dispute Resolution
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        11.1. These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria 
                        and the regulations of the Central Bank of Nigeria (CBN) and other relevant laws.
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        11.2. Any disputes arising from the use of the App which cannot be resolved between 
                        the customer and bank shall be resolved through arbitration under the Mediation and 
                        Arbitration Act 2023 or through the Consumer Protection Department of CBN. 
                    </p>
                </div>

                <div className="flex flex-col gap-4 ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        12. Limitation of Liability
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        12.1. Tatum Bank shall not be liable for any indirect, incidental, or consequential 
                        damages arising from the use of the App. 
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        12.2. Tatum Bank's total liability to you for any claim (direct or indirect) shall not exceed 
                        the total fees paid by you for using the App for the particular transaction that incurred loss. 
                    </p>
                </div>

                <div className="flex flex-col gap-4 ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        13. Indemnification
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        13.1. You agree to indemnify and hold Tatum Bank harmless from any claims, damages, 
                        or losses (direct or indirect) arising from your use of the App or violation of these Terms. 
                    </p>
                </div>

                <div className="flex flex-col gap-4 ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        14. Force Majeure
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        14.1. Tatum Bank shall not be liable for any failure or delay in performance due to events 
                        beyond its control, including but not limited to natural disasters, war, or government 
                        restrictions. 
                    </p>
                </div>

                <div className="flex flex-col gap-4 ">
                    <p className="font-[500] leading-6 text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                        15. Consumer Protection
                    </p>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        15.1. In line with CBN’s Consumer Protection Framework, Tatum Bank is committed 
                        to ensuring fair treatment, transparency, and prompt resolution of customer complaints.  
                    </p>
                    <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                        15.2. If you have any complaints, please contact us at: 
                        <li> - Email: info@tatumbank.com</li>  
                        <li> - Phone: 07000077770</li>
                        <li> - Address: Plot 1088, Cadastral Zone AO1, Kaura Namoda Street, Area 3 Garki, Abuja.</li>
                        <li> - Website: www.tatumbank.com</li>
                    </ul>
                </div>
            
            </div>

        </div>

      </div>
    
  );
};

export default MobileTerms;
