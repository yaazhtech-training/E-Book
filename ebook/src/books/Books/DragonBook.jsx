import React, { useState } from 'react';
import dragonb1 from '../DragonBookImg/dragoB1.png';
import dragonb2 from '../DragonBookImg/dragoB2.png';
import dragonb3 from '../DragonBookImg/dragoB3.png';
import dragonb4 from '../DragonBookImg/dragoB4.png';
import dragonb5 from '../DragonBookImg/dragoB5.png';
import dragonb6 from '../DragonBookImg/dragoB6.png';
import dragonb7 from '../DragonBookImg/dragoB7.png';
import dragonb8 from '../DragonBookImg/dragoB8.png';
import dragonb9 from '../DragonBookImg/dragoB9.png';
import dragonb10 from '../DragonBookImg/dragoB10.png';
import dragonb11 from '../DragonBookImg/dragoB11.png';
import dragonb12 from '../DragonBookImg/dragoB12.png';
import dragonb13 from '../DragonBookImg/dragoB13.png';
import dragonb14 from '../DragonBookImg/dragoB14.png';
import dragonb15 from '../DragonBookImg/dragoB15.png';

const DragonBookCarousel = () => {
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
    { src: dragonb11, alt: 'DragonBook11' },
    { src: dragonb12, alt: 'DragonBook12' },
    { src: dragonb13, alt: 'DragonBook13' },
    { src: dragonb14, alt: 'DragonBook14' },
    { src: dragonb15, alt: 'DragonBook15' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <button
        onClick={handlePrev}
        className="absolute left-4 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &larr;
      </button>
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        &rarr;
      </button>
    </div>
  );
};

export default DragonBookCarousel;