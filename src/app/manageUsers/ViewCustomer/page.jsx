"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching users...");
        const response = await axios.get(
          "http://localhost:5000/api/admin-manage/"
        );

        console.log("Fetched Users:", response.data.data);

        setCustomers(response.data.data);

        // setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error.message);
        setError("Failed to fetch users. Please try again.");
        // setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
            {customers.map((user, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-50 transition-colors"
              >
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{user.userId.name}</td>
                <td className="border p-2">{user.userId.email}</td>
                <td
                  className={`border p-2 font-bold ${
                    user.items[0].status === "Blocked"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {user.items[0].status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}