import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaCogs,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    description:
      "Transforming business requirements into scalable, secure, and high-performance software solutions.",
    icon: <FaCode />,
    image: "/Slide1.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom Android and iOS applications built for performance, scalability, and user experience.",
    icon: <FaMobileAlt />,
    image: "/Slide2.jpg",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and SEO-friendly websites using the latest frontend technologies.",
    icon: <FaGlobe />,
    image: "/Slide3.jpg",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Robust e-commerce platforms designed to maximize conversions and customer engagement.",
    icon: <FaShoppingCart />,
    image: "/Slide2.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud-native architectures, migrations, and DevOps pipelines for reliable deployments.",
    icon: <FaCloud />,
    image: "/Slide1.jpg",
  },
  {
    title: "CRM & Enterprise Systems",
    description:
      "Custom CRM systems that streamline operations and enhance customer relationships.",
    icon: <FaCogs />,
    image: "/Slide1.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 pt-24 px-4">
      <div className="max-w-7xl mx-auto pb-25">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Key Areas of Our Expertise
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We help businesses build modern digital products using cutting-edge
            technologies and proven engineering practices.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[260px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3 text-orange-400 text-xl">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-orange-400 group-hover:translate-x-1 transition">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* BLACK SECTION */}
            <div className="relative bg-black pt-34 pb-40">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
                  Connect With Us
                </p>
      
                <h2 className="text-white text-3xl md:text-4xl font-semibold max-w-3xl mx-auto">
                  Talk to the experts and see how can we help
                </h2>
              </div>
      
              {/* OVERLAPPING CARDS */}
              <div className="absolute left-0 right-0 top-full -translate-y-1/2 z-10">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* CARD 1 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex gap-5">
      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          Ready to talk? We’re just a phone call away!
                        </h3>
      
                        <p className="text-gray-600 mb-5">
                          Whether you need support, have inquiries, or want to learn
                          more about what we do, feel free to give us a call.
                        </p>
                      </div>
                    </div>
      
                    {/* CARD 2 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex gap-5">
                      
      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          Prefer to reach out via email? We’re always here to help!
                        </h3>
      
                        <p className="text-gray-600 mb-5">
                          Send us a message with your inquiries, project details,
                          or any questions you may have.
                        </p>
      
                      </div>
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
      
            {/* WHITE SPACE BELOW (VERY IMPORTANT) */}
            <div className="h-64 bg-white"></div>
    </section>
  );
};

export default Services;
