import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About/indexB";
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
import Wealth from "../pages/Private/components/Wealth";
import Estate from "../pages/Private/components/Estate";
import Investment from "../pages/Private/components/Investment";
import Loan from "../pages/Private/components/Loan";
import Custom from "../pages/Private/components/Custom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/teams" element={<Teams />} />
        <Route path="about/careers" element={<Careers />} />
        <Route path="about/team-details" element={<TeamDetails />} />
        <Route path="sme" element={<SME />} />
        <Route path="personal" element={<Personal />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="help" element={<Help />} />
        <Route path="private" element={<Private />} />
        <Route path="private/wealth-management" element={<Wealth />} />
        <Route path="private/investement-advisory" element={<Investment />} />
        <Route path="private/estate-and-trust-planning" element={<Estate />} />
        <Route path="private/personal-loans-and-credit" element={<Loan />} />
        <Route path="private/custom-financial-solutions" element={<Custom />} />
        <Route path="resources" element={<Resources />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}
