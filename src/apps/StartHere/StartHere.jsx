import React from "react";
import { useWindow } from "../../context/WindowContext";

const StartHere = () => {
  const { openWindow } = useWindow();

  return (
    <div className="max-w-3xl mx-auto py-6 text-center">

      {/* Hero */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to My Portfolio
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Explore my projects, experience, skills and resume through this
          interactive desktop experience.
        </p>

      </div>

      {/* Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <button
          onClick={() => openWindow("Projects")}
          className="
            text-left
            bg-white
            border border-gray-200
            rounded-2xl
            p-5
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
          "
        >
          <h3 className="font-semibold text-lg text-gray-900">
            🚀 Projects
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Explore real-world applications and development work.
          </p>
        </button>

        <button
          onClick={() => openWindow("About")}
          className="
            text-left
            bg-white
            border border-gray-200
            rounded-2xl
            p-5
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
          "
        >
          <h3 className="font-semibold text-lg text-gray-900">
            👨‍💻 About Me
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Learn about my journey, skills and professional experience.
          </p>
        </button>

        <button
          onClick={() => openWindow("Resume")}
          className="
            text-left
            bg-white
            border border-gray-200
            rounded-2xl
            p-5
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
          "
        >
          <h3 className="font-semibold text-lg text-gray-900">
            📄 Resume
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            View or download my latest professional resume.
          </p>
        </button>

      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-gray-500">
        Associate Software Engineer • Full Stack Developer
      </div>

    </div>
  );
};

export default StartHere;