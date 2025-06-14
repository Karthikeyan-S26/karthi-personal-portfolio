
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import jsPDF from 'jspdf';

const Resume = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Header Section
    pdf.setFillColor(41, 128, 185);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    
    // Name
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KARTHIKEYAN S', pageWidth / 2, 20, { align: 'center' });
    
    // Title
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Full Stack Developer', pageWidth / 2, 30, { align: 'center' });
    
    // Contact Info
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    let yPos = 50;
    pdf.text('Email: karthisenthil026@gmail.com', 20, yPos);
    pdf.text('Phone: 8939533725', 20, yPos + 8);
    pdf.text('Location: Tamil Nadu, India', 20, yPos + 16);
    
    // Professional Summary
    yPos += 30;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL SUMMARY', 20, yPos);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPos += 10;
    const summary = 'Passionate Full Stack Developer pursuing B.Tech in Information Technology with hands-on experience in modern web technologies. Proven track record in hackathons including SIH 2024 and HackIndia 2025.';
    const summaryLines = pdf.splitTextToSize(summary, pageWidth - 40);
    pdf.text(summaryLines, 20, yPos);
    
    // Education
    yPos += 25;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', 20, yPos);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPos += 10;
    pdf.text('B.Tech Information Technology', 20, yPos);
    pdf.text('Kongunadu College of Engineering and Technology (2023-2027)', 20, yPos + 6);
    pdf.text('Higher Secondary Education - KSV Higher Secondary School', 20, yPos + 14);
    
    // Skills
    yPos += 30;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', 20, yPos);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPos += 10;
    pdf.text('Programming: Java, C, Python, JavaScript', 20, yPos);
    pdf.text('Web Technologies: HTML, CSS, Node.js', 20, yPos + 6);
    pdf.text('Database: MySQL, DBMS, Firebase', 20, yPos + 12);
    pdf.text('Tools: VS Code, Git, GitHub', 20, yPos + 18);
    
    // Projects
    yPos += 30;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KEY PROJECTS', 20, yPos);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPos += 10;
    pdf.text('• Smart Traffic Management System (SIH 2024)', 20, yPos);
    pdf.text('• AI Habit Tracker (HackIndia 2025)', 20, yPos + 6);
    pdf.text('• StyleSpot E-commerce Platform', 20, yPos + 12);
    pdf.text('• ThoughtNest Global Blog Platform', 20, yPos + 18);
    
    pdf.save('Karthikeyan_S_Resume.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
        <div className="flex items-center justify-center gap-8">
          <img 
            src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
            alt="Karthikeyan S"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
            style={{ objectPosition: 'center 20%' }}
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">KARTHIKEYAN S</h1>
            <h2 className="text-xl font-light">Full Stack Developer</h2>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 p-4">
        <div className="flex justify-center gap-8 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>karthisenthil026@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>8939533725</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} />
            <span>Karthikeyan-S26</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Professional Summary */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate Full Stack Developer pursuing B.Tech in Information Technology with hands-on experience 
            in modern web technologies. Proven track record in hackathons including SIH 2024 and HackIndia 2025. 
            Skilled in creating scalable web applications using React.js, Node.js, and various databases.
          </p>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            EDUCATION
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800">B.Tech Information Technology</h4>
              <p className="text-blue-600 font-medium">Kongunadu College of Engineering and Technology</p>
              <p className="text-gray-600 text-sm">2023 – 2027</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Higher Secondary Education</h4>
              <p className="text-blue-600 font-medium">KSV Higher Secondary School</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Programming Languages</h4>
              <p className="text-gray-700">Java, C, Python, JavaScript</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Web Technologies</h4>
              <p className="text-gray-700">HTML, CSS, Node.js</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Database & Storage</h4>
              <p className="text-gray-700">MySQL, DBMS, Firebase</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Development Tools</h4>
              <p className="text-gray-700">VS Code, Git, GitHub</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Front-End Developer - Micro IT</h4>
              <p className="text-gray-600 text-sm mb-2">May 10 – June 5, 2025</p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Developed responsive web interfaces using modern frontend technologies</li>
                <li>• Optimized web applications for maximum speed and scalability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Web Developer - Media Wave Technology</h4>
              <p className="text-gray-600 text-sm mb-2">June 2 – June 18, 2025</p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Built full-stack web applications using React.js and Node.js</li>
                <li>• Implemented database solutions and API integrations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            KEY PROJECTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">Smart Traffic Management System</h4>
              <p className="text-blue-600 font-medium text-sm">SIH 2024</p>
              <p className="text-gray-700 text-sm">Intelligent traffic management solution using IoT and ML algorithms.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">AI Habit Tracker</h4>
              <p className="text-blue-600 font-medium text-sm">HackIndia 2025</p>
              <p className="text-gray-700 text-sm">Habit tracking app with AI-powered insights and recommendations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">StyleSpot E-commerce</h4>
              <p className="text-blue-600 font-medium text-sm">Full Stack Application</p>
              <p className="text-gray-700 text-sm">Complete e-commerce solution with authentication and payments.</p>
              <a href="https://github.com/Karthikeyan-S26/stylespot" className="text-blue-500 underline text-xs">GitHub</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">ThoughtNest Global Blog</h4>
              <p className="text-blue-600 font-medium text-sm">Full Stack Application</p>
              <p className="text-gray-700 text-sm">Global blog platform with content management and user engagement.</p>
              <a href="https://github.com/Karthikeyan-S26/thoughtnest-global-voices" className="text-blue-500 underline text-xs">GitHub</a>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            ACHIEVEMENTS & ACTIVITIES
          </h3>
          <ul className="text-gray-700 space-y-1">
            <li>• Participated in Smart India Hackathon (SIH) 2024</li>
            <li>• Participated in HackIndia 2025</li>
            <li>• Completed multiple web development internships</li>
            <li>• Active contributor to open-source projects on GitHub</li>
          </ul>
        </section>

        {/* Declaration */}
        <section className="border-t pt-6">
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
        </section>

        {/* PDF Download Button */}
        <div className="text-center pt-6">
          <button 
            onClick={generatePDF}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
          >
            Download PDF Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
