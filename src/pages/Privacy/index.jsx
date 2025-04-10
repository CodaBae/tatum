import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabName, setTabName] = useState("intro");

  const privacyRef = useRef(null);
  const { state } = useLocation();

  // useEffect(() => {
  //   if (state?.section === "privacy" && privacyRef.current) {
  //     privacyRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [state]);

  const handleClickedTab = (value) => {
    setTabName(value);
  };

  const introductionRef = useRef(null);
  const dataCollectionRef = useRef(null);
  const personalRef = useRef(null);
  const purposeRef = useRef(null);
  const sharingRef = useRef(null);
  const storageRef = useRef(null);
  const securityRef = useRef(null);
  const rightsRef = useRef(null);
  const cookiesRef = useRef(null);
  const updatesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {

    if (tabName === "data" && dataCollectionRef.current) {
      dataCollectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "personal" && personalRef.current) {
      personalRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "purpose" && purposeRef.current) {
      purposeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "sharing" && sharingRef.current) {
      sharingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "storage" && storageRef.current) {
      storageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "security" && securityRef.current) {
      securityRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "rights" && rightsRef.current) {
      rightsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "cookies" && cookiesRef.current) {
      cookiesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "updates" && updatesRef.current) {
      updatesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (tabName === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tabName]);

  useEffect(() => {
    const sectionRefs = [
      introductionRef.current,
      dataCollectionRef.current,
      personalRef.current,
      purposeRef.current,
      sharingRef.current,
      storageRef.current,
      securityRef.current,
      rightsRef.current,
      cookiesRef.current,
      updatesRef.current,
      contactRef.current,
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.indexOf(entry.target);
            if (index !== -1) setActiveTab(index + 1);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    sectionRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={privacyRef}
      className="w-full mb-[56px] lg:mb-[120px] overflow-hidden">
      <div 
        style={{ 
          backgroundImage: `url(https://framerusercontent.com/images/NUH4eUyFO0g76XT8Hd1XgCyLmUU.png)`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#FFCC33] w-full h-[184px] lg:h-[294px] flex items-center lg:z-10 justify-center"
      >
        <p className="font-bold text-[#002244] font-grava text-[34px] lg:text-[75px] mt-[44px] lg:mt-[6%] ">
          Privacy Policy
        </p>
      </div>

      <div className="flex flex-col items-start gap-8 px-5 lg:px-16 pt-[56px] lg:pt-[64px] bg-[#fff] relative">
        <div className="hidden flex-col bg-[#F9FAFB]  w-[396px] rounded-lg p-6 gap-[27px]">
          <p className="font-[350] font-grava text-[#546B82] ">
            Table of content:
          </p>
          <div className="flex flex-col gap-4">
            <div
              onClick={() => handleClickedTab("intro")}
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
              onClick={() => handleClickedTab("data")}
              className={`${
                activeTab === 2
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Data Collection
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("personal")}
              className={`${
                activeTab === 3
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Personal Data
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("purpose")}
              className={`${
                activeTab === 4
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Purpose of Data Use
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("sharing")}
              className={`${
                activeTab === 5
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Data Sharing and Disclosure
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("storage")}
              className={`${
                activeTab === 6
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Data Storage and Retention
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("security")}
              className={`${
                activeTab === 7
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Data Security Measures
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("rights")}
              className={`${
                activeTab === 8
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Data Subject Rights{" "}
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("cookies")}
              className={`${
                activeTab === 9
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Use of Cookies
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("updates")}
              className={`${
                activeTab === 10
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">
                Updates to the Policy
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("contact")}
              className={`${
                activeTab === 11
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
              <p className="font-grava text-[#546B82] text-base">Contact us</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-grava font-[450] text-[20px] leading-[28px] tracking-[1.4%] text-[#002244]">TATUM BANK NIGERIA LIMITED</p>
          <p className="font-grava font-[450] text-[20px] leading-[28px] tracking-[1.4%] text-[#002244]">DATA PRIVACY POLICY </p>
          <p className="font-grava font-[450] text-[20px] leading-[28px] tracking-[1.4%] text-[#002244]">Effective Date: January 2025</p>
        </div>

        <div className="flex flex-col lg:flex-1">
          <div ref={introductionRef} className="flex gap-[40px] flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] tracking-[0.01em] text-[#002244] font-grava">
                1. INTRODUCTION/SCOPE
              </p>
              <p className="font-[350] text-[#002244] font-grava tracking-[0.01em] text-base lg:text-[18px] lg:leading-[150%] leading-6">
                Welcome to Tatum Bank Limited (<span className="font-[450]">“Tatum Bank”, “The Bank”</span>).
                Protecting your personal and financial information with the bank
                is a top priority for us. This Privacy Policy (<span className="font-[450]">“Policy”</span>) guide
                how the bank complies with the data privacy principles in
                processing the Personally Identifiable Information (<span className="font-[450]">PII</span>) of our
                customers, visitors, staff, vendors, users of our product and
                services, other third parties and stakeholders (<span className="font-[450]">data subjects</span>).
                It also highlights the rights and obligation of the data
                subject. The Policy is prepared in accordance with the
                provisions of the Nigeria Data Protection Regulation (<span className="font-[450]">NDPR</span>) and
                Nigeria Data Protection Act (<span className="font-[450]">NDPA</span>), and by extension, the EU
                General Data Protection Regulation (<span className="font-[450]">GDPR</span>), Central Bank of
                Nigeria (<span className="font-[450]">CBN</span>) cybersecurity and IT standards as applicable.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244]  tracking-[0.01em] font-grava">
                1.1 About Tatum Bank Limited{" "}
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:leading-[150%] tracking-[0.01em] leading-6 lg:text-[18px]">
                Tatum Bank Limited is licensed by the Central Bank of Nigeria
                (CBN), the regulatory authority, to provide banking and
                financial services to a wide variety of customers, institutions,
                organizations, small and medium enterprises (SMEs), individuals
                and the public at large. In providing our services, The Bank is
                required to collect and process personal data of customers and
                users of our services with confidentiality and in line with
                applicable laws and regulations. This Policy explains how we
                collect, use, share, retain and protect your data when you use
                our banking services, website, mobile or internet banking
                platform.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.2 Roles and Responsibilities{" "}
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:leading-[150%] tracking-[0.01em] leading-6 lg:text-[18px]">
                Tatum Bank Data Protection Officer (DPO) is responsible for ensuring that this Privacy Notice 
                remains accurate and up-to-date. The DPO also ensures that data subjects are informed 
                before their personal data is collected or processed by Tatum Bank, including data collected via our 
                website. All Tatum Bank employees and staff interacting with personal data must seek the consent of 
                data subjects before processing their personal data securely and ensure that this Privacy Notice is 
                brought to the attention of data subjects at the point of data collection.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.3 Policy Statement:{" "}
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:leading-[150%] tracking-[0.01em] leading-6 lg:text-[18px]">
                At Tatum Bank, we are committed to maintaining the
                confidentiality and security of your personal data. We process
                your data in compliance with applicable laws and regulations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.4 Purpose and Scope of this Policy
              </p>
              <div className="flex gap-4 flex-col">
                <p className="font-[350] text-[#002244] font-grava lg:leading-[150%] tracking-[0.01em] leading-6 text-base lg:text-[18px]">
                  The purpose of the Privacy Policy is to:
                </p>
                <ul className="list-disc pl-5 text-[#002244] font-grava lg:leading-[150%] tracking-[0.01em] leading-6 text-base lg:text-[18px] gap-3 flex flex-col">
                  <li className="font-grava font-[350]">
                    Clearly explain the types of data we collect and why we
                    collect it.
                  </li>
                  <li className="font-grava font-[350]">
                    Describe your rights regarding your data and how you can
                    exercise them.
                  </li>
                  <li className="font-grava font-[350]">
                    Provide transparency about how we protect your privacy.{" "}
                  </li>
                </ul>
              </div>
              <div className="flex gap-5 flex-col">
                <p className="font-[450] text-[#002244] leading-[25px] lm:leading-[30px] font-grava text-base lg:text-[20px]">
                  Scope of This Policy.
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  This policy covers personal and financial information
                  collected through our website, mobile and online applications,
                  physical branches, and customer service interactions as well
                  as the data shared with trusted third-party service providers
                  or processors as part of delivering our services.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.5 Our Legal Obligations.{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We process your data in compliance with applicable laws, which
                include - Nigeria Data Protection Regulation (NDPR), Central
                Bank of Nigeria (CBN) cybersecurity and IT standards and other
                relevant international standards and regulations as applicable.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.6 Your Consent/Agreement.{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                By using our services or accessing our platforms, you consent to
                the collection, use, and sharing of your data as described in
                this Privacy Policy. If you do not agree with this policy,
                please refrain from using our services.
              </p>
            </div>
            {/* <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                1.6 How to Contact Us.{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                If you have questions or concerns about this Privacy Policy or
                how your data is handled, please contact our Data Protection
                Officer (DPO):
                <span className="block mt-1 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  Email: <span className="underline">DPO@TatumBank.com </span>
                </span>
                <span className="block mt-1 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  Phone: ..............................................
                </span>
                <span className="block mt-1 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  Address: ..............................................
                </span>
              </p>
            </div> */}
          </div>

          <div
            ref={dataCollectionRef}
            className="flex flex-col gap-[40px] mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2. DATA COLLECTION
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                To provide secure and efficient banking and financial services,
                we collect and process various types of personal data (i.e.
                Personally Identifiable information-PII). Below is a detailed
                explanation of the data we collect, how we collect it, and why
                we need it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2.1 Types of Data We Collect.
              </p>
              <table className="w-[95%] px-5">
                <tr className="border border-[#cfd4dc]">
                  <th className="text-left w-[40%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] text-[#002244] p-4 border border-y-0 border-l-0 border-[#cfd4dc]" >
                    Type of Data
                  </th>
                  <th className="border-[#cfd4dc] text-left p-4 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] font-grava">
                    Description of Data
                  </th>
                </tr>
                <tr className="border border-[#cfd4dc] ">
                  <td className=" border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Personal Identifiable Information (PII)
                  </td>
                  <td className=" border-[#cfd4dc] p-4 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Full name, gender, marital status, title, date of birth, and
                    nationality. Identification documents, national
                    identification number (NIN), BVN (Bank Verification Number),
                    biometric, face ID, employment history.
                  </td>
                </tr>
                <tr className="border border-[#cfd4dc]">
                  <td className=" border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Contact details
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Contact details Contact details such as phone number, email
                    address, and residential address.
                  </td>
                </tr>
                <tr className="border border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Financial Information
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Bank account details, transaction history, credit/debit card
                    information, Loan applications, credit history, and payment
                    records.
                  </td>
                </tr>
                <tr className="border border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Behavioral Data
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Browsing activity on our platform (e.g., pages viewed, links
                    clicked), Responses to promotional campaigns or surveys,
                    feedbacks.
                  </td>
                </tr>
                <tr className="border border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Technical Data
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Details of devices used to access our website and online
                    services e.g., Internet Protocol (IP) address, time zone
                    setting and location, operating system, browser type, device
                    id, geolocation. Cookies and tracking data to enhance your
                    online experience.
                  </td>
                </tr>
                <tr className="border border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350]  border-y-0 text-[#002244] border-l-0">
                    Others
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    CCTV/Video footage when you access our premises or use our
                    ATMs and telephone conversations via calls made to our
                    operating centers.
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2.2 Why We Collect Your Data
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Every processing purpose has a lawful basis, and the rights of
                the data subjects are safeguarded. Specifically, the data we
                collect from you serves the following purposes:
                <span className="block mt-3">
                  - To verify your identity and comply with regulatory
                  requirements.
                </span>
                <span className="block mt-3">
                  - To process transactions, manage accounts, and deliver
                  banking services.
                </span>
                <span className="block mt-3">
                  - To detect and prevent fraud, unauthorized access, and other
                  security threats.
                </span>
                <span className="block mt-3">
                  - To improve our services through data analysis and customer
                  feedback.
                </span>
                <span className="block mt-3">
                  - To send you updates, alerts, and marketing communications
                  (with your consent).
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2.3 How We Collect Data.{" "}
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] tracking-[0.01em] text-[#002244] text-base lg:text-[18px]">
                  We collect personal data through various channels, including:
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] mt-[16px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                    <li>
                      <span className="font-semibold">Direct Interactions:</span> When you open an account or apply for
                      our services. When you fill out forms on our website,
                      mobile app or other systems. Through customer service
                      interactions (calls, emails, or chats).
                    </li>
                  </ul>
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                    <li>
                      <span className="font-semibold">Automated Technologies:</span> Cookies and analytics tools to track website usage and
                      improve functionality. Automated systems that monitor
                      transactions for fraud prevention and compliance.
                    </li>
                  </ul>
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                    <li>
                      <span className="font-semibold">Third Parties:</span> Credit bureaus or financial institutions for
                      creditworthiness checks. Regulatory databases for
                      compliance with Know Your Customer (KYC) and Anti-Money
                      Laundering (AML) requirements.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2.4 Sensitive Data{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Certain types of sensitive data, such as biometric information
                (e.g., fingerprints or facial recognition) may be collected for
                enhanced security and authentication. This is done in strict
                compliance with data protection regulations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2.5 Protecting Children’s Privacy{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We do not intentionally collect, use, or share information that
                could reasonably be used to identify children without prior
                parental/guardian consent consistent with applicable laws.
              </p>
            </div>
          </div>

          <div ref={personalRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                3. LAWFUL BASIS FOR COLLECTING AND PROCESSING PERSONAL DATA
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We process your personal data in line with the relevant Data
                Protection Laws and based on the following legal basis:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                <li className="font-[350]">
                  <span className="font-[450] ">Consent - </span>
                  Where you have consented to our processing of your personal
                  data for one or more specific reasons. Such consent is given
                  by you through your continuous use of the Services and our
                  website.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">
                    Performance of a contract -
                  </span>
                  In order to perform a contract, we have with you or a contract
                  to which you are a party to and in order to take necessary
                  steps at your request prior to entering into such a contract.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">
                    Legal obligation that the bank is required to meet -
                  </span>
                  E.g. where processing of personal data is required by law.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Legitimate interest -</span>
                  To protect legitimate interests of data subjects, including
                  the protection of rights and freedom of the Data Subject and
                  carry out the purposes of our business.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Vital interest -</span>
                  In order to process data for data subjects when they are in
                  critical life threatening situations where they may not be
                  able to provide consent for data processing, and which may be
                  vital for the subjects survival.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Public interest -</span>
                  When the bank is mandated to carry out such processing in the
                  interest of the public.
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-[26px] gap-5">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Every processing purpose has at least one lawful basis 
                for processing to safeguard the rights of the data subjects, as listed below:
              </p>
              <table className="w-[95%]  px-5">
                <tr className="border h-[60px] border-[#cfd4dc]">
                  <th className=" border-[#cfd4dc] text-left w-[55%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] text-[#002244] p-4 border border-y-0 border-l-0">
                    Purpose of Processing
                  </th>
                  <th className="text-left p-4 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] font-grava">
                    Lawful Basis of Processing
                  </th>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc] ">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Account creation, identity verification and maintenance of records
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Contract
                  </td>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Vendor validation/information processing
                  </td>
                  <td className="border-[#cfd4dc] p-4 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Contract
                  </td>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc]">
                  <td className="border-[#cfd4dc] p-4 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Employment
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Contract
                  </td>
                </tr>          
              </table>
            </div>

          </div>

          <div ref={purposeRef} className="flex flex-col gap-4 mt-[48px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                4. PURPOSE OF DATA USE
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We will collect and process only required information from you
                in a manner that complies with the Nigeria Data Protection
                Regulation (NDPR/A) and by extension EU’s General Data
                Protection Regulation (GDPR). The data collected is to enable us
                to provide you with secure, efficient, and personalized banking
                and financial services. Below, we outline the specific purposes
                for which your data is used:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-4 flex flex-col">
                <li className="font-[350]">
                  <span className="font-[450]">To provide banking services to you</span> – The data collected will
                  enable us to authenticate you and authorize access to our
                  services on the various channels.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Communication</span> - The information collected will enable us to
                  contact you through email, short message services (SMS)/text
                  messages, phone call and push notifications. Sending important
                  updates, such as changes to our services, policies, or terms.
                  Responding to your inquiries, requests, or complaints through
                  customer support channels. Providing alerts and notifications
                  regarding transactions, account activity, or security
                  concerns.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Advertising and Marketing</span> - We serve you tailored
                  advertisements through our apps and other channels based on
                  your preferences and account activity (with your consent where
                  required). Conducting surveys and feedback requests to improve
                  our offerings. We use data and content about our customers for
                  invitations, promotions, and communications solely for
                  promoting our services.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Customer Support</span> - We use the data needed to investigate,
                  respond to, and resolve complaints and service issues.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">For Analytics and Research</span> - Analyzing user behavior and
                  trends to optimize our services. Conducting research for
                  product development and market analysis. Generating
                  statistical reports, using anonymized or aggregated data, to
                  inform business decisions
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">For Business Operations</span> - Facilitating internal audits, risk
                  management, and compliance processes. Supporting mergers,
                  acquisitions, or other corporate transactions, subject to
                  confidentiality safeguards.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Security and Fraud prevention</span> - Tatum Bank will use your data
                  for security purposes or to investigate possible fraud or
                  other violations of our Terms and Conditions or this Privacy
                  Policy and/or attempts to harm our customers and/or visitors
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Legal and Regulatory Obligations</span> - Meeting mandatory reporting
                  requirements to regulatory authorities like the Central Bank
                  of Nigeria (CBN) and Nigerian Financial Intelligence Unit
                  (NFIU). Conducting Anti-Money Laundering (AML), Combating the
                  Financing of Terrorism (CFT) and Counter Proliferation
                  financing (CPF) checks. Retaining records to comply with tax
                  laws and other statutory requirements.
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Your Rights</span> - We ensure that your data is used only for the
                  purposes outlined above, in compliance with applicable laws
                  and regulations. You have the right to:
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-2 flex flex-col">
                    <li className="font-[350]">
                      Inquire about how your data is used.
                    </li>
                    <li className="font-[350]">
                      Object to certain uses of your data, such as for marketing
                      purposes.
                    </li>
                    <li className="font-[350]">
                      Withdraw consent for specific activities, where
                      applicable.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div ref={sharingRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                5. DATA SHARING AND DISCLOSURE
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We are committed to protecting your personal data and will only
                share it in ways that comply with applicable laws and
                regulations. Below is an outline of how and with whom we may
                share your data.
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-3 flex flex-col">
              <li className="font-[450]">
                Parties with Whom We May Share Your Data.
                <ul className="list-decimal pl-5  font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] mt-3 gap-2 flex flex-col">
                  <li>
                    <span className="font-[450]">Regulatory Authorities:</span> We are required to share your data
                    with regulatory bodies, such as the Central Bank of Nigeria
                    (CBN), Nigeria Inter-Bank Settlement System (NIBSS), or
                    other governmental agencies, to comply with legal and
                    regulatory obligations (e.g., KYC, AML/CFT/CPF).
                  </li>
                  <li>
                    <span className="font-[450]">Third-Party Service Providers:</span> We may engage trusted
                    third-party vendors to perform services on our behalf, such
                    as: Payment processing and transaction facilitation, Data
                    storage and cloud computing services, Fraud detection and
                    cybersecurity monitoring, Customer support and
                    communication.
                  </li>
                  <li>
                    <span className="font-[450]">Credit Bureaus and Financial Institutions:</span> To assess your
                    creditworthiness or for loan-related services, we may share
                    your data with credit bureaus or partner financial
                    institutions.
                  </li>
                  <li>
                    <span className="font-[450]">Law Enforcement:</span> We may disclose your data to law
                    enforcement or other government authorities if required by
                    law, court order, or to protect the rights and safety of our
                    users, employees, or the public.
                  </li>
                  <li>
                    <span className="font-[450]">Professional Advisors: </span> In certain cases, we may share data
                    with legal, tax, or financial advisors to ensure compliance
                    with our obligations.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-[450]">Cross-Border Data Transfers -</span> If your data needs to be transferred
                outside of Nigeria for processing or storage, we will ensure
                that such transfers comply with relevant data protection laws,
                including the NDPR. This includes ensuring that the receiving
                country has adequate data protection measures.
              </li>
              <li>
                <span className="font-[450]">Data Anonymization -</span> In some cases, we may share anonymized or
                aggregated data (data that does not identify you personally)
                with third parties for research, analytics, or product
                development.
              </li>
            </ul>
          </div>

          <div ref={storageRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                6. DATA STORAGE AND RETENTION
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We store most of your personal data securely in our internal
                systems, backup media and the Cloud. The personal data you
                provide will be retain while your account is active and in
                existence or as needed to provide you with our services. For
                closed accounts, we will retain the record within the maximum
                period specified by CBN regulation.
              </p>
            </div>
          </div>

          <div ref={securityRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                7. DATA SECURITY MEASURES
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We have implemented appropriate organizational and technical
                security measures to protect your personal data with the bank.
                These measures include encryption of data using
                industry-standard protocols such as Transport Layer Security
                (TLS), restricting access to your personal data to only
                authorized personnel with legitimate business purpose, collect
                and store only the data necessary to provide our services and
                comply with legal obligations, implementing relevant automated
                controls to secure the data and continually review our internal
                information technology systems to ensure they are adequately
                secured and procedures to deal with any suspected data breach
                are in place. 
                <span className="block mt-5">
                  In the unlikely event of a data breach, The Bank
                  will take necessary steps to mitigate any loss or destruction of
                  data and, if appropriate, will notify you and any applicable
                  authority of such a breach.
                </span> 
                <span className="block mt-5">
                  We will regularly review and enhance
                  our security policies and technologies to adapt to evolving
                  threats and ensure ongoing protection. 
                </span>
                <span className="mt-5 block">
                  As a data subject, you
                  have the responsibility to keep safe your user credential and
                  password/PIN use to access our website, mobile and internet
                  banking app, and other services. The password should not be
                  shared or disclosed to anyone.
                </span>
              </p>
            </div>
          </div>

          <div ref={rightsRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                8. DATA SUBJECT RIGHTS{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We are committed to ensuring transparency and empowering you
                with control over your personal data. As a user of our services,
                you have the following rights under applicable data protection
                laws:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-2 flex flex-col">
              <li>
                <span className="font-[450]">Right to Access</span> - You have the right to request access to the
                personal data we hold about you. This includes understanding how
                your data is being used and obtaining copies of your
                information.
              </li>
              <li>
                <span className="font-[450]">Right to Rectification</span> - If you believe any information, we hold
                is inaccurate or incomplete, you have the right to request
                corrections or updates. We will update your information promptly
                upon verification of your request.
              </li>
              <li>
                <span className="font-[450]">Right to Erasure (Right to Be Forgotten)</span> - You may request that
                we delete your personal data where it is no longer necessary for
                the purpose it was collected or you withdraw your consent and
                there is no other legal basis for processing or the data was
                unlawfully processed. Note: Certain data may need to be retained
                to comply with legal or regulatory obligations.
              </li>
              <li>
                <span className="font-[450]">Right to Restrict Processing</span> - You have the right to request
                that we limit the processing of your data if you contest the
                accuracy of the data or you object to the processing and we are
                evaluating your request or the processing is unlawful, but you
                prefer restriction over deletion.
              </li>
              <li>
                <span className="font-[450]">Right to Data Portability</span> - You may request a copy of your data
                in a structured, machine-readable format. Where technically
                feasible, we can transfer your data directly to another service
                provider at your request.
              </li>
              <li>
                <span className="font-[450]">Right to Object</span> - You have the right to object to the processing
                of your data for direct marketing purposes or automated
                decision-making, including profiling.
              </li>
              <li>
                <span className="font-[450]">Right to Withdraw Consent</span> - Where we rely on your consent for
                processing, you can withdraw it at any time without affecting
                the lawfulness of prior processing.
              </li>
              <li>
                <span className="font-[450]">Right to Be Informed</span> - You have the right to be informed about
                how your data is collected, used, shared, and stored in a clear
                and transparent manner.
              </li>
              <li>
                <span className="font-[450]">Right to Lodge a Complaint</span> - If you believe your rights have
                been violated, you have the right to lodge a complaint with: Our
                Data Protection Officer (DPO) using the contact details below
                and the relevant data protection authority, such as the Nigeria Data Protection Commission (NDPC)
              </li>
            </ul>
            <div className="flex flex-col gap-5">
              <table className="w-[100%] mt-[26px] px-5">
                <tr className="border h-[60px] border-[#cfd4dc]">
                  <th className=" border-[#cfd4dc] text-left w-[35%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] text-[#002244] p-4 border border-y-0 border-l-0">
                    Description
                  </th>
                  <th className="border-[#cfd4dc] text-left p-4 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] font-grava border border-y-0 border-l-0">
                    Data Protection Officer (DPO)
                  </th>
                  <th className="border-[#cfd4dc] text-left p-4 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[450] font-grava">
                    Supervisory Authority
                  </th>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc] ">
                  <td className="p-4 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Contact Name
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border border-y-0 border-l-0">
                    Fidelis Elogie
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    Nigeria Data Protection Commission (NDPC)
                  </td>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc]">
                  <td className="p-4 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Address
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border border-y-0 border-l-0">
                    Plot 1088, Cadestral Zone A01, Area 3, Garki FCT Abuja
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    No 12 Clement Isong Street, Asokoro, Abuja, Nigeria
                  </td>
                </tr>
                <tr className="border h-[100px] border-[#cfd4dc]">
                  <td className="p-4 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Email
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border border-y-0 border-l-0">
                    dpo@tatumbank.com
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    info@ndpc.gov.ng
                  </td>
                </tr>  
                <tr className="border h-[100px] border-[#cfd4dc]">
                  <td className="p-4 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border-l-0">
                    Phone Number
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244] border border-y-0 border-l-0">
                    +234 (0) 703 075 1962
                  </td>
                  <td className="p-4 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[350] text-[#002244]">
                    +234 (0) 916 061 5551
                  </td>
                </tr>          
              </table>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Please be informed that <span className="font-[450] cursor-pointer"><a href="mailto:dpo@tatumbank.com">dpo@tatumbank.com </a></span>  
                is a designated email that addresses data privacy complaints,
                requests, and inquiries <span className="font-[450]">ONLY</span>
              </p>
            </div>
          </div>

          <div ref={cookiesRef} className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                9. USE OF COOKIES
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Our website and mobile applications use cookies and similar
                tracking technologies to enhance your experience, provide
                personalized services, and improve security. Below, we explain
                the types of cookies we use, their purposes, and your rights
                regarding their use.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-grava font-[450] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                What Are Cookies?
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Cookies are small files generated by the web servers and stored
                on your device (computer, smartphone, tablet) when you visit our
                website or use our applications. They help us recognize your
                device, remember your preferences, and analyze website usage.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                The types of Cookies we use are:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-3 flex flex-col">
                <li>
                  <span className="font-[450]">Strictly Necessary Cookies</span> - These cookies are essential for
                  the operation of our website and services. Eg..Authentication,
                  login sessions, and fraud detection. Without these cookies,
                  some features of our platform may not function properly.
                </li>
                <li>
                  <span className="font-[450]">Performance Cookies</span> - These cookies collect information about
                  how you use our website, such as the pages you visit, and any
                  errors encountered. The purpose is to improve the
                  functionality and user experience of our website.
                </li>
                <li>
                  <span className="font-[450]">Marketing and Analytics Cookies</span> - These cookies track your
                  interactions with our website to provide personalized
                  advertisements or recommendations.
                </li>
                <li>
                  <span className="font-[450]">Third-Party Cookies</span> - Some cookies may be placed by trusted
                  third-party services integrated into our platform (e.g.,
                  payment processors, social media platforms).
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-3 flex flex-col">
                <li>
                  <span className="font-[450]">Personalization:</span>
                  To provide tailored content and advertisements based on your
                  preferences.
                </li>
                <li>
                  <span className="font-[450]">Security:</span>
                  To ensure safe and secure access to our website.
                </li>
                <li>
                  <span className="font-[450]">Analytics:</span>
                  To collect data about website traffic and user behavior for
                  continuous improvement.
                </li>
                <li>
                  <span className="font-[450]">Functionality:</span>
                  To remember your preferences and provide a seamless user
                  experience.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                You have the option to manage your cookie preferences. Most web
                browsers allow you to control cookies through their settings.
                You can:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-2 flex flex-col">
                <li>
                  Enabling or disabling the cookies (though not recommended).
                </li>
                <li>
                  Delete cookies stored on your device.
                </li>
                <li>
                  Adjust browser settings to notify you before accepting
                  cookies.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                How We Use Tracking Technologies:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-2 flex flex-col">
                <li>To secure and authenticate your sessions.</li>
                <li>To detect and prevent fraudulent activities.</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>
                  To provide personalized content and advertisements (where
                  applicable).
                </li>
                <li>
                  To improve website performance and enhance your overall
                  experience.
                </li>
              </ul>
            </div>

            <div className="flex">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                <span className="font-[350]">Cookie Preferences -</span> You can manage your cookie preferences through our website or
                app settings by opting in or out of non-essential cookies.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                <span className="font-[350]">Consent -</span>
                By using our website or mobile app, you consent to the use of
                cookies and tracking technologies as described in this policy.
                For marketing or analytics cookies, we will seek your explicit
                consent where required by law.
              </p>
            </div>
          </div>

          <div ref={updatesRef} className="flex gap-4 flex-col mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                10. UPDATES TO THE POLICY
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Our Privacy Policy may be updated from time to time in line with
                applicable laws, regulations and best practices. Changes to the
                Privacy Policy will be updated and the “Effective date” of this
                document amended accordingly.
              </p>
            </div>
          </div>

          <div ref={contactRef} className="flex gap-4 flex-col mt-[40px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                11. CONTACT US
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                  Kindly contact us if you have any questions/enquiry about this
                  Privacy Policy
                </p>
                <ul className="list-disc pl-7 font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col gap-2 font-grava">
                  <li>
                    Email: {" "}
                    <span className="underline">
                      contact@tatumbank.com{" "}
                    </span> or{" "}
                    <span className="underline">dpo@tatumbank.com</span>
                  </li>
                  <li>Address: Plot 1088, Cadastral Zone AO1, Area 3, Garki FCT Abuja</li>
                  <li>Telephone: xxxxxxxxxxxxxxxx</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
