
import React from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm Karthikeyan S, a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating robust, scalable applications using React, Node.js, and cloud technologies.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend development, I enjoy solving complex 
              problems and turning ideas into reality through clean, efficient code.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable and efficient code</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Lightbulb className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Always learning new technologies</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-sm text-gray-600">Delivering quality solutions</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="font-semibold">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="font-semibold">25+</span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee Consumed</span>
                  <span className="font-semibold">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
