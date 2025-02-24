"use client";
import { useState } from "react";

const orders = [
  { id: 1, customer: "John Doe", status: "Shipped" },
  { id: 2, customer: "Jane Smith", status: "Pending" },
  { id: 3, customer: "Alice Johnson", status: "Delivered" },
];

export default function CancelOrder() {
  const [selectedOrder, setSelectedOrder] = useState(orders[0].id);
  const [message, setMessage] = useState("");

  const handleCancel = () => {
    setMessage(`Order ${selectedOrder} has been cancelled.`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Cancel Order</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Select Order:</label>
        <select
          className="border p-2 w-full"
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(Number(e.target.value))}
        >
          {orders.map((order) => (
            <option key={order.id} value={order.id}>
              Order {order.id} - {order.customer}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleCancel}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cancel Order
      </button>

      {message && <p className="mt-4 text-red-600 font-semibold">{message}</p>}
    </div>
  );
}
