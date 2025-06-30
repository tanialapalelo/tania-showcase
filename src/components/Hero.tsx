
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="float-animation">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="gradient-text-rose">Tania Lapalelo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Fullstack Developer crafting beautiful, scalable web experiences 
              with passion for clean code and creative expression
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 pulse-glow">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-500">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-500">2</div>
              <div className="text-gray-600">Languages Fluent</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-rose-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
