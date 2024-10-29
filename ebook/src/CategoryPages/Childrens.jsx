import React from 'react';
import cbook2Image from "../CategoryPages/img/cbook2.webp"; 

const Childrens = () => {
  return (
    <div>
      <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\CategoryPages\img\childrenbg.avif')] bg-cover bg-center w-full h-[50vh]">
        <div className='bg-black opacity-50 h-full'>
          <h1 className='text-5xl text-center pt-60 font-bold text-white'>CHILDREN BOOKS</h1>
        </div>
      </div>    
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full h-screen'>
        {[
          {
            image: cbook2Image,
            alt: "Children of the Rush",
            name: "Children of the Rush",
          },
          // Add more book objects as needed
        ].map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover mx-auto"
            />
            <h1 className="text-black font-bold mt-4">{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Childrens;