export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 mt-12">

      
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm leading-relaxed">
        <h3 className="text-lg font-semibold mb-2">Disclaimers:</h3>
        <p>
          Galaxy Financial Services Ltd does not provide or facilitate business
          services or transactions to residents of the USA, UAE, North Korea,
          Iran, Myanmar or any other country subject to international sanctions.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Risk Warning:</h3>
        <p>
          The financial products offered via this website include digitals,
          contracts for difference (CFDs), and other complex derivatives.
          Trading CFDs carries a high level of risk and may not be suitable for
          all investors. You should never invest money that you cannot afford
          to lose.
        </p>

        <p className="mt-4">
          Forex and CFDs are complex instruments and come with a high risk of
          losing money rapidly due to leverage. 70% of retail investor accounts
          lose money when trading CFDs with this provider.
        </p>
      </div>

      <hr className="border-gray-600" />

    
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        
        <div>
          <h4 className="text-lg font-semibold mb-3">Address</h4>
          <p className="text-sm">
            <strong>Registered Address:</strong><br />
            Ground Floor, The Sotheby Building, Rodney Bay,<br />
            Gros-Islet, Saint Lucia, P.O. Box 838
          </p>
          <p className="text-sm mt-2">
            <strong>Registration Number:</strong> 2025-00598
          </p>
          <p className="text-sm mt-2">
            <strong>Physical Address:</strong><br />
            26 Nikoloz Baratashvili Street,<br />
            Office 78, Batumi 6000, Georgia
          </p>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Trading</li>
            <li>Channel Partner</li>
            <li>Academy</li>
            <li>Tools</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Instruments List</h4>
          <ul className="space-y-2 text-sm">
            <li>Forex</li>
            <li>Metals</li>
            <li>Oil Commodities</li>
            <li>Spot Index</li>
            <li>Cryptocurrency</li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-lg font-semibold mb-3">Other Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Economic Calendar</li>
            <li>Market News</li>
            <li>Terms of Use</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

  
      <div className="bg-blue-950 text-center py-4 text-sm">
        © {new Date().getFullYear()} Galaxy Financial Services Ltd. All Rights Reserved
      </div>

    </footer>
  );
}
