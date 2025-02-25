"use client"; // Needed for Client Components

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewCustomer() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate a delay for loading effect
    setTimeout(() => {
      // Dummy users list
      const users = [
        { id: "1", name: "John Doe", status: "Active", email: "john@example.com" },
        { id: "2", name: "Jane Smith", status: "Blocked", email: "jane@example.com" },
        { id: "3", name: "Michael Brown", status: "Active", email: "michael@example.com" },
      ];

      // Get ID from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");

      // Find user by ID
      const foundUser = users.find((user) => user.id === id);

      if (foundUser) {
        setUser(foundUser);
      } else {
        // If user not found, set a default dummy user
        setUser({ id: "N/A", name: "Unknown User", status: "N/A", email: "unknown@example.com" });
      }
    }, 1000); // Simulate network delay
  }, []);

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <table className="border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-2">{user.id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className={`border p-2 font-bold ${user.status === "Blocked" ? "text-red-500" : "text-green-500"}`}>
              {user.status}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="px-4 py-2 mt-4 rounded bg-gray-500 text-white"
        onClick={() => router.push("/app/manageUsers")}
      >
        Back to Users
      </button>
    </div>
  );
}
