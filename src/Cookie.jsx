import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Optional, for easier cookie management

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = Cookies.get("cookieConsent") === "accepted";
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set a cookie to remember the user's choice
    Cookies.set("cookieConsent", "accepted", { expires: 30 }); // Expires in 30 days
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <p>
        We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
      </p>
      <button
        onClick={handleAcceptCookies}
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieConsent;