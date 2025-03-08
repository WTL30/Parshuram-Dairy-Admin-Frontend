
// export default function Dashboard() {
//     const stats = [
//       { title: "Total Sales", value: "0", color: "bg-blue-500" },
//       { title: "Total Products", value: "0", color: "bg-green-500" },
//       { title: "Orders Request", value: "0", color: "bg-yellow-500" },
//       { title: "Confirmed Orders", value: "0", color: "bg-purple-500" },
//     ];
  
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 mx-6">  
//         {/* Added mt-6 for top space & mx-6 for left and right spacing */}
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg text-white shadow-lg ${stat.color} flex flex-col items-center`}
//           >
//             <h3 className="text-lg font-semibold">{stat.title}</h3>
//             <p className="text-2xl font-bold mt-2">{stat.value}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  

// export default function Dashboard() {
//   const stats = [
//     { title: "Total Sales", value: "0", color: "bg-blue-500" },
//     { title: "Total Products", value: "0", color: "bg-green-500" },
//     { title: "Orders Request", value: "0", color: "bg-yellow-500" },
//     { title: "Confirmed Orders", value: "0", color: "bg-purple-500" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-4 sm:px-6">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className={`p-4 sm:p-6 rounded-lg text-white shadow-lg ${stat.color} flex flex-col items-center`}
//         >
//           <h3 className="text-base sm:text-lg font-semibold">{stat.title}</h3>
//           <p className="text-xl sm:text-2xl font-bold mt-2">{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalProducts: 0,
    ordersRequest: 0,
    confirmedOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stocks/getStock");
        setStats(response.data); // Assuming API returns an object { totalSales, totalProducts, ordersRequest, confirmedOrders }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Sales", value: stats.totalSales, color: "bg-blue-500" },
    { title: "Total Products", value: stats.totalProducts, color: "bg-green-500" },
    { title: "Orders Request", value: stats.ordersRequest, color: "bg-yellow-500" },
    { title: "Confirmed Orders", value: stats.confirmedOrders, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-4 sm:px-6">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className={`p-4 sm:p-6 rounded-lg text-white shadow-lg ${stat.color} flex flex-col items-center`}
        >
          <h3 className="text-base sm:text-lg font-semibold">{stat.title}</h3>
          <p className="text-xl sm:text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
