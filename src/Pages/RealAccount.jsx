import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaDollarSign, FaShieldAlt, FaBolt} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";


export default function RealAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    idNumber: "",
    accountType: "standard",
    initialDeposit: "1000"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Real Account Form:", formData);
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Open <span className="text-teal-400">Real Account</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 text-lg"
            >
              Start trading with real money and access all premium features
            </motion.p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className="relative">
                  <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    type="text"
                    name="idNumber"
                    placeholder="ID Number"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-4 text-teal-400" />
                <textarea
                  name="address"
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Account Settings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Account Type</label>
                  <select
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-teal-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="standard">Standard Account</option>
                    <option value="premium">Premium Account</option>
                    <option value="vip">VIP Account</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-white mb-2">Initial Deposit (USD)</label>
                  <FaDollarSign className="absolute left-3 top-11 text-teal-400" />
                  <input
                    type="number"
                    name="initialDeposit"
                    placeholder="1000"
                    value={formData.initialDeposit}
                    onChange={handleChange}
                    min="100"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 animate-glow"
              >
                Create Real Account
              </motion.button>
            </form>

            {/* Features */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-lg">
                <FaShieldAlt className="text-teal-400 text-2xl mb-2 mx-auto" />
                <h3 className="text-white font-semibold">Secure</h3>
                <p className="text-gray-400 text-sm">Bank-level security</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <FaBolt className="text-teal-400 text-2xl mb-2 mx-auto" />
                <h3 className="text-white font-semibold">Fast</h3>
                <p className="text-gray-400 text-sm">Instant execution</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-teal-400 text-2xl mb-2 mx-auto" />
                <h3 className="text-white font-semibold">Professional</h3>
                <p className="text-gray-400 text-sm">Advanced tools</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}