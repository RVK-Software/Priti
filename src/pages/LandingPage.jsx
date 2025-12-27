import Home from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustWebDev from "../components/CustWebDev";
import TechStack from "../components/TechStack";
import Partners from "../components/Partners";
import Navsankalp from "../components/NavSankalp";
import Industries from "../components/Industries";

const LandingPage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Navsankalp />
      <Services />
      <CustWebDev />
      <TechStack />
      <Partners />
      <Industries />
      
    </>
  );
};

export default LandingPage;
