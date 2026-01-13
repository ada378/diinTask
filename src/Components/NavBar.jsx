import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logoGalaxy.png";

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#020617] border-b border-white/10 text-gray-300"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm">
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            support@galaxyfinservices.com
          </motion.span>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link to="/real-account">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-400/30 hover:bg-teal-500 hover:text-white transition-all duration-300 animate-glow"
              >
                Open Real Account
              </motion.button>
            </Link>
            <Link to="/demo-account">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Open Demo
              </motion.button>
            </Link>
            <Link to="/login">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-md border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Login
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#020617]/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <motion.img 
                src={logo} 
                alt="Galaxy Logo" 
                className="h-14 w-auto animate-pulse-slow" 
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-300">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative hover:text-teal-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#020617] border-t border-white/10 px-4 sm:px-6 py-6 space-y-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="pt-4 space-y-3"
            >
              <Link to="/real-account">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300"
                >
                  Open Real Account
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 rounded-md border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Login
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
