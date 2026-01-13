import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaGamepad, FaDollarSign, FaMoneyBillWave, FaChartLine, FaRocket, FaDownload, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DemoAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    virtualBalance: "10000",
    tradingExperience: "beginner"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo Account Form:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f1a] to-[#0b1220] pt-32 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Open <span className="text-cyan-400">Demo Account</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 text-lg"
            >
              Practice trading with virtual money - No risk, real experience
            </motion.p>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <FaMoneyBillWave className="text-4xl mb-3 text-cyan-400 mx-auto" />
              <h3 className="text-white font-semibold mb-2">$10,000 Virtual</h3>
              <p className="text-gray-400 text-sm">Practice with virtual money</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <FaChartLine className="text-4xl mb-3 text-cyan-400 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Real Market Data</h3>
              <p className="text-gray-400 text-sm">Live market conditions</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <p className="text-4xl mb-3 text-cyan-400 mx-auto" />
              <h3 className="text-white font-semibold mb-2">No Risk</h3>
              <p className="text-gray-400 text-sm">Learn without losing money</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Demo Settings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Trading Experience</label>
                  <FaGamepad className="absolute left-3 top-11 text-cyan-400" />
                  <select
                    name="tradingExperience"
                    value={formData.tradingExperience}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-white mb-2">Virtual Balance (USD)</label>
                  <FaDollarSign className="absolute left-3 top-11 text-cyan-400" />
                  <select
                    name="virtualBalance"
                    value={formData.virtualBalance}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="5000">$5,000</option>
                    <option value="10000">$10,000</option>
                    <option value="50000">$50,000</option>
                    <option value="100000">$100,000</option>
                  </select>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-cyan-400 bg-white/5 border-white/20 rounded focus:ring-cyan-400"
                  required
                />
                <label htmlFor="terms" className="text-gray-300 text-sm">
                  I agree to the <span className="text-cyan-400 hover:underline cursor-pointer">Terms & Conditions</span> and <span className="text-cyan-400 hover:underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Create Demo Account - It's Free!
              </motion.button>
            </form>

            {/* Quick Start */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaRocket className="text-cyan-400" /> Quick Start Guide
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
                    <FaUser /> Step 1
                  </div>
                  <div className="text-gray-300">Create Account</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
                    <FaDownload /> Step 2
                  </div>
                  <div className="text-gray-300">Download Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
                    <FaPlay /> Step 3
                  </div>
                  <div className="text-gray-300">Start Trading</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}