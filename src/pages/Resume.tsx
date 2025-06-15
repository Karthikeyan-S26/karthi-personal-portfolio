
import React from 'react';
import ResumeComponent from '../components/Resume';
import ResumePDFDownloadButton from '../components/resume/ResumePDFDownloadButton';
import { Download } from 'lucide-react';

const ResumePage = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Karthikeyan_S_Resume (9).pdf';
    link.download = 'Karthikeyan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ResumeComponent />
        <div className="text-center mt-8 space-y-4">
          <button
            onClick={downloadResume}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
          <ResumePDFDownloadButton />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
