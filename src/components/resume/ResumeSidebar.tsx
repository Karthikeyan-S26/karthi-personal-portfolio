
import React from "react";

const skills = [
  "Java", "C", "Python", "HTML", "CSS", "JavaScript",
  "Node.js", "VS Code", "Git & GitHub", "MySQL",
  "Firebase", "Data Structure", "Cyber Security"
];

const ResumeSidebar = () => (
  <div className="w-full md:w-80 flex-shrink-0 bg-gray-700 text-white">
    <div className="p-8 text-center">
      <img 
        src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
        alt="Karthikeyan S"
        className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mb-4"
        style={{ objectPosition: "center 20%" }}
      />
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Contact</h3>
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-semibold mb-1">Phone</h4>
          <p>+918939533725</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Email</h4>
          <p>karthisenthil026@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Address</h4>
          <p>Karur, Tamil Nadu</p>
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
          <p className="text-sm text-gray-400">2023 - 2027</p>
        </div>
        <div>
          <h4 className="font-bold">Higher Secondary</h4>
          <p className="text-sm text-gray-300">KSV Higher Secondary School</p>
          <p className="text-sm text-gray-400">2021 - 2023</p>
        </div>
      </div>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Skills</h3>
      <ul className="text-sm space-y-2">
        {skills.map(skill => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </div>
    <div className="px-8 pb-8">
      <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Language</h3>
      <ul className="text-sm space-y-2">
        <li>• English</li>
        <li>• Tamil</li>
      </ul>
    </div>
  </div>
);

export default ResumeSidebar;
