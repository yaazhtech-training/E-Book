// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import BooksData from "./BookData";

// const CBSECategories = () => {
//   const { standard } = useParams();
//   const books = BooksData();

//   // Filter CBSE books by standard
//   const cbseBooks = books.filter(
//     (book) => book.board.toLowerCase() === "cbse" && book.standard === standard
//   );

//   // Get unique categories (Subjects)
//   const categories = [...new Set(cbseBooks.map((book) => book.name))];

//   return (
//     <div className="p-6 w-full h-full">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         CBSE {standard} - Book Categories
//       </h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
//           >
//             <h2 className="text-black font-bold mt-3 text-lg">{category}</h2>
//             <Link to={`/cbse/${standard}/${category.toLowerCase()}`}>
//               <button className="mt-3 px-5 py-2 bg-[#66FCF1] text-[#1F2833] rounded-lg font-bold hover:bg-[#45E0D3] transition duration-300 shadow-md">
//                 View Books
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CBSECategories;