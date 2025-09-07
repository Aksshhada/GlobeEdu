import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">🌍 GradVoyage</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Your personal guide to studying abroad — explore universities, track deadlines, and unlock scholarships.
      </p>
      <Link
        to="/universities"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
      >
        Find Universities
      </Link>
    </div>
  );
}
