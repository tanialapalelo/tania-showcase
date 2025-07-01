
import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Clariti Property',
      description: 'Full-stack e-commerce solution with React, Next.js, and integrated payment processing.',
      tags: ['Next.js', 'Headless Wordpress', 'TypeScript', 'Tailwind'],
      category: 'fullstack',
      image: '/clariti.png',
      liveUrl: 'https://clarimondproperty.id/'
    },
    {
      title: 'Makassar Handicraft',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['Laravel', 'JavaScript', 'PostgreSQL'],
      category: 'fullstack',
      image: '/makassarhandicraft.png',
      liveUrl: 'https://mhc.tannamas.id/'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work demonstrating clean architecture, reusable components, 
            and modern development practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-rose-500 hover:text-rose-600 transition-colors duration-200 font-medium"
                  >
                    <span>Live Demo →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
