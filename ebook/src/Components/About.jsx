import React from 'react'
import worker from './Assetes/P 2.png'
import yaazh from './Assetes/yaazh.jpg'
import food from './Assetes/food.jpg';
import book from './Assetes/book.avif';


const About = () => {
  return (
    <div className="bg-white">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-4 md:px-16 lg:px-20">
        <div>
          <h2 className="font-semibold text-4xl mt-8 mb-4">
            Yaazh Book Helps You Do the Best Work of Your Life
          </h2>
          <p className="text-xl font-sans">
            Explain the purpose of your site and what sets it apart.
            <br />
            Brief bios of the people behind the site, if applicable.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-lg max-w-xs lg:max-w-sm"
            src={worker}
            alt="Team Member"
          />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="font-semibold text-4xl mb-4">
          The Ultimate Guide To Yaazhbook Library
        </h2>
        <p className="text-lg">
          Yaazh’Books software helps teams increase productivity by 50% and cut down on email by 90%.
        </p>
      </div>

      {/* Team Section */}
      <section className="mt-12 px-4 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src={yaazh}
              alt="Team member 1"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">yaazhTech</h3>
            <h4 className="font-medium text-gray-600">2012-2024</h4>
            <p className="text-gray-700 mt-4">
              Our company originated with young minds taking baby steps into the software development
              world, providing world-class software services for industries.
            </p>
            <a href="https://yaazhtech.com/">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src={book}
              alt="Team member 2"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">Yaazhbook</h3>
            <h4 className="font-medium text-gray-600">2024</h4>
            <p className="text-gray-700 mt-4">
              Launched in 2024, eBooks.com is a popular ebook retailer with a reputation for
              innovation, integrity, and independence.
            </p>
            <a href="">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img
              src={food}
              alt="Team member 3"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mt-4">Aymuni Foods</h3>
            <h4 className="font-medium text-gray-600">2021-2024</h4>
            <p className="text-gray-700 mt-4">
              Food Delivery App Development: Everything You Need to Know About Building a Food Delivery Platform.
            </p>
            <a href="https://foodfly.yaazhtech.com/">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Learn more
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
//       <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
//         {/* Header Section */}
//         <header className="text-center mb-6">
//           <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//           <p className="mt-4 text-gray-600">
//             Learn more about our mission, values, and the team behind our work.
//           </p>
//         </header>

//         {/* Mission Section */}
//         <section className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
//           <p className="mt-2 text-gray-600">
//             We aim to deliver innovative solutions to complex problems using cutting-edge technologies
//             and creative approaches. Our goal is to make a positive impact on society through 
//             user-focused, scalable software applications.
//           </p>
//         </section>

//         {/* Team Section */}
//         <section className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-700">Meet the Team</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//             {/* Team Member 1 */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="Team member 1"
//                 className="rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
//               <p className="text-gray-600">CEO & Founder</p>
//             </div>

//             {/* Team Member 2 */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="Team member 2"
//                 className="rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
//               <p className="text-gray-600">CTO & Lead Developer</p>
//             </div>

//             {/* Team Member 3 */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="Team member 3"
//                 className="rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl font-bold text-gray-800">Alice Johnson</h3>
//               <p className="text-gray-600">Design Lead</p>
//             </div>
//           </div>
//         </section>

//         {/* Footer Section */}
//         <footer className="text-center mt-6">
//           <p className="text-gray-600">&copy; 2024 Our Company. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default About;