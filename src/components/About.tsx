
import React from 'react';
import { Code, Lightbulb, Target, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About Me
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              I'm Karthikeyan S, a passionate Front End Developer currently pursuing B.Tech in Information Technology 
              at Kongunadu College of Engineering and Technology. I specialize in creating responsive, user-friendly web applications 
              using modern technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              With hands-on experience from internships and participation in HackIndia 2025, 
              I enjoy solving complex problems and turning innovative ideas into reality through clean, efficient code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Code className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Clean Code</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Writing maintainable and efficient code</p>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Lightbulb className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Innovation</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Always learning new technologies</p>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Target className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Results</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Delivering quality solutions</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <GraduationCap className="w-5 md:w-6 h-5 md:h-6" />
                <h3 className="text-xl md:text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-semibold text-sm md:text-base">B.Tech Information Technology</h4>
                  <p className="text-blue-100 text-sm">Kongunadu College of Engineering and Technology</p>
                  <p className="text-blue-200 text-xs md:text-sm">2023 – 2027 | CGPA: 8.0</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Higher Secondary (HSC)</h4>
                  <p className="text-blue-100 text-sm">KSV Higher Secondary School</p>
                  <p className="text-blue-200 text-xs md:text-sm">87%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Briefcase className="w-5 md:w-6 h-5 md:h-6" />
                <h3 className="text-xl md:text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Web Development Intern</h4>
                  <p className="text-green-100 text-sm">Media Wave Technologies</p>
                  <p className="text-green-200 text-xs md:text-sm">June 18, 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Front End Development Intern</h4>
                  <p className="text-green-100 text-sm">Micro IT</p>
                  <p className="text-green-200 text-xs md:text-sm">Virtual</p>
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
