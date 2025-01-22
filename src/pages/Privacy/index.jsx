import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState(1)

  const privacyRef = useRef(null);
  const { state } = useLocation();

  useEffect(() => {
      if (state?.section === "privacy" && privacyRef.current) {
        privacyRef.current.scrollIntoView({ behavior: "smooth" });
      }
  }, [state]);


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
       { threshold: 0.1 }  // Trigger when 10% of the section is in view
     );
 
     sectionRefs.forEach((section) => {
       if (section) observer.observe(section);
     });
 
     return () => observer.disconnect();
   }, []);


  return (
    <div ref={privacyRef} className='w-full mb-[56px] lg:mb-[120px]'>
      <div className='bg-[#FFCC33] w-full h-[184px] lg:h-[314px] flex items-center lg:fixed lg:z-10 justify-center'>
          <p className='font-bold text-[#002244] font-grava text-[32px] lg:text-[75px] mt-[44px] lg:mt-[66px] '>Privacy Policy</p>
      </div>
      <div className='flex flex-col lg:flex-row items-start gap-8 px-5 lg:px-16 pt-[56px] lg:pt-[364px] bg-[#fff] relative'>
        <div className='hidden lg:flex flex-col bg-[#F9FAFB]  w-[396px] rounded-lg p-6 gap-[27px]'>
          <p className='font-medium font-grava text-[#546B82] '>Table of content:</p>
          <div className='flex flex-col gap-4'>
            <div className={`${activeTab === 1 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Introduction</p>
            </div>
            <div className={`${activeTab === 2 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Data Collection</p>
            </div>
            <div className={`${activeTab === 3 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Personal Data</p>
            </div>
            <div className={`${activeTab === 4 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Purpose of Data Use</p>
            </div>
            <div className={`${activeTab === 5 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Data Sharing and Disclosure</p>
            </div>
            <div className={`${activeTab === 6 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Data Storage and Retention</p>
            </div>
            <div className={`${activeTab === 7 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Data Security Measures</p>
            </div>
            <div className={`${activeTab === 8 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Data Subject Rights </p>
            </div>
            <div className={`${activeTab === 9 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Use of Cookies</p>
            </div>
            <div className={`${activeTab === 10 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Updates to the Policy</p>
            </div>
            <div className={`${activeTab === 11 ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg" : ""}  h-[48px] py-3 px-4`}>
              <p className='font-grava text-[#546B82] text-base'>Contact us</p>
            </div>
          </div>

        </div>
        <div className='flex flex-col lg:flex-1 lg:overflow-y-auto lg:max-h-[calc(200vh-364px)] '>

          <div ref={introductionRef} className='flex gap-4 flex-col'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.	INTRODUCTION/SCOPE</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Welcome to Tatum Bank Limited (“Tatum Bank”, “The Bank”). 
                Protecting your personal and financial information with the bank is a top priority for us. 
                This Privacy Policy (“Policy”) guide how the bank complies with the data privacy principles 
                in processing the Personally Identifiable Information (PII) of our customers, visitors, 
                staff, vendors, users of our product and services, other third parties and stakeholders (data subjects). 
                It also highlights the rights and obligation of the data subject.  
                The Policy is prepared in accordance with the provisions of the Nigeria Data Protection Regulation (NDPR) and 
                Nigeria Data Protection Act (NDPA), and by extension, the EU General Data Protection Regulation (GDPR), 
                Central Bank of Nigeria (CBN) cybersecurity and IT standards as applicable.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.1	About Tatum Bank Limited </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Tatum Bank Limited is licensed by the Central Bank of Nigeria (CBN), the regulatory authority, 
                to provide banking and financial services to a wide variety of customers, institutions, organizations, 
                small and medium enterprises (SMEs), individuals and the public at large. In providing our services, 
                The Bank is required to collect and process personal data of customers and users of our services with 
                confidentiality and in line with applicable laws and regulations. This Policy explains how we collect, 
                use, share, retain and protect your data when you use our banking services, website, mobile or internet 
                banking platform.  
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.2	Policy Statement: </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                At Tatum Bank, we are committed to maintaining the confidentiality and security of your personal data. 
                We process your data in compliance with applicable laws and regulations.  
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.3	Purpose and Scope of this Policy</p>
              <div className='flex gap-2 flex-col'>
                <p className='font-normal text-[#002244] font-grava text-base lg:text-[19px]'>
                  The purpose of the Privacy Policy is to:  
                </p>
                <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                  <li className='font-grava'>Clearly explain the types of data we collect and why we collect it.</li>
                  <li className='font-grava'>Describe your rights regarding your data and how you can exercise them.</li>
                  <li className='font-grava'>Provide transparency about how we protect your privacy. </li>
                </ul>
              </div>
              <div className='flex gap-2 flex-col'>
                <p className='font-normal text-[#002244] font-grava text-base lg:text-[19px]'>
                  Scope of This Policy.  
                </p>
                <p className="font-grava text-[#002244] text-base lg:text-[19px]">
                  This policy covers personal and financial information collected through our website, 
                  mobile and online applications, physical branches, and customer service interactions 
                  as well as the data shared with trusted third-party service providers or processors 
                  as part of delivering our services. 
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.4	Our Legal Obligations. </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We process your data in compliance with applicable laws, which include - 
                Nigeria Data Protection Regulation (NDPR), Central Bank of Nigeria (CBN) 
                cybersecurity and IT standards and other relevant international standards and regulations as applicable.  
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.5	Your Consent/Agreement. </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                By using our services or accessing our platforms, you consent to the collection, use, 
                and sharing of your data as described in this Privacy Policy. If you do not agree with this policy, 
                please refrain from using our services.  
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>1.6	How to Contact Us. </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                If you have questions or concerns about this Privacy Policy or how your data is handled, 
                please contact our Data Protection Officer (DPO): 
                <span className='block mt-1 font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>Email: <span className='underline'>DPO@TatumBank.com </span></span>
                <span className='block mt-1 font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>Phone: ..............................................</span>
                <span className='block mt-1 font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>Address: ..............................................</span>
              </p>
            </div>
          </div>

          <div ref={dataCollectionRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2. DATA COLLECTION</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                To provide secure and efficient banking and financial services, 
                we collect and process various types of personal data (i.e. Personally Identifiable information-PII). 
                Below is a detailed explanation of the data we collect, how we collect it, 
                and why we need it.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2.1	Types of Data We Collect.</p>
              <table className='w-[95%] px-5'>
                <tr className='border border-[#002244]'>
                  <th className='text-left w-[40%] font-grava text-[#002244] p-2 border border-y-0 border-l-0'>Type of Data</th>
                  <th className='text-left p-2 text-[#002244] font-grava'>Description of Data</th>
                </tr>
                <tr className='border border-[#002244] '>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Personal Identifiable Information (PII)</td>
                  <td className='p-2 text-[#002244]'>
                    Full name, gender, marital status, title, date of birth, and nationality. 
                    Identification documents, national identification number (NIN), BVN (Bank Verification Number), 
                    biometric, face ID, employment history.
                  </td>
                </tr>
                <tr className='border border-[#002244]'>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Contact details</td>
                  <td className='p-2 text-[#002244]'>
                    Contact details	Contact details such as phone number, email address, and residential address. 
                  </td>
                </tr>
                <tr className='border border-[#002244]'>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Financial Information</td>
                  <td className='p-2 text-[#002244]'>
                    Bank account details, transaction history, credit/debit card information, 
                    Loan applications, credit history, and payment records. 
                  </td>
                </tr>
                <tr className='border border-[#002244]'>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Behavioral Data</td>
                  <td className='p-2 text-[#002244]'>
                    Browsing activity on our platform (e.g., pages viewed, links clicked), 
                    Responses to promotional campaigns or surveys, feedbacks.
                  </td>
                </tr>
                <tr className='border border-[#002244]'>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Technical Data</td>
                  <td className='p-2 text-[#002244]'>
                    Details of devices used to access our website and online services e.g., 
                    Internet Protocol (IP) address, time zone setting and location, operating system, 
                    browser type, device id, geolocation. Cookies and tracking data to enhance your online experience. 
                  </td>
                </tr>
                <tr className='border border-[#002244]'>
                  <td className='p-2 border border-y-0 text-[#002244] border-l-0'>Others</td>
                  <td className='p-2 text-[#002244]'>
                    CCTV/Video footage when you access our premises or use our ATMs and telephone conversations 
                    via calls made to our operating centers.
                  </td>
                </tr>
              </table>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2.2	Why We Collect Your Data</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Every processing purpose has a lawful basis, and the rights of the data subjects are safeguarded. 
                Specifically, the data we collect from you serves the following purposes:
                <span className='block'>-	To verify your identity and comply with regulatory requirements.</span>
                <span className='block'>-	To process transactions, manage accounts, and deliver banking services.</span>
                <span className='block'>-	To detect and prevent fraud, unauthorized access, and other security threats.</span>
                <span className='block'>-	To improve our services through data analysis and customer feedback.</span>
                <span className='block'>-	To send you updates, alerts, and marketing communications (with your consent).</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2.3	How We Collect Data. </p>
              <div className='flex flex-col gap-4'>
                <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                  We collect personal data through various channels, including:
                  <ul className='list-disc pl-5'> 
                    <li>
                      Direct Interactions: When you open an account or apply for our services. 
                      When you fill out forms on our website, mobile app or other systems. 
                      Through customer service interactions (calls, emails, or chats).
                    </li>
                  </ul>
                </p>
                <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                	Automated Technologies: 
                  <ul className='list-disc pl-5'> 
                    <li>
                      Cookies and analytics tools to track website usage and improve functionality. 
                      Automated systems that monitor transactions for fraud prevention and compliance. 
                    </li>
                  </ul>
                </p>
                <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                	Third Parties:  
                  <ul className='list-disc pl-5'> 
                    <li>
                      Credit bureaus or financial institutions for creditworthiness checks.  
                      Regulatory databases for compliance with Know Your Customer (KYC) and 
                      Anti-Money Laundering (AML) requirements. 
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2.4	Sensitive Data </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Certain types of sensitive data, such as biometric information 
                (e.g., fingerprints or facial recognition) may be collected for enhanced security and authentication. 
                This is done in strict compliance with data protection regulations.  
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>2.5	Protecting Children’s Privacy </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We do not intentionally collect, use, or share information that could reasonably be used to identify 
                children without prior parental/guardian consent consistent with applicable laws. 
              </p>
            </div>


          </div>

          <div ref={personalRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>3.	LAWFUL BASIS FOR COLLECTING AND PROCESSING PERSONAL DATA</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We process your personal data in line with the relevant Data Protection Laws and based on the 
                following legal basis: 
              </p>
              <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>
                  <span className='font-medium'>Consent -</span>
                  Where you have consented to our processing of your personal data for one or more specific reasons. 
                  Such consent is given by you through your continuous use of the Services and our website.
                </li>
                <li>
                  <span className='font-medium'>Performance of a contract -</span> 
                  In order to perform a contract, we have with you or a contract to which you are a party to 
                  and in order to take necessary steps at your request prior to entering into such a contract.
                </li>
                <li>
                  <span className='font-medium'>Legal obligation that the bank is required to meet -</span> 
                  E.g. where processing of personal data is required by law.  
                </li>
                <li>
                  <span className='font-medium'>Legitimate interest  -</span> 
                  To protect legitimate interests of data subjects, including the protection of rights and freedom of 
                  the Data Subject and carry out the purposes of our business.  
                </li>
                <li>
                  <span className='font-medium'>Vital interest  -</span> 
                  In order to process data for data subjects when they are in critical life threatening situations 
                  where they may not be able to provide consent for data processing, and which may be vital for 
                  the subjects survival.  
                </li>
                <li>
                  <span className='font-medium'>Public interest -</span> 
                  When the bank is mandated to carry out such processing in the interest of the public.   
                </li>
              </ul>
            </div>
          </div>

          <div ref={purposeRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>4.	 PURPOSE OF DATA USE</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We will collect and process only required information from you in a manner that complies with the 
                Nigeria Data Protection Regulation (NDPR/A) and by extension EU’s General Data Protection Regulation 
                (GDPR). The data collected is to enable us to provide you with secure, efficient, and personalized 
                banking and financial services. Below, we outline the specific purposes for which your data is used:
              </p>
              <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>
                	To provide banking services to you – The data collected will enable us to authenticate you and 
                  authorize access to our services on the various channels.  
                </li>
                <li>
                  Communication - The information collected will enable us to contact you through email, 
                  short message services (SMS)/text messages, phone call and push notifications. 
                  Sending important updates, such as changes to our services, policies, or terms. 
                  Responding to your inquiries, requests, or complaints through customer support channels. 
                  Providing alerts and notifications regarding transactions, account activity, or security concerns.
                </li>
                <li>
                	Advertising and Marketing - We serve you tailored advertisements through our apps and other channels 
                  based on your preferences and account activity (with your consent where required). 
                  Conducting surveys and feedback requests to improve our offerings. We use data and content 
                  about our customers for invitations, promotions, and communications solely for promoting our services.
                </li>
                <li>
                	Customer Support - We use the data needed to investigate, respond to, 
                  and resolve complaints and service issues.  
                </li>
                <li>
                  For Analytics and Research - Analyzing user behavior and trends to optimize our services. 
                  Conducting research for product development and market analysis. Generating statistical reports, 
                  using anonymized or aggregated data, to inform business decisions
                </li>
                <li>
                	For Business Operations - Facilitating internal audits, risk management, and compliance processes. 
                  Supporting mergers, acquisitions, or other corporate transactions, subject to confidentiality 
                  safeguards.   
                </li>
                <li>
                	Security and Fraud prevention - Tatum Bank will use your data for security purposes or to 
                  investigate possible fraud or other violations of our Terms and Conditions or this Privacy Policy 
                  and/or attempts to harm our customers and/or visitors  
                </li>
                <li>
                	Legal and Regulatory Obligations - Meeting mandatory reporting requirements to regulatory 
                  authorities like the Central Bank of Nigeria (CBN) and Nigerian Financial Intelligence Unit (NFIU). 
                  Conducting Anti-Money Laundering (AML), Combating the Financing of Terrorism (CFT) 
                  and Counter Proliferation financing (CPF) checks. Retaining records to comply with tax laws and other 
                  statutory requirements. 
                </li>
                <li>
                  Your Rights:
                  We ensure that your data is used only for the purposes outlined above, 
                  in compliance with applicable laws and regulations. You have the right to:
                  <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                    <li>Inquire about how your data is used.</li>
                    <li>Object to certain uses of your data, such as for marketing purposes.</li>
                    <li>Withdraw consent for specific activities, where applicable.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div ref={sharingRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>5.	DATA SHARING AND DISCLOSURE</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We are committed to protecting your personal data and will only share it in ways that comply with 
                applicable laws and regulations. Below is an outline of how and with whom we may share your data.
              </p>
            </div>
            <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
              <li>
                Parties with Whom We May Share Your Data.
                <ul className='list-decimal pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col'>
                  <li>
                    Regulatory Authorities:
                    We are required to share your data with regulatory bodies, 
                    such as the Central Bank of Nigeria (CBN), Nigeria Inter-Bank Settlement System (NIBSS), 
                    or other governmental agencies, to comply with legal and regulatory obligations
                    (e.g., KYC, AML/CFT/CPF).
                  </li>
                  <li>
                    Third-Party Service Providers:
                    We may engage trusted third-party vendors to perform services on our behalf, such as:
                    Payment processing and transaction facilitation, Data storage and cloud computing services, 
                    Fraud detection and cybersecurity monitoring, Customer support and communication. 
                  </li>
                  <li>
                    Credit Bureaus and Financial Institutions:
                    To assess your creditworthiness or for loan-related services, 
                    we may share your data with credit bureaus or partner financial institutions.
                  </li>
                  <li>
                    Law Enforcement:
                    We may disclose your data to law enforcement or other government authorities if required by law, 
                    court order, or to protect the rights and safety of our users, employees, or the public.
                  </li>
                  <li>
                    Professional Advisors:
                    In certain cases, we may share data with legal, tax, or financial advisors to ensure compliance 
                    with our obligations.
                  </li>
                </ul>
              </li>
              <li>
                Data Sharing for Marketing Purposes
                We will never sell your data to third parties for marketing purposes. 
                With your explicit consent, we may share limited information with marketing partners 
                to deliver personalized offers or promotions.
              </li>
              <li>
                Cross-Border Data Transfers
                If your data needs to be transferred outside of Nigeria for processing or storage, 
                we will ensure that such transfers comply with relevant data protection laws, including the NDPR. 
                This includes ensuring that the receiving country has adequate data protection measures.
              </li>
              <li>
              	Data Anonymization
                In some cases, we may share anonymized or aggregated data (data that does not identify you personally) 
                with third parties for research, analytics, or product development.
              </li>
            </ul>
          </div>

          <div ref={storageRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>6.	DATA STORAGE AND RETENTION</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We store most of your personal data securely in our internal systems, backup media and the Cloud. 
                The personal data you provide will be retain while your account is active and in existence or as 
                needed to provide you with our services. For closed accounts, we will retain the record within the 
                maximum period specified by CBN regulation.
              </p>
            </div>
          </div>

          <div ref={securityRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>7.	DATA SECURITY MEASURES</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We have implemented appropriate organizational and technical security measures to protect your personal 
                data with the bank. These measures include encryption of data using industry-standard protocols such as 
                Transport Layer Security (TLS), restricting access to your personal data to only authorized personnel 
                with legitimate business purpose, collect and store only the data necessary to provide our services and 
                comply with legal obligations, implementing relevant automated controls to secure the data and 
                continually review our internal information technology systems to ensure they are adequately secured 
                and procedures to deal with any suspected data breach are in place.
                In the unlikely event of a data breach, The Bank will take necessary steps to mitigate any loss or 
                destruction of data and, if appropriate, will notify you and any applicable authority of such a breach.
                We will regularly review and enhance our security policies and technologies to adapt to evolving 
                threats and ensure ongoing protection. 
                As a data subject, you have the responsibility to keep safe your user credential and password/PIN use 
                to access our website, mobile and internet banking app, and other services. The password should not be 
                shared or disclosed to anyone.
              </p>
            </div>
          </div>

          <div ref={rightsRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>8.	DATA SUBJECT RIGHTS </p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                We are committed to ensuring transparency and empowering you with control over your personal data. 
                As a user of our services, you have the following rights under applicable data protection laws:
              </p>
            </div>
            <ul className="list-decimal pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
              <li>
                Right to Access - You have the right to request access to the personal data we hold about you.  
                This includes understanding how your data is being used and obtaining copies of your information.
              </li>
              <li>
                Right to Rectification - If you believe any information, we hold is inaccurate or incomplete, 
                you have the right to request corrections or updates. We will update your information promptly 
                upon verification of your request.
              </li>
              <li>
                Right to Erasure (Right to Be Forgotten) - You may request that we delete your personal data 
                where it is no longer necessary for the purpose it was collected or you withdraw your consent 
                and there is no other legal basis for processing or the data was unlawfully processed.
                Note: Certain data may need to be retained to comply with legal or regulatory obligations.
              </li>
              <li>
                Right to Restrict Processing - You have the right to request that we limit the processing of your 
                data if you contest the accuracy of the data or you object to the processing and we are evaluating 
                your request or the processing is unlawful, but you prefer restriction over deletion.
              </li>
              <li>
                Right to Data Portability - You may request a copy of your data in a structured, machine-readable format.
                Where technically feasible, we can transfer your data directly to another service provider at your 
                request.
              </li>
              <li>
                Right to Object - You have the right to object to the processing of your data for direct 
                marketing purposes or automated decision-making, including profiling.
              </li>
              <li>
                Right to Withdraw Consent -
                Where we rely on your consent for processing, you can withdraw it at any time without 
                affecting the lawfulness of prior processing.
              </li>
              <li>
                Right to Be Informed - You have the right to be informed about how your data is collected, used, 
                shared, and stored in a clear and transparent manner.
              </li>
              <li>
                Right to Lodge a Complaint - If you believe your rights have been violated, you have the right to 
                lodge a complaint with: Our Data Protection Officer (DPO) using the contact details below and the 
                relevant data protection authority, such as the National Information Technology Development Agency 
                (NITDA) in Nigeria.
              </li>
              <li>
                How to Exercise Your Rights
                To exercise any of your rights, please contact us using the information provided below:
                <span className='block mt-1 text-[#002244] font-grava text-base lg:text-[19px]'>Email: <span className='underline'>dpo@tatumbank.com </span></span>
                <span className='block mt-1 text-[#002244] font-grava text-base lg:text-[19px]'>Phone: -------------</span>
                <span className='block mt-1 text-[#002244] font-grava text-base lg:text-[19px]'>Address: -------------------</span>
                <span className='block mt-1 text-[#002244] font-grava text-base lg:text-[19px]'>We will respond to your request in accordance with applicable laws.</span>
              </li>
            </ul>
          </div>

          <div ref={cookiesRef} className='flex flex-col gap-4 mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>9.	USE OF COOKIES</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Our website and mobile applications use cookies and similar tracking technologies to enhance 
                your experience, provide personalized services, and improve security. Below, we explain the 
                types of cookies we use, their purposes, and your rights regarding their use.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>What Are Cookies?</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Cookies are small files generated by the web servers and stored on your device 
                (computer, smartphone, tablet) when you visit our website or use our applications. 
                They help us recognize your device, remember your preferences, and analyze website usage. 
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>The types of Cookies we use are:</p>
              <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>
                  Strictly Necessary Cookies: - These cookies are essential for the operation of our website and 
                  services. Eg..Authentication, login sessions, and fraud detection. Without these 
                  cookies, some features of our platform may not function properly.
                </li>
                <li>
                  Performance Cookies: - These cookies collect information about how you use our website, 
                  such as the pages you visit, and any errors encountered. The purpose is to improve the 
                  functionality and user experience of our website.
                </li>
                <li>
                  Marketing and Analytics Cookies: - These cookies track your interactions with our website 
                  to provide personalized advertisements or recommendations.
                </li>
                <li>
                  Third-Party Cookies: - Some cookies may be placed by trusted third-party services integrated 
                  into our platform (e.g., payment processors, social media platforms).
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>We use cookies for various purposes, including:</p>
              <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>
                  <span className='font-medium'>Personalization:</span> 
                  To provide tailored content and advertisements based on your preferences.
                </li>
                <li>
                  <span className='font-medium'>Security:</span> 
                  To ensure safe and secure access to our website.
                </li>
                <li>
                  <span className='font-medium'>Analytics:</span> 
                  To collect data about website traffic and user behavior for continuous improvement.
                </li>
                <li>
                  <span className='font-medium'>Functionality:</span> 
                  To remember your preferences and provide a seamless user experience.
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                You have the option to manage your cookie preferences. Most web browsers allow you to control 
                cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>Enabling or disabling the cookies (though not recommended).</li>
                <li>Delete cookies stored on your device.</li>
                <li>Adjust browser settings to notify you before accepting cookies.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                How We Use Tracking Technologies:
              </p>
              <ul className="list-disc font-[350] pl-5 text-[#002244] font-grava text-base lg:text-[19px] gap-2 flex flex-col">
                <li>To secure and authenticate your sessions.</li>
                <li>To detect and prevent fraudulent activities.</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To provide personalized content and advertisements (where applicable).</li>
                <li>To improve website performance and enhance your overall experience.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Cookie Preferences: 
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:text-[19px]">
                You can manage your cookie preferences through our website or app settings by opting in or 
                out of non-essential cookies.
              </p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className=' text-[#002244] font-grava text-base lg:text-[19px]'>
                Consent
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:text-[19px]">
                By using our website or mobile app, you consent to the use of cookies and tracking technologies 
                as described in this policy.
                For marketing or analytics cookies, 
                we will seek your explicit consent where required by law.
              </p>
            </div>
          </div>

          <div ref={updatesRef} className='flex gap-4 flex-col mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>10.	UPDATES TO THE POLICY</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Our Privacy Policy may be updated from time to time in line with applicable laws, 
                regulations and best practices. Changes to the Privacy Policy will be updated and the 
                “Effective date” of this document amended accordingly.  
              </p>
            </div>
          </div>

          <div ref={contactRef} className='flex gap-4 flex-col mt-[48px]'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-[20px] lg:text-[24px] text-[#002244] tracking-wide font-grava'>11. CONTACT US</p>
              <p className='font-[350] text-[#002244] font-grava text-base lg:text-[19px]'>
                Kindly contact us if you have any questions/enquiry about this Privacy Policy
              </p>
              <ul className='list-none font-[350] text-[#002244]  text-base lg:text-[19px] flex flex-col gap-2 font-grava'>
                <li>Email: <span className='underline'>contact@tatumbank.com </span> or <span className='underline'>dpo@tatumbank.com</span></li>
                <li>Address: xxxxxxxxxxxxxxxx</li>
                <li>Telephone: xxxxxxxxxxxxxxxx</li>
              </ul>
            </div>
          </div>

        </div>
      
      </div>

    </div>
  )
}

export default PrivacyPolicy