
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const ResumeEducation = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-blue-600 pb-1 flex items-center gap-2">
        <GraduationCap size={20} />
        Education
      </h3>
      <div className="space-y-3">
        <div>
          <h4 className="text-base font-semibold text-gray-800">B.Tech Information Technology</h4>
          <p className="text-blue-600 font-medium text-sm">Kongunadu College of Engineering</p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            <Calendar size={12} />
            2023 – 2027
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-800">Higher Secondary Education</h4>
          <p className="text-blue-600 font-medium text-sm">KSV Higher Secondary School</p>
        </div>
      </div>
    </section>
  );
};

export default ResumeEducation;
