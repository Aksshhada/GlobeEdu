// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="w-full">
//       {/* Background Image Section with Text */}
//       <div className="h-[100vh] bg-[url('/src/assets/hero-students.jpg')] bg-cover bg-center relative flex items-center justify-center text-white">
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Text Content on BG */}
//         <div className="relative z-10 text-center max-w-3xl px-6 mt-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
//             <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
//               GradVoyage
//             </span>{" "}
//             <br />
//             Your Study Abroad Journey Starts Here 🚀
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-8">
//             Discover top universities, track important deadlines, and unlock
//             life-changing scholarships — all in one colourful space built just
//             for dreamers like you ✨
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row gap-4 justify-center">
//             <Link
//               to="/universities"
//               className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
//             >
//               🎓 Find Universities
//             </Link>
//             <Link
//               to="/scholarships"
//               className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300"
//             >
//               💰 Explore Scholarships
//             </Link>
//           </div>
//         </div>
//       </div>



// {/* 3 Boxes Section */}
// <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-20">
//   {/* Card 1 */}
//   <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
//     <div className="flex justify-center">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//         alt="Global Network"
//         className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
//       />
//     </div>
//     <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
//       Global Network
//     </h3>
//     <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
//       Connect with top universities and opportunities around the world.
//     </p>
//   </div>

//   {/* Card 2 */}
//   <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
//     <div className="flex justify-center">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//         alt="Scholarships"
//         className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12"
//       />
//     </div>
//     <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
//       Scholarships
//     </h3>
//     <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
//       Explore scholarships designed to support your study abroad dreams.
//     </p>
//   </div>

//   {/* Card 3 */}
//   <div className="group bg-[#FFDAB9] text-gray-900 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-[#FFCC99]">
//     <div className="flex justify-center">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/3135/3135773.png"
//         alt="Career Growth"
//         className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
//       />
//     </div>
//     <h3 className="text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-gray-800">
//       Career Growth
//     </h3>
//     <p className="text-gray-700 transition-opacity duration-500 group-hover:opacity-100">
//       Unlock global opportunities and take your career to the next level.
//     </p>
//   </div>
// </div>



//       {/* blue one content and no bg image*/}
//       <div className="h-[70vh] bg-[#822778] bg-cover bg-center relative flex items-center justify-center text-white">
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Text Content on BG */}
//         <div className="relative z-10 text-center max-w-3xl px-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
//               GradVoyage
//             </span>{" "}
//             <br />
//             Your Study Abroad Journey Starts Here 🚀
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-8">
//             Discover top universities, track important deadlines, and unlock
//             life-changing scholarships — all in one colourful space built just
//             for dreamers like you ✨
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row gap-4 justify-center">
//             <Link
//               to="/universities"
//               className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
//             >
//               🎓 Find Universities
//             </Link>
//             <Link
//               to="/scholarships"
//               className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300"
//             >
//               💰 Explore Scholarships
//             </Link>
//           </div>
//         </div>
//       </div>


// {/* scrolling line marquee */}
// <div className="w-full h-40 overflow-hidden relative flex items-center mt-9">
//   <div className="animate-marquee flex space-x-8">
    
//     {/* Box 1 */}
//     <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🎓 Universities
//     </span>

//     {/* Box 2 */}
//     <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
//       💰 Scholarships
//     </span>

//     {/* Box 3 */}
//     <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🌍 Global Dreams
//     </span>

//     {/* Box 4 */}
//     <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🚀 Opportunities
//     </span>

//     {/* Duplicate for seamless loop */}
//     <span className="px-6 py-3 bg-pink-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🎓 Universities
//     </span>
//     <span className="px-6 py-3 bg-yellow-400 text-gray-900 text-2xl font-semibold rounded-xl shadow-lg">
//       💰 Scholarships
//     </span>
//     <span className="px-6 py-3 bg-green-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🌍 Global Dreams
//     </span>
//     <span className="px-6 py-3 bg-blue-400 text-white text-2xl font-semibold rounded-xl shadow-lg">
//       🚀 Opportunities
//     </span>
//   </div>
// </div>


//       {/* Just Animated Image on Right */}
//       <div className="relative flex justify-between px-6 py-16 max-w-6xl mx-auto">
//         {/* left text */}
//         <div className="flex flex-col text-left max-w-xl mt-[50px] mb-[70px]">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Study Smarter, Dream Bigger OR Why Choose Us?
//           </h2>
//           <p className="text-lg md:text-xl text-gray-200">
//             We provide everything you need to succeed with our simple yet
//             powerful platform.
//           </p>
//         </div>

//         <div className="relative flex-shrink-0 mt-8">
//           {/* Animated Blobs */}
//           <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
//           <div className="absolute top-20 -right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ping"></div>
//           <div className="absolute bottom-0 left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-bounce"></div>

//           {/* Student Image */}
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//             alt="Student Abroad"
//             className="relative drop-shadow-2xl animate-float w-40 md:w-56 h-auto"
//             style={{ width: "320px", height: "320px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }























import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // ensures top scroll on route change
  }, []);

  return (
    <div className="w-full font-sans bg-gradient-to-b from-white via-pink-50 to-yellow-50">
      {/* 🌠 HERO SECTION */}
      <div className="h-[100vh] bg-[url('/src/assets/hero-students.jpg')] bg-cover bg-center relative flex items-center justify-center text-white overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Floating gradient orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-bounce"></div>

        {/* Text */}
        <div className="relative z-10 text-center max-w-3xl px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
              GradVoyage
            </span>
            <br />
            Your Study Abroad Journey Starts Here 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover top universities, track deadlines, and unlock global
            opportunities — a vibrant space for dreamers like you ✨
          </p>
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

        {/* Floating Down Arrow */}
        <div className="absolute bottom-10 text-3xl animate-bounce">⬇️</div>
      </div>

      {/* 🌈 FEATURE CARDS */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-20">
        {[
          {
            title: "Global Network",
            desc: "Connect with top universities and opportunities around the world.",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          },
          {
            title: "Scholarships",
            desc: "Explore scholarships designed to support your study abroad dreams.",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
          },
          {
            title: "Career Growth",
            desc: "Unlock global opportunities and take your career to the next level.",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-[#FFDAB9] to-[#FFE4B5] text-gray-900 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-700 hover:-translate-y-5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:from-[#FFCC99]"
          >
            <div className="flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-700 group-hover:opacity-100 transition-opacity duration-500">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 💜 PURPLE CTA SECTION */}
      <div className="h-[70vh] bg-[#822778] bg-cover bg-center relative flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated Orbs */}
        <div className="absolute w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-40 -top-10 left-10 animate-pulse"></div>
        <div className="absolute w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-40 bottom-10 right-10 animate-bounce"></div>

        <div className="relative z-10 text-center max-w-3xl px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
              Dream. Apply. Fly.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            One platform. Infinite opportunities. Let your future shine globally 🌍
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/universities"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              ✈️ Start Exploring
            </Link>
            <Link
              to="/scholarships"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              💡 Get Scholarships
            </Link>
          </div>
        </div>
      </div>

      {/* 🔁 SCROLLING MARQUEE */}
      <div className="w-full h-40 overflow-hidden relative flex items-center mt-12">
        <div className="animate-marquee flex space-x-8">
          {[
            "🎓 Universities",
            "💰 Scholarships",
            "🌍 Global Dreams",
            "🚀 Opportunities",
          ].map((text, i) => (
            <span
              key={i}
              className={`px-6 py-3 text-2xl font-semibold rounded-xl shadow-lg ${
                i % 2 === 0
                  ? "bg-pink-400 text-white"
                  : "bg-yellow-400 text-gray-900"
              }`}
            >
              {text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "🎓 Universities",
            "💰 Scholarships",
            "🌍 Global Dreams",
            "🚀 Opportunities",
          ].map((text, i) => (
            <span
              key={`dup-${i}`}
              className={`px-6 py-3 text-2xl font-semibold rounded-xl shadow-lg ${
                i % 2 === 0
                  ? "bg-green-400 text-white"
                  : "bg-blue-400 text-white"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* 🧑‍🎓 WHY CHOOSE US */}
      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 py-16 max-w-6xl mx-auto mt-12">
        <div className="flex flex-col text-left max-w-xl mb-12 md:mb-0 animate-slideInLeft">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-purple-700">GradVoyage?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Our platform simplifies your global education journey with smart
            recommendations, real-time updates, and a vibrant community of
            dreamers like you.
          </p>
          <p className="text-md text-gray-600">
            ✨ Stay inspired. Stay informed. Stay unstoppable.
          </p>
        </div>

        <div className="relative flex-shrink-0 animate-float">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-70 animate-ping"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-70 animate-bounce"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Abroad"
            className="relative drop-shadow-2xl w-72 md:w-96 h-auto"
          />
        </div>



{/* 🌈 Floating Always-Visible Cards */}
<div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
  {/* Card 1 */}
  <div className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white font-semibold p-4 rounded-2xl shadow-2xl w-64 text-center transform animate-float hover:scale-105 transition-all duration-300 cursor-pointer">
    💬 Need Help?
    <p className="text-sm mt-1 text-gray-100 font-normal">
      Chat with our AI Study Assistant!
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold p-4 rounded-2xl shadow-2xl w-64 text-center transform animate-float hover:scale-105 transition-all duration-300 cursor-pointer">
    🌍 Join Our Community
    <p className="text-sm mt-1 text-gray-100 font-normal">
      Connect with students around the globe!
    </p>
  </div>
</div>



      </div>

      {/* 🌟 FOOTER */}
      <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-white py-6 text-center mt-12">
        <p className="text-lg font-semibold">
          © 2025 GradVoyage — Built with 💖 by Dreamers for Dreamers
        </p>
      </footer>
    </div>
  );
}
