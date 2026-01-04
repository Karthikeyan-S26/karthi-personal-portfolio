
import React from "react";

const ResumeInternships = () => (
  <section className="mb-8">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Internships & Hackathons</h3>
    <div className="space-y-6">
      <div className="border-l-4 border-blue-600 pl-4">
        <h4 className="text-lg font-semibold text-gray-900">Web Development Intern</h4>
        <p className="text-gray-600 text-sm mb-2">Radix Wave Technologies (SSM) OOTY - 18/06/2025</p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Completed internship focused on web development with HTML, JavaScript</li>
          <li>• Worked on UI components from validation and basic client-side logic</li>
          <li>• Gained exposure to real-world web development practices</li>
        </ul>
      </div>
      <div className="border-l-4 border-blue-600 pl-4">
        <h4 className="text-lg font-semibold text-gray-900">Front End Development Intern (Virtual)</h4>
        <p className="text-gray-600 text-sm mb-2">CodSoft</p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Built interactive front-end interfaces following UI/UX principles</li>
          <li>• Improved responsiveness and user experience of web applications</li>
        </ul>
      </div>
      <div className="border-l-4 border-green-600 pl-4">
        <h4 className="text-lg font-semibold text-gray-900">Hackathons</h4>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Participated in India HackIndia – Konganadu College of Engineering and Technology</li>
          <li>• Participated – Hackathons – Mailasumara Engineering College, Chennai</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ResumeInternships;
