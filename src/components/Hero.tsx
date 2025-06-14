
import React from 'react';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewResume = () => {
    window.open('/resume', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
              alt="Karthikeyan S"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-xl border-4 border-white"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
          Karthikeyan S
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 font-light">
          Full Stack Developer
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          B.Tech IT student passionate about creating innovative web solutions and building scalable applications with modern technologies.
        </p>
        
        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <a 
            href="https://github.com/Karthikeyan-S26" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <Github size={20} className="md:w-6 md:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/karthikeyan-s-tech" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
          <button 
            onClick={scrollToAbout}
            className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Learn More
          </button>
          <button 
            onClick={viewResume}
            className="px-6 md:px-8 py-2.5 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Download size={16} className="md:w-5 md:h-5" />
            View Resume
          </button>
          <a 
            href="#contact" 
            className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ChevronDown size={28} className="md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
