import React from "react";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import profileImg from "../../assets/images/profile.jpg";

const AboutApp = () => {
  return (
    <div className="space-y-6 text-gray-900">

      {/* PROFILE SECTION */}
      <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <img
          src={profileImg}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover shadow-md border border-gray-200 mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-900">
          {profile.name}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          Full Stack Developer
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sudharsan5470436@gmail.com"
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
          >
            Email
          </a>

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-3">

        <div className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Projects</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold">5+</h3>
          <p className="text-sm text-gray-500">Tech Stack</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold">1</h3>
          <p className="text-sm text-gray-500">Internship</p>
        </div>

      </div>

      {/* ABOUT */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          About Me
        </h2>

        <p className="text-gray-600 leading-relaxed text-[15px]">
          {profile.about}
        </p>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-900">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-900">
          Experience
        </h2>

        {profile.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition mb-4"
          >
            <h3 className="font-semibold text-gray-900">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-500">
              {exp.company} • {exp.duration}
            </p>

            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AboutApp;