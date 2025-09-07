export default function Universities() {
  const sampleUniversities = [
    { name: "MIT", country: "USA", tuition: "$50,000/year" },
    { name: "TU Munich", country: "Germany", tuition: "Low / Free" },
    { name: "University of Toronto", country: "Canada", tuition: "$30,000/year" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Suggested Universities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleUniversities.map((u, i) => (
          <div key={i} className="p-4 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700">{u.name}</h3>
            <p className="text-gray-600">Country: {u.country}</p>
            <p className="text-gray-600">Tuition: {u.tuition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
