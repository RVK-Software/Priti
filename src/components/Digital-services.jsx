import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaLayerGroup,
  FaPaintBrush,
  FaTools,
  FaServer,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    title: "Social Media Page Management",
    shortDesc: "Scalable, secure, and high-performance digital brand handling.",
    fullDesc:
      "When rapid visibility matters, our Paid Advertising service delivers targeted results. We run high-conversion campaigns on Google, Facebook, and Instagram using precise audience targeting. From ad copy and creatives to A/B testing and bid management, our data-driven approach maximizes ROAS while minimizing wasted spend from day one.",
    icon: <FaLayerGroup />,
    image: "/SocialMediaMarketing.jpeg",
  },
  {
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    fullDesc:
      "Traditional ads lack trust. Our Influencer Marketing connects your brand with authentic, highly engaged creators relevant to your niche. We manage creator selection, vetting, contracts, and campaigns end to end. By leveraging influencer credibility, we build genuine brand stories, boost awareness, create human-centric content, and drive conversions through social proof.",
    icon: <FaTools />,
    image: "/paid-ads.jpeg",
  },
  {
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    fullDesc:
      "Visuals communicate faster than words. Our Graphic Designing service creates impactful, strategy-driven visuals—from logos and social media creatives to brochures and banners. Using color psychology and typography, we craft designs that evoke emotion, strengthen brand identity, and set you apart with a professional, consistent presence across all digital and print channels.",
    icon: <FaPaintBrush />,
    image: "/influencer-marketing.jpeg",
  },
  {
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    fullDesc:
      "A great website means nothing without visibility. Our SEO service boosts your Google rankings through a holistic approach combining technical, on-page, and off-page optimization. We drive consistent, high-quality organic traffic, reduce reliance on paid ads, and build long-term authority for sustainable business growth.",
    icon: <FaPaintBrush />,
    image: "/graphic.jpeg",
  },
  {
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    fullDesc:
      "Your business deserves more than templates. Our Customized Web Development service delivers scalable, secure, and high-performance digital solutions built from scratch. Using modern technologies, we create fast, responsive websites and applications tailored to your unique operations and designed to grow seamlessly with your business.",
    icon: <FaServer />,
    image: "/SearchEngineOptimization.jpeg",
  },
  {
    title: "Podcast Services",
    shortDesc: "Tailored solutions for business growth.",
    fullDesc: "Your business deserves more than templates...",
    icon: <FaCode />,
    image: "/customize-web-development.jpeg",
  },
];

const DigitalServices = ({ variant = "services" }) => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const handleShowMore = (service) => {
    if (variant === "home") {
      navigate("/marketing-services");
    } else {
      setActiveService(service);
    }
  };

  return (
    <section className="bg-gray-50 py-8 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-lg">
            We build reliable digital solutions using modern marketing and
            technology practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHome = variant === "home";

            return (
              <div
                key={index}
                onClick={() => isHome && handleShowMore(service)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        ${isHome ? "text-white" : " border"}`}
                style={
                  isHome
                    ? {
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                {/* OVERLAY ONLY ON HOME */}
                {isHome && <div className="absolute inset-0 bg-black/60"></div>}

                {/* CONTENT */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl
      ${isHome ? "bg-white/20 text-orange-400" : "text-orange-400"}`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-[18px] text-orange-400 font-semibold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-4
            ${isHome ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowMore(service);
                    }}
                    className={`font-medium text-sm text-start underline-offset-4
            ${
              isHome
                ? "text-orange-400 hover:underline"
                : "text-orange-500 hover:underline"
            }`}
                  >
                    Show More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL ONLY FOR SERVICES PAGE */}
      {variant === "services" && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveService(null)}
          ></div>

          <div className="relative bg-white max-w-lg w-full rounded-2xl p-8 z-10">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>

            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl
                            bg-orange-50 text-orange-400 text-2xl mb-6"
            >
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
