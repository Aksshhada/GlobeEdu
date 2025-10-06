import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-1 mt-3">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto"
              src="/src/assets/logo.png"
              alt="Logo"
            />
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-12">
            <a
              href="#"
              className="text-[#000000] font-medium hover:text-[#000000] transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-[#000000] font-medium hover:text-[#000000] transition-colors"
            >
              Packs
            </a>
            <a
              href="#"
              className="text-[#000000] font-medium hover:text-[#000000] transition-colors"
            >
              Showcase
            </a>
          </div>

          {/* Right Profile/Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto rounded-full"
              src="/src/assets/logo.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}