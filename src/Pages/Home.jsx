import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBolt, FaChartLine, FaUserPlus, FaCreditCard, FaChartBar, FaGlobe, FaBriefcase, FaBitcoin } from "react-icons/fa";
import hero1 from "../assets/img2.png";
import ibImg from "../assets/commision.jpg";
import ChatBot from "../Components/ChatBot";

export default function Home() {
  const images = [hero1];
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyUsCards = [
    { title: "0.1 Pips", subtitle: "Low Spreads From", icon: FaChartLine },
    { title: "500", subtitle: "Leverage Up to", icon: FaBolt },
    { title: "70+", subtitle: "Instruments", icon: FaGlobe },
    { title: "True", subtitle: "ECN / STP", icon: FaShieldAlt },
    { title: "Easy", subtitle: "Funding", icon: FaCreditCard },
  ];

  const steps = [
    { title: "Register", desc: "Register your trading account.", icon: FaUserPlus },
    { title: "Fund", desc: "Add funds easily & securely.", icon: FaCreditCard },
    { title: "Trade", desc: "Complete KYC & start trading.", icon: FaChartBar },
  ];

  const markets = [
    { title: "FOREX", desc: "Trade 41+ forex pairs.", icon: FaGlobe },
    { title: "CFD", desc: "Multiple CFD instruments.", icon: FaChartLine },
    { title: "COMMODITIES", desc: "Gold, Silver, Oil & more.", icon: FaBriefcase },
    { title: "CRYPTO", desc: "Popular crypto CFDs.", icon: FaBitcoin },
  ];

 
  const useInView = (threshold = 0.15) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
  };

  const Hero = () => (
    <section className="relative overflow-hidden bg-[#05080f] text-white pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col md:flex-row items-center gap-12 min-h-[80vh] justify-center">
      
        <div
          className={`relative flex-1 max-w-xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 shadow-2xl transition-all duration-1000 animate-slideInLeft ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Start forex trading in minutes with
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Galaxy Financial Services
            </span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg">
            Premier Forex Broker for global traders with institutional-grade execution.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link to="/real-account">
              <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal-500/25 focus:scale-[1.02] animate-glow">
                <span className="relative z-10">Get started</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-white/10" />
              </button>
            </Link>
            <a
              href="#markets"
              className="text-teal-300 hover:text-teal-200 transition-colors underline-offset-4 hover:underline"
            >
              View markets
            </a>
          </div>

 
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <FaShieldAlt className="text-teal-300" />
              <span>Secure & compliant</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <FaBolt className="text-teal-300" />
              <span>Fast execution</span>
            </div>
          </div>
        </div>

    
        <div
          className={`relative flex-1 w-full max-w-md transition-all duration-1000 delay-200 animate-slideInRight ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <img
            src={images[current]}
            alt="Hero"
            className="w-full rounded-2xl shadow-2xl animate-float will-change-transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

   
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );

  const Ticker = () => (
    <div className="bg-[#0a0f1a] text-white overflow-hidden py-3 border-y border-white/5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
        {/* Duplicate content for seamless loop */}
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-green-400">📈</span> US 100 25539.4 (+2.1%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-blue-400">💱</span> EUR/USD 1.16681 (-0.3%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-orange-400">₿</span> Bitcoin 91814 (+5.2%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-purple-400">⟠</span> Ethereum 3153 (+3.8%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-teal-400">📊</span> S&P 500 6025.3 (+1.4%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-yellow-400">🥇</span> Gold 2650.40 (+0.8%)
        </span>
        {/* Duplicate for seamless animation */}
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-green-400">📈</span> US 100 25539.4 (+2.1%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-blue-400">💱</span> EUR/USD 1.16681 (-0.3%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-orange-400">₿</span> Bitcoin 91814 (+5.2%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-purple-400">⟠</span> Ethereum 3153 (+3.8%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-teal-400">📊</span> S&P 500 6025.3 (+1.4%)
        </span>
        <span className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span className="text-yellow-400">🥇</span> Gold 2650.40 (+0.8%)
        </span>
      </div>
    </div>
  );

  const SectionHeader = ({ title, accent, subtitle }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title} <span className="text-teal-400">{accent}</span>
      </h2>
      {subtitle && <p className="text-gray-400 mt-3">{subtitle}</p>}
    </div>
  );

  const WhyUs = () => {
    const { ref, inView } = useInView();
    return (
      <section ref={ref} className="bg-[#0b1220] py-20">
        <div
          className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-700 animate-fadeInUp ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader
            title="Forex trading with"
            accent="Galaxy Financial"
            subtitle="Advanced technology & institutional liquidity."
          />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
            {whyUsCards.map((c, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 w-52 md:w-56 p-6 rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-400/40 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <c.icon className="text-3xl mb-2 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.subtitle}</p>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Steps = () => {
    const { ref, inView } = useInView();
    return (
      <section ref={ref} className="bg-[#0c1424] py-20">
        <div
          className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-700 animate-fadeInUp ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader title="Start forex trading" accent="in minutes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((s, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-400/30 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <s.icon className="text-4xl mb-3 text-teal-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
                <button className="mt-5 text-teal-300 hover:text-teal-200 transition-all duration-300 underline-offset-4 hover:underline hover:scale-105">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Markets = () => {
    const { ref, inView } = useInView();
    return (
      <section id="markets" ref={ref} className="bg-gradient-to-b from-[#0b2a3b] via-[#0a2231] to-[#071d2a] py-20">
        <div
          className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-700 animate-fadeInUp ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader title="Range of" accent="markets" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {markets.map((m, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-teal-400/40 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <m.icon className="text-5xl mb-4 text-teal-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <h3 className="text-xl font-semibold text-white">{m.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{m.desc}</p>
                <button className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2 rounded-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-teal-500/30">
                  <span className="relative z-10">Instruments list</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-white/10" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const IB = () => {
    const { ref, inView } = useInView();
    return (
      <section ref={ref} className="bg-[#0b1220] py-20">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 animate-fadeInUp ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-slideInLeft">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-indigo-500/10" />
            <img
              src={ibImg}
              alt="IB Program"
              className="w-full h-full object-cover transition-transform duration-[900ms] hover:scale-110"
            />
          </div>

          <div className="animate-slideInRight">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              Become an Introducing Broker with{" "}
              <span className="text-teal-400 animate-pulse-slow">Galaxy Financial Services</span>
            </h2>
            <p className="mt-6 text-gray-300 italic text-lg">
              Customised rebate • Marketing tools • Dedicated dashboard
            </p>
            <Link to="/real-account">
              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-teal-500/30 animate-glow">
                Become an IB
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Hero />
      <Ticker />
      <WhyUs />
      <Steps />
      <Markets />
      <IB />
      {/* Footer */}
      <footer className="bg-[#070b12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-400 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm animate-fadeInUp">© {new Date().getFullYear()} Galaxy Financial Services</p>
          <div className="flex items-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <a className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Privacy</a>
            <a className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Terms</a>
            <a className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Support</a>
          </div>
        </div>
        <ChatBot/>
      </footer>

    </>
  );
}
