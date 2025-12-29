import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import MarketingServicesPage from "./pages/MarketingServicesPage";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import CTA from "./components/CTA";
import NavSankalpBlog from "./components/NavSankalpBlog";
import TechnologiesPage from "./pages/TechnologiesPage";
import CareerPage from "./pages/CareersPage";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/marketing-services" element={<MarketingServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/navsankalp-blog" element={<NavSankalpBlog />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/career" element = {<CareerPage />} />
      </Routes>
      <CTA />
      <Footer />
    </>
  );
};

export default App;
