import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-wide">
          GlobalConsult
        </h1>

        <div className="space-x-6 text-sm md:text-base">
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
      </div>
    </div>
  );
}