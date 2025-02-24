import React from "react";

const customers = [
  { id: 1, name: "John Doe", address: "123 Main St", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", address: "456 Oak St", phone: "987-654-3210" },
  { id: 3, name: "David Miller", address: "789 Pine St", phone: "456-789-1234" },
];

export default function CustomerList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Customer List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">{customer.id}</td>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.address}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
