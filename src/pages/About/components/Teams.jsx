import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeaderImg from "../../../assets/jpg/TeamPhoto.jpg";
import HeaderImgMobile from "../../../assets/png/TeamPhotoMobile.png";
import Forward from "../../../assets/svg/forward.svg";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("board");
  const navigate = useNavigate();
  const teamsRef = useRef(null);
  const { state } = useLocation();

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const team = [
    {
      name: "Samuel Tomi Ologunorisa, SAN, FCIArb (UK)",
      role: "Non-Executive Director",
      bio: "Samuel Tomi Ologunorisa, SAN, is a distinguished Nigerian lawyer with a career spanning over three decades...",
    },
    {
      name: "Niyi Adeseun",
      role: "Managing Director",
      bio: "Niyi Adeseun is a seasoned banker with over 33 years of experience in core banking operations...",
    },
    {
      name: "Aminatu Dahiru Chiroma",
      role: "Executive Director",
      bio: "Aminatu Chiroma is a highly accomplished individual and Group Managing Director of Binani Group of Companies...",
    },
  ];

  useEffect(() => {
    if (state?.section === "teams" && teamsRef.current) {
      teamsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <div className="w-full" ref={teamsRef}>
      <div
        style={{
          backgroundImage: `url(${window.innerWidth < 1028 ? HeaderImgMobile : HeaderImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full h-[434px] md:h-[793px] flex relative justify-center"
      >
        <div className="absolute inset-0 w-full h-auto bg-[#0005]" />
        <div className="bg-[#FFCC33] absolute -bottom-8 flex items-center justify-center w-[90%] md:w-[493px] h-[66px] gap-4 rounded-tl-lg rounded-br-lg py-5 px-10">
          <p
            className="font-[350] font-grava text-[#002244] text-sm lm:text-[20px] cursor-pointer"
            onClick={() => navigate("/", { state: { section: "home" } })}
          >
            Home
          </p>
          <img src={Forward} alt="forward" />
          <p
            className="font-[350] font-grava text-[#002244] whitespace-nowrap text-sm lm:text-[20px] cursor-pointer"
            onClick={() => navigate("/about", { state: { section: "about" } })}
          >
            About Us
          </p>
          <img src={Forward} alt="forward" />
          <p className="font-medium font-grava whitespace-nowrap text-[#002244] text-sm lm:text-[20px] ">
            Board Members
          </p>
        </div>
      </div>

      <div className="mt-[56px] lg:mt-[120px] w-full px-5 lg:px-[56px]">
        <p className="font-grava text-[20px] lg:text-[32px] text-[#182230] leading-[30px] lg:leading-[40px] tracking-[0.064px]">
          Our team of experienced leaders is focused on serving our clients,
          transforming our business, generating long-term shareholder value,
          and driving a culture of excellence and accountability.
        </p>
      </div>

      <div className="bg-[#fff] pt-[56px] lg:pt-[120px] pb-[56px] lg:pb-[120px] px-5 lg:px-[56px] flex flex-col gap-2">
        <div className="flex items-center gap-5 lg:gap-[32px] border border-[#D0D5DD] border-x-0 border-t-0">
          <div
            className={`${
              activeTab === "board"
                ? "border-[4px] border-x-0 border-t-0 border-b-[#FFCC33]"
                : ""
            } lg:w-[369px] flex items-start py-3 cursor-pointer`}
            onClick={() => handleTabChange("board")}
          >
            <p
              className={`${
                activeTab === "board" ? "text-[#002244]" : "text-[#B0BAC5]"
              } font-grava text-base lg:text-[40px] font-normal`}
            >
              Board of Directors
            </p>
          </div>
        </div>

        {/* Team Members List */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg"
              onClick={() =>
                navigate("/about/team-details", {
                  state: { team: member },
                })
              }
            >
              <h3 className="text-xl font-bold text-[#002244]">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
