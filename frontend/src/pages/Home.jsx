import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">

      {/* Background Image Section with Text */}
      <div
        className="h-[70vh] bg-[url('/src/assets/bg.jpg')] bg-cover bg-center relative flex items-center justify-center text-white"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content on BG */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
              GradVoyage
            </span>{" "}
            <br />
            Your Study Abroad Journey Starts Here 🚀
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover top universities, track important deadlines, and unlock
            life-changing scholarships — all in one colourful space built just
            for dreamers like you ✨
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
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
      </div>


      {/* Hero Section Below */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 max-w-6xl mx-auto text-white">

        
        <div className="relative flex-shrink-0 w-64 md:w-96">
          {/* Animated Blobs */}
          <div className="absolute -top-10 -left-10 w-52 h-52 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-52 h-52 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ping"></div>
          <div className="absolute bottom-0 left-10 w-52 h-52 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce"></div>

          
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Abroad"
            className="relative drop-shadow-2xl animate-float"
          />
        </div>

        
        <div className="flex flex-col text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Why Choose GradVoyage?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Get personalized guidance, explore scholarship opportunities, and
            make your dream of studying abroad a reality 🌍
          </p>

          
          <Link
            to="/showcase"
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-indigo-500 transition-all duration-300 w-fit mx-auto md:mx-0"
          >
            🚀 Explore Showcase
          </Link>
        </div>
      </div>
    </div>
  );
}
