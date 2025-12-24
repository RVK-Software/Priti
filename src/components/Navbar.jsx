import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* TOP BAR – Desktop Only */}
      <div className="fixed top-0 w-full bg-black text-white text-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span>+91 90240 9959</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed w-full bg-gray-200 text-black shadow-md z-40 top-9 rounded-b-4xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-7">
            <img
              src="/RVK-LOGO1.png"
              alt="RVK Software Logo"
              border="1px solid black"
              background="white"
              className="w-17 h-17 object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-8 font-medium text-black">
            {navLinks.map((item) =>
              item.name === "Services" ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 hover:text-orange-400 transition"
                  >
                    Services
                    <FaChevronDown className="text-sm mt-0.5" />
                  </Link>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full mt-3 w-56 bg-black border text-white border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link
                      to="/services/web-development"
                      className="block px-4 py-3 hover:bg-gray-900 hover:text-orange-400 transition"
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/services/ui-ux"
                      className="block px-4 py-3 hover:bg-gray-900 hover:text-orange-400 transition"
                    >
                      UI / UX Design
                    </Link>
                    <Link
                      to="/services/cloud"
                      className="block px-4 py-3 hover:bg-gray-900 hover:text-orange-400 transition"
                    >
                      Cloud & DevOps
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-orange-400 transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-2xl text-gray-800"
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-[#06284a] text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5  ">
          
          <div className="text-xl font-bold">
            RVK <span className="text-yellow-400">Software</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="mt-8 space-y-6 px-6 text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block shadow-[0_12px_30px_-12px_rgba(0,0,0,0.7)] border-orange-400 pb-3 hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
