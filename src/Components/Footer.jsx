import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] to-[#020617] text-gray-300 overflow-hidden">

     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0f766e,_transparent_45%)] opacity-20"></div>

 
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-6 py-14 border-b border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-3">
          Disclaimer
        </h3>
        <p className="text-sm leading-relaxed">
          Galaxy Financial Services Ltd does not provide or facilitate services
          to residents of the USA, UAE, North Korea, Iran, Myanmar, or any
          jurisdiction subject to international sanctions.
        </p>

        <h3 className="text-lg font-semibold text-white mt-6 mb-3">
          Risk Warning
        </h3>
        <p className="text-sm leading-relaxed">
          CFDs and leveraged products are complex instruments and come with a
          high risk of losing money rapidly. You should never invest money you
          cannot afford to lose. Approximately 70% of retail investors lose
          money trading CFDs with this provider.
        </p>
      </motion.div>

     
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

     
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Company Address
          </h4>

          <p className="text-sm leading-relaxed">
            <span className="font-medium text-teal-400">Registered:</span><br />
            Ground Floor, The Sotheby Building,<br />
            Rodney Bay, Gros-Islet,<br />
            Saint Lucia (P.O. Box 838)
          </p>

          <p className="text-sm mt-3">
            <span className="font-medium text-teal-400">
              Registration No:
            </span>{" "}
            2025-00598
          </p>

          <p className="text-sm mt-3 leading-relaxed">
            <span className="font-medium text-teal-400">Physical:</span><br />
            26 Nikoloz Baratashvili Street,<br />
            Office 78, Batumi 6000, Georgia
          </p>
        </motion.div>

    
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h4>
          <ul className="space-y-3 text-sm">
            {["About Us", "Trading", "Channel Partner", "Academy", "Tools"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-teal-400 transition cursor-pointer"
                >
                  <FaChevronRight className="text-xs" /> {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Instruments
          </h4>
          <ul className="space-y-3 text-sm">
            {["Forex", "Metals", "Oil Commodities", "Spot Index", "Cryptocurrency"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-teal-400 transition cursor-pointer"
                >
                  <FaChevronRight className="text-xs" /> {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-400" />
              +56 226 564 108
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400" />
              support@galaxyfinservices.com
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-400" />
              Global Offices
            </div>
          </div>
        </motion.div>
      </div>

     
      <div className="bg-[#020617] border-t border-white/10 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">
          Galaxy Financial Services Ltd
        </span>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
