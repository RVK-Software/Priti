import { useState } from "react";
import {
  FaCode,
  FaCloud,
  FaLayerGroup,
  FaPaintBrush,
  FaTools,
  FaServer,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    title: "Social Media Page Management",
    shortDesc:
      "Scalable, secure, and high-performance digital brand handling.",
    fullDesc:
      "We manage your social media presence end-to-end, including content planning, posting schedules, engagement strategies, analytics tracking, and performance optimization to build a strong digital identity. We manage your social media presence end-to-end, including content planning, posting schedules, engagement strategies, analytics tracking, and performance optimization to build a strong digital identityWe manage your social media presence end-to-end, including content planning, posting schedules, engagement strategies, analytics tracking, and performance optimization to build a strong digital identity",
    icon: <FaCode />,
  },
  {
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    fullDesc:
      "We create and manage paid ad campaigns across platforms like Google, Meta, and LinkedIn with precise targeting, A/B testing, budget optimization, and detailed reporting to ensure measurable growth.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    fullDesc:
      "Our influencer marketing solutions connect your brand with the right creators, manage campaigns, track performance, and ensure authentic engagement that converts audiences into customers.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    fullDesc:
      "From social media creatives to brand assets, we deliver visually compelling designs that communicate your message clearly and strengthen brand recall across platforms.",
    icon: <FaCloud />,
  },
  {
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    fullDesc:
      "Our SEO strategies focus on keyword research, on-page optimization, technical SEO, content strategy, and continuous monitoring to improve rankings and long-term traffic growth.",
    icon: <FaServer />,
  },
  {
    title: "Customized Web Development",
    shortDesc: "Tailored solutions for business growth.",
    fullDesc:
      "We design and develop custom websites and web applications focused on performance, scalability, security, and user experience—aligned precisely with your business goals.",
    icon: <FaTools />,
  },
];

const DigitalServices = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            We build reliable digital solutions using modern marketing and technology practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-100
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg
                              bg-orange-50 text-orange-500 text-xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.shortDesc}
              </p>

              <button
                onClick={() => setActiveService(service)}
                className="text-orange-500 font-medium text-sm hover:underline"
              >
                Show More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveService(null)}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white max-w-lg w-full rounded-2xl p-8 z-10">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>

            <div className="w-14 h-14 flex items-center justify-center rounded-xl
                            bg-orange-50 text-orange-500 text-2xl mb-6">
              {activeService.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {activeService.fullDesc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalServices;
