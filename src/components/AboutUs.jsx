import { FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">

            {/* CONTENT SECTION */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                Welcome to <span className="text-orange-400">RVK Software</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We are a technology-driven software company focused on building
                scalable, secure, and high-performance digital solutions for
                modern businesses.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 mt-6">
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
                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* IMAGE SECTION */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/Slide1.jpg"
                  alt="RVK Software Office"
                  className="w-full max-w-sm h-84 object-cover rounded-xl shadow-md"
                />

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg px-4 py-2 text-sm text-gray-700">
                  Jaipur, Rajasthan • India
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
