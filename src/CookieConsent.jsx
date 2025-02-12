import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get("cookieConsent");
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 30 });
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 30 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-5  left-5 right-5 md:left-auto md:right-8 md:w-[429px]  bg-[#FFFAEB] py-5 px-4 rounded-[16px] shadow-lg">
      <h2 className="text-[14px] lg:text-[16px] font-grava font-semibold leading-6 tracking-[0.2%] text-[#000000]">Tatum Uses Cookies</h2>
      <p className="text-[#002244] font-grava font-[350] leading-5 tracking-[0.2%] text-[12px] lg:text-[14px] mt-3">
        We use essential cookies to make our site work. With your consent, we
        may also use non-essential cookies to improve user experience and
        analyze website traffic. By clicking ‘Accept’, you agree to our
        website’s cookie use. Learn more in our <span className="underline">Privacy Policy.</span>
      </p>
      <div className="flex gap-[14px] mt-6">
        <button
          onClick={handleRejectCookies}
          className="bg-[#FFEFC0] text-[#334E69] text-center text-[12px] lm:text-[14px] font-medium font-grava whitespace-nowrap rounded-tl-[8.53px] rounded-br-[8.53px] w-6/12 h-[49.99px] lm:w-[191px] lm:h-[51.99px]"
        >
          Reject non-essentials
        </button>
        <button
          onClick={handleAcceptCookies}
          className="bg-[#002244] text-center group hover:bg-[#FFCC33] hover:border-[1.5px] hover:border-[#002244] rounded-tl-[8.53px] rounded-br-[8.53px] w-6/12 h-[49.99px] lm:w-[191px] lm:h-[51.99px]"
        >
          <p className="font-grava text-[#FFCC33] font-medium text-[12px] lm:text-[14px] group-hover:text-[#002244]">
            Accept
          </p>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
