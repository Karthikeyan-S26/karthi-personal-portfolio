
import React from "react";
import { Download } from "lucide-react";

const ResumePDFDownloadButton = () => {
  return (
    <a
      href="/Uploads/karthikeyan S Resume.pdf"
      download="karthikeyan S Resume.pdf"
      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
    >
      <Download size={20} />
      Download Resume
    </a>
  );
};

export default ResumePDFDownloadButton;
