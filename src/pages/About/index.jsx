import React from "react";
import HeaderImg from "../../assets/jpg/TeamPhoto.jpg";
import ArrowVector from "../../assets/svg/Arrow-Vector70.svg";
import teamImage from "../../assets/png/teamImg2.png";
import yellowImage from "../../assets/svg/yellowCircle.svg";
import cardimg from "../../assets/jpg/CardsImg1.jpg";
import card2img1 from "../../assets/svg/card2Img1.svg";
import card2img2 from "../../assets/svg/card2Img2.svg";
import card2img3 from "../../assets/svg/card2img3.svg";
import card2img4 from "../../assets/jpg/card2img4.jpg";
import card3img1 from "../../assets/jpg/card3img1.jpg";
import card3img2 from "../../assets/jpg/card3img2.jpg";
import MissionVisionImg from "../../assets/jpg/MissionVisionImg.jpg";
import cardIcon from "../../assets/svg/Cards.svg";
import ATMicon from "../../assets/svg/ATMicon.svg";
import OnlineBankingIcon from "../../assets/svg/OnlineBankingIcon.svg";
import USSDicon from "../../assets/svg/USSDicon.svg";
import calculatorIcon from "../../assets/svg/calculatorIcon.svg";
import FXicon from "../../assets/svg/FXicon.svg";

const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={HeaderImg}
          alt="Header"
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-black/30 to-black/60 pointer-events-none"></div>
        <div className="absolute top-[515px] left-[70px] h-auto  gap-4 flex flex-col justify-start items-start text-left ">
          <h1 className="font-grava font-bold text-[32px] leading-[50px] tracking-[0.002em] text-white">
            Welcome to Tatum Bank
          </h1>
          <h2 className="font-grava font-[350] text-[28px] leading-[45px] tracking-normal mb-7 text-white">
            Empowering Nigerians with innovative, secure, <br />
            and inclusive banking solutions. Open your <br />
            account today and take control of your <br />
            financial future!
          </h2>
        </div>
      </div>

      <div className="flex relative top-[100px] left-[70px] w-[1500px] mb-[40px]">
        <div>
          <h1 className="font-grava font-semibold text-[48px] leading-[60px] tracking-[0.2%] mb-11 text-[#002244] w-[222px]">
            Our Story
          </h1>
          <p className="font-grava font-light text-[24px] leading-[45px] tracking-[1.4%] text-[#334E69] ">
            Tatum Bank was founded in XXXX as a financial <br />
            organization with the purpose of making banking <br />
            accessible to all Nigerians.
          </p>
        </div>
        <div className="pt-12 pl-6">
          <img
            src={ArrowVector}
            alt="ArrowVector"
            className="w-[400px] h-[400px]"
          />
        </div>
      </div>

      <div className="flex z-0">
        <div className="w-[634px] h-[643px] ml-[70px] rounded-[24px] overflow-hidden">
          <img
            src={teamImage}
            alt="teamImage2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" ml-[45px] mt-6 h-[400px]">
          <p className="font-grava font-medium text-[80px] leading-[21px] tracking-[1.4%] text-[#002244] ">
            “O
            <span className="font-grava font-light text-[24px] text-[#334E69]">
              ver the years, we have established ourselves as <br />
              a reputable name in the finance industry, supporting <br />
              individuals, small and medium-sized businesses, <br />
              corporations, and private clients around the country. We <br />
              are committed to innovation and embrace technology <br />
              to deliver seamless, customer-centered banking <br />
              experiences.
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between pb-4">
        <div className="mt-20 w-[654px] ml-[180px]">
          <h1 className="font-grava font-semibold text-[40px] leading-[60px] tracking-[0.2%] mb-8 text-[#002244] ">
            Message from the Group CEO
          </h1>
          <p className="font-grava font-light text-[24px] leading-[45px] tracking-[1.4%] text-[#334E69] mb-6 ">
            Our primary business strategy is to continue to focus on the
            customer – the undisputed employer.
          </p>
          <p className="font-grava font-light text-[24px] leading-[45px] tracking-[1.4%] text-[#334E69] mb-6 ">
            To achieve the above, our esteemed customers and the dedicated
            workforce are very critical to us even with the best of processes
            and technology. We are committed to ensuring a positive experience
            for our customers across all our touch points. We will continuously
            strive to simplify and streamline our process and ensure systems
            stability and reliable IT architecture to support our operations. We
            will proactively interrogate our systems, services and resources in
            order to constantly surpass the expectations of our customers.
          </p>

          <p className="font-grava font-light text-[24px] leading-[45px] tracking-[1.4%] text-[#334E69] ">
            Everything we do, we will do it well – Execution!
          </p>

          <div className="w-[323px] h-[82px] rounded-tr-[16px] mt-4 rounded-bl-[16px] bg-[#FFEFC0] flex flex-col items-center justify-center">
            <h2 className="font-grava font-semibold text-[24px] leading-[30px] tracking-[1.4%] text-[#002244]">
              Aminatu Dahiru Chiroma
            </h2>
            <p className="font-grava font-light text-[16px] leading-[30px] tracking-[1.4%] text-[#002244]">
              Non-Executive Director
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-[1890px] z-10">
          <img
            src={yellowImage}
            alt="BusinessMan"
            className="w-[660px] h-auto pl-[75px]"
          />
        </div>
      </div>

      <div className="m-[59.66px] w-full">
        <div className="w-[100%]">
          <h1 className="font-grava font-semibold text-[48px] leading-[60px] tracking-[0.2%] mb-11 text-[#002244] w-[100%]">
            Our Core Values
          </h1>
        </div>
        <div className="flex gap-[21px]">
          <div className="w-[458px] h-[626px] rounded-[24px] overflow-hidden relative">
            <img
              src={cardimg}
              alt="cardimg"
              className="object-cover w-full h-full"
            />

            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute top-[502.87px] left-[21.31px] z-10">
              <h2 className="font-grava font-[500] text-[25.57px] leading-[30px] tracking-[1.4%] text-[#FFFFFF]">
                Integrity
              </h2>
              <p className="font-grava font-[300] text-[19.18px] leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                Upholding the highest ethical standards <br /> in all our
                services.
              </p>
            </div>
          </div>

          <div>
            <div className="w-[456.89px] h-[302.46px] bg-[#fffaeb] rounded-[24px] relative  mb-[21px]">
              <div className="flex">
                <img
                  src={card2img1}
                  alt="card2img1"
                  className="w-[123.54px] h-[123.54px] absolute top-[20.24px] left-[18.11px]"
                />

                <img
                  src={card2img2}
                  alt="card2img2"
                  className="w-[102.2px] h-[102.2px] absolute top-[29px] left-[177px]"
                />
                <img
                  src={card2img3}
                  alt="card2img3"
                  className="w-[123.59px] h-[123.59px] absolute top-[18.11px] left-[315.36px]"
                />
              </div>
              <div className="absolute top-[178.99px] left-[21.31px]">
                <h2 className="font-grava font-[500] text-[25.57px] leading-[30px] tracking-[1.4%] text-[#002244] ">
                  Customer-Centricity
                </h2>
                <p className="font-grava font-[300] text-[19.18px] leading-[27px] tracking-[0.2%] text-[#002244]">
                  Prioritizing our clients’ needs with <br />
                  personalized solutions for each user type.
                </p>
              </div>
            </div>

            <div className="w-[456.89px] h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
              <div className="w-[456.89px] h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card2img4}
                  alt="card2Img4"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[178.99px] left-[21.31px]">
                <h2 className="font-grava font-[500] text-[25.57px] leading-[30px] tracking-[1.4%] text-[#FFFFFF]">
                  Inclusivity
                </h2>
                <p className="font-grava font-[300] text-[19.18px] leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Ensuring everyone has access to financial <br />
                  tools, regardless of their background.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[456.89px] h-[302.46px] bg-[#fffaeb] rounded-[24px] relative mb-[21px] overflow-hidden">
              <div className="w-[456.89px] h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card3img1}
                  alt="card3img1"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[178.99px] left-[21.31px]">
                <h2 className="font-grava font-[500] text-[25.57px] leading-[30px] tracking-[1.4%] text-[#FFFFFF]">
                  Innovation
                </h2>
                <p className="font-grava font-[300] text-[19.18px] leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Leveraging technology to redefine modern banking.
                </p>
              </div>
            </div>

            <div className="w-[456.89px] h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
              <div className="w-[456.89px] h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card3img2}
                  alt="card2Img4"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[178.99px] left-[21.31px]">
                <h2 className="font-grava font-[500] text-[25.57px] leading-[30px] tracking-[1.4%] text-[#FFFFFF]">
                  Sustainability
                </h2>
                <p className="font-grava font-[300] text-[19.18px] leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Committed to supporting environmentally <br />
                  and socially responsible practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vission Section */}

      <div>
        <div className="flex">
          <div className="bg-[#002244] w-[767.088px] h-[405.9174px] flex items-center justify-center">
            <div className="w-[516.67px] h-[115.05px]">
              <h1 className="font-grava font-[600] text-[42.62px] leading-[53.27px] tracking-[1.4%] text-[#FFFFFF] text-center pb-2">
                Mission
              </h1>
              <p className="font-grava font-[300] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#FFFFFF] text-center">
                To improve the lives of Nigerians, particularly the youth, by
                offering innovative, easily accessible, and secure financial
                services that promote economic growth and personal success.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#FFCC33] w-[769.088px] h-[405.9174px] flex items-center justify-center">
              <div className="w-[516.67px] h-[115.05px]">
                <h1 className="font-grava font-[600] text-[42.62px] leading-[53.27px] tracking-[1.4%] text-[#002244] text-center pb-2">
                  Vision
                </h1>
                <p className="font-grava font-[300] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#002244] text-center">
                  To be Nigeria's most trusted and innovative financial partner,
                  promoting financial literacy and enabling prosperity for
                  future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={MissionVisionImg}
            alt="MissionVisionImg"
            className="w-[100%] h-[745.78px] object-cover filter grayscale"
          />
        </div>
      </div>

      {/* New text Section */}
      <div className="flex mt-[70px]  mb-[150px] ml-[59.66px]">
        <div className="w-[696.77px] mt-[50px]">
          <h1 className="font-grava font-[500] text-[42.62px] leading-[53.27px] tracking-[0.2%] text-[#002244] pb-[24px]">
            Experience modern banking with Tatum Bank. Secure, fast, and
            customer-focused services to help you save, borrow, and grow your
            wealth.
          </h1>
          <p className="font-grava font-[300] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#002244]">
            Empowering Nigerians with innovative, secure, and inclusive banking
            solutions. Open your account today and take control of your
            financial future! Secure your financial future with Tatum Bank.
            Offering affordable loans, SME tools, and cutting-edge digital
            banking for every Nigerian.
          </p>
        </div>

        <div className="">
          <div className="relative w-[696.77px] h-auto ml-[15px] ">
            <div className="absolute top-[22.37px] left-[131.03px] w-[232.26px] h-[232.26px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center">
                Gen Z-Focused Solutions
              </h3>
            </div>
            <div className="absolute top-[0px] left-[378.22px] w-[232.26px] h-[232.26px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center">
                Cutting-Edge Digital Banking
              </h3>
            </div>
            <div className="absolute top-[230.13px] left-[0px] w-[232.26px] h-[232.26px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center">
                Accessible and Inclusive
              </h3>
            </div>
            <div className="absolute top-[254.63px] left-[236.51px] w-[232.26px] h-[232.26px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center">
                Financial Literacy Advocacy
              </h3>
            </div>
            <div className="absolute top-[225.86px] left-[474.09px] w-[232.26px] h-[232.26px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center">
                Exceptional Support
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}

      <div className="bg-[#F9FAFB] pb-[60px]">
        <div>
          <h1 className="font-grava font-[500] text-[51.14px] leading-[63.92px] tracking-[0.2%] text-[#002244] pt-[74px] flex justify-center">
            Find what you need instantly.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center w-[1534px] p-[34px] gap-[21px] ">
          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={cardIcon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    Debit/Credit Cards
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    Enjoy a card that never flops. Our Debit and credit cards
                    are reliable and secure.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={ATMicon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    ATM Branch Locator
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    Simply enter your location and find our closest branch on
                    the map.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Check the nearest ATM branch
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={OnlineBankingIcon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    Online Banking
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    Manage your accounts, pay bills, transfer funds, and track
                    transactions anytime, anywhere. Our user-friendly mobile app
                    serves you no matter where life takes you.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Download our mobile app
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={USSDicon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    USSD Banking
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    No internet? No problem. Access your account, check
                    balances, and perform essential transactions using our
                    simple *911#. It is quick, secure, and reliable.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Dial *911#
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={calculatorIcon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    Loan calculator
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    Easily calculate loan eligibility according to your current
                    salary.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Try our loan calculator
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-[435px] h-[380px] rounded-[26px] p-[28px] flex flex-col gap-[43px] bg-[#FFFFFF]">
              <div>
                <img src={FXicon} alt="Cards-Icon" />
              </div>
              <div className="w-[379.28px] h-[230.13px] flex flex-col justify-between">
                <div>
                  <h2 className="font-grava font-[500] text-[21.31px] leading-[31.96px] tracking-[1.4%] text-[#002244] ">
                    FX Market Rate
                  </h2>
                  <p className="font-grava font-[300] text-[17px] leading-[25.548px] tracking-[0.2%] text-[#002244] ">
                    Stay updated with real-time FX rates and make smarter,
                    timely decisions in the global market.
                  </p>
                </div>
                <div>
                  <button className="font-grava font-[350] text-[17px] w-[379.28px] h-[57.53px] rounded-tl-[17.05px] rounded-br-[17.05px] px-[21.31px] py-[15.98px] gap-[8.52px] border-[1.6px] border-[#002244] text-[#002244]">
                    Check our FX rates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
