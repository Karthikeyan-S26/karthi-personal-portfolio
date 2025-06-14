
import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ResumeHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 print:p-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
            alt="Karthikeyan S"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Karthikeyan S</h1>
          <h2 className="text-lg md:text-xl font-light mb-3">Full Stack Developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs md:text-sm">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={14} />
              <span>karthisenthil026@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={14} />
              <span>+91 8939533725</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Linkedin size={14} />
              <span>linkedin.com/in/karthikeyan-s-tech</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Github size={14} />
              <span>github.com/Karthikeyan-S26</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start md:col-span-2">
              <MapPin size={14} />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
