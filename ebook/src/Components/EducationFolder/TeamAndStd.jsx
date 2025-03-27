// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import bgimage from "./EduImg/stateBoardBG.png";
// import BooksData from './BookData';

// const TeamsAndBooks = () => {
//   const { board, standard } = useParams();
//   const terms = ["Term 1", "Term 2", "Term 3"]; // Keep term selection for state board

//   const [selectedTerm, setSelectedTerm] = useState(null);

//   const [selectedSubject, setSelectedSubject] = useState(null);

//   const books = BooksData();

//   const isCBSE = board.toLowerCase() === "cbse";
//   const isStateBoard = board.toLowerCase() === "state-board";
//   const stdNumber = parseInt(standard);
  
//   //  CBSE Always chapter-wise (No term)
//   const isGeneralBook = isCBSE && stdNumber >= 1 && stdNumber <= 12;

//   //  State Board (8-12) should NOT use terms
//   const isStateWithoutTerm = isStateBoard && stdNumber >= 8 && stdNumber <= 12;

//   return (
//     <div className="p-6 w-full h-full">
//       {/* 🔹 Show Term selection ONLY for State Board (Below 8th Standard) */}
//       {!selectedTerm && isStateBoard && !isStateWithoutTerm ? (
//         <>
//           <h1 className="text-2xl font-bold mb-4">{board.toUpperCase()} - {standard} - Choose Term</h1>
//           <div className="mx-96 grid grid-rows-3 gap-4">
//             {terms.map((term, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedTerm(term)}
//                 className="p-5 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300 shadow-lg"
//               >
//                 {term}
//               </button>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="w-full h-full flex flex-col">
//           <div
//             style={{ backgroundImage: `url(${bgimage})` }}
//             className="bg-cover bg-top w-full h-[50vh]"
//           >
//             <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
//               <h1 className="sm:text-5xl md:text-5xl font-bold text-white">
//                 {standard} - {isGeneralBook ? "General Books" : isStateBoard && !isStateWithoutTerm ? selectedTerm + " - Subjects" : "Subjects"}
//               </h1>
//             </div>
//           </div>

//           {/* 🔹 Display Books (CBSE: Chapters, State Board: Subjects) */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
//             {books
//               .filter((book) => 
//                 book.board === board &&
//                 book.standard === standard &&
//                 (!isStateBoard || isStateWithoutTerm || book.term === selectedTerm) // State Board (8-12) ignores term
//               )
//               .map((book, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
//                 >
//                   <img src={book.image} alt={book.name} className="w-full h-72 object-cover rounded-xl" />
//                   <h1 className="text-black font-bold mt-3 text-sm sm:text-base">
//                     {book.name} {isCBSE ? `- ${book.chapter}` : ""}
//                   </h1>
//                   <Link to="/show" state={{ book }}>
//                     <button className="mt-3 px-5 py-2 bg-[#66FCF1] text-[#1F2833] rounded-lg font-bold hover:bg-[#45E0D3] transition duration-300 shadow-md">
//                       Read {isCBSE ? "Chapter" : "Book"}
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamsAndBooks;
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import bgimage from "./EduImg/stateBoardBG.png";
import BooksData from './BookData';

const TeamsAndBooks = () => {
  const { board, standard } = useParams();
  const terms = ["Term 1", "Term 2", "Term 3"]; // Keep term selection for state board

  const [selectedTerm, setSelectedTerm] = useState(null);

  const [selectedSubject, setSelectedSubject] = useState(null);

  const books = BooksData();

  const isCBSE = board.toLowerCase() === "cbse";
  const isStateBoard = board.toLowerCase() === "state-board";
  const stdNumber = parseInt(standard);
  
  //  CBSE Always chapter-wise (No term)
  const isGeneralBook = isCBSE && stdNumber >= 1 && stdNumber <= 12;

  //  State Board (8-12) should NOT use terms
  const isStateWithoutTerm = isStateBoard && stdNumber >= 8 && stdNumber <= 12;

  
return (
  <div className="p-6 w-full h-full">
    {!selectedTerm && isStateBoard && !isStateWithoutTerm ? (
      <>
        {/* Term Selection for State Board */}
        <h1 className="text-2xl font-bold mb-4">{board.toUpperCase()} - {standard} - Choose Term</h1>
        <div className="mx-96 grid grid-rows-3 gap-4">
          {terms.map((term, index) => (
            <button
              key={index}
              onClick={() => setSelectedTerm(term)}
              className="p-5 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              {term}
            </button>
          ))}
        </div>
      </>
    ) : (
      <div className="w-full h-full flex flex-col">
        <div style={{ backgroundImage: `url(${bgimage})` }} className="bg-cover bg-top w-full h-[50vh]">
          <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
            <h1 className="sm:text-5xl md:text-5xl font-bold text-white">
              {standard} - {isGeneralBook ? "Subjects" : isStateBoard && !isStateWithoutTerm ? selectedTerm + " - Subjects" : "Subjects"}
            </h1>
          </div>
        </div>

        {/* Show Subjects first for CBSE */}
        {isCBSE && !selectedSubject ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
            {books
              .filter(book => book.board === board && book.standard === standard)
              .reduce((uniqueSubjects, book) => {
                if (!uniqueSubjects.some(sub => sub.name === book.name)) {
                  uniqueSubjects.push(book);
                }
                return uniqueSubjects;
              }, [])
              .map((subject, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSubject(subject.name)}
                  className="p-5 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                  {subject.name}
                </button>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-5">
            {books
              .filter(book => 
                book.board === board &&
                book.standard === standard &&
                (!isStateBoard || isStateWithoutTerm || book.term === selectedTerm) &&
                (!isCBSE || book.name === selectedSubject) // Show only selected subject chapters
              )
              .map((book, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <img src={book.image} alt={book.name} className="w-full h-72 object-cover rounded-xl" />
                  <h1 className="text-black font-bold mt-3 text-sm sm:text-base">
                    {book.name} {isCBSE ? `- ${book.chapter}` : ""}
                  </h1>
                  <Link to="/show" state={{ book }}>
                    <button className="mt-3 px-5 py-2 bg-[#66FCF1] text-[#1F2833] rounded-lg font-bold hover:bg-[#45E0D3] transition duration-300 shadow-md">
                      Read {isCBSE ? "Chapter" : "Book"}
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    )}
  </div>
);
};

export default TeamsAndBooks;
