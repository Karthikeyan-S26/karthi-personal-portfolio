
import React from 'react';
import { Code } from 'lucide-react';

const ResumeSkills = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-blue-600 pb-1 flex items-center gap-2">
        <Code size={20} />
        Technical Skills
      </h3>
      <div className="space-y-2">
        <div>
          <h4 className="font-semibold text-gray-800 text-sm mb-1">Frontend</h4>
          <p className="text-gray-700 text-xs">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm mb-1">Backend</h4>
          <p className="text-gray-700 text-xs">Node.js, Express.js, RESTful APIs</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm mb-1">Database & Tools</h4>
          <p className="text-gray-700 text-xs">MySQL, MongoDB, Git & GitHub, Java, Python, C</p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSkills;
