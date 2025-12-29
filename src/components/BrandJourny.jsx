const journeySteps = [
  {
    step: "Step 1",
    title: "Product & Market Research",
    description:
      "We deeply research your product or service and analyze how your competitors are performing in the online market.",
  },
  {
    step: "Step 2",
    title: "Technology & Product Development",
    description:
      "We build or enhance your tech product based on competitor analysis, market gaps, and user expectations.",
  },
  {
    step: "Step 3",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures your product is stable, user-friendly, and ready for real-world performance.",
  },
  {
    step: "Step 4",
    title: "Marketing Strategy Research",
    description:
      "We study competitor marketing strategies, channels, and ROI to design a high-impact growth plan.",
  },
  {
    step: "Step 5",
    title: "Marketing Execution & Scaling",
    description:
      "We apply SEO, social media, paid ads, and branding strategies to drive measurable growth.",
  },
  {
    step: "Step 6",
    title: "Market Fit & Brand Recognition",
    description:
      "Your brand achieves product–market fit, gains customer trust, and becomes a recognized name in the market.",
  },
];

const BrandJourney = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Brand Journey
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end branding solutions designed for visibility, trust, and sustainable growth.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journeySteps.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* POINT / DOT */}
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 mt-1"></div>

              {/* CONTENT */}
              <div>
                <span className="text-orange-500 font-semibold text-sm">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandJourney;





