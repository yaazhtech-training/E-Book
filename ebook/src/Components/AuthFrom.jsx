import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

const AuthForm = ()=> {

   
    

const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign Up Data:', formData);
    } else {
      console.log('Login Data:', formData);
    }
    // After successful login/signup, navigate to home page
    navigate('/');
  };

  return (
    // <>
    // {orderPopup && (


<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">


     {/* Close Icon - positioned in the top-right corner */}
     <div className="absolute top-4 right-4">
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                // onClick={() => (false)}  // Close popup on click
              />
            </div>

            
  <h2 className="text-2xl font-bold text-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 mt-2 border rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 mt-2 border rounded-md"
      />
    </div>
    {isSignUp && (
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mt-2 border rounded-md"
        />
      </div>
    )}
    <button type="submit" className="w-full px-4 py-2 text-white bg-[#66FCF1] rounded-full hover:bg-blue-600 transition-all duration-200">
      {isSignUp ? 'Sign Up' : 'Login'}
    </button>
  </form>
  <div className="text-center">
    <button onClick={() => setIsSignUp(!isSignUp)} className="text-orange-500 hover:underline">
      {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
    </button>
  </div>


 
</div>
</div>





   
    
  );
};

export default AuthForm;