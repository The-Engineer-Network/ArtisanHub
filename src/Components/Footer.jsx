const Footer = () => {
    return (
      // FOOTER
      <footer className="bg-gray-900 text-white py-8 pb-4">
        <div className="max-w-7xl mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/src/assets/logo2.jpeg"
                  alt="ArtisanHub Logo"
                  className="w-12 h-15 object-contain"
                />
                <span className="text-2xl font-bold font-aladin text-white-800">
                  Artisan<span className="text-orange-600">Hub</span>
                </span>{" "}
              </div>
              <p className="text-white-400">
                Connecting skilled artisans with customers across Nigeria
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl">For Customers</h4>
              <ul className="space-y-2 text-white-400">
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Find Artisans
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  How It Works
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Safety Tips
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-2xl">For Artisans</h4>
              <ul className="space-y-2 text-white-400">
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Register
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Pricing
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Success Stories
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-2xl">Support</h4>
              <ul className="space-y-2 text-white-400">
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Help Center
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Contact Us
                </li>
                <li className="hover:text-orange-500 cursor-pointer transition">
                  Report Issue
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center text-gray-300">
            <p>&copy; 2025 ArtisanHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
};

export default Footer;