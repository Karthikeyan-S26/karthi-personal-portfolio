
import React from 'react';
import ResumeHeader from './resume/ResumeHeader';
import ResumeSummary from './resume/ResumeSummary';
import ResumeEducation from './resume/ResumeEducation';
import ResumeSkills from './resume/ResumeSkills';
import ResumeExperience from './resume/ResumeExperience';
import ResumeProjects from './resume/ResumeProjects';
import ResumeAchievements from './resume/ResumeAchievements';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">
      <ResumeHeader />
      
      {/* Main Content */}
      <div className="p-6 print:p-4 space-y-6 print:space-y-4">
        <ResumeSummary />
        
        {/* Two Column Layout for Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
          <ResumeEducation />
          <ResumeSkills />
        </div>

        <ResumeExperience />
        <ResumeProjects />
        <ResumeAchievements />
      </div>
    </div>
  );
};

export default Resume;
