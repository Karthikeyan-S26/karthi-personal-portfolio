
import React from 'react';
import { Code, Lightbulb, Target, GraduationCap, Briefcase } from 'lucide-react';

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
              I'm Karthikeyan S, a passionate Full Stack Developer currently pursuing B.Tech in Information Technology 
              at Kongunadu College of Engineering and Technology. I specialize in creating robust, scalable web applications 
              using modern technologies like React.js, Node.js, and various databases.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With hands-on experience from internships and participation in hackathons like SIH 2024 and HackIndia 2025, 
              I enjoy solving complex problems and turning innovative ideas into reality through clean, efficient code.
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
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">B.Tech Information Technology</h4>
                  <p className="text-blue-100">Kongunadu College of Engineering and Technology</p>
                  <p className="text-blue-200 text-sm">2023 – 2027</p>
                </div>
                <div>
                  <h4 className="font-semibold">Higher Secondary</h4>
                  <p className="text-blue-100">KSV Higher Secondary School</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Front-End Developer</h4>
                  <p className="text-green-100">Micro IT</p>
                  <p className="text-green-200 text-sm">May 10 - June 5, 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">Web Developer</h4>
                  <p className="text-green-100">Media Wave Technology</p>
                  <p className="text-green-200 text-sm">June 2 - June 18, 2025</p>
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
