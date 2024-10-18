import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [ Open ,setOpen ] = useState(false);

  const toggle = () => {
      setOpen(!Open);
  };

  return (
    <header className="bg-[#66FCF1] text-[#1F2833] p-5">

      <div className="container mx-auto flex justify-between items-center"> 

        <div className="flex text-center text-2xl font-bold basis-1/3">
          <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Yaazh Books</span>
        </div>

        <div className="md:hidden" onClick={toggle}>
          {Open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <nav className="hidden md:flex basis-2/3 font-bold justify-around items-center">

          <a href="/Home" className="hover:text-white">Home</a>
          <a href="/Shop" className="hover:text-white">Language</a>
          <a href="/About" className="hover:text-white">About us</a>
          <a href="/contact" className="hover:text-white"> <script></script>Contact us</a>

          <button className="px-4 py-1 bg-[#52585f] text-white rounded-sm font-bold">
            <a href="/Login" className="">Login</a>
               <span> | </span>
            <a href="/Signup" className="">Sign up</a>
          </button>

        </nav>

      </div> 
      {Open && (
        <nav className="md:hidden bg-blue-600 text-white p-3 mt-2">
          <a href="/Home" className="block py-2 hover:text-gray-300">Home</a>
          <a href="/shop" className="block py-2 hover:text-gray-300">Language</a>
          <a href="/collections" className="block py-2 hover:text-gray-300">About us</a>
          <a href="/contact" className="block py-2 hover:text-gray-300">Contact Us</a>
          <button className="px-4 py-1 bg-[#52585f] text-white rounded-sm font-bold">
            <a href="/Login" className="">Login</a>
               <span> | </span>
            <a href="/Signup" className="">Sign up</a>
          </button>
        </nav>
      )} 
    </header>
  );
};

export default Navbar;
