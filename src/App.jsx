import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import RealAccount from "./Pages/RealAccount";
import DemoAccount from "./Pages/DemoAccount";
import Login from "./Pages/Login";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "primeicons/primeicons.css";
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/real-account" element={<RealAccount />} />
        <Route path="/demo-account" element={<DemoAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
