import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabName, setTabName] = useState("intro");

  const cookieRef = useRef(null);
  const { state } = useLocation();
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (state?.section === "privacy" && cookieRef.current) {
  //     cookieRef.current.scrollIntoView({ behavior: "smooth" });
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

    if (tabName === "intro" && introductionRef.current) {
      introductionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      ref={cookieRef}
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
          Cookie Policy
        </p>
      </div>

      <div className="flex items-start gap-8 px-5 lg:px-16 pt-[56px] lg:pt-[64px] bg-[#fff] relative">
        <div className="hidden lg:flex flex-col bg-[#F9FAFB]  w-[396px] rounded-lg p-6 gap-[27px]">
          <p className="font-[300] font-grava text-[#546B82] ">
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
                1.0 Introduction
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
                2.0 What are Cookies
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
                3.0 How we use Cookies
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
                3.1 Turn Off or Opt-Out of Cookies
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
                3.2 What We Use Cookies For
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
                4.0 More Information
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
                4.1 How to Disable Cookies on Your Browser 
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
                4.1.1 Disable Cookies in Microsoft Edge
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
                4.1.2 Disable Cookies in Chrome
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
                4.1.3 Disable Cookies in FireFox
              </p>
            </div>
            <div
              onClick={() => handleClickedTab("contact")}
              className={`${
                activeTab === 11
                  ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                  : ""
              } cursor-pointer  h-[48px] py-3 px-4`}>
                <p className="font-grava text-[#546B82] text-base">
                    4.1.4 Disable Cookies in Opera
                </p>
            </div>
          </div>
        </div>
  

        <div className="flex flex-col lg:h-[800px] lg:overflow-y-auto lg:flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"> {/*  "flex flex-col lg:h-[800px] lg:overflow-y-scroll lg:flex-1" */}
          <div ref={introductionRef} className="flex gap-[40px] flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                1.0 Introduction
              </p>
              <p className="font-[400] text-[#002244] font-grava text-base lg:text-[18px] lg:leading-[150%] leading-6">
                When you browse our website, we use cookies to ensure a seamless user experience across all the 
                functions you access. The contents of this page are meant to explain to you in clear terms what 
                cookies mean and how we use them on our site.
                <span className="block mt-5">
                    Cookies are necessary for our website to perform its functions normally. 
                    We use them in different contexts, as some are meant to manage your session 
                    and ensure that you transition smoothly between pages when logged in with your 
                    browser kept active while others are more persistent and linger on your device for a longer period.
                </span>
                <span className="block mt-5">
                    We give you the option to opt out of cookies in order to let you control your privacy. 
                    However, we do recommend that for a good user experience on our website. 
                </span>
              </p>
            </div> 
          </div>

          <div
            ref={dataCollectionRef}
            className="flex flex-col  mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                2.0 What are Cookies
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                Cookies are small text files placed on your computer, mobile device, or other web-enabled devices 
                when you access our websites or apps. They help us "remember" your actions or preferences over 
                time and may hold data essential for the functionality or performance of our websites.  
                <span className="font-[500]"> Tatum</span> uses cookies downloaded to your computer to improve your experience. 
                There are several types of cookies:
              </p>
              <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px] gap-2 flex flex-col">
                <li className="font-[400]">
                    Session cookies expire at the end of your browser session and allow us to link 
                    your actions during that particular browser session.
                </li>
                <li className="font-[400]">
                    Persistent cookies are stored on your device in between browser sessions, 
                    allowing us to remember your preferences or actions across multiple sites.
                </li>
                <li className="font-[400]">
                    First-party cookies are set by the site you are visiting.
                </li>
                <li className="font-[400]">
                    Third-party cookies are set by a third-party site separate from the site you are visiting.
                </li>
              </ul>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                This page describes what information cookies gather, how we use it and why we sometimes need 
                to store these cookies. We will also share how you can prevent these cookies from being stored. 
                Note however that disabling cookies and preventing their storage may downgrade or 'break' 
                certain elements of <span className="font-[500]">Tatum’s</span> functionality, possibly compromising the seamless user experience 
                we seek to offer you through the use of these cookies.
              </p>
            </div>
          </div>

          <div ref={personalRef} className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                3.0 How We Use Cookies
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                We use cookies for a variety of reasons (which are detailed below). 
                Unfortunately, in most cases, there are no industry standard options 
                for disabling cookies without completely disabling the functionality 
                and features they add to our site. It is advisable to keep all cookies 
                enabled unless you are certain that you do not require them. 
                This precaution ensures that any services relying on cookies can function properly.
              </p>
            </div>
          </div>

          <div ref={purposeRef} className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                3.1 Turn Off or Opt-Out of Cookies
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                You can manually disable cookies on your computer and devices or delete existing cookies. 
                Disabling cookies (as described in the guide on how to disable cookies in your browser) 
                could potentially limit your browsing experience on the Tatum website, particularly 
                with regard to essential features like logging in to your profile and navigating webpages etc. 
                Tatum does not share cookie information with any other website, nor do we sell this data to any 
                third party without your consent.
              </p>
            </div>
          </div>

          <div ref={sharingRef} className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                3.2 What We Use Cookies For
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                Our website uses cookies to enhance your user experience. If you create a profile with us, 
                we will utilize cookies for managing the signup process, general administration, 
                and maintaining your browser session while you’re logged in. 
                Typically, these cookies are deleted upon logout. However, in some instances, 
                cookies may continue to store your site preferences even after you’ve logged out.
              </p>
            </div>
            <div className="flex flex-col mt-[20px] gap-5">
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                Cookies are used in the following ways on <span className="font-[450]">Tatum website:</span>
              </p>
              <table className="w-[100%]  px-5">
                <thead>
                    <tr className="border h-[60px] border-[#002244]">
                    <th className="text-left w-[30%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[500] text-[#002244] p-2 border border-y-0 border-l-0">
                        Cookie
                    </th>
                    <th className="text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[500] font-grava border border-y-0 border-l-0">
                        Type
                    </th>
                    <th className="text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[500] font-grava">
                        Purpose
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-[#002244]">
                      <td
                        rowSpan={2}
                        className="p-2 border border-y-0  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border-l-0 align-center"
                      >
                        Strictly Necessary Cookies
                      </td>
                      <td className="border border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">Core</td>
                      <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">
                        These Cookies are essential for enabling fundamental Website features, 
                        such as ensuring secure logins. For instance, when you use your Tatum account to sign into 
                        a website, we securely store the time of your login and a unique encrypted ID on your device 
                        as a Cookie. This Cookie enables you to navigate seamlessly across different pages of the 
                        Website without needing to sign in repeatedly.
                      </td>
                    </tr>
                    <tr className="border border-[#002244]">
                      <td className="border border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">Technical performance</td>
                      <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">
                        Among their various purposes, Tatum employs these Cookies for identifying browsing challenges, 
                        enhancing technical performance and usability, estimating server requirements, 
                        ensuring the accurate presentation of the Website, and facilitating load balancing. 
                        These measures are crucial to maintain the continuous uptime and functionality of our websites.
                      </td>
                    </tr>

                    <tr className="border h-[100px] border-[#002244]">
                    <td className="p-2 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border-l-0">
                        Functional Cookies
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border border-y-0 border-l-0">
                        Enhanced Functionality and Customization
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">
                        These Cookies are established by our system. If you choose not to enable these Cookies, 
                        certain services may experience limited or disrupted functionality. 
                        For instance, we integrate videos from Tatum's YouTube channel using YouTube's 
                        privacy-enhanced mode to display content to you. Upon interacting with the YouTube video player, 
                        additional cookies may be set on your device by YouTube. Disabling Functional 
                        Cookies will result in the unavailability of these supplementary features
                    </td>
                    </tr>
                    <tr className="border h-[100px] border-[#002244]">
                    <td className="p-2 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border-l-0">
                        Performance Cookies
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border border-y-0 border-l-0">
                        Analytics
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">
                        In efforts to enhance the functionality and optimize the performance of our websites and products, 
                        Tatum utilizes Cookies. These Cookies, which may include session recording and replay technology, 
                        collect usage and performance data such as mouse movements, clicks, and other actions. 
                        For instance, we employ Cookies to track the count of unique visitors to a website and 
                        to generate various statistics concerning the functioning of our websites. 
                        This entails the use of Cookies both from Tatum and from external analytics providers, 
                        who assist Tatum in comprehending user interactions and behaviors on Tatum's Websites
                    </td>
                    </tr>  
                    <tr className="border h-[100px] border-[#002244]">
                    <td className="p-2 border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border-l-0">
                        Performance Cookies
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244] border border-y-0 border-l-0">
                        Marketing and Personalization Cookies.
                    </td>
                    <td className="p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[28px] tracking-[0.2%] lm:tracking-[1.4%] font-[400] text-[#002244]">
                        We use cookies to gain insights into your interests, such as the products you have viewed on 
                        our website. This enables us to display relevant products, services, 
                        and advertisements while you are on our site. By utilizing these cookies, 
                        we can personalize your experience across our websites.
                    </td>
                    </tr>  
                </tbody>        
              </table>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                The type of cookies listed above collect the following personal data:
              </p>
                <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                    <li>Your Device Type</li>
                    <li>IP Address</li>
                    <li>Your Location History</li>
                    <li>Browser History</li>
                </ul>
            </div>
          </div>

          <div ref={storageRef} className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                4.0 More Information
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                We recommend leaving cookies enabled to ensure optimal functionality. 
                If you have any questions, feel free to reach out to us using the contact form on our {" "}
                <span className="font-[500] cursor-pointer underline" onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}>contact page.</span>
              </p>
            </div>
          </div>

          <div ref={securityRef} className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                4.1 How to Disable Cookies on Your Browser
              </p>
              <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                Steps to disable cookies on Microsoft Edge, Google Chrome, 
                Mozilla Firefox and Opera browsers are as follows:
              </p>
            </div>
          </div>

          <div ref={rightsRef} className="flex flex-col gap-4 mt-[20px]">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                4.1.1 Disable Cookies in Microsoft Edge
            </p>
            <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
              <li>Open Edge browser</li>
              <li>Click on the 3-dotted 'More' link to open its Settings.</li>
              <li>Scroll down and click on View Advanced Settings</li>
              <li>Again, scroll down till you see the setting for Cookies.</li>
              <li>When here, from the 3 options, select one.</li>
            </ul>
            <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                The available options are:
            </p>
            <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
              <li>Block all Cookies.</li>
              <li>Block only third-party cookies.</li>
              <li>Don't block cookies.</li>
            </ul>
            <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                To disable all cookies, make sure to select the ‘Block all cookies’ option, 
                and restart Microsoft Edge.
            </p>
          </div>

          <div ref={cookiesRef} className="flex flex-col gap-4 mt-[20px]">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                4.1.2 Disable Cookies in Chrome
            </p>
            <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                <li>
                    To disable Cookies on Chrome, click the Tools button &gt; Settings. 
                    Towards the end of this page, you will see the Show Advanced Settings link.
                </li>
                <li>Click on it. Under Privacy</li>
                <li>Click on the Content Settings button. Here you can select the options you feel are best suited for you.</li>
                <li>You can click on the images to see the larger versions.</li>
            </ul>
          </div>

          <div ref={updatesRef} className="flex gap-4 flex-col mt-[20px]">
            <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                4.1.3 Disable Cookies in Firefox
            </p>
            <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                <li>In Firefox, open Settings &gt; Options &gt; Privacy tab</li>
                <li>Under History, from the drop-down menu, select Use custom settings for history.</li>
                <li>You can now select the Cookies options you want.</li>
            </ul>
          </div>

          <div ref={contactRef} className="flex gap-4 flex-col mt-[20px]">
            <div className="flex flex-col gap-4">
                <p className="font-[500] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                    4.1.4 Disable Cookies in Opera
                </p>
                <ul className="list-disc pl-5 font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                    <li>Open settings &gt; Privacy & Security</li>
                    <li>
                        Under Cookies you will see the options to manage your Cookie settings and choose 
                        which kind of Cookies you wish to allow or disallow on your computer
                    </li>
                </ul>
                <p className="font-grava font-[400] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                    For queries or concerns regarding our Cookie Policy, please do not hesitate to get in touch 
                    with us using the contact form on our {" "}
                    <span className="font-[450] underline cursor-pointer" onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}>
                        contact page.
                    </span>
                </p>
              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CookiePolicy;
