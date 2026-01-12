import { useState, useEffect } from "react";
import hero1 from "../assets/trade2minGalxy.png";
import hero2 from "../assets/baneq2galaxy.png"
import ibImg from "../assets/commision.jpg"

export default function Home() {

  const images = [hero1, hero2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whyUsCards = [
    { title: "0.1 Pips", subtitle: "Low Spreads From", icon: "📊" },
    { title: "500", subtitle: "Leverage Up to", icon: "⚙️" },
    { title: "70+", subtitle: "Instruments", icon: "🖥️" },
    { title: "True", subtitle: "ECN / STP", icon: "💱" },
    { title: "Easy", subtitle: "Funding", icon: "🤝" },
  ];

  const steps = [
    { title: "Register", desc: "Register your trading account.", icon: "🪪" },
    { title: "Fund", desc: "Add funds easily & securely.", icon: "💰" },
    { title: "Trade", desc: "Complete KYC & start trading.", icon: "📈" },
  ];

  const markets = [
    { title: "FOREX", desc: "Trade 41+ forex pairs.", icon: "🌍" },
    { title: "CFD", desc: "Multiple CFD instruments.", icon: "📊" },
    { title: "COMMODITIES", desc: "Gold, Silver, Oil & more.", icon: "🪙" },
    { title: "CRYPTO", desc: "Popular crypto CFDs.", icon: "₿" },
  ];

  return (
    <>
     
      <section className="bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Start forex trading in minutes with <br />
              <span className="text-yellow-400">
                Galaxy Financial Services
              </span>
            </h1>

            <p className="mt-4 text-gray-300">
              Premier Forex Broker for global traders.
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition">
              GET STARTED
            </button>
          </div>

          <div className="relative w-full max-w-md">
            <img
              src={images[current]}
              alt="Hero"
              className="w-full transition-all duration-700"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full ${
                    current === i ? "bg-yellow-400" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <div className="bg-gray-900 text-white overflow-hidden py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-4">
          <span>US 100 25539.4</span>
          <span>EUR/USD 1.16681</span>
          <span>Bitcoin 91814</span>
          <span>Ethereum 3153</span>
          <span>S&P 500 6025.3</span>
          <span>US 100 25539.4</span>
          <span>EUR/USD 1.16681</span>
        </div>
      </div>

   
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Forex Trading with{" "}
          <span className="text-teal-600">Galaxy Financial</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Advanced technology & tight spreads.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {whyUsCards.map((c, i) => (
            <div
              key={i}
              className="bg-white w-48 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Start Forex Trading{" "}
            <span className="text-teal-600">In Minutes</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Simple steps to start your journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white w-72 p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className="bg-linear-to-b from-[#0b2a3b] to-[#071d2a] py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Range of <span className="text-teal-400">Market</span>
          </h2>
          <p className="text-gray-300 mt-3">
            70+ instruments across global markets.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((m, i) => (
            <div
              key={i}
              className="bg-white/90 p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-4">{m.icon}</div>
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{m.desc}</p>
              <button className="bg-teal-600 text-white px-5 py-2 rounded">
                Instruments List
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f6f8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={ibImg}
              alt="IB Program"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Increase Your Revenue Potential <br />
              Become An Introducing Broker With{" "}
              <span className="text-teal-600">
                Galaxy Financial Services
              </span>
            </h2>

            <p className="mt-6 text-gray-600 italic">
              Customised Rebate Scheme | Marketing Tools | Dedicated IB Dashboard
            </p>

            <p className="mt-6 text-gray-700 font-semibold">
              Earn Maximum IB Commission With Galaxy Financial Services*
            </p>

            <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
              Become An IB
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
