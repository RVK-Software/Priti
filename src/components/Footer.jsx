import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-black/70  via-orange-300 to-white text-black">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COMPANY INFO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/RVK-LOGO1.png"
                alt="Company Logo"
                className="w-34 h-21"
              />
            </div>

            <p className="text-[16px] text-black">
              The Heritage Smile of Rajasthan. Providing ethical,
              professional, and advanced IT solutions with compassion.
            </p>

            
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-sm text-black">
              <li>Web Development</li>
              <li>Web Designing</li>
              <li>Digital marketing</li>
              <li>Graphic Designing</li>
              <li>Business listing</li>
             
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-black">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-orange-400 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-white">
          ©{new Date().getFullYear()}{" "}
          Developed & Maintained by{" "}
          <span className="font-semibold text-orange-600">
            RVK Software
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
