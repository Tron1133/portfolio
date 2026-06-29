"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((shot, index) => (
          <div
            key={index}
            onClick={() => setSelected(shot)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative h-52">
              <Image
                src={shot.image}
                alt={shot.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h4 className="font-semibold">{shot.title}</h4>

              <p className="text-gray-500 text-sm mt-2">{shot.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
        >
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
