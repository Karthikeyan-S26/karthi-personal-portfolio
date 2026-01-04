
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center group">
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">${skill.name.charAt(0)}</div>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
