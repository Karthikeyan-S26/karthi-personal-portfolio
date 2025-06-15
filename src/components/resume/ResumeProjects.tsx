
import React from "react";

const projects = [
  {
    name: "Smart Traffic Management System",
    type: "SIH 2024",
    desc: "IoT & ML-based solution to manage city traffic flow intelligently."
  },
  {
    name: "AI Habit Tracker",
    type: "HackIndia 2025",
    desc: "AI-powered tracker that gives daily habit insights and recommendations."
  },
  {
    name: "StyleSpot E-Commerce Platform",
    type: "Full Stack App",
    desc: "React, Node.js, MongoDB based shopping platform with payment and authentication."
  },
  {
    name: "ThoughtNest Blog Website",
    type: "Full Stack App",
    desc: "User-focused blogging system with content management."
  }
];

const ResumeProjects = () => (
  <section className="mb-8">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Projects</h3>
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.name} className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900">{project.name}</h4>
          <p className="text-blue-600 text-sm font-medium">{project.type}</p>
          <p className="text-gray-700 text-sm">{project.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ResumeProjects;
