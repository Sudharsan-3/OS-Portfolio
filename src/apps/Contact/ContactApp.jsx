import React from "react";
import { profile } from "../../data/profile";

const ContactApp = () => {
  return (
    <div className="space-y-6">
      
      <h2 className="text-2xl font-bold">Contact Me</h2>

      {/* Email */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="text-blue-600 font-medium hover:underline"
        >
          {profile.email}
        </a>
      </div>

      {/* GitHub */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">GitHub</p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          {profile.github}
        </a>
      </div>

      {/* LinkedIn */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600">LinkedIn</p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          {profile.linkedin}
        </a>
      </div>

    </div>
  );
};

export default ContactApp;