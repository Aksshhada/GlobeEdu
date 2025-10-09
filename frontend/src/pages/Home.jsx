import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Background Image Section with Text */}
      <div className="h-[100vh] bg-[url('/src/assets/hero-students.jpg')] bg-cover bg-center relative flex items-center justify-center text-white">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content on BG */}
        <div className="relative z-10 text-center max-w-3xl px-6 mt-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
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









<div className="w-full h-40 overflow-hidden relative flex items-center mt-9">
  <div className="animate-marquee flex space-x-8">
    
    {/* Box 1 */}
    <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🎓 Universities
    </span>

    {/* Box 2 */}
    <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
      💰 Scholarships
    </span>

    {/* Box 3 */}
    <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🌍 Global Dreams
    </span>

    {/* Box 4 */}
    <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🚀 Opportunities
    </span>

    {/* Duplicate for seamless loop */}
    <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🎓 Universities
    </span>
    <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
      💰 Scholarships
    </span>
    <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🌍 Global Dreams
    </span>
    <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🚀 Opportunities
    </span>
  </div>
</div>








      {/*  OG 3 Boxes Section */}
      
      {/* <div className="mt-30 grid grid-cols-3 gap-15 max-w-6xl mx-auto px-4 mb-30">
        <div className="bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Global Network</h3>
          <p className="text-gray-600">
            Connect with top universities and opportunities around the world.
          </p>
        </div>

        <div className="bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Scholarships</h3>
          <p className="text-gray-600">
            Explore scholarships designed to support your study abroad dreams.
          </p>
        </div>

        <div className="bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Career Growth</h3>
          <p className="text-gray-600">
            Unlock global opportunities and take your career to the next level.
          </p>
        </div>
      </div> */}










{/* 3 Boxes Section */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-20">
  {/* Card 1 */}
  <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
    <div className="flex justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Global Network"
        className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
      />
    </div>
    <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
      Global Network
    </h3>
    <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
      Connect with top universities and opportunities around the world.
    </p>
  </div>

  {/* Card 2 */}
  <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
    <div className="flex justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
        alt="Scholarships"
        className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12"
      />
    </div>
    <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
      Scholarships
    </h3>
    <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
      Explore scholarships designed to support your study abroad dreams.
    </p>
  </div>

  {/* Card 3 */}
  <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
    <div className="flex justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135773.png"
        alt="Career Growth"
        className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
      />
    </div>
    <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
      Career Growth
    </h3>
    <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
      Unlock global opportunities and take your career to the next level.
    </p>
  </div>
</div>











      {/* blue one content and no bg image [#f967eb]*/}
      <div className="h-[70vh] bg-[#822778] bg-cover bg-center relative flex items-center justify-center text-white">
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


{/* scrolling line marquee */}
<div className="w-full h-40 overflow-hidden relative flex items-center mt-9">
  <div className="animate-marquee flex space-x-8">
    
    {/* Box 1 */}
    <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🎓 Universities
    </span>

    {/* Box 2 */}
    <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
      💰 Scholarships
    </span>

    {/* Box 3 */}
    <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🌍 Global Dreams
    </span>

    {/* Box 4 */}
    <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🚀 Opportunities
    </span>

    {/* Duplicate for seamless loop */}
    <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🎓 Universities
    </span>
    <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
      💰 Scholarships
    </span>
    <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🌍 Global Dreams
    </span>
    <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
      🚀 Opportunities
    </span>
  </div>
</div>


      {/* Just Animated Image on Right */}
      <div className="relative flex justify-between px-6 py-16 max-w-6xl mx-auto">
        {/* left text */}
        <div className="flex flex-col text-left max-w-xl mt-[50px] mb-[70px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Study Smarter, Dream Bigger OR Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            We provide everything you need to succeed with our simple yet
            powerful platform.
          </p>
        </div>

        <div className="relative flex-shrink-0 mt-8">
          {/* Animated Blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ping"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce"></div>

          {/* Student Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Abroad"
            className="relative drop-shadow-2xl animate-float w-40 md:w-56 h-auto"
            style={{ width: "320px", height: "320px" }}
          />
        </div>
      </div>
    </div>
  );
}
