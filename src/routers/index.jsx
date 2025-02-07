import React from "react";
import { Route, Routes } from "react-router-dom";
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
import Wealth from "../pages/Private/components/Wealth";
import Estate from "../pages/Private/components/Estate";
import Investment from "../pages/Private/components/Investment";
import Loan from "../pages/Private/components/Loan";
import Custom from "../pages/Private/components/Custom";
import Sitemap from "../pages/Sitemap";
import AccountPersonal from "../pages/Personal/component/AccountPersonal";
import AccountBusiness from "../pages/SME/component/AccountBusiness";
import AccountCorporate from "../pages/Corporate/component/AccountCorporate";
import AccountPrivacy from "../pages/Private/components/AccountPrivacy";
import Institutional from "../pages/Institutional";
import AccountInstitutional from "../pages/Institutional/component/AccountInstitutional";
import Digital from "../pages/Digital";

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
        <Route path="/business/account" element={<AccountBusiness />} />
        <Route path="personal" element={<Personal />} />
        <Route path="personal/account" element={<AccountPersonal />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="corporate/account" element={<AccountCorporate />} />
        <Route path="help" element={<Help />} />
        <Route path="institution" element={<Institutional />} />
        <Route path="/institution/account" element={<AccountInstitutional />} />
        <Route path="digital" element={<Digital />} />
        <Route path="private" element={<Private />} />
        <Route path="/private/account" element={<AccountPrivacy />} />
        <Route path="private/wealth-management" element={<Wealth />} />
        <Route path="private/investement-advisory" element={<Investment />} />
        <Route path="private/estate-and-trust-planning" element={<Estate />} />
        <Route path="private/personal-loans-and-credit" element={<Loan />} />
        <Route path="private/custom-financial-solutions" element={<Custom />} />
        <Route path="resources" element={<Resources />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="sitemap" element={<Sitemap />} />
      </Route>
    </Routes>
  );
}
