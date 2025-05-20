import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const AML = () => {
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
          Anti-Money Laundering
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
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">ANTI-MONEY LAUNDERING</p>
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">Effective Date: January 2025</p>
        </div>

        <div className="flex flex-col gap-[40px] lg:flex-1 ">
          <div ref={introductionRef} className="flex gap-4 flex-col">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              1. Introduction
            </p>
            <div className="flex flex-col gap-5">
              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                Money Laundering, Terrorism Financing and Proliferation Financing are menaces that have
                assumed international dimension necessitating a global approach to the fight against these
                crimes, armed with various Legal and Regulatory provisions which in various ways affect the
                financial industry. As a result of the governmental reactions in virtually all countries, banks,
                non-bank financial institutions and non-financial businesses in all countries now face national
                and international legal requirements and harsher penalties in the event of non-compliance.
                The multifarious nature of these Legal and Regulatory provisions necessitates their
                codification. This Policy, the Tatum Bank Limited Anti-Money Laundering/Combating the
                Financing of Terrorism/Countering Proliferation Financing Policy, therefore, seeks to codify
                these Legal and Regulatory provisions for ease of understanding, adoption, implementation,
                and compliance.
              </p>
              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava"> 
                This Compliance Policy outlines the Bank’s framework for compliance with laws, regulations,
                and industry standards and sets out the expectations for employees, senior management,
                and other stakeholders concerning their roles and responsibilities in ensuring compliance
                with applicable laws and regulations.
              </p> 
            </div>
          </div>

          <div ref={userRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              2. SCOPE
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                This Policy is a codification of the provisions of the various laws and regulations guiding the
                fight against Money Laundering, Terrorism Financing, Proliferation Financing, and similar laws
                ancillary to them as they apply to Tatum Bank Limited’s primary business of commercial
                banking and other businesses incidental to it, such as capital market operations. The policy is
                structured with a risk-based approach, taking into account the size and complexity of the
                Bank and the areas of operation. It addresses all relevant laws and regulations applicable to
                the business activities of the Bank and specify the compliance requirements for each area of
                operation. The policy also establishes clear guidelines for identifying and reporting potential
                noncompliance issues, including the steps to be taken to investigate and resolve them. It
                provides principles and minimum standards using a risk-based approach to proactively
                identify money laundering, terrorism financing and proliferation financing risks that the Bank
                may face and to ensure that control mechanisms and monitoring processes are in place to
                help mitigate these risks, thus contributing to the global fight against these crimes. It
                embodies the following legislation and Regulations as well as international best practices
                among others:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                    a) CBN Anti-Money Laundering, Combating the Financing of Terrorism and Countering
                    Proliferation Financing of Weapons of Mass Destruction in Financial Institutions
                    (AML/CFT/CPT) Regulations, 2022
                </li>
                <li> b) Money Laundering (Prevention and Prohibition) Act, 2022 </li>
                <li> c) Terrorism (Prevention and Prohibition) Act 2022 </li>
                <li> d) CBN AML/CFT/CPF (Administrative Sanctions) Regulations, 2023 </li>
                <li> e) Economic and Financial Crime Commission Act 2004. </li>
                <li> f) Other ancillary legislation to the above. </li>
              </ul>
            </div>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                It should be noted that these standards are minimum and as such whenever any applicable
                Money Laundering, Terrorism Financing or Proliferation Financing (ML/FT/PF) laws establish a
                higher standard, Tatum Bank Limited shall adhere to the higher standards.  
            </p>
              
          </div>

          <div ref={acceptanceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              3. POLICY OBJECTIVES
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank Limited supports the international war against money laundering, financing of
                terrorism and proliferation financing. The primary objectives of this Policy are:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                    a) To help protect the brand and reputation of Tatum Bank Limited by minimizing the
                    risk of the Bank being used as a channel for money laundering. Terrorism financing
                    and proliferation financing,
                </li>
                <li>
                    b) Ensure that Tatum Bank Limited is in full compliance with all relevant statutes 
                    and Regulations. 
                </li>
                <li>
                    c) Ensure that Tatum Bank Limited adheres to sound and best banking practices. 
                </li>
                <li>
                    d) Ensure that Tatum Bank Limited will not become a victim of illegal activities
                    perpetrated by either customers or other stakeholders. 
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Other Objectives Include:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                    a) To provide guidance to employees regarding the application of Tatum Bank Limited
                    AML/CFT/CPF policy through continuous training and information sharing.
                </li>
                <li>
                    b) To define minimum standards for information required at account opening to be
                    collected and maintained in respect of the customers. 
                </li>
                <li>
                    c) To appreciate the need for enhanced due diligence standards when addressing
                    certain customers and transactions considered high risk as a matter of law or based
                    on the Bank’s own assessment of risk.
                </li>
                <li>
                    d) To define persons with whom Tatum Bank Limited is prohibited from doing business
                    with e.g., sanctioned persons and entities defined as such by the Office of Foreign
                    Asset Control (OFAC), United Nations Security Council Resolutions (UNSCR), Nigeria
                    Financial Intelligence Unit (NFIU), The Nigeria Sanctions Committee (NSC) as well as
                    Tatum Bank Limited internally generated sanctions list.
                </li>
                <li>
                    e) To ensure that senior management and other employees are aware of Tatum Bank
                    Limited legal obligations.
                </li>
                <li>
                    f) To ensure internal procedures are in place to appreciate the perceived risks associated
                    with our services with a view to preventing money laundering, financing of terrorism
                    and proliferation financing.
                </li>
                <li>
                    g) To ensure a structure is in place for identifying and reporting unusual, suspicious, or
                    criminal activities to the Chief Compliance Officer.
                </li>
                <li>
                    h) To ensure that adequate record retention procedures are in place.
                </li>
                <li>
                    i) To ensure that adequate and relevant AML/CFT/CPF training programs are in place for
                    employees and ensuring that they understand the concept of money laundering,
                    terrorist financing and proliferation financing.
                </li>
              </ul>
            </div>
          </div>

          <div ref={serviceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              4. TATUM BANK LIMITED AML/CFT/CPF REPORTING STRUCTURE
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The ability of the Compliance Division to implement the Bank’s AML/CFT/CPF program,
                administer it and institute effective corrective action depends on its authority, independence
                and its role as perceived by other employees as well as support provided by the board and
                senior management. The AML/CFT/CPF Compliance Officers shall be able to cross
                departmental lines, access all operational areas and ensure that line managers implement
                corrective action/changes in policies and procedures. In Tatum Bank Limited.
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                    a) The Chief Compliance Officer (CCO) shall report directly to the Executive Compliance
                    Officer (ECO) on all matters under the CBN Regulations.
                </li>
                <li>
                    b) The Executive Compliance Officer (ECO) shall oversee all matters under the CBN
                    Regulations and report directly to the Board of the Bank.
                </li>
              </ul>
            </div>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                In line with the Central Bank of Nigeria regulations and guidelines and in recognition of the
                various aspects of the Bank’s compliance risk, the compliance function of the Bank is headed
                by an Executive Director who is designated as the Executive Compliance Officer (ECO). The
                Chief Compliance Officer reports directly to the Executive Compliance Officer.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The Compliance Division is made up of three ( 3) Departments to carry out its functions in a
                seamless manner. These groups may be reviewed from time to time depending on the
                changes in the regulatory and business environment of the Bank. The Reporting Structure of
                the Compliance Division is as shown below:
            </p>
            <div className="flex flex-col items-center gap-1">
                <div className=" bg-[#FFCC33] flex justify-center items-center gap-2 flex-col w-full lg:w-[25%] h-24">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-sm text-base lg:text-[18px]">Board of Directors</p>
                    <div className="bg-white flex items-center justify-center w-[80%] ">
                        <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm lg:text-base">Board Audit Committee</p>
                    </div>
                </div>
                <div className="bg-[#ccc] w-1 h-10"></div>
                <div className=" bg-[#FFCC33] flex justify-center items-center gap-2 flex-col w-full lg:w-[25%] h-24">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-sm text-base lg:text-[18px]">Executive Compliance Officer</p>
                    <div className="bg-white flex items-center justify-center w-[80%] ">
                        <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm lg:text-base">Executive Director</p>
                    </div>
                </div>
                <div className="bg-[#ccc] w-1 h-10"></div>
                <div className=" bg-[#FFCC33] flex justify-center items-center gap-2 flex-col w-full lg:w-[25%] h-24">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-sm text-base lg:text-[18px]">Chief Compliance Officer</p>
                    <div className="bg-white flex items-center justify-center w-[80%] ">
                        <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm invisible lg:text-base">Executive Director</p>
                    </div>
                </div>
                <div className="bg-[#ccc] w-1 h-10"></div>
                <div className="bg-[#ccc] w-[80%] h-1"></div>
                <div className="flex items-center w-[80%] justify-between">
                    <div className="bg-[#ccc] w-1 h-10"></div>
                    <div className="bg-[#ccc] w-1 h-10"></div>
                    <div className="bg-[#ccc] w-1 h-10"></div>
                </div>
                <div className="flex items-center w-full justify-between">
                    <div className=" bg-[#FFCC33] p-2 flex justify-center items-center gap-2 flex-col w-4/12 lg:w-[25%] lg:h-28 ">
                        <p className="font-grava font-[350] text-center leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-xs text-base lg:text-[18px]">Head, Regulatory and Financial Crimes Compliance </p>
                        <div className="bg-white flex items-center justify-center w-[80%] ">
                            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm invisible lg:text-base">Executive Director</p>
                        </div>
                    </div>
                    <div className=" bg-[#FFCC33] p-2 flex justify-center items-center gap-2 flex-col w-4/12 lg:w-[25%] lg:h-28 ">
                        <p className="font-grava font-[350] text-center leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-xs text-base lg:text-[18px]">Head, AML/CFT/CPF Monitoring & Analytics</p>
                        <div className="bg-white flex items-center justify-center w-[80%] ">
                            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm invisible lg:text-base">Executive Director</p>
                        </div>
                    </div>
                    <div className=" bg-[#FFCC33] p-2 flex justify-center items-center gap-2 flex-col w-4/12 lg:w-[25%] lg:h-28 ">
                        <p className="font-grava font-[350] text-center leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] xs:text-xs text-base lg:text-[18px]">Head, Head Office and Branches Compliance</p>
                        <div className="bg-white flex items-center justify-center w-[80%] ">
                            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-sm invisible lg:text-base">Executive Director</p>
                        </div>
                    </div>
                </div>

            
            </div>

          </div>

            <div ref={eligibilityRef} className="flex gap-4 flex-col ">

                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                    5. AML COMPLIANCE OBLIGATIONS OF TATUM BANK LIMITED AND EMPLOYEES
                </p>
                <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <span className="font-[450]">5.1. The Bank: </span>
                    Tatum Bank Limited in recognition of its obligation towards prevention of Money
                    Laundering, Financing of Terrorism and Proliferation Financing has adopted this Policy to:
                    Comply with the CBN AML/CFT/CPF (Administrative Sanctions) Regulations, 2023 as well
                    as other AML/CFT/CPF Regulations.
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li>
                        a) Guide our efforts in complying with the provisions of the laws and to ensure the
                        diligent implementation of Tatum Bank Limited compliance programme.
                    </li>
                    <li>
                        b) Entrench in the Bank a culture of Compliance with AML/CFT/CPF regulations
                    </li>
                    <li>
                        c) Minimize the risk of being used to launder the proceeds of crime
                    </li>
                    <li>
                        d) Provide protection against fraud, reputation and financial risks.
                    </li>
                    <li>
                        e) Establish identification procedures at account opening which includes Know
                        Your Customer “KYC” and Know Your Customer’s Business “KYCB”
                    </li>
                    <li>
                        f) Implement effective policies and procedures including automated monitoring
                        for suspicious transactions
                    </li>
                    <li>
                        g) Establish record keeping procedures
                    </li>
                    <li>
                        h) Establish Office of the Chief Compliance Officer and channels of communication
                    </li>
                    <li>
                        i) Provide tools for staff training programme
                    </li>
                </ul>
                </div>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <span className="font-[450]">5.2. The Board: </span>
                    In line with S.9 of the CBN AML/CFT/CPF Regulations 2022, the ultimate responsibility for
                    Tatum Bank AML/CFT/CPF compliance is placed on the Board and Top Management of
                    the Bank. The Board will approve and ensure that an appropriate compliance policy is always in
                    place to manage compliance risk and oversee its implementation. It will also ensure that
                    compliance issues are resolved effectively and expeditiously by senior management with
                    the assistance of compliance staff.
                </p>
                <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <span className="font-[450]">5.3. AML Compliance Officers Designation and Duties: </span>
                    As required under the Money Laundering (Prevention and Prohibition) Act, 2022, an
                    Officer, who is qualified by experience, knowledge and training in the management and
                    operations of the Bank should be appointed and designated as the Chief Compliance
                    Officer. The duties of the Chief Compliance Officer will include:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li>
                        a) Monitoring AML/CFT/CPF compliance and communication.
                    </li>
                    <li>
                        b) Overseeing AML/CFT/CPF training for employees of the Bank.
                    </li>
                    <li>
                        c) Ensure that proper AML/CFT/CPF records are kept.
                    </li>
                    <li>
                        d) Review of the Compliance program yearly.
                    </li>
                    <li>
                        e) Ensure Compliance requirements are integrated in the day-to-day activities of
                        the Bank and that processes are efficient and in accordance with applicable laws
                        and policies.
                    </li>
                    <li>
                        f) Develop the Tatum Bank Compliance Risk Matrix and ensure that all applicable
                        Nigerian and International Laws and Regulations and Corporate Ethical policies
                        are identified in the Compliance Risk Matrix.
                    </li>
                    <li>
                    g) Ensure the implementation of Board decisions on Compliance matters.
                    </li>
                    <li>
                        h) Ensure that regulatory changes are effectively implemented by the Bank.
                    </li>
                    <li>
                        i) Co-ordinate and oversee the activities of the Compliance Officers.
                    </li>
                    <li>
                        j) Prepare “Suspicious Transaction Reports” (STR) and renders reports on it to
                        NFIU immediately.
                    </li>
                    <li>
                        k) Maintain a file on all suspicious activity for a period of at least five years.
                    </li>
                    <li>
                        l) Serving as both liaison officer with the CBN and NFIU and a point of contact for
                        all employees on issues relating to money laundering and terrorist financing.
                    </li>
                </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">5.4. The Employees: </span>
                        This Policy applies to all Tatum Bank Limited. staff. Furthermore, all directors, employees,
                        and staff on secondment/outsourced or on internship of the Bank must be aware of the
                        contents of this policy and comply with it. Failure to observe these requirements shall be
                        treated as a serious disciplinary offence, which may result in dismissal and further
                        sanction by the regulatory authorities. It is important for employees to remember that
                        anti money laundering laws apply not only to criminals who try to launder their ill-gotten
                        gains, but also to financial institutions and their employees who knowingly or negligently
                        participate in these transactions. Below are the expectations of this Policy from all staff
                        and management of the Bank:
                    </p>
                    <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        All employees are expected to:
                    </p>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            a) report any suspicious customers/transactions to the Chief Compliance Officer
                            through the established channels of reporting
                        </li>
                        <li>
                            b) not assist a customer knowingly or otherwise in the laundering of funds
                        </li>
                        <li>
                            c) not reveal to a customer that they are the subject of an investigation.
                        </li>
                        <li>
                            d) treat reported suspicious transactions with utmost confidentiality.
                        </li>
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        Staff must not notify any person involved in the transaction that the transaction has been
                        reported, such act shall be considered a deliberate attempt to help the customer evade
                        the law and shall be deemed to have tipped-off the customer. Tipping-off is a criminal
                        offence punishable by law.
                        Tatum Bank Limited employees shall not knowingly provide advice or offer assistance to
                        individuals who attempt to violate or circumvent anti money laundering laws or this
                        manual.
                        Ignorance of the provisions of this manual will not be an acceptable excuse for any
                        breach.
                        If any director or employee is in any doubt about the content or application of this
                        manual, he or she should contact the Chief Compliance Officer for clarification.
                    </p>
                </div>

                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <span className="font-[450] mr-1">
                      5.5. Protection for Employee Reporting Suspected Cases of Money Laundering,
                      Terrorism Financing or Proliferation Financing: 
                    </span>
                    Anyone reporting a suspicion of money laundering or Terrorism Financing activities is
                    protected by law against being sued by the customer for breach of confidentiality and
                    are guaranteed against victimization as a result of making such report.
                </p>
            </div>

          </div>

            <div className="flex flex-col gap-4">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                    6. DEFINITIONS
                </p>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.1. Money Laundering: </span> 
                        Money laundering is generally defined as engaging in acts designed to conceal or
                        disguise the true origin of criminally derived proceeds so that the unlawful proceeds
                        appear to have been derived from legitimate origins or constitute legitimate assets. The
                        Financial Action Task Force (FATF) provided the following definitions of money
                        laundering:
                    </p>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            a) The conversion or transfer of property, knowing it is derived from a criminal
                            offence, for the purpose of concealing or disguising its illicit origin or of
                            assisting any person who is involved in the commission of the crime to evade
                            the legal consequences of his actions.
                        </li>
                        <li>
                            b) The concealment or disguising of the true nature, source, location, disposition,
                            movement, rights with respect to, or ownership of property knowing that it is
                            derived from a criminal offence.
                        </li>
                        <li>
                            c) The acquisition, possession, or use of property knowing at the time of its receipt
                            that it was derived from a criminal offense or from participation in a crime.
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.2. Terrorism: </span> 
                        Terrorism is any activity described by the Terrorism (Prevention and Prohibition) Act 2022
                        to mean an act willfully performed with the intention of furthering an ideology, whether
                        political, racial, or ethnic and which –
                    </p>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            a) May seriously harm or damage a country or an international organization;
                        </li>
                        <li>
                            b) Unduly compels a government or an international organization to perform or
                            abstain from performing any act;
                        </li>
                        <li>
                            c) Seriously intimidates a population.
                        </li>
                        <li>
                            d) Seriously destabilizes or destroys the fundamental political, constitutional,
                            economic or social structures of a country or an international organization ;
                        </li>
                        <li>
                            e) Influences a government or an international organization by intimidation or
                            coercion.
                        </li>
                        <li>
                            f) Violates the provisions of any international treaty or resolution to which Nigeria
                            is a party, subject to the provisions of section 12 of the Constitution of the
                            Federal Republic of Nigeria, 1999
                        </li>
                        <li>
                            g) Involves, causes, or results in –
                            <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                                <li>i. Attack on a person’s life, in the form of grievous bodily harm or death</li>
                                <li>ii. Kidnapping of a person</li>
                                <li>
                                    iii. Destruction of Government or public facility, a transport system, an
                                    infrastructural facility, including national critical information infrastructure, a
                                    fixed platform located on the continental shelf, a public place or private
                                    property, which may likely endanger human life or result in major economic
                                    loss,
                                </li>
                                <li>
                                    iv. the seizure of an aircraft, ship, or other means of public transport or
                                    conveying goods, or the diversion or use of such means of transportation or
                                    conveyance for the purposes of sub-paragraph (iii) of this paragraph,
                                </li>
                                <li>
                                    v. the manufacture, possession, acquisition, transportation, transfer, supply or
                                    use of weapons, including explosives or biological, chemical, radiological or
                                    nuclear weapons (BCRN weapons), as well as research into and
                                    development of BCRN weapons without lawful authority, and the receipt,
                                    possession, use, transfer, alteration, disposal or dispersal of nuclear or other
                                    radioactive material or devices,
                                </li>
                                <li>
                                    vi. the release of dangerous substance, causing of fire, explosions or floods,
                                    the effect of which is to endanger human life,
                                </li>
                                <li>
                                    vii. interference with or disruption of the supply of water, power, or any other
                                    fundamental natural resource, the effect of which is to endanger human life,
                                </li>
                                <li>
                                    viii. the release into the environment or any part thereof, or distribution or
                                    exposure of the public or any part to dangerous, hazardous, nuclear, or
                                    other radioactive or harmful substance, any toxic chemical, microbial or
                                    other biological agent or toxin, the effect of which is to endanger human
                                    life or to provoke substantial damage to property or to the environment,
                                </li>
                                <li>
                                    ix. endangering or engaging in acts likely to endanger the safety of an aircraft,
                                    ship, train or any other means of transportation,
                                </li>
                                <li>
                                    x. the bombing and other acts of violence at airports and other public places,
                                </li>
                                <li>
                                    xi. the disruption of any computer system or the provision of services directly
                                    related to the supply of water, power, communications, infrastructure,
                                    banking or financial services, utilities, transportation, other essential
                                    infrastructure or any other fundamental natural resources, the effect of
                                    which is to endanger human life,
                                </li>
                                <li>
                                    xii. the disruption of the provision of essential emergency services, including
                                    police, civil defence, medical and acts prejudicial to national security or
                                    public safety,
                                </li>
                                <li>
                                    xiii. the propagation and dissemination of information or information materials
                                    in any form or mode calculated to cause panic, evoke violence or intimidate
                                    a government, person or group of persons, or
                                </li>
                                <li>
                                    xiv. an act directed against a nuclear facility, or an act interfering with the
                                    operation of a nuclear facility, where the offender intentionally injury to a
                                    person or substantial damage to property or to the environment by
                                    exposure to radiation or release of radioactive substance, unless the act is
                                    undertaken in conformity with the provisions of existing laws.
                                </li>
                                <li>
                                    A terrorist act includes but is not limited to:
                                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                                        <li>
                                            a) An act which constitutes an offence within the scope of, and as defined in 
                                            one of
                                            the following treaties and documents: Convention for the Suppression of
                                            Unlawful Seizure of Aircraft (1970), Convention for the Suppression of Unlawful
                                            Acts against the Safety of Civil Aviation (1971), Convention on the Prevention
                                            and Punishment of Crimes against Internationally Protected Persons, including
                                            Diplomatic Agents (1973), International Convention against the Taking of
                                            Hostages (1979), Convention on the Physical Protection of Nuclear Material
                                            (1980), Protocol for the Suppression of Unlawful Acts of Violence at Airports
                                            Serving International Civil Aviation, supplementary to the Convention for the
                                            Suppression of Unlawful Acts against the Safety of Civil Aviation (1988),
                                            Convention for the Suppression of Unlawful Acts against the Safety of Maritime
                                            Navigation (1988), Protocol for the Suppression of Unlawful Acts against the
                                            Safety of Fixed Platforms located on the Continental Shelf (1988), and the
                                            International Convention for the Suppression of Terrorist Bombings (1997); and
                                        </li>
                                        <li>
                                            b) Any other act intended to cause death or serious bodily injury to a civilian, 
                                            or to
                                            any other person not taking an active part in the hostilities, in a situation of
                                            armed conflict, when the purpose of such act, by its nature or context, is to
                                            intimidate a population, or to compel a Government or an international
                                            organization to do or to abstain from doing any act.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.2.1. Financing of Terrorism (FT) </span> 
                        Terrorist financing includes the financing of terrorist acts, and of terrorists and
                        terrorist organizations. Terrorist financing offence refers not only to the primary
                        offence or offences, but also to ancillary offences.
                        Any person, group, undertaking or other entity that provides or collects, by any
                        means, directly or indirectly, funds or other assets that may be used, in full or in part,
                        to facilitate the commission of terrorist acts, or to any persons or entities acting on
                        behalf of, or at the direction of such persons, groups, undertakings or other entities
                        can be said to finance terrorism. This includes those who provide or collect funds or
                        other assets with the intention that they should be used or in the knowledge that they
                        are to be used, in full or in part, in order to carry out terrorist acts.
                        Financing of Terrorism (FT) is defined by Section 13 of the Terrorism (Prevention and
                        prohibition) Act 2022 as follows:
                    </p>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            1. Any person or entity who, in or outside Nigeria
                            <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                                <li>
                                    a) Solicits, acquires, provides, collects, receives, possesses, or makes available
                                    funds, property, or other services by any means to
                                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                                        <li>i. Terrorists or</li>
                                        <li>
                                            ii. Terrorist groups, directly or indirectly with the intention or knowledge
                                            or having reasonable grounds to believe that such funds or property
                                            will be used in full or in part, to commit an offence under the Act or in
                                            breach of the provisions of the Act
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    b) Possesses funds intending that it be used or knowing that it will be used,
                                    directly or indirectly, in whole or in part, for the purpose of committing or
                                    facilitating the commission of a terrorist act by terrorist or terrorist groups,
                                    commits an offence under the Act and is liable on conviction to
                                    imprisonment for life.
                                </li>
                            </ul>
                        </li>
                        <li>
                            2. Any person who knowingly enters or becomes involved in an arrangement
                            <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                                <li>
                                    a) which facilitates the acquisition, retention, or control by or on behalf of
                                    another person or terrorist fund by concealment, removal out of jurisdiction,
                                    transfer to a nominee or in any other way or
                                </li>
                                <li>
                                    b) as a result of which funds or other property are to be made available for
                                    the purpose of terrorism or for the benefit of a specified entity or
                                    proscribed organization commits an offence under the Act and is liable on
                                    conviction to life imprisonment
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.2.2. Terrorist organization </span>
                        Terrorist organization refers to any group of terrorists that:
                    </p>
                    <ul className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            a) commits, or attempts to commit terrorist acts by any means, directly or
                            indirectly, unlawfully and willfully.
                        </li>
                        <li>
                            b) participates as an accomplice in terrorist acts.
                        </li>
                        <li>
                            c) organizes or directs others to commit terrorist acts; or
                        </li>
                        <li>
                            d) contributes to the commission of terrorist acts by a group of persons acting with
                            a common purpose where the contribution is made intentionally and with the
                            aim of furthering the terrorist act or with the knowledge of the intention of the
                            group to commit a terrorist act.
                        </li>
                    </ul>
                </div>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <span className="font-[450]">6.3. Proliferation Financing (PF): </span> 
                    Proliferation financing (PF) is the act of providing funds or financial services which are
                    used, in whole or in part, for the manufacture, acquisition, possession, development,
                    export, transport, stockpiling, or use of nuclear, chemical, or biological weapons and their
                    means of delivery in contravention of national laws or international obligations.
                </p>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.3.1. Proliferation Financing (PF) Vulnerabilities: </span> 
                        Some of the business vehicles and entities vulnerable to proliferation financing
                        include the following:  
                    </p>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>a) Correspondence banks and overseas representative institutions.</li>
                        <li>b) Companies and individuals with large cash transactions.</li>
                        <li>c) Dealer in precious metals and stones like gold, and other high-value goods</li>
                        <li>
                            d) Trust and company service providers (including notaries, accountants, and
                            other professionals providing these services)
                        </li>
                        <li>e) Virtual assets service providers</li>
                        <li>f) Players in the maritime sector</li>
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        These businesses can be exploited for illegitimate businesses like cyber attacks, drugs
                        trafficking, and the export of arms and natural resources.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.3.2. Some Indicators/Red-Flags for Proliferation Financing: </span> 
                        There are numerous indicators that may assist to identify potential Proliferation
                        Financing activity. They can be related to the customers; their transactions and trade
                        patterns as follows:
                    </p>
                    <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">Customer Profile Indicators:</p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            Customer provides vague or incomplete information about their proposed
                            trading activities. Customer is reluctant to provide additional information about
                            their activities when requested.
                        </li>
                        <li>
                            During subsequent stages of due diligence, a customer, particularly a trading
                            entity, its owners, or senior managers, appear in sanctioned lists or negative
                            news, e.g. past ML schemes, fraud, other criminal activities, or ongoing or past
                            investigations or convictions, including appearing on a list of denied persons for
                            export control regimes;
                        </li>
                        <li>
                            The customer is a person connected with a country of proliferation or diversion
                            concern, e.g. through business or trade relations;
                        </li>
                        <li>
                            The customer is dealing with dual-use goods or goods subject to export control
                            or complex equipment for which he/she lacks technical background, or which is
                            incongruent with their stated line of activity.
                        </li>
                        <li>
                            A customer engages in complex trade deals involving numerous third-party
                            intermediaries in lines of business that do not accord with their stated business
                            profile established at on-boarding.
                        </li>
                        <li>
                            A customer or counter-party declared to be a commercial business, conducts
                            transactions that suggest that they are acting as a money-remittance business
                            or a pay-through.
                        </li>
                    </ul>
                    <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        Account and Transaction Activity Indicators:
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            The originator or beneficiary of a transaction is a person or an entity ordinarily
                            resident of or domiciled in a country of proliferation or diversion concern (i.e.
                            DPRK, Iran and others that may be designated from time to time).
                        </li>
                        <li>
                            Account holders conduct transactions that involve items controlled under dualuse
                            or export control regimes, or the account holders have previously violated
                            requirements under dual-use or export control regimes.
                        </li>
                        <li>
                            Accounts or transactions involve possible companies with opaque ownership
                            structures, front companies, or shell companies. Countries or the private sector
                            may identify more indicators during the risk assessment process, such as long
                            periods of account dormancy followed by a surge of activities.
                        </li>
                        <li>
                            Demonstrating links between representatives of companies exchanging goods,
                            i.e. same owners or management, same physical address, IP address or
                            telephone number, or their activities may be coordinated;
                        </li>
                        <li>Account holder conducts financial transaction in a circuitous manner.</li>
                        <li>
                            Account activity or transactions where the originator or beneficiary of associated
                            financial institutions is domiciled in a country with weak implementation of
                            relevant UNSCR obligations and FATF Standards or a weak export control
                            regime (also relevant to correspondent banking services).
                        </li>
                        <li>
                            Customer of a manufacturing or trading firm wants to use cash in transactions
                            for industrial items or trade transactions more generally. For financial
                            institutions, the transactions are visible through sudden influxes of cash deposits
                            to the entity’s accounts, followed by cash withdrawals.
                        </li>
                        <li>
                            Transactions are made based on “ledger” arrangements that obviate the need
                            for frequent international financial transactions. Ledger arrangements are
                            conducted by linked companies that maintain a record of transactions made on
                            each other. Occasionally, these companies will make transfers to balance these
                            accounts.
                        </li>
                        <li>
                            Customer uses a personal account to purchase industrial items that are under
                            export control, or otherwise not associated with corporate activities or
                            congruent lines of business.
                        </li>
                    </ul>
                    <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        Maritime Sector Indicators:
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            A trade entity is registered at an address that is likely to be a mass registration
                            address, e.g. high-density residential buildings, post-box addresses, commercial
                            buildings or industrial complexes, especially when there is no reference to a
                            specific unit.
                        </li>
                        <li>
                            The person or entity preparing a shipment lists a freight forwarding firm as the
                            product’s final destination.
                        </li>
                        <li>
                            The destination of a shipment is different from the importer’s location.
                        </li>
                        <li>
                            Inconsistencies are identified across contracts, invoices, or other trade
                            documents, e.g. contradictions between the name of the exporting entity and
                            the name of the recipient of the payment; differing prices on invoices and
                            underlying contracts; or discrepancies between the quantity, quality, volume, or
                            value of the actual commodities and their descriptions;
                        </li>
                        <li>Shipment of goods have a low declared value vis-a-vis the shipping cost.</li>
                        <li>
                            Shipment of goods incompatible with the technical level of the country to which
                            it is being shipped, e.g. semiconductor manufacturing equipment being shipped
                            to a country that has no electronics industry.
                        </li>
                        <li>
                            Shipment of goods is made in a circuitous fashion (if information is available),
                            including multiple destinations with no apparent business or commercial
                            purpose, indications of frequent flags hopping, or using a small or old fleet.
                        </li>
                        <li>
                            Shipment of goods is inconsistent with normal geographic trade patterns, e.g.
                            the destination country does not normally export or import the goods listed in
                            trade transaction documents.
                        </li>
                        <li>
                            Shipment of goods is routed through a country with weak implementation of
                            relevant UNSCR obligations and FATF Standards, export control laws or weak
                            enforcement of export control laws.
                        </li>
                        <li>
                            Payment for imported commodities is made by an entity other than the
                            consignee of the commodities with no clear economic reasons, e.g. by a shell or
                            front company not involved in the trade transaction.
                        </li>
                    </ul>
                    <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        Trade Finance Indicators
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            Where, before account approval, the customer requests a letter of credit for
                            trade transaction for shipment of dual-use goods or goods subject to export
                            control.
                        </li>
                        <li>
                            Dual-use goods are items that can be used both for civilian and military
                            applications. These types of goods are heavily regulated because they can be
                            classified for civilian use and then transformed for military purposes, or worse,
                            used for terrorism.
                        </li>
                        <li>
                            Examples of dual-use goods and technology include global positioning satellites,
                            missiles, nuclear technology, chemical and biological tools, night vision
                            technology, thermal imaging, some models of drones, aluminum pipes with
                            precise specifications or certain kinds of ball bearings
                        </li>
                        <li>
                            Lack of full information or inconsistencies are identified in trade documents and
                            financial flows, such as names, companies, addresses, final destination, etc.
                        </li>
                        <li>
                            Transactions include wire instructions or payment details from or due to parties
                            not identified on the original letter of credit or other documentation.
                        </li>
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <span className="font-[450]">6.3.3. Controls: </span>
                        Tatum Bank shall apply the following due diligence process in line with the existing
                        AML/CFT/CPF framework:
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            Strong and detailed customer on-boarding procedures and ongoing monitoring
                            processes. This would be done by identifying customer and their transactions
                            vulnerabilities.
                        </li>
                        <li>
                            A robust and proper sanctions screening system. The screening must be
                            regularly conducted through a proper screening system and flexible screening
                            procedures.
                        </li>
                        <li>
                            Prohibiting banking relationships with shell or front companies, dummy
                            accounts, middlemen, and other fraudulent/sham intermediaries.  
                        </li>
                        <li>
                            Staff training, effective risk management procedures, and a high standard of
                            compliance culture.
                        </li>
                        <li>
                            Compliance with regulatory bodies' guidelines on proliferation financing risk
                            assessment and mitigation that are issued from time to time.
                        </li>
                        <li>
                            Review of the licenses backing the import / export of dual use goods to ensure
                            that the Bank is participating in lawful and globally compliant transactions.
                        </li>
                        <li>
                            The bank shall maintain a database of all identified and reported designated
                            persons and entities, and their related entities for cross-referencing and
                            checking when a new account/customer is being on-boarded.
                        </li>
                    </ul>
                    <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        The bank shall perform the following when any case of proliferation financing is
                        confirmed or strongly suspected:
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                        <li>
                            Freeze without delay the funds or other assets of the company or individual with Bank.
                        </li>
                        <li>
                            Ensure that no funds and other assets are made available, directly or indirectly,
                            to or for the benefit of, any person or entity designated by, or under the
                            authority of, the United Nations Security Council under Chapter VII of the
                            Charter of the United Nations.
                        </li>
                        <li>
                            File Suspicious Transaction Report STR or Suspicious Activity Report (SAR) to the
                            NFIU as appropriate 
                        </li>
                    </ul>
                </div>

            </div>

          <div ref={contentRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              7. AML/CFT/CPF LAWS, ANCILLARY LEGISLATION AND ENFORCEMENT AGENCIES IN NIGERIA
            </p>
            <div className="flex flex-col gap-1">
              <p className=" font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                7.1. AML/CFT/CPF Laws and Ancillary Legislation in Nigeria  
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  <span className="font-[450]"> a) Economic and Financial Crimes Commission EFCC (Establishment) Act 2004 </span>
                  This Act establishes the Economic and Financial Crimes Commission (EFCC) and the
                  Nigerian Financial Intelligence Unit (NFIU). These bodies are charged with the
                  responsibility of investigating financial crimes and co-coordinating the fight against
                  money laundering activities.
                </li>
                <li>
                  <span className="font-[450]"> b) Terrorism (Prevention and Prohibition) Act (TPPA) 2022 </span>
                  This Act defines Terrorism and criminalizes all acts of terrorism including its financing
                  while specifying punishment for offenders.
                </li>
                <li>
                  <span className="font-[450]"> c) Money Laundering (Prevention and Prohibition) Act (MLPPA) 2022 </span>
                  This Act prohibits laundering of proceeds of a crime or an illegal act. Provides for the
                  responsibilities of Banks and other Financial Institutions regarding Anti-Money
                  Laundering and Law Enforcement Agents responsibilities. It also provides appropriate
                  penalties for its violation.
                </li>
                <li>
                  <span className="font-[450]"> d) Advance Fee Fraud and Other Related Offences Act 2006 </span>
                  This Act prohibits fraud and provides penalties for its violation. The Act places the
                  responsibility of proper due diligence on Banks and their employees.
                </li>
                <li>
                  <span className="font-[450]"> e) National Drug Law Enforcement Agency (NDLEA) Act 1989 </span>
                  This Act prohibits the laundering of proceeds obtained from Narcotics, drug trafficking
                  and related activities.
                </li>
                <li>
                  <span className="font-[450]"> f) Banks And Other Financial Institutions Act (BOFIA) 2020 </span>
                  This Act regulates the business of Banking and finance in Nigeria.
                </li>
                <li>
                  <span className="font-[450]"> g) Failed Banks (Recovery of Debts) And Financial Malpractices In Banks Act. 2004. </span>
                  An Act to provide for the recovery of debts owed to failed Banks and for the trial of
                  offences relating to financial malpractices in Banks and other financial institutions.
                </li>
                <li>
                  <span className="font-[450]"> h) Central Bank of Nigeria (CBN) Act 2007 </span>
                  This Act empowers the Central Bank of Nigeria to provide Regulations which are binding
                  on all banks in Nigeria, including such regulation and guidelines relating to Anti-
                  Money Laundering and Countering Terrorism Finance. The CBN AML/CFT/CPF
                  (Administrative Sanctions) Regulations, 2023 and CBN AML/CFT Regulation, 2022 (as
                  amended) are products of the empowerment of the CBN by this Act.
                </li>
                <li>
                  <span className="font-[450]"> i) Investments And Securities Act (ISA) 2007 </span>
                  This Act empowers the Securities and Exchange Commission (SEC) to provide
                  Regulations which are binding on all Capital Market Operators in Nigeria, including such
                  regulations and guidelines relating to Anti-Money Laundering and Countering Terrorism
                  Finance. The SEC CAPITAL MARKET OPERATORS AML/CFT Regulation, 2022 is a product
                  of the empowerment of SEC by this Act.
                </li>
                <li>
                  <span className="font-[450]"> 
                    j) The Nigerian Foreign Exchange (Monitoring and Miscellaneous Provisions) Act 1995: 
                  </span>
                  The Act provides for the monitoring and supervision of transactions conducted in the
                  Nigerian foreign exchange market and other connected matters.
                </li>
                <li>
                  <span className="font-[450]"> 
                   k) The Independent Corrupt Practices and Other Related Offences Commission (ICPC) Act 2000 
                  </span>
                  The ICPC receives and investigates complaints from members of the public on
                  allegations of corrupt practices and prosecute the offenders.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                7.2. AML/CFT/CPF Laws Regulatory and Enforcement Institutions in Nigeria  
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The institutions that enforce compliance with the Acts are:  
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li> a) Central Bank of Nigeria (CBN)</li>
                <li> b) National Drug Law Enforcement Agency (NDLEA).</li>
                <li> c) The Nigerian Financial Intelligence Unit (NFIU)</li>
                <li> d) The Nigeria Police Force (NPF)</li>
                <li> e) The Economic and Financial Crimes Commission (EFCC)</li>
                <li> f) Nigeria Deposit Insurance Corporation (NDIC)</li>
                <li> g) Securities and Exchange Commission (SEC)</li>
                <li> h) The Independent Corrupt Practices and Other Related Offences Commission (ICPC)</li>
                <li> i) The Nigeria Security and Civil Defence Corps (NSCDC)</li>
                <li> j) The Department of State Services (DSS)</li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The Bank shall relate with the above institutions in line with the laws setting them up, to
                the extent of the powers granted them by these laws.
              </p>
            </div>
          </div>

          <div ref={partyRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              8. REPORTING REQUIREMENTS
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Prescribed reports shall be rendered to the appropriate regulatory and investigative agencies,
                using the prescribed format at the frequencies prescribed by the Laws and Regulations within
                the specified deadlines. The Compliance Division shall ensure relevance, accuracy,
                completeness and timeliness in preparation and rendition of all reports prescribed by
                enabling legislation and regulations:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li> a) CBN AML/CFT Regulations 2022.</li>
                <li> b) Money Laundering (Prevention and Prohibition) Act 2022.</li>
                <li> c) Terrorism (Prevention and Prohibition) Act 2022.</li>
                <li> d) SEC AML/CFT/CPF Rules and Regulations 2022.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The duties of Banks with respect to reporting are clearly stated in Sections 3, 7 and 11 of the
                Money Laundering (Prevention and Prohibition) Act 2022. Under the Money Laundering
                (Prevention and Prohibition) Act 2022, Banks are required to make three reports namely:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li> 
                  a) Section 3 – Duty to report international transfer of funds and securities of value in
                  excess of US$10,000 or its equivalent.
                </li>
                <li> 
                  b) Section 7 – Special surveillance of certain transactions (Suspicious Transactions) See
                  Appendix V for various types of suspicious transactions.
                </li>
                <li> 
                  c) Section 11– Mandatory disclosure by financial institutions with a threshold of N5m
                  and N10m for an individual and corporate body respectively and
                </li>
                <li> d) All such reports as may be prescribed by respective regulators from time to time.</li>
              </ul>
            </div>
          </div>

          <div ref={disclaimerRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              9. KNOW YOUR CUSTOMER (KYC) AND CUSTOMER IDENTIFICATION PROGRAMME (CIP)
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
              The Bank’s reputation and integrity would be protected by reducing the likelihood of it being
              used, knowingly or unknowingly, for financial crimes. Observing the KYC procedures
              diligently would greatly reduce this likelihood of being accessory for Money Laundering,
              Terrorism Financing and Proliferation Financing. These KYC procedures are designed to
              ensure that the client is who he says he is and to know enough about the intended
              customer’s business with a view to proactively spot, investigate and if necessary, report
              abnormal activity.
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.1. The General Principle of Know-Your Customer (KYC) and Customer Identification
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                The emphasis here is on obtaining adequate customer identification before entering into
                any business relationship, for instance, opening an account or providing any other service.
                In line with the provisions of the Bank’s KYC Policy, above laws and regulations, the Bank
                shall always determine the true identity of all customers requiring our services. The
                following must be observed in dealing with customers:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  a) We shall not conduct business transactions with customers who fail to provide
                  evidence of their identity. Generally, Tatum Bank will not establish a business
                  relationship until the identity of the potential customer is satisfactorily
                  established.
                </li>
                <li>
                  b) Where a potential customer declines to provide adequate account initiation
                  information, the relationship will not be established, and any relationship
                  already established will be terminated and reported to the NFIU.
                </li>
                <li>
                  c) Customer’s Bank Verification Number (BVN) and National Identification Number
                  (NIN) must be provided before account opening can be considered for such
                  prospective customer. Any intending customer, for the purpose of Account
                  opening must provide his Bank Verification Number (BVN) and National
                  Identification Number (NIN) which must be verified before an account can be
                  opened for the customer. However, if the customer is opening a Tier one
                  account, either of the two i.e., BVN or NIN suffices.
                </li>
                <li>
                  d) No special named account (i.e. an account using a pseudo / fictitious name)
                  numbered account or anonymous account shall be opened by the Bank. The
                  actual name of the customer must be obtained and used on all accounts.
                </li>
                <li>
                  e) Any means of identification provided by a customer for the purpose of opening
                  an account with the Bank, shall be verified and evidence of verification shall be
                  retained in the Customer’s file.
                </li>
                <li>
                  f) The means of identification of any person authorizing financial transactions on
                  behalf of the customer shall be obtained and verified using available reliable
                  means.
                </li>
                <li>
                  g) Reasonable measures shall be taken to obtain information about the true
                  identity of the person on whose behalf a relationship is established or an
                  account is opened or a significant transaction conducted (i.e. beneficial owners)
                  if there are any doubts as to whether the customer is acting on its own behalf.
                </li>
                <li>
                  h) All customers are required to supply identification information; the Bank shall
                  screen customer identification information against OFAC, NFIU, UN lists etc. of
                  suspected terrorists.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.2. Other Customer Information
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                Commensurate with the assessment of the money laundering risks posed by the
                customer’s expected use of products and services, it is Tatum Bank Limited policy and
                procedure to determine and document at the time of the establishment or at the
                opening of an account:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li> a) The customer’s source of funds</li>
                <li> b) The customer’s source of income and assets</li>
                <li>
                  c) The nature and extent of the customer’s expected use of its products and
                  services (i.e., a transaction profile) or the customer’s investment objectives.
                </li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                The information about a customer obtained, at the time of the establishment of a
                relationship or the opening of an account constitutes a “customer profile”. Tatum Bank
                Limited shall have policies and procedures for updating customer profiles and for
                confirming information provided by customers, commensurate with the assessment of
                the money laundering risks.
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                Tatum Bank Limited has an established, documented, and maintained written Customer
                Identification Program (or CIP). Certain minimum customer identification information is
                required from each prospective customer of the Bank. The identities of the customers are
                verified using a risk-based approach. All records of customer identification information,
                the verification methods used, and results obtained are kept.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.3. Identifying the Customer
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                Generally, Tatum Bank will not establish a business relationship until the identity of the
                potential customer is satisfactorily established. Where a potential customer declines to
                provide adequate account initiation information, the relationship will not be established,
                and any relationship already established will be terminated and reported to NFIU.
                Tatum Bank Limited shall establish the identity of the customer and verify the identity
                information before the customer acceptance process is considered complete.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.4. Required Customer Information
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                In line with CBN three-tiered Know Your Customer (KYC) guidelines, the following
                minimum requirements must be obtained before establishing relationship with
                customers:
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  A. Bank Verification Number (BVN):
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Bank Verification Number (BVN) is a biometric identification Number implemented by
                  the Central Bank of Nigeria as part of its cashless policy. It is an initiative of the CBN to
                  give every customer in the Nigerian banking system a unique identification number that
                  can be verified across all banks in Nigeria. It aims at promoting KYC, complement
                  customer identification requirement to curb and check illegal and fraudulent banking
                  transactions in the Nigeria banking system.
                  Every prospective customer is required to present his or her eleven-digit verifiable Bank
                  Verification Number (BVN) which must be verified before an account can be opened for
                  such customer.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  B. Minimum Requirements for Low Value Accounts (TIER 1):
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>i. Bank Verification Number (BVN) or National Identification Number (NIN)</li>
                  <li>ii. Passport photograph</li>
                  <li>iii. Full Name of Customer</li>
                  <li>iv. Place of Birth</li>
                  <li>v. Date of Birth</li>
                  <li>vi. Gender</li>
                  <li>vii. Address</li>
                  <li>viii. Telephone number(s)</li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  The information supplied by the customer shall not be subjected to verification or
                  evidence sought to substantiate same.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  C. Minimum Requirement for Medium Value Accounts (TIER 2)
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>i. Bank Verification Number (BVN)</li>
                  <li>ii. National Identification Number (NIN)</li>
                  <li>iii. Passport photograph</li>
                  <li>iv. Full Name of customer</li>
                  <li>v. Place of Birth</li>
                  <li>vi. Date of Birth</li>
                  <li>vii. Gender</li>
                  <li>viii. Address (with document authenticating the address)</li>
                  <li>ix. Telephone number(s)</li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  The information supplied by the customer shall be subjected to verification and customer
                  required to provide evidence to substantiate same.
                  Please note that both Low and Medium Value accounts are strictly Savings accounts only.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  D. Minimum Requirements for High Value Accounts (Tier 3)
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>i. Bank Verification Number (BVN)</li>
                  <li>ii. Full Name of customer</li>
                  <li>iii. Passport photograph</li>
                  <li>iv. Place of Birth</li>
                  <li>v. Date of Birth</li>
                  <li>vi. Gender</li>
                  <li>vii. Address</li>
                  <li>viii. Telephone number(s)</li>
                  <li>ix. Current utility bill of place of residence (e.g. electricity, telephone, water etc.).</li>
                  <li>x. Two satisfactory references as applicable to account type.</li>
                  <li>xi. A valid Residence permit (for foreigners only).</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.5. Minor Accounts
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                When opening accounts for minors (customers below 18 years of age) the identification
                procedure is mainly on the guardian opening the account and it should be as listed
                above. However, the birth certificate of the minor would be obtained alongside the
                documentations of the guardian.
                Only savings accounts would be opened for Minors with strict monitoring for possible
                red flags. See Appendix I for list of KYC identification information that Tatum Bank
                requires.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.6. High Risk Customers
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  At Tatum Bank, particular attention is focused on those customers identified as having a
                  higher risk profile. Detailed guidelines for risk assessment and profiling of customers is
                  as contained in the ML/FT/PF Risk Management section of the Enterprise Risk
                  Management Framework of the Bank. It is expected that additional inquiries are made,
                  and information obtained in respect of these customers to include the following:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>
                    i. Evidence of an individual's permanent address sought through a credit
                    reference agency search, or through independent verification by home visits.
                  </li>
                  <li>ii. Personal reference by an existing customer of a Bank in Nigeria.</li>
                  <li>iii. Prior bank reference and contact with the Bank regarding the customer.</li>
                  <li>iv. Source of wealth; and</li>
                  <li>v. Verification of employment, public position held (where appropriate).</li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Our customer acceptance policy is not restrictive and does not deny access to the
                  general public to banking services, especially for people who are financially or socially
                  disadvantaged. Before establishing relationship with prospective customers, the
                  relationship manager to the customers is responsible for carrying out a formal
                  assessment of risk on the accounts and classifying them as either high, medium or low
                  risk. Refer to Appendix II for examples of High-Risk Customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.7. Politically Exposed Persons (PEP)
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Politically Exposed Persons (PEPs) are individuals who are or have been entrusted with
                  prominent public functions both in foreign countries as well as in Nigeria. Examples of
                  PEPs include, but are not limited to;
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>i. Heads of State or government.</li>
                  <li>ii. State Governors.</li>
                  <li>iii. Legislators</li>
                  <li>iv. Local government Chairmen.</li>
                  <li>v. Senior politicians.</li>
                  <li>vi. Senior government, judicial or military officials.</li>
                  <li>vii. Senior executives of State-owned corporations.</li>
                  <li>viii. Important political party officials:</li>
                  <li>ix. Family members or close associates of PEPs; and</li>
                  <li>x. Members of Royal Families.</li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  PEPs who are or have been entrusted with prominent public position in Nigeria are
                  known as “Domestic PEPs”. PEPs who are or have been entrusted with prominent public
                  position in any other foreign jurisdiction are known as “Foreign PEPs”. PEPs who are or
                  have been entrusted with the management or any prominent function within an
                  international organization are known as “International Organizations PEPs”
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Tatum Bank shall, in addition to performing CDD measures, put in place appropriate risk
                  management systems to determine whether a potential customer or existing customer or
                  the beneficial owner is a politically exposed person.
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Tatum Bank requires senior management approval before establishing business
                  relationships with PEPs. The Bank also renders monthly returns on their transactions with
                  PEPs to the CBN and NFIU in line with Central Bank of Nigeria AML/CFT/CPF Regulations.
                  Senior Management for the purposes of approving PEP accounts is defined to include a
                  person occupying the office of a Department Head and above.
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Where an existing customer has been accepted or has an on-going relationship with
                  Tatum Bank and the customer or beneficial owner is subsequently found to be or
                  becomes a PEP, then senior management approval must be obtained in order to
                  continue the business relationship.
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Tatum Bank takes reasonable measures to establish the source of wealth and the sources
                  of funds of customers and beneficial owners identified as PEPs and report all anomalies
                  immediately to the NFIU in line with the MLPPA 2022 and CBN AML/CFT/CPF Regulations
                  2022.
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Tatum Bank conducts enhanced and ongoing monitoring of all PEPs relationships. It is
                  the policy of Tatum Bank to classify all “Domestic PEPs” as high risk and a thorough
                  review done on “Foreign PEPs” and “International Organizations PEPs” to determine
                  appropriate risk classification. The Bank notes however that the status of ‘PEP’ is not an
                  indication of the customer being a criminal.
                  Refer to Appendix VI for account opening procedure for PEPs.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.8. Correspondent and Agency Banking
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Correspondent banking is the provision of banking services by one Bank (the
                  correspondent Bank) to another Bank (the respondent bank). Large international Banks
                  typically act as correspondents for thousands of other banks around the world.
                  Respondent Banks may be provided with a wide range of services, including cash
                  management (e.g. interest -bearing accounts in a variety of currencies), international wire
                  transfers of funds, cheque clearing and foreign exchange services.
                  It is the Policy of Tatum Bank Limited. in relation to correspondent banking and other
                  similar relationships such as Agency Banking, in addition to performing the normal CDD
                  measures, to:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>
                    a) Obtain sufficient information about a respondent institution to understand fully
                    the nature of its business; and
                  </li>
                  <li>
                    b) determine from publicly available information the reputation of the institution
                    and the quality of supervision, including whether or not it has been subject to a
                    money laundering or terrorist financing investigation or regulatory action.
                  </li>
                  <li>
                    c) Assess the respondent institution ‘s AML/CFT/CPF - controls and ascertain that
                    they are in compliance with FATF standards.
                  </li>
                  <li>
                    d) Document the respective AML/CFT/CPF responsibilities of such institution and
                    obtain approval from executive management before establishing such
                    relationships.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.9. Failure to Provide Information
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                If a potential or existing customer either refuses to provide the information described
                above when requested, or appears to have intentionally provided misleading information,
                the Bank will not conduct any further money service transactions with that customer. In
                either case, the Chief Compliance Officer will be notified for the purpose of determining
                whether the Bank should report the situation to NFIU i.e., filing of Suspicious Activities or
                Transaction Reporting.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.10. Verification of Information
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Based on the risk, and to the extent reasonable and practicable, we will ensure that we
                  have a reasonable belief that we know the true identity of our customers by using riskbased
                  procedures to verify and document the accuracy of the information we get about
                  our medium and high value customers. In verifying customer identity, we will analyze
                  any logical inconsistencies in the information we obtained.
                  The Bank shall verify customer identity through documentary evidence, nondocumentary
                  evidence, or both. We shall use documents to verify customer identity
                  when appropriate documents are available. In light of the increased instances of identity
                  fraud, we shall supplement the use of documentary evidence by using other nondocumentary
                  means whenever possible. In analyzing the verification information, we shall
                  consider whether there is a logical consistency among the identifying information
                  provided, such as the customer's name, street address, telephone number (if provided)
                  and date of birth.
                  Appropriate documents for verifying the identity of customers include, but are not
                  limited to, the following:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>
                    a) For an individual, an unexpired government-issued identification evidencing
                    nationality.
                  </li>
                  <li>
                    b) For an entity, other than an individual, documents showing the existence of the
                    entity, such as certified articles of incorporation, a government-issued business
                    license, a partnership agreement, or a trust instrument.
                  </li>
                </ul>

              </div>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  We understand that we are required to take steps to determine whether the document
                  that the customer has provided to us for identity verification has been validly issued.
                  We shall use any or all of the following methods for identity verification:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>a) Contacting a customer- Visitation</li>
                  <li>b) Checking references with financial institutions.</li>
                  <li>c) Checking databases of the Issuers of the identification documents.</li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  We shall verify the information within a reasonable time before a transaction is
                  completed. Depending on the nature of the requested transaction, we may refuse to
                  complete a transaction before we have verified the information, or in some instances
                  when we need more time, we may, pending verification, restrict the types of transactions
                  or amounts of transactions. If we find suspicious information that indicates possible
                  money laundering or terrorist financing activity, or proliferation financing, the Bank’s
                  Chief Compliance Officer shall file Suspicious Transaction Report in accordance with
                  MLPPA 2022.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.10.1. Lack Of Verification
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  When we cannot form a reasonable belief that we know the true identity of a
                  customer, we shall do the following:
                </p>
                <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>Not perform any money service transaction;</li>
                  <li>File STR in accordance with MLPPA 2022 and NFIU Guidelines</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.10.2. High Risk Countries
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  The Bank shall take care when doing business with third parties located in countries
                  with a history of supporting terrorism; or bases for drug production/distribution; or,
                  suffering from civil unrest/civil war.
                  We shall apply enhanced due diligence, proportionate to the risks, to business
                  relationships and transactions with natural or legal persons (including financial
                  institutions) from countries for which the FATF raised such concerns.
                  Other countermeasures to take include:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>
                    a) limiting business relationships or financial transactions with the high-risk
                    countries or with persons located in the country concerned;
                  </li>
                  <li>
                    b) reviewing and amending or, if necessary, terminating the agreement or
                    arrangement governing the correspondent banking or business relationships
                    with Financial Institutions or other counterpart institutions in the country
                    concerned;
                  </li>
                  <li>
                    c) prohibiting relying on third parties located in the country concerned to conduct
                    elements of the due diligence process; and
                  </li>
                  <li> d) conducting any other measures as may be specified by the CBN.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.11. Record Keeping
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  We shall document our verification, including all identifying information provided by a
                  customer, the methods used and results of verification, and the resolution of any
                  discrepancy in the identifying information. We shall keep records containing a
                  description of any document that we relied on to verify customer's identity, noting the
                  type of document, any identification number contained in the document, the place of
                  issuance, and if any, the date of issuance and expiration date.
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li>
                    a) With respect to non-documentary verification, we will retain documents that
                    describe the methods and the results of any measures we took to verify the
                    identity of a customer.
                  </li>
                  <li>
                    b) We shall maintain records of all identification information for as long as the
                    relationship subsists and for at least five years after the closure of the accounts
                    or the severance of relations with the customer.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.12. Shell Banks
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Shell Banks are incorporated in a jurisdiction in which it has no physical presence, and
                  which is unaffiliated with a regulated financial group. It is our policy at Tatum Bank
                  Limited that:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> a) We shall not engage or have any dealings with shell banks.</li>
                  <li>
                    b) We shall take all necessary measures to satisfy ourselves that respondent
                    financial institutions in a foreign country do not permit their accounts to be
                    used by shell banks.
                  </li>
                  <li>
                    c) Where a bank with which the Bank already has a correspondent banking
                    relationship is found to be engaged in a similar relationship with a shell bank,
                    such correspondent banking relationship with the foreign bank shall be severed,
                    the severance shall be documented, and the relationship discontinued forthwith.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.13. On-going Know Your Customer (KYC) and Customer Due Diligence (CDD)
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Tatum Bank Limited will conduct on-going KYC and Customer due diligence on all
                  customers with which we have business relationship, including:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) Transaction’s scrutiny: Scrutinizing transactions done through the customer’s
                    account(s) throughout the course of banking relationship, to ensure that such
                    transactions being conducted are consistent with the Bank’s knowledge of the
                    customer, his business and risk profile, including where necessary, the source of
                    funds.
                  </li>
                  <li>
                    b) Customer Record update: As part of the "ongoing customer due diligence"
                    obligations, the Bank shall has determined when it is necessary to collect further
                    KYC information, update or verify existing KYC information for the purpose of
                    ensuring that documents, data or information collected under the CDD process
                    is kept up-to-date and relevant, by undertaking reviews of existing records, for
                    all customers based on their risk profiling as follow:
                  </li>
                </ul>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    <span className="font-[450]">i. Low Risk Customers: </span>
                    All the customers profiled as having low Money Laundering and Terrorism
                    Financing risk shall have their KYC information updated every three years;
                  </li>
                  <li> 
                    <span className="font-[450]">ii. Medium Risk Customers: </span>
                    All the customers profiled as having medium Money Laundering and Terrorism
                    Financing risk shall have their KYC information updated every eighteen
                    months.
                  </li>
                  <li> 
                    <span className="font-[450]">iii. High Risk Customers: </span>
                    All the customers profiled as having high Money Laundering and Terrorism
                    Financing risk shall have their KYC information updated annually or upon the
                    attainment of this risk category by such customer.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                9.13.1. Modalities for on-going Due Diligence
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  To ensure that the on-going due diligence is consistent and meets objective of
                  carrying it out, the following shall be considered in implementing this:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) The customer Data update and KYC form designed for this purpose shall be
                    administered on the qualifying customers.
                  </li>
                  <li>
                    b) A current valid means of identification must be obtained from the customer,
                    if the one earlier obtained as expired.
                  </li>
                  <li> c) Customer address verification/visitation must be done</li>
                  <li> 
                    d) Where during the data collection and update it is discovered that a
                    customer’s risk category has changed, such customer must be moved to the
                    new risk category and appropriate information and documentation,
                    including approvals obtained.
                  </li>
                  <li> 
                    e) All document obtained during the ongoing due diligence and KYC update
                    shall be filed in the customers’ files.
                  </li>
                </ul>
              </div>
            </div>
          
          </div>

          <div ref={limitationRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              10. CYBERCRIME THREATS AND CONTROLS
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Cybercrime is broadly defined as any illegal activity that involves a computer, another digital
              device, or a computer network. Cybercrime includes common cybersecurity threats like social
              engineering, software vulnerability exploits, and network attacks.
              Criminals exploit computer systems and online financial services to perpetrate money
              laundering, fraud and other crimes. In a data-driven financial landscape, cybercrime has
              emerged as a significant concern.
              The threat posed by cybercrime money laundering methodologies has been aggravated by
              the Covid-19 pandemic. With an increase in online financial activity and changes in
              customer’s behaviour, criminals have been able to target vulnerable individuals and
              institutions more easily and they have greater opportunities to derive profits from online
              fraud and theft and, with that, a greater need to conceal the source of their illegal funds.
              Computers and computer systems offer money launderers a degree of anonymity and the
              opportunity to move illegal funds quickly between accounts while avoiding the customer due
              diligence and transaction monitoring checks that conventional AML/CFT/CPF systems would
              normally impose.
              Cybercrime is considered a money laundering predicate offence in the sense that it generates
              illegal proceeds that need to be disguised by laundering before they can be entered into the
              legitimate financial system. The European Union’s Anti-Money Laundering Directive -(AMLD)
              codifies this by including cybercrime in its list of money laundering predicate offences,
              joining existing predicate offences like human trafficking, drug trafficking, counterfeiting, and
              theft.
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                10.1. Cybercrime Red Flags
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Cybercrimes often exhibit ‘red flag’ characteristics that can aid banks in detecting and
                  preventing money laundering. These red flags include:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) Unusual transactional behavior such as suddenly increased frequencies or
                    volumes of online transactions.
                  </li>
                  <li>
                    b) Online transactions involving parties located in high risk countries
                  </li>
                  <li> 
                    c) Recently opened online accounts that receive large deposits or conduct large
                    transactions that are inconsistent with the customer’s profile.
                  </li>
                  <li> 
                    d) Correspondence sent to or from customers that indicate phishing attempts, for
                    example, frequent misspellings in text of correspondence, or suspicious address
                    credentials.
                  </li>
                  <li> e) Email or social media solicitations for fraudulent charity donations.</li>
                  <li>
                    f) Charitable organizations that do not have in-depth history or cannot be
                    independently verified as legitimate organizations.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                10.2. Cybercrime Controls
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  To ensure that Tatum Bank is not used as conduit to launder the proceeds of cybercrime,
                  the under-listed controls are put in place:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) Customer due diligence: Since cyber-criminals often exploit the anonymity of
                    online financial services, suitable due diligence to establish and verify customer
                    identities and the nature of the business in which they are engaged should be
                    undertaken in line with the Bank’s normal due diligence procedures.
                  </li>
                  <li>
                    b) Transaction monitoring: Cybercrimes often involve the rapid transfer of illegal
                    funds to different accounts in locations around the world. With that in mind,
                    monitoring customers’ transactions for indications of attempts to launder
                    money is key.
                  </li>
                  <li> 
                    c) Sanctions screening: All customers and related parties must be screened against
                    relevant international sanctions and watch lists such as the OFAC Sanctions List
                    and the UNSC Consolidated List.
                  </li>
                  <li> 
                    d) Developed a Cyber Security Framework and adopted a defense-in-depth
                    approach that cover Information / cybersecurity practices, processes and
                    infrastructure.
                  </li>
                </ul>
              </div>
            </div>
            
          </div>

          <div
            ref={indemnificationRef}
            className="flex gap-4 flex-col "
          >
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              11. E-WALLETS / VIRTUAL ACCOUNTS THREATS AND CONTROLS
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              eWallets/virtual accounts are online storage systems that hold users’ banking information
              and can be used to pay for goods and services, often in conjunction with mobile payment
              systems. The use of eWallets/virtual accounts/mobile money has grown rapidly and will
              continue to grow as the use of cash is discouraged with CBN continuous emphasis/
              regulations to enforce cashless society and this has also led to the development of criminal
              methodologies that exploit those services to launder money and finance terrorist activities.
              The replacement of hard cash as the preferred method of payment is not a regional
              phenomenon – it is a trend emerging on a global scale. More and more consumers are
              foregoing the use of paper-based cash and opting to pay through their smartwatches,
              contactless cards, or e-wallets. 
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                11.1. Risks
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Some of the money laundering risks/terrorist financing risks associated with
                  eWallets/Virtual accounts are:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) <span className="font-[450]">Anonymity:</span> Inadequate customer identity verification measures which allow
                    criminals to use the accounts anonymously to launder money. In this context,
                    money launderers may be deceptive about their identities when applying for
                    accounts, use proxies to open accounts or open multiple different accounts as
                    part of their criminal activities.
                  </li>
                  <li>
                    b) <span className="font-[450]">Transaction obscurity:</span> Criminals may manipulate eWallet services to disguise
                    their efforts to launder money. Multiple eWallet accounts may be accessed from
                    a single mobile device to conceal the identity of users, or, similarly, criminals
                    may attempt to make a number of small transactions in an effort to disguise a
                    larger sum of transferred money.
                  </li>
                  <li> 
                    c) <span className="font-[450]">Speed:</span> Like all digital financial services, eWallet transactions take place quickly
                    and, in some cases, in real time. This means that money launderers are able to
                    move illegal funds around rapidly, evading supervisory safeguards and
                    investigations. Speedy transaction times can help criminals structure their
                    transactions: using multiple transfers across multiple accounts to disguise the
                    illegal origin or their funds more effectively.
                  </li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  The increased ease with which funds circulate through online channels is a double-edged
                  sword. It has paved the way for hackers, identity thieves, drug cartels, and even money
                  launderers to hide the source of their illegally obtained funds.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                11.2. Controls
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  For any eWallets/Virtual accounts opened directly by the bank or indirectly by customers
                  of the bank using its accounts with the bank to transact on eWallets, the under-listed
                  controls must be in place to mitigate the identified risks:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) Customer due diligence: In order to accurately establish customer identities,
                    customer due diligence (CDD) checks to verify information such as names,
                    addresses and dates of birth must be performed on all eWallet / virtual accounts
                    and higher-risk customers should be subject to enhanced due diligence (EDD)
                    measures.
                  </li>
                  <li>
                    b) Transaction monitoring: Customer transactions on eWallet / virtual accounts
                    must be monitored for suspicious transactions that could indicate money
                    laundering / terrorist financing/ proliferation financing and where any is
                    discovered, it should be promptly reported to Nigerian Financial Intelligence
                    Unit (NFIU).
                  </li>
                  <li> 
                    c) Screening and monitoring: Customers using eWallets / virual accounts must be
                    screened to ensure that they are not subject to international sanctions or
                    involved in adverse media stories that could elevate their risk of money
                    laundering and also they should be screened for politically exposed person (PEP)
                    status.
                  </li>
                  <li> d) We should be vigilant for “red flag” behaviours such as:</li>
                  <li> 
                    e) Discrepancies or inconsistencies in customer identity verification at account
                    registration.
                  </li>
                  <li> 
                    f) Unusual transaction patterns or transactions involving high-risk customers or PEPs.
                  </li>
                  <li> 
                    g) Frequent and rapid cash withdrawals of funds transferred to eWallets / virtula
                    accounts.
                  </li>
                  <li> 
                    h) Frequent transfer of funds to third-party accounts following deposits to eWallets
                    / virtual accounts.
                  </li>
                  <li> i) Transactions consistently above or just below reporting thresholds.</li>
                  <li> j) Multiple account registrations, deposits or transfers that seem connected. </li>
                </ul>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                  Information Technology Department should ensure that all customers using their
                  accounts with the bank to transact on eWallets/virtual accounts put the necessary
                  controls as highlighted above and Compliance Department should be informed before
                  granting access to such customers.
                </p>
              </div>
            </div>
          </div>

          <div ref={lawRef} className="flex gap-4 flex-col ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              12. SUSPICIOUS ACCOUNT MONITORING AND REPORTING
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.1. Monitoring Accounts For Suspicious Activities
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank using manual means and through its Anti Money Laundering (AML) solution
                shall monitor activities with patterns of unusual size, volume, type of transactions,
                geographic factors, or any of the “red flags”. The Anti Money Laundering Compliance
                Officer will be responsible for this monitoring, will document when and how it is carried
                out, and will report suspicious activities to the appropriate authorities. Among the
                information we will use to determine whether to file Suspicious Activities or Transaction
                Reports include transaction size, location, type, number, and nature of the activity. We
                will create employee guidelines with examples of suspicious money laundering activity
                and lists of high-risk clients whose accounts may warrant further scrutiny. Our AML
                Compliance Officers will conduct an appropriate investigation before Suspicious Activity
                Report (SAR) or Suspicious Transaction Report (STR) is filed.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.2. Notification to The Regulatory And Investigative Agents
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                When conducting due diligence, we shall immediately notify EFCC/NFIU whenever we
                notice any of these scenarios:
              </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) a legal or beneficial account holder is involved in a transaction involving persons
                    listed on or located in a country or region listed on the OFAC or other sanctions
                    lists,
                  </li>
                  <li>
                    b) an account is held by an entity that is owned or controlled by a person or entity
                    listed on the OFAC or sanctions other lists,
                  </li>
                  <li> 
                    c) a customer tries to use bribery, coercion, or similar means to open an account or
                    carry out a suspicious activity,
                  </li>
                  <li> 
                    d) we have reasons to believe the customer is trying to move illicit cash out of the
                    government's reach, or
                  </li>
                  <li> 
                    e) we have reasons to believe that the customer is about to use the funds to
                    further an act of terrorism.
                  </li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.3. What to Do When Inappropriate Activity Is Suspected
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Any employee that identifies a “Red Flag” or otherwise suspect inappropriate activity
                must report the transaction immediately to his/her unit manager for further review.
                If the manager believes the transaction is suspicious, he or she must refer it to the Anti-
                Money Laundering Compliance Officer (AMLCO) and/or directly to the Chief Compliance
                Officer.
                The transaction is then further reviewed, and a determination is made whether it qualifies
                to be reported as Suspicious Transaction to the NFIU. If it qualifies, the CCO’s approval
                will be sought and STR filed accordingly.
                Please refer to Appendix V for “Red Flags”, Appendix III for High-Risk Industries and
                Appendix IV for High-Risk Countries.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.4. Filing Suspicious Transactions Reports (STR)
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank Limited. shall file an STR for any activity (including deposits and transfers)
                conducted or attempted through Tatum Bank Limited. We shall, in compliance with the
                provisions of section 7 of Money Laundering (Prevention and Prohibition) Act 2022,
                investigate suspicious transactions and report our findings to the NFIU without delay; if:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li> 
                  i. The transaction involves funds derived from illegal activity or is intended or
                  conducted in order to hide or disguise funds or assets derived from illegal
                  activity as part of a plan to violate or evade federal law or regulation or to avoid
                  any transaction reporting requirement under federal law or regulation.
                </li>
                <li>
                  ii. The transaction is designed, whether through structuring or otherwise, to evade
                  any requirements of the MLPPA 2022,
                </li>
                <li> 
                  iii. The transaction has no business or apparent lawful purpose or is not the sort in
                  which the customer would normally be expected to engage and there is no
                  reasonable explanation for the transaction, or
                </li>
                <li> 
                  iv. The transaction involves the use of the Bank’s to facilitate criminal activity.
                </li>
                <li> 
                  v. Where funds, assets or property are suspected to have been derived from any,
                  but not limited to, the following criminal activities –
                  <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> a) Participation in an organized criminal group and racketeering;</li>
                    <li> b) Terrorism, including terrorism financing;</li>
                    <li> c) Financing the proliferation of weapons of mass destruction;</li>
                    <li> d) Trafficking in persons and migrant smugglings;</li>
                    <li> e) Sexual exploitation, including sexual exploitation of children;</li>
                    <li> f) Illicit trafficking in narcotic drugs and psychotropic substances;</li>
                    <li> g) Illicit arms trafficking;</li>
                    <li> h) Illicit trafficking in stolen and other goods;</li>
                    <li> i) Corruption.</li>
                    <li> j) Bribery.</li>
                    <li> k) Fraud.</li>
                    <li> l) Currency counterfeiting.</li>
                    <li> m) Counterfeiting and piracy of products.</li>
                    <li> n) Environmental crime.</li>
                    <li> o) Murder.</li>
                    <li> p) Grievous bodily injury.</li>
                    <li> q) Kidnapping, illegal restraint and hostage-taking.</li>
                    <li> r) Robbery or theft.</li>
                    <li> s) Smuggling, including smuggling done in relation to customs and excise duties and taxes.</li>
                    <li> t) Tax crimes, related to direct taxes and indirect taxes</li>
                    <li> u) Extortion</li>
                    <li> v) Forgery</li>
                    <li> w) Piracy</li>
                    <li> x) Insider trading and market manipulation; or</li>
                    <li> y) Any other predicate offence under the MLPPA, TPPA, other relevant laws and regulations.</li>
                  </ul>
                </li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                We will not base our decision to file an STR solely on whether the transaction falls above
                a set threshold. We will file an STR and notify NFIU of all transactions that raise an
                identifiable suspicion of criminal, terrorist, or corrupt activities regardless of the amount
                involved. In high-risk situations, we will notify the appropriate government agency
                immediately and will file STR with NFIU.
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                We will retain copies of any STR filed and the original or business record equivalent of
                any supporting documentation. We will identify and maintain supporting documentation
                and make such information available to NFIU and any other appropriate law enforcement
                agencies, upon request.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.5. Ancillary Provisions on Suspicious Activities And Transactions Reporting
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  i. The responsibility to report suspicious activities or transaction is that of all staff of
                  the Bank. All suspicious activities or transactions reports are channeled through the
                  Bank’s Compliance Division.
                </li>
                <li>
                  ii. Staff must not notify any person involved in the transaction that the transaction has
                  been reported, such act shall be considered a deliberate attempt to help the
                  customer evade the law and shall be deemed to have tipped off the customer.
                  Tipping off is a criminal offence punishable by law.
                </li>
                <li>
                  iii. Staff shall not be victimized as a result of making a Suspicious Activity or Transaction
                  Report.
                </li>
                <li>
                  iv. Non-reporting of suspicious transactions when a staff becomes suspicious or ought
                  to reasonably be suspicious of a customer’s transaction or series of transactions will
                  attract severe sanctions ranging from loss of appraisal points, suspension and
                  termination of appointment. Also, the staff will be personally held responsible for
                  any liability that might arise as a result of such omission.
                </li>
                <li>
                  v. Confidentiality of suspicious transactions information: Information on suspicious
                  persons should be on a need to know basis as staff should not discuss this with any
                  unauthorized persons including other staff who have no direct relationship with the
                  suspected transaction.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.6. Transactions Suspected to Relate To Terrorism Activities
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                In compliance with the Terrorism (Prevention and Prohibition) Act, 2022, we shall use our
                best efforts to forward to the NFIU without delay, reports of suspicious transactions
                relating to:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  i. Funds derived from illegal or legal sources intended to be used for any act of
                  terrorism
                </li>
                <li>
                  ii. Proceeds of a crime related to terrorism financing or
                </li>
                <li>
                  iii. Proceeds belonging to a terrorist, terrorist entity or organization.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.7. Other Reporting Requirements
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank shall render the following regulatory returns as follows:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  <span className="font-[450]">i. Currency Transaction Reports (CTR)</span>
                  Section 2 of the Money Laundering (Prevention and Prohibition Act) 2022 requires
                  reporting entities to report “any single transaction, lodgement or transfer of funds in
                  excess of N5,000,000. or its equivalent by an individual and N10,000,000 or its equivalent
                  by a corporate entity.
                </li>
                <li>
                  <span className="font-[450]">ii. Foreign Transactions Report (FTR)</span>
                  Section 3 of the Money Laundering (Prevention and Prohibition) Act 2022 requires
                  reporting entities to report “A transaction in Foreign Currency; of fund and Securities of a
                  sum exceeding USD10,000.”
                </li>
                <li>
                  <span className="font-[450]">iii. Returns on Politically Exposed Persons (PEP)</span>
                  The Bank will also render monthly returns on all transactions with PEPs to the CBN and
                  NFIU in accordance with CBN directive.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.8. Record Keeping
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                All documents obtained and all enquiries received in relation to the investigation of a
                suspicious transaction and related information of the transaction carried out by a
                customer shall be kept securely upon the conclusion of the investigations, and shall be so
                kept for a period of at least five years after the closure of the accounts or the severance
                of relationship with the customer; and the report shall be preserved for a period of at
                least 5 years after carrying out the transaction or making of the report as the case may be.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.9. Employees Training and AML/CFT/CPF Culture Awareness
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                There shall be an on-going employee training programme under the leadership of the
                Chief Compliance Officer. This frequency of the training will be based on the Bank’s size,
                its customer base, and its resources. The facilitators shall be drawn from within the Bank
                and outside through constructive engagements of external consulting firms and /or from
                relevant Regulatory bodies.
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  i. The records of training conducted shall be maintained to show the persons
                  trained, the dates of training and the subject matter of the trainings.
                </li>
                <li>
                  ii. The AML/CFT/CPF training will cut across all cadres of the Bank, including
                  Management and Board of Directors.
                </li>
                <li>
                  iii. The training will be budgeted for annually in line with CBN AML/CFT/CPF
                  Regulations 2022.
                </li>
                <li>
                  Appropriate training reports shall be rendered to CBN and NFIU as required by
                  their regulations.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.9.1. AML/CFT/CPF Employee-Education and Training Programme
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Knowledge of the provisions of AML/CFT/CPF laws and Regulations as regards
                expectations and the implication of non-compliance is important in driving
                employees’ buy-in and cooperation in the prevention of Money Laundering, Financing
                of Terrorism and Proliferation Financing, hence, employee education and training is
                considered key in equipping the Bank’s employees with the required knowledge for
                this obligation.
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  i. Tatum Bank Limited shall design a comprehensive employee education and
                  training program not only to make employees fully aware of their obligations
                  but also to equip them with relevant skills required for the effective discharge of
                  their AML/CFT/CPF responsibilities.
                </li>
                <li>
                  ii. The timing, coverage and content of the employee training program shall be
                  tailored to meet the perceived needs of the Bank to ensure compliance with the
                  requirements and provisions of the CBN AML/CFT/CPF Regulations.
                </li>
                <li>
                  iii. We shall provide comprehensive training programs for staff covering
                  Compliance Officers and as part of the orientation programme for new staff and
                  those posted to the front office, back office staff, particularly Tellers, Customer
                  Service Officers and Marketing staff.
                </li>
                <li>
                  iv. The employee training programme shall be developed under the guidance of
                  the Chief Compliance Officer and the supervision of the Executive Compliance
                  Officer in collaboration with Human Capital Management and the top
                  Management.
                </li>
                <li>
                  v. The basic elements of the employee training programme for Tatum Bank
                  Limited shall include:
                  <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li>a. AML regulations and offences;</li>
                    <li>b. The nature of money laundering;</li>
                    <li>
                      c. Money laundering ‘red flags’ and suspicious transactions, including trade- based
                      money laundering typologies;
                    </li>
                    <li>d. Reporting requirements;</li>
                    <li>e. Clients due diligence;</li>
                    <li>f. Risk-based approach to AML/CFT/CPF.</li>
                    <li>g. Record keeping and retention policy;</li>
                    <li>
                      h. Disciplinary consequences (including civil and criminal penalties) for noncompliance
                      with the MLPPA.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.9.2. Annual Training Plan Report Rendition
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank Limited shall submit its Annual AML/CFT/CPF Employee Training
                Programme, approved by the Board for the subsequent year, to the Central Bank of
                Nigeria before the end of every financial year.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.9.3. Quarterly Staff Training Report Rendition
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Tatum Bank Limited shall render quarterly returns on level of compliance with
                employees training and education to the CBN.
                The report shall include records of the persons trained, the dates of training, and the
                subject matter of the training.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                12.9.4. Monitoring of Employee Conduct
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                In compliance with the CBN AML/CFT/CPF Regulations 2022, the Compliance
                Department shall monitor employees’ accounts for potential signs of money
                laundering. They shall also subject employees’ accounts to the same AML/CFT/CPF
                procedures as applicable to other clients’ accounts. This shall be performed under the
                supervision of the Chief Compliance Officer.
                The Chief Compliance Officer’s account is to be reviewed by the Chief Audit Executive
                or a person of adequate/similar seniority. Compliance reports including findings are
                to be rendered to the CBN.
              </p>
            </div>

          </div>

          <div ref={contactRef} className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              13. INDEPENDENT ASSESSMENT OF AML/CFT/CPF PROGRAM
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Annual testing of our AML/CFT/CPF program will be performed either by an independent
              third party or by the Internal Audit Department of the Bank. The annual testing will include
              an audit of the Bank’s compliance with its AML/CFT/CPF policy.
              The auditors will issue a report of their findings upon completion of their assessment to
              Executive Management, which will address the exceptions and recommendations of the audit.
            </p>
          </div>

          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              14. CONFIDENTIAL REPORTING OF NON-COMPLIANCE BY STAFF
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Employees will report any violations of the Bank’s AML Policy to the Chief Compliance Officer.
              Where the violations implicate the Chief Compliance Officer, in which case the employee shall
              report to the Executive Compliance Officer or a member of Executive Management. Such
              reports will be treated as confidential, and the employee will suffer no repercussion or
              intimidation for making such reports.
            </p>
          </div>

          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              15. ADDITIONAL AREAS OF RISK
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              The Bank shall continue to review all areas of its business activities to identify potential
              money laundering risks that may not be covered in the procedures described above and will
              continually work to improve its AML program. Observed additional areas of risk shall be
              reported to the CBN at regular intervals.
            </p>
          </div>

          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              16. INFORMATION SHARING
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                16.1. With Law Enforcement Agencies
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                In line with the provisions of the Money Laundering (Prevention and Prohibition) Act 2022,
                the Bank will respond to Law Enforcement Agencies (LEA) requests about accounts or
                transactions by immediately searching our records to determine whether we maintain or have
                maintained any account for, or have engaged in any transaction with, anyone, entity, or
                organization named in the requests. Whether there is a match or not, a response will be
                provided in a timely manner to the relevant Law Enforcement Agency, subject to the Law
                Enforcement Agency meeting the requirement of the law empowering it to make such
                requests.   
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                There shall be no disclosure of the fact that LEA has requested or obtained information from
                the Bank, except to the extent necessary to comply with the information requested. The Bank
                will maintain procedures to protect the security and confidentiality of requests from law
                enforcement agencies and other Investigative Agencies, as required by MLPPA 2022 and
                other laws; and will direct any clarifications/questions about the request to the requesting
                Law Enforcement Agency as designated in the MLPPA 2022.
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Unless otherwise stated in the information request, the Bank will not be required to treat the
                information request as continuing in nature and will not treat the request as a list for
                purposes of the customer identification and verification requirements. The Bank will not use
                information provided to them for any purpose other than to:
              </p>
              <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>i. report to LEAs as required under Section 24 of MLPPA 2022</li>
                <li>ii. determine whether to establish or maintain an account, or to engage in a transaction; or</li>
                <li>iii. assist the Bank in complying with any requirement of Section 24 of MLPPA.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                16.2. With Other Financial Institutions   
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The Bank will share information about those suspected of terrorist financing and money
                laundering with other financial institutions through the forum of Association of Chief
                Compliance Officers of Banks in Nigeria (ACCOBIN) for the purposes of identifying and
                reporting activities that may involve terrorist acts or money laundering activities and to
                determine whether to establish or maintain an account or engage in a transaction. The
                Bank will file an initial notice with NFIU before any sharing occurs. The Bank will employ
                strict procedures both to ensure that only relevant information is shared and to protect
                the security and confidentiality of this information, including segregating it from the
                Bank’s other books.  
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Shared information received from other financial institutions for the purpose of any
                investigation, shall be used strictly for the purpose for which they were received. The fact
                of the source shall not be disclosed to anyone who is not a party to the investigation and
                shall not be disclosed to the customer or account holder who is being investigated.
              </p>
           
            </div>
          </div>

          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              17. THE SANCTION LISTS (OFFICE OF FOREIGN ASSETS CONTROL (OFAC), NFIU, UNITED
              NATIONS CONSOLIDATED LIST ETC) NAME CHECKING
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Before engaging in any money service activity (including but not limited to cheque cashing,
              money orders and wire transfers) which potentially may involve money laundering, and on an
              on-going basis, Tatum Bank Limited shall check to ensure that a customer does not appear
              on the above (or similar) Sanctions or “Specifically Designated Nationals (SDN) and Blocked
              Persons” List, and is not from, or engaging in transactions with people or entities from
              embargoed countries and regions listed on the OFAC website. Tatum Bank Limited will
              consult the Sanctions List on a regular basis and subscribe to receive updates when they
              occur. Tatum Bank Limited will also review existing accounts against these lists when they are
              updated and will document the review.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              The implication of this is that before an account is opened, the processing units are required
              to check the names of all individuals and entities against this database and report any
              matching details to the Bank's Compliance Department. The lists will include PEP List, SDN
              List, OFAC List, UN List, EU List etc.
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              If Tatum Bank Limited discovers a customer, or someone with or for whom the customer is
              transacting, is on any of the above Lists or is from or engaging in transactions with a person
              or entity located in an embargoed country or region, the Bank will reject the transaction
              and/or block the customer's account and notify NFIU.
              Tatum Bank Limited shall maintain an in-house list of Politically Exposed Persons which shall
              be updated with the names of such persons who opens a relationship with the Bank, and all
              such accounts shall be treated in line with the provisions of relevant laws and Regulations.
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              18. MAINTENANCE OF RECORDS ON TRANSACTIONS
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                For reference purposes and in compliance with Regulations, Tatum Bank Limited shall:
              </p>
              <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                <li>
                  i. Maintain all necessary records of transactions, both domestic and international, for at
                  least five years following completion of the transaction (or longer if requested by the
                  CBN, SEC and NFIU in specific cases). This requirement applies regardless of whether
                  the account or business relationship is ongoing or has been terminated.
                  Some of the necessary components of transaction-records to be kept include
                  <ul className="list-disc font-grava font-[350] ml-10 leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li>Customer’s and beneficiary’s names, addresses (or other identifying information),</li>
                    <li>the nature and date of the transaction,</li>
                    <li>the type and amount of currency involved,</li>
                    <li>the type and identifying number of any account involved in the transaction.</li>
                  </ul>
                </li>
                <li>
                  ii. Maintain records of the identification data, account files and business correspondence
                  for at least five years following the termination of an account or business
                  relationship (or longer if requested by the CBN, SEC and NFIU in specific cases).
                </li>
                <li>
                  iii. Ensure that all Customer-transaction records and information are available on a timely
                  basis to the CBN, SEC and NFIU upon request.
                </li>
              </ul>
            </div>
          </div>

          <div  className="flex flex-col gap-4">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              19. ADDITIONAL AREAS OF AML/CFT/CPF RISKS
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Tatum Bank Limited shall review, identify, and record other areas of potential money
              laundering risks not covered by this manual.
              Tatum Bank Limited shall review the AML/CFT/CPF framework from time to time with a view
              to determining its adequacy and identifying other areas of potential risks not covered by the
              AML/CFT/CPF Compliance Regulations and take necessary steps to ensure this risk does not
              crystalize while noting such for inclusion in the review of this policy document.
            </p>
            <div  className="flex flex-col gap-1">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                19.1. Additional Procedures And Mitigants
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                After reviewing the AML/CFT/CPF framework and identified new areas of potential
                money laundering vulnerabilities and risks, the Bank shall design additional procedures
                and mitigating processes in its AML/CFT /CPF operational procedures. These will provide
                how such potential risks will be appropriately managed if they crystallize. Details of the
                contingency plan as of December 31st are to be rendered to CBN and NFIU every year.
              </p>
            </div>
          </div>

          <div  className="flex flex-col gap-4">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              20. OFFENCES AND PENALTIES FOR NON–COMPLIANCE
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              Tatum Bank Limited notes that contravention of the provisions of the Money laundering
              (Prevention and Prohibition) Act 2022, the Terrorism (Prevention and Prohibition) Act 2022
              and CBN AML/CFT/CPF Regulations 2022 shall be subject to applicable sanctions by the CBN.
              The Bank recognizes the provision of S.70 of the CBN AML/CFT/CPF Regulations 2022, which
              provides that, “The penalties that shall apply for contraventions of these Regulations shall be
              as prescribed in the relevant extant Administrative Sanctions Regulations and administrative
              sanctions as provided under MLPPA, TPPA, BOFIA or other relevant laws or regulations issued
              by the Attorney-General of the Federation.
            </p>
            <div  className="flex flex-col gap-1">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                20.1. Other Non-Compliance with AML/CFT/CPF Laws and Regulations
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                Staff and Management of the Bank are to note and acquaint themselves with the
                provisions of the Money Laundering (Prevention and Prohibition) Act 2022, Terrorism
                (Prevention and Prohibition) Act 2022, Central Bank of Nigeria Anti-Money Laundering /
                Combating the Financing of Terrorism / Countering Proliferation of Financing of
                Weapons of Mass Destruction in Financial Institutions Regulations 2022 and Central Bank
                of Nigeria Anti-Money Laundering and Combating the Financing of Terrorism
                (Administrative Sanctions) 2023.
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                All staff shall be held responsible for their actions and inactions constituting noncompliance
                with the Anti-money laundering, Combating the Financing of Terrorism and
                Countering Proliferation Financing laws and regulations.
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                All staff are expected to carry on their duties regarding compliance with this policy, the
                CBN AML/CFT/CPF Regulations 2022, the MLPPA 2022 and the TPPA Act 2022 with such
                diligence that protects all stakeholders against Money Laundering, Terrorism Financing
                and Proliferation Financing.
              </p>
            </div>
          </div>
          
          <div  className="flex flex-col gap-4 ">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              21. REVIEW AND UPDATE OF THE POLICY
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              This policy is the Tatum Bank Limited Anti-Money Laundering, Combating the Finance of
              Terrorism and Countering Proliferation Financing Policy. It shall be reviewed every three
              years or upon a development which may necessitate its review and update for it to remain
              compliant with relevant Laws and Regulations.
            </p>
          </div>

                            {/* APPENDIX */}
          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX I
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  INFORMATION TO ESTABLISH IDENTITY
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  A. NATURAL PERSONS
                </p>
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  For natural persons, the following information should be obtained, where applicable:
                </p>
                <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> Legal name and any other names used (such as maiden name);</li>
                  <li>
                    Correct permanent address (full address should be obtained, and a Post Office box
                    number is not sufficient);
                  </li>
                  <li> Telephone number, fax number, and e-mail address.</li>
                  <li> Date and place of birth. </li>
                  <li> Nationality. </li>
                  <li> Occupation, public position held and name of employer.</li>
                  <li> 
                    An official personal identification number or other unique identifier contained in an
                    unexpired official document such as passport, identification card, residence permit,
                    voters’ card, social security records or driver’s license that bears a photograph of the
                    customer.
                  </li>
                  <li> Type of account and nature of the banking relationship; and</li>
                  <li> Signature.</li>
                </ul>
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  The above information is then verified through at least one of the following methods:
                </p>
                <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    Confirming the date of birth from an official document (e.g., birth certificate, passport,
                    identity card, social security records);
                  </li>
                  <li>
                    Confirming the permanent address (e.g. utility bill, tax assessment, bank statement, a
                    letter from a public authority);
                  </li>
                  <li> 
                    Contacting the customer by telephone, by letter or by e-mail to confirm the
                    information supplied after an account has been opened (e.g. a disconnected phone,
                    returned mail, or incorrect e-mail address should warrant further investigation);
                  </li>
                  <li> 
                    Confirming the validity of the official documentation provided through certification by
                    an authorized person (e.g. embassy official, notary public). 
                  </li>
                  <li> 
                    Confirming the information on the Identification Documents on the databases of the
                    Issuing Authorities 
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  B. INSTITUTIONS
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    1. Corporate Entities
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    For corporate entities, the following information is required:
                  </p>
                  <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> Name of institution.</li>
                    <li>Principal place of institution's business operations.</li>
                    <li> Mailing address of institution.</li>
                    <li>Contact telephone and fax numbers. </li>
                    <li> Tax Identification Number (T.I.N); </li>
                    <li> 
                      The original or certified copy of the Certificate of Incorporation and Memorandum
                      and Articles of Association.
                    </li>
                    <li> 
                      The resolution of the Board of Directors to open an account and identification of
                      those who have authority to operate the account.
                    </li>
                    <li>Nature and purpose of business and its legitimacy.</li>
                    <li> 
                      Information as obtained on natural persons (as listed above) for all individuals
                      involved in the Entity (Shareholders, directors, and signatories) including obtaining
                      their IDs and Utility Bill on their residential addresses.
                    </li>
                    <li> 
                      Special Control Unit Against Money Laundering (SCUML) Certificate for companies
                      classified as Designated Non-Financial Businesses and Professions (DNFBP).
                    </li>
                    <li> 
                      Nigerian Investment Promotion Commission (NIPC) Certificate for companies with
                      foreign equity participation.
                    </li>
                  </ul>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    This information is then verified by at least one of the following methods:
                  </p>
                  <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> 
                      For established corporate entities - reviewing a copy of the latest report and audited
                      accounts (if available);
                    </li>
                    <li>
                      Conducting an enquiry by a business information service, or an undertaking from a
                      reputable and known firm of lawyers or accountants confirming the documents
                      submitted.
                    </li>
                    <li> 
                      Undertaking a company search and/or other commercial enquiries to see that the
                      institution has not been, or is not in the process of being dissolved, struck off,
                      wound up or terminated.
                    </li>
                    <li> 
                      Utilizing an independent information verification process, such as accessing public
                      and private databases. 
                    </li>
                    <li> Obtaining prior bank references.</li>
                    <li> Visiting the corporate entity; and</li>
                    <li> Contacting the corporate entity by telephone, mail, or e-mail.</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    1.1 eNaira Merchants
                  </p>
                  <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> 
                      All eNaira merchants’ applications are to be reviewed in line with the above
                      stated information requirements and the Bank shall ensure that no
                      documentation is outstanding before approval is given to the merchant on the
                      eNaira Platform.
                    </li>
                    <li> Transactions on the e-Naira Platform are to be monitored by Compliance Officers.</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    1.2 List of Designated Non-Financial Businesses and Professions (DNFBPs)
                  </p>
                  <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> Automotive Dealers </li>
                    <li> Businesses involved in the hospitality industry</li>
                    <li> Casinos</li>
                    <li> Clearing and Settlement companies</li>
                    <li> Consultants and Consulting companies</li>
                    <li> Dealers in jewelleries</li>
                    <li> Dealers in mechanized farming equipment, farming equipment and machineries</li>
                    <li> Dealers in precious metals and precious stones</li>
                    <li> Dealers in real estate, estate developers, estate agents and brokers</li>
                    <li> High value dealers</li>
                    <li> Hotels</li>
                    <li> Legal practitioners and notaries</li>
                    <li> Licensed professional accountants</li>
                    <li> Mortgage brokers</li>
                    <li> Practitioners of mechanized farming</li>
                    <li> Supermarkets</li>
                    <li> Tax Consultants</li>
                    <li> Trust and company service providers</li>
                    <li> Pools betting</li>
                    <li> 
                      Such other businesses and professions as may be designated by the Minister
                      responsible for Trade and Investment
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    1.3. Corporations and Partnerships
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    For corporations/partnerships, the principal guidance is to look behind the institution
                    to identify those who have control over the business and the company's/partnership's
                    assets, including those who have ultimate control.
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    For corporations, attention should be paid to shareholders, signatories, or others who
                    inject a significant proportion of the capital or financial support or otherwise exercise
                    control.
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    For partnerships, each partner should be identified, and it is also important to identify
                    immediate family members who have ownership control.
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    Where a company is listed on a recognized stock exchange or is a subsidiary of such a
                    company then the company itself may be the principal to be identified. However,
                    consideration should be given to whether there is effective control of the listed
                    company by an individual, small group of individuals or another corporate entity or
                    trust. If this is the case, then the controlling individuals and entities should also be
                    considered as principals and identified accordingly.
                  </p>
                  
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    1.4 Ultimate Beneficial Owner (UBO)
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    Beneficial owner refers to the natural person(s) who ultimately owns or controls a
                    customer and/or the natural person on whose behalf a transaction is being conducted.
                    It also includes those persons who exercise ultimate effective control over a legal
                    person or arrangement.
                  </p>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    The following are some examples of natural persons who could be considered as
                    beneficial owners on the basis that they are the ultimate owners/controllers of the
                    legal person, either through their ownership interests, through positions held within
                    the legal person or through other means:
                  </p>
                  <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                    <li> 
                      The natural person(s) who directly or indirectly holds a minimum percentage of
                      ownership interest in the legal person. FATF recommends 25% shareholding. 
                    </li>
                    <li> 
                      The natural person(s) who exerts control without ownership by participating in
                      the financing of the enterprise, or because of close and intimate family
                      relationships, historical or contractual associations, or if a company defaults on
                      certain payments.
                    </li>
                    <li> 
                      The natural person(s) responsible for strategic decisions that fundamentally
                      affect the business practices or general direction of the legal person.
                    </li>
                    <li> 
                      The natural person(s) who exercises executive control over the daily or regular
                      affairs of the legal person through a senior management position, such as a
                      chief executive officer (CEO), chief financial officer (CFO), managing or executive
                      director, or president.
                    </li>
                    <li> 
                      The Ultimate Beneficial Owner (UBO) should be unveiled through various means
                      such as:
                    </li>
                    <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                      <li>
                        a. Identifying the ownership structure from the registration documents and determining
                        the shareholding. The Bank shall obtain identification documents on all owners with
                        at least 5% ownership.
                      </li>
                      <li>b. Using internet facilities to search for people behind companies.</li>
                    </ul>
                  </ul>
                  <p className="font-[350] leading-[25px] lm:leading-[30px] text-base lg:text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                    All Beneficial Owners identified must be duly verified and same documents as required from
                    individual customers must be obtained from them.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  C. OTHER TYPES OF INSTITUTIONS
                </p>
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  The following information would be obtained in addition to that required to verify the
                  identity of the principals in respect of Retirement Benefit Programmes, Cooperatives and
                  Provident Societies, Charities, Clubs and Associations, Trusts and Foundations, and
                  Professional Intermediaries:
                </p>
                <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> Name of account;</li>
                  <li>Mailing address;</li>
                  <li> Contact telephone and fax numbers;</li>
                  <li> Some form of official identification number, such as tax identification number; </li>
                  <li> 
                    Description of the purpose/activities of the account holder as stated in a formal
                    constitution; and 
                  </li>
                  <li> 
                    Copy of documentation confirming the legal existence of the account holder such as
                    register of charities.
                  </li>
                </ul>
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  The Bank shall verify this information by at least one of the following:
                </p>
                <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    Obtaining an independent undertaking from a reputable and known firm of lawyers
                    or accountants confirming the documents submitted.
                  </li>
                  <li>Obtaining prior bank references; and</li>
                  <li> Accessing public and private databases or official sources.</li>
                </ul>
                
                <div className="flex flex-col mt-4 gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      (i) Retirement Benefit Programmes
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      Where an occupational pension programme, employee benefit trust or share option plan is
                      an applicant for an account the trustee and any other person who has control over the
                      relationship such as the administrator, programme manager, and account signatories are
                      considered as principals and the financial institution should take steps to verify their
                      identities.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      (ii) Cooperative and Provident Societies
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      Where these entities are an applicant for an account, the principals to be identified are
                      considered to be those persons exercising control or significant influence over the
                      organization’s assets e.g. board members, executives and account signatories.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      (iii) Charities, Clubs and Associations
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      In the case of accounts to be opened for charities, clubs, and societies, reasonable steps are
                      taken to identify and verify at least two signatories along with the institution itself.
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      Members of the governing body or committee, the President, board members, the treasurer,
                      and all signatories would also be identified.
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      In all cases, independent verification is always obtained to confirm that the persons involved
                      are true representatives of the institution. Independent confirmation is also obtained in
                      respect of the purpose of the institution.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      (iv) Trusts and Foundations
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      When opening an account for a Trust, account officers should take reasonable steps to verify
                      the trustee, the settlor of the trust (including any persons settling assets into the trust) any
                      protector, beneficiary, and signatories.
                      Beneficiaries should be identified when they are defined.
                      In the case of a foundation, the founder, the managers/directors and the beneficiaries should
                      be identified and verified.
                    </p>
                  </div>    
                  <div className="flex flex-col gap-1">
                    <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      (v) Professional Intermediaries
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      When a professional intermediary opens a client account on behalf of a single client that
                      client must be identified. Where funds held by the intermediary are not co - mingled but
                      where there are "sub-accounts" which can be attributable to each beneficial owner, all
                      beneficial owners of the account held by the intermediary are required to be identified, on
                      the other hand, where the funds are co-mingled, the beneficial-owners are required to be
                      identified.
                    </p>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      In circumstances when the intermediary is subject to the same due diligence standards in
                      respect of its client base as the financial institution and an account is opened for an open or
                      closed ended investment company (unit trust or limited partnership) also subject to the same
                      due diligence standards in respect of its client base as Tatum Bank Limited., the following are
                      considered as principals and steps are required to be taken to identify them:
                    </p>
                    <ul className="list-disc ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                      <li> The fund itself; </li>
                      <li>Its directors or any controlling board, where it is a company;</li>
                      <li>Its Trustee, where it is a Unit Trust;</li>
                      <li>Its managing (general) partner, where it is a limited partnership;</li>
                      <li>Account signatories.</li>
                      <li>Any other person who has control over the relationship such as fund administrator or manager.</li>
                    </ul>
                    <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                      In addition, all reasonable steps are required to be taken to verify the identity of the
                      beneficial owners of the funds and of those who have control over the funds.
                      Intermediaries are treated as individual customers of the Bank and the standing of the
                      intermediary is separately verified by obtaining the appropriate information above.
                    </p>
                  </div>    

                </div>

              </div>
            </div>

       

          </div> */}

          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX II
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  HIGH RISK CUSTOMERS
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <ul className="list-decimal ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> Foreign Companies.</li>
                  <li>Money Service/Transfer Operators</li>
                  <li> Embassy/Consulate</li>
                  <li> Charities/NGOs </li>
                  <li> Politically Exposed Persons (PEPs). </li>
                  <li> Financially Exposed Persons (FEPs).</li>
                  <li> Churches, Associations and Clubs (that are NGOs related), Mosques</li>
                  <li> High Net Worth Individuals.</li>
                  <li> Government Contractors.</li>
                  <li> Trust & Trustees (including Nominees).</li>
                  <li> Non-resident customers</li>
                  <li> Private Banking Customers</li>
                </ul>
              </div>
            </div>

           

       

          </div> */}
          
          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX III
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  HIGH RISK INDUSTRIES
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <ul className="list-decimal ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> Non-Bank Financial Institutions (i.e. Money Exchange Houses, Bureau De Change, Money</li>
                  <li>Transmitters, Check Cashiers, FX Houses, Remittance Services)</li>
                  <li>Travel Agencies</li>
                  <li> Casinos</li>
                  <li> Jewel/Gem/Precious Metal Dealers. </li>
                  <li> Off-Shore Subsidiaries of Corporations and Banks</li>
                  <li> Car/Boat/Plane Dealerships</li>
                  <li> Cash-Intensive Business</li>
                  <li> Art and Antique Dealers</li>
                  <li> Real Estate Brokers</li>
                  <li> Foreign exchange Dealers and Remittance Services</li>
                  <li> Jewellery dealers</li>
                  <li> Pawn Shops</li>
                  <li> Accountants and financial consultants</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX IV
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  HIGH RISK COUNTRIES
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
             <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                The following link can be used to access the latest update of High-Risk Countries according
                to the Financial Action Task Force (FATF).
                <a 
                  href="http://www.fatf-gafi.org/topics/high-riskandnon-cooperativejurisdictions" 
                  className="underline cursor-pointer ml-1"
                >
                   http://www.fatf-gafi.org/topics/high-riskandnon-cooperativejurisdictions
                </a>
              </p>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX V
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  PREDICATE OFFENCES FOR MONEY LAUNDERING
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  Predicate Offences for Money Laundering include:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> i. Participation in an organized criminal group</li>
                  <li> ii. Racketeering, terrorism and terrorist financing</li>
                  <li> 
                    iii. Trafficking in persons, smuggling of migrants, sexual exploitation, sexual exploitation
                    of children.
                  </li>
                  <li> iv. Illicit trafficking in narcotic drugs and psychotropic substances </li>
                  <li> v. Illicit arms trafficking, illicit trafficking in stolen goods </li>
                  <li> vi. Corruption, bribery, fraud, currency counterfeiting </li>
                  <li> vii. Counterfeiting and piracy of products, environmental crimes </li>
                  <li> viii. Murder, grievous bodily injury</li>
                  <li> ix. Kidnapping, hostage-taking, robbery or theft </li>
                  <li> 
                    x. Smuggling (including in relation to customs and excise duties and taxes), tax crimes
                    related to direct taxes and indirect taxes 
                  </li>
                  <li>xi. Extortion, forgery, piracy</li>
                  <li>xii. Insider trading and market manipulation and</li>
                  <li>
                    xiii. Any other criminal act specified in MLPPA or any other in Nigeria including any act,
                    wherever committed in so far as such act would be an unlawful act if committed in
                    Nigeria.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX VI
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  DETECTING RED FLAGS
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  Red flags that signal possible money laundering or terrorist financing include, but are not
                  limited to:
                </p>
                <ul className="list-decimal ml-10 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    The customer exhibits unusual concern about the Company's compliance with
                    government reporting requirements and the Bank’s AML policies (particularly
                    concerning his or her identity, type of business), or is reluctant or refuses to reveal
                    any information concerning business activities or furnishes unusual or suspicious
                    identification or documents.
                  </li>
                  <li> 
                    The customer wishes to engage in a transaction that lack business sense or is
                    inconsistent with the customer's stated business.
                  </li>
                  <li> 
                    The information provided by the customer that identifies a legitimate source for funds
                    is false, misleading, or substantially incorrect.
                  </li>
                  <li>
                    Upon request, the customer refuses to identify or fails to indicate any legitimate
                    source for his or her funds and other assets.
                  </li>
                  <li> 
                    The customer (or a person publicly associated with the customer) has a questionable
                    background or is the subject of news reports indicating possible criminal, civil, or
                    regulatory violations. 
                  </li>
                  <li> The customer exhibits a lack of concern regarding transaction costs. </li>
                  <li> 
                    The customer appears to be acting as an agent for an undisclosed principal, but
                    declines or is reluctant, without legitimate commercial reasons, to provide
                    information or is otherwise evasive regarding that person or entity. 
                  </li>
                  <li> The customer has difficulty describing the nature of his or her business.</li>
                  <li> 
                    The customer attempts to conduct frequent or large transactions or asks for
                    exemptions from the Bank’s AML policies. 
                  </li>
                  <li> 
                    The customer engages in transactions involving cash or cash equivalents or other
                    monetary instruments that appear to be structured to avoid the government
                    reporting requirements, especially if the cash or monetary instruments are in an
                    amount just below reporting thresholds.
                  </li>
                  <li>
                    For no apparent reason, the customer has multiple accounts under a single name
                    with a large number of inter-account or third-party transfers.
                  </li>
                  <li>
                    The customer is from, or has accounts in, a country identified as a non-cooperative
                    country or territory by the FATF.
                  </li>
                  <li>
                    The customer has unexplained or sudden extensive money service activity, especially
                    when they had little or no previous activity.
                  </li>
                  <li>
                    The customer has a large number of wire transfers to unrelated third parties
                    inconsistent with the customer's legitimate business purpose.
                  </li>
                  <li>
                    The customer has financial activity with no apparent business purpose to or from a
                    country identified as money laundering risk or a bank secrecy haven.
                  </li>
                  <li>
                    The customer makes a funds deposit followed by an immediate request that the
                    money be wired out or transferred to a third party, or to another firm, without any
                    apparent business purpose.
                  </li>
                  <li>
                    The customer requests that a transaction be processed to avoid the Company’s
                    normal documentation requirements.
                  </li>
                  <li>
                    The customer uses multiple accounts or maintains accounts in the names of family
                    members or corporate entities, with no apparent purpose.
                  </li>
                  <li>
                    The customer has inflows of funds or other assets well beyond the known income or
                    resources of the customer.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  APPENDIX VII
                </p>
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  ACCOUNT OPENING PROCEDURE FOR PEPS
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  If a prospective account holder falls within the definition of or is considered a PEP:
                </p>
                <ul className="list-none ml-5 font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  <li> 
                    a) The account opening file must clearly document the circumstances that makes the
                    person a Public Figure.
                  </li>
                  <li> b) The account must be approved by the Group Head of the business unit.</li>
                  <li> c) The Chief Compliance Officer must approve the opening of the account.</li>
                </ul>
                <p className="font-[350] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                  The Bank shall take reasonable steps to establish the source of wealth/fund of the PEP.
                  On an on-going basis, every new customer will be checked against the Bank’s definition of
                  PEP. If an existing customer suddenly becomes a PEP, such new PEP account must be notified
                  to the Chief Compliance Officer and senior management approval must be obtained before
                  the relationship continues.
                </p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    
  );
};

export default AML;
