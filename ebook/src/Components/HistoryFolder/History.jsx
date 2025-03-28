

import React, { useState } from 'react';

//bg image
 import bgimage from './img/bgimage.webp'

// ///books overView image 
import muhal from './img/muhalImg.jpg'
// import money from './Selfimg/money.webp'
// import mindset from './Selfimg/mindset.jpg'
// import greatgood from './Selfimg/greatgood.jpg'

// //importing a pdf 
 import muhalPdf from './pdf/Muhal.pdf'
// import moneyPdf from './SelfimpPDF/money.pdf'
// import mindsetPdf from './SelfimpPDF/mindset.pdf'
// import greatGoodPdf from './SelfimpPDF/greatGood.pdf'
import { Link } from 'react-router-dom';

const History = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
     { image: muhal, alt: 'Mughal Empire', name: 'Mughal Empire', path: muhalPdf },
    // { image: money, alt: 'Psychology Of Money', name: 'Psychology Of Money', path: moneyPdf },
    // { image: mindset, alt: 'Mind Set', name: 'Mind Set', path: mindsetPdf },
    // { image: greatgood, alt: 'Great To Good', name: 'Great To Good', path: greatGoodPdf },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Background Image Section */}
      {!selectedBook && (
        
         <div style={{ backgroundImage: `url(${bgimage})` }} className="bg-cover bg-bottom w-full h-[50vh]">
          <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
            <h1 className="sm:text-5xl md:text-5xl font-bold text-white">SELF-IMPROVEMENT BOOKS</h1>
          </div>
        </div>
      )}

      {/* Books Grid */}
      {!selectedBook && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <img 
                src={book.image} 
                alt={book.alt} 
                className="w-full h-72 object-cover rounded-xl"
              />
              <h1 className="text-black font-bold mt-3 text-sm sm:text-base">{book.name}</h1>
          <Link to='/showgen'
          state={{
            book:book,
          }}>
          <button
                onClick={() => setSelectedBook(book.path)}
                className="mt-3 px-5 py-2 bg-[#66FCF1] text-[#1F2833] rounded-lg font-bold hover:bg-[#45E0D3] transition duration-300 shadow-md"
              >
                Read Book
              </button>
          </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default  History;
