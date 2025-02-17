
import React from "react";
import childrenImage from "../books/Categoryimg/children.webp";
import literatureImage from "../books/Categoryimg/literature.jpeg";
import adventureImage from "../books/Categoryimg/adventure.jpeg";
import sportsImage from "../books/Categoryimg/sports.jpg";
import educatImage from "../books/Categoryimg/educat.jpeg";
import fantasyImage from "../books/Categoryimg/fantasy.webp";
import horrorImage from "../books/Categoryimg/horror.webp";
import historyImage from "../books/Categoryimg/history.webp";
import mysteryImage from "../books/Categoryimg/mystery.png";
import selfImg from "./Selfimg/self.jpg";
import scienceImage from "../books/Categoryimg/science.webp";
import biographyImage from "../books/Categoryimg/biography.jpg";

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
      navigate: "/literature",
    },

    {
      image: selfImg,
      alt: "SelfImporvement",
      name: "Self-Imporvement",
      navigate: "/self",
    },
    {
      image: educatImage,
      alt: "Education",
      name: "Education",
      navigate: "/edu",
    },
    {
      image: historyImage,
      alt: "History",
      name: "History",
      navigate: "/History",
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
    <div>
    <div className="bg-[#66FCF1] py-8">
     
     <div>
     <h1 className="text-center text-[#0e2b3b] underline font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        CATEGORIES
      </h1>
      <p className="font-semibold pl-5 font-serif text-center sm:text-lg md:text-xl lg:text-start">
        BROWSE GENRES
      </p>
     </div>

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
    </div>
  );
};

export default Categories;