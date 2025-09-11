// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
//       <Link to="/" className="font-bold text-lg">GradVoyage</Link>
//       <div className="space-x-4">
//         <Link to="/universities">Universities</Link>
//         <Link to="/dashboard">Dashboard</Link>
//       </div>
//     </nav>
//   );
// }









// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-extrabold tracking-wide">
//           Grad<span className="text-yellow-400">Voyage</span>
//         </Link>

//         {/* Links */}
//         <div className="flex space-x-8 font-medium">
//           <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
//           <Link to="/universities" className="hover:text-yellow-300 transition">Universities</Link>
//           <Link to="/scholarships" className="hover:text-yellow-300 transition">Scholarships</Link>
//           <Link to="/resources" className="hover:text-yellow-300 transition">Resources</Link>
//           <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
//         </div>

//         {/* CTA Button */}
//         <Link
//           to="/get-started"
//           className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transform hover:scale-105 transition"
//         >
//           Get Started
//         </Link>
//       </div>
//     </nav>
//   );
// }












import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav 
      className="
        w-full 
        bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 
        text-white 
        shadow-md
        fixed top-0 left-0 z-50
      "
    >
      <div 
        className="
          max-w-7xl mx-auto 
          flex items-center justify-between 
          px-8 py-4
        "
      >
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold tracking-wide"
        >
          Grad<span className="text-yellow-400">Voyage</span>
        </Link>

        {/* Links */}
        <div className="flex space-x-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/universities" className="hover:text-yellow-300 transition">Universities</Link>
          <Link to="/scholarships" className="hover:text-yellow-300 transition">Scholarships</Link>
          <Link to="/resources" className="hover:text-yellow-300 transition">Resources</Link>
          <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/get-started"
          className="
            px-5 py-2 
            bg-yellow-400 text-gray-900 font-semibold 
            rounded-full shadow-md 
            hover:bg-yellow-300 
            transform hover:scale-105 
            transition
          "
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
