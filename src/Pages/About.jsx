import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaDesktop, FaGlobe } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white py-5">

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f766e,_transparent_40%)]   opacity-20"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <span className="inline-block mb-5 px-5 py-2 text-xs tracking-widest uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-400/30">
            About Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering the Future of
            <span className="text-teal-400"> Smart Trading</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Galaxy Financial Services Ltd delivers a premium, secure, and
            innovative forex trading experience for modern investors.
          </p>
        </motion.div>
      </section>

      {/* ================= CORE CARDS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Who We Are",
              desc: "A globally trusted financial brand delivering transparency, performance, and innovation.",
              icon: <FaGlobe />,
            },
            {
              title: "Our Mission",
              desc: "To empower traders with advanced tools, education, and long-term value.",
              icon: <FaChartLine />,
            },
            {
              title: "Our Vision",
              desc: "Redefining forex trading through technology, trust, and excellence.",
              icon: <FaDesktop />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-teal-400/50 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="text-4xl text-teal-400 mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT DETAILS ================= */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About
              <span className="text-teal-400"> Galaxy Financial Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              We have earned global recognition by creating a distraction-free,
              investor-centric trading ecosystem built on integrity and innovation.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Our advanced trading infrastructure, risk-focused approach, and
              professional support define excellence in forex trading.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Experience seamless execution, powerful tools, and a future-ready
              trading platform.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-transparent blur-3xl"></div>

            <img
              src="https://www.galaxyfinservices.com/assets/img/abtinnerbgsec.jpg"
              alt="Trading"
              className="relative rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUE ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-5 py-2 text-xs uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-400/30">
              Core Value
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional. Secure. Future-Ready.
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We combine global trading access with advanced technology and
              institutional-grade reliability to help investors grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
