import { motion } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaCoins,
  FaBitcoin,
  FaUsers,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const services = [
    {
      title: "Forex Trading",
      desc: "Trade the world's most liquid financial market with major, minor, and exotic currency pairs.",
      icon: <FaGlobe />,
    },
    {
      title: "CFD Trading",
      desc: "Access CFDs across global indices, commodities, and financial instruments with precision execution.",
      icon: <FaChartLine />,
    },
    {
      title: "Commodities & Indices",
      desc: "Diversify your portfolio with Gold, Silver, Oil, and leading global indices.",
      icon: <FaCoins />,
    },
    {
      title: "Crypto CFDs",
      desc: "Trade top cryptocurrencies including Bitcoin and Ethereum with flexible leverage.",
      icon: <FaBitcoin />,
    },
    {
      title: "Introducing Broker Program",
      desc: "Earn competitive commissions with our professional IB dashboard and marketing tools.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-28 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f766e,_transparent_45%)] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-5 py-2 text-xs uppercase tracking-widest rounded-full bg-teal-500/10 text-teal-400 border border-teal-400/30">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Professional Trading
            <span className="text-teal-400"> Solutions</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            Galaxy Financial Services Ltd delivers institutional-grade trading
            solutions designed for performance, reliability, and growth across
            global markets.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:-translate-y-3 hover:border-teal-400/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-4xl text-teal-400 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-3">
                {service.title}
              </h2>

           
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>

          
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
