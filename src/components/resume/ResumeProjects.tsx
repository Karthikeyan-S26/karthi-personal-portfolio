
import React from 'react';
import { Award } from 'lucide-react';

const ResumeProjects = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-blue-600 pb-1 flex items-center gap-2">
        <Award size={20} />
        Key Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div>
          <h4 className="text-sm font-semibold text-gray-800">Smart Traffic Management System</h4>
          <p className="text-blue-600 font-medium">SIH 2024</p>
          <p className="text-gray-700">Intelligent traffic management solution using IoT and ML algorithms.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">AI Habit Tracker</h4>
          <p className="text-blue-600 font-medium">HackIndia 2025</p>
          <p className="text-gray-700">Habit tracking app with AI-powered insights and recommendations.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">Sign Language Conversion</h4>
          <p className="text-blue-600 font-medium">ML Project</p>
          <p className="text-gray-700">ML algorithms to convert sign language gestures into text.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">StyleSpot E-commerce</h4>
          <p className="text-blue-600 font-medium">Full Stack App</p>
          <p className="text-gray-700">Complete e-commerce solution with authentication and payments.</p>
          <a href="https://github.com/Karthikeyan-S26/stylespot" className="text-blue-500 underline text-xs">GitHub</a>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800">ThoughtNest Blog</h4>
          <p className="text-blue-600 font-medium">Full Stack App</p>
          <p className="text-gray-700">Global blog platform with content management and user engagement.</p>
          <a href="https://github.com/Karthikeyan-S26/thoughtnest-global-voices" className="text-blue-500 underline text-xs">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ResumeProjects;
