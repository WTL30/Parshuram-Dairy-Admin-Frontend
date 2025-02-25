"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart, FaBoxOpen, FaUsers, FaClipboardList } from "react-icons/fa";

export default function Sidebar() {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Added state for sidebar toggle

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 text-white p-5 w-64 md:w-80 lg:w-64 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaBoxOpen />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaShoppingCart />
              <span>Manage Products</span>
            </Link>
          </li>

          {/* Manage Orders Section */}
          <li>
            <button
              onClick={() => setIsOrdersOpen(!isOrdersOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
            >
              <span className="flex items-center space-x-2">
                <FaClipboardList />
                <span>Manage Orders</span>
              </span>
              {isOrdersOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isOrdersOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/orders/view" className="block p-2 hover:bg-gray-700 rounded">
                    View All Orders
                  </Link>
                </li>
                <li>
                  <Link href="/orders/update" className="block p-2 hover:bg-gray-700 rounded">
                    Update Order Status
                  </Link>
                </li>
                <li>
                  <Link href="/orders/cancel" className="block p-2 hover:bg-gray-700 rounded">
                    Cancel Order
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/users" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaUsers />
              <span>Manage Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}