
import React from 'react';
import { BookOpen, PenTool } from 'lucide-react';

const English = () => {
  const experiences = [
    {
      title: 'Student Exchange in China',
      period: '1 Semester',
      description: 'Participated in English-taught courses during international exchange program, enhancing cross-cultural communication skills.',
      icon: '🌏'
    },
    {
      title: 'English Tutor at University',
      period: '1 Semester',
      description: 'Provided English tutoring services to university students, helping improve their academic English and conversation skills.',
      icon: '🎓'
    },
    {
      title: 'English Tutor at Startup',
      period: '1 Year',
      description: 'Conducted English training sessions for startup employees, focusing on business communication and technical vocabulary.',
      icon: '🚀'
    },
    {
      title: 'Medium Tech Writer',
      period: 'Ongoing',
      description: 'Regularly publish technical articles on Medium about IT topics, demonstrating advanced English writing skills in professional context.',
      icon: '✍️'
    }
  ];

  return (
    <section id="english" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">English Proficiency</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrating C1 level fluency through international experience, teaching background, and technical writing, 
            ready for global collaboration in English-speaking environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dance-hover cursor-pointer"
            >
              <div className="text-3xl mb-4 text-center">{experience.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {experience.title}
              </h3>
              <div className="text-rose-500 font-medium mb-3 text-center text-sm">
                {experience.period}
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Language Proficiency Level
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full text-white text-2xl font-bold mb-4">
                  C1
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Advanced/Proficient Level</h4>
                <p className="text-gray-600 text-sm">
                  Near-native fluency in professional and academic contexts
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Speaking</span>
                  <span className="text-rose-500 font-semibold">C1</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-rose-400 to-rose-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Writing</span>
                  <span className="text-rose-500 font-semibold">C1</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-rose-400 to-rose-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Writing Portfolio
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <PenTool className="text-rose-500" size={24} />
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Medium Publications</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Regular technical articles demonstrating advanced English proficiency in IT domain
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="text-rose-500" size={20} />
                  <span className="font-medium text-gray-800">Technical Topics Covered:</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-7">
                  <li>• Frontend Development</li>
                  <li>• JavaScript & TypeScript</li>
                  <li>• Database</li>
                  <li>• Technical Tutorials & Guides</li>
                </ul>
              </div>

              <div className="text-center">
                <a href='https://medium.com/@tanialapalelo' className="inline-flex items-center space-x-2 px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors duration-200">
                  <span>View Medium Articles</span>
                  <BookOpen size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-rose-50 px-8 py-4 rounded-full">
            <span className="text-rose-700 font-medium">Ready for global collaboration & technical communication</span>
            <span className="text-2xl">🌐</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default English;
