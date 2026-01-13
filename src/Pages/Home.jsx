import { useState, useEffect, useRef } from "react";
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
    { title: "0.1 Pips", subtitle: "Low Spreads From", icon: "pi pi-chart-line" },
    { title: "500", subtitle: "Leverage Up to", icon: "pi pi-sliders-h" },
    { title: "70+", subtitle: "Instruments", icon: "pi pi-desktop" },
    { title: "True", subtitle: "ECN / STP", icon: "pi pi-sync" },
    { title: "Easy", subtitle: "Funding", icon: "pi pi-wallet" },
  ];

  const steps = [
    { title: "Register", desc: "Register your trading account.", icon: "pi pi-user-plus" },
    { title: "Fund", desc: "Add funds easily & securely.", icon: "pi pi-credit-card" },
    { title: "Trade", desc: "Complete KYC & start trading.", icon: "pi pi-chart-bar" },
  ];

  const markets = [
    { title: "FOREX", desc: "Trade 41+ forex pairs.", icon: "pi pi-globe" },
    { title: "CFD", desc: "Multiple CFD instruments.", icon: "pi pi-chart-line" },
    { title: "COMMODITIES", desc: "Gold, Silver, Oil & more.", icon: "pi pi-briefcase" },
    { title: "CRYPTO", desc: "Popular crypto CFDs.", icon: "pi pi-bitcoin" },
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
    <section className="relative overflow-hidden bg-[#05080f] text-white">
     
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28 flex flex-col md:flex-row items-center gap-12">
      
        <div
          className={`relative max-w-xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 shadow-2xl transition-all duration-1000 ${
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
            <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold px-8 py-3 rounded-lg transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.02]">
              <span className="relative z-10 text-white">Get started</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-white/10" />
            </button>
            <a
              href="#markets"
              className="text-teal-300 hover:text-teal-200 transition-colors underline-offset-4 hover:underline"
            >
              View markets
            </a>
          </div>

 
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <span className="pi pi-shield text-teal-300" />
              <span>Secure & compliant</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <span className="pi pi-bolt text-teal-300" />
              <span>Fast execution</span>
            </div>
          </div>
        </div>

    
        <div
          className={`relative w-full max-w-md transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <img
            src={images[current]}
            alt="Hero"
            className="w-full rounded-2xl shadow-2xl animate-float will-change-transform"
          />
        </div>
      </div>

   
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );

  const Ticker = () => (
    <div className="bg-[#0a0f1a] text-white overflow-hidden py-3 border-y border-white/5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
        <span className="text-gray-300 hover:text-white transition-colors">US 100 25539.4</span>
        <span className="text-gray-300 hover:text-white transition-colors">EUR/USD 1.16681</span>
        <span className="text-gray-300 hover:text-white transition-colors">Bitcoin 91814</span>
        <span className="text-gray-300 hover:text-white transition-colors">Ethereum 3153</span>
        <span className="text-gray-300 hover:text-white transition-colors">S&P 500 6025.3</span>
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
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader
            title="Forex trading with"
            accent="Galaxy Financial"
            subtitle="Advanced technology & institutional liquidity."
          />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {whyUsCards.map((c, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 w-52 md:w-56 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-teal-400/40"
              >
                <i className={`${c.icon} text-3xl mb-2 text-teal-400`} />
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.subtitle}</p>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader title="Start forex trading" accent="in minutes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <i className={`${s.icon} text-4xl mb-3 text-teal-400`} />
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
                <button className="mt-5 text-teal-300 hover:text-teal-200 transition-colors underline-offset-4 hover:underline">
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
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeader title="Range of" accent="markets" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {markets.map((m, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-teal-400/40"
              >
                <i className={`${m.icon} text-5xl mb-4 text-teal-400`} />
                <h3 className="text-xl font-semibold text-white">{m.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{m.desc}</p>
                <button className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2 rounded-md transition-transform duration-300 hover:scale-[1.03]">
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
          className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-indigo-500/10" />
            <img
              src={ibImg}
              alt="IB Program"
              className="w-full h-full object-cover transition-transform duration-[900ms] hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              Become an Introducing Broker with{" "}
              <span className="text-teal-400">Galaxy Financial Services</span>
            </h2>
            <p className="mt-6 text-gray-300 italic">
              Customised rebate • Marketing tools • Dedicated dashboard
            </p>
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg transition-transform duration-300 hover:scale-[1.03]">
              Become an IB
            </button>
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
        <div className="max-w-7xl mx-auto px-6 py-10 text-gray-400 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Galaxy Financial Services</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Support</a>
          </div>
        </div>
        <ChatBot/>
      </footer>

    </>
  );
}
