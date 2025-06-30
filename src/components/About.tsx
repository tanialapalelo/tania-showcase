
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate fullstack developer with a unique blend of technical expertise, 
            international experience, and creative expression through dance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm a dedicated fullstack developer who believes in creating digital experiences 
              that are not only functional but also beautiful and intuitive. My journey in tech 
              has been enriched by diverse experiences, including a semester exchange in China 
              and my passion for dance, which brings creativity and rhythm to my coding approach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in modern web technologies like React, Next.js, and TypeScript, 
              I focus on building scalable applications with clean architecture and reusable 
              components.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-rose-50 p-4 rounded-lg text-center dance-hover cursor-pointer">
                <div className="text-2xl font-bold text-rose-500">Frontend</div>
                <div className="text-gray-600">Specialist</div>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg text-center dance-hover cursor-pointer">
                <div className="text-2xl font-bold text-rose-500">Fullstack</div>
                <div className="text-gray-600">Developer</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-rose-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <p className="text-gray-700 font-medium">Coding with Creativity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
