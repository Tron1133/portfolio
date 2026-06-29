import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-3 px-10  text-white border flex justify-between items-center z-50 max-sm:grid max-sm:px-2 max-sm:space-y-5">
      <div className="text-lg font-semibold ">
        <a
          href="/"
          className="flex space-x-2 space-y-0 justify-between items-center max-sm:justify-start"
        >
          <img
            src="/formal-img.jpg"
            alt="Profile"
            className="w-9 h-9 object-cover rounded-full"
          />
          <div>
            <h1>
              Anand Kumar
              <p className="font-normal text-xs">
                Website Is Designed & Developed By Me.
              </p>
            </h1>
          </div>
        </a>
      </div>
      <div className="flex space-x-10 max-sm:space-x-4">
        <a href="/" className="hover:scale-105">
          Home
        </a>
        <a href="/projects" className="hover:scale-105">
          Projects
        </a>
        {/* <a href="/resume" className="hover:scale-105">
          Resume
        </a> */}
        <a href="/certification" className="hover:scale-105">
          Certifications
        </a>
        <a href="/contact" className="hover:scale-105">
          Contact
        </a>
      </div>
    </nav>
  );
}
