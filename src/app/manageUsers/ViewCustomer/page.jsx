"use client";
import { useState, useEffect } from "react";

export default function ViewCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // On mount, read the latest data from localStorage
    const stored = localStorage.getItem("myCustomers");
    if (stored) {
      setCustomers(JSON.parse(stored));
    } else {
      // Default data (shouldn't be used if Block/Unblock page already created data)
      const defaults = [
        { id: 1, name: "John Doe", gmail: "john@gmail.com", status: "Active" },
        { id: 2, name: "Jane Smith", gmail: "jane@gmail.com", status: "Blocked" },
        { id: 3, name: "Michael Brown", gmail: "michael@gmail.com", status: "Active" },
      ];
      setCustomers(defaults);
      localStorage.setItem("myCustomers", JSON.stringify(defaults));
    }
  }, []);

  if (!customers.length) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customers List</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Gmail</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((user) => (
              <tr key={user.id} className="text-center hover:bg-gray-50 transition-colors">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.gmail}</td>
                <td
                  className={`border p-2 font-bold ${
                    user.status === "Blocked" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}