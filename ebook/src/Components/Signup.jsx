import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.value]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       console.log("Sign Up Data:", formData);
//     } else {
//       console.log("Login Data:", formData);
//     }
//   };

  return (
    <div className="bg-[#66FCF1] h-screen w-full  flex flex-col items-center p-4">
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white h-full flex flex-col rounded-lg mt-5 mb-5 ">
        <div>
          <h1 className="px-4 py-1 rounded-lg text-2xl font-bold text-[#1F2833] text-center">
            Sign up
          </h1>
          <p className="text-center text-[#1F2833] font-serif text-3xl pt-10">
            Please Enter your details.
          </p>
        </div>
        <form className="space-y-5">
          <div className="pt-5 m-5">
            <label className="block text-gray-500 font-medium mb-2">
              Name :
            </label>
            <input
              type="text"
              placeholder="Name"
            //   value={formData.name}
            //   onChange={handleChange}
              className="w-full px-6 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="pt-5 m-5">
            <label className="block text-gray-500 font-medium mb-2">
              Email address or username :
            </label>
            <input
              type="text"
            //   value={formData.email}
            //   onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full px-6 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="pt-5 m-5">
            <label className="block  text-gray-500 font-medium mb-2">
              Password :
            </label>
            <input
              type="password"
            //   value={formData.password}
            //   onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-6 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="pt-5 m-5">
            <button className="bg-[#66FCF1] text-center rounded-full mb-2 px-5 py-1 font-bold text-white">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
