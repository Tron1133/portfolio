"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Cover Image */}

      <div className="relative h-64 w-full">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>

        <p className="text-gray-600 mb-5">{project.description}</p>

        {/* Role */}

        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Role</p>

            <p className="font-semibold">{project.role}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Industry</p>

            <p className="font-semibold">{project.industry}</p>
          </div>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <button className="bg-green-600 hover:bg-green-700 transition-all text-white px-5 py-3 rounded-lg font-semibold">
            View full product details →
          </button>
        </Link>
      </div>
    </div>
  );
}
