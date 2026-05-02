import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/mrk_logo.jpeg";

const navLinks = ["Home", "Services", "About", "Contacts"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img src={logo} alt="MRK Fitness" className="h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`transition-colors duration-200 ${
                  index === 0
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 pb-4">
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-lg font-medium ${
                    index === 0 ? "text-orange-500" : "text-gray-300"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="bg-orange-500 text-black font-semibold px-8 py-3 rounded-full w-3/4 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
