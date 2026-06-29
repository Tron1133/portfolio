import React from "react";
import { activities, aboutMe } from "../../Assets/Content.js";

export default function HomePage() {
  return (
    <div className="p-20 mt-16 bg-gray-200 text-black">
      {/* Profile Section */}
      <div className="flex max-sm:grid justify-center items-center space-x-8 bg-white border border-black p-10 rounded-lg shadow-lg">
        <div>
          <img
            src="/formal-img.jpg"
            alt="Profile"
            className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        <div className="grid w-2/3 justify-center items-center">
          <h1 className="text-4xl text-green-950 font-bold">Hello</h1>
          <p className="mt-1 text-justify">{aboutMe}</p>
          <br />
          <p>
            <b>Technical Skills :</b> React, Next.js, Python, Express.js,
            FastAPI, APIs, SQL, Google Analytics
          </p>
        </div>
      </div>
      {/* Buttons Section */}
      <div className="mt-10 flex align-middle justify-center space-x-6 max-sm:grid max-sm:space-y-6">
        <a
          href="/projects"
          className="bg-[#4caf50] text-white w-32 text-center px-6 py-3 rounded-lg shadow-md transition-transform  hover:scale-105"
        >
          Projects
        </a>

        {/* <a
          href="/resume"
          className="bg-[#4caf50] text-white w-32 text-center px-6 py-3 rounded-lg shadow-md transition-transform  hover:scale-105"
        >
          Resume
        </a> */}

        <a
          href="/certification"
          className="bg-[#4caf50] text-white w-32 text-center px-6 py-3 rounded-lg shadow-md transition-transform  hover:scale-105"
        >
          Certifications
        </a>
      </div>

      {/* Extracurricular Activities */}
      <div className="mt-16">
        <h1 className="text-3xl text-black font-bold text-center">
          Extra-curricular Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {activities.map((act, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-5 border border-black"
            >
              <img
                src={act.imgSrc}
                alt={act.topic}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl text-black text-left font-semibold">
                  {act.topic}
                </h3>
                <p className="mt-2 text-gray-700 text-left">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
