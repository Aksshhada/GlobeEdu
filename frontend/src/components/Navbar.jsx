import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <Link to="/" className="font-bold text-lg">GradVoyage</Link>
      <div className="space-x-4">
        <Link to="/universities">Universities</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
