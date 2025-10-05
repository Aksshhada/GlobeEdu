import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">YourLogo</h2>
          <p className="text-sm leading-6">
            Empowering students and learners with resources, knowledge, and opportunities to grow and succeed globally.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}
