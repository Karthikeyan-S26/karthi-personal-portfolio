
import React from 'react';
import ResumeComponent from '../components/Resume';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <button 
            onClick={() => window.print()} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Print Resume
          </button>
        </div>
        <ResumeComponent />
      </div>
    </div>
  );
};

export default ResumePage;
