
import React from "react";

const projects = [
  {
    name: "Personal Developer Portfolio Website",
    type: "HTML, CSS, JavaScript",
    desc: "Designed and developed an impressive personal portfolio to showcase my skills, projects, and contact clean UI, smooth navigation, and modern layouts."
  },
  {
    name: "StyleSpot - Fashion Web Application",
    type: "HTML, CSS, JavaScript",
    desc: "Created a fashion-focused website with modern UI/UX design. Designed user friendly interface and well-organized designs into functional web pages"
  },
  {
    name: "HabitFlow - Habit Tracking Web App",
    type: "HTML, CSS, JavaScript, UI/UX Design",
    desc: "Developed a habit tracking web app to help users monitor daily habits. Designed user-friendly interfaces to improve engagement and consistency."
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
