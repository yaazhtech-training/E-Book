import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" bg-gray-200  max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-black mb-8">
        We’d love to hear from you! Fill out the form below or reach us at our email.</p>
      <div className="bg-gray-200  shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            ></textarea>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-500 transition duration-200">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <h4 className='font-semibold mb-2'>Email : hr@yaazhtech.com</h4>
        <h4 className='font-semibold text-2xl'>phone No</h4>
       <p>+91 6382289060</p>
       <p>+04298278160</p>
      </div>
    </div>
  );
};

export default Contact;

