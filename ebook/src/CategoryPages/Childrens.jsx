import React from 'react';
import cbook2Image from "../CategoryPages/img/cbook2.webp"; 

const Childrens = () => {
  return (
    <div>
      <div className="bg-[url('../src/CategoryPages/img/childrenbg.avif')] bg-cover bg-center w-full h-[50vh]">
        <div className=' opaciy-50 h-full'>
          <h1 className='text-5xl text-center pt-60 font-bold text-white'>CHILDREN BOOKS</h1>
        </div>
      </div>    
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-5 w-full h-screen'>
        {[
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          // Add more book objects as needed
        ].map((product, index) => (
          <div key={index} className="text-center w-[125px] h-[110px] py-5 sm:w-[120px] sm:h-[120px] md:w-[210px] md:h-[280px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover mx-auto"
            />
            <h1 className="text-black font-bold">{product.name}</h1>
        <a href='/upload'> 
            <button  className="flex items-center justify-center bg-[#66FCF1] text-[#1F2833] px-4 mt-2 rounded-sm font-bold mx-auto">
               Upload
             </button>
             </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Childrens;