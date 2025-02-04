
import React from 'react';
import { Link } from 'react-router-dom';
import Gaints from '../books/GaintsBooks/gaint.png';
import dragonbook from "../books/DragonBookImg/dragoB1.png"
import Ballerina from "../books/Ballerina/ballerina.png"



const Childrens = () => {
  const books = [
    {
      image: Gaints,
      alt: 'Gaint wants to play',
      name: 'Gaint wants to play',
      path:'/gaints'
    },
    {
      image: dragonbook,
      alt: 'GragonBook',
      name: 'GragonBook',
      path:'/dragon'
    },
    {
      image: Ballerina,
      alt: 'ballerina',
      name: 'Ballerina ',
      path:'/ballerina'
    },
    // Add more books here if needed
  ];

  return (
    <div>
      <div className="bg-[url('../src/CategoryPages/img/childrenbg.jpg')] bg-cover bg-center w-full h-[50vh]">
        <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
          <h1 className="sm:text-5xl md:text-5xl font-bold text-white">CHILDREN BOOKS</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
        {books.map((book, index) => (
          <div
            key={index}
            className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={book.image}
              alt={book.alt}
              className="w-full h-72 object-cover rounded-xl"
            />
            <h1 className="text-black font-bold mt-3 text-sm sm:text-base">
              {book.name}
            </h1>
            <Link to={book.path}>
              <button className="mt-3 px-4 py-2 bg-[#66FCF1] text-[#1F2833] rounded-sm font-bold hover:bg-[#45E0D3]">
                Read Book
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Childrens;