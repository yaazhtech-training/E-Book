import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


 
const Footer = () => {
  return (
    <footer className="bg-[#66FCF1] text-black py-10 px-5 md:px-10 lg:px-20  mt-96">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">E-Book</h2>
          <p className="text-black">
          Explore our eBooks for convenient reading,
           diverse genres, and knowledge at your fingertips
            anytime, anywhere.
          </p>
        </div>
 
        <div>
          <h3 className="text-2xl font-bold mb-4">More Detials</h3>
          <ul className="text-black space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-800"> Home </a>
            </li>
            <li>
              <a href="#home" className="hover:text-blue-800"> About </a>
            </li>
            <li>
              <a href="#home" className="hover:text-blue-800"> Contact </a>
            </li>
            
          </ul>
        </div>
 
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="text-black space-y-2">
            <li>33/A-9 ST1 Omaluran street, sridevi,
                Complex 1st floor, Near vijaya Mahal,
                Malikundam main road, Mecheri,
                Tamilnadu, India. 636453.
            </li>
            <h2 className="font-semibold">Email</h2> 
             <p>hr@yaazhtech.com</p>
             
          </ul>
         
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 ">Follow Us </h2>
         
            <p>+91 6382289060</p> 
            <p className="mb-4">+04298278160</p> 
          <div className="text-black space-x-4 flex">
            <a href="https://mail.google.com/mail/" className="hover:text-blue-600"><BiLogoGmail size={40} />  </a>
            <a href="https://in.linkedin.com/" className="hover:text-blue-600"><FaLinkedin size={40} />  </a>
            <a href="https://www.facebook.com/" className="hover:text-blue-600"> <FaFacebook  size={40}/>  </a>
            <a href="https://www.instagram.com/" className="hover:text-blue-600"><FaInstagram size={40} />  </a>

          </div>
        </div>
 
       
      </div>
 
      <div className="mt-10 border-t border-black pt-5 text-center">
        <p className="text-black">
          &copy; 2012-2024 All rights reserved by YaazhTech.com<br/>
          Privacy PolicyTerms of UseCancellation Policy
        </p>
      </div>
    </footer>
  );
};
 
export default Footer;