import React from "react";

const Categories = () => {
  return (
    <div>
      <h1 className="text-center sm:text-[1.5rem] text-[#0e2b3b] md:text-[3rem] underline font-bold">
        CATEGORIES
      </h1>
      <p className="sm:text-[1rem] sm:text-cneter md:text-center lg:text-start md:text-[1.5rem] font-semibold pl-5 font-serif">
        BROWSE GENRES
      </p>

      <div className="flex flex-wrap justify-center md:justify-evenly gap-6 p-5">
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\children.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">Children's</h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\education.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">Education</h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\action.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">
              Action & Adventure
            </h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\science.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">
              Science Fiction
            </h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\horror.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">Horror</h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\mystery.png')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">
              Mystery & Thriller
            </h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\fantasy.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">Fantasy</h1>
          </div>
        </div>
        <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\books\history.webp')] bg-cover bg-center w-[125px] h-[125px] sm:w-[120px] sm:h-[120px] md:w-[300px] md:h-[250px]  object-cover">
          <div className="place-items-center bg-black opacity-50 ">
            <h1 className="text-white text-center sm:text-2xl md:text-3xl p-2">History</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;