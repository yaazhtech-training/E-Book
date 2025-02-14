import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

//bg image
import bgimage from "../Components/Selfimg/bgimage.webp";


///books overView image 
import atomic from './Selfimg/atomic.jpg'
import money from './Selfimg/money.webp'
import mindset from './Selfimg/mindset.jpg'
import greatgood from './Selfimg/greatgood.jpg'



//importing a pdf 
import atomicPdf from './SelfimpPDF/atomic.pdf'
import moneyPdf from './SelfimpPDF/money.pdf'
import mindsetPdf from './SelfimpPDF/mindset.pdf'
import greatGoodPdf from './SelfimpPDF/greatGood.pdf'






Modal.setAppElement('#root'); // Set the root element for accessibility

const Childrens = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef(null);

  const books = [
    { image:atomic,
       alt: 'Atomic Habits',
       name: 'Atomic Habits', 
       path: atomicPdf },

    { image:money,
      alt: 'Psyology Of Money',
       name: 'Psyology Of Money', 
       path: moneyPdf },

    { image:mindset,
       alt: 'Mind Set',
        name: 'Mind Set',
         path:mindsetPdf},

         { image: greatgood,
          alt: 'Great To Good',
           name: 'Great To Good',
            path: greatGoodPdf },
            
           
  ];
  const openModal = (path) => {
    setSelectedBook(path);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBook(null);
  };

  const toggleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div>
    <div style={{ backgroundImage: `url(${bgimage})` }} className="bg-cover bg-top w-full h-[50vh]">

        <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
          <h1 className="sm:text-5xl md:text-5xl font-bold text-white">CHILDREN BOOKS</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
        {books.map((book, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-xl transition-shadow">
            <img src={book.image} alt={book.alt} className="w-full h-72 object-cover rounded-xl" />
            <h1 className="text-black font-bold mt-3 text-sm sm:text-base">{book.name}</h1>
            <button
              onClick={() => openModal(book.path)}
              className="mt-3 px-4 py-2 bg-[#66FCF1] text-[#1F2833] rounded-sm font-bold hover:bg-[#45E0D3]"
            >
              Read Book
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-4xl p-5 rounded-lg shadow-xl relative">
          <button onClick={closeModal} className="absolute top-2 right-2 text-black text-2xl">&times;</button>
          <h2 className="text-xl font-bold mb-3">Reading: {selectedBook}</h2>
          <iframe
            ref={iframeRef}
            src={`${selectedBook}#toolbar=0&navpanes=0&scrollbar=1`}
            title="PDF Viewer"
            className="w-full h-[80vh] border-2 border-gray-300 rounded-md"
          ></iframe>
          <button
            onClick={toggleFullScreen}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-sm font-bold hover:bg-blue-500"
          >
            Fullscreen
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Childrens;
