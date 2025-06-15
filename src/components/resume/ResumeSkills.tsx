
import React from 'react';
import { Code } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    category: 'Database & Tools',
    skills: ['MySQL', 'MongoDB', 'Git & GitHub', 'Java', 'Python', 'C'],
  },
];

const ResumeSkills = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-blue-600 pb-1 flex items-center gap-2">
        <Code size={20} />
        Technical Skills
      </h3>
      <div className="space-y-3 pt-2">
        {skillsData.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-800 text-sm mb-2">{item.category}</h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSkills;
