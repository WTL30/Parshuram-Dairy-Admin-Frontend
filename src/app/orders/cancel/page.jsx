// "use client";
// import { useState } from "react";

// type Order = {
//   id: number;
//   customer: string;
//   status: string;
// };

// const initialOrders: Order[] = [
//   { id: 1, customer: "John Doe", status: "Shipped" },
//   { id: 2, customer: "Jane Smith", status: "Pending" },
//   { id: 3, customer: "Alice Johnson", status: "Delivered" },
// ];

// export default function ManageOrders() {
//   const [orders, setOrders] = useState<Order[]>(initialOrders);

//   const handleCancelOrder = (id: number) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === id ? { ...order, status: "Cancelled" } : order
//       )
//     );
//   };

//   const getStatusBadge = (status: string) => {
//     const baseStyle = "px-3 py-1 rounded-full text-sm font-semibold";
//     switch (status) {
//       case "Shipped":
//         return <span className={`${baseStyle} bg-blue-100 text-blue-700`}>Shipped</span>;
//       case "Pending":
//         return <span className={`${baseStyle} bg-yellow-100 text-yellow-700`}>Pending</span>;
//       case "Delivered":
//         return <span className={`${baseStyle} bg-green-100 text-green-700`}>Delivered</span>;
//       case "Cancelled":
//         return <span className={`${baseStyle} bg-red-100 text-red-700`}>Cancelled</span>;
//       default:
//         return <span className={`${baseStyle} bg-gray-100 text-gray-700`}>{status}</span>;
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[400px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {["Order ID", "Customer", "Status", "Actions"].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{order.id}</td>
//                 <td className="border border-gray-300 p-3">{order.customer}</td>
//                 <td className="border border-gray-300 p-3">{getStatusBadge(order.status)}</td>
//                 <td className="border border-gray-300 p-3">
//                   {order.status !== "Cancelled" && (
//                     <button
//                       onClick={() => handleCancelOrder(order.id)}
//                       className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function ManageOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin-manage/");
//         setOrders(response.data.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleCancelOrder = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/admin-manage/${id}`);
//       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   const getStatusBadge = (status) => {
//     const baseStyle = "px-3 py-1 rounded-full text-sm font-semibold";
//     switch (status) {
//       case "Shipped":
//         return <span className={`${baseStyle} bg-blue-100 text-blue-700`}>Shipped</span>;
//       case "Pending":
//         return <span className={`${baseStyle} bg-yellow-100 text-yellow-700`}>Pending</span>;
//       case "Delivered":
//         return <span className={`${baseStyle} bg-green-100 text-green-700`}>Delivered</span>;
//       case "Cancelled":
//         return <span className={`${baseStyle} bg-red-100 text-red-700`}>Cancelled</span>;
//       default:
//         return <span className={`${baseStyle} bg-gray-100 text-gray-700`}>{status}</span>;
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[400px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {["Order ID", "Customer", "Status", "Actions"].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{order._id}</td>
//                 <td className="border border-gray-300 p-3">{order.userId.name}</td>
//                 <td className="border border-gray-300 p-3">{getStatusBadge(order.status)}</td>
//                 <td className="border border-gray-300 p-3">
//                   <button
//                     onClick={() => handleCancelOrder(order._id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
//                   >
//                     Delete Order
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin-manage/");
        setOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleCancelOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin-manage/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));

      toast.success("Order deleted successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order. Please try again.");
    }
  };

  const getStatusBadge = (status) => {
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
    <div className="p-4 sm:p-6">
       {/* Toaster Container */}
       <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Manage Orders</h2>
      
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
      <thead >
      <tr className="bg-gray-700 text-white">
      {["Order ID", "Customer", "Status", "Actions"].map((header) => (
                <th key={header} className="border p-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <td className="border border-gray-300 p-3 text-xs sm:text-sm">{order?._id}</td>
                <td className="border border-gray-300 p-3 text-xs sm:text-sm">{order?.userId?.name}</td>
                <td className="border border-gray-300 p-3">{getStatusBadge(order?.status)}</td>
                <td className="border border-gray-300 p-3">
                  <button
                    onClick={() => handleCancelOrder(order?._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
