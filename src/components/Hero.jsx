import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "/RVK-slide3.jpg",
  "/RVK-slide2.jpg",
  "/RVK-Slide1.jpg",
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
    <section className="relative w-full overflow-hidden">
      {/* SLIDE */}
      <div className="max-w-full mx-auto pt-16 pb-5 lg:pt-16 lg:pb-14">
        <img
          src={slides[current]}
          alt={`Banner ${current + 1}`}
          className="w-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2
                   bg-black/40 text-white p-2 rounded-full
                   hover:bg-black/60 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2
                   bg-black/40 text-white p-2 rounded-full
                   hover:bg-black/60 transition"
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
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${index === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
