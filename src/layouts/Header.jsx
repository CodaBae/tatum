import React, { useState, useRef, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { SlLock } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

import Logo from "../assets/svg/logo.svg";
import Padlock from "../assets/svg/padlock.svg";
import Savings from "../assets/svg/savings.svg";
import Bag from "../assets/svg/bag.svg";
import VR from "../assets/svg/vr.svg";
import Current from "../assets/svg/current.svg";
import Card from "../assets/svg/card.svg";
import Mortgage from "../assets/svg/mortgage.svg";
import Insurance from "../assets/svg/insurance.svg";
import Investment from "../assets/svg/investment.svg";
import Leasing from "../assets/svg/leasing.svg";
import Service from "../assets/svg/service.svg";
import Leadership from "../assets/svg/leadership.svg";
import TatumCard from "../assets/svg/tatum_card.svg";
import Payroll from "../assets/svg/payroll.svg";
import Risk from "../assets/svg/risk.svg";
import Trade from "../assets/svg/trade.svg";
import Treasury from "../assets/svg/treasury.svg";
import Business from "../assets/svg/business.svg";
import Credit from "../assets/svg/credit.svg";
import Expense from "../assets/svg/expense.svg";
import Job from "../assets/svg/job.svg";
import Solutions from "../assets/svg/solutions.svg";
import Funding from "../assets/svg/crowdfunding.svg";
import Custom from "../assets/svg/custom.svg";
import Estate from "../assets/svg/estate.svg";
import Money from "../assets/svg/money.svg";
import Suit from "../assets/svg/suit.svg";
import Wealth from "../assets/svg/wealth.svg";
import Blog from "../assets/svg/blog.svg";
import Branch from "../assets/svg/branch.svg";
import Media from "../assets/svg/media.svg";
import Press from "../assets/svg/press.svg";
import Faq from "../assets/svg/faq.svg";
import Public from "../assets/svg/public.svg";
import Gov from "../assets/svg/gov.svg";

import "./css/Header.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [showPersonalDropdown, setShowPersonalDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showCorporateDropdown, setShowCorporateDropdown] = useState(false);
  const [showSmeDropdown, setShowSmeDropdown] = useState(false);
  const [showPrivateDropdown, setShowPrivateDropdown] = useState(false);
  const [showInstitutionalDropdown, setShowInstitutionalDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  const isScrolling = useRef(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
  
        if (currentScrollY <= 0) {
          setVisible(true);
        } else {
          if (scrollDirection === 'down' && currentScrollY > 100 && visible) {
            setVisible(false);
          } else if (scrollDirection === 'up' && !visible) {
            setVisible(true);
          }
        }
  
        lastScrollYRef.current = currentScrollY;
        isScrolling.current = false;
      });
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);
  
  const handleMouseEnter = (menu) => {
    if (menu === "about") {
      setShowAboutDropdown(true);
      setShowPersonalDropdown(false);
      setShowCorporateDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
      setShowInstitutionalDropdown(false);
    } else if (menu === "personal") {
      setShowPersonalDropdown(true);
      setShowAboutDropdown(false);
      setShowCorporateDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
      setShowInstitutionalDropdown(false);
    } else if (menu === "corporate") {
      setShowCorporateDropdown(true);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
      setShowInstitutionalDropdown(false);
    } else if (menu === "business") {
      setShowSmeDropdown(true);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
      setShowInstitutionalDropdown(false);
    } else if (menu === "private") {
      setShowPrivateDropdown(true);
      setShowSmeDropdown(false);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowResourcesDropdown(false);
      setShowInstitutionalDropdown(false);
    } else if (menu === "resources") {
      setShowResourcesDropdown(true);
      setShowInstitutionalDropdown(false);
      setShowPrivateDropdown(false);
      setShowSmeDropdown(false);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
    } else if (menu === "institutional") {
      setShowInstitutionalDropdown(true);
      setShowResourcesDropdown(false);
      setShowPrivateDropdown(false);
      setShowSmeDropdown(false);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
    }  else if (menu === "nil") {
      setShowInstitutionalDropdown(false);
      setShowResourcesDropdown(false);
      setShowPrivateDropdown(false);
      setShowSmeDropdown(false);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
    }
  };

  const handleMouseLeave = (menu) => {
    if (menu === "about") {
      setShowAboutDropdown(false);
    } else if (menu === "personal") {
      setShowPersonalDropdown(false);
    } else if (menu === "corporate") {
      setShowCorporateDropdown(false);
    } else if (menu === "business") {
      setShowSmeDropdown(false);
    } else if (menu === "private") {
      setShowPrivateDropdown(false);
    } else if (menu === "resources") {
      setShowResourcesDropdown(false);
    } else if (menu === "institutional") {
      setShowInstitutionalDropdown(false);
    } else if (menu === "nil") {
      setShowResourcesDropdown(false);
    }
  };

  return (
    <div
      className={`bg-[#fff] fixed z-50 w-full px-[46px] h-[80px] py-5 flex items-center justify-between transition-transform duration-500 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    
      onMouseLeave={() => {
        handleMouseEnter("nil"),
        handleMouseLeave("nil");
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-[125px] h-[64px] cursor-pointer"
        onClick={() => {
          navigate("/"),
          window.scrollTo(0, 0)
        }}
      />
      <div className="flex items-center gap-[32px]">
        {/* <p
          className="font-grava font-[500] text-base text-[#002244] cursor-pointer"
          onClick={() =>
            navigate("/", {
              state: { section: "home" },
            })
          }
        >
          Home
        </p> */}

        {/* About */}
        <div className="relative inline-block dropdown-wrapper">
          <div
            onMouseEnter={() => handleMouseEnter("about")}
            className="block font-grava font-[500] text-base text-[#002244] cursor-pointer focus:outline-none"
            onClick={() => {
              navigate("/about"),
              window.scrollTo(0, 0)
            }}
          >
            About Us
          </div>
          {showAboutDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-0 py-0 w-[566px] ${
                showAboutDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col  gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/about"),
                      window.scrollTo(0, 0)
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Bag} alt="Bag" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Company Overview
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Who we are and what we do.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/about", {
                        state: { section: "mission-and-vision" },
                      })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={VR} alt="VR" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Mission and Vision
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Innovation driving our purpose.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer "
                    onClick={() =>
                      navigate("/about", {
                        state: { section: "services" },
                      })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Service} alt="Service" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Core Values
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Innovative services designed for you.
                      </p>
                    </div>
                  </div>

                </div>
                <div className="bg-[#E6E9E1] w-[0.1px] h-[198px]"></div>
                  <div className="flex flex-col gap-4">
                    <div
                      className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/about/teams", {
                          state: {
                            section: "teams"
                          }
                        }), window.scrollTo(0, 0)
                      }}
                    >
                      <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                        <img src={Leadership} alt="Leadership" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                          Leadership
                        </p>
                        <p className="text-[#546B82] text-[10px] font-grava">
                          Meet the people behind our success.
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/about/careers", {
                          state: {
                            section: "careers"
                          }
                        }),
                        window.scrollTo(0, 0)
                      }}
                    >
                      <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                        <img src={Estate} alt="Estate" className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                          Careers
                        </p>
                        <p className="text-[#546B82] text-[10px] font-grava">
                          Explore opportunities to grow with us
                        </p>
                      </div>
                    </div>

                  </div>

              </div>
            </div>
          )}
        </div>

        {/* Personal */}
        <div className="relative inline-block dropdown-wrapper">
          <div
            onMouseEnter={() => handleMouseEnter("personal")}
            className="block font-grava font-[500] text-base text-[#002244] cursor-pointer focus:outline-none"
            onClick={() =>{
              navigate("/personal"),
              window.scrollTo(0, 0)
            }}
          >
            Personal
          </div>
          {showPersonalDropdown && (
            <div
              className={`dropdown-menu bg-[#fff]  transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[566px] ${
                showPersonalDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("personal")}
            >
              <div
                className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200"
                // style={{ height: "38vh" }}
              >
                <div className="flex flex-col items-start gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", { state: { section: "savings" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Savings} alt="Savings" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Savings Accounts
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Flexible options to grow your savings.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", { state: { section: "current" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Current} alt="Current" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Current Accounts
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Easy solutions for daily banking.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", { state: { section: "cards" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Card} alt="Card" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] whitespace-nowrap font-semibold leading-[18px] font-grava">
                        Cards (Debit, Credit, Virtual)
                      </p>
                      <p className="text-[#546B82] whitespace-nowrap text-[10px] font-grava">
                        Seamless payments anywhere, anytime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9E1] w-[0.1px] h-[198px]"></div>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", { state: { section: "loans" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Mortgage} alt="Mortgage" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Loans and Mortgages
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Tailored financing to achieve your goals.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/personal", { state: { section: "fixed" } });
                    }}
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Insurance}
                        alt="Insurance"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Fixed Deposit
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Grow your money with guaranteed returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Business fka Sme */}
        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-[500] text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("business")}
            onClick={() =>{
              navigate("/business"),
              window.scrollTo(0, 0)
            }}
          >
            Business
          </p>
          {showSmeDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[581px] ${
                showSmeDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("business")}
            >
              <div
                className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200"
                // style={{ height: "35vh" }}
              >
                <div className="flex flex-col gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/business", { state: { section: "account" } })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Business} alt="Business" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Business Accounts
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Simplify your business finances.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/business", { state: { section: "payment" } })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Solutions}
                        alt="Solutions"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Payment solutions
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Payment Processing Services
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      navigate("/business", { state: { section: "loans" } })
                    }
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Credit} alt="Credit" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Loans and Credit Lines
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible funding for growth
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9E1] w-[0.1px] h-[188px]"></div>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer "
                    onClick={() =>
                      navigate("/business", { state: { section: "advisory" } })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Funding} alt="Funding" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Financial Planning and Advisory
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Expert guidance for smart decisions
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/business", { state: { section: "faq" } })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Answers to your SME banking queries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Corporate */}
        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-[500] text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("corporate")}
            onClick={() => {
              navigate("/corporate"),
              window.scrollTo(0, 0)
            }}
          >
            Corporate
          </p>
          {showCorporateDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[585px] ${
                showCorporateDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("corporate")}
            >
              <div
                className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200"
                // style={{ height: "35vh" }}
              > 
                <div className="flex flex-col gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate", {
                        state: { section: "treasury" },
                      });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Treasury} alt="Treasury" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Treasury Management
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Maximize cash flow and returns.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate", { state: { section: "trade" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Trade} alt="Trade" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Trade Finance
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Simplify global trade transactions
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate", {
                        state: { section: "investment" },
                      });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Investment}
                        alt="Investment"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Investment Banking
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Strategic insights for growth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E6E9E1] w-[0.1px] h-[188px]"></div>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate", { state: { section: "lending" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Leasing} alt="Leasing" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Corporate Lending and Leasing
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible financing for enterprises
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate", { state: { section: "faq" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Expert answers to corporate banking queries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Private */}
        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-[500] text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("private")}
            onClick={() => {
              navigate("/private"),
              window.scrollTo(0, 0)
            }}
          >
            Private
          </p>
          {showPrivateDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[320px] ${
                showPrivateDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("private")}
            >
              <div
                className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200"
                // style={{ height: "50vh" }}
              >
                <div className="flex flex-col gap-4 w-[257px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/private", { state: { section: "wealth" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Wealth} alt="Wealth" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Wealth Management
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Solution to grow and protect your wealth
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/private", {
                        state: { section: "invest" },
                      });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Suit} alt="Suit" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Exclusive Banking Benefits
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Smarter investment decisions
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/private", {
                        state: { section: "card" },
                      })
                    }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={TatumCard} alt="TatumCard" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Tatum Black Card
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible funding tailored to you
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div
                      className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/private", { state: { section: "faq" } });
                      }}
                    >
                      <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                        <img src={Faq} alt="Faq" className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                          FAQs
                        </p>
                        <p className="text-[#546B82] text-[10px] font-grava">
                          Answers to your Private Banking queries
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
      
              </div>
            </div>
          )}
        </div>

        {/* institutional */}
        <div className="relative inline-block dropdown-wrapper">
          <p
            className="font-grava font-[500] text-base text-[#002244] cursor-pointer"
            onMouseEnter={() => handleMouseEnter("institutional")}
            onClick={() => {
              navigate("/institutional"),
              window.scrollTo(0, 0)
            }}
          >
            Institutional
          </p>
          {showInstitutionalDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute -left-44 min-h-[250px] rounded-xl mt-1 py-0 h-[100px] w-[294px] ${
                showInstitutionalDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("institutional")}
            >
              <div
                className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200"
                // style={{ height: "40vh" }} //35vh
              >
                <div className="flex flex-col items-start gap-4 w-[390px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/institutional", { state: { section: "public" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={TatumCard} alt="public" className="w-6 h-6" />  {/* src={Public} */}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Public Sector
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Insights and tips for smarter banking
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/institutional", {
                        state: { section: "gov" },
                      });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Gov} alt="Gov" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                        Non-Government institution Banking
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Non-Government Institution Banking
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div
                      className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                      onClick={() => {
                        navigate("/institutional", { state: { section: "why" } });
                      }}
                    >
                      <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                        <img src={Faq} alt="Faq" className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#002244] text-[14px] font-semibold leading-[18px] font-grava">
                          Why Choose Us
                        </p>
                        <p className="text-[#546B82] text-[10px] font-grava">
                          Expert answers to corporate banking queries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
               
              </div>
            </div>
          )}
        </div>

         {/* Digital */}
         <p
          className="font-grava font-[500] text-base text-[#002244] cursor-pointer"
          onClick={() =>
            navigate("/digital", {
              state: {
                section: "digital",
              },
            })
          }
        >
          Digital
        </p>
      

        {/* Help */}
        <p
          className="font-grava font-[500] text-base text-[#002244] cursor-pointer"
          onClick={() => {
            navigate("/help");
            window.scrollTo(0, 0);
          }}
        >
          Help & Support
        </p>
      </div>

        {/* Contact
        <p
          className="font-grava font-[500] text-base text-[#002244] cursor-pointer"
          onClick={() =>
            navigate("/contact", {
              state: {
                section: "contact",
              },
            })
          }
        >
          Contact Us
        </p>
      </div> */}

      <div className="flex items-center gap-[15px]">
        <FiSearch
          className="w-5 h-5 text-[#002244] cursor-pointer"
          onClick={() => {
            navigate("/help");
            window.scrollTo(0, 0);
           
          }}
        />
        <button
          className="bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-[#090540]"
          type="button"
          onClick={() => {navigate("/internet-banking"); window.scrollTo(0, 0)}}
        >
          <SlLock className="w-5 h-5 text-[#090540] transition-colors duration-500 ease-in-out group-hover:text-[#FFCC33]" />
          <p className="font-[500] text-base font-grava text-[#090540] transition-colors duration-500 ease-in-out group-hover:text-[#FFCC33]">
            Internet Banking
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
