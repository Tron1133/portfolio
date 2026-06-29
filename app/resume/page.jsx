import React from "react";

export default function () {
  return (
    <div className="mt-16 p-10 bg-gray-200 text-black max-sm:mt-24">
      <h1 className="text-4xl font-bold text-center mb-8">Resume</h1>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold">Hobo Video</h3>
          <p className="text-gray-700">
            Product Management Intern (May 2024 - Aug 2024)
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Conducted in-depth market research on influencer marketing to
              identify trends, user needs, and product gaps.
            </li>
            <li>
              Created comprehensive PRDs and user stories to clearly communicate
              product requirements and functionality.
            </li>
            <li>
              Designed wireframes, user flows, and defined key features to shape
              intuitive and impactful user experiences.
            </li>
            <li>
              Performed SQL-based data analysis on influencer datasets to
              uncover key metrics and brand-influencer fit.
            </li>
            <li>
              Collaborated cross-functionally with design and tech teams to
              align on product vision and ensure smooth execution.
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <h3 className="text-xl font-bold"> PGDM in Product Management</h3>
          <p className="text-gray-700">ISBR Business School (2023 - 2025)</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-gray-300 p-2 rounded text-center">
              Product Management
            </li>
            <li className="bg-gray-300 p-2 rounded text-center">
              Market Research
            </li>
            <li className="bg-gray-300 p-2 rounded text-center">Wireframing</li>
            <li className="bg-gray-300 p-2 rounded text-center">
              Data Analysis
            </li>
            <li className="bg-gray-300 p-2 rounded text-center">
              UI/UX Design
            </li>
            <li className="bg-gray-300 p-2 rounded text-center">
              Web Development
            </li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <ul className="list-disc pl-5">
            <li>Research & Development Head at Product Innovation Club.</li>
            <li>
              Created a high-engagement Instagram page about Indian football.
            </li>
            <li>
              Developed and presented a user-centric prototype for a healthcare
              project.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
