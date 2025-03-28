import React  from 'react';
import Modal from 'react-modal';

///books overView image 
import ballerinaImg from './booksImg/ballerina.png'
import gaint from './booksImg/gaint.png'
import dragon from './booksImg/dragon.png'
import magnet from './booksImg/magnet magic.png'
import thebesttube from './booksImg/thebesttube.png'
import theFish from './booksImg/theFish.png'
import thelostbee from './booksImg/thelostbee.png'


//importing a pdf 
import dragonpdf from "./PDFile/DragonSchool.pdf";
import Gaintpdf from "./PDFile/Gaint.pdf";
import Ballerinapdf from "./PDFile/Ballerina.pdf";
import Magnetmagicpdf from "./PDFile/MagnetMagic.pdf";
import thebesttubepdf from "./PDFile/thebesttube.pdf";
import thefishpdf from "./PDFile/thefish.pdf";
import thelostbeepdf from "./PDFile/thelostbee.pdf";
import { Link } from 'react-router-dom';





Modal.setAppElement('#root'); // Set the root element for accessibility

const Childrens = () => {


  const books = [
    { image:gaint,
       alt: 'Gaint wants to play',
       name: 'Gaint wants to play', 
       path: Gaintpdf },

    { image: dragon,
      alt: 'Dragon Book',
       name: 'Dragon Book', 
       path: dragonpdf },

    { image: ballerinaImg,
       alt: 'Ballerina',
        name: 'Ballerina',
         path: Ballerinapdf },

         { image: magnet,
          alt: 'Magnet Magic',
           name: 'Magnet Magic',
            path: Magnetmagicpdf },
            
            { image: thebesttube,
              alt: 'The Best Tube',
               name: 'The Best Tube',
                path: thebesttubepdf },

                { image:theFish,
                  alt: 'The Little Fish Goes Deep',
                   name: 'The Little Fish Goes Deep',
                    path: thefishpdf },

                    { image:thelostbee,
                      alt: 'The Lost Bee',
                       name: 'The Lost Bee',
                        path: thelostbeepdf },
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
          <div key={index} className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
            <img src={book.image} alt={book.alt} className="w-full h-72 object-cover rounded-xl" />
            <h1 className="text-black font-bold mt-3 text-sm sm:text-base">{book.name}</h1>
          <Link to='/showgen'
          state={{
            book:book,
          }}>
          <button
              
              className="mt-3 px-4 py-2 bg-[#66FCF1] text-[#1F2833] rounded-sm font-bold hover:bg-[#45E0D3]"
            >
              Read Book
            </button></Link>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Childrens;
