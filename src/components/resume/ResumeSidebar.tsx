
import React from "react";

const technicalSkills = [
  "Java", "Python", "HTML", "CSS", "JavaScript", "MySQL"
];

const softSkills = [
  "Team work", "Adaptability", "Quick learner"
];

const ResumeSidebar = () => (
  <div className="w-full md:w-80 flex-shrink-0 bg-gray-700 text-white">
    <div className="p-8 text-center">
      <img 
        src="/lovable-uploads/Profile (1).jpg" 
        alt="Karthikeyan S"
        className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mb-4"
        style={{ objectPosition: "center center" }}
      />
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Contact</h3>
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-semibold mb-1">Phone</h4>
          <p>+91 8939531725</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Email</h4>
          <p>karthisent0026@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Address</h4>
          <p>Keela vailankanni, Evthuravallipattu, Karur, Tamil Nadu</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">LinkedIn</h4>
          <p className="break-all">linkedin.com/in/karthikeyan-s-tech</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">GitHub</h4>
          <p>github.com/Karthikeyan-S26</p>
        </div>
      </div>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Education</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold">B.Tech Information Technology</h4>
          <p className="text-sm text-gray-300">Kongunadu College of Engineering and Technology</p>
          <p className="text-sm text-gray-400">2023 - 2026 / CGPA: 8</p>
        </div>
        <div>
          <h4 className="font-bold">Higher Secondary (HSC)</h4>
          <p className="text-sm text-gray-300">SCTV Higher Secondary School</p>
          <p className="text-sm text-gray-400">67%</p>
        </div>
        <div>
          <h4 className="font-bold">Secondary (SSLC)</h4>
          <p className="text-sm text-gray-300">Saravi Matriculation School</p>
          <p className="text-sm text-gray-400">80%</p>
        </div>
      </div>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Technical Skills</h3>
      <ul className="text-sm space-y-2">
        {technicalSkills.map(skill => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Soft Skills</h3>
      <ul className="text-sm space-y-2">
        {softSkills.map(skill => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Languages</h3>
      <ul className="text-sm space-y-2">
        <li>• English (R/W/S)</li>
        <li>• Tamil (R/W/S)</li>
      </ul>
    </div>
  </div>
);

export default ResumeSidebar;
