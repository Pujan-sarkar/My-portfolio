import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { RiNetflixFill } from "@remixicon/react"; // Netflix icon

const Experience = () => {
  return (
    <div
      id="Experience"
      className="p-10 md:p-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-10">
        Experience
      </h1>

      <div className="flex flex-wrap items-center justify-around gap-10">
        {/* Technologies */}
        <div className="flex flex-wrap gap-8 md:p-12 py-10 justify-center">
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            <FaNodeJs color="#339933" size={50} />{" "}
            {/* Replaced with FontAwesome Node.js icon */}
          </span>
          <span className="p-3 bg-gray-900 flex items-center rounded-2xl shadow-lg">
            {/* Express icon as text (Express doesn't have an icon in react-icons) */}
            <span className="text-white text-2xl font-semibold">
              Express.js
            </span>
          </span>
        </div>

        {/* Job Experiences */}
        <div className="space-y-6 w-full md:w-2/3">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-lg">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="text-xl font-bold">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2022 - present
              </p>
              <ul className="text-sm mt-2">
                <li>- Worked as a software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-lg">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="text-xl font-bold">Software Engineer, Netflix</h2>
              <p className="text-sm leading-tight font-thin">
                July 2020 - Sept 2022
              </p>
              <ul className="text-sm mt-2">
                <li>- Worked as a software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center shadow-lg">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="text-xl font-bold">Software Engineer, Amazon</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2019 - July 2020
              </p>
              <ul className="text-sm mt-2">
                <li>- Worked as a software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
