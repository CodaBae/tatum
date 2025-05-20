import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About/index";
import Teams from "../pages/About/components/Teams";
import Careers from "../pages/About/components/Careers";
import TeamDetails from "../pages/About/components/TeamDetails";
import SME from "../pages/SME";
import Personal from "../pages/Personal";
import Corporate from "../pages/Corporate";
import Help from "../pages/Help";
import Private from "../pages/Private";
import Resources from "../pages/Resources";
import PrivacyPolicy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Sitemap from "../pages/Sitemap";
import AccountPersonalCurrent from "../pages/Personal/component/AccountPersonalCurrent";
import AccountBusiness from "../pages/SME/component/AccountBusiness";
import AccountCorporate from "../pages/Corporate/component/AccountCorporate";
import AccountPrivacy from "../pages/Private/components/AccountPrivacy";
import Institutional from "../pages/Institutional";
import AccountInstitutional from "../pages/Institutional/component/AccountInstitutional";
import Digital from "../pages/Digital";
import Investors from "../pages/Investors";
import Contact from "../pages/Contact";
import InternetBanking from "../pages/Internet";
import CookiePolicy from "../pages/Cookies";
import MobileTerms from "../pages/MobileTerms";
import AccountPersonalSavings from "../pages/Personal/component/AccountPersonalSavings";
import AML from "../pages/AML";
// import CookiePolicy from "../pages/Cookies/Cook";

// Create NotFound (404) and Unauthorized (401) components
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <div className="p-6 max-w-md w-full bg-white rounded-xl shadow-lg">
        <div className="flex justify-center mb-4">
          <svg 
            className="w-24 h-24 text-[#002244]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <div className="text-7xl md:text-8xl font-bold text-blue-500 text-[#002244] font-grava">404</div>
        <h1 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 text-[#002244] font-grava">Page Not Found</h1>
        <p className="mt-2 text-gray-600 text-[#002244] font-grava">The page you are looking for doesn't exist or has been moved.</p>
        <a style={{background: "#ffcc33",
}} href="/" className="text-[#002244] font-grava mt-6 inline-block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm md:text-base font-semibold">
          Back to Home
        </a>
      </div>
    </div>
  );
};

const ForbiddenDirectoryBrowsing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <div className="p-6 max-w-md w-full bg-white rounded-xl shadow-lg">
        <div className="flex justify-center mb-4">
          <svg 
            className="w-24 h-24 text-[#002244]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <div className="text-7xl md:text-8xl font-bold text-blue-500 text-[#002244] font-grava">403.14</div>
        <h1 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 text-[#002244] font-grava">Directory Browsing Forbidden</h1>
        <p className="mt-2 text-gray-600 text-[#002244] font-grava">The web server is configured to not list the contents of this directory.</p>
        <a style={{background: "#ffcc33",
}} href="/" className="text-[#002244] font-grava mt-6 inline-block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm md:text-base font-semibold">
          Back to Home
        </a>
      </div>
    </div>
  );
};

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-6xl font-bold text-gray-300">401</div>
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">Unauthorized Access</h1>
      <p className="mt-2 text-gray-600">You don't have permission to access this page.</p>
      <a href="/" className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Back to Home
      </a>
    </div>
  );
};

// Custom auth check function - replace this with your actual auth logic
const isAuthenticated = () => {
  // This is a placeholder. In a real application, you would check if the user is logged in
  // For example: return localStorage.getItem('token') !== null;
  return false; // For demonstration, we'll default to not authenticated
};

// Wrapping protected routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to unauthorized page if not authenticated
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/teams" element={<Teams />} />
        <Route path="about/careers" element={<Careers />} />
        <Route path="about/team-details" element={<TeamDetails />} />
        <Route path="business" element={<SME />} />
        <Route path="/business/account" element={
            <AccountBusiness />
        } />
        <Route path="personal" element={<Personal />} />
        <Route path="personal/account/current" element={
            <AccountPersonalCurrent />
        } />
        <Route path="personal/account/savings" element={
            <AccountPersonalSavings />
        } />
        <Route path="corporate" element={<Corporate />} />
        <Route path="corporate/account" element={
            <AccountCorporate />
        } />
        <Route path="help" element={<Help />} />
        <Route path="institutional" element={<Institutional />} />
        <Route path="/institutional/account" element={
            <AccountInstitutional />
        } />
        <Route path="digital" element={<Digital />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/internet-banking" element={
            <InternetBanking />
        } />
        <Route path="private" element={<Private />} />
        <Route path="/private/account" element={
            <AccountPrivacy />
        } />
        <Route path="resources" element={<Resources />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="/mobile/terms" element={<MobileTerms />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="/aml" element={<AML />} />

        
        {/* Unauthorized route */}
        <Route path="unauthorized" element={<Unauthorized />} />


        <Route path="forbidden-directory" element={<ForbiddenDirectoryBrowsing />} />

        
        {/* 404 route - this should be the last route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}