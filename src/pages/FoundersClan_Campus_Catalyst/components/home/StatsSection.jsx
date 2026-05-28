export function StatsSection() {
  const stats = [
    { number: "500+", label: "Active Founders" },
    { number: "$2B+", label: "Collective Valuation" },
    { number: "50+", label: "Countries" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
