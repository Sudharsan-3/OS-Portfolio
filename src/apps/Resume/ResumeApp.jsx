import React from "react";
import useDeviceType from "../../hooks/useDeviceType";

const ResumeApp = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  return (
    <div
      className={
        isMobile
          ? "space-y-5 text-gray-900"
          : "h-full flex flex-col gap-5 text-gray-900"
      }
    >
      {/* HEADER */}
      <div
        className="
          shrink-0
          bg-gradient-to-br from-blue-50 via-white to-white
          border border-gray-200
          rounded-2xl
          p-5 sm:p-6
        "
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
          Career Profile
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
          Resume
        </h2>

        <p className="text-sm sm:text-[15px] text-gray-600 leading-6 mt-2">
          Associate Software Engineer with experience in React.js,
          Node.js, Express.js, PostgreSQL, MongoDB and modern web
          application development.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              flex-1 inline-flex items-center justify-center
              px-4 py-2.5 rounded-xl
              bg-gray-900 text-white text-sm font-medium
              hover:bg-black active:scale-[0.98] transition
            "
          >
            Open Resume ↗
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              flex-1 inline-flex items-center justify-center
              px-4 py-2.5 rounded-xl
              bg-blue-600 text-white text-sm font-medium
              hover:bg-blue-700 active:scale-[0.98] transition
            "
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* DESKTOP PDF */}
      {!isMobile && (
        <div
          className="
            flex-1 min-h-0
            bg-white
            border border-gray-200
            rounded-2xl
            overflow-hidden
            shadow-sm
          "
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full border-0"
          />
        </div>
      )}
    </div>
  );
};

export default ResumeApp;