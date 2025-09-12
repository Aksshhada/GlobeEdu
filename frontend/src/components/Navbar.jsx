import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            className="h-8 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
          />
          <span className="text-white font-semibold text-lg">ETHGlobal</span>
        </div>

        {/* Center: Nav Links (flex parent + explicit columnGap fallback) */}
        <div className="flex-1 flex justify-center">
          {/* The inline style `columnGap` ensures spacing even if Tailwind gap/space isn't applied */}
          <div className="flex items-center" style={{ columnGap: "3rem" }}>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Packs
            </a>
            <a
              href="#"
              className="text-gray-300 font-medium hover:text-white no-underline"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Showcase
            </a>
          </div>
        </div>

        {/* Right: Profile */}
        <div>
          <button className="h-9 w-9 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
            AK
          </button>
        </div>
      </div>
    </nav>
  );
}
