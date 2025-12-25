import { useState } from "react";
import Services from "../components/Services";
import DigitalServices from "../components/Digital-services";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Services
        mode="modal"
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {selectedService.description}
            </p>
          </div>
        </div>
      )}
      <DigitalServices />
    </>
  );
};

export default ServicesPage;
