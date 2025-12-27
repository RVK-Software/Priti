import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

/* SERVICES MENU (UX only, all redirect to /services) */
const servicesMenu = [
  { label: "Web Development" },
  { label: "App Development" },
  { label: "Cloud & DevOps" },
  { label: "Mobile App Development" },
  { label: "Custom Software Development" },
];

/* TECHNOLOGIES MENU */
const technologiesMenu = [
  { label: "HTML", path: "/technologies/html" },
  { label: "CSS", path: "/technologies/css" },
  { label: "JavaScript", path: "/technologies/javascript" },
  { label: "React JS", path: "/technologies/react-js" },
  { label: "React Native", path: "/technologies/react-native" },
  { label: "Node.js", path: "/technologies/aws" },
  { label: "AWS & Deployment", path: "/technologies/aws" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="sticky top-0 w-full bg-black text-white text-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span className="text-xs lg:text-sm">+91 90240 9959</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            <span className="text-xs lg:text-sm">Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed w-full bg-gray-200 shadow-md z-40 lg:top-11 top-8">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* LOGO */}
          <img
            src="/RVK-LOGO1.png"
            alt="RVK Software"
            className="h-12 object-contain"
          />

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-8 font-medium">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-400">
              About Us
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 hover:text-orange-400"
              >
                Marketing <FaChevronDown />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full mt-3 w-56 bg-black text-white rounded-md shadow-lg">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.label}
                      to="/services"
                      className="block px-4 py-2 text-sm hover:bg-gray-900 hover:text-orange-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* TECHNOLOGIES */}
            <div
              className="relative"
              onMouseEnter={() => setTechOpen(true)}
              onMouseLeave={() => setTechOpen(false)}
            >
              <Link
                to="/technologies"
                className="flex items-center gap-1 hover:text-orange-400"
              >
                Technologies <FaChevronDown />
              </Link>

              {techOpen && (
                <div className="absolute top-full mt-3 w-64 bg-black text-white rounded-md shadow-lg">
                  {technologiesMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-900 hover:text-orange-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/career" className="hover:text-orange-400">
              Careers
            </Link>

            <Link to="/contact" className="hover:text-orange-400">
              Contact Us
            </Link>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU (GLASSMORPHIC, PARTIAL HEIGHT) */}
      {menuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl z-50 lg:hidden">
          <ul className="px-6 py-6 space-y-6 text-base font-medium text-gray-900">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            {/* SERVICES */}
            <li>
              <div className="flex justify-between items-center">
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-400"
                >
                  Services
                </Link>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                >
                  <FaChevronDown
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <ul className="mt-3 space-y-3 text-sm pl-4 text-gray-700">
                  {servicesMenu.map((item) => (
                    <li key={item.label}>
                      <Link
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* TECHNOLOGIES */}
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => setMobileTechOpen(!mobileTechOpen)}
              >
                Technologies <FaChevronDown />
              </button>

              {mobileTechOpen && (
                <ul className="mt-3 space-y-3 text-sm pl-4 text-gray-700">
                  {technologiesMenu.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
