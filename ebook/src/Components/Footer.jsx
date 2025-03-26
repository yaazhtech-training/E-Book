import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#66FCF1] text-black py-10 px-5 md:px-10 lg:px-20 font-semibold  flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 flex-grow">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">E-Book</h2>
          <p className="text-black">
            Explore our eBooks for convenient reading, diverse genres, and
            knowledge at your fingertips anytime, anywhere.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="text-black space-y-2">
            <li><a href="/" className="hover:text-blue-800">Home</a></li>
            <li><a href="/about" className="hover:text-blue-800">About</a></li>
            <li><a href="/contact" className="hover:text-blue-800">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="text-black space-y-2">
            <li><span className="font-semibold">Email:</span> hr@yaazhtech.com</li>
            <li><span className="font-semibold">Phone:</span> +91 63822 89060</li>
            <li><span className="font-semibold">Tel:</span> +04298278160</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/yaazhtechsoftware/" className="hover:text-red-500"><FaInstagram size={30} /></a>
            <a href="https://mail.google.com/mail/" className="hover:text-orange-500"><BiLogoGmail size={30} /></a>
            <a href="https://www.linkedin.com/in/kannaiyan-s/" className="hover:text-gray-400"><FaLinkedin size={30} /></a>
            <a href="https://www.facebook.com/yaazhtech" className="hover:text-blue-600"><FaFacebook size={30} /></a>
            <a href="https://www.youtube.com/channel/UCbaiJ8UPdwZIqJ47l3djq4g" className="hover:text-red-500"><FaYoutube size={30} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-black pt-5 text-center">
        <p className="text-black">
          &copy; {new Date().getFullYear()} All rights reserved by YaazhTech.com
        </p>
        <p className="text-black mt-2">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-use" className="hover:underline"> Terms of Use</a> | 
          <a href="/cancellation-policy" className="hover:underline"> Cancellation Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
