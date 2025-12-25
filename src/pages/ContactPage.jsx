import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= CONNECT WITH US ================= */}
        <div className="bg-linear-to-br from-black/40 via-black/90 to-orange-400 rounded-3xl px-6 py-20 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold tracking-widest mb-4">
              CONNECT WITH US
            </p>
            <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight">
              Talk to the experts and see how can we help
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {/* PHONE CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Planning a project or product?
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Discuss your business requirements, timelines, and technical
                    challenges with our experienced software consultants.
                  </p>

                  <div className="space-y-2 font-medium">
                    <p className="text-orange-500 font-medium">
                      Let’s build scalable solutions together
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Careers, support, or partnerships?
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Reach out for job opportunities, ongoing project support,
                    collaborations, or any general inquiries.
                  </p>

                  <p className="text-orange-500 font-medium">
                    We usually respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EXISTING CONTACT FORM ================= */}
        <div className="bg-white shadow-xl rounded-2xl grid lg:grid-cols-2 overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="bg-[#0f172a] text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We help businesses build scalable, secure, and high-performance
                software solutions. Reach out to us and let’s discuss your idea.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-lg text-orange-400" />
                  <span>info@rvksoftware.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-lg text-orange-400" />
                  <span>+91 902409959</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-lg text-orange-400" />
                  <span>Jaipur, Rajasthan, India</span>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
      </div>
    </section>
  );
};

export default ContactSection;
