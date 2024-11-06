import React, { useState } from "react";
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
const banners = [
  {
    title: "THE ULTIMATE GUIDE TO FREE BOOKS",
    description:
      "Welcome To Your Friendly Neighborhood Library .",
    buttonText: "Read More",
    buttonText2: "Contact us",
    imageUrl: "your-image-url-1.jpg",
  },
];

const Banner = () => {
  
  return (
     <div className="bg-[url('../src/img/bookbg.webp')] bg-bottom bg-cover
 h-[60vh] relative w-full overflow-hidden">
{banners.map((banner, index) => (
      <div className="bg-black bg-opacity-50 h-full flex flex-col text-center text-white justify-center items-center">
      

        <div  key={index} className="">
          <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-sans font-bold">
            {banner.title}
          </h1>
          <h1 className="sm:text-[1rem] md:text-[1.5rem]  font-bold ">
            {banner.description}
          </h1>
        </div>
        <div className="mt-10">
          <button className="bg-[#66FCF1] hover:text-gray-500 text-white font-bold py-2 px-4 rounded mr-4">
            <a href="">{banner.buttonText}</a>
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            <a href="">{banner.buttonText2}</a>
          </button>
        </div>
      
      </div>
    ))}
    </div>
  );
};

export default Banner;
