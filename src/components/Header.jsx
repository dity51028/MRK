// src/components/Header.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/mrk_logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Services", "About", "Contacts"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="MRK Fitness Logo" className="h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide ${
                  i === 0
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`block text-lg font-medium ${
                  i === 0
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block mt-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold text-center px-6 py-3 rounded-full transition"
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
