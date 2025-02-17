import React  from 'react';
import Modal from 'react-modal';

//image 
import murudanyagamImg from './litImg/murudanayagam.jpeg'
import PonniyinSelvanImg from './litImg/ponniyinSelvan.jpg'
import tennaliImg from './litImg/tennali.jpg'



//pdf importing...
import murudanyagamPdf from './Assetes/literaturePdf/murudanyagam.pdf';
import PonniyinSelvanPdf from './Assetes/literaturePdf/PonniyinSelvan.pdf';
import TennaliRamanPdf from './Assetes/literaturePdf/tenaliraman.pdf';
import { Link } from 'react-router-dom';




Modal.setAppElement('#root');

const Literature = () => {
  // const [selectedBook, setSelectedBook] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  // const iframeRef = useRef(null);

  const books = [
    { image:murudanyagamImg,
       alt: 'Murudanayagam',
       name: 'Murudanayagam', 
       path: murudanyagamPdf },

    { image: PonniyinSelvanImg,
      alt: 'Ponniyin Selvan',
       name: 'Ponniyin Selvan', 
       path: PonniyinSelvanPdf },

    { image: tennaliImg,
       alt: 'Tennali Raman',
        name: 'Tennali Raman',
         path: TennaliRamanPdf },

  ];
  // const openModal = (path) => {
  //   setSelectedBook(path);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedBook(null);
  // };

  // const toggleFullScreen = () => {
  //   if (iframeRef.current) {
  //     if (iframeRef.current.requestFullscreen) {
  //       iframeRef.current.requestFullscreen();
  //     } else if (iframeRef.current.mozRequestFullScreen) {
  //       iframeRef.current.mozRequestFullScreen();
  //     } else if (iframeRef.current.webkitRequestFullscreen) {
  //       iframeRef.current.webkitRequestFullscreen();
  //     } else if (iframeRef.current.msRequestFullscreen) {
  //       iframeRef.current.msRequestFullscreen();
  //     }
  //   }
  // };

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
        <Link to='/show'
        state={{book:book,}}>    <button
             
        className="mt-3 px-4 py-2 bg-[#66FCF1] text-[#1F2833] rounded-sm font-bold hover:bg-[#45E0D3]"
      >
        Read Book
      </button></Link>
          </div>
        ))}
      </div>

      {/* <Modal isOpen={isOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center p-4">
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
      </Modal> */}
    </div>
  );
};

export default Literature ;
