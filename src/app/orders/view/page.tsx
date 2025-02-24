"use client";
import { useState } from "react";

// Define the Order type
type Order = {
  id: number;
  customer: string;
  status: string;
  total: number;
};

// Orders array
const initialOrders: Order[] = [
  { id: 1, customer: "John Doe", status: "Shipped", total: 150 },
  { id: 2, customer: "Jane Smith", status: "Pending", total: 200 },
  { id: 3, customer: "Alice Johnson", status: "Delivered", total: 100 },
];

export default function ViewOrders() {
  const [orders] = useState<Order[]>(initialOrders);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Order ID</th>
              <th className="border p-2 text-left">Customer</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Total ($)</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td className="border p-2">{order.id}</td>
                  <td className="border p-2">{order.customer}</td>
                  <td className="border p-2">{order.status}</td>
                  <td className="border p-2">${order.total.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="border p-2 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
