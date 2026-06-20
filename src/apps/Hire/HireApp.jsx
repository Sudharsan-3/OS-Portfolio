import React from "react";
import { profile } from "../../data/profile";

const HireApp = () => {
  return (
    <div className="space-y-6 text-center">
      
      <h2 className="text-2xl font-bold">Hire Me</h2>

      {/* Message */}
      <p className="text-gray-700 max-w-md mx-auto">
        I am open to exciting opportunities in full stack development.
        If you have a project or a role that fits my skills, feel free to reach out!
      </p>

      {/* CTA Button */}
      <div>
        <a
          href={`mailto:${profile.email}`}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Contact Me
        </a>
      </div>

    </div>
  );
};

export default HireApp;