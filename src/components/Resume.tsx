
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import jsPDF from 'jspdf';

const Resume = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const leftSidebarWidth = 70;
    const rightContentStart = leftSidebarWidth + 10;
    let yPos = 20;

    // Helper function to check if we need a new page
    const checkPageBreak = (nextSectionHeight: number) => {
      if (yPos + nextSectionHeight > pageHeight - 20) {
        pdf.addPage();
        // Redraw sidebar background on new page
        pdf.setFillColor(60, 60, 60);
        pdf.rect(0, 0, leftSidebarWidth, pageHeight, 'F');
        yPos = 20;
      }
    };

    // Left sidebar background
    pdf.setFillColor(60, 60, 60);
    pdf.rect(0, 0, leftSidebarWidth, pageHeight, 'F');

    // Header - Name and Title (spans across top)
    pdf.setFillColor(255, 255, 255);
    pdf.rect(leftSidebarWidth, 0, pageWidth - leftSidebarWidth, 40, 'F');
    
    // Profile photo placeholder
    pdf.setFillColor(200, 200, 200);
    pdf.circle(35, 30, 15, 'F');
    
    // Name and Title in right area
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KARTHIKEYAN S', rightContentStart, 25);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Full Stack Developer', rightContentStart, 35);

    // Left Sidebar Content
    let sidebarY = 60;
    pdf.setTextColor(255, 255, 255);

    // Contact Section
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Contact', 10, sidebarY);
    sidebarY += 10;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Phone', 10, sidebarY);
    sidebarY += 4;
    pdf.text('+918939533725', 10, sidebarY);
    sidebarY += 8;
    
    pdf.text('Email', 10, sidebarY);
    sidebarY += 4;
    pdf.text('karthisenthil026@', 10, sidebarY);
    sidebarY += 3;
    pdf.text('gmail.com', 10, sidebarY);
    sidebarY += 8;
    
    pdf.text('Address', 10, sidebarY);
    sidebarY += 4;
    pdf.text('Karur, Tamil Nadu', 10, sidebarY);
    sidebarY += 8;
    
    pdf.text('LinkedIn', 10, sidebarY);
    sidebarY += 4;
    pdf.text('linkedin.com/in/', 10, sidebarY);
    sidebarY += 3;
    pdf.text('karthikeyan-s-tech', 10, sidebarY);
    sidebarY += 8;
    
    pdf.text('GitHub', 10, sidebarY);
    sidebarY += 4;
    pdf.text('github.com/', 10, sidebarY);
    sidebarY += 3;
    pdf.text('Karthikeyan-S26', 10, sidebarY);
    sidebarY += 15;

    // Education Section
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Education', 10, sidebarY);
    sidebarY += 10;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('B.Tech Information', 10, sidebarY);
    sidebarY += 4;
    pdf.text('Technology', 10, sidebarY);
    sidebarY += 6;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Kongunadu College of', 10, sidebarY);
    sidebarY += 3;
    pdf.text('Engineering and', 10, sidebarY);
    sidebarY += 3;
    pdf.text('Technology', 10, sidebarY);
    sidebarY += 3;
    pdf.text('2023 - 2027', 10, sidebarY);
    sidebarY += 10;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Higher Secondary', 10, sidebarY);
    sidebarY += 6;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('KSV Higher Secondary', 10, sidebarY);
    sidebarY += 3;
    pdf.text('School', 10, sidebarY);
    sidebarY += 3;
    pdf.text('2021 - 2023', 10, sidebarY);
    sidebarY += 15;

    // Skills Section
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Skills', 10, sidebarY);
    sidebarY += 8;
    
    const skills = [
      'Java', 'C', 'Python', 'HTML', 'CSS', 'JavaScript',
      'Node.js', 'VS Code', 'Git & GitHub', 'MySQL',
      'Firebase', 'Data Structure', 'Cyber Security'
    ];
    
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    skills.forEach((skill) => {
      pdf.text(`• ${skill}`, 12, sidebarY);
      sidebarY += 4;
    });
    sidebarY += 10;

    // Language Section
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Language', 10, sidebarY);
    sidebarY += 8;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• English', 12, sidebarY);
    sidebarY += 5;
    pdf.text('• Tamil', 12, sidebarY);

    // Right Content Area
    yPos = 50;
    pdf.setTextColor(0, 0, 0);

    // About Me Section
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('About Me', rightContentStart, yPos);
    yPos += 10;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const aboutText = 'I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have developed multiple full-stack projects and participated in national-level hackathons. I enjoy solving real-world problems through code and continuously improving my skills in front-end and back-end development.';
    const aboutLines = pdf.splitTextToSize(aboutText, pageWidth - rightContentStart - 10);
    pdf.text(aboutLines, rightContentStart, yPos);
    yPos += (aboutLines.length * 4) + 15;

    // Internships Section
    checkPageBreak(60);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Internships', rightContentStart, yPos);
    yPos += 10;
    
    // Front-End Developer
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Front-End Developer', rightContentStart, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('Micro IT | May 10 - June 5, 2025', rightContentStart, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Developed responsive web interfaces using React.js and Tailwind CSS.', rightContentStart + 5, yPos);
    yPos += 4;
    pdf.text('• Optimized web performance for scalability and speed.', rightContentStart + 5, yPos);
    yPos += 10;
    
    // Web Developer
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Web Developer', rightContentStart, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('Media Wave Technologies | June 2 - June 18, 2025', rightContentStart, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Built full-stack web apps using React.js and Node.js.', rightContentStart + 5, yPos);
    yPos += 4;
    pdf.text('• Implemented database and API integrations.', rightContentStart + 5, yPos);
    yPos += 15;

    // Projects Section
    checkPageBreak(80);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Projects', rightContentStart, yPos);
    yPos += 10;
    
    const projects = [
      {
        name: 'Smart Traffic Management System',
        type: 'SIH 2024',
        desc: 'IoT & ML-based solution to manage city traffic flow intelligently.'
      },
      {
        name: 'AI Habit Tracker',
        type: 'HackIndia 2025',
        desc: 'AI-powered tracker that gives daily habit insights and recommendations.'
      },
      {
        name: 'StyleSpot E-Commerce Platform',
        type: 'Full Stack App',
        desc: 'React, Node.js, MongoDB based shopping platform with payment and authentication.'
      },
      {
        name: 'ThoughtNest Blog Website',
        type: 'Full Stack App',
        desc: 'User-focused blogging system with content management.'
      }
    ];
    
    projects.forEach((project) => {
      checkPageBreak(25);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(project.name, rightContentStart, yPos);
      yPos += 5;
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'italic');
      pdf.text(project.type, rightContentStart, yPos);
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(project.desc, pageWidth - rightContentStart - 10);
      pdf.text(descLines, rightContentStart + 5, yPos);
      yPos += (descLines.length * 4) + 8;
    });

    // Redraw sidebar on final page if needed
    if (pdf.internal.getCurrentPageInfo().pageNumber > 1) {
      pdf.setFillColor(60, 60, 60);
      pdf.rect(0, 0, leftSidebarWidth, pageHeight, 'F');
    }

    pdf.save('Karthikeyan_S_Resume.pdf');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg print:shadow-none flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-700 text-white">
        {/* Profile Photo */}
        <div className="p-8 text-center">
          <img 
            src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
            alt="Karthikeyan S"
            className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mb-4"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>

        {/* Contact Section */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Contact</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p>+918939533725</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p>karthisenthil026@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p>Karur, Tamil Nadu</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">LinkedIn</h4>
              <p className="break-all">linkedin.com/in/karthikeyan-s-tech</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">GitHub</h4>
              <p>github.com/Karthikeyan-S26</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">B.Tech Information Technology</h4>
              <p className="text-sm text-gray-300">Kongunadu College of Engineering and Technology</p>
              <p className="text-sm text-gray-400">2023 - 2027</p>
            </div>
            <div>
              <h4 className="font-bold">Higher Secondary</h4>
              <p className="text-sm text-gray-300">KSV Higher Secondary School</p>
              <p className="text-sm text-gray-400">2021 - 2023</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Skills</h3>
          <ul className="text-sm space-y-2">
            <li>• Java</li>
            <li>• C</li>
            <li>• Python</li>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• Node.js</li>
            <li>• VS Code</li>
            <li>• Git & GitHub</li>
            <li>• MySQL</li>
            <li>• Firebase</li>
            <li>• Data Structure</li>
            <li>• Cyber Security</li>
          </ul>
        </div>

        {/* Language Section */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-bold mb-4 bg-gray-800 p-3 -mx-8">Language</h3>
          <ul className="text-sm space-y-2">
            <li>• English</li>
            <li>• Tamil</li>
          </ul>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">KARTHIKEYAN S</h1>
          <h2 className="text-xl text-gray-600">Full Stack Developer</h2>
        </div>

        {/* About Me Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate and dedicated Full Stack Developer with hands-on experience in building 
            responsive and scalable web applications using modern technologies like React.js, Node.js, 
            MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have 
            developed multiple full-stack projects and participated in national-level hackathons. I enjoy 
            solving real-world problems through code and continuously improving my skills in front-end 
            and back-end development.
          </p>
        </section>

        {/* Internships Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Internships</h3>
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

        {/* Projects Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Smart Traffic Management System</h4>
              <p className="text-blue-600 text-sm font-medium">SIH 2024</p>
              <p className="text-gray-700 text-sm">IoT & ML-based solution to manage city traffic flow intelligently.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">AI Habit Tracker</h4>
              <p className="text-blue-600 text-sm font-medium">HackIndia 2025</p>
              <p className="text-gray-700 text-sm">AI-powered tracker that gives daily habit insights and recommendations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">StyleSpot E-Commerce Platform</h4>
              <p className="text-blue-600 text-sm font-medium">Full Stack App</p>
              <p className="text-gray-700 text-sm">React, Node.js, MongoDB based shopping platform with payment and authentication.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">ThoughtNest Blog Website</h4>
              <p className="text-blue-600 text-sm font-medium">Full Stack App</p>
              <p className="text-gray-700 text-sm">User-focused blogging system with content management.</p>
            </div>
          </div>
        </section>

        {/* PDF Download Button */}
        <div className="text-center pt-6">
          <button 
            onClick={generatePDF}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download PDF Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
