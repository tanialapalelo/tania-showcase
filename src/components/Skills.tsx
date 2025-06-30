
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'API Integration', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Database Design', level: 75 },
        { name: 'Testing', level: 70 },
        { name: 'Deployment', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on clean architecture, 
            reusable components, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-rose-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-rose-400 to-rose-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-gray-700 font-medium">Always learning:</span>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">AWS</span>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">System Design</span>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">Clean Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
