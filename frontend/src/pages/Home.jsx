import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 overflow-hidden text-white">
      
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ping"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 max-w-6xl">
        
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
              GradVoyage
            </span>{" "}
            <br />
            Your Study Abroad Journey Starts Here 🚀
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Discover top universities, track important deadlines, and unlock life-changing scholarships — 
            all in one colourful space built just for dreamers like you ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/universities"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
            >
              🎓 Find Universities
            </Link>
            <Link
              to="/scholarships"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              💰 Explore Scholarships
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-64 md:w-96 animate-float">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Abroad"
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}