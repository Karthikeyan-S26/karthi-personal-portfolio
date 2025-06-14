
import jsPDF from "jspdf";

export const useResumePDF = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const leftSidebarWidth = 70;
    const rightContentStart = leftSidebarWidth + 10;
    let yPos = 20;

    // Helper for page break
    const checkPageBreak = (nextHeight: number) => {
      if (yPos + nextHeight > pageHeight - 20) {
        pdf.addPage();
        pdf.setFillColor(60, 60, 60);
        pdf.rect(0, 0, leftSidebarWidth, pageHeight, "F");
        yPos = 20;
      }
    };

    // Left sidebar background
    pdf.setFillColor(60, 60, 60);
    pdf.rect(0, 0, leftSidebarWidth, pageHeight, "F");

    // Header
    pdf.setFillColor(255, 255, 255);
    pdf.rect(leftSidebarWidth, 0, pageWidth - leftSidebarWidth, 40, "F");

    pdf.setFillColor(200, 200, 200);
    pdf.circle(35, 30, 15, "F");

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("KARTHIKEYAN S", rightContentStart, 25);

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text("Full Stack Developer", rightContentStart, 35);

    // Sidebar
    let sidebarY = 60;
    pdf.setTextColor(255, 255, 255);

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Contact", 10, sidebarY);
    sidebarY += 10;

    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.text("Phone", 10, sidebarY);
    sidebarY += 4;
    pdf.text("+918939533725", 10, sidebarY);
    sidebarY += 8;

    pdf.text("Email", 10, sidebarY);
    sidebarY += 4;
    pdf.text("karthisenthil026@", 10, sidebarY);
    sidebarY += 3;
    pdf.text("gmail.com", 10, sidebarY);
    sidebarY += 8;

    pdf.text("Address", 10, sidebarY);
    sidebarY += 4;
    pdf.text("Karur, Tamil Nadu", 10, sidebarY);
    sidebarY += 8;

    pdf.text("LinkedIn", 10, sidebarY);
    sidebarY += 4;
    pdf.text("linkedin.com/in/", 10, sidebarY);
    sidebarY += 3;
    pdf.text("karthikeyan-s-tech", 10, sidebarY);
    sidebarY += 8;

    pdf.text("GitHub", 10, sidebarY);
    sidebarY += 4;
    pdf.text("github.com/", 10, sidebarY);
    sidebarY += 3;
    pdf.text("Karthikeyan-S26", 10, sidebarY);
    sidebarY += 15;

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Education", 10, sidebarY);
    sidebarY += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.text("B.Tech Information", 10, sidebarY);
    sidebarY += 4;
    pdf.text("Technology", 10, sidebarY);
    sidebarY += 6;

    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.text("Kongunadu College of", 10, sidebarY);
    sidebarY += 3;
    pdf.text("Engineering and", 10, sidebarY);
    sidebarY += 3;
    pdf.text("Technology", 10, sidebarY);
    sidebarY += 3;
    pdf.text("2023 - 2027", 10, sidebarY);
    sidebarY += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.text("Higher Secondary", 10, sidebarY);
    sidebarY += 6;

    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.text("KSV Higher Secondary", 10, sidebarY);
    sidebarY += 3;
    pdf.text("School", 10, sidebarY);
    sidebarY += 3;
    pdf.text("2021 - 2023", 10, sidebarY);
    sidebarY += 15;

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Skills", 10, sidebarY);
    sidebarY += 8;

    const skills = [
      "Java", "C", "Python", "HTML", "CSS", "JavaScript",
      "Node.js", "VS Code", "Git & GitHub", "MySQL",
      "Firebase", "Data Structure", "Cyber Security"
    ];

    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    skills.forEach((skill) => {
      pdf.text(`• ${skill}`, 12, sidebarY);
      sidebarY += 4;
    });
    sidebarY += 10;

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Language", 10, sidebarY);
    sidebarY += 8;
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.text("• English", 12, sidebarY);
    sidebarY += 5;
    pdf.text("• Tamil", 12, sidebarY);

    // Right content
    yPos = 50;
    pdf.setTextColor(0, 0, 0);

    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("About Me", rightContentStart, yPos);
    yPos += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const aboutText =
      "I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have developed multiple full-stack projects and participated in national-level hackathons. I enjoy solving real-world problems through code and continuously improving my skills in front-end and back-end development.";
    const aboutLines = pdf.splitTextToSize(aboutText, pageWidth - rightContentStart - 10);
    pdf.text(aboutLines, rightContentStart, yPos);
    yPos += aboutLines.length * 4 + 15;

    // Internships
    checkPageBreak(60);
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Internships", rightContentStart, yPos);
    yPos += 10;

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Front-End Developer", rightContentStart, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.text("Micro IT | May 10 - June 5, 2025", rightContentStart, yPos);
    yPos += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text(
      "• Developed responsive web interfaces using React.js and Tailwind CSS.",
      rightContentStart + 5,
      yPos
    );
    yPos += 4;
    pdf.text(
      "• Optimized web performance for scalability and speed.",
      rightContentStart + 5,
      yPos
    );
    yPos += 10;

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Web Developer", rightContentStart, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.text("Media Wave Technologies | June 2 - June 18, 2025", rightContentStart, yPos);
    yPos += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text(
      "• Built full-stack web apps using React.js and Node.js.",
      rightContentStart + 5,
      yPos
    );
    yPos += 4;
    pdf.text(
      "• Implemented database and API integrations.",
      rightContentStart + 5,
      yPos
    );
    yPos += 15;

    // Projects
    checkPageBreak(80);
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Projects", rightContentStart, yPos);
    yPos += 10;

    const projects = [
      {
        name: "Smart Traffic Management System",
        type: "SIH 2024",
        desc: "IoT & ML-based solution to manage city traffic flow intelligently."
      },
      {
        name: "AI Habit Tracker",
        type: "HackIndia 2025",
        desc: "AI-powered tracker that gives daily habit insights and recommendations."
      },
      {
        name: "StyleSpot E-Commerce Platform",
        type: "Full Stack App",
        desc: "React, Node.js, MongoDB based shopping platform with payment and authentication."
      },
      {
        name: "ThoughtNest Blog Website",
        type: "Full Stack App",
        desc: "User-focused blogging system with content management."
      }
    ];

    projects.forEach((project) => {
      checkPageBreak(25);
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold");
      pdf.text(project.name, rightContentStart, yPos);
      yPos += 5;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text(project.type, rightContentStart, yPos);
      yPos += 5;
      pdf.setFont("helvetica", "normal");
      const descLines = pdf.splitTextToSize(
        project.desc,
        pageWidth - rightContentStart - 10
      );
      pdf.text(descLines, rightContentStart + 5, yPos);
      yPos += descLines.length * 4 + 8;
    });

    // No .getCurrentPageInfo() - Fix: check page count before drawing
    if (pdf.internal.pages.length > 1) {
      pdf.setFillColor(60, 60, 60);
      // Draw sidebar background on last page (just like above)
      pdf.rect(0, 0, leftSidebarWidth, pageHeight, "F");
    }

    pdf.save("Karthikeyan_S_Resume.pdf");
  };

  return { generatePDF };
};
