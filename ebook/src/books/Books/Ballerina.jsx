import React, { useState } from 'react';
import ballerina1 from '../Ballerina/ballerina1.png';
import ballerina2 from '../Ballerina/ballerina2.png';
import ballerina3 from '../Ballerina/ballerina3.png';
import ballerina4 from '../Ballerina/ballerina4.png';
import ballerina5 from '../Ballerina/ballerina5.png';
import ballerina6 from '../Ballerina/ballerina6.png';



const Ballerina = () => {
  const images = [
    { src:ballerina1, alt: 'ballerina1' },
    { src:ballerina2, alt: 'ballerina2' },
    { src:ballerina3, alt: 'ballerina3' },
    { src:ballerina4, alt: 'ballerina4' },
    { src:ballerina5, alt: 'ballerina5' },
    { src:ballerina6, alt: 'ballerina6' },
  
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // State for opening/closing the carousel

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <button
        onClick={handlePrev}
        className="absolute left-4 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &larr;
      </button>
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text-lg font-semibold bg-white  rounded-full px-4 py-2">
  {currentIndex + 1} / {images.length}
</div>

      </div>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &rarr;
      </button>
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-xl bg-red-500 p-2 rounded-full hover:bg-red-700 focus:outline-none"
      >
        X
      </button>
    </div>
  );
};

export default Ballerina;
