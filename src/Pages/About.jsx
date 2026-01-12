import React from "react";
import { FaChartLine, FaDesktop } from "react-icons/fa";

const About = () => {
  return (
    <>
    
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">

        
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 flex-1">
         
            <div className="bg-white border-2 border-teal-300 rounded-xl p-6 shadow-lg w-64 flex flex-col items-center text-center hover:-translate-y-2 transition">
              <img
                src="https://www.galaxyfinservices.com/assets/img/about.png"
                alt="Who We Are"
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="text-xl font-bold text-teal-600 mb-2">WHO WE ARE</h3>
              <p className="text-gray-600 text-sm">
                Galaxy Financial services has globally acquired brand recognition and trust as a trading environment for investors.
              </p>
            </div>

          
            <div className="bg-white border-2 border-teal-300 rounded-xl p-6 shadow-lg w-64 flex flex-col items-center text-center hover:-translate-y-2 transition">
              <img
                src="https://www.galaxyfinservices.com/assets/img/mission.png"
                alt="Our Mission"
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="text-xl font-bold text-teal-600 mb-2">OUR MISSION</h3>
              <p className="text-gray-600 text-sm">
                We help our investors with long-term connections, client support, and education to build strong relationships.
              </p>
            </div>

         
            <div className="bg-white border-2 border-teal-300 rounded-xl p-6 shadow-lg w-64 flex flex-col items-center text-center hover:-translate-y-2 transition">
              <img
                src="https://www.galaxyfinservices.com/assets/img/vission.png"
                alt="Our Vision"
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="text-xl font-bold text-teal-600 mb-2">OUR VISION</h3>
              <p className="text-gray-600 text-sm">
                We aim to offer unique trading solutions, respecting client preferences, and building strong partnerships.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start text-center lg:text-left">
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">
              ABOUT US
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-4">
              Forex Trading with <span className="text-teal-600">Galaxy Financial Services Ltd</span>
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              With years of experience in forex trading, our company has built a strong reputation for trust and reliability, committed to ensuring the best trading experience for our clients.
            </p>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#0b1f2a] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">

       
          <div className="flex-1 flex flex-col justify-start text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ABOUT <span className="text-teal-400">GALAXY FINANCIAL SERVICES LTD</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Galaxy Financial Services Ltd has globally acquired brand recognition by promoting a focused trading environment to the investors without any disturbance of interests.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              Galaxy Financial Services Ltd aims to demonstrate its high standards of trust, trading tools, and superior business excellence.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Innovative trade execution by providing the best trading solutions to meet your forex trading experience needs.
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-500">
              <img
                src="https://www.galaxyfinservices.com/assets/img/abtinnerbgsec.jpg"
                alt="Trading Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="w-full bg-[#f6f7f8] py-20">
        <div className="max-w-7xl mx-auto px-6">

      
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-100 text-teal-600 text-xs font-semibold px-4 py-1 rounded-full mb-4">
              OUR CORE VALUE
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Make Us <span className="text-teal-600">Professional</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              With years of experience in forex trading, our company has built a strong
              reputation for trust and reliability, with a commitment to ensuring the best
              trading experience for our clients.
            </p>
          </div>

         
          <div className="flex flex-col md:flex-row gap-6">
           
            <div className="flex-1 bg-teal-500 text-white p-10 flex flex-col justify-center text-center rounded-xl shadow-lg hover:-translate-y-2 transition">
              <div className="flex justify-center mb-6 text-5xl">
                <FaChartLine />
              </div>

              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto">
                Galaxy Financial Services gives you an opportunity to take part in
                global trading and walk on the path of organizational growth and
                progress.
              </p>
            </div>

            <div className="flex-1 bg-[#0f172a] text-white p-10 flex flex-col justify-center text-center rounded-xl shadow-lg hover:-translate-y-2 transition">
              <div className="flex justify-center mb-6 text-5xl text-teal-400">
                <FaDesktop />
              </div>

              <h3 className="text-teal-400 font-semibold mb-3 uppercase tracking-wide">
                Platform
              </h3>

              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto text-gray-200">
                Now you can get superior control over your trading with advanced
                features and trading platform that fulfills the requirements of
                growing currency traders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
