
import jsPDF from "jspdf";

export const useResumePDF = () => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const marginX = 16; // margin on left/right ~0.6 inch
    let yPos = 28;
    const contentWidth = pageWidth - marginX * 2;

    // Helper for section spacing
    const sectionGap = (gap: number = 9) => {
      yPos += gap;
    };

    // Title
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("KARTHIKEYAN S", marginX, yPos);
    yPos += 12;

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text("Full Stack Developer", marginX, yPos);
    sectionGap(15);

    // About Me
    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");
    pdf.text("About Me", marginX, yPos);
    sectionGap(8);

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const aboutText =
      "I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have developed multiple full-stack projects and participated in national-level hackathons. I enjoy solving real-world problems through code and continuously improving my skills in front-end and back-end development.";
    const aboutLines = pdf.splitTextToSize(aboutText, contentWidth);
    pdf.text(aboutLines, marginX, yPos);
    sectionGap(aboutLines.length * 4 + 7);

    // Internships
    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");
    pdf.text("Internships", marginX, yPos);
    sectionGap(8);

    // Internship 1
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.text("Front-End Developer", marginX, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.text("Micro IT | May 10 - June 5, 2025", marginX, yPos);
    yPos += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text("\u2022 Developed responsive web interfaces using React.js and Tailwind CSS.", marginX + 5, yPos);
    yPos += 4;
    pdf.text("\u2022 Optimized web performance for scalability and speed.", marginX + 5, yPos);
    sectionGap(10);

    // Internship 2
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.text("Web Developer", marginX, yPos);
    yPos += 6;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.text("Media Wave Technologies | June 2 - June 18, 2025", marginX, yPos);
    yPos += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text("\u2022 Built full-stack web apps using React.js and Node.js.", marginX + 5, yPos);
    yPos += 4;
    pdf.text("\u2022 Implemented database and API integrations.", marginX + 5, yPos);

    sectionGap(13);

    // Projects Section
    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");
    pdf.text("Projects", marginX, yPos);
    sectionGap(8);

    // Projects List
    const projects = [
      {
        name: "Smart Traffic Management System",
        type: "SIH 2024",
        desc: "IoT & ML-based solution to manage city traffic flow intelligently.",
      },
      {
        name: "AI Habit Tracker",
        type: "HackIndia 2025",
        desc: "AI-powered tracker that gives daily habit insights and recommendations.",
      },
      {
        name: "StyleSpot E-Commerce Platform",
        type: "Full Stack App",
        desc: "React, Node.js, MongoDB based shopping platform with payment and authentication.",
      },
      {
        name: "ThoughtNest Blog Website",
        type: "Full Stack App",
        desc: "User-focused blogging system with content management.",
      }
    ];

    projects.forEach((project) => {
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold");
      pdf.text(project.name, marginX, yPos);
      yPos += 5;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text(project.type, marginX, yPos);
      yPos += 5;
      pdf.setFont("helvetica", "normal");
      const descLines = pdf.splitTextToSize(
        project.desc,
        contentWidth - 10
      );
      pdf.text(descLines, marginX + 5, yPos);
      sectionGap(descLines.length * 4 + 5);
    });

    pdf.save("Karthikeyan_S_Resume.pdf");
  };

  return { generatePDF };
};
