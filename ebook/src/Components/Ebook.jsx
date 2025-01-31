import React, { useState } from "react";
import BookViewer from "./BookViewer";

const ebooks = [
  { id: 1, title: "Book 1", image: "/books/book1.jpg", pdf: "/books/book1.pdf" },
  { id: 2, title: "Book 2", image: "/books/book2.jpg", pdf: "/books/book2.pdf" },
];

const EbookList = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Ebooks</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ebooks.map((book) => (
          <div
            key={book.id}
            className="cursor-pointer"
            onClick={() => setSelectedBook(book.pdf)}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
            <p className="text-center mt-2 font-semibold">{book.title}</p>
          </div>
        ))}
      </div>

      {selectedBook && <BookViewer pdfFile={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
};

export default EbookList;
