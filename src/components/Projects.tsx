
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Traffic Management System",
      description: "Developed for SIH 2024 - An intelligent traffic management system using IoT sensors and real-time data processing to optimize traffic flow and reduce congestion.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
      technologies: ["IoT", "Real-time Analytics", "Python", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Habit Tracker",
      description: "Created for HackIndia 2025 - A personalized habit tracking application with AI-powered recommendations and progress analytics to help users build better habits.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
      technologies: ["React", "AI/ML", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sign Language Conversion",
      description: "Machine learning project that converts sign language gestures into text using computer vision and deep learning algorithms for improved accessibility.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
      technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "StyleSpot E-commerce",
      description: "A modern e-commerce platform with user authentication, product catalog, shopping cart, and secure payment integration for online retail business.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/Karthikeyan-S26/stylespot"
    },
    {
      title: "ThoughtNest Blog",
      description: "A full-featured blog website with content management, user authentication, comment system, and responsive design for seamless reading experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7-6?w=600",
      technologies: ["React", "Express", "MySQL", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/Karthikeyan-S26/thoughtnest-global-voices"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 md:px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 md:gap-3">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs md:text-sm font-medium flex-1 justify-center"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs md:text-sm font-medium flex-1 justify-center"
                  >
                    <Github size={14} className="md:w-4 md:h-4" />
                    Code
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
