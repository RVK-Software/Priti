import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Website Design & Development",
    description:
      "We don't just build websites; we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.",
    tags: ["Custom Design", "Responsive Layout", "Unique Theme", "Component Based Architecture"],
  },
  {
    title: "SEO Friendly Websites",
    description:
      "Empower yourself to easily update and manage your website content with a user-friendly CMS. We'll choose the perfect platform based on your needs, whether it's WordPress, Drupal, or a custom solution.",
    tags: [
      "Fast Website Speed",
      "High Quality & Useful Content Not Copied",
      "Higher Conversion Rate",
      "Better User Experience",
    ],
  },
  {
    title: "Other Services We Offer",
    description:
      "Connect your web application to external data sources and services with our expert API development and integration. This allows for a more powerful and dynamic user experience.",
    tags: [
      "Free Domain & Hosting For One Year",
      "Social Media Integration",
      "Provide the SSL That secures your website",
      "6 Months Maintenance Free",
    ],
  },
];

const CustWebDev = () => {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-2">
        {/* Heading */}
        <div className="text-center mb-6">
          
          <h2 className="text-3xl sm:text-xl max-w-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Customized Web Development Services 
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Top Line */}
                <div className="h-1 w-24 bg-orange-400 mb-6 rounded-full"></div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap flex-col gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-orange-50 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustWebDev;
