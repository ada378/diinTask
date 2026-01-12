import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
   
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 text-teal-600 text-sm px-4 py-1 rounded-full mb-4">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We Love to hear <span className="text-teal-600">From You</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            If you have any queries on our product or services, feel free to contact us
            or drop your info in the form below. Our team will get in touch with you shortly!
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-8">
          
       
          <div className="space-y-8">
            <div>
              <h3 className="text-teal-600 font-semibold text-lg mb-2">
                Registered Address
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet,
                Saint Lucia P.O. Box 838, Castries, Saint Lucia. <br />
                Registration Number: 2025-00598
              </p>
            </div>

            <div>
              <h3 className="text-teal-600 font-semibold text-lg mb-2">
                Physical Address
              </h3>
              <p className="text-gray-600 text-sm">
                26 Nikoloz Baratashvili Street, Office 78, Batumi 6000 Georgia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-3 bg-teal-600 text-white px-4 py-3 rounded-md w-fit">
                <span>📞</span>
                <span className="text-sm">+56226564108</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-600 text-white px-4 py-3 rounded-md w-fit">
                <span>✉️</span>
                <span className="text-sm">support@galaxyfinservices.com</span>
              </div>
            </div>
          </div>

        
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Your Number"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

           
            <div className="border rounded-md p-4 flex items-center gap-3 w-fit">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">I'm not a robot</span>
            </div>

            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;