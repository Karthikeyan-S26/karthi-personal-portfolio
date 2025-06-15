
import React from 'react';
import ResumeComponent from '../components/Resume';
import ResumePDFDownloadButton from '../components/resume/ResumePDFDownloadButton';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ResumeComponent />
        <div className="text-center mt-8">
          <ResumePDFDownloadButton />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
