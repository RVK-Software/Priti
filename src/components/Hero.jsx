import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/Slide1.jpg",
    heading: "Build Scalable & Reliable Software",
    subheading: "Engineering solutions that grow with your business",
    description:
      "We design and develop modern web applications using best practices in performance, security, and scalability.",
  },
  {
    id: 2,
    image: "/Slide2.jpg",
    heading: "Modern Web & Cloud Solutions",
    subheading: "From idea to production-ready systems",
    description:
      "Our expertise covers frontend, backend, APIs, and cloud deployment to deliver complete IT solutions.",
  },
  {
    id: 3,
    image: "/Slide3.jpg",
    heading: "Technology That Solves Real Problems",
    subheading: "Focused on quality, speed, and maintainability",
    description:
      "We help startups and businesses turn complex requirements into clean, maintainable software.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section className="relative bg-gradient-to-br from-black/60 via-black/90 to-orange-400 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-[75%_25%] gap-6 items-center">
          
          {/* IMAGE SECTION */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="h-[180px] sm:h-[220px] lg:h-[360px] w-full flex items-center justify-center">
              <img
                src={slides[current].image}
                alt={`Slide ${current + 1}`}
                className="max-h-full max-w-full object-contain transition-opacity duration-500"
              />
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="order-2 lg:order-1 space-y-3 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl lg:text-4xl font-semibold leading-snug">
              {slides[current].heading}
            </h2>

            <h3 className="text-base sm:text-lg lg:text-2xl text-white/90">
              {slides[current].subheading}
            </h3>

            <p className="text-sm lg:text-base text-white/80 max-w-xl mx-auto lg:mx-0">
              {slides[current].description}
            </p>

            <p className="font-medium text-sm lg:text-base">
              Let’s build something powerful together 🚀
            </p>

            <button className="bg-yellow-400 text-black px-4 py-2 lg:px-6 lg:py-3 rounded font-semibold text-sm lg:text-base hover:bg-yellow-300 transition">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl opacity-70 hover:opacity-100"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl opacity-70 hover:opacity-100"
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
