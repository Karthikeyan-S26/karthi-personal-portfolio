
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ResumeExperience = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-blue-600 pb-1 flex items-center gap-2">
        <Briefcase size={20} />
        Professional Experience
      </h3>
      <div className="space-y-3">
        <div>
          <h4 className="text-base font-semibold text-gray-800">Front-End Developer - Micro IT</h4>
          <p className="text-gray-600 text-xs flex items-center gap-1 mb-1">
            <Calendar size={12} />
            May 10 – June 5, 2025
          </p>
          <ul className="text-gray-700 text-xs ml-3 space-y-1">
            <li>• Developed responsive web interfaces using modern frontend technologies</li>
            <li>• Optimized web applications for maximum speed and scalability</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-800">Web Developer - Media Wave Technology</h4>
          <p className="text-gray-600 text-xs flex items-center gap-1 mb-1">
            <Calendar size={12} />
            June 2 – June 18, 2025
          </p>
          <ul className="text-gray-700 text-xs ml-3 space-y-1">
            <li>• Built full-stack web applications using React.js and Node.js</li>
            <li>• Implemented database solutions and API integrations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeExperience;
