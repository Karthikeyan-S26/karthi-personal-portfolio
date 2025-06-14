
import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
              alt="Karthikeyan S"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold mb-2">Karthikeyan S</h1>
            <h2 className="text-xl font-light mb-4">Full Stack Developer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>karthisenthil026@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8939533725</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <span>linkedin.com/in/karthikeyan-s-tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <span>github.com/Karthikeyan-S26</span>
              </div>
              <div className="flex items-center gap-2 md:col-span-2">
                <MapPin size={16} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate Full Stack Developer pursuing B.Tech in Information Technology with hands-on experience 
            in modern web technologies. Proven track record in hackathons including SIH 2024 and HackIndia 2025. 
            Skilled in creating scalable web applications using React.js, Node.js, and various databases. 
            Strong problem-solving abilities with a focus on clean, efficient code and innovative solutions.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">B.Tech Information Technology</h4>
              <p className="text-blue-600 font-medium">Kongunadu College of Engineering and Technology</p>
              <p className="text-gray-600 flex items-center gap-2">
                <Calendar size={16} />
                2023 – 2027
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Higher Secondary Education</h4>
              <p className="text-blue-600 font-medium">KSV Higher Secondary School</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center gap-2">
            <Code size={24} />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript (ES6+)</li>
                <li>• React.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Database & Tools</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• MySQL</li>
                <li>• MongoDB</li>
                <li>• Git & GitHub</li>
                <li>• Java, Python, C</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center gap-2">
            <Briefcase size={24} />
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Front-End Developer</h4>
              <p className="text-blue-600 font-medium">Micro IT</p>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <Calendar size={16} />
                May 10 – June 5, 2025
              </p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Developed responsive web interfaces using modern frontend technologies</li>
                <li>• Collaborated with design team to implement user-friendly interfaces</li>
                <li>• Optimized web applications for maximum speed and scalability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Web Developer</h4>
              <p className="text-blue-600 font-medium">Media Wave Technology</p>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <Calendar size={16} />
                June 2 – June 18, 2025
              </p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Built full-stack web applications using React.js and Node.js</li>
                <li>• Implemented database solutions and API integrations</li>
                <li>• Delivered projects within tight deadlines while maintaining code quality</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center gap-2">
            <Award size={24} />
            Key Projects
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Smart Traffic Management System</h4>
              <p className="text-blue-600 font-medium">SIH 2024 (Smart India Hackathon)</p>
              <p className="text-gray-700">Developed an intelligent traffic management solution using IoT and machine learning algorithms to optimize traffic flow and reduce congestion.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">AI Habit Tracker</h4>
              <p className="text-blue-600 font-medium">HackIndia 2025</p>
              <p className="text-gray-700">Built a comprehensive habit tracking application with AI-powered insights and personalized recommendations for user behavior improvement.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Sign Language Conversion System</h4>
              <p className="text-blue-600 font-medium">Machine Learning Project</p>
              <p className="text-gray-700">Implemented ML algorithms to convert sign language gestures into text, enhancing accessibility for the hearing-impaired community.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">StyleSpot - E-commerce Platform</h4>
              <p className="text-blue-600 font-medium">Full Stack Web Application</p>
              <p className="text-gray-700">Developed a complete e-commerce solution with user authentication, product management, and secure payment integration.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">ThoughtNest - Blog Platform</h4>
              <p className="text-blue-600 font-medium">Content Management System</p>
              <p className="text-gray-700">Created a modern blogging platform with rich text editing, user management, and responsive design.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Achievements & Certifications
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Participated in Smart India Hackathon (SIH) 2024</li>
            <li>• Participated in HackIndia 2025</li>
            <li>• Completed multiple web development internships</li>
            <li>• Strong foundation in multiple programming languages</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
