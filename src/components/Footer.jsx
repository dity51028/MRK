import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/mrk_logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Logo & description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src={logo} alt="MRK Fitness" className="h-16 w-auto" />
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Support Your Need To Much Fitness Goal
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Help / FAQ
                </a>
              </li>
              <li>Phone: 8944893938</li>
              <li>Location: Chanditala</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:bg-orange-500 hover:text-black transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:bg-orange-500 hover:text-black transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 text-center bg-orange-500 text-black font-semibold rounded-t-lg mt-0">
          © 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
