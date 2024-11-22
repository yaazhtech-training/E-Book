import React from "react";
import childrenImage from "../books/children.webp";
import literatureImage from "../books/literature.jpeg";
import actionImage from "../books/action.webp";
import adventureImage from "../books/adventure.jpeg";
import sportsImage from "../books/sports.jpg";
import educatImage from "../books/educat.jpeg";
import fantasyImage from "../books/fantasy.webp";
import horrorImage from "../books/horror.webp";
import historyImage from "../books/history.webp";
import mysteryImage from "../books/mystery.png";
import natureImage from "../books/nature.webp";
import scienceImage from "../books/science.webp";
import biographyImage from "../books/biography.jpg";

const Categories = () => {
  const categories = [
    {
      image: childrenImage,
      alt: "Children's",
      name: "Children's",
      navigate: "/Childrens",
    },
    {
      image: literatureImage,
      alt: "Literature",
      name: "Literature",
      navigate: "/Literature",
    },
    {
      image: educatImage,
      alt: "Education",
      name: "Education",
      navigate: "/Education",
    },
    {
      image: scienceImage,
      alt: "Science",
      name: "Science",
      navigate: "/Science",
    },
    {
      image: biographyImage,
      alt: "Biography",
      name: "Biography",
      navigate: "/Biography",
    },
    {
      image: historyImage,
      alt: "History",
      name: "History",
      navigate: "/History",
    },
    {
      image: fantasyImage,
      alt: "Fantasy",
      name: "Fantasy",
      navigate: "/Fantasy",
    },
    {
      image: horrorImage,
      alt: "Horror",
      name: "Horror",
      navigate: "/Horror",
    },
    {
      image: mysteryImage,
      alt: "Mystery",
      name: "Mystery",
      navigate: "/Mystery",
    },
    {
      image: natureImage,
      alt: "Nature",
      name: "Nature",
      navigate: "/Nature",
    },
    {
      image: adventureImage,
      alt: "Adventure",
      name: "Adventure",
      navigate: "/Adventure",
    },
    {
      image: sportsImage,
      alt: "Sports",
      name: "Sports",
      navigate: "/Sports",
    },
  ];

  return (
    <div className="bg-[#66FCF1] py-8">
      {/* Header */}
      <h1 className="text-center text-[#0e2b3b] underline font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        CATEGORIES
      </h1>
      <p className="font-semibold pl-5 font-serif text-center sm:text-lg md:text-xl lg:text-start">
        BROWSE GENRES
      </p>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group py-4 sm:w-full md:w-auto"
          >
            <a href={category.navigate}>
              {/* Image */}
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100  duration-300 flex justify-center items-center rounded-lg">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
                  {category.name}
                </h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;