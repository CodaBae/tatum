import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useNavigate } from 'react-router-dom'


const MobileNavBar = ({ handleClose }) => {
    const [openAboutDropdown, setOpenAboutDropdown] = useState(false);
    const [openPersonalDropdown, setOpenPersonalDropdown] = useState(false);
    const [openSmeDropdown, setOpenSmeDropdown] = useState(false);
    const [openCorporateDropdown, setOpenCorporateDropdown] = useState(false);
    const [openPrivateDropdown, setOpenPrivateDropdown] = useState(false);
    const [openResourcesDropdown, setOpenResourcesDropdown] = useState(false);
    const [openInstitutionalDropdown, setOpenInstitutionalDropdown] = useState(false);

    
    const navigate = useNavigate()

    const handleAbout = () => {
      setOpenAboutDropdown(!openAboutDropdown)
    }

    const handlePersonal = () => {
      setOpenPersonalDropdown(!openPersonalDropdown)
    }

    const handleSme = () => {
      setOpenSmeDropdown(!openSmeDropdown)
    }

    const handleCorporate = () => {
      setOpenCorporateDropdown(!openCorporateDropdown)
    }

    const handlePrivate = () => {
      setOpenPrivateDropdown(!openPrivateDropdown)
    }

    const handleInstitutional= () => {
      setOpenInstitutionalDropdown(!openInstitutionalDropdown)
    }



    

    const handleResources = () => {
      setOpenResourcesDropdown(!openResourcesDropdown)
    }



  return (
    <div 
      className="fixed top-14 bg-[#FDF7E7] w-[100%] left-0 h-screen pb-10 animate__animated  animate__bounceInDown animate__slow overflow-y-auto" 
      style={{zIndex: 9999}}
    >
       <div className="px-5 py-[32px] flex flex-col gap-4 gap-[36px]">
          <p className="font-medium font-grava text-[#334E69] text-base capitalize cursor-pointer" onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}}>Home</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p 
                className="font-medium font-grava text-[#334E69] text-base capitalize"
                onClick={() => {
                  navigate("about"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                About Us
              </p>
              {openAboutDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'onClick={handleAbout} /> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handleAbout} />}
            </div>
              {
                openAboutDropdown && (
                  <div className='flex flex-col gap-4 '>
                    <div
                       onClick={() => {
                        navigate("about", {
                          state: { section: "mission-and-vision" },
                        });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Our Story</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Who we are and what we do.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/about", {
                          state: { section: "mission-and-vision" },
                        })
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Mission and Vision</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Innovation driving our purpose.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/about", {
                          state: { section: "services" },
                        })
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Services</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Innovative services designed for you.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/about", {
                          state: {
                            section: "teams"
                          }
                        })
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Our Team</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Meet the people behind our success.
                      </p>
                    </div>
                  </div>
                )
              }
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p 
                className="font-medium font-grava text-[#334E69] text-base capitalize"
                onClick={() => {
                  navigate("/personal"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                Personal
              </p>
              {openPersonalDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]' onClick={handlePersonal}/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handlePersonal}/>}
            </div>
            {
              openPersonalDropdown && (
                <div className='flex flex-col gap-4'>
                    <div
                       onClick={() => {
                        navigate("/personal", { state: { section: "savings" } });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Savings Accounts</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Flexible options to grow your savings.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/personal", { state: { section: "current" } });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Current Accounts</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Easy solutions for daily banking.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/personal", { state: { section: "cards" } });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Cards ( Debit, Credit, Virtual)</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Seamless payments anywhere, anytime.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/personal", { state: { section: "loans" } });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Loans and Mortgages</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Tailored financing to achieve your goals.
                      </p>
                    </div>
                    <div
                       onClick={() => {
                        navigate("/personal", { state: { section: "fixed" } });
                        // window.scrollTo(0,0); 
                        handleClose()
                      }}
                      className="flex flex-col gap-1"
                    >
                      <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Fixed Deposit</p>
                      <p className="text-[#546B82] text-[10px] font-grava">
                        Safe, Secure and steadily rewarding
                      </p>
                    </div>
                </div>
              )
            }
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between" >
              <p 
                className="font-medium font-grava text-[#334E69] text-base capitalize"
                onClick={() => {
                  navigate("/business"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                Business Banking
              </p>
              {openSmeDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]' onClick={handleSme}/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handleSme} />}
            </div>
            {
              openSmeDropdown && (
                <div className='flex flex-col gap-4'>
                  <div
                      onClick={() => {
                        navigate("/business", { state: { section: "account" } })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Business Accounts</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Simplify your business finances.
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/business", { state: { section: "payment" } })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Payment solutions</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Payment processing services
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/business", { state: { section: "loans" } })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Loans and Credit Lines</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Flexible funding for growth
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/business", { state: { section: "advisory" } })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Financial Planning and Advisory</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Expert guidance for smart decisions
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/business", { state: { section: "faq" } })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Faq</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Quick answers to your banking questions.
                    </p>
                  </div>

                </div>
              )
            }
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between" >
              <p 
                className="font-medium font-grava text-[#334E69] tracking-wide text-base capitalize"
                onClick={() => {
                  navigate("/corporate"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                Corporate
              </p>
              {openCorporateDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]' onClick={handleCorporate}/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handleCorporate}/>}
            </div>
            {
              openCorporateDropdown && (
                <div className='flex flex-col gap-4'>
                  <div
                      onClick={() => {
                        navigate("/corporate", {
                          state: { section: "treasury" },
                        });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Treasury Management</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Maximize cash flow and returns.
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/corporate", { state: { section: "trade" } });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Trade Finance</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Simplify global trade transactions
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/corporate", {
                          state: { section: "investment" },
                        });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Investment Banking</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Strategic insights for growth
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/corporate", { state: { section: "lending" } });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Corporate Lending and Leasing</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Flexible financing for enterprises
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/corporate", { state: { section: "faq" } });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Faq</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Quick answers to your banking questions.
                    </p>
                  </div>
                </div>
              )
            }
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p 
                className="font-medium font-grava text-[#334E69] text-base capitalize"
                onClick={() => {
                  navigate("/private"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                Private
              </p>
              {openPrivateDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]' onClick={handlePrivate}/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handlePrivate}/>}
            </div>
            {
              openPrivateDropdown && (
                <div className='flex flex-col gap-4 '>
                  <div
                      onClick={() => {
                        navigate("/private", { state: { section: "wealth" } });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Wealth Management</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Solution to grow and protect your wealth
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/private", {
                          state: { section: "invest" },
                        });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Investment Advisory</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Smarter investment decisions
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/private", {
                          state: { section: "card" },
                        })
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Tatum Black Card</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      The Ultimate Symbol of Prestige
                    </p>
                  </div>
                  <div
                      onClick={() => {
                        navigate("/private", { state: { section: "faq" } });
                      // window.scrollTo(0,0); 
                      handleClose()
                    }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-grava tracking-wide font-[350] text-[#334E69] text-base capitalize">Faq</p>
                    <p className="text-[#546B82] text-[10px] font-grava">
                      Quick answers to your banking questions.
                    </p>
                  </div>
                </div>
              )
            }
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p 
                className="font-medium font-grava text-[#334E69] text-base capitalize"
                onClick={() => {
                  navigate("/institutional"),
                  window.scrollTo(0, 0),
                  handleClose()
                }}
              >
                Institutional
              </p>
              {/* {openInstitutionalDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]' onClick={handleInstitutional}/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' onClick={handleInstitutional}/>} */}
            </div>
            {/* {
              openInstitutionalDropdown && (
                <div className='flex flex-col gap-4 gap-6 '>
                  <p onClick={() => {navigate("/Institutional"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Public Sector</p>
                  <p onClick={() => {navigate("/Institutional"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Non-Government Institution Banking</p>
                  <p onClick={() => {navigate("/Institutional"); window.scrollTo(0,0); handleClose()}} className="font-grava text-[#334E69] tracking-wide text-base uppercase">Why Choose Us</p>
                </div>
              )
            } */}
          </div>

          {/* <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between" onClick={handleResources}>
              <p className="font-medium font-grava text-[#334E69] text-base uppercase">Resources</p>
              {openResourcesDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openResourcesDropdown && (
                <div className='flex flex-col gap-4 gap-6 mt-3'>
                  <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">Blog</p>
                  <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">Press Release</p>
                  <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">Media Gallery</p>
                  <p onClick={() => {navigate("/resources"); window.scrollTo(0,0); handleClose()}} className="font-grava tracking-wide font-[350] text-[#334E69] text-base uppercase">Branch & ATM Locator</p>
                </div>
              )
            }
          </div> */}
          <p onClick={() => {navigate("/digital"); window.scrollTo(0,0); handleClose()}}  className="font-medium font-grava tracking-wide text-[#334E69] text-base capitalize">Digital Banking</p>

          <p onClick={() => {navigate("/help"); window.scrollTo(0,0); handleClose()}}  className="font-medium font-grava tracking-wide text-[#334E69] text-base capitalize">Help & Support</p>
          <p onClick={() => {navigate("/contact"); window.scrollTo(0,0); handleClose()}}  className="font-medium font-grava tracking-wide text-[#334E69] text-base capitalize">Contact us</p>
       </div>
    </div>
  )
}

export default MobileNavBar