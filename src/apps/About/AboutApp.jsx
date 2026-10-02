import React from "react";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import profileImg from "../../assets/images/profile.jpg";
import bannerImg from "../../assets/images/banner.png";

const AboutApp = () => {
  return (
    <div className="space-y-5 sm:space-y-6 text-gray-900">

      {/* PROFILE */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* Banner */}
        <div className="h-40 sm:h-52 overflow-hidden bg-gray-100">
          <img
            src={bannerImg}
            alt="Portfolio banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Content */}
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">

          <img
            src={profileImg}
            alt={profile.name}
            className="
              -mt-12
              sm:-mt-16
              w-24 h-24
              sm:w-32 sm:h-32
              rounded-full
              object-cover
              border-4 border-white
              shadow-lg
            "
          />

          <div className="mt-3">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              About Me
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
              {profile.name}
            </h2>

            <p className="mt-1 text-sm sm:text-base text-gray-600">
              Associate Software Engineer
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
              React • Node.js • PostgreSQL • MongoDB
            </p>
          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2.5 mt-5">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-gray-900
                px-4 py-2.5
                text-sm
                font-medium
                text-white
                hover:bg-black
                active:scale-[0.98]
                transition
              "
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                px-4 py-2.5
                text-sm
                font-medium
                text-white
                hover:bg-blue-700
                active:scale-[0.98]
                transition
              "
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4 py-2.5
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
                active:scale-[0.98]
                transition
              "
            >
              Email
            </a>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-3 gap-2.5 sm:gap-3">

        <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            10+
          </p>

          <p className="mt-1 text-[10px] sm:text-xs text-gray-500 leading-4">
            Projects Built
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            14+
          </p>

          <p className="mt-1 text-[10px] sm:text-xs text-gray-500 leading-4">
            Months Experience
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            3
          </p>

          <p className="mt-1 text-[10px] sm:text-xs text-gray-500 leading-4">
            Professional Roles
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">

        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            About Me
          </h2>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <p className="mt-4 text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-600">
          {profile.about}
        </p>

      </section>

      {/* SKILLS */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">

        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">
            Skills & Technologies
          </h2>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="
                rounded-xl
                border border-blue-100
                bg-blue-50
                px-3 py-1.5
                text-xs sm:text-sm
                font-medium
                text-blue-700
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">

        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">
            Experience
          </h2>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mt-6 space-y-7">

          {profile.experience.map((exp, index) => (
            <div
              key={index}
              className="flex gap-3.5 sm:gap-4"
            >

              {/* Timeline */}
              <div className="flex flex-col items-center">

                <div className="mt-1 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-blue-50" />

                {index !== profile.experience.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-blue-100" />
                )}

              </div>

              {/* Experience Content */}
              <div className="min-w-0 pb-1">

                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {exp.role}
                </h3>

                <p className="mt-0.5 text-sm font-medium text-blue-600">
                  {exp.company}
                </p>

                <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                  {exp.duration}
                </p>

                <p className="mt-2.5 text-sm leading-6 text-gray-600">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default AboutApp;