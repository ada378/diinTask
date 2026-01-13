import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGamepad, FaHeadset, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f1a] to-[#0b1220] pt-32 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Welcome <span className="text-teal-400">Back</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300"
            >
              Sign in to your trading account
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
              {/* Email */}
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

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-400 bg-white/5 border-white/20 rounded focus:ring-teal-400"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 animate-glow"
              >
                Sign In
              </motion.button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-4 text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                <FaGoogle className="text-red-400" />
                Continue with Google
              </button>
              <button className="w-full py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                <FaFacebook className="text-blue-400" />
                Continue with Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link to="/real-account" className="text-teal-400 hover:text-teal-300 transition-colors font-semibold">
                  Create Account
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            <Link 
              to="/demo-account"
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <FaGamepad className="text-2xl mb-2 group-hover:scale-110 transition-transform mx-auto text-cyan-400" />
              <div className="text-white font-semibold">Try Demo</div>
              <div className="text-gray-400 text-sm">Risk-free trading</div>
            </Link>
            <Link 
              to="/contact"
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <FaHeadset className="text-2xl mb-2 group-hover:scale-110 transition-transform mx-auto text-teal-400" />
              <div className="text-white font-semibold">Need Help?</div>
              <div className="text-gray-400 text-sm">Contact support</div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}