"use client";
import { useState } from "react";

export default function BlockUnblockUser() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Blocked" },
    { id: 3, name: "Michael Brown", status: "Active" },
  ]);

  const toggleStatus = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? { ...customer, status: customer.status === "Active" ? "Blocked" : "Active" }
          : customer
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Customers</h2>
      <table className="border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="text-center">
              <td className="border p-2">{customer.id}</td>
              <td className="border p-2">{customer.name}</td>
              <td className={`border p-2 ${customer.status === "Blocked" ? "text-red-500" : "text-green-500"}`}>
                {customer.status}
              </td>
              <td className="border p-2">
                <button
                  className={`px-4 py-2 rounded ${customer.status === "Blocked" ? "bg-green-500" : "bg-red-500"} text-white`}
                  onClick={() => toggleStatus(customer.id)}
                >
                  {customer.status === "Blocked" ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
