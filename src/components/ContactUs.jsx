// ContactSection.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl grid lg:grid-cols-2 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="bg-[#0f172a] text-white p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We help businesses build scalable, secure, and high-performance
            software solutions. Reach out to us and let’s discuss your idea.
          </p>

          <div className="space-y-5">
            {/* EMAIL */}
            <a
              href="mailto:info@rvksoftware.com"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaEnvelope className="text-lg text-orange-400" />
              <span>info@rvksoftware.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+91902409959"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaPhoneAlt className="text-lg text-orange-400" />
              <span>+91 9024099592</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/91902409959"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-orange-400 transition"
            >
              <FaWhatsapp className="text-lg text-orange-400" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-lg text-orange-400" />
              <span>D-73 kusum Vihar lane no.10, Ram Nagariya Rd, Jagatpura, Jaipur, Rajasthan 302017</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} RVK Software. All rights reserved.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="p-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h3>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
