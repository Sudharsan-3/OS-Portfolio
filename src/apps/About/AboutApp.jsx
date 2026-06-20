import React from "react";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import profileImg from "../../assets/images/profile.jpg";

const AboutApp = () => {
  return (
    <div className="space-y-6">
        {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <img
          src={profileImg}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover shadow-md mb-3"
        />
        <h2 className="text-xl font-bold">Your Name</h2>
      </div>
      
      {/* About */}
      <div>
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-gray-700">
          {profile.about}
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Experience</h2>

        {profile.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-600">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              {exp.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AboutApp;