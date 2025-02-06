import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { SlLock } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

import Logo from "../assets/svg/logo.svg";
import Padlock from "../assets/svg/padlock.svg";
import Savings from "../assets/svg/savings.svg";
import Current from "../assets/svg/current.svg";
import Card from "../assets/svg/card.svg";
import Mortgage from "../assets/svg/mortgage.svg";
import Insurance from "../assets/svg/insurance.svg";
import Investment from "../assets/svg/investment.svg";
import Leasing from "../assets/svg/leasing.svg";
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

import "./css/Header.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [showPersonalDropdown, setShowPersonalDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showCorporateDropdown, setShowCorporateDropdown] = useState(false);
  const [showSmeDropdown, setShowSmeDropdown] = useState(false);
  const [showPrivateDropdown, setShowPrivateDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    if (menu === "about") {
      setShowAboutDropdown(true);
      setShowPersonalDropdown(false);
      setShowCorporateDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
    } else if (menu === "personal") {
      setShowPersonalDropdown(true);
      setShowAboutDropdown(false);
      setShowCorporateDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
    } else if (menu === "corporate") {
      setShowCorporateDropdown(true);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowSmeDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
    } else if (menu === "sme") {
      setShowSmeDropdown(true);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowPrivateDropdown(false);
      setShowResourcesDropdown(false);
    } else if (menu === "private") {
      setShowPrivateDropdown(true);
      setShowSmeDropdown(false);
      setShowCorporateDropdown(false);
      setShowPersonalDropdown(false);
      setShowAboutDropdown(false);
      setShowResourcesDropdown(false);
    } else if (menu === "resources") {
      setShowResourcesDropdown(true);
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
    } else if (menu === "sme") {
      setShowSmeDropdown(false);
    } else if (menu === "private") {
      setShowPrivateDropdown(false);
    } else if (menu === "resources") {
      setShowResourcesDropdown(false);
    }
  };

  return (
    <div className="bg-[#fff] fixed z-50 w-full px-[46px] py-5 flex items-center justify-between">
      <img
        src={Logo}
        alt="Logo"
        className="w-[109px] h-[44px] cursor-pointer"
        onClick={() => navigate("/", {
          state: { section: "home" },
        })}
      />
      <div className="flex items-center gap-[32px]">
        <p
          className="font-grava font-medium text-base text-[#002244] cursor-pointer"
          onClick={() => navigate("/", {
            state: { section: "home" },
          })}
        >
          Home
        </p>
        <div className="relative inline-block dropdown-wrapper">
          <div
            onMouseEnter={() => handleMouseEnter("about")}
            className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
            onClick={() => 
              navigate("/about", {
                state: { section: "about" },
              })}
          >
            About Us
          </div>
          {showAboutDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-0 py-0 w-[290px] ${
                showAboutDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("about")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col  gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("about", {
                        state: { section: "about" },
                      });
                
                    }}
                    >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Savings} alt="Savings" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Our Story
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
                    }>
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Current} alt="Current" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
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
                    }>
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Card} alt="Card" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Services
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Innovative services designed for you.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {navigate("/about", {state: { section: "teams" }, } )}}>
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Mortgage} alt="Mortgage" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Our Team
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Meet the people behind our success.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-[#E6E9EC] w-[1px] h-[260px]"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Insurance}
                        alt="Insurance"
                        className="w-6 h-6"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-1"
                      onClick={() => navigate("/about/careers")}>
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Careers
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Explore opportunities to grow with us
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
        <div className="relative inline-block dropdown-wrapper">
          <div
            onMouseEnter={() => handleMouseEnter("personal")}
            className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
            onClick={() => {
              navigate("/personal", {state: { section: "personal" }, });
            }}
            >
            Personal
          </div>
          {showPersonalDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0  w-[566px] ${
                showPersonalDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("personal")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", {state: { section: "save" }, });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Savings} alt="Savings" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
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
                      navigate("/personal", {state: { section: "save" }, });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Current} alt="Current" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
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
                      navigate("/personal", {state: { section: "save" }, });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Card} alt="Card" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Cards ( Debit, Credit, Virtual)
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Seamless payments anywhere, anytime.
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/personal", {state: { section: "save" }, });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Mortgage} alt="Mortgage" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Loans and Mortgages
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Tailored financing to achieve your goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9EC] w-[1px] h-[298px]"></div>
                <div className="flex flex-col gap-4">
                  <div
                    onClick={() => {
                      navigate("/personal", {state: { section: "save" } });
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
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Insurance Services
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Protect what matters most.
                      </p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer "
                    onClick={() => {
                      navigate("/personal", {state: { section: "faq" }, });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Quick answers to your banking questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("sme")}
            onClick={() => navigate("/sme", {state: { section: "sme" } })}
          >
            SME
          </p>
          {showSmeDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out h-[312px] shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[581px] ${
                showSmeDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("sme")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Business} alt="Business" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Business Accounts
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Simplify your business finances.
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Solutions} alt="Solutions" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Payment solutions
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Payment processing services
                      </p>
                    </div>
                  </div>

                  <div 
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Credit} alt="Credit" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Loans and Credit Lines
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible funding for growth
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Expense} alt="Expense" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Expense Management Tools
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Streamline business spending
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9EC] w-[1px] h-[298px]"></div>
                <div className="flex flex-col gap-4">
                  <div 
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Job}
                        alt="Job"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Business Insurance
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Comprehensive coverage for your enterprise
                      </p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer "
                    onClick={() => navigate("/sme", {state: { section: "payment" } })}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Funding} alt="Funding" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Financial Planning and Advisory
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Expert guidance for smart decisions
                      </p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => navigate("/sme", {state: { section: "faq" } })}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Quick answers to your banking questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("corporate")}
          >
            Corporate
          </p>
          {showCorporateDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl h-[312px] absolute -left-44 rounded-xl mt-1 py-0 w-[585px] ${
                showCorporateDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("corporate")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate");
                    }}>
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Treasury} alt="Treasury" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Treasury Management
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Maximize cash flow and returns.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Trade} alt="Trade" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Trade Finance
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Simplify global trade transactions
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Investment} alt="Investment" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Investment Banking
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Strategic insights for growth
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Payroll} alt="Payroll" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Payroll Management
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Simplify payroll and benefits
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9EC] w-[1px] h-[298px]"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Leasing}
                        alt="Leasing"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Corporate Lending and Leasing
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible financing for enterprises
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer ">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Risk} alt="Risk" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Risk Management
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Proactive strategies to mitigate risks
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer ">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Quick answers to your banking questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block dropdown-wrapper">
          <p
            className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
            onMouseEnter={() => handleMouseEnter("private")}
            onClick={() => navigate("/private", {state: { section: "private" } }) }
          >
            Private
          </p>
          {showPrivateDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 h-[312px] w-[605px] ${
                showPrivateDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("private")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col gap-4 w-[257px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/private/wealth-management", {state: { section: "wealth" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Wealth} alt="Wealth" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
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
                      navigate("/private/investement-advisory", {
                        state: { section: "invest" },
                      });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Suit} alt="Suit" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Investment Advisory
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Smarter investment decisions
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => navigate("/private/estate-and-trust-planning", {
                      state: { section: "estate" } }
                    )}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Estate} alt="Estate" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Estate and Trust Planning
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Secure your legacy
                      </p>
                    </div>
                  </div>

                  <div 
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/private/personal-loans-and-credit");
                      window.scrollTo(0, 0)
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Money} alt="Money" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Personal Loans and Credit
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible funding tailored to you
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E6E9EC] w-[1px] h-[272px]"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer">
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img
                        src={Custom}
                        alt="Custom"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Custom Financial Solutions
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Services designed for your lifestyle
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    onClick={() => {
                      navigate("/private", {state: { section: "faq" } });
                    }}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Faq} alt="Faq" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        FAQ
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Quick answers to your banking questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block dropdown-wrapper">
          <p
            className="font-grava font-medium text-base text-[#002244] cursor-pointer"
            onMouseEnter={() => handleMouseEnter("resources")}
            // onClick={() => navigate("/resources")}
          >
            Resources
          </p>
          {showResourcesDropdown && (
            <div
              className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-0 py-0 w-[294px] h-[312px] ${
                showResourcesDropdown ? "show" : ""
              }`}
              onMouseLeave={() => handleMouseLeave("resources")}>
              <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                <div className="flex flex-col  gap-4 w-[237px]">
                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    // onClick={() => navigate("/about")}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Blog} alt="Blog" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Blog
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava whitespace-nowrap">
                        Insights and tips for smarter banking
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    // onClick={() =>
                    //   navigate("/about", {
                    //     state: { section: "mission-and-vision" },
                    //   })
                    // }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Press} alt="Press" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Press Release
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Stay updated on our news
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer "
                    // onClick={() =>
                    //   navigate("/about", {
                    //     state: { section: "services" },
                    //   })
                    // }
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Media} alt="Media" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Media Gallery
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Photos, videos, and media assets
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer"
                    // onClick={() => {navigate("/about/teams"); window.scrollTo(0, 0)}}
                  >
                    <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                      <img src={Branch} alt="Branch" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#002244] text-xs font-medium font-grava">
                        Branch & ATM Locator
                      </p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Find branches and ATMs near you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <p
          className="font-grava font-medium text-base text-[#002244] cursor-pointer"
          onClick={() => navigate("/help-and-support")}>
          Help & Support
        </p>
        <p
          className="font-grava font-medium text-base text-[#002244] cursor-pointer"
          onClick={() => navigate("/contact Us")}>
          Contact Us
        </p>
      </div>
      <div className="flex items-center gap-[15px]">
        <FiSearch className="w-5 h-5 text-[#002244] " />
        <button
          className="bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#090540]"
          type="button"
          onClick={() => navigate("/")}>
          <SlLock className="w-5 h-5 text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]" />
          <p className="font-medium text-base font-grava text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]">
            Internet Banking
          </p>
        </button>

        {/* <button
            className='bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group hover:transition hover:duration-100 hover:delay-75 hover:ease-in-out hover:bg-[#090540] flex items-center justify-center'
            type='button'
          >
            <SlLock className='w-5 h-5 text-[#090540] group-hover:text-[#FFCC33]' onClick={() => navigate("/")} />
            <p className='font-medium text-base font-grava text-[#090540] group-hover:text-[#FFCC33]'>Internet Banking</p>
          </button> */}
      </div>
    </div>
  );
};

export default Header;
