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