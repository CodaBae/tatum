import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About";
import Teams from "../pages/About/components/Teams";
import TeamDetails from "../pages/About/components/TeamDetails";
import SME from "../pages/SME";
import Personal from "../pages/Personal";
import Corporate from "../pages/Corporate";
import Help from "../pages/Help";
import Private from "../pages/Private";
import Resources from "../pages/Resources";
import PrivacyPolicy from "../pages/Privacy";
import Terms from "../pages/Terms";

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/details" element={<TeamDetails />} />
          <Route path="/sme" element={<SME />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/help-and-support" element={<Help />} />
          <Route path="/private" element={<Private />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </div>
  );
}
