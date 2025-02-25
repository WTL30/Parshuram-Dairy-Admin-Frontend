"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart, FaBoxOpen, FaUsers, FaClipboardList } from "react-icons/fa";

export default function Sidebar() {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isOrdersOpen1, setIsOrdersOpen1] = useState(false);
  const [isOrdersOpen2, setIsOrdersOpen2] = useState(false);
  const [isOrdersOpen3, setIsOrdersOpen3] = useState(false);
  const [isOrdersOpen4, setIsOrdersOpen4] = useState(false);
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
          <Link href="/components/Dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaBoxOpen />
            <span>Dashboard</span>
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
            <button
              onClick={() => setIsOrdersOpen1(!isOrdersOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
            >
              <span className="flex items-center space-x-2">
                <FaClipboardList />
                <span>Manage Users</span>
              </span>
              {isOrdersOpen1 ? <FaTimes /> : <FaBars />}
            </button>
            {isOrdersOpen1 && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/manageUsers/ViewCustomer" className="block p-2 hover:bg-gray-700 rounded">
                    View Customers
                  </Link>
                </li>
                <li>
                  <Link href="/manageUsers/BlockUnblockUser" className="block p-2 hover:bg-gray-700 rounded">
                    Block Unblock User
                  </Link>
                </li>
                <li>
                  <Link href="/manageUsers/ManageUsers" className="block p-2 hover:bg-gray-700 rounded">
                    Manage Users
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setIsOrdersOpen4(!isOrdersOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
            >
              <span className="flex items-center space-x-2">
                <FaClipboardList />
                <span>Manage Payments</span>
              </span>
              {isOrdersOpen4 ? <FaTimes /> : <FaBars />}
            </button>
            {isOrdersOpen4 && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/managePayment" className="block p-2 hover:bg-gray-700 rounded">
                    Manage Payments
                  </Link>
                </li>
                
                
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setIsOrdersOpen3(!isOrdersOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
            >
              <span className="flex items-center space-x-2">
                <FaClipboardList />
                <span>Manage Inventory</span>
              </span>
              {isOrdersOpen3 ? <FaTimes /> : <FaBars />}
            </button>
            {isOrdersOpen3 && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/manageInventory/CheckStockLevels" className="block p-2 hover:bg-gray-700 rounded">
                    Checks Stock Levels
                  </Link>
                </li>
                <li>
                  <Link href="/manageInventory/UpdateStock" className="block p-2 hover:bg-gray-700 rounded">
                    Update stocks
                  </Link>
                </li>
                
              </ul>
            )}
          </li>




          <li>
            <button
              onClick={() => setIsOrdersOpen2(!isOrdersOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
            >
              <span className="flex items-center space-x-2">
                <FaClipboardList />
                <span>Manage Products</span>
              </span>
              {isOrdersOpen2 ? <FaTimes /> : <FaBars />}
            </button>
            {isOrdersOpen2 && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/manageProducts/AddProducts" className="block p-2 hover:bg-gray-700 rounded">
                    Add Products
                  </Link>
                </li>


                




                
              </ul>

              
            )}
          </li>
        </ul>
      </div>
    </>
  );
}