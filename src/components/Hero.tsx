
import React from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Karthikeyan S
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          B.Tech IT student passionate about creating innovative web solutions and building scalable applications with modern technologies.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com/Karthikeyan-S26" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/karthikeyan-s-tech" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Learn More
          </button>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
          >
            Get In Touch
          </a>
        </div>
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
