export default function Services() {
  const services = [
    {
      title: "Forex Trading",
      desc: "Trade the largest and most liquid financial market with over 40 major, minor and exotic currency pairs.",
    },
    {
      title: "CFD Trading",
      desc: "Trade Contracts for Difference on global markets including indices, commodities, and more.",
    },
    {
      title: "Commodities & Indices",
      desc: "Access essential global markets such as Gold, Silver, Oil, S&P 500 and more for diversified trading.",
    },
    {
      title: "Crypto CFDs",
      desc: "Trade popular cryptocurrencies like Bitcoin and Ethereum with competitive financing and execution.",
    },
    {
      title: "Introducing Broker Program",
      desc: "Join our IB program and earn rebates and commission with dedicated marketing tools and dashboard.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Our Services
        </h1>
        <p className="text-gray-600 mb-12">
          Galaxy Financial Services Ltd offers a wide range of trading services that empower traders across global markets. Whether you're trading Forex or diversifying into CFDs, commodities, indices, or cryptocurrencies — explore tailored conditions for all trading styles.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-2"
            >
              <h2 className="text-2xl font-semibold text-teal-600 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
