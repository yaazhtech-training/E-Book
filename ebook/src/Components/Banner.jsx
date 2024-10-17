import React from 'react'

const Banner = () => {
  return (
    <div className="bg-[url('C:\Users\ELCOT\dev\github\E-Book\ebook\src\img\bookbg.webp')] bg-bottom bg-cover h-[60vh] w-full">
          <div className="bg-black bg-opacity-50 h-full flex flex-col text-center text-white">

           <div className='mt-20'>
           <h1 className='sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-sans font-bold'>THE ULTIMATE GUIDE TO FREE BOOKS</h1>
            <h1 className='sm:text-[1rem] md:text-[1.5rem]  font-bold '>Welcome To Your Friendly Neighborhood Library.</h1>
            
           </div>
           <div className='mt-10'>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4">
            Read More
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
         </div>
    </div>
  )
}

export default Banner