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
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">TATUM BANK NIGERIA LIMITED WEBSITE</p>
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">TERMS AND CONDITIONS</p>
          <p className="font-grava font-[500] text-[20px] leading-[28px] tracking-[0.01em] text-[#002244]">Effective Date: January 2025</p>
        </div>

        <div className="flex flex-col gap-[40px] lg:flex-1 ">
          <div ref={introductionRef} className="flex gap-4 flex-col">
            <div className="flex flex-col">

              <p className="font-[350] leading-[25px] lm:leading-[150%] text-[18px]  text-[#002244] tracking-[0.01em] font-grava">
                Welcome to Tatum Bank Nigeria Limited website (<span className="font-[500]">“Tatum Bank” or
                “The Bank”</span>). By accessing or using this website (the <span className="font-[500]">"Site"</span>),

                you agree to comply with and be bound by the terms and
                conditions (the <span className="font-[450]">"Terms"</span>) contained herein. Please read these
                Terms and our Privacy Policy carefully. Our Privacy policy
                explains how we collect, use, and protect your personal
                information. <span className="block mt-4"> The website is built to enable us communicate,
                share information and offer our products and services as well as
                interact with our customers and general users. </span>
              </p>
            </div>
          </div>

          <div ref={userRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              1. User Conduct
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              By using this website, users accept that they will utilize the
              site solely for lawful purpose. Any attempt to gain unauthorized
              access to our systems, alter, damage, delete or modify the website
              content or communications, interfere with or disrupt the Site’s
              functionality, or illegally introduce or modify data, post or
              transmit harmful, abusive, defamatory, or otherwise objectionable
              content is strictly prohibited and may constitute a criminal
              offence.
            </p>
          </div>

          <div ref={acceptanceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              2. Acceptance of Terms and Updates
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              By accessing this Site, you confirm that you have read,
              understood, and agree to these Terms and any additional terms and
              conditions referenced herein. <span className="block mt-4">The Bank reserves the right to
              update or modify these Terms at any time without prior notice. The
              latest version will be posted on the Site with the "Effective
              Date" updated accordingly. Continued use of the Site constitutes
              acceptance of the revised Terms.</span>
            </p>
          </div>

          <div ref={serviceRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              3. Services Provided
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              The Site is intended to provide information about The Bank, its
              products and services. It may also include features such as online
              account management, application forms and other banking-related
              tools. Specific terms and condition for products and services
              offered on the site shall be indicated in the relevant
              documentation for such products and services. Access to the
              website is free of charge. This does not include service provider
              internet access charges or such related charges which shall be
              borne by the user as charged by the relevant service provider.
            </p>
          </div>

          <div ref={eligibilityRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              4. Eligibility
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              This Site is intended for use by individuals who are 18 years or
              older and legally capable of entering binding agreements. By using
              this Site, you confirm that you are not a minor and you meet these
              criteria. As per our Privacy policy, we do not intentionally
              collect, use, or share information that could reasonably be used
              to identify children without prior parental/guardian consent
              consistent with applicable laws.
            </p>
          </div>


          </div>
          <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                5. Intellectual Property
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

                All content on this Site, including text, graphics, logos, images,
                and software, is the property of Tatum Bank or its licensors and
                is protected by copyright, trademark, and other intellectual
                property laws. It is prohibited to reproduce, distribute, or use
                any content without prior written permission by The Bank. Any
                violation shall be regarded as infringement on our rights and
                offenders may be prosecuted.
              </p>

          </div>

          <div ref={contentRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              6. User-Generated Content
            </p>
            <div className=" font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">

              By submitting any content, including but not limited to
              comments, feedback, or suggestions, to the website, you grant
              the Bank a non-exclusive, royalty-free and perpetual license to
              use, reproduce, modify and distribute such content.
              <span className="block">
                You represent and warrant that you have necessary rights and
                permissions to submit such content and that it does not infringe
                the rights of others.
              </span>
            </div>
          </div>

          <div ref={partyRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              7. Third-Party Links
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              The Site may contain links to third-party websites or services.
              Tatum Bank is not responsible for the content, policies, or
              practices of third-party sites and does not endorse them.
            </p>
          </div>

          <div ref={disclaimerRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              8. Disclaimer
            </p>
            <div className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">

              The bank, it’s employees, agents, directors expressly disclaim
              all warranties, express or implied, as to suitability and
              fitness for a particular purpose for all products, services or
              content offered on the website. Also, the bank does not warrant
              that the website or any website linked to or from it will be
              free of interruption, delay, failure, error, or omission.
              <span className="block">
                Tatum Bank shall not be held liable for any damage arising from
                your use of the content, product or services presented on this
                website.
              </span>
            </div>
          </div>

          <div ref={limitationRef} className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              9. Limitation of Liability
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              To the maximum extent permitted by law, Tatum Bank shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the Site.
            </p>
          </div>

          <div
            ref={indemnificationRef}
            className="flex gap-4 flex-col ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              10. Indemnification
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              You agree to indemnify and hold harmless Tatum Bank, its
              employees, agents, directors and affiliates from any claims,
              damages, or expenses arising from your use of the Site or
              violation of these Terms.
            </p>
          </div>

          {/* <div ref={lawRef} className="flex gap-4 flex-col ">
            <p className="font-medium text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              11. Governing Law
            </p>

            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">

              These Terms are governed by the laws of the Federal Republic of
              Nigeria. Any disputes arising from the use of this Site shall be
              resolved in the Nigerian courts.
            </p>
          </div> */}

          <div ref={contactRef} className="flex flex-col gap-4 ">

            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
              11. CONTACT US
            </p>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
              For any questions or concerns about these Terms, please contact us
              at: Tatum Bank Nigeria Limited
            </p>
            <ul className="list-none font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px] flex flex-col gap-3">

              <li>Address: Plot 1088, Cadastral Zone AO1, Area 3, Garki FCT Abuja</li>
              <li>Phone Number: 07000077770</li>
              <li>
                Email: <span className="underline">Info@tatumbank.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default Terms;
