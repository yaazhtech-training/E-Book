import React, { useState } from "react";
import PdfViewer from "./PdfViewer";
import cbook2Image from "../CategoryPages/img/cbook2.webp";
import pdf1 from "./Assetes/pdf1.pdf";
const ChildrensWithPdfViewer = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
 
  // Function to close the PdfViewer
  const handleCloseViewer = () => {
    setShowViewer(false);
    setPdfFile(null);
  };
 
  // Function to open PdfViewer with the selected book's PDF
  const handleViewBook = (pdfUrl) => {
    setPdfFile(pdfUrl);
    setShowViewer(true);
  };
 
  const books = [
    {
      image: cbook2Image,
      alt: "Children of the Rush",
      name: "Children of the Rush",
      pdf: pdf1,
    },
    {
      image: cbook2Image,
      alt: "Another Book",
      name: "Another Book",
      pdf: "/path/to/pdf/another-book.pdf",
    },
  ];
 
  return (
<div>
      {/* Background Section */}
<div className="bg-[url('../src/CategoryPages/img/childrenbg.jpg')] bg-cover bg-center w-full h-[50vh]">
<div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
<h1 className="sm:text-5xl md:text-5xl font-bold text-white">CHILDREN BOOKS</h1>
</div>
</div>
 
      {/* Book Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
        {books.map((book, index) => (
<div
            key={index}
            className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-xl transition-shadow"
>
<img
              src={book.image}
              alt={book.alt}
              className="w-full h-[180px] object-cover rounded-md"
            />
<h1 className="text-black font-bold mt-3 text-sm sm:text-base">{book.name}</h1>
< a href="/pdf">
<button
              className="mt-3 px-4 py-2 bg-[#66FCF1] text-[#1F2833] rounded-sm font-bold hover:bg-[#45E0D3]"
              onClick={() => handleViewBook(book.pdf)} // Pass PDF URL correctly
>
              View Book
</button>
</a>
</div>
        ))}
</div>
 
      {/* Conditionally render PdfViewer */}
      {showViewer && pdfFile && <PdfViewer pdfFile={pdfFile} onClose={handleCloseViewer} />}
</div>
  );
};
 
export default ChildrensWithPdfViewer;