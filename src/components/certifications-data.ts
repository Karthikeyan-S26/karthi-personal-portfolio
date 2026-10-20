export const categories = ['All', 'Internships', 'Hackathons', 'Presentations (PPTs)', 'Workshops & Courses', 'Certifications'] as const;
export type Category = typeof categories[number];
export type Certificate = {
  title: string;
  issuer: string;
  category: Exclude<Category, 'All'>;
  date: string;
  year: number;
  endDate?: string;
  image: string;
};

export const certificates: Certificate[] = [
  { title: "Conceptual Carnival – NEXOVATE '24", issuer: 'Kongu Engineering College', category: 'Presentations (PPTs)', date: 'March 8, 2024', year: 2024, endDate: '2024-03-08', image: '/Uploads/image-1767538889388.jpeg' },
  { title: 'Software Development – Industrial Visit', issuer: 'Techvolt Software Pvt. Ltd.', category: 'Workshops & Courses', date: 'August 28, 2024', year: 2024, endDate: '2024-08-28', image: '/Uploads/image-1767538893927.jpeg' },
  { title: 'Core JAVA – Value-Added Course', issuer: 'Kongunadu College of Engineering and Technology', category: 'Workshops & Courses', date: 'September 23–28, 2024', year: 2024, endDate: '2024-09-28', image: '/Uploads/image-1767538874392.jpeg' },
  { title: "PAPERENZA – TECHXPLORE '24", issuer: 'Annapoorana Engineering College', category: 'Presentations (PPTs)', date: 'October 8, 2024', year: 2024, endDate: '2024-10-08', image: '/Uploads/image-1767538884648.jpeg' },
  { title: 'Full Stack Development – Industrial Visit', issuer: 'Abservetech', category: 'Workshops & Courses', date: 'January 28, 2025', year: 2025, endDate: '2025-01-28', image: '/Uploads/image-1767538880004.jpeg' },
  { title: 'Data Visualization and Insights – THIRAN 2025', issuer: 'Sri Eshwar College of Engineering', category: 'Workshops & Courses', date: 'February 20–22, 2025', year: 2025, endDate: '2025-02-22', image: '/Uploads/certificate-thiran-workshop-2025.png' },
  { title: 'Front End Web Developer Certification', issuer: 'Infosys Springboard', category: 'Certifications', date: 'May 30, 2025', year: 2025, endDate: '2025-05-30', image: '/Uploads/image-1767538904014.jpeg' },
  { title: 'Front End Development Internship', issuer: 'Micro Information Technology Services (Micro IT)', category: 'Internships', date: 'May 10 – June 5, 2025', year: 2025, endDate: '2025-06-05', image: '/Uploads/certificate-micro-it.png' },
  { title: 'Web Development Internship', issuer: 'Media Wave Technologies', category: 'Internships', date: 'June 2–18, 2025', year: 2025, endDate: '2025-06-18', image: '/Uploads/image-1767538849219.jpeg' },
  { title: 'Full Stack Development – Industrial Visit', issuer: 'Nithra Consultancy Services', category: 'Workshops & Courses', date: 'August 21, 2025', year: 2025, endDate: '2025-08-21', image: '/Uploads/image-1767538868646.jpeg' },
  { title: 'Page 2 Stage – Tech Flare 2K25', issuer: 'Dhanalakshmi Srinivasan University', category: 'Presentations (PPTs)', date: 'August 22, 2025', year: 2025, endDate: '2025-08-22', image: '/Uploads/certificate-tech-flare-2025.png' },
  { title: 'HackIndia 2025', issuer: 'Kongunadu College of Engineering and Technology', category: 'Hackathons', date: '2025 · Exact date not listed', year: 2025, image: '/Uploads/image-1767538898949.jpeg' },
  { title: 'INNOHACK 2026 – Cyber Security Track', issuer: 'VIT Vellore', category: 'Hackathons', date: 'January 20–21, 2026', year: 2026, endDate: '2026-01-21', image: '/Uploads/image-1770657149788.jpeg' },
  { title: 'Sri Eshwar THIRAN 2026 – AI Agentathon', issuer: 'Sri Eshwar College of Engineering', category: 'Hackathons', date: 'February 4–6, 2026', year: 2026, endDate: '2026-02-06', image: '/Uploads/image-1770657117081.jpeg' },
  { title: 'Thooral Hackathon – Infinitum 2026', issuer: 'PSG College of Technology', category: 'Hackathons', date: 'February 13–14, 2026', year: 2026, endDate: '2026-02-14', image: '/Uploads/certificate-thooral-2026.png' },
  { title: 'HackIndia 2026', issuer: 'Mailam Engineering College', category: 'Hackathons', date: '2026 · Exact date not listed', year: 2026, image: '/Uploads/certificate-hackindia-2026.png' },
];

export function getCertificates(category: Category, order: 'newest' | 'oldest') {
  return certificates.filter(cert => category === 'All' || cert.category === category).sort((a, b) => {
    const yearDifference = a.year - b.year;
    if (yearDifference) return order === 'oldest' ? yearDifference : -yearDifference;
    // Year-only certificates follow precisely dated certificates within that year.
    if (!a.endDate) return b.endDate ? 1 : 0;
    if (!b.endDate) return -1;
    const difference = a.endDate.localeCompare(b.endDate);
    return order === 'oldest' ? difference : -difference;
  });
}