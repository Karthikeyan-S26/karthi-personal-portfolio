
import React from "react";

const ResumeInternships = () => (
  <section className="mb-8">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Internships</h3>
    <div className="space-y-6">
      <div className="border-l-4 border-blue-600 pl-4">
        <h4 className="text-lg font-semibold text-gray-900">Front-End Developer</h4>
        <p className="text-gray-600 text-sm mb-2">Micro IT | May 10 - June 5, 2025</p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Developed responsive web interfaces using React.js and Tailwind CSS.</li>
          <li>• Optimized web performance for scalability and speed.</li>
        </ul>
      </div>
      <div className="border-l-4 border-blue-600 pl-4">
        <h4 className="text-lg font-semibold text-gray-900">Web Developer</h4>
        <p className="text-gray-600 text-sm mb-2">Media Wave Technologies | June 2 - June 18, 2025</p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Built full-stack web apps using React.js and Node.js.</li>
          <li>• Implemented database and API integrations.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ResumeInternships;
