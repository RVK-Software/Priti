const TechStack = () => {
  return (
    <section className="bg-black/20 py-16 mb-17 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Our <span className="text-orange-500">Tech Stack</span>
          </h2>
          <p className="mt-4 text-black max-w-2xl mx-auto">
            Built with modern, scalable technologies to deliver high-performance,
            secure, and future-ready digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">

          {/* Frontend */}
          <div className="group bg-white/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                          transition-all duration-300 hover:-translate-y-2
                          hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(255,115,0,0.2)]">

            <h3 className="text-2xl font-semibold text-orange-400 mb-6 group-hover:text-orange-500">
              Frontend Excellence
            </h3>

            <ul className="space-y-4">
              {[
                "React for dynamic user interfaces",
                "HTML5 & CSS3 for modern layouts",
                "JavaScript for interactive experiences",
                "Responsive design frameworks",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="group bg-white/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8
                          transition-all duration-300 hover:-translate-y-2
                          hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(255,115,0,0.2)]">

            <h3 className="text-2xl font-semibold text-orange-400 mb-6 group-hover:text-orange-500">
              Backend Power
            </h3>

            <ul className="space-y-4">
              {[
                "Node.js for scalable server architecture",
                "Express for robust API development",
                "MongoDB for flexible data storage",
                "RESTful & GraphQL integration",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
