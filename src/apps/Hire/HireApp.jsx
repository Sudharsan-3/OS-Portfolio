import React from "react";
import { profile } from "../../data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";


const ContactApp = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">Contact Me</h2>

      {/* Email */}
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <Mail size={18} />
          <span>Email</span>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="text-blue-600 font-medium hover:underline"
        >
          {profile.email}
        </a>
      </div>

      {/* GitHub */}
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <FaGithub size={18} />
          <span>GitHub</span>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline break-all"
        >
          Sudharsan-3
        </a>
      </div>
      {/* LinkedIn */}
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <FaLinkedin size={18} />
          <span>LinkedIn</span>
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline break-all"
        >
          View LinkedIn Profile
        </a>
      </div>

    </div>
  );
};

export default ContactApp;