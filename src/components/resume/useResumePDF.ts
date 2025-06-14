
import jsPDF from "jspdf";
import { imgData } from "./pdf__avatar";

export const useResumePDF = () => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    // Dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Layout
    const sidebarWidth = 170;
    const sidebarBG = "#1e293b";
    const sectionAccent = "#2563eb";
    const margin = 0;

    // Draw sidebar background
    pdf.setFillColor(sidebarBG);
    pdf.rect(margin, margin, sidebarWidth, pageHeight, "F");

    // --- SIDEBAR ---
    let sy = 40; // sidebar Y cursor

    // Avatar with white circle behind it
    const avatarSize = 72;
    pdf.setFillColor("#fff");
    pdf.circle(sidebarWidth / 2, sy + avatarSize / 2 - 4, avatarSize / 2 + 5, "F");
    try {
      pdf.addImage(imgData, "PNG",
        sidebarWidth / 2 - avatarSize / 2, sy - 4,
        avatarSize, avatarSize
      );
    } catch {
      // fallback gray circle
      pdf.setFillColor("#ccc");
      pdf.circle(sidebarWidth / 2, sy + avatarSize / 2 - 4, avatarSize / 2, "F");
    }
    sy += avatarSize + 32;

    // Sidebar section helper
    function sidebarSection(title: string, lines: (string | { text: string, small?: boolean })[], spacing = 10) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11.5);
      pdf.setTextColor(sectionAccent);
      pdf.text(title, sidebarWidth / 2, sy, { align: "center" });
      sy += spacing;
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor("#f1f5f9");
      for (const line of lines) {
        if (typeof line === "string")
          pdf.setFontSize(8.75);
        else
          pdf.setFontSize(line.small ? 7.7 : 8.75);
        const text = typeof line === "string" ? line : line.text;
        pdf.text(
          text.length > 35 ? pdf.splitTextToSize(text, sidebarWidth - 26) : text,
          sidebarWidth / 2, sy,
          { align: "center" }
        );
        sy += 9.75;
      }
      sy += 9;
    }

    // Contact
    sidebarSection("Contact", [
      "Phone", { text: "+91 89395 33725", small: true },
      "Email", { text: "karthisenthil026@gmail.com", small: true },
      "Address", { text: "Karur, Tamil Nadu", small: true },
      "LinkedIn", { text: "linkedin.com/in/karthikeyan-s-tech", small: true },
      "GitHub", { text: "github.com/Karthikeyan-S26", small: true }
    ]);

    // Education
    sidebarSection("Education", [
      "B.Tech Information Technology",
      { text: "Kongunadu College of Engg. & Tech.", small: true },
      { text: "2023-2027", small: true },
      "",
      "Higher Secondary",
      { text: "KSV Higher Secondary School", small: true },
      { text: "2021-2023", small: true }
    ]);

    // Skills
    sidebarSection("Tech Skills", [
      "Java, C, Python, HTML, CSS",
      "JS, React.js, Node.js",
      "VS Code, Git, MySQL, Firebase",
      "DSA, Cyber Security"
    ]);
    // Languages
    pdf.setFontSize(9.2);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(sectionAccent);
    pdf.text("Languages", sidebarWidth / 2, sy, { align: "center" });
    sy += 12;
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor("#f1f5f9");
    pdf.setFontSize(8.5);
    pdf.text("English, Tamil", sidebarWidth / 2, sy, { align: "center" });

    // --- MAIN CONTENT ---
    let mx = sidebarWidth + 27;
    let my = 60;

    // Name + role
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.setTextColor("#0f172a");
    pdf.text("KARTHIKEYAN S", mx, my);

    my += 17;
    pdf.setFontSize(13.5);
    pdf.setFont("helvetica", "medium");
    pdf.setTextColor(sectionAccent);
    pdf.text("Full Stack Developer", mx, my);

    // Blue bar divider
    my += 19;
    pdf.setFillColor(sectionAccent);
    pdf.rect(mx, my - 9, pageWidth - mx - 27, 3, "F");
    my += 11;

    // About Me Section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor("#1e293b");
    pdf.text("About Me", mx, my);
    my += 11.2;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9.3);
    pdf.setTextColor("#334155");
    const about =
      "I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Currently pursuing a B.Tech in Information Technology, I have developed multiple full-stack projects and participated in national-level hackathons. I enjoy solving real-world problems through code and continuously improving my skills in front-end and back-end development.";
    const aboutLines = pdf.splitTextToSize(about, pageWidth - mx - 27);
    pdf.text(aboutLines, mx, my);
    my += aboutLines.length * 10 + 13;

    // Internships Section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor("#1e293b");
    pdf.text("Internships", mx, my);
    my += 11.2;

    // Micro IT
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.3);
    pdf.setTextColor("#0f172a");
    pdf.text("Front-End Developer", mx, my);
    my += 8.3;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(8.7);
    pdf.setTextColor(sectionAccent);
    pdf.text("Micro IT | May 10 – Jun 5, 2025", mx, my);
    my += 8.5;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.3);
    pdf.setTextColor("#334155");
    pdf.text("• Developed responsive web interfaces using React.js and Tailwind CSS.", mx + 15, my);
    my += 7.5;
    pdf.text("• Optimized web performance for scalability and speed.", mx + 15, my);
    my += 12.5;

    // Media Wave
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10.3);
    pdf.setTextColor("#0f172a");
    pdf.text("Web Developer", mx, my);
    my += 8.3;
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(8.7);
    pdf.setTextColor(sectionAccent);
    pdf.text("Media Wave Technologies | Jun 2 – Jun 18, 2025", mx, my);
    my += 8.5;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.3);
    pdf.setTextColor("#334155");
    pdf.text("• Built full-stack web apps using React.js and Node.js.", mx + 15, my);
    my += 7.5;
    pdf.text("• Implemented database and API integrations.", mx + 15, my);
    my += 16;

    // Projects Section
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor("#1e293b");
    pdf.text("Projects", mx, my);
    my += 11.2;

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
      },
    ];
    projects.forEach((project) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10.3);
      pdf.setTextColor("#0f172a");
      pdf.text(project.name, mx, my);
      my += 8.3;
      pdf.setFont("helvetica", "italic");
      pdf.setFontSize(8.7);
      pdf.setTextColor(sectionAccent);
      pdf.text(project.type, mx, my);
      my += 8.5;
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.2);
      pdf.setTextColor("#334155");
      const descLines = pdf.splitTextToSize(project.desc, pageWidth - mx - 50);
      pdf.text(descLines, mx + 15, my);
      my += descLines.length * 8.8 + 7;
    });

    // Save
    pdf.save("Karthikeyan_S_Resume.pdf");
  };

  return { generatePDF };
};
