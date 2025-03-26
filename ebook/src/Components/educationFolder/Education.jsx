import React, { useState } from "react";
import { Link } from "react-router-dom";
import stateImg from "./EduImg/stateBoardBG.png";
import cbseImg from "./EduImg/CbseBGImg.jpg";


const Education = () => {
  const [selectedBoard, setSelectedBoard] = useState("");

  const boards = [
    { image: stateImg, name: "State Board", key: "state-board"},
    { image: cbseImg, name: "CBSE", key: "cbse" },
  ];

  const standards = [
    "1st Standard", "2nd Standard", "3rd Standard", "4th Standard",
    "5th Standard", "6th Standard", "7th Standard", "8th Standard",
    "9th Standard", "10th Standard", "11th Standard", "12th Standard",
  ];

  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* 🔹 Board Selection */}
      {!selectedBoard ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-3xl">
          {boards.map((board) => (
            <button
              key={board.key}
              onClick={() => setSelectedBoard(board.key)}
              className="relative group flex flex-col items-center focus:outline-none transition-transform transform hover:scale-110"
              aria-label={`Select ${board.name}`}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <img
                  src={board.image}
                  alt={`${board.name} background`}
                  className="w-full h-full object-cover rounded-full border-6 border-blue-500 shadow-2xl"
                />
                <div className="absolute inset-0 flex justify-center items-center rounded-full bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300">
                  <h1 className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                    {board.name}
                  </h1>
                </div>
              </div>
            </button>
          ))}

        </div>
      ) : (
        <>
          {/* 🔹 Standards Selection */}
          <h1 className="text-3xl font-bold mb-6 text-center capitalize text-gray-800">
            {selectedBoard.replace("-", " ")} - Choose Standard
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {standards.map((standard) => (
              <Link
                key={standard}
                to={`/${selectedBoard}/${standard.replace(/\s/g, "-").toLowerCase()}`}
                className="p-5 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                {standard}
              </Link>
            ))}
          </div>

          {/* 🔹 Back Button */}
          <button
            onClick={() => setSelectedBoard("")}
            className="mt-8 px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg text-lg"
          >
            Back to Board Selection
          </button>
        </>
      )}
    </div>
  );
};

export default Education;
