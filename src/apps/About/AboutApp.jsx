import React from "react";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import profileImg from "../../assets/images/profile.jpg";

const AboutApp = () => {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div
        className="
  flex flex-col
  items-center
  text-center
  bg-gradient-to-b
  from-blue-50
  to-white
  rounded-2xl
  p-6
  shadow-md
"
      >
        <img
          src={profileImg}
          alt="profile"
          className="
w-32
h-32
rounded-full
object-cover
shadow-xl
border-4
border-white
mb-4
"
        />
        <h2 className="text-2xl font-bold">
          {profile.name}
        </h2>

        <p className="text-gray-500">
          Full Stack Developer
        </p>
        <div className="flex gap-3 mt-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-100 rounded-xl p-3 text-center">
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Projects</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-3 text-center">
          <h3 className="text-xl font-bold">5+</h3>
          <p className="text-sm text-gray-500">Tech Stack</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-3 text-center">
          <h3 className="text-xl font-bold">1</h3>
          <p className="text-sm text-gray-500">Internship</p>
        </div>
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
              className="bg-blue-100
text-blue-700
font-medium
px-3
py-1
rounded-full
text-sm
hover:scale-105
transition
cursor-default"
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
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 border mb-4"
          >
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