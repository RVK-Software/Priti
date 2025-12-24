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
    <footer className="bg-gradient-to-br from-black/40 via-black/90 to-orange-400 text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COMPANY INFO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/RVK-LOGO1.png"
                alt="Company Logo"
                className="w-13 h-10"
              />
              <h2 className="text-xl font-bold">
                RVK Software 
              </h2>
            </div>

            <p className="text-sm text-white/80">
              The Heritage Smile of Rajasthan. Providing ethical,
              professional, and advanced IT solutions with compassion.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                Jaipur, Rajasthan, India
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt />
                +91 86973 39116
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-sm text-white/80">
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

            <ul className="space-y-2 text-sm text-white/80">
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Olivegreen Dental Clinic.  
          Developed & Maintained by{" "}
          <span className="font-semibold text-yellow-400">
            RVK Software
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
