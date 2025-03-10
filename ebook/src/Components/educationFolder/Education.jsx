
import React, { useState } from "react";
import { Link } from "react-router-dom";
import stateImg from "./EduImg/stateBoardBG.png";
 import cbseImg from "./EduImg/CbseBGImg.jpg";

const Education = () => {
  const [selectedBoard, setSelectedBoard] = useState(""); // Improved readability

  const boards = [
    { image: stateImg, name: "State Board", key: "state-board" },
    { image: cbseImg, name: "CBSE", key: "cbse" },
  ];

  const standards = ["1st Standard", "2nd Standard", "3rd Standard", "4th Standard", "5th Standard"];

  return (
    <div className="py-8">
      {/* 🔹 Board Selection */}
      {!selectedBoard ? (
        <div className="grid grid-cols-2 gap-6 p-6">
          {boards.map((board) => (
            <button
              key={board.key}
              onClick={() => setSelectedBoard(board.key)}
              className="relative group w-full text-center focus:outline-none"
              aria-label={`Select ${board.name}`}
            >
              <img
                src={board.image}
                alt={`${board.name} background`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center rounded-full bg-black bg-opacity-40 transition-opacity duration-300">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{board.name}</h1>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <>
          {/* 🔹 Standards Selection */}
          <h1 className="text-2xl font-bold mb-4 text-center capitalize">
            {selectedBoard.replace("-", " ")} - Choose Standard
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
            {standards.map((standard) => (
              <Link
                key={standard}
                to={`/${selectedBoard}/${standard.replace(/\s/g, "-").toLowerCase()}`}
                className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300"
              >
                {standard}
              </Link>
            ))}
          </div>

          {/* 🔹 Back Button */}
          <button
            onClick={() => setSelectedBoard("")}
            className="mt-4 px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Back to Board Selection
          </button>
        </>
      )}
    </div>
  );
};

export default Education;
