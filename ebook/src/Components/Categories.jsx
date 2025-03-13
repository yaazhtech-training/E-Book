import React from "react";
import childrenImage from "../books/Categoryimg/children.webp";
import literatureImage from "../books/Categoryimg/literature.jpeg";
import selfImg from "./Selfimg/self.jpg";
import educatImage from "../books/Categoryimg/educat.jpeg";
import historyImage from "../books/Categoryimg/history.webp";
import namTamilarImage from "../books/Categoryimg/naam-tamilar-katchi.png";

const categories = [
  { image: childrenImage, alt: "Children's", name: "Children's", navigate: "/Childrens" },
  { image: literatureImage, alt: "Literature", name: "Literature", navigate: "/literature" },
  { image: selfImg, alt: "Self-Improvement", name: "Self-Improvement", navigate: "/self" },
  { image: educatImage, alt: "Education", name: "Education", navigate: "/edu" },
  { image: historyImage, alt: "History", name: "History", navigate: "/History" },
  { image: namTamilarImage, alt: "நாம் தமிழர் கட்சி", name: "நாம் தமிழர் கட்சி", navigate: "/ntk" },
];

const Categories = () => {
  return (
    <div className="bg-[#66FCF1] py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-[#0e2b3b] underline font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          CATEGORIES
        </h1>
        <p className="font-semibold font-serif sm:text-lg md:text-xl">BROWSE GENRES</p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.navigate}
            className="group relative block overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.alt}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
            />

            {/* Overlay with Category Name */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{category.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
