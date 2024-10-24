import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle
  const toggle = () => setOpen(!open);

  // SearchBar
  const handleInputChange = (event) => setSearchQuery(event.target.value);

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  return (
    <header className="bg-teal-400 text-gray-800 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-3xl">Yaazh Books</span>
        </div>

        {/* Search Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by title"
            className="w-full px-6 py-1 rounded-md focus:outline-none focus:ring-2"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-3 py-2 rounded-r hover:bg-green-600"
          >
            <FaSearch />
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggle}>
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="/Home" className="hover:text-white">Home</a>
          <a href="/Shop" className="hover:text-white">Language</a>
          <a href="/About" className="hover:text-white">About Us</a>
          <a href="/Contact" className="hover:text-white">Contact Us</a>
          <button className="px-4 py-1 bg-gray-700 text-white rounded font-bold">
            <a href="/Login">Login</a>
            <span> | </span>
            <a href="/Signup">Sign up</a>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Nav */}
      {open && (
        <nav className="md:hidden bg-blue-600 text-white p-3 mt-2 space-y-4">
          <a href="/Home" className="block py-2 hover:text-gray-300">Home</a>
          <a href="/Shop" className="block py-2 hover:text-gray-300">Language</a>
          <a href="/About" className="block py-2 hover:text-gray-300">About Us</a>
          <a href="/Contact" className="block py-2 hover:text-gray-300">Contact Us</a>
          <button className="block w-full bg-gray-700 text-white rounded font-bold p-2">
            <a href="/Login">Login</a> | <a href="/Signup">Sign up</a>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;