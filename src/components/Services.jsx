import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Transforming business requirements into scalable, secure, and high-performance software solutions.",
    icon: <FaCode />,
    image: "/Slide1.jpg",
  },
  {
    title: "App Development",
    description:
      "Custom Android and iOS applications built for performance, scalability, and user experience.",
    icon: <FaMobileAlt />,
    image: "/Slide2.jpg",
  },
  {
    title: "Wordpress Web Development",
    description:
      "Modern, responsive, and SEO-friendly websites using the latest frontend technologies.",
    icon: <FaGlobe />,
    image: "/Slide3.jpg",
  },
  {
    title: "E-Commerce",
    description:
      "Robust e-commerce platforms designed to maximize conversions and customer engagement.",
    icon: <FaShoppingCart />,
    image: "/Slide2.jpg",
  },
  {
    title: "Custom Website Development",
    description:
      "Cloud-native architectures, migrations, and DevOps pipelines for reliable deployments.",
    icon: <FaCloud />,
    image: "/Slide1.jpg",
  },
  {
    title: "Software Development",
    description:
      "Custom CRM systems that streamline operations and enhance customer relationships.",
    icon: <FaCogs />,
    image: "/Slide1.jpg",
  },
];

const Services = ({ mode = "redirect", onSelectService }) => {
  return (
    <section className="bg-orange-50 pt-24 px-4">
      <div className="max-w-7xl mx-auto pb-24">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[260px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60"></div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3 text-orange-400 text-xl">
                  {service.icon}
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                {mode === "redirect" ? (
                  <Link
                    to="/services"
                    className="mt-4 inline-block text-sm font-medium text-orange-400
                               group-hover:translate-x-1 transition"
                  >
                    Learn More →
                  </Link>
                ) : (
                  <button
                    onClick={() => onSelectService(service)}
                    className="mt-4 text-sm font-medium text-orange-400
                               group-hover:translate-x-1 transition text-left"
                  >
                    Learn More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
