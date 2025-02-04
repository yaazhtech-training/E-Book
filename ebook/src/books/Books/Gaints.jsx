import React, { useState } from 'react';
import dragonb1 from '../GaintsBooks/gaint1.png';
import dragonb2 from '../GaintsBooks/gaint2.png';
import dragonb3 from '../GaintsBooks/gaint3.png';
import dragonb4 from '../GaintsBooks/gaint4.png';
import dragonb5 from '../GaintsBooks/gaint5.png';
import dragonb6 from '../GaintsBooks/gaint6.png';
import dragonb7 from '../GaintsBooks/gaint7.png';
import dragonb8 from '../GaintsBooks/gaint8.png';
import dragonb9 from '../GaintsBooks/gaint9.png';
import dragonb10 from '../GaintsBooks/gaint10.png';


const Gaints = () => {
  const images = [
    { src: dragonb1, alt: 'DragonBook1' },
    { src: dragonb2, alt: 'DragonBook2' },
    { src: dragonb3, alt: 'DragonBook3' },
    { src: dragonb4, alt: 'DragonBook4' },
    { src: dragonb5, alt: 'DragonBook5' },
    { src: dragonb6, alt: 'DragonBook6' },
    { src: dragonb7, alt: 'DragonBook7' },
    { src: dragonb8, alt: 'DragonBook8' },
    { src: dragonb9, alt: 'DragonBook9' },
    { src: dragonb10, alt: 'DragonBook10' },
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // State for opening/closing the carousel

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(handlePrev);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setIsOpen(false); // Close the carousel
  };

  if (!isOpen) return null; // Do not render the carousel if it's closed

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

export default Gaints;
