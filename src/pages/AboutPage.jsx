import { FaCheck, FaRocket, FaLightbulb, FaUsers, FaBuilding } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-50">

      {/* ABOUT US SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-30">
        <div className="bg-white rounded-2xl p-10 ">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                About <span className="text-orange-400">RVK Software</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a technology-driven software company focused on building
                scalable, secure, and high-performance digital solutions for
                modern businesses. Our team thrives on innovation, efficiency,
                and client-centric development practices.
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
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
                Learn More
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* IMAGE */}
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

      {/* OUR VISION SECTION */}
      <div className="bg-black py-14 px-6">
        <div className="mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Vision
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            We aim to empower businesses, creators, and talent through our innovative solutions.
            Our upcoming application, <span className="text-orange-400 font-semibold">Navsankalp</span>, will transform the way MSMEs and professionals operate in the digital space.
          </p>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaRocket className="text-orange-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">MSMEs</h3>
              <p className="text-gray-700 text-sm">
                Smart tools to scale operations, boost visibility, and drive sustainable growth.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaLightbulb className="text-orange-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Influencers</h3>
              <p className="text-gray-700 text-sm">
                End-to-end solutions to monetize content and manage brand collaborations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaUsers className="text-orange-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Job Seekers</h3>
              <p className="text-gray-700 text-sm">
                Direct access to verified opportunities with growth-focused companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaBuilding className="text-orange-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Owners</h3>
              <p className="text-gray-700 text-sm">
                Simplified property listing, management, and customer engagement systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE RVK SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-orange-400">RVK Software</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            We combine expertise, innovation, and a client-first approach to deliver digital solutions that truly make an impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Proven track record of successful projects",
            "Experienced and skilled development team",
            "Focus on scalable and secure solutions",
            "Client-centric approach with transparent communication",
            "Innovative solutions tailored to your business needs",
            "Ethical and quality-driven project delivery",
          ].map((item, index) => (
            <div key={index} className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <FaCheck className="text-orange-400 text-lg" />
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
   

    </section>
  );
};

export default AboutUs;
