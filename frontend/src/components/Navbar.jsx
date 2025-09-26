import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md">
      {/* left side logo */}
      <div className="flex items-center justify-between py-3">
        <div className="ml-[30px] mb-[40px] mt-[20px]">
          {" "}
          {/* arbitrary px value */}
          <img
            className="h-[60px] w-auto"
            src="/src/assets/logo.png"
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

        <div className="mr-[30px] mb-[40px] mt-[20px]">
          {" "}
          {/* arbitrary px value */}
          <img
            className="h-[60px] w-auto"
            src="/src/assets/logo.png"
            alt="Logo"
          />
        </div>
      </div>
    </nav>
  );
}

