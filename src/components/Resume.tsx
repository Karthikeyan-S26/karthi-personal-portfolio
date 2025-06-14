
import React from "react";
import ResumeSidebar from "./resume/ResumeSidebar";
import ResumeHeader from "./resume/ResumeHeader";
import ResumeAbout from "./resume/ResumeAbout";
import ResumeInternships from "./resume/ResumeInternships";
import ResumeProjects from "./resume/ResumeProjects";
import ResumePDFDownloadButton from "./resume/ResumePDFDownloadButton";

const Resume = () => (
  <div className="max-w-6xl mx-auto bg-white shadow-lg print:shadow-none flex">
    <ResumeSidebar />
    <div className="flex-1 p-8">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeInternships />
      <ResumeProjects />
      <ResumePDFDownloadButton />
    </div>
  </div>
);

export default Resume;
