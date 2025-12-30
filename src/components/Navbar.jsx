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
  { label: "Social Media Page Management", path: "/marketing-services" },
  { label: "Paid Ads", path: "/marketing-services" },
  { label: "Influencer Marketing", path: "/marketing-services" },
  { label: "Graphic Designing", path: "/marketing-services" },
  { label: "Search Engine Optimization", path: "/marketing-services" },
  { label: "Podcast Services", path: "/marketing-services" },
];

/* TECHNOLOGIES MENU */
const technologiesMenu = [
  { label: "HTML", path: "/technologies" },
  { label: "CSS", path: "/technologies" },
  { label: "JavaScript", path: "/technologies" },
  { label: "React JS", path: "/technologies" },
  { label: "React Native", path: "/technologies" },
  { label: "Node.js", path: "/technologies" },
  { label: "AWS & Deployment", path: "/technologies" },
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
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span className="text-[14px] lg:text-[16px]">+91 90240 9959</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            <span className="text-[14px] lg:text-[16px]">Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="fixed w-full bg-gray-200 shadow-md z-40 lg:top-9 top-9">
        <div className="max-w-7xl mx-auto px-3 h-17 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" aria-label="Go to Home">
            <img
              src="/RVK-LOGO1.png"
              alt="RVK Software"
              className="h-17 object-contain cursor-pointer"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-8 font-medium">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-400">
              About Us
            </Link>

            {/* Marketing Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/marketing-services"
                className="flex items-center gap-1 hover:text-orange-400 cursor-pointer"
              >
                Marketing <FaChevronDown />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full w-56 bg-black text-white rounded-md shadow-lg">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-4 py-3 text-sm hover:bg-gray-900 hover:text-orange-400"
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
                className="flex items-center gap-1 hover:text-orange-400 cursor-pointer"
              >
                Technologies <FaChevronDown />
              </Link>

              {techOpen && (
                <div className="absolute top-full w-64 bg-black text-white rounded-md shadow-lg">
                  {technologiesMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-sm hover:bg-gray-900 hover:text-orange-400"
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
     {/* MOBILE MENU (GLASSMORPHIC, PARTIAL HEIGHT) */}
{menuOpen && (
  <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl z-50 lg:hidden">
    <ul className="px-6 py-6 space-y-6 text-base font-medium text-gray-900">
      {/* Home */}
      <li>
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="block w-full py-2 px-3 hover:text-orange-400"
        >
          Home
        </Link>
      </li>

      {/* About */}
      <li>
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="block w-full py-2 px-3 hover:text-orange-400"
        >
          About Us
        </Link>
      </li>

      {/* Marketing SERVICES */}
      <li>
        <div className="flex justify-between items-center">
          <Link
            to="/marketing-services"
            onClick={() => setMenuOpen(false)}
            className="flex-1 block py-2 px-3 hover:text-orange-400"
          >
            Marketing
          </Link>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileServicesOpen(!mobileServicesOpen);
            }}
            className="p-2"
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
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-1 px-2 hover:text-orange-400"
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
        <div className="flex justify-between items-center">
          <Link
            to="/technologies"
            onClick={() => setMobileTechOpen(!mobileTechOpen)}
            className="flex-1 block py-2 px-3 hover:text-orange-400"
          >
            Technologies
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileTechOpen(!mobileTechOpen);
            }}
            className="p-2"
          >
            <FaChevronDown
              className={`transition-transform ${
                mobileTechOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {mobileTechOpen && (
          <ul className="mt-3 space-y-3 text-sm pl-4 text-gray-700">
            {technologiesMenu.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-1 px-2 hover:text-orange-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {/* Career */}
      <li>
        <Link
          to="/career"
          onClick={() => setMenuOpen(false)}
          className="block w-full py-2 px-3 hover:text-orange-400"
        >
          Career
        </Link>
      </li>

      {/* Contact */}
      <li>
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="block w-full py-2 px-3 hover:text-orange-400"
        >
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
