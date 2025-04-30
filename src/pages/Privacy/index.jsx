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

        <div className="flex flex-col gap-5">
          <p className="font-grava font-[450] text-[20px] leading-[150%] tracking-[0.01em] text-[#002244]">TATUM BANK NIGERIA LIMITED</p>
          <p className="font-grava font-[450] text-[20px] leading-[150%] tracking-[0.01em] text-[#002244]">DATA PRIVACY POLICY </p>
          <p className="font-grava font-[450] text-[20px] leading-[150%] tracking-[0.01em] text-[#002244]">Effective Date: March 4th, 2025.</p>
        </div>

        <div className="flex flex-col lg:flex-1">
          <div ref={introductionRef} className="flex flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] tracking-[0.01em] text-[#002244] font-grava">
                1. Introduction
              </p>
              <p className="font-[350] text-[#002244] font-grava tracking-[0.01em] text-base lg:text-[18px] lg:leading-[150%] leading-6">
                Tatum Bank Ltd ("we," "our," "us") is committed to protecting the privacy, security, and 
                confidentiality of our customers' personal data in compliance with the Nigeria Data 
                Protection Regulation (NDPR), the Central Bank of Nigeria (CBN) Consumer Protection Framework, 
                the Consumer Protection Agency of Nigeria, the Payment Card Industry Data Security Standard (PCI-DSS), 
                and the ISO/IEC 27001 information security standard. This Privacy Policy explains how we collect, 
                use, store, and share your personal data while ensuring compliance with applicable regulations.
              </p>
            </div>
          </div>

          <div
            ref={dataCollectionRef}
            className="flex flex-col mt-[33px]"
          >
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                2. Data We Collect:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We collect only the necessary personal data required for banking services, including:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Location Data</li>
                <li>Financial Information (e.g., bank account details, transaction history, card details)</li>
                <li>Device and Browser Information (e.g., IP address, operating system, cookies, and tracking technologies)</li>
                <li>Biometric Data (e.g., facial recognition, fingerprint data, if applicable)</li>
              </ul>
            </div>
          </div>

          <div ref={personalRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                3. Purpose of Data Collection:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We collect and process personal data for the following legitimate purposes:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                <li>To provide seamless banking and financial services</li>
                <li>To comply with legal and regulatory obligations, including Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations</li>
                <li>To improve user experience and personalize banking services</li>
                <li>To prevent fraud, enhance security, and mitigate financial risks</li>
                <li>To conduct market research and service analysis</li>
                <li>To communicate important updates regarding banking services and policy changes</li>
              </ul>
            </div>
          </div>

          <div ref={purposeRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                4. Legal Basis for Processing:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
                <li className="font-[350]">
                  <span className="font-[450]">User Consent:</span> When you explicitly provide consent for data 
                  collection and processing
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Contractual Necessity:</span> To fulfill banking 
                  transactions and provide financial services
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Legal Obligation:</span> To comply with CBN, NDPR, and other 
                  regulatory requirements
                </li>
                <li className="font-[350]">
                  <span className="font-[450]">Legitimate Interest:</span> To prevent fraud, ensure security, 
                  and enhance user experience
                </li>
              </ul>
            </div>
          </div>

          <div ref={sharingRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                5. How Data is Used, Stored, and Shared
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                <span className="font-[450]">Usage:</span> Personal data is processed in accordance with data protection 
                principles and used strictly for its intended purposes.
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] gap-3 flex flex-col">
              <li>
                <span className="font-[450]">Storage:</span> All collected data is securely stored using encryption, 
                access controls, and other industry-standard security measures, in compliance with PCI-DSS and 
                ISO/IEC 27001.
              </li>
              <li className="font-[450]">
                Sharing: <span className="font-[350]">We do not sell or rent personal data. However, we may share data with:</span>
                <ul className="list-disc pl-5  font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] mt-3 gap-2 flex flex-col">
                  <li>
                    Regulatory authorities, law enforcement agencies, and financial oversight bodies 
                    (e.g., CBN, NDIC, EFCC)
                  </li>
                  <li>
                    Authorized third-party service providers for payment processing, 
                    fraud detection, and customer support
                  </li>
                  <li>
                    International financial institutions, where applicable, in compliance with cross-border data 
                    transfer regulations
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div ref={storageRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                6. Data Retention Policy
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We retain personal data only for as long as necessary to fulfill the purposes outlined 
                in this policy and in accordance with NDPR and CBN guidelines. Retention periods are determined by:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
              <li>Regulatory and legal requirements</li>
              <li>Contractual obligations</li>
              <li>Fraud prevention and security considerations</li>
            </ul>
            <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
              After the retention period, data is securely deleted or anonymized to prevent unauthorized access.
            </p>
          </div>

          <div ref={securityRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                7. Users’ Rights:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Under applicable data protection laws, users have the following rights:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]  flex flex-col">
              <li className="font-[350]">
                <span className="font-[450]">Right to Access:</span> Request a copy of the personal data we hold
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Rectification:</span> Correct inaccurate or outdated data
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Erasure:</span> Request deletion of personal data under legal conditions
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Restrict Processing:</span> Limit how we use personal data
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Data Portability:</span> Transfer data to another financial institution
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Withdraw Consent:</span> Revoke consent at any time
              </li>
              <li className="font-[350]">
                <span className="font-[450]">Right to Lodge a Complaint:</span> File a complaint with the Nigeria Data 
                Protection Bureau (NDPB) or relevant regulatory authorities
              </li>
            </ul>
          </div>

          <div ref={rightsRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                8. Security Measures:{" "}
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We implement industry-standard security measures in compliance with PCI-DSS and ISO/IEC 27001, including:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
              <li>End-to-end encryption of sensitive data</li>
              <li>Multi-factor authentication (MFA) for secure access</li>
              <li>Continuous monitoring and fraud detection mechanisms</li>
              <li>Regular security audits and vulnerability assessments</li>
            </ul>
          </div>

          <div ref={cookiesRef} className="flex flex-col gap-4 mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                9. Third-Party Services and Cross-Border Data Transfers:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Some banking services may involve third-party providers. Where data is transferred internationally, 
                we ensure compliance with applicable cross-border data protection laws and apply necessary safeguards.
              </p>
            </div>
          </div>

          <div ref={updatesRef} className="flex gap-4 flex-col mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                10. Accessibility of Privacy Policy:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                This Privacy Policy is accessible via the following channels:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
              <li>The mobile banking app (settings section)</li>
              <li>The official bank website</li>
              <li>In-branch customer service representatives</li>
            </ul>
          </div>

          <div ref={contactRef} className="flex gap-4 flex-col mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                11. Compliance with CBN and Regulatory Guidelines:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We adhere to the following regulatory requirements:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
              <li>CBN Consumer Protection Framework</li>
              <li>Nigeria Data Protection Regulation (NDPR)</li>
              <li>Payment Card Industry Data Security Standard (PCI-DSS)</li>
              <li>ISO/IEC 27001 Information Security Standard</li>
              <li>Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance</li>
              <li>Nigeria Deposit Insurance Corporation (NDIC)</li>
              <li>The Federal Competition and Consumer Protection Commission (FCCPC) guidelines</li>
            </ul>
          </div>

          <div className="flex gap-4 flex-col mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                12. Contact Information:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                For inquiries, complaints, or data protection-related concerns, please contact:
              </p>
            </div>
            <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px] flex flex-col">
              <li>Email: info@tatumbank.com </li>
              <li>Phone: 07000077770</li>
              <li>Address:  Plot 1088, Cadastral Zone AO1, Kaura Namoda Street, Area 3 Garki, Abuja.</li>
              <li>Website: www.tatumbank.com</li>
            </ul>
          </div>

          <div className="flex gap-4 flex-col mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                13. Updates to Privacy Policy:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                We may update this Privacy Policy periodically. Users will be notified of significant changes 
                via email or in-app notifications. Continued use of our banking services after updates constitutes 
                acceptance of the revised policy.
              </p>
            </div>
          </div>

          <div className="flex gap-4 flex-col mt-[33px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px]  text-[#002244] tracking-[0.01em] font-grava">
                14. Explicit Consent Requirement:
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[150%] text-[#002244] text-base lg:text-[18px]">
                Users must provide explicit consent for data collection and processing by checking an opt-in box 
                before account registration, ensuring full compliance with NDPR and CBN guidelines.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
