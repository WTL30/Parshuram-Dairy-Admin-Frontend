"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

export default function Page() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching users...");
        const response = await axios.get(
          "http://localhost:5000/api/admin-manage/"
        );

        console.log("Fetched Users:", response.data.data);

        setCustomers(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error.message);
        setError("Failed to fetch users. Please try again.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleBlockStatus = async (itemId, currentStatus) => {
    console.log("Received Item ID:", itemId); // Debugging: Check the value of itemId
    console.log("Received Current Status:", currentStatus); // Debugging: Check the value of currentStatus

    // Check if itemId or currentStatus are undefined or null
    if (!itemId || !currentStatus) {
      console.error("Error: Missing itemId or currentStatus");
      return; // Exit the function if either of them is missing
    }

    try {
      // Determine the action based on currentStatus
      const action =
        currentStatus.toLowerCase() === "active" ? "block" : "active";
      const apiUrl = `http://localhost:5000/api/orders/update-item-status/${itemId._id}`;

      console.log("Action:", action); // Check the action that will be used
      console.log("API URL:", apiUrl); // Check the API URL being used

      // Send the PUT request to update the status
      const response = await axios.put(apiUrl, { action });
      // setCustomers(response.data)
      console.log("API Response:", response.data.order); // Log the response
      const res = await axios.get("http://localhost:5000/api/admin-manage/");

      console.log("Fetched Users:", res.data.data);

      setCustomers(res.data.data);
    } catch (error) {
      console.error("Error updating item status:", error.message);
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Block/Unblock Users</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> Add User
        </button>
      </div>

      <table className="border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
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
                className={`border p-2 font-semibold ${
                  user?.items[0].status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {user?.items[0].status}
              </td>
              <td className="border p-2">
                <button
                  onClick={() =>
                    toggleBlockStatus(
                      user.items[0].productId,
                      user?.items[0].status
                    )
                  }
                  className={`px-4 py-2 rounded text-white ${
                    user.status === "Active" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {user.items[0].status === "active" ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}