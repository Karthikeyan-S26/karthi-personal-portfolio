
import jsPDF from "jspdf";
import { imgData } from "./pdf__avatar"; // create & use a base64 image helper for avatar

export const useResumePDF = () => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Layout measurements
    const margin = 0;
    const sidebarW = 170;
    const sidebarBG = "#374151";
    const sectionBar = "#2563eb";
    let y = 0;

    // Sidebar
    pdf.setFillColor(sidebarBG);
    pdf.rect(margin, margin, sidebarW, pageHeight, "F");

    // Sidebar: Avatar
    const avatarSize = 75;
    pdf.setFillColor("#FFFFFF");
    pdf.circle(sidebarW / 2, 60, avatarSize / 2, "F");
    // Avatar Image
    // (the PDF will include a placeholder image if pdf__avatar.ts wasn't created)
    try {
      pdf.addImage(
        imgData,
        "PNG",
        sidebarW / 2 - avatarSize / 2,
        22,
        avatarSize,
        avatarSize
      );
    } catch {
      // fallback: draw a simple gray circle if no image
      pdf.setFillColor("#CCCCCC");
      pdf.circle(sidebarW / 2, 60, avatarSize / 2 - 2, "F");
    }

    // Sidebar: Contact Info
    let sy = 110;
    pdf.setFontSize(11);
    pdf.setTextColor("#FFFFFF");
    pdf.setFont("helvetica", "bold");
    pdf.text("Contact", sidebarW / 2, sy, { align: "center" });
    sy += 13;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.text("Phone", sidebarW / 2, sy, { align: "center" });
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("+918939533725", sidebarW / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFontSize(9);
    pdf.text("Email", sidebarW / 2, sy, { align: "center" });
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("karthisenthil026@gmail.com", sidebarW / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFontSize(9);
    pdf.text("Address", sidebarW / 2, sy, { align: "center" });
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("Karur, Tamil Nadu", sidebarW / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFontSize(9);
    pdf.text("LinkedIn", sidebarW / 2, sy, { align: "center" });
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("linkedin.com/in/karthikeyan-s-tech", sidebarW / 2, sy, {
      align: "center",
      maxWidth: sidebarW - 16,
    });
    sy += 12;
    pdf.setFontSize(9);
    pdf.text("GitHub", sidebarW / 2, sy, { align: "center" });
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("github.com/Karthikeyan-S26", sidebarW / 2, sy, { align: "center" });

    // Sidebar: Education
    sy += 18;
    pdf.setFontSize(11.5);
    pdf.setFont("helvetica", "bold");
    pdf.text("Education", sidebarW / 2, sy, { align: "center" });
    sy += 11;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.text(
      "B.Tech Information Technology (2023-2027)",
      sidebarW / 2,
      sy,
      { align: "center", maxWidth: sidebarW - 20 }
    );
    sy += 11;
    pdf.setFontSize(8.3);
    pdf.text(
      "Kongunadu College of Engineering and Technology",
      sidebarW / 2,
      sy,
      { align: "center", maxWidth: sidebarW - 20 }
    );
    sy += 13;
    pdf.setFontSize(9);
    pdf.text(
      "Higher Secondary (2021-2023)",
      sidebarW / 2,
      sy,
      { align: "center", maxWidth: sidebarW - 20 }
    );
    sy += 10;
    pdf.setFontSize(8.3);
    pdf.text("KSV Higher Secondary School", sidebarW / 2, sy, {
      align: "center",
      maxWidth: sidebarW - 20,
    });

    // Sidebar: Skills
    sy += 17;
    pdf.setFontSize(11.5);
    pdf.setFont("helvetica", "bold");
    pdf.text("Skills", sidebarW / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.3);
    const skills = [
      "Java", "C", "Python", "HTML", "CSS", "JavaScript",
      "Node.js", "VS Code", "Git & GitHub", "MySQL",
      "Firebase", "Data Structure", "Cyber Security",
    ];
    skills.forEach((skill) => {
      pdf.text("• " + skill, sidebarW / 2, sy, { align: "center" });
      sy += 9.6;
    });

    sy += 9;
    pdf.setFontSize(11.5);
    pdf.setFont("helvetica", "bold");
    pdf.text("Languages", sidebarW / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.3);
    pdf.text("• English", sidebarW / 2, sy, { align: "center" });
    sy += 9.6;
    pdf.text("• Tamil", sidebarW / 2, sy, { align: "center" });

    // -------------------------
    // Main Section
    let mx = sidebarW + 27;
    let my = 56;

    // Header
    pdf.setFontSize(25.5);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(35, 38, 39);
    pdf.text("KARTHIKEYAN S", mx, my);
    my += 17.4;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(13.5);
    pdf.setTextColor(sectionBar);
    pdf.text("Full Stack Developer", mx, my);
    my += 17;

    // Blue divider bar
    pdf.setFillColor(sectionBar);
    pdf.rect(mx, my - 8, pageWidth - mx - 27, 3, "F");
    my += 14;

    // About
    pdf.setFontSize(12.5);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor("#222");
    pdf.text("About Me", mx, my);
    my += 11.5;
    pdf.setFontSize(9.7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor("#333");
    const aboutText =
      "I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have developed multiple full-stack projects and participated in national-level hackathons. I enjoy solving real-world problems through code and continuously improving my skills in front-end and back-end development.";
    const aboutLines = pdf.splitTextToSize(aboutText, pageWidth - mx - 34);
    pdf.text(aboutLines, mx, my);
    my += aboutLines.length * 11 + 8;

    // Internships
    pdf.setFontSize(12.5);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor("#222");
    pdf.text("Internships", mx, my);
    my += 11.5;
    // Micro IT
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.6);
    pdf.setTextColor("#111");
    pdf.text("Front-End Developer", mx, my);
    my += 9;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(9);
    pdf.setTextColor(sectionBar);
    pdf.text("Micro IT | May 10 - June 5, 2025", mx, my);
    my += 9.1;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor("#333");
    pdf.text("• Developed responsive web interfaces using React.js and Tailwind CSS.", mx + 8, my);
    my += 8;
    pdf.text("• Optimized web performance for scalability and speed.", mx + 8, my);
    my += 13.5;
    // Media Wave
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.6);
    pdf.setTextColor("#111");
    pdf.text("Web Developer", mx, my);
    my += 9;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(9);
    pdf.setTextColor(sectionBar);
    pdf.text("Media Wave Technologies | June 2 - June 18, 2025", mx, my);
    my += 9.1;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor("#333");
    pdf.text("• Built full-stack web apps using React.js and Node.js.", mx + 8, my);
    my += 8;
    pdf.text("• Implemented database and API integrations.", mx + 8, my);
    my += 15;

    // Projects
    pdf.setFontSize(12.5);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor("#222");
    pdf.text("Projects", mx, my);
    my += 11.5;
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
      },
    ];
    projects.forEach((project) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10.5);
      pdf.setTextColor("#111");
      pdf.text(project.name, mx, my);
      my += 9;
      pdf.setFont("helvetica", "italic");
      pdf.setFontSize(9);
      pdf.setTextColor(sectionBar);
      pdf.text(project.type, mx, my);
      my += 9.1;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.5);
      pdf.setTextColor("#333");
      const descLines = pdf.splitTextToSize(project.desc, pageWidth - mx - 40);
      pdf.text(descLines, mx + 8, my);
      my += descLines.length * 9.4 + 5;
    });

    // Save
    pdf.save("Karthikeyan_S_Resume.pdf");
  };

  return { generatePDF };
};
