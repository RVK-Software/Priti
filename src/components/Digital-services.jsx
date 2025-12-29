import { useState } from "react";
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
    shortDesc:
      "Scalable, secure, and high-performance digital brand handling.",
    fullDesc:
      "In today's digital-first world, your social media presence is often the very first interaction a potential customer has with your brand. Our Social Media Page Management service goes beyond just posting; we create a comprehensive digital identity for your business. We handle everything from content calendar planning and creative caption writing to hashtag research and community engagement. By maintaining a consistent voice across platforms like Instagram, Facebook, and LinkedIn, we help you build trust and loyalty. We monitor trends and analytics to tweak strategies in real-time, ensuring your brand stays relevant, active, and constantly growing its follower base while you focus on running your business.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    fullDesc:
      "Organic growth is essential, but when you need immediate results and targeted reach, our Paid Advertising service is the engine you need. We specialize in high-conversion campaigns across Google Ads, Facebook, and Instagram. Our team analyzes your target demographic to create precise audience segments, ensuring your budget is spent only on people most likely to convert. We handle the entire lifecycle: ad copy, creative design, A/B testing, and bid management. Whether your goal is lead generation, app installs, or direct e-commerce sales, our data-driven approach minimizes wasted spend and maximizes your Return on Ad Spend (ROAS), delivering measurable outcomes from day one.",
    icon: <FaTools />,
  },
  {
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    fullDesc:
      "Traditional advertising often struggles to build the deep trust that modern consumers crave. Our Influencer Marketing service bridges that gap by connecting your brand with authentic voices that your audience already listens to. We don't just look for high follower counts; we look for engagement and niche relevance to your industry. We handle the entire process—from identifying and vetting the perfect creators to negotiating contracts and managing campaign deliverables. By leveraging the credibility of influencers, we help you create genuine narratives around your products. This strategy amplifies your brand awareness, generates human-centric content, and drives conversions through the power of social proof.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    fullDesc:
      "Visuals process 60,000 times faster in the brain than text, making high-quality design crucial for your brand's success. Our Graphic Designing service is dedicated to crafting a visual identity that is not only aesthetically pleasing but also strategically aligned with your business goals. From memorable logos and striking social media creatives to professional brochures and website banners, we ensure every pixel serves a purpose. We understand color psychology and typography, using them to evoke the right emotions in your audience. Our designs distinguish you from competitors, ensuring that your marketing materials look professional, polished, and unmistakable across all digital and physical channels.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    fullDesc:
      "A beautiful website is useless if your customers can't find it. Our Search Engine Optimization (SEO) service ensures your business ranks prominently on Google for the keywords that matter most to your industry. We take a holistic approach, combining technical SEO, on-page SEO, and off-page SEO strategies. By improving your visibility organically, we drive consistent, high-quality traffic to your site, reducing dependency on paid ads and establishing long-term authority.",
    icon: <FaServer />,
  },
  {
    title: "Customized Web Development",
    shortDesc: "Tailored solutions for business growth.",
    fullDesc:
      "Your business is unique, and a generic template often fails to capture your specific operational needs. Our Customized Web Development service builds robust, scalable digital solutions from the ground up. Using modern technologies, we create fast, secure, and responsive websites and applications designed to grow with your business.",
    icon: <FaCode />,
  },
];

const DigitalServices = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-gray-50 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
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

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
