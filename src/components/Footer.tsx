
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text-rose mb-4">
            Tania Lapalelo
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Fullstack Developer passionate about creating beautiful, scalable web experiences 
            with clean code and creative expression.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">Contact</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Tania Lapalelo. Designed with 💕 and built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
