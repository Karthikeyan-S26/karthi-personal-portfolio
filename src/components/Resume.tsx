
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">
      {/* Header Section */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-700 text-white p-6">
          {/* Profile Photo */}
          <div className="text-center mb-6">
            <img 
              src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
              alt="Karthikeyan S"
              className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mb-4"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-sm">
              <Mail size={16} />
              <span>karthisenthil026@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mb-3 text-sm">
              <Phone size={16} />
              <span>8939533725</span>
            </div>
          </div>

          {/* Area of Interest */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Area of Interest</h3>
            <ul className="text-sm space-y-1">
              <li>• Machine Learning</li>
              <li>• Web Development</li>
              <li>• Full Stack Development</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold mb-3">Skills</h3>
            <ul className="text-sm space-y-1">
              <li>• Java</li>
              <li>• C</li>
              <li>• Python</li>
              <li>• DBMS</li>
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• Node.js</li>
              <li>• VS Code</li>
              <li>• Git & GitHub</li>
              <li>• MySQL</li>
              <li>• Firebase</li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-6">
          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">KARTHIKEYAN S</h1>
            <div className="w-32 h-1 bg-black mx-auto mb-2"></div>
            <h2 className="text-xl text-gray-600">Student</h2>
          </div>

          {/* About Me */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">About Me</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Passionate Full Stack Developer pursuing B.Tech in Information Technology with hands-on experience 
              in modern web technologies. Proven track record in hackathons including SIH 2024 and HackIndia 2025. 
              Skilled in creating scalable web applications and machine learning solutions.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">EDUCATION</h3>
            <ul className="text-sm space-y-2">
              <li>
                <strong>UG:</strong> Pursuing B.Tech in Information Technology at 
                Kongunadu College of Engineering and Technology, Trichy (2023-2027)
              </li>
              <li>
                <strong>HSC:</strong> Completed Higher Secondary Education at 
                KSV Higher Secondary School
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">PROJECTS</h3>
            <ul className="text-sm space-y-2">
              <li>• Smart Traffic Management System using IoT and ML algorithms (SIH 2024)</li>
              <li>• AI Habit Tracker with intelligent insights and recommendations (HackIndia 2025)</li>
              <li>• Sign Language Conversion using Machine Learning algorithms</li>
              <li>• StyleSpot E-commerce Platform - Full Stack Application</li>
              <li>• ThoughtNest Global Blog Platform with user engagement features</li>
            </ul>
          </div>

          {/* Co-curricular Activities */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">CO-CURRICULAR ACTIVITIES</h3>
            <ul className="text-sm space-y-1">
              <li>• Participated in Smart India Hackathon (SIH) 2024</li>
              <li>• Participated in HackIndia 2025</li>
              <li>• Completed multiple web development internships at Micro IT and Media Wave Technology</li>
              <li>• Active contributor to open-source projects on GitHub</li>
              <li>• Strong foundation in multiple programming languages and frameworks</li>
            </ul>
          </div>

          {/* Declaration */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">DECLARATION</h3>
            <p className="text-sm text-gray-700 mb-4">
              "I hereby declare that the contents of my resume are accurate to the 
              best of my knowledge and verify their authenticity."
            </p>
            <div className="flex justify-between items-end text-sm">
              <div>
                <p>Place: Tamil Nadu, India</p>
                <p>Date: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">(KARTHIKEYAN S)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
