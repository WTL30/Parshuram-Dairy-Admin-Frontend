"use client";
import { useState } from "react";

const orders = [
  { id: 1, customer: "John Doe", status: "Shipped" },
  { id: 2, customer: "Jane Smith", status: "Pending" },
  { id: 3, customer: "Alice Johnson", status: "Delivered" },
];

export default function UpdateOrderStatus() {
  const [selectedOrder, setSelectedOrder] = useState(orders[0].id);
  const [status, setStatus] = useState(orders[0].status);

  const handleUpdate = () => {
    alert(`Order ${selectedOrder} status updated to ${status}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Update Order Status</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Select Order:</label>
        <select
          className="border p-2 w-full"
          value={selectedOrder}
          onChange={(e) => {
            const orderId = Number(e.target.value);
            setSelectedOrder(orderId);
            setStatus(orders.find((o) => o.id === orderId)?.status || "");
          }}
        >
          {orders.map((order) => (
            <option key={order.id} value={order.id}>
              Order {order.id} - {order.customer}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Update Status:</label>
        <select
          className="border p-2 w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update Status
      </button>
    </div>
  );
}
