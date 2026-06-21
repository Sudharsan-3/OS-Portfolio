import React from "react";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import profileImg from "../../assets/images/profile.jpg";
import bannerImg from "../../assets/images/banner.png"

const AboutApp = () => {
  return (
    <div className="space-y-6 text-gray-900">

      {/* PROFILE SECTION */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

        {/* Banner */}
        <div className="h-52 overflow-hidden">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Content */}
        <div className="relative px-6 pb-6">

          <img
            src={profileImg}
            alt="profile"
            className="
      w-32 h-32
      rounded-full
      object-cover
      border-4 border-white
      shadow-lg
      -mt-16
    "
          />

          <div className="mt-3">

            <h2 className="text-3xl font-bold text-gray-900">
              {profile.name}
            </h2>

            <p className="text-gray-600 mt-1">
              Associate Software Engineer
            </p>

            <p className="text-sm text-gray-500 mt-1">
              React • Node.js • PostgreSQL • MongoDB
            </p>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-5">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="
        px-4 py-2
        rounded-xl
        bg-gray-900
        text-white
        hover:scale-105
        transition
      "
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
        px-4 py-2
        rounded-xl
        bg-blue-600
        text-white
        hover:scale-105
        transition
      "
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="
        px-4 py-2
        rounded-xl
        border border-gray-200
        bg-white
        text-gray-700
        hover:bg-gray-50
        transition
      "
            >
              Email
            </a>

          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-3">

        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-blue-600">
            10+
          </h3>
          <p className="text-sm text-gray-500">
            Projects Built
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-blue-600">
            14+
          </h3>
          <p className="text-sm text-gray-500">
            Months Experience
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-blue-600">
            3
          </h3>
          <p className="text-sm text-gray-500">
            Professional Roles
          </p>
        </div>

      </div>

      {/* ABOUT */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About Me
        </h2>

        <p className="text-gray-600 leading-8">
          {profile.about}
        </p>

      </div>

      {/* SKILLS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

  <h2 className="text-xl font-semibold mb-4">
    Skills & Technologies
  </h2>

  <div className="flex flex-wrap gap-2">

    {skills.map((skill,index) => (
      <span
        key={index}
        className="
          px-3 py-2
          rounded-xl
          bg-blue-50
          text-blue-700
          border border-blue-100
          text-sm
          font-medium
          hover:scale-105
          transition
        "
      >
        {skill}
      </span>
    ))}

  </div>

</div>

      {/* EXPERIENCE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

<h2 className="text-xl font-semibold mb-6">
  Experience
</h2>

<div className="space-y-8">

  {profile.experience.map((exp,index) => (
    <div
      key={index}
      className="flex gap-4"
    >

      {/* Timeline */}
      <div className="flex flex-col items-center">

        <div
          className="
            w-4 h-4
            rounded-full
            bg-blue-600
          "
        />

        {index !== profile.experience.length - 1 && (
          <div
            className="
              w-[2px]
              flex-1
              bg-blue-200
              mt-2
            "
          />
        )}

      </div>

      {/* Content */}
      <div className="pb-4">

        <h3 className="font-semibold text-gray-900">
          {exp.role}
        </h3>

        <p className="text-sm text-blue-600">
          {exp.company}
        </p>

        <p className="text-xs text-gray-500 mb-2">
          {exp.duration}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          {exp.description}
        </p>

      </div>

    </div>
  ))}

</div>

</div>

    </div>
  );
};

export default AboutApp;