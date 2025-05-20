import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Terms = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabName, setTabName] = useState("intro");
  const [isManualScroll, setIsManualScroll] = useState(false);

  const termsRef = useRef(null);
  const { state } = useLocation();

  // useEffect(() => {
  //   if (state?.section === "terms" && termsRef.current) {
  //     termsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [state]);

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
        className="bg-[#FFCC33] w-full h-[184px] lg:h-[294px]  flex flex-col items-center justify-center"
      >
        <p className="font-bold text-[#002244] font-grava text-[34px] mt-[6%] lg:text-[75px]  ">
          Terms of Service
        </p>
      </div>

      <div className="flex flex-col items-start gap-[40px] px-5 lg:px-16 pt-[56px] lg:pt-[64px] bg-[#fff] relative">
        <div className="hidden flex-col bg-[#F9FAFB]  w-[396px] rounded-lg p-6 gap-[27px]">
          <p className="font-medium font-grava text-[#546B82] ">
            Table of content:
          </p>
          <div className="flex flex-col gap-4">
            <div
              onClick={() => handleClickedTab("intro", 1)}
              className={`${
                activeTab === 1
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Introduction
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("user", 2)}
              className={`${
                activeTab === 2
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                User Conduct
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("acceptance", 3)}
              className={`${
                activeTab === 3
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Acceptance of Terms and Updates
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("services", 4)}
              className={`${
                activeTab === 4
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Services Provided
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("eligibility", 5)}
              className={`${
                activeTab === 5
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">Eligibility</p>
            </div>
            <div
              onClick={() => handleClickedTab("intellect", 6)}
              className={`${
                activeTab === 6
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Intellectual Property
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("content", 7)}
              className={`${
                activeTab === 7
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                {" "}
                User-Generated Content{" "}
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("party", 8)}
              className={`${
                activeTab === 8
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Third-Party Links
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("disclaimer", 9)}
              className={`${
                activeTab === 9
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">Disclaimer</p>
            </div>
            <div
              onClick={() => handleClickedTab("limitation", 10)}
              className={`${
                activeTab === 10
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                {" "}
                Limitation of Liability
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("indemnification", 11)}
              className={`${
                activeTab === 11
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                {" "}
                Indemnification
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("law", 12)}
              className={`${
                activeTab === 12
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                {" "}
                Governing Law
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("contact", 13)}
              className={`${
                activeTab === 13
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">Contact us</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[19px]">
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">TATUM BANK LIMITED WEBSITE</p>
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">TERMS AND CONDITIONS</p>
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">Effective Date: January 2025</p>
        </div>

        <div className="flex flex-col gap-[40px] lg:flex-1 ">
          <div ref={introductionRef} className="flex gap-4 flex-col">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              1. Introduction
            </p>
            <div className="flex flex-col gap-5">
              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                1.1. These Terms and Conditions (<span className="font-[500]">“Terms” </span>) 
                govern your use of Tatum Bank’s Application (<span className="font-[500]">"App"</span>).
                By downloading, accessing, or using the App, you agree to be unconditionally bound by these Terms
                and Conditions. If you do not agree, do not use the App.
              </p>
              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava"> 
                1.2. The App is provided by Tatum Bank, a licensed financial institution regulated by the 
                Central Bank of Nigeria (CBN) and other relevant authorities.
              </p> 
              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                1.3. These Terms and Conditions comply with Nigerian laws, 
                including <span className="font-[450]">the CBN Regulatory Framework </span> for Mobile Money Services, 
                the <span className="font-[450]">Nigerian Data Protection (NDPA) Act (2023)</span>, the <span className="font-[450]">Cybercrimes (Prohibition, Prevention) Act</span> 2015 
                (as amended), and other applicable international standards.
              </p>
            </div>
          </div>

          <div ref={userRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              2. Eligibility
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                2.1. To use the App, you must:  
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>- Be at least 18 years old or the legal age of maturity in your jurisdiction.</li>
                <li>- Have a valid account with Tatum Bank or be willing to open  one on this App. </li>
                <li>
                  - Provide accurate and complete information during registration/Account Opening, including your 
                  Bank Verification Number (BVN), National Identity Number (NIN), Proof of Address and any other 
                  document as required by CBN regulations.
                </li>
              </ul>
            </div>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              2.2. By using the App, you have confirmed that you meet these eligibility requirements.  
            </p>
              
          </div>

          <div ref={acceptanceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              3. Account Registration and Security
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                3.1. You are responsible for: 
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  - The maintenance of the <span className="font-[450]">confidentiality</span> of your login credentials 
                  (e.g., username, password, Personal Identification Number (PIN), One Time Password (OTP)).
                </li>
                <li>- All activities that occur under your account. </li>
              </ul>
            </div>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              3.2. You must immediately notify Tatum Bank of any unauthorized access, 
              loss of device, or breach of security.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              3.3. Tatum Bank reserves the right to suspend or terminate your account if 
              fraudulent activity is suspected, in line with CBN guidelines on fraud prevention. 
            </p>
          </div>

          <div ref={serviceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              4. Permitted Use
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              4.1. The App is intended for personal and non-commercial use only. 
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                4.2. You agree not to: 
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  - Use the App for illegal, fraudulent or unauthorized purposes, including money laundering, 
                  terrorism financing, or other financial crimes as prohibited by CBN regulations.
                </li>
                <li>- Reverse engineer, decompile, or attempt to extract the source code of the App.</li>
                <li>- Transmit viruses, malware, or any harmful code through the App.</li>
              </ul>
            </div>
          </div>

          <div ref={eligibilityRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              5. Privacy and Data Protection
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              5.1. Your use of the App is subject to our Privacy Policy, which outlines how we collect, 
              use/process, and protect your data in compliance with the Nigeria Data Protection Act (NDPA), 
              2023 and CBN guidelines on data protection.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              5.2. By using the App, you consent to the collection and processing of your data as 
              described in the Privacy Policy.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              5.3. We may share your information with third parties only as necessary 
              to provide services, comply with CBN regulations, or as required by law.  
            </p>
          </div>

          </div>
          <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
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

          <div ref={contentRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              7. Transactions and Liability
            </p>
            <p className=" font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
              7.1. You are responsible for all transactions conducted through your account.  
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                7.2. Tatum Bank is not liable and shall not be sanctioned for:   
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  - Losses arising from unauthorized transactions due to your negligence 
                  (e.g., sharing login credentials).
                </li>
                <li>- Delays or failures caused by third-party services (e.g., network providers).</li>
              </ul>
            </div>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              7.3. You must report any unauthorized transactions within 24 hours of discovery, 
              as required by CBN guidelines on electronic payments.    
            </p>
          </div>

          <div ref={partyRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              8. Fees
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
             8.1. The use of the App may be subject to charges as contained in the transaction Fees 
             displayed during your transactions, which complies with CBN regulations on transparency and disclosure.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
             8.2. Tatum Bank reserves the right to modify fees with prior notice to customers in line with CBN 
             requirements.
            </p>
          </div>

          <div ref={disclaimerRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              9. Termination
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
              9.1. Tatum Bank may suspend or terminate your access to the App at any time for 
              violation of these Terms and Conditions, suspected fraud, criminal activities or 
              non-compliance with CBN regulations. 
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
              9.2. You may terminate your use of the App by uninstalling it.  
            </p>
          </div>

          <div ref={limitationRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              10. Amendments to Terms
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              10.1. Tatum Bank reserves the right to modify these Terms at any time to comply with 
              CBN regulations or other legal requirements. Any modification shall be reflected on the App.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              10.2. Continued use of the App after changes constitutes your acceptance of the revised Terms. 
            </p>
          </div>

          <div
            ref={indemnificationRef}
            className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              11. Governing Law and Dispute Resolution
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              11.1. These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria 
              and the regulations of the Central Bank of Nigeria (CBN) and other relevant laws.  
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              11.2. Any disputes arising from the use of the App which cannot be resolved between the customer and 
              bank shall be resolved through arbitration under the Arbitration and Mediation Act 2023 or through the 
              Consumer Protection Department of CBN.  
            </p>
          </div>

          <div ref={lawRef} className="flex gap-4 flex-col ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              12. Limitation of Liability
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              12.1. Tatum Bank shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of the App.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              12.2. Tatum Bank's total liability to you for any claim (direct or indirect) shall not exceed 
              the total fees paid by you for using the App for the particular transaction that incurred loss. 
            </p>
          </div>

          <div ref={contactRef} className="flex flex-col gap-4 ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              13. Indemnification
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              13.1. You agree to indemnify and hold Tatum Bank harmless from any claims, damages, or 
              losses (direct or indirect) arising from your use of the App or violation of these Terms. 
            </p>
          </div>

          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              14. Force Majeure
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              14.1. Tatum Bank shall not be liable for any failure or delay in performance due to events 
              beyond its control, including but not limited to natural disasters, war, or government restrictions.
            </p>
          </div>

          <div  className="flex flex-col gap-4 ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              15. Consumer Protection
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              15.1. In line with CBN’s Consumer Protection Framework, Tatum Bank is committed to ensuring fair treatment, 
              transparency, and prompt resolution of customer complaints. 
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                15.2. If you have any complaints, please contact us at:    
              </p>
              <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>Email: Customercare@tatumbank.com</li>
                <li>Phone: 07000077770</li>
                <li>Address: Plot 1088, Cadastral Zone AO1, Kaura Namoda Street, Area 3 Garki, Abuja.</li>
                <li>Website: <span className="underline cursor-pointer">www.tatumbank.com</span></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    
  );
};

export default Terms;
