import React from "react";
import Link from "next/link";

export default function () {
  return (
    <div className="p-10 bg-gray-200 text-black min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg w-96 text-center">
        <p className="text-xl font-semibold">Phone</p>
        <p className="text-gray-700 mb-4">+91 9145822892</p>

        <p className="text-xl font-semibold">Email</p>
        <p className="text-gray-700 mb-4">anandkumarak5514@gmail.com</p>

        <p className="text-xl font-semibold">LinkedIn</p>
        <Link
          href="https://www.linkedin.com/in/anand-kumar-b650b5272/"
          rel="noopener noreferrer"
          target="_blank"
          className="underline"
        >
          Click here to open my LinkedIn
        </Link>
      </div>
    </div>
  );
}
