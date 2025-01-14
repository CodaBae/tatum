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
          className="w-full h-[500px] sm:h-[600px] lg:h-[800px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-black/30 to-black/60 pointer-events-none"></div>
        <div className="absolute top-[325px] left-[30px] sm:top-[400px] sm:left-[30px] md:top-[400px] md:left-[50px] lg:top-[515px] lg:left-[50px] h-auto gap-4 flex flex-col justify-start items-start text-left">
          <h1 className="font-grava font-bold text-[28px] lg:text-[32px] leading-[35px] lg:leading-[50px] tracking-[0.002em] text-white">
            Welcome to Tatum Bank
          </h1>
          <h2 className="font-grava font-[350] text-[16px] leading-[24px] lg:text-[28px] lg:leading-[45px] tracking-normal mb-7 text-white">
            Empowering Nigerians with innovative, secure, <br />
            and inclusive banking solutions. Open your <br />
            account today and take control of your <br />
            financial future!
          </h2>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-[40px] lg:mt-[80px] lg:ml-[50px] lg:w-[1500px] mb-[20px] lg:mb-[80px] p-[20px] lg:p-0">
        <div>
          <h1 className="font-grava font-semibold text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px] tracking-[1.4%] lg:tracking-[0.2%] mb-2 lg:mb-11 text-[#002244] w-[222px]">
            Our Story
          </h1>
          <p className="font-grava font-light text-[18px] lg:text-[24px] leading-[27px] lg:leading-[45px] tracking-[0.2%] lg:tracking-[1.4%] text-[#334E69] w-[350px] lg:w-[654px] ">
            Tatum Bank was founded in XXXX as a financial organization with the
            purpose of making banking accessible to all Nigerians.
          </p>
        </div>
        <div className="pt-12 pl-6 left-[650px] top-[980px] absolute hidden lg:block">
          <img
            src={ArrowVector}
            alt="ArrowVector"
            className="w-[274px] h-[154px]"
          />
        </div>
      </div>

      <div className="flex-col flex lg:flex-row lg:justify-start items-center lg:mt-10">
        <div className="w-[350px] h-[374px] lg:w-[634px] lg:h-[643px] lg:ml-[50px] rounded-[24px] overflow-hidden">
          <img
            src={teamImage}
            alt="teamImage2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" lg:ml-[35px] mb-[50px] lg:mb-[320px] mt-[40px] lg:mt-6 w-[350px] lg:w-[654px] lg:h-[309px]">
          <p className="font-grava font-medium text-[56px] lg:text-[80px] leading-[21px] tracking-[1.4%] text-[#002244] ">
            “O
            <span className="font-grava font-light text-[18px] lg:text-[24px] text-[#334E69]">
              ver the years, we have established ourselves as a reputable name
              in the finance industry, supporting individuals, small and
              medium-sized businesses, corporations, and private clients around
              the country. We are committed to innovation and embrace technology
              to deliver seamless, customer-centered banking experiences.
            </span>
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between pb-4">
        <div className="lg:absolute right-0 top-[1800px] lg:z-10">
          <img
            src={yellowImage}
            alt="BusinessMan"
            className="w-[381px] h-[421px] lg:w-auto lg:h-auto lg:scale-x-100 scale-x-[-1]"
          />
        </div>
        <div className="flex justify-center">
          <div className="mt-[40px] ml-[15px] mr-[15px] lg:mt-20 w-[350px] lg:w-[654px] lg:ml-[120px] lg:mr-[60]">
            <h1 className="font-grava font-semibold text-[24px] lg:text-[40px] leading-[30px] lg:leading-[60px] tracking-[1.4%] lg:tracking-[0.2%] mb-8 text-[#002244] ">
              Message from the Group CEO
            </h1>
            <p className="font-grava font-light text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[45px] lg:tracking-[1.4%] text-[#334E69] mb-6 ">
              Our primary business strategy is to continue to focus on the
              customer – the undisputed employer.
            </p>
            <p className="font-grava font-light text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[45px] lg:tracking-[1.4%] text-[#334E69] mb-6 ">
              To achieve the above, our esteemed customers and the dedicated
              workforce are very critical to us even with the best of processes
              and technology. We are committed to ensuring a positive experience
              for our customers across all our touch points. We will
              continuously strive to simplify and streamline our process and
              ensure systems stability and reliable IT architecture to support
              our operations. We will proactively interrogate our systems,
              services and resources in order to constantly surpass the
              expectations of our customers.
            </p>

            <p className="font-grava font-light text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[45px] lg:tracking-[1.4%] text-[#334E69] ">
              Everything we do, we will do it well – Execution!
            </p>

            <div className="w-[350px] h-[82px] rounded-tr-[16px] mt-4 rounded-bl-[16px] bg-[#FFEFC0] flex flex-col items-center justify-center">
              <h2 className="font-grava font-semibold text-[18px] leading-[27px] tracking-[0.2%] lg:text-[24px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244]">
                Aminatu Dahiru Chiroma
              </h2>
              <p className="font-grava font-light text-[12px] leading-[18px] tracking-[0.2%] lg:text-[16px] lg:leading-[30px] lg:tracking-[1.4%] text-[#002244]">
                Non-Executive Director
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:m-[59.66px] mt-[30px]  mb-[50px]  w-auto">
        <div className="w-[100%] pl-[35px] lg:pl-0 ">
          <h1 className="font-grava font-semibold text-[24px] lg:text-[48px] leading-[30px] lg:leading-[60px] tracking-[1.4%] lg:tracking-[0.2%] lg:mb-11 mb-7 text-[#002244] w-[100%]">
            Our Core Values
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-[21px]">
          <div className=" w-[350px] h-[379px] lg:w-[458px] lg:h-[626px] rounded-[24px] overflow-hidden relative">
            <img
              src={cardimg}
              alt="cardimg"
              className="object-cover w-full h-full"
            />

            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute top-[280.87px] left-[18.31px] lg:top-[502px] lg:z-10">
              <h2 className="font-grava font-[500] text-[20px] lg:text-[25.57px] leading-[25px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                Integrity
              </h2>
              <p className="font-grava font-[300] text-[16px] lg:text-[19.18px] leading-[24px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                Upholding the highest ethical standards in all our services.
              </p>
            </div>
          </div>

          <div>
            <div className=" w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative  mb-[21px]">
              <div className="flex">
                <img
                  src={card2img1}
                  alt="card2img1"
                  className="w-[91.04px] h-[91.04px] lg:w-[123.54px] lg:h-[123.54px] absolute top-[28px] left-[20px] lg:top-[20.24px] lg:left-[18.11px]"
                />

                <img
                  src={card2img2}
                  alt="card2img2"
                  className="w-[75.34px] h-[75.34px] lg:w-[102.2px] lg:h-[102.2px] absolute top-[36px] left-[136.94px] lg:top-[29px] lg:left-[177px]"
                />
                <img
                  src={card2img3}
                  alt="card2img3"
                  className="w-[91.04px] h-[91.04px] lg:w-[123.59px] lg:h-[123.59px] absolute top-[28px] left-[238.96px] lg:top-[18.11px] lg:left-[315.36px]"
                />
              </div>
              <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#002244] ">
                  Customer-Centricity
                </h2>
                <p className="font-grava font-[300] text-[16px] leading-[24px] lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#002244]">
                  Prioritizing our clients’ needs with <br />
                  personalized solutions for each user type.
                </p>
              </div>
            </div>

            <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
              <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card2img4}
                  alt="card2Img4"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                <h2 className="font-grava font-[500] text-[20px] leading-[25px]  lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                  Inclusivity
                </h2>
                <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Ensuring everyone has access to financial <br />
                  tools, regardless of their background.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative mb-[21px] overflow-hidden">
              <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card3img1}
                  alt="card3img1"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                  Innovation
                </h2>
                <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Leveraging technology to redefine modern banking.
                </p>
              </div>
            </div>

            <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] bg-[#fffaeb] rounded-[24px] relative overflow-hidden">
              <div className="w-[350px] h-[269px] lg:w-[456.89px] lg:h-[302.46px] overflow-hidden rounded-[24px]">
                <img
                  src={card3img2}
                  alt="card2Img4"
                  className="object-cover w-full h-full -translate-y-[0px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-[160px] left-[20px] lg:top-[178.99px] lg:left-[21.31px]">
                <h2 className="font-grava font-[500] text-[20px] leading-[25px] lg:text-[25.57px] lg:leading-[30px] tracking-[1.4%] pb-[10px] text-[#FFFFFF]">
                  Sustainability
                </h2>
                <p className="font-grava font-[300] text-[16px] leading-[24px]  lg:text-[19.18px] lg:leading-[27px] tracking-[0.2%] text-[#FFFFFF]">
                  Committed to supporting environmentally and socially
                  responsible practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vission Section */}

      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-[#002244] w-[auto] h-[190px] lg:w-[767.088px] lg:h-[405.9174px] flex items-center justify-center">
            <div className="w-[350px] lg:w-[516.67px] lg:h-[115.05px]">
              <h1 className="font-grava font-[600] text-[24px] leading-[30px] lg:text-[42.62px] lg:leading-[53.27px] tracking-[1.4%] text-[#FFFFFF] text-center pb-2">
                Mission
              </h1>
              <p className="font-grava font-[300] text-[14px] leading-[20px] lg:text-[19.18px] lg:leading-[28.77px] tracking-[0.2%] text-[#FFFFFF] text-center">
                To improve the lives of Nigerians, particularly the youth, by
                offering innovative, easily accessible, and secure financial
                services that promote economic growth and personal success.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#FFCC33] w-[auto] h-[190px] lg:w-[769.088px] lg:h-[405.9174px] flex items-center justify-center">
              <div className="w-[350px] lg:w-[516.67px] lg:h-[115.05px]">
                <h1 className="font-grava font-[600] text-[24px] leading-[30px] lg:text-[42.62px] lg:leading-[53.27px]  tracking-[1.4%] text-[#002244] text-center pb-2">
                  Vision
                </h1>
                <p className="font-grava font-[300] text-[14px] leading-[20px] lg:text-[19.18px] lg:leading-[28.77px]  tracking-[0.2%] text-[#002244] text-center">
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
            className=" w-[100%] h-[260px] lg:w-[100%] lg:h-[745.78px] object-cover filter grayscale"
          />
        </div>
      </div>

      {/* New text Section */}
      <div className="flex mt-[40px] mb-[60px] lg:mt-[70px]  lg:mb-[100px] ml-[30px] mr-[30px] w-[100%x] justify-center">
        <div className="w-[654px] mt-[15px] mr-[20px]">
          <h1 className="font-grava  font-[500] text-[24px] leading-[30px] tracking-[1.4%] lg:text-[40px] lg:leading-[53.27px] lg:tracking-[0.2%] text-[#002244] pb-[24px]">
            Experience modern banking with Tatum Bank. Secure, fast, and
            customer-focused services to help you save, borrow, and grow your
            wealth.
          </h1>
          <p className="font-grava font-[300] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28.77px] tracking-[0.2%] text-[#002244]">
            Empowering Nigerians with innovative, secure, and inclusive banking
            solutions. Open your account today and take control of your
            financial future! Secure your financial future with Tatum Bank.
            Offering affordable loans, SME tools, and cutting-edge digital
            banking for every Nigerian.
          </p>
        </div>

        <div className=" hidden lg:block">
          <div className="relative w-[655px] h-[449px] ml-[15px] ">
            <div className="absolute top-[21px] left-[131.03px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                Gen Z-Focused Solutions
              </h3>
            </div>
            <div className="absolute top-[0px] left-[355px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px]  leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                Cutting-Edge Digital Banking
              </h3>
            </div>
            <div className="absolute top-[216px] left-[0px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                Accessible and Inclusive
              </h3>
            </div>
            <div className="absolute top-[239px] left-[222px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                Financial Literacy Advocacy
              </h3>
            </div>
            <div className="absolute top-[212px] left-[445px] w-[218px] h-[218px] flex items-center justify-center bg-[#FFFAEB] rounded-[100%]">
              <h3 className="font-grava font-[500] text-[19.18px] leading-[28.77px] tracking-[0.2%] text-[#E8BA2E] text-center w-[181px]">
                Exceptional Support
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}

      <div
        className="bg-[#F9FAFB] flex flex-col py-[80px] gap-[32px] items-center px-5 lg:px-[88px]"
        data-aos="fade-up">
        <p className="font-medium text-[24px] lg:text-[48px] font-grava w-[300px] lg:w-full text-center text-[#002244]">
          Find what you need instantly.
        </p>
        <div className="flex w-full overflow-x-auto space-x-5 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* <div className='flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] h-[356px] rounded-[24px] gap-[40px] w-[80%] sm:w-[70%] md:w-auto'>
                    <img src={Card} alt='Card' className='w-[43px] h-[35px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-medium font-grava text-[002244]'>Debit/Credit Cards</p>
                        <p className='text-base font-grava font-[350] text-[#002244]'>
                            Enjoy a card that never flops. Our Debit and credit cards are reliable and secure.
                        </p>
                    </div>
                    <button
                        className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#fff] w-[274px] lg:w-[366px] absolute bottom-5 mx-auto h-[54px] border border-[#002244] hover:border-[#FFCC33] rounded-tl-lg rounded-br-lg gap-2 group hover:bg-[#FFCC33] flex items-center justify-center'
                        type='button'
                    >
                        <p className='font-medium text-base font-grava text-[#002244]'>
                            Learn more
                        </p>
                    </button>
                </div> */}
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto ml-[20px] ">
            <img src={cardIcon} alt="Card" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Debit/Credit Cards
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Enjoy a card that never flops. Our Debit and credit cards are
                reliable and secure.
              </p>
            </div>
            <button
              className="absolute  bottom-5 w-[85%] lg:w-[325px]  h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Learn more
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto ">
            <img src={ATMicon} alt="ATM" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                ATM Branch Locator
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                Simply enter your location and find our closest branch on the
                map.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[85%] lg:w-[325px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Check the nearest ATM branch
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col p-[26px] bg-[#fff] h-[400px] lg:h-[356px] relative rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img
              src={OnlineBankingIcon}
              alt="Online"
              className="w-[43px] h-[35px]"
            />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Online Banking
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                Manage your accounts, pay bills, transfer funds, and track
                transactions anytime, anywhere. Our user-friendly mobile app
                serves you no matter where life takes you.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[85%] lg:w-[325px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Download our mobile app
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={USSDicon} alt="USSD" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                USSD Banking
              </p>
              <p className="text-base font-[350] font-grava text-[#002244]">
                No internet? No problem. Access your account, check balances,
                and perform essential transactions using our simple *911#. It is
                quick, secure, and reliable.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[85%] lg:w-[325px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Dial *911#
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img
              src={calculatorIcon}
              alt="Loan"
              className="w-[43px] h-[35px]"
            />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                Loan calculator
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Easily calculate loan eligibility according to your current
                salary.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[85%] lg:w-[325px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Try our loan calculator
              </p>
            </button>
          </div>
          <div className="flex-shrink-0 flex flex-col relative p-[26px] bg-[#fff] lg:h-[356px] rounded-[24px] gap-[40px] w-[100%] sm:w-[80%] md:w-auto">
            <img src={FXicon} alt="FX" className="w-[43px] h-[35px]" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium font-grava text-[#002244]">
                FX Market Rate
              </p>
              <p className="text-base font-grava font-[350] text-[#002244]">
                Stay updated with real-time FX rates and make smarter, timely
                decisions in the global market.
              </p>
            </div>
            <button
              className="absolute bottom-5 w-[85%] lg:w-[325px] h-[54px] border border-[#002244] rounded-tl-lg rounded-br-lg flex items-center justify-center overflow-hidden group"
              type="button">
              <span
                className="absolute inset-0 bg-[#FFCC33] transition-all duration-300 ease-in-out scale-x-0 origin-left group-hover:scale-x-100"
                aria-hidden="true"></span>
              <p className="relative z-10 font-medium text-base font-grava text-[#002244]">
                Check our FX rates
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* test */}
    </div>
  );
};

export default About;
