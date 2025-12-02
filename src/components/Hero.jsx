import React from 'react';
import HeroImage from '../assets/my_pic.png';

const Hero = () => {
  return (
    <div id="home" className="bg-black text-white text-center py-16 px-4">
      <img
        src={HeroImage}
        alt="profile"
        className="w-40 h-40 rounded-full mx-auto object-cover mb-6 transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Harini
        </span>
        , Mern-Stack Developer
      </h1>
      <p className="text-gray-400 mt-4">
        I build modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* Contact Me button scrolls to contact section */}
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </button>

        {/* Resume button opens your PDF */}
        <a href="/HARINI_S_RESUME.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
