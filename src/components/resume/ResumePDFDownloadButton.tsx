
import React from "react";
import { Download } from "lucide-react";
import { useResumePDF } from "./useResumePDF";

const ResumePDFDownloadButton = () => {
  const { generatePDF } = useResumePDF();
  return (
    <div className="text-center pt-6">
      <button
        onClick={generatePDF}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
      >
        <Download size={20} />
        Download PDF Resume
      </button>
    </div>
  );
};

export default ResumePDFDownloadButton;
