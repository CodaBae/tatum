import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const sectionRef = useRef(null); 

  const sectionIds = [
    "intro",
    "data",
    "personal",
    "purpose",
    "sharing",
    "storage",
    "security",
    "rights",
    "cookies",
    "updates",
    "contact"
  ];

  useEffect(() => {
    const calculateContentHeight = () => {
      if (!contentRef.current || !sectionRef.current) return;
      
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      console.log(headerHeight, "headerHeight")
      const sectionTop = sectionRef.current.offsetTop;
      console.log(sectionTop, "sectionTop")
      const viewportHeight = window.innerHeight;
      console.log(viewportHeight, "viewportHeight")
      const contentHeight = viewportHeight - (sectionTop - window.scrollY + 40);
      console.log(contentHeight, "contentHeight")
      
      contentRef.current.style.height = `${Math.max(contentHeight, 400)}px`;
    };

    const handleScroll = () => {
      calculateContentHeight();
      
      if (!contentRef.current) return;
      
      // Check if we've scrolled past the section
      const sectionBottom = sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
      console.log(sectionBottom, "sectionBottom")
      if (window.scrollY + window.innerHeight >= sectionBottom) {
        contentRef.current.style.overflowY = 'hidden';
      } else {
        contentRef.current.style.overflowY = 'auto';
      }
    };

    // Initial calculation
    calculateContentHeight();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateContentHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateContentHeight);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = sectionIds.indexOf(id);
            if (index !== -1) setActiveTab(index + 1);
          }
        });
      },
      { threshold: 0.8 }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full mb-[56px] lg:mb-[120px] overflow-hidden">
      <div 
        style={{ 
          backgroundImage: `url(https://framerusercontent.com/images/NUH4eUyFO0g76XT8Hd1XgCyLmUU.png)`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#FFCC33] w-full h-[184px] lg:h-[294px] flex items-center lg:z-10 justify-center"
        id="header"
      >
        <p className="font-bold text-[#002244] font-grava text-[34px] lg:text-[75px] mt-[44px] lg:mt-[6%] ">
          Cookie Policy
        </p>
      </div>

      <section ref={sectionRef} className="flex items-start gap-8 px-5 lg:px-16 pt-[56px] lg:pt-[64px] bg-[#fff] relative">
        <div className="hidden lg:flex flex-col bg-[#F9FAFB] w-[396px] rounded-lg p-6 gap-[27px]">
          <p className="font-[500] tracking-[0.01em] text-[20px] leading-[25px] font-grava text-[#546B82]">
            Table of content:
          </p>
          <div className="flex flex-col gap-4">
            {sectionIds.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${
                  activeTab === index + 1
                    ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
                    : ""
                } cursor-pointer h-[48px] py-3 px-4`}
              >
                <p className="font-grava text-[#546B82] text-base whitespace-nowrap">
                  {getSectionTitle(index + 1)}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div 
          ref={contentRef}
          className="flex flex-col lg:h-[800px] lg:overflow-y-auto lg:flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
 
          <div id="intro" className="flex gap-[40px] flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                1.0 Introduction
              </p>
              <p className="font-[350] text-[#002244] font-grava text-base lg:text-[18px] lg:leading-[150%] tracking-[0.01em] leading-6">
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

          <div id="data" className="flex flex-col mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                2.0 What are Cookies
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                Cookies are small text files placed on your computer, mobile device, or other web-enabled devices 
                when you access our websites or apps. They help us "remember" your actions or preferences over 
                time and may hold data essential for the functionality or performance of our websites.  
                <span className="font-[450]"> Tatum</span> uses cookies downloaded to your computer to improve your experience. 
                There are several types of cookies:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]  flex flex-col">
                <li className="font-[350]">
                    Session cookies expire at the end of your browser session and allow us to link 
                    your actions during that particular browser session.
                </li>
                <li className="font-[350]">
                    Persistent cookies are stored on your device in between browser sessions, 
                    allowing us to remember your preferences or actions across multiple sites.
                </li>
                <li className="font-[350]">
                    First-party cookies are set by the site you are visiting.
                </li>
                <li className="font-[350]">
                    Third-party cookies are set by a third-party site separate from the site you are visiting.
                </li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                This page describes what information cookies gather, how we use it and why we sometimes need 
                to store these cookies. We will also share how you can prevent these cookies from being stored. 
                Note however that disabling cookies and preventing their storage may downgrade or 'break' 
                certain elements of <span className="font-[450]">Tatum’s</span> functionality, possibly compromising the seamless user experience 
                we seek to offer you through the use of these cookies.
              </p>
            </div>
          </div>

          <div id="personal" className="flex flex-col gap-4 mt-[20px]">
            <div className="flex flex-col gap-4">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                3.0 How We Use Cookies
              </p>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                We use cookies for a variety of reasons (which are detailed below). 
                Unfortunately, in most cases, there are no industry standard options 
                for disabling cookies without completely disabling the functionality 
                and features they add to our site. It is advisable to keep all cookies 
                enabled unless you are certain that you do not require them. 
                This precaution ensures that any services relying on cookies can function properly.
              </p>
            </div>
          </div>

            <div id="purpose" className="flex flex-col gap-4 mt-[20px]">
              <div className="flex flex-col gap-4">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  3.1 Turn Off or Opt-Out of Cookies
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  You can manually disable cookies on your computer and devices or delete existing cookies. 
                  Disabling cookies (as described in the guide on how to disable cookies in your browser) 
                  could potentially limit your browsing experience on the Tatum website, particularly 
                  with regard to essential features like logging in to your profile and navigating webpages etc. 
                  Tatum does not share cookie information with any other website, nor do we sell this data to any 
                  third party without your consent.
                </p>
              </div>
            </div>
          
            <div id="sharing" className="flex flex-col gap-4 mt-[20px]">
              <div className="flex flex-col gap-4">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  3.2 What We Use Cookies For
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  Our website uses cookies to enhance your user experience. If you create a profile with us, 
                  we will utilize cookies for managing the signup process, general administration, 
                  and maintaining your browser session while you’re logged in. 
                  Typically, these cookies are deleted upon logout. However, in some instances, 
                  cookies may continue to store your site preferences even after you’ve logged out.
                </p>
              </div>
              <div className="flex flex-col mt-[20px] gap-5">
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  Cookies are used in the following ways on <span className="font-[450]">Tatum website:</span>
                </p>
                <table className="w-[100%]  px-5">
                  <thead>
                      <tr className="border h-[60px] border-[#cfd4dc]">
                        <th className="border-[#cfd4dc] text-left w-[20%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] text-[#002244] p-2 border border-y-0 border-l-0">
                            Cookie
                        </th>
                        <th className=" border-[#cfd4dc] text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] font-grava border border-y-0 border-l-0">
                            Type
                        </th>
                        <th className="border-[#cfd4dc]  text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] font-grava">
                            Purpose
                        </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border border-[#cfd4dc]">
                        <td
                          rowSpan={2}
                          className="p-2 border-[#cfd4dc]  border border-y-0  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0 align-center"
                        >
                          Strictly <br/> Necessary <br /> Cookies
                        </td>
                        <td className="border border-[#cfd4dc] border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">Core</td>
                        <td className="p-2.5 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
                          These Cookies are essential for enabling fundamental Website features, 
                          such as ensuring secure logins. For instance, when you use your Tatum account to sign into 
                          a website, we securely store the time of your login and a unique encrypted ID on your device 
                          as a Cookie. This Cookie enables you to navigate seamlessly across different pages of the 
                          Website without needing to sign in repeatedly.
                        </td>
                      </tr>
                      <tr className="border border-[#cfd4dc]">
                        <td className="border border-[#cfd4dc] border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">Technical performance</td>
                        <td className="p-2.5 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
                          Among their various purposes, Tatum employs these Cookies for identifying browsing challenges, 
                          enhancing technical performance and usability, estimating server requirements, 
                          ensuring the accurate presentation of the Website, and facilitating load balancing. 
                          These measures are crucial to maintain the continuous uptime and functionality of our websites.
                        </td>
                      </tr>

                      <tr className="border h-[100px] border-[#cfd4dc]">
                      <td className="p-2 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
                          Functional Cookies
                      </td>
                      <td className="p-2 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
                          Enhanced Functionality and Customization
                      </td>
                      <td className="p-2.5 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
                          These Cookies are established by our system. If you choose not to enable these Cookies, 
                          certain services may experience limited or disrupted functionality. 
                          For instance, we integrate videos from Tatum's YouTube channel using YouTube's 
                          privacy-enhanced mode to display content to you. Upon interacting with the YouTube video player, 
                          additional cookies may be set on your device by YouTube. Disabling Functional 
                          Cookies will result in the unavailability of these supplementary features
                      </td>
                      </tr>
                      <tr className="border h-[100px] border-[#cfd4dc]">
                      <td className="p-2 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
                          Performance <br/> Cookies
                      </td>
                      <td className="p-2 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
                          Analytics
                      </td>
                      <td className="p-2.5 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
                          In efforts to enhance the functionality and optimize the performance of our websites and products, 
                          Tatum utilizes Cookies. These Cookies, which may include session recording and replay technology, 
                          collect usage and performance data such as mouse movements, clicks, and other actions. 
                          For instance, we employ Cookies to track the count of unique visitors to a website and 
                          to generate various statistics concerning the functioning of our websites. 
                          This entails the use of Cookies both from Tatum and from external analytics providers, 
                          who assist Tatum in comprehending user interactions and behaviors on Tatum's Websites
                      </td>
                      </tr>  
                      <tr className="border h-[100px] border-[#cfd4dc]">
                      <td className="p-2 border-[#cfd4dc]  border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
                          Performance <br/> Cookies
                      </td>
                      <td className="p-2 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
                          Marketing and Personalization Cookies.
                      </td>
                      <td className="p-2.5 border-[#cfd4dc]  font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
                          We use cookies to gain insights into your interests, such as the products you have viewed on 
                          our website. This enables us to display relevant products, services, 
                          and advertisements while you are on our site. By utilizing these cookies, 
                          we can personalize your experience across our websites.
                      </td>
                      </tr>  
                  </tbody>        
                </table>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  The type of cookies listed above collect the following personal data:
                </p>
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                      <li>Your Device Type</li>
                      <li>IP Address</li>
                      <li>Your Location History</li>
                      <li>Browser History</li>
                  </ul>
              </div>
            </div>

            <div id="storage" className="flex flex-col gap-4 mt-[20px]">
              <div className="flex flex-col gap-4">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  4.0 More Information
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  We recommend leaving cookies enabled to ensure optimal functionality. 
                  If you have any questions, feel free to reach out to us using the contact form on our {" "}
                  <span className="font-[450] cursor-pointer underline" onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}>contact page.</span>
                </p>
              </div>
            </div>

            <div id="security" className="flex flex-col gap-4 mt-[20px]">
              <div className="flex flex-col gap-4">
                <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  4.1 How to Disable Cookies on Your Browser
                </p>
                <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  Steps to disable cookies on Microsoft Edge, Google Chrome, 
                  Mozilla Firefox and Opera browsers are as follows:
                </p>
              </div>
            </div>

            <div id="rights" className="flex flex-col gap-4 mt-[20px]">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  4.1.1 Disable Cookies in Microsoft Edge
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                <li>Open Edge browser</li>
                <li>Click on the 3-dotted 'More' link to open its Settings.</li>
                <li>Scroll down and click on View Advanced Settings</li>
                <li>Again, scroll down till you see the setting for Cookies.</li>
                <li>When here, from the 3 options, select one.</li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  The available options are:
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                <li>Block all Cookies.</li>
                <li>Block only third-party cookies.</li>
                <li>Don't block cookies.</li>
              </ul>
              <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  To disable all cookies, make sure to select the ‘Block all cookies’ option, 
                  and restart Microsoft Edge.
              </p>
            </div>

            <div id="cookies" className="flex flex-col gap-4 mt-[20px]">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  4.1.2 Disable Cookies in Chrome
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  <li>
                      To disable Cookies on Chrome, click the Tools button &gt; Settings. 
                      Towards the end of this page, you will see the Show Advanced Settings link.
                  </li>
                  <li>Click on it. Under Privacy</li>
                  <li>Click on the Content Settings button. Here you can select the options you feel are best suited for you.</li>
                  <li>You can click on the images to see the larger versions.</li>
              </ul>
            </div>

            <div id="updates" className="flex gap-4 flex-col mt-[20px]">
              <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                  4.1.3 Disable Cookies in Firefox
              </p>
              <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                  <li>In Firefox, open Settings &gt; Options &gt; Privacy tab</li>
                  <li>Under History, from the drop-down menu, select Use custom settings for history.</li>
                  <li>You can now select the Cookies options you want.</li>
              </ul>
            </div>

            <div id="contact" className="flex gap-4 flex-col mt-[20px]">
              <div className="flex flex-col gap-4">
                  <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
                      4.1.4 Disable Cookies in Opera
                  </p>
                  <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                      <li>Open settings &gt; Privacy & Security</li>
                      <li>
                          Under Cookies you will see the options to manage your Cookie settings and choose 
                          which kind of Cookies you wish to allow or disallow on your computer
                      </li>
                  </ul>
                  <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
                      For queries or concerns regarding our Cookie Policy, please do not hesitate to get in touch 
                      with us using the contact form on our {" "}
                      <span className="font-[450] underline cursor-pointer" onClick={() => {navigate("/contact"), window.scrollTo(0, 0)}}>
                          contact page.
                      </span>
                  </p>
                
              </div>
            </div>

          </div>
      </section>
    </div>
  );
};

// Helper function to generate section titles
const getSectionTitle = (index) => {
  const titles = [
    "1.0 Introduction",
    "2.0 What are Cookies",
    "3.0 How we use Cookies",
    "3.1 Turn Off or Opt-Out of Cookies",
    "3.2 What We Use Cookies For",
    "4.0 More Information",
    "4.1 How to Disable Cookies on Your Browser",
    "4.1.1 Disable Cookies in Microsoft Edge",
    "4.1.2 Disable Cookies in Chrome",
    "4.1.3 Disable Cookies in FireFox",
    "4.1.4 Disable Cookies in Opera"
  ];
  return titles[index - 1] || "";
};

export default CookiePolicy;

// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const CookiePolicy = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const navigate = useNavigate();
//   const contentRef = useRef(null);
//   const sectionRef = useRef(null);
//   const isScrollingContent = useRef(false);
//   const headerHeightRef = useRef(0);

//   const { state } = useLocation();

//   useEffect(() => {
//     if (state?.section === "cookie") {
//          setActiveTab(0)
//     }
//   }, [state]);

//   const sectionIds = [
//     "intro",
//     "data",
//     "personal",
//     "purpose",
//     "sharing",
//     "storage",
//     "security",
//     "rights",
//     "cookies",
//     "updates",
//     "contact",
//   ];

//   // useEffect(() => {
//   //   const updateHeaderHeight = () => {
//   //     const header = document.getElementById("header");
//   //     if (header) headerHeightRef.current = header.offsetHeight;
//   //   };

//   //   const handleWindowScroll = () => {
//   //     if (!contentRef.current || isScrollingContent.current) return;

//   //     const viewportHeight = window.innerHeight;
//   //     const scrollY = window.scrollY;
//   //     const headerHeight = 294 //headerHeightRef.current;

//   //     // Check if viewport is taller than header and user scrolled past header
//   //     if (viewportHeight > 294 && scrollY >= 294) { //headerHeight
//   //       document.body.style.overflow = "hidden";
//   //       contentRef.current.style.overflowY = "scroll";
//   //       isScrollingContent.current = true;
        
//   //       // Sync content scroll position with window scroll
//   //       contentRef.current.scrollTop = scrollY - headerHeight;
//   //     }
//   //   };

//   //   const handleContentScroll = () => {
//   //     if (!contentRef.current || !isScrollingContent.current) return;

//   //     const headerHeight =  294 //headerHeightRef.current;
//   //     const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
//   //     console.log(scrollTop, "scrollTop")
//   //     console.log(scrollHeight, "scrollHeight")
//   //     console.log(clientHeight, "clientHeight")

//   //     const isAtTop = scrollTop <= 0;
//   //     const isAtBottom = scrollTop + clientHeight >= scrollHeight;

//   //     if (isAtTop) {
//   //       // Switch back to window scroll at header bottom
//   //       document.body.style.overflow = "scroll";
//   //       contentRef.current.style.overflowY = "hidden";
//   //       isScrollingContent.current = false;
//   //       window.scrollTo(0, headerHeight);
//   //     } else if (isAtBottom) {
//   //       // Switch to window scroll and continue from content end
//   //       document.body.style.overflow = "scroll";
//   //       contentRef.current.style.overflowY = "hidden";
//   //       isScrollingContent.current = false;
//   //       // window.scrollTo(0, 0);
//   //       window.scrollTo(0, headerHeight + (scrollHeight - clientHeight));
//   //     }
//   //   };

//   //   const handleResize = () => {
//   //     updateHeaderHeight();
//   //     // Reset scroll states on resize
//   //     document.body.style.overflowY = "scroll";
//   //     contentRef.current.style.overflowY = "hidden";
//   //     isScrollingContent.current = false;
//   //   };

//   //   // Initial setup
//   //   updateHeaderHeight();
//   //   window.addEventListener("scroll", handleWindowScroll);
//   //   window.addEventListener("resize", handleResize);
//   //   contentRef.current?.addEventListener("scroll", handleContentScroll);

//   //   return () => {
//   //     window.removeEventListener("scroll", handleWindowScroll);
//   //     window.removeEventListener("resize", handleResize);
//   //     contentRef.current?.removeEventListener("scroll", handleContentScroll);
//   //     document.body.style.overflow = "scroll";
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   const header = document.getElementById("header");
//   //   const content = contentRef.current;
//   //   let lastWindowScroll = 0;
  
//   //   const updateHeaderHeight = () => {
//   //     if (header) headerHeightRef.current = header.offsetHeight;
//   //   };
  
//   //   const handleWindowScroll = () => {
//   //     if (!content || isScrollingContent.current) return;
  
//   //     const viewportHeight = window.innerHeight;
//   //     const scrollY = window.scrollY;
//   //     const headerHeight = headerHeightRef.current;
  
//   //     // Enter content scroll zone
//   //     if (scrollY + viewportHeight >= headerHeight + content.offsetTop) {
//   //       document.body.style.overflow = "hidden";
//   //       content.style.overflowY = "scroll";
//   //       isScrollingContent.current = true;
        
//   //       // Calculate initial scroll position
//   //       const contentScrollPosition = scrollY - (headerHeight + content.offsetTop);
//   //       content.scrollTop = contentScrollPosition;
//   //     }
//   //   };
  
//   //   const handleContentScroll = () => {
//   //     if (!isScrollingContent.current || !content) return;
  
//   //     const headerHeight = headerHeightRef.current;
//   //     const { scrollTop, scrollHeight, clientHeight } = content;
//   //     const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // Add small threshold
  
//   //     // Exit to window scroll at bottom
//   //     if (isAtBottom) {
//   //       document.body.style.overflow = "scroll";
//   //       content.style.overflowY = "hidden";
//   //       isScrollingContent.current = false;
        
//   //       // Calculate equivalent window scroll position
//   //       const windowScrollPosition = headerHeight + content.offsetTop + scrollHeight;
//   //       window.scrollTo(0, windowScrollPosition - window.innerHeight);
//   //     }
//   //   };
  
//   //   const handleResize = () => {
//   //     updateHeaderHeight();
//   //     document.body.style.overflow = "scroll";
//   //     if (content) content.style.overflowY = "hidden";
//   //     isScrollingContent.current = false;
//   //   };
  
//   //   updateHeaderHeight();
//   //   window.addEventListener("scroll", handleWindowScroll);
//   //   window.addEventListener("resize", handleResize);
//   //   content?.addEventListener("scroll", handleContentScroll);
  
//   //   return () => {
//   //     window.removeEventListener("scroll", handleWindowScroll);
//   //     window.removeEventListener("resize", handleResize);
//   //     content?.removeEventListener("scroll", handleContentScroll);
//   //     document.body.style.overflow = "scroll";
//   //   };
//   // }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.id;
//             const index = sectionIds.indexOf(id);
//             if (index !== -1) setActiveTab(index + 1);
//           }
//         });
//       },
//       { threshold: 0.8 }
//     );

//     sectionIds.forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="w-full mb-[56px] lg:mb-[120px] overflow-hidden">
//       <div
//         style={{
//           backgroundImage: `url(https://framerusercontent.com/images/NUH4eUyFO0g76XT8Hd1XgCyLmUU.png)`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//         className="bg-[#FFCC33] w-full h-[184px] lg:h-[294px] flex items-center lg:z-10 justify-center"
//         // id="header"
//       >
//         <p className="font-bold text-[#002244] font-grava text-[34px] lg:text-[75px] mt-[44px] lg:mt-[6%]">
//           Cookie Policy
//         </p>
//       </div>

//       <section
//         // ref={sectionRef}
//         className="flex items-start gap-8 px-5 lg:px-16 pt-[56px] lg:pt-[64px] bg-[#fff] relative"
//       >
//         <div className="hidden lg:flex  flex-col bg-[#F9FAFB] w-[396px] rounded-lg p-6 gap-[27px]">
//           <p className="font-[500] tracking-[0.01em] text-[20px] leading-[25px] font-grava text-[#546B82]">
//             Table of content:
//           </p>
//           <div className="flex flex-col gap-4">
//             {sectionIds.map((id, index) => (
//               <a
//                 key={id}
//                 href={`#${id}`}
//                 className={`${
//                   activeTab === index + 1
//                     ? "border-[3px] border-y-0 bg-[#F2F4F7] border-r-0 border-l-[#FFCC33] rounded-lg"
//                     : ""
//                 } cursor-pointer h-[48px] py-3 px-4 block`}
//               >
//                 <p className="font-grava text-[#546B82] text-base whitespace-nowrap">
//                   {getSectionTitle(index + 1)}
//                 </p>
//               </a>
//             ))}
//           </div>
//         </div>

//         <div
//           // ref={contentRef}
//           // style={{ maxHeight: "" }} //
//           className="flex flex-col  lg:h-[800px]  lg:flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           <div id="intro" className="flex gap-[40px] flex-col">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 1.0 Introduction
//               </p>
//               <p className="font-[350] text-[#002244] font-grava text-base lg:text-[18px] lg:leading-[150%] tracking-[0.01em] leading-6">
//                 When you browse our website, we use cookies to ensure a seamless user experience across all the
//                 functions you access. The contents of this page are meant to explain to you in clear terms what
//                 cookies mean and how we use them on our site.
//                 <span className="block mt-5">
//                   Cookies are necessary for our website to perform its functions normally. We use them in
//                   different contexts, as some are meant to manage your session and ensure that you transition
//                   smoothly between pages when logged in with your browser kept active while others are more
//                   persistent and linger on your device for a longer period.
//                 </span>
//                 <span className="block mt-5">
//                   We give you the option to opt out of cookies in order to let you control your privacy.
//                   However, we do recommend that for a good user experience on our website.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div id="data" className="flex flex-col mt-[20px] lg:h-[800px] overflow-hidden">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 2.0 What are Cookies
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 Cookies are small text files placed on your computer, mobile device, or other web-enabled devices
//                 when you access our websites or apps. They help us "remember" your actions or preferences over
//                 time and may hold data essential for the functionality or performance of our websites.
//                 <span className="font-[450]"> Tatum</span> uses cookies downloaded to your computer to improve
//                 your experience. There are several types of cookies:
//               </p>
//               <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px] flex flex-col">
//                 <li className="font-[350]">
//                   Session cookies expire at the end of your browser session and allow us to link your actions
//                   during that particular browser session.
//                 </li>
//                 <li className="font-[350]">
//                   Persistent cookies are stored on your device in between browser sessions, allowing us to
//                   remember your preferences or actions across multiple sites.
//                 </li>
//                 <li className="font-[350]">First-party cookies are set by the site you are visiting.</li>
//                 <li className="font-[350]">
//                   Third-party cookies are set by a third-party site separate from the site you are visiting.
//                 </li>
//               </ul>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 This page describes what information cookies gather, how we use it and why we sometimes need to
//                 store these cookies. We will also share how you can prevent these cookies from being stored. Note
//                 however that disabling cookies and preventing their storage may downgrade or 'break' certain
//                 elements of <span className="font-[450]">Tatum’s</span> functionality, possibly compromising the
//                 seamless user experience we seek to offer you through the use of these cookies.
//               </p>
//             </div>
//           </div>

//           <div id="personal" className="flex flex-col gap-4 mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 3.0 How We Use Cookies
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 We use cookies for a variety of reasons (which are detailed below). Unfortunately, in most cases,
//                 there are no industry standard options for disabling cookies without completely disabling the
//                 functionality and features they add to our site. It is advisable to keep all cookies enabled
//                 unless you are certain that you do not require them. This precaution ensures that any services
//                 relying on cookies can function properly.
//               </p>
//             </div>
//           </div>

//           <div id="purpose" className="flex flex-col gap-4 mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 3.1 Turn Off or Opt-Out of Cookies
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 You can manually disable cookies on your computer and devices or delete existing cookies.
//                 Disabling cookies (as described in the guide on how to disable cookies in your browser) could
//                 potentially limit your browsing experience on the Tatum website, particularly with regard to
//                 essential features like logging in to your profile and navigating webpages etc. Tatum does not
//                 share cookie information with any other website, nor do we sell this data to any third party
//                 without your consent.
//               </p>
//             </div>
//           </div>

//           <div id="sharing" className="flex flex-col gap-4 mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 3.2 What We Use Cookies For
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 Our website uses cookies to enhance your user experience. If you create a profile with us, we
//                 will utilize cookies for managing the signup process, general administration, and maintaining
//                 your browser session while you’re logged in. Typically, these cookies are deleted upon logout.
//                 However, in some instances, cookies may continue to store your site preferences even after you’ve
//                 logged out.
//               </p>
//             </div>
//             <div className="flex flex-col mt-[20px] gap-5">
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 Cookies are used in the following ways on <span className="font-[450]">Tatum website:</span>
//               </p>
//               <table className="w-[100%] px-5">
//                 <thead>
//                   <tr className="border h-[60px] border-[#cfd4dc]">
//                     <th className="border-[#cfd4dc] text-left w-[20%] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] text-[#002244] p-2 border border-y-0 border-l-0">
//                       Cookie
//                     </th>
//                     <th className="border-[#cfd4dc] text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] font-grava border border-y-0 border-l-0">
//                       Type
//                     </th>
//                     <th className="border-[#cfd4dc] text-left p-2 text-[#002244] text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[450] font-grava">
//                       Purpose
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border border-[#cfd4dc]">
//                     <td
//                       rowSpan={2}
//                       className="p-2 border-[#cfd4dc] border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0 align-center"
//                     >
//                       Strictly <br /> Necessary <br /> Cookies
//                     </td>
//                     <td className="border border-[#cfd4dc] border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       Core
//                     </td>
//                     <td className="p-2.5 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       These Cookies are essential for enabling fundamental Website features, such as ensuring
//                       secure logins. For instance, when you use your Tatum account to sign into a website, we
//                       securely store the time of your login and a unique encrypted ID on your device as a Cookie.
//                       This Cookie enables you to navigate seamlessly across different pages of the Website
//                       without needing to sign in repeatedly.
//                     </td>
//                   </tr>
//                   <tr className="border border-[#cfd4dc]">
//                     <td className="border border-[#cfd4dc] border-r border-y-0 border-l-0 p-2 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       Technical performance
//                     </td>
//                     <td className="p-2.5 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       Among their various purposes, Tatum employs these Cookies for identifying browsing
//                       challenges, enhancing technical performance and usability, estimating server requirements,
//                       ensuring the accurate presentation of the Website, and facilitating load balancing. These
//                       measures are crucial to maintain the continuous uptime and functionality of our websites.
//                     </td>
//                   </tr>
//                   <tr className="border h-[100px] border-[#cfd4dc]">
//                     <td className="p-2 border-[#cfd4dc] border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
//                       Functional Cookies
//                     </td>
//                     <td className="p-2 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
//                       Enhanced Functionality and Customization
//                     </td>
//                     <td className="p-2.5 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       These Cookies are established by our system. If you choose not to enable these Cookies,
//                       certain services may experience limited or disrupted functionality. For instance, we
//                       integrate videos from Tatum's YouTube channel using YouTube's privacy-enhanced mode to
//                       display content to you. Upon interacting with the YouTube video player, additional cookies
//                       may be set on your device by YouTube. Disabling Functional Cookies will result in the
//                       unavailability of these supplementary features.
//                     </td>
//                   </tr>
//                   <tr className="border h-[100px] border-[#cfd4dc]">
//                     <td className="p-2 border-[#cfd4dc] border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
//                       Performance <br /> Cookies
//                     </td>
//                     <td className="p-2 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
//                       Analytics
//                     </td>
//                     <td className="p-2.5 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       In efforts to enhance the functionality and optimize the performance of our websites and
//                       products, Tatum utilizes Cookies. These Cookies, which may include session recording and
//                       replay technology, collect usage and performance data such as mouse movements, clicks, and
//                       other actions. For instance, we employ Cookies to track the count of unique visitors to a
//                       website and to generate various statistics concerning the functioning of our websites. This
//                       entails the use of Cookies both from Tatum and from external analytics providers, who assist
//                       Tatum in comprehending user interactions and behaviors on Tatum's Websites.
//                     </td>
//                   </tr>
//                   <tr className="border h-[100px] border-[#cfd4dc]">
//                     <td className="p-2 border-[#cfd4dc] border border-y-0 font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border-l-0">
//                       Performance <br /> Cookies
//                     </td>
//                     <td className="p-2 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244] border border-y-0 border-l-0">
//                       Marketing and Personalization Cookies
//                     </td>
//                     <td className="p-2.5 border-[#cfd4dc] font-grava text-[14px] lm:text-[18px] leading-5 lm:leading-[150%] tracking-[0.2%] lm:tracking-[0.01em] font-[350] text-[#002244]">
//                       We use cookies to gain insights into your interests, such as the products you have viewed on
//                       our website. This enables us to display relevant products, services, and advertisements
//                       while you are on our site. By utilizing these cookies, we can personalize your experience
//                       across our websites.
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 The type of cookies listed above collect the following personal data:
//               </p>
//               <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 <li>Your Device Type</li>
//                 <li>IP Address</li>
//                 <li>Your Location History</li>
//                 <li>Browser History</li>
//               </ul>
//             </div>
//           </div>

//           <div id="storage" className="flex flex-col gap-4 mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 4.0 More Information
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 We recommend leaving cookies enabled to ensure optimal functionality. If you have any questions,
//                 feel free to reach out to us using the contact form on our{" "}
//                 <span
//                   className="font-[450] cursor-pointer underline"
//                   onClick={() => {
//                     navigate("/contact");
//                     window.scrollTo(0, 0);
//                   }}
//                 >
//                   contact page.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div id="security" className="flex flex-col gap-4 mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 4.1 How to Disable Cookies on Your Browser
//               </p>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 Steps to disable cookies on Microsoft Edge, Google Chrome, Mozilla Firefox, and Opera browsers
//                 are as follows:
//               </p>
//             </div>
//           </div>

//           <div id="rights" className="flex flex-col gap-4 mt-[20px]">
//             <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//               4.1.1 Disable Cookies in Microsoft Edge
//             </p>
//             <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               <li>Open Edge browser</li>
//               <li>Click on the 3-dotted 'More' link to open its Settings.</li>
//               <li>Scroll down and click on View Advanced Settings</li>
//               <li>Again, scroll down till you see the setting for Cookies.</li>
//               <li>When here, from the 3 options, select one.</li>
//             </ul>
//             <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               The available options are:
//             </p>
//             <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               <li>Block all Cookies.</li>
//               <li>Block only third-party cookies.</li>
//               <li>Don't block cookies.</li>
//             </ul>
//             <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               To disable all cookies, make sure to select the ‘Block all cookies’ option, and restart Microsoft
//               Edge.
//             </p>
//           </div>

//           <div id="cookies" className="flex flex-col gap-4 mt-[20px]">
//             <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//               4.1.2 Disable Cookies in Chrome
//             </p>
//             <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               <li>
//                 To disable Cookies on Chrome, click the Tools button &gt; Settings. Towards the end of this
//                 page, you will see the Show Advanced Settings link.
//               </li>
//               <li>Click on it. Under Privacy</li>
//               <li>Click on the Content Settings button. Here you can select the options you feel are best suited for you.</li>
//               <li>You can click on the images to see the larger versions.</li>
//             </ul>
//           </div>

//           <div id="updates" className="flex gap-4 flex-col mt-[20px]">
//             <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//               4.1.3 Disable Cookies in Firefox
//             </p>
//             <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//               <li>In Firefox, open Settings &gt; Options &gt; Privacy tab</li>
//               <li>Under History, from the drop-down menu, select Use custom settings for history.</li>
//               <li>You can now select the Cookies options you want.</li>
//             </ul>
//           </div>

//           <div id="contact" className="flex gap-4 flex-col mt-[20px]">
//             <div className="flex flex-col gap-4">
//               <p className="font-[450] leading-[25px] lm:leading-[30px] text-[20px] lg:text-[22px] text-[#002244] tracking-[0.01em] font-grava">
//                 4.1.4 Disable Cookies in Opera
//               </p>
//               <ul className="list-disc pl-5 font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 <li>Open settings &gt; Privacy &amp; Security</li>
//                 <li>
//                   Under Cookies you will see the options to manage your Cookie settings and choose which kind of
//                   Cookies you wish to allow or disallow on your computer
//                 </li>
//               </ul>
//               <p className="font-grava font-[350] leading-[25px] lm:leading-[30px] text-[#002244] text-base lg:text-[18px]">
//                 For queries or concerns regarding our Cookie Policy, please do not hesitate to get in touch with
//                 us using the contact form on our{" "}
//                 <span
//                   className="font-[450] underline cursor-pointer"
//                   onClick={() => {
//                     navigate("/contact");
//                     window.scrollTo(0, 0);
//                   }}
//                 >
//                   contact page.
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Helper function to generate section titles
// const getSectionTitle = (index) => {
//   const titles = [
//     "1.0 Introduction",
//     "2.0 What are Cookies",
//     "3.0 How we use Cookies",
//     "3.1 Turn Off or Opt-Out of Cookies",
//     "3.2 What We Use Cookies For",
//     "4.0 More Information",
//     "4.1 How to Disable Cookies on Your Browser",
//     "4.1.1 Disable Cookies in Microsoft Edge",
//     "4.1.2 Disable Cookies in Chrome",
//     "4.1.3 Disable Cookies in FireFox",
//     "4.1.4 Disable Cookies in Opera",
//   ];
//   return titles[index - 1] || "";
// };

// export default CookiePolicy;