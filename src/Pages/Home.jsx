import { useState, useEffect } from "react";
import hero1 from "../assets/img2.png";
import ibImg from "../assets/commision.jpg";

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

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-12">
          
          <div
            className={`max-w-xl transition-all duration-1000 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Start forex trading in minutes with <br />
              <span className="text-yellow-400">
                Galaxy Financial Services
              </span>
            </h1>

            <p className="mt-5 text-gray-300">
              Premier Forex Broker for global traders with institutional-grade execution.
            </p>

            <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:scale-105 transition">
              GET STARTED
            </button>
          </div>

          <div
            className={`relative w-full max-w-md transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <img
              src={images[current]}
              alt="Hero"
              className="w-full animate-[float_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="bg-gray-900 text-white overflow-hidden py-3">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-12 whitespace-nowrap px-6">
          <span>US 100 25539.4</span>
          <span>EUR/USD 1.16681</span>
          <span>Bitcoin 91814</span>
          <span>Ethereum 3153</span>
          <span>S&P 500 6025.3</span>
        </div>
      </div>

      {/* ================= WHY US ================= */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Forex Trading with{" "}
          <span className="text-teal-600">Galaxy Financial</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Advanced technology & institutional liquidity.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {whyUsCards.map((c, i) => (
            <div
              key={i}
              className="bg-white w-48 p-6 rounded-xl shadow-lg
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <i className={`${c.icon} text-3xl mb-2 text-teal-600`} />
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Start Forex Trading{" "}
            <span className="text-teal-600">In Minutes</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white w-72 p-8 rounded-xl shadow-lg text-center
              transition-all duration-500 hover:-translate-y-3"
            >
              <i className={`${s.icon} text-4xl mb-3 text-teal-600`} />
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MARKETS ================= */}
      <section className="bg-linear-to-b from-[#0b2a3b] to-[#071d2a] py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Range of <span className="text-teal-400">Market</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((m, i) => (
            <div
              key={i}
              className="bg-white/90 p-8 rounded-xl text-center shadow-lg
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <i className={`${m.icon} text-5xl mb-4 text-teal-600`} />
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{m.desc}</p>
              <button className="bg-teal-600 text-white px-5 py-2 rounded hover:scale-105 transition">
                Instruments List
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IB ================= */}
      <section className="bg-[#f3f6f8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={ibImg}
              alt="IB Program"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Become An Introducing Broker With{" "}
              <span className="text-teal-600">
                Galaxy Financial Services
              </span>
            </h2>

            <p className="mt-6 text-gray-600 italic">
              Customised Rebate | Marketing Tools | Dedicated Dashboard
            </p>

            <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-md hover:scale-105 transition">
              Become An IB
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
