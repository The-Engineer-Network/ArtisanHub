import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for selected langage
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const languages = ["English", "Yoruba", "Hausa", "Igbo", "Pidgin"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVIGATION */}

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-0">
              <Link to="/">
                <img
                  src="/src/assets/logo2.jpeg"
                  alt="ArtisanHub Logo"
                  className="w-12 h-10 object-contain"
                />
              </Link>

              <span className="text-2xl font-bold font-aladin text-gray-800">
                <Link to="/">
                  Artisan<span className="text-orange-600">Hub</span>
                </Link>
              </span>
            </div>

            <div className="gap-6 flex-1 flex justify-center">
              <Link to="/about" className="items-left font-aladin text-1xl  text-black  hover:text-orange-700 transition font-bold">
                About us
              </Link>

              <Link to="/faq" className=" font-aladin text-1xl  text-black  hover:text-orange-700 transition font-bold">
                FAQ
              </Link>
              <Link to="/contact" className=" font-aladin text-1xl  text-black  hover:text-orange-700 transition font-bold">
                Contact
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">

              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <Link to="/join">
                <button className="px-6 py-2 bg-orange-700 font-aladin text-white rounded-lg hover:bg-orange-700 transition">
                  Join as Artisan
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  /* X icon when menu is open */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  /* Hamburger icon when menu is closed */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>

                <button className="w-full px-6 py-3 bg-orange-700 font-aladin text-white rounded-lg hover:bg-orange-700 transition">
                  Join as Artisan
                </button>

              </div>
            </div>
          )}
        </div>
      </nav>
    </>

  )
}

export default Navbar;