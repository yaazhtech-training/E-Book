// import React from "react";

// import Categories from "./Categories";
// const banners = [
//   {
//     title: "THE ULTIMATE GUIDE TO FREE BOOKS",
//     description: "Welcome To Your Friendly Neighborhood Library .",
//     buttonText: "Read More",
//     buttonText2: "Contact us",
//     imageUrl: "your-image-url-1.jpg",
//   },
// ];

// const Banner = () => {
//   return (
//     <div>
//       <div className="bg-[url('../src/img/bookbg.webp')] bg-bottom bg-cover w-full">
//         {banners.map((banner, index) => (
//           <div className=" h-full text-center text-white justify-center items-center">
//             <div key={index} className="">
//               <h1 className="sm:text-[2rem] md:text-[2rem] lg:text-[3rem] font-sans font-bold">
//                 {banner.title}
//               </h1>
//               <h1 className="sm:text-[1rem] md:text-[1.5rem]  font-bold ">
//                 {banner.description}
//               </h1>
//             </div>
//             <div className="mt-10">
//               <button className="bg-[#66FCF1] hover:text-gray-500 text-white font-bold py-2 px-4 rounded mr-4">
//                 <a href="/About">
//                   {" "}
//                   <script>'./About.jsx'</script>
//                   {banner.buttonText}
//                 </a>
//               </button>
//               <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
//                 <a href="/Contact">
//                   <script>'./Contact.jsx'</script>
//                   {banner.buttonText2}
//                 </a>
//               </button>
//             </div>
//           </div>
//         ))}
//         <Categories />
//       </div>
//     </div>
//   );
// };

// export default Banner;

// Carousel.jsx
import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Categories from "./Categories";
import banner from "../img/banner.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";
import banner4 from "../img/banner4.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const banners = [
    {
      image:banner,
      title: "THE ULTIMATE GUIDE TO FREE BOOKS",
      description: "Welcome To Your Friendly Neighborhood Library .",
      buttonText: "Read More",
      buttonText2: "Contact us",
    },
    {
      image:banner2,
      title: "THE ULTIMATE GUIDE TO FREE BOOKS",
      description: "Welcome To Your Friendly Neighborhood Library .",
      buttonText: "Read More",
      buttonText2: "Contact us",
    },
    {
      image:banner3,
      title: "THE ULTIMATE GUIDE TO FREE BOOKS",
      description: "Welcome To Your Friendly Neighborhood Library .",
      buttonText: "Read More",
      buttonText2: "Contact us",
    },
    {
      image:banner4,
      title: "THE ULTIMATE GUIDE TO FREE BOOKS",
      description: "Welcome To Your Friendly Neighborhood Library .",
      buttonText: "Read More",
      buttonText2: "Contact us",
    },
  ];

  return (
    <>
    <div>
      {/* Carousel */}
      <div className="w-full">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              {/* Responsive Image */}
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[70vh] object-cover object-end rounded-lg shadow-md"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center  lg:justify-end text-center px-4">
                {/* Title */}
                {banner.title && (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-300 font-serif underline decoration-transparent decoration-2">
                    {banner.title}
                  </h1>
                )}
                {/* Text */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-600 font-serif">
                  {banner.title}
                </h1>
                {/* Subtext */}
                <p className="mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-200">
                  {banner.description}
                </p>
                {/* Buttons */}
                <div className="mb-5 flex flex-wrap justify-center gap-4">
                 <a href="/Shop">
                 <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    Read More
                  </button>
                 </a>
                  <a href="/Contact">
                  <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
    <Categories/>
    </>
  );
};

export default Home;
