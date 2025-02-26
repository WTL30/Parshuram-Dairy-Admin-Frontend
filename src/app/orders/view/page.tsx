"use client";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Order = {
  id: number;
  customerName: string;
  productImage: string;
  productName: string;
  category: string;
  subCategory: string;
  description: string;
  price: number;
  oldPrice: number;
  availableStock: number;
  quantity: number;
  status: string;
  total: number;
};

const initialOrders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    productImage: "/mnt/data/image.png",
    productName: "Milk",
    category: "Dairy",
    subCategory: "Organic",
    description: "Fresh organic milk",
    price: 5,
    oldPrice: 6,
    availableStock: 100,
    quantity: 10,
    status: "Shipped",
    total: 150,
  },
  {
    id: 2,
    customerName: "Jane Smith",
    productImage: "/mnt/data/image.png",
    productName: "Cheese",
    category: "Dairy",
    subCategory: "Aged",
    description: "Aged cheddar cheese",
    price: 8,
    oldPrice: 10,
    availableStock: 50,
    quantity: 5,
    status: "Pending",
    total: 200,
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    productImage: "/mnt/data/image.png",
    productName: "Butter",
    category: "Dairy",
    subCategory: "Salted",
    description: "Creamy salted butter",
    price: 4,
    oldPrice: 5,
    availableStock: 70,
    quantity: 8,
    status: "Delivered",
    total: 100,
  },
];

export default function ViewOrders() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [editOrder, setEditOrder] = useState<Order | null>(null);

  const handleEdit = (order: Order) => {
    setEditOrder(order);
  };

  const handleSave = () => {
    if (editOrder) {
      setOrders((prev) =>
        prev.map((order) => (order.id === editOrder.id ? editOrder : order))
      );
      setEditOrder(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editOrder) {
      setEditOrder({ ...editOrder, [name]: value });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  const getStatusBadge = (status: string) => {
    const baseStyle = "px-3 py-1 rounded-full text-sm font-semibold";
    switch (status) {
      case "Shipped":
        return <span className={`${baseStyle} bg-blue-100 text-blue-700`}>Shipped</span>;
      case "Pending":
        return <span className={`${baseStyle} bg-yellow-100 text-yellow-700`}>Pending</span>;
      case "Delivered":
        return <span className={`${baseStyle} bg-green-100 text-green-700`}>Delivered</span>;
      case "Cancelled":
        return <span className={`${baseStyle} bg-red-100 text-red-700`}>Cancelled</span>;
      default:
        return <span className={`${baseStyle} bg-gray-100 text-gray-700`}>{status}</span>;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Orders</h2>
      <div className="overflow-x-auto">
      <table className="border-collapse w-full border border-gray-300">
  <thead className="bg-blue-600 text-black">
    <tr>
      {[
        "Order ID", "Customer Name", "Product Image", "Product Name", "Category",
        "Sub Category", "Description", "Price", "Old Price", "Available Stock",
        "Quantity", "Status", "Total", "Actions"
      ].map((header) => (
        <th key={header} className="bg-gray-200 border border-gray-300 p-2">{header}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {orders.map((order) => (
      <tr key={order.id} className="text-center hover:bg-blue-100 transition-colors duration-200">
        <td className="border border-gray-300 p-3">{order.id}</td>
        <td className="border border-gray-300 p-3">{order.customerName}</td>
        <td className="border border-gray-300 p-3">
          <img src={order.productImage} alt={order.productName} className="w-12 h-12 mx-auto" />
        </td>
        <td className="border border-gray-300 p-3">{order.productName}</td>
        <td className="border border-gray-300 p-3">{order.category}</td>
        <td className="border border-gray-300 p-3">{order.subCategory}</td>
        <td className="border border-gray-300 p-3">{order.description}</td>
        <td className="border border-gray-300 p-3">{order.price}</td>
        <td className="border border-gray-300 p-3">{order.oldPrice}</td>
        <td className="border border-gray-300 p-3">{order.availableStock}</td>
        <td className="border border-gray-300 p-3">{order.quantity}</td>
        <td className="border border-gray-300 p-3">{getStatusBadge(order.status)}</td>
        <td className="border border-gray-300 p-3">{order.total}</td>
        <td className="border border-gray-300 p-3 flex justify-center space-x-3">
          <FaEdit className="text-green-600 cursor-pointer hover:text-green-800" onClick={() => handleEdit(order)} />
          <FaTrash className="text-red-600 cursor-pointer hover:text-red-800" onClick={() => handleDelete(order.id)} />
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
}
