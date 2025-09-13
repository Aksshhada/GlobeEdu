import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left: Logo only */}
        <div className="flex items-center pl-60">
          <img
            className="h-4 w-auto left-100"
            style={{ height: "60px" }}
            src="/src/assets/logo.png" // Replace with your logo
            alt="Logo"
          />
        </div>

        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center" style={{ columnGap: "3rem" }}>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
            >
              Packs
            </a>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
            >
              Showcase
            </a>
          </div>
        </div>

        {/* Right: Profile */}
        {/* <div>
          <button className="h-9 w-9 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
            AK
          </button>
        </div> */}
      </div>
    </nav>
  );
}
