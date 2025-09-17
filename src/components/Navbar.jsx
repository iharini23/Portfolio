import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Harini</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#service" className="hover:text-gray-400">Services</a></li>
        <li><a href="#project" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
      <a 
        href="https://www.linkedin.com/in/harini-s-85a93b299/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          Connect Me
        </button>
      </a>
    </div>
  );
};

export default Navbar;
