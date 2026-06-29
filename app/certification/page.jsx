import { certificatesDetails } from "@/Assets/Certificate";
import React from "react";

export default function () {
  return (
    <div className="mt-16 p-10 bg-gray-200 max-sm:mt-24">
      <h1 className="text-4xl font-bold text-center text-black">
        Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {certificatesDetails.map((cert, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-5 border border-gray-400"
          >
            <img
              src={cert.imgSrc}
              alt={cert.name}
              className="object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-black">{cert.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
