import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-black text-white text-center p-10 max-sm:grid max-sm:space-y-2 max-sm:text-left">
      <p>Phone: +91 9145822892</p>
      <p>Email: anandkumarak5514@gmail.com</p>

      <Link
        href="https://www.linkedin.com/in/anand-kumar-b650b5272/"
        rel="noopener noreferrer"
        target="_blank"
        className="underline"
      >
        LinkedIn
      </Link>

      <p>&copy; Anand Kumar. All Rights Reserved.</p>
    </footer>
  );
}
