// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes, FaShoppingCart, FaBoxOpen, FaUsers, FaClipboardList } from "react-icons/fa";

// export default function Sidebar() {
//   const [isOrdersOpen, setIsOrdersOpen] = useState(false);
//   const [isOrdersOpen1, setIsOrdersOpen1] = useState(false);
//   const [isOrdersOpen2, setIsOrdersOpen2] = useState(false);
//   const [isOrdersOpen3, setIsOrdersOpen3] = useState(false);
//   const [isOrdersOpen4, setIsOrdersOpen4] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Added state for sidebar toggle

//   return (
//     <>

    
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 text-white p-5 w-64 md:w-80 lg:w-64 z-40 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0`}
//       >
//         <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

//         <ul className="space-y-2">
        
//         <li>
//           <Link href="/components/Dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
//             <FaBoxOpen />
//             <span>Dashboard</span>
//           </Link>
//         </li>
          

//           {/* Manage Orders Section */}
//           <li>
//             <button
//               onClick={() => setIsOrdersOpen(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList />
//                 <span>Manage Orders</span>
//               </span>
//               {isOrdersOpen ? <FaTimes /> : <FaBars />}
//             </button>
//             {isOrdersOpen && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 <li>
//                   <Link href="/orders/view" className="block p-2 hover:bg-gray-700 rounded">
//                     View All Orders
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/orders/update" className="block p-2 hover:bg-gray-700 rounded">
//                     Update Order Status
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/orders/cancel" className="block p-2 hover:bg-gray-700 rounded">
//                     Cancel Order
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <button
//               onClick={() => setIsOrdersOpen1(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList />
//                 <span>Manage Users</span>
//               </span>
//               {isOrdersOpen1 ? <FaTimes /> : <FaBars />}
//             </button>
//             {isOrdersOpen1 && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 <li>
//                   <Link href="/manageUsers/ViewCustomer" className="block p-2 hover:bg-gray-700 rounded">
//                     View Customers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/manageUsers/BlockUnblockUser" className="block p-2 hover:bg-gray-700 rounded">
//                     Block Unblock User
//                   </Link>
//                 </li>
                
//               </ul>
//             )}
//           </li>

//           <li>
//             <button
//               onClick={() => setIsOrdersOpen4(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList />
//                 <span>Manage Payments</span>
//               </span>
//               {isOrdersOpen4 ? <FaTimes /> : <FaBars />}
//             </button>
//             {isOrdersOpen4 && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 <li>
//                   <Link href="/managePayment" className="block p-2 hover:bg-gray-700 rounded">
//                     Manage Payments
//                   </Link>
//                 </li>
                
                
//               </ul>
//             )}
//           </li>

//           <li>
//             <button
//               onClick={() => setIsOrdersOpen3(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList />
//                 <span>Manage Inventory</span>
//               </span>
//               {isOrdersOpen3 ? <FaTimes /> : <FaBars />}
//             </button>
//             {isOrdersOpen3 && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 <li>
//                   <Link href="/manageInventory/CheckStockLevels" className="block p-2 hover:bg-gray-700 rounded">
//                     Checks Stock Levels
//                   </Link>
//                 </li>
                
                
//               </ul>
//             )}
//           </li>




//           <li>
//             <button
//               onClick={() => setIsOrdersOpen2(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList />
//                 <span>Manage Products</span>
//               </span>
//               {isOrdersOpen2 ? <FaTimes /> : <FaBars />}
//             </button>
//             {isOrdersOpen2 && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 <li>
//                   <Link href="/manageProducts/AddProducts" className="block p-2 hover:bg-gray-700 rounded">
//                     Add Products
//                   </Link>
//                 </li>


                




                
//               </ul>

              
//             )}
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { 
//   FaBars, FaTimes, FaShoppingCart, FaBoxOpen, FaUsers, FaClipboardList, 
//   FaMoneyBillWave, FaWarehouse, FaTags, FaEye, FaUserShield 
// } from "react-icons/fa";

// export default function Sidebar() {
//   const [isOrdersOpen, setIsOrdersOpen] = useState(false);
//   const [isUsersOpen, setIsUsersOpen] = useState(false);
//   const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
//   const [isInventoryOpen, setIsInventoryOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 text-white p-5 w-64 md:w-80 lg:w-64 z-40 shadow-xl ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0`}
//       >
//         {/* Admin Panel Title */}
//         <h2 className="text-3xl font-extrabold text-blue-400 mb-6 relative group transition-all duration-300">
//           Admin Panel
//           <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//         </h2>

//         <ul className="space-y-2">
//           <li>
//             <Link href="/components/Dashboard" className="flex items-center space-x-2 p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105">
//               <FaBoxOpen className="text-green-400" />
//               <span>Dashboard</span>
//             </Link>
//           </li>

//           {/* Manage Orders */}
//           <li>
//             <button
//               onClick={() => setIsOrdersOpen(!isOrdersOpen)}
//               className="flex items-center justify-between w-full p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105"
//             >
//               <span className="flex items-center space-x-2">
//                 <FaClipboardList className="text-blue-400" />
//                 <span>Manage Orders</span>
//               </span>
//               {isOrdersOpen ? <FaTimes /> : <FaBars />}
//             </button>
//             <ul className={`ml-6 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${isOrdersOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
//               <li>
//                 <Link href="/orders/view" className="flex items-center space-x-2 p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105">
//                   <span className="text-gray-500 group-hover:text-white">➤</span>
//                   <span>View All Orders</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/orders/update" className="flex items-center space-x-2 p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105">
//                   <span className="text-gray-500 group-hover:text-white">➤</span>
//                   <span>Update Order Status</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/orders/cancel" className="flex items-center space-x-2 p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105">
//                   <span className="text-gray-500 group-hover:text-white">➤</span>
//                   <span>Cancel Order</span>
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           {/* Other Sections */}
//           {[
//             { title: "Manage Products", state: isProductsOpen, setState: setIsProductsOpen, icon: <FaTags className="text-orange-400" />, links: [
//               { href: "/manageProducts/AddProducts", text: "Add Products" },
//               { href: "/manageProducts/ProductList", text: "Products List" }
//             ]},
//             { title: "Manage Users", state: isUsersOpen, setState: setIsUsersOpen, icon: <FaUsers className="text-red-400" />, links: [
//             { href: "/manageUsers/ViewCustomer", text: "View Customers" },
//             { href: "/manageUsers/BlockUnblockUser", text: "Block Unblock User" }
            
//           ]},
//           { title: "Manage Payments", state: isPaymentsOpen, setState: setIsPaymentsOpen, icon: <FaMoneyBillWave className="text-green-400" />, links: [
//             { href: "/managePayment", text: "Manage Payments" }
//           ]},
//           // { title: "Manage Inventory", state: isInventoryOpen, setState: setIsInventoryOpen, icon: <FaWarehouse className="text-purple-400" />, links: [
//           //   { href: "/manageInventory/CheckStockLevels", text: "Check Stock Levels" }
            
//           // ]},
//           ].map((section, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => section.setState(!section.state)}
//                 className="flex items-center justify-between w-full p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105"
//               >
//                 <span className="flex items-center space-x-2">
//                   {section.icon}
//                   <span>{section.title}</span>
//                 </span>
//                 {section.state ? <FaTimes /> : <FaBars />}
//               </button>
//               <ul className={`ml-6 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${section.state ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link href={link.href} className="flex items-center space-x-2 p-2 rounded transition-all duration-300 hover:bg-gray-800 hover:text-yellow-400 hover:scale-105">
//                       <span className="text-gray-500 group-hover:text-white">➤</span>
//                       <span>{link.text}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   FaBars, FaTimes, FaClipboardList, FaBoxOpen, FaUsers, FaMoneyBillWave, FaTags,
// } from "react-icons/fa";

// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [dropdowns, setDropdowns] = useState({
//     orders: false,
//     users: false,
//     payments: false,
//     products: false,
//   });

//   // Toggle Dropdowns
//   const toggleDropdown = (key) => {
//     setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:scale-110 transition-all"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 text-white p-5 w-64 md:w-72 lg:w-64 z-40 shadow-xl ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0 md:flex md:flex-col`}
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-bold text-blue-400 mb-6">Admin Panel</h2>

//         <ul className="space-y-2">
//           {/* Dashboard */}
//           <li>
//             <Link
//               href="/components/Dashboard"
//               className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
//             >
//               <FaBoxOpen className="text-green-400" />
//               <span>Dashboard</span>
//             </Link>
//           </li>

//           {/* Sections with Dropdowns */}
//           {[
//             {
//               key: "orders",
//               title: "Manage Orders",
//               icon: <FaClipboardList className="text-blue-400" />,
//               links: [
//                 { href: "/orders/view", text: "View Orders" },
//                 { href: "/orders/update", text: "Update Order Status" },
//                 { href: "/orders/cancel", text: "Cancel Order" },
//               ],
//             },
//             {
//               key: "users",
//               title: "Manage Users",
//               icon: <FaUsers className="text-red-400" />,
//               links: [
//                 { href: "/manageUsers/ViewCustomer", text: "View Customers" },
//                 { href: "/manageUsers/BlockUnblockUser", text: "Block/Unblock Users" },
//               ],
//             },
//             {
//               key: "payments",
//               title: "Manage Payments",
//               icon: <FaMoneyBillWave className="text-green-400" />,
//               links: [{ href: "/managePayment", text: "Manage Payments" }],
//             },
//             {
//               key: "products",
//               title: "Manage Products",
//               icon: <FaTags className="text-orange-400" />,
//               links: [
//                 { href: "/manageProducts/AddProducts", text: "Add Products" },
//                 { href: "/manageProducts/ProductList", text: "Products List" },
//               ],
//             },
//           ].map(({ key, title, icon, links }) => (
//             <li key={key}>
//               <button
//                 onClick={() => toggleDropdown(key)}
//                 className="flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
//               >
//                 <span className="flex items-center space-x-2">{icon}<span>{title}</span></span>
//                 {dropdowns[key] ? <FaTimes /> : <FaBars />}
//               </button>

//               {/* Dropdown Links */}
//               <ul className={`ml-6 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${
//                 dropdowns[key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}>
//                 {links.map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       href={link.href}
//                       className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
//                     >
//                       <span className="text-gray-500">➤</span>
//                       <span>{link.text}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaClipboardList,
  FaBoxOpen,
  FaUsers,
  FaMoneyBillWave,
  FaTags,
 
} from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    orders: false,
    users: false,
    payments: false,
    products: false,
  });

  // Toggle Dropdowns
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:scale-110 transition-all"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-gray-900 text-white p-5 w-64 md:w-72 lg:w-64 z-40 shadow-xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Admin Panel</h2>

        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <Link
              href="/components/Dashboard"
              className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              <FaBoxOpen className="text-green-400" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Sections with Dropdowns */}
          {[
             {
              key: "products",
              title: "Manage Products",
              // icon: <FaTags className="text-orange-400" />,
              icon: <IoMdAddCircleOutline   />,
              links: [
                { href: "/manageProducts/AddProducts", text: "Add Products" },
                { href: "/manageProducts/ProductList", text: "Products List" },
              ],
            },
            {
              key: "orders",
              title: "Manage Orders",
              icon: <FaClipboardList className="text-blue-400" />,
              links: [
                { href: "/orders/view", text: "View Orders" },
                { href: "/orders/update", text: "Update Order Status" },
                { href: "/orders/cancel", text: "Cancel Order" }, // Fix applied here
              ],
            },
            {
              key: "users",
              title: "Manage Users",
              icon: <FaUsers className="text-red-400" />,
              links: [
                { href: "/manageUsers/ViewCustomer", text: "View Customers" },
                { href: "/manageUsers/BlockUnblockUser", text: "Block/Unblock Users" },
              ],
            },
            {
              key: "payments",
              title: "Manage Payments",
              icon: <FaMoneyBillWave className="text-green-400" />,
              links: [{ href: "/managePayment", text: "Manage Payments" }],
            },
            // {
            //   key: "products",
            //   title: "Manage Products",
            //   icon: <FaTags className="text-orange-400" />,
            //   links: [
            //     { href: "/manageProducts/AddProducts", text: "Add Products" },
            //     { href: "/manageProducts/ProductList", text: "Products List" },
            //   ],
            // },
          ].map(({ key, title, icon, links }) => (
            <li key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
              >
                <span className="flex items-center space-x-2">{icon}<span>{title}</span></span>
                {dropdowns[key] ? <FaTimes /> : <FaBars />}
              </button>

              {/* Dropdown Links - Fix for Cancel Order */}
              <ul className={`ml-6 mt-2 space-y-2 transition-all duration-300 ${
                dropdowns[key] ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
              }`}>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                    >
                      <span className="text-gray-500">➤</span>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
