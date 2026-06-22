import React from "react";
import useDeviceType from "../../hooks/useDeviceType";

const ResumeApp = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-50 to-white border border-gray-200 rounded-2xl p-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Resume
        </h2>

        <p className="text-gray-600 mt-2">
          Associate Software Engineer with experience in
          React.js, Node.js, Express.js, PostgreSQL,
          MongoDB and modern web application development.
        </p>

        {/* Mobile Message */}
        {isMobile && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg">
              Resume Preview
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Mobile browsers may block PDF previews.
              Use the buttons below to open or download my resume.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-4">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2
              bg-gray-900
              text-white
              rounded-xl
              hover:bg-black
              transition
            "
          >
            Open Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              px-4 py-2
              bg-blue-600
              text-white
              rounded-xl
              hover:bg-blue-700
              transition
            "
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* PDF VIEWER */}
      {/* Desktop Only */}
    
      <div
        className="
          bg-white
          border border-gray-200
          rounded-2xl
          overflow-hidden
          shadow-sm
        "
      >
          {!isMobile && (
        <div className="w-full h-[70vh] border rounded-lg overflow-hidden shadow">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>
      )}
      </div>

    </div>
  );
};

export default ResumeApp;