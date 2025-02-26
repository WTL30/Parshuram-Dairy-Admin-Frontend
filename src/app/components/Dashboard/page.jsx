
export default function Dashboard() {
    const stats = [
      { title: "Total Sales", value: "0", color: "bg-blue-500" },
      { title: "Total Products", value: "0", color: "bg-green-500" },
      { title: "Orders Request", value: "0", color: "bg-yellow-500" },
      { title: "Confirmed Orders", value: "0", color: "bg-purple-500" },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 mx-6">  
        {/* Added mt-6 for top space & mx-6 for left and right spacing */}
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white shadow-lg ${stat.color} flex flex-col items-center`}
          >
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    );
  }
  