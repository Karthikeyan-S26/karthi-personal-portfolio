
import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ResumeHeader = () => {
  return (
    <div className="bg-white">
      <div className="flex items-start gap-6 p-6">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
            alt="Karthikeyan S"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">KARTHIKEYAN S</h1>
            <div className="w-24 h-1 bg-black mx-auto mb-2"></div>
            <h2 className="text-xl text-gray-600">Student</h2>
          </div>
          
          {/* Contact Info in right section will be handled by the layout */}
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
