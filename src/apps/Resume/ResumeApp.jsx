import React from "react";

const ResumeApp = () => {
  return (
    <div className="space-y-4">
      
      <h2 className="text-2xl font-bold">Resume</h2>

      {/* Full Height Viewer */}
      <div className="w-full h-[70vh] border rounded-lg overflow-hidden shadow">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Open Full Screen
        </a>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download
        </a>
      </div>

    </div>
  );
};

export default ResumeApp;