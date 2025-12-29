import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = ({ showButton = true }) => {
  return (
    <section className="bg-gray-50 py-6">
      <div className="mx-auto lg:px-12 px-2 py-2">
        <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center justify-around">
          
          {/* CONTENT SECTION */}
          <div className="space-y-10 px-4 sm:px-6  lg:px-0">
            <h2 className="text-[24px] text-start lg:text-5xl font-bold text-gray-800 leading-snug">
              Welcome to <span className="text-orange-400">RVK Software</span>
            </h2>

            <p className="text-gray-600 text-[18px] leading-relaxed">
             We are a technology-driven software company committed to innovation and excellence.  
Our focus is on building scalable, secure, and high-performance digital solutions that empower modern businesses.  
By leveraging cutting-edge technologies, we help companies optimize operations, enhance user experiences, and drive growth.  

            </p>

            <ul className="grid sm:grid-cols-2 text-[18px] gap-6 mt-6">
              {[
                "Industry-standard development practices",
                "Experienced engineering team",
                "Scalable and secure solutions",
                "Client-centric approach",
                "Quality-driven delivery",
                "Transparent and ethical processes",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-orange-400 mt-1 text-sm" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CONDITIONAL BUTTON */}
            {showButton && (
              <Link
                to="/about"
                className="inline-flex mt-5 items-center gap-2 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            )}
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/About-RVK.jpg"
              alt="RVK Software Office"
              className="w-full max-w-sm  object-cover rounded-xl shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
