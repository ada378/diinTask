import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logoGalaxy.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

   
      <div className="bg-[#020617] border-b border-white/10 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">
          <span className="opacity-80">
            support@galaxyfinservices.com
          </span>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-400/30 hover:bg-teal-500 hover:text-white transition">
              Open Real Account
            </button>
            <button className="px-4 py-1 rounded-md bg-white/5 border border-white/20 hover:bg-white/10 transition">
              Open Demo
            </button>
            <button className="px-4 py-1 rounded-md border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
          </div>
        </div>
      </div>

   
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#020617]/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Galaxy Logo" className="h-14 w-auto" />
          </Link>

       
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-300">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-teal-400 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-teal-400 hover:after:w-full after:transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

     
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#020617] border-t border-white/10 px-6 py-6 space-y-4"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-teal-400 transition"
              >
                {item}
              </Link>
            ))}

            <div className="pt-4 space-y-3">
              <button className="w-full py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition">
                Open Real Account
              </button>
              <button className="w-full py-2 rounded-md border border-white/20 hover:bg-white/10 transition">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
