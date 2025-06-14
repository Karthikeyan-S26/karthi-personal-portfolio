
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import jsPDF from 'jspdf';

const Resume = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPos = 20;

    // Helper function to check if we need a new page
    const checkPageBreak = (nextSectionHeight: number) => {
      if (yPos + nextSectionHeight > pageHeight - 20) {
        pdf.addPage();
        yPos = 20;
      }
    };

    // Header Section with Photo
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, pageWidth, 50, 'F');
    
    // Add photo placeholder (you can replace this with actual image loading)
    pdf.setFillColor(200, 200, 200);
    pdf.circle(40, 30, 15, 'F');
    
    // Name and Title
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KARTHIKEYAN S', 65, 25);
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Full Stack Developer', 65, 35);
    
    // Divider line
    pdf.setDrawColor(0, 0, 0);
    pdf.line(65, 40, 150, 40);
    
    yPos = 60;

    // Contact Information Section
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const contactInfo = [
      'Email: karthisenthil026@gmail.com',
      'Phone: +91 8939533725',
      'Location: Tamil Nadu, India',
      'GitHub: github.com/Karthikeyan-S26',
      'LinkedIn: linkedin.com/in/karthikeyan-s-tech'
    ];
    
    contactInfo.forEach((info, index) => {
      pdf.text(info, 20, yPos + (index * 6));
    });
    
    yPos += 40;

    // Professional Summary
    checkPageBreak(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL SUMMARY', 20, yPos);
    pdf.setDrawColor(41, 128, 185);
    pdf.line(20, yPos + 2, 80, yPos + 2);
    
    yPos += 10;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const summary = 'Passionate Full Stack Developer pursuing B.Tech in Information Technology with hands-on experience in modern web technologies. Proven track record in hackathons including SIH 2024 and HackIndia 2025. Skilled in creating scalable web applications.';
    const summaryLines = pdf.splitTextToSize(summary, pageWidth - 40);
    pdf.text(summaryLines, 20, yPos);
    yPos += (summaryLines.length * 5) + 10;

    // Education
    checkPageBreak(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', 20, yPos);
    pdf.line(20, yPos + 2, 60, yPos + 2);
    
    yPos += 10;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('B.Tech Information Technology', 20, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Kongunadu College of Engineering and Technology', 20, yPos);
    yPos += 5;
    pdf.text('2023 - 2027', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Higher Secondary Education', 20, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('KSV Higher Secondary School', 20, yPos);
    yPos += 15;

    // Technical Skills
    checkPageBreak(50);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', 20, yPos);
    pdf.line(20, yPos + 2, 70, yPos + 2);
    
    yPos += 10;
    const skills = [
      'Programming Languages: Java, C, Python, JavaScript',
      'Web Technologies: HTML, CSS, Node.js',
      'Database: MySQL, DBMS, Firebase',
      'Tools & Platforms: VS Code, Git, GitHub'
    ];
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    skills.forEach((skill, index) => {
      pdf.text(`• ${skill}`, 25, yPos + (index * 6));
    });
    yPos += (skills.length * 6) + 10;

    // Professional Experience
    checkPageBreak(60);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL EXPERIENCE', 20, yPos);
    pdf.line(20, yPos + 2, 90, yPos + 2);
    
    yPos += 10;
    
    // Experience 1
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Front-End Developer', 20, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('Micro IT | May 10 - June 5, 2025', 20, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Developed responsive web interfaces using modern frontend technologies', 25, yPos);
    yPos += 5;
    pdf.text('• Optimized web applications for maximum speed and scalability', 25, yPos);
    yPos += 10;
    
    // Experience 2
    checkPageBreak(30);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Web Developer', 20, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('Media Wave Technology | June 2 - June 18, 2025', 20, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Built full-stack web applications using React.js and Node.js', 25, yPos);
    yPos += 5;
    pdf.text('• Implemented database solutions and API integrations', 25, yPos);
    yPos += 15;

    // Key Projects
    checkPageBreak(80);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KEY PROJECTS', 20, yPos);
    pdf.line(20, yPos + 2, 65, yPos + 2);
    
    yPos += 10;
    const projects = [
      {
        name: 'Smart Traffic Management System',
        tech: 'SIH 2024',
        desc: 'Intelligent traffic management solution using IoT and ML algorithms.'
      },
      {
        name: 'AI Habit Tracker',
        tech: 'HackIndia 2025',
        desc: 'Habit tracking app with AI-powered insights and recommendations.'
      },
      {
        name: 'StyleSpot E-commerce Platform',
        tech: 'Full Stack Application',
        desc: 'Complete e-commerce solution with authentication and payments.'
      },
      {
        name: 'ThoughtNest Global Blog Platform',
        tech: 'Full Stack Application',
        desc: 'Global blog platform with content management and user engagement.'
      }
    ];
    
    projects.forEach((project, index) => {
      checkPageBreak(20);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`• ${project.name}`, 20, yPos);
      yPos += 6;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.text(`${project.tech}`, 25, yPos);
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(project.desc, pageWidth - 50);
      pdf.text(descLines, 25, yPos);
      yPos += (descLines.length * 5) + 5;
    });

    // Achievements
    checkPageBreak(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ACHIEVEMENTS & ACTIVITIES', 20, yPos);
    pdf.line(20, yPos + 2, 100, yPos + 2);
    
    yPos += 10;
    const achievements = [
      'Participated in Smart India Hackathon (SIH) 2024',
      'Participated in HackIndia 2025',
      'Completed multiple web development internships',
      'Active contributor to open-source projects on GitHub'
    ];
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    achievements.forEach((achievement, index) => {
      pdf.text(`• ${achievement}`, 25, yPos + (index * 6));
    });
    yPos += (achievements.length * 6) + 15;

    // Declaration
    checkPageBreak(30);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DECLARATION', 20, yPos);
    yPos += 8;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const declaration = 'I hereby declare that the contents of my resume are accurate to the best of my knowledge and verify their authenticity.';
    const declarationLines = pdf.splitTextToSize(declaration, pageWidth - 40);
    pdf.text(declarationLines, 20, yPos);
    yPos += (declarationLines.length * 5) + 10;
    
    // Signature section
    pdf.text(`Place: Tamil Nadu, India`, 20, yPos);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, yPos + 6);
    pdf.text('(KARTHIKEYAN S)', pageWidth - 60, yPos + 6);

    pdf.save('Karthikeyan_S_Resume.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Header */}
      <div className="bg-white p-8 border-b-2 border-gray-200">
        <div className="flex items-center gap-8">
          <img 
            src="/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png" 
            alt="Karthikeyan S"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            style={{ objectPosition: 'center 20%' }}
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">KARTHIKEYAN S</h1>
            <div className="w-32 h-1 bg-black mb-2"></div>
            <h2 className="text-xl text-gray-600">Full Stack Developer</h2>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>karthisenthil026@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 8939533725</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} />
            <span>github.com/Karthikeyan-S26</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} />
            <span>linkedin.com/in/karthikeyan-s-tech</span>
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
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 text-lg">B.Tech Information Technology</h4>
              <p className="text-blue-600 font-medium">Kongunadu College of Engineering and Technology</p>
              <p className="text-gray-600 text-sm">2023 – 2027</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Higher Secondary Education</h4>
              <p className="text-blue-600 font-medium">KSV Higher Secondary School</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            TECHNICAL SKILLS
          </h3>
          <div className="space-y-3">
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
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Front-End Developer</h4>
              <p className="text-gray-600 text-sm mb-2 italic">Micro IT | May 10 – June 5, 2025</p>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Developed responsive web interfaces using modern frontend technologies</li>
                <li>• Optimized web applications for maximum speed and scalability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Web Developer</h4>
              <p className="text-gray-600 text-sm mb-2 italic">Media Wave Technology | June 2 – June 18, 2025</p>
              <ul className="text-gray-700 ml-6 space-y-1">
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
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">• Smart Traffic Management System</h4>
              <p className="text-blue-600 font-medium text-sm italic">SIH 2024</p>
              <p className="text-gray-700 text-sm">Intelligent traffic management solution using IoT and ML algorithms.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">• AI Habit Tracker</h4>
              <p className="text-blue-600 font-medium text-sm italic">HackIndia 2025</p>
              <p className="text-gray-700 text-sm">Habit tracking app with AI-powered insights and recommendations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">• StyleSpot E-commerce Platform</h4>
              <p className="text-blue-600 font-medium text-sm italic">Full Stack Application</p>
              <p className="text-gray-700 text-sm">Complete e-commerce solution with authentication and payments.</p>
              <a href="https://github.com/Karthikeyan-S26/stylespot" className="text-blue-500 underline text-xs">GitHub Link</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">• ThoughtNest Global Blog Platform</h4>
              <p className="text-blue-600 font-medium text-sm italic">Full Stack Application</p>
              <p className="text-gray-700 text-sm">Global blog platform with content management and user engagement.</p>
              <a href="https://github.com/Karthikeyan-S26/thoughtnest-global-voices" className="text-blue-500 underline text-xs">GitHub Link</a>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
            ACHIEVEMENTS & ACTIVITIES
          </h3>
          <ul className="text-gray-700 space-y-2 ml-6">
            <li>• Participated in Smart India Hackathon (SIH) 2024</li>
            <li>• Participated in HackIndia 2025</li>
            <li>• Completed multiple web development internships</li>
            <li>• Active contributor to open-source projects on GitHub</li>
          </ul>
        </section>

        {/* Declaration */}
        <section className="border-t pt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">DECLARATION</h3>
          <p className="text-sm text-gray-700 mb-6">
            I hereby declare that the contents of my resume are accurate to the 
            best of my knowledge and verify their authenticity.
          </p>
          <div className="flex justify-between items-end text-sm">
            <div>
              <p>Place: Tamil Nadu, India</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">(KARTHIKEYAN S)</p>
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
