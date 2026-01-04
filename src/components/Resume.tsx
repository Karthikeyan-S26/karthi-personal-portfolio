
import React from "react";
import ResumeSidebar from "./resume/ResumeSidebar";
import ResumeHeader from "./resume/ResumeHeader";
import ResumeAbout from "./resume/ResumeAbout";
import ResumeInternships from "./resume/ResumeInternships";
import ResumeProjects from "./resume/ResumeProjects";
import ResumeCertifications from "./resume/ResumeCertifications";

const Resume = () => (
  <div className="max-w-6xl mx-auto bg-white shadow-lg print:shadow-none flex flex-col md:flex-row">
    <ResumeSidebar />
    <div className="flex-1 p-4 md:p-8">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeInternships />
      <ResumeProjects />
      <ResumeCertifications />
    </div>
  </div>
);

export default Resume;
