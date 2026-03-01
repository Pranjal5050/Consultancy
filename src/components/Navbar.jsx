import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg w-full overflow-x-hidden ">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          GlobalConsult
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link to="/booking" className="hover:text-gray-200 transition">
            Book Slot
          </Link>
          <Link to="/admin-login" className="hover:text-gray-200 transition">
            Admin
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-6 pb-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-gray-200"
          >
            About
          </Link>
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block hover:text-gray-200"
          >
            Book Slot
          </Link>
          <Link
            to="/admin-login"
            onClick={() => setIsOpen(false)}
            className="block hover:text-gray-200"
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}