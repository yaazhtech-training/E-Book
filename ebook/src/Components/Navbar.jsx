import React, { useState } from "react";

const Navbar = () => {

  return (
    <header className="bg-[#66FCF1] text-[#1F2833] p-3">

      <div className="container mx-auto flex justify-between items-center"> 

        <div className="flex text-center text-2xl font-bold basis-1/3">
          <span className="text-[3rem]">Yaazh Books</span>
        </div>

        <nav className="hidden md:flex basis-2/3 font-bold justify-around items-center">

          <a href="/Home" className="hover:text-white">Home</a>
          <a href="/Shop" className="hover:text-white">Language</a>
          <a href="/About" className="hover:text-white">About us</a>
          <a href="/Contact" className="hover:text-white">Contact us</a>

          <button className="px-4 py-1 bg-[#52585f] text-white rounded-sm font-bold">
            <a href="/Login" className="">Login</a>
               <span> | </span>
            <a href="/Signup" className="">Sign up</a>
          </button>

        </nav>

      </div> 

    </header>
  );
};

export default Navbar;
