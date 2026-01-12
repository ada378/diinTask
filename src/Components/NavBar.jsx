import { Link } from "react-router-dom";
import logo from "../assets/logoGalaxy.png";

export default function Navbar() {
  return (
    <div className="w-full">


      <div className="bg-green-950 h-10 text-white flex items-center justify-between px-6">
        <p className="text-sm ml-10">support@galaxyfinservices.com</p>

        <div className="flex items-center gap-3">
          <button className="action-btn">Open Real Account</button>
          <span className="opacity-70">|</span>
          <button className="action-btn">Open Demo Account</button>
          <span className="opacity-70">|</span>
          <button className="action-btn">Login</button>
        </div>
      </div>

      <div className="flex items-center justify-between px-10 py-3 bg-white">

        
        <div className="flex items-center">
          <img
            src={logo}
            alt="Galaxy Logo"
            className="h-20 w-auto px-10"
          />
        </div>

        
        <div className="flex items-center gap-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/services" className="hover:text-green-700">Services</Link>
          <Link to="/contact" className="hover:text-green-700">Contact</Link>
        </div>

      </div>
    </div>
  );
}
