import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-28 text-white overflow-hidden">

    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f766e,_transparent_45%)] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-5 py-2 text-xs uppercase tracking-widest rounded-full bg-teal-500/10 text-teal-400 border border-teal-400/30">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s
            <span className="text-teal-400"> Connect</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Have questions about our trading solutions? Our team is ready to
            assist you with professional support and guidance.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-teal-400/50 transition">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Registered Address
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet,
                Saint Lucia P.O. Box 838, Castries, Saint Lucia.
                <br />
                Registration Number: 2025-00598
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-teal-400/50 transition">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Physical Address
              </h3>
              <p className="text-gray-400 text-sm">
                26 Nikoloz Baratashvili Street, Office 78,
                Batumi 6000, Georgia.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-4 bg-teal-500/10 border border-teal-400/30 rounded-xl">
                <FaPhoneAlt className="text-teal-400" />
                <span className="text-sm text-gray-300">
                  +56 226 564 108
                </span>
              </div>

              <div className="flex items-center gap-3 px-5 py-4 bg-teal-500/10 border border-teal-400/30 rounded-xl">
                <FaEnvelope className="text-teal-400" />
                <span className="text-sm text-gray-300">
                  support@galaxyfinservices.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-teal-500/30"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
