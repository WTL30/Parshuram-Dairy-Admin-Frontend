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

// export default function UpdateOrderStatus() {
//   const [orders, setOrders] = useState<Order[]>(initialOrders);
//   const [selectedOrderId, setSelectedOrderId] = useState<number>(orders[0].id);
//   const [status, setStatus] = useState<string>(orders[0].status);

//   const handleUpdate = () => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === selectedOrderId ? { ...order, status } : order
//       )
//     );
//     alert(`Order ${selectedOrderId} status updated to ${status}`);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
//       {/* Left Side: Update Order Status */}
//       <div className="md:w-1/2">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Update Order Status
//         </h2>

//         {/* Order Selection */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-2 text-gray-700">
//             Select Order:
//           </label>
//           <select
//             className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
//             value={selectedOrderId}
//             onChange={(e) => {
//               const orderId = Number(e.target.value);
//               setSelectedOrderId(orderId);
//               setStatus(orders.find((o) => o.id === orderId)?.status || "");
//             }}
//           >
//             {orders.map((order) => (
//               <option key={order.id} value={order.id}>
//                 Order {order.id} - {order.customer}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Status Update */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold mb-2 text-gray-700">
//             Update Status:
//           </label>
//           <select
//             className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="Pending">Pending</option>
//             <option value="Shipped">Shipped</option>
//             <option value="Delivered">Delivered</option>
//             <option value="Cancelled">Cancelled</option>
//           </select>
//         </div>

//         {/* Update Button */}
//         <button
//           onClick={handleUpdate}
//           className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
//         >
//           Update Status
//         </button>
//       </div>

//       {/* Right Side: Order Status Overview */}
//       <div className="md:w-1/2">
//         <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
//           Order Status Overview
//         </h3>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">Customer</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="text-center">
//                 <td className="border p-2">{order.id}</td>
//                 <td className="border p-2">{order.customer}</td>
//                 <td
//                   className={`border p-2 font-semibold ${
//                     order.status === "Pending"
//                       ? "text-yellow-500"
//                       : order.status === "Shipped"
//                       ? "text-blue-500"
//                       : order.status === "Delivered"
//                       ? "text-green-500"
//                       : "text-red-500"
//                   }`}
//                 >
//                   {order.status}
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

// export default function UpdateOrderStatus() {
//     const [orders, setOrders] = useState([]);
//     const [selectedOrderId, setSelectedOrderId] = useState("");
//     const [status, setStatus] = useState("");

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const res = await axios.get("http://localhost:5000/api/admin-manage/");
//                 setOrders(res.data.data);

//                 // Set default selected order and status
//                 if (res.data.data.length > 0) {
//                     setSelectedOrderId(res.data.data[0]._id);
//                     setStatus(res.data.data[0].status);
//                 }
//             } catch (error) {
//                 console.error("Error fetching orders:", error);
//             }
//         };

//         fetchOrders();
//     }, []);

//     const handleUpdate = async () => {
//         try {
//             await axios.put(`http://localhost:5000/api/admin-manage/${selectedOrderId}`, { status });

//             setOrders((prevOrders) =>
//                 prevOrders.map((order) =>
//                     order._id === selectedOrderId ? { ...order, status } : order
//                 )
//             );

//             alert(`Order ${selectedOrderId} status updated to ${status}`);
//         } catch (error) {
//             console.error("Error updating order status:", error);
//             alert("Failed to update order status. Please try again.");
//         }
//     };

//     return (
//         <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
//             {/* Left Side: Update Order Status */}
//             <div className="md:w-1/2">
//                 <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//                     Update Order Status
//                 </h2>

//                 {/* Order Selection */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-semibold mb-2 text-gray-700">
//                         Select Order:
//                     </label>
//                     <select
//                         className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
//                         value={selectedOrderId}
//                         onChange={(e) => {
//                             const orderId = e.target.value;
//                             setSelectedOrderId(orderId);
//                             setStatus(orders.find((o) => o._id === orderId)?.status || "");
//                         }}
//                     >
//                         {orders.map((order) => (
//                             <option key={order._id} value={order._id}>
//                                 Order {order._id} - {order.userId.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Status Update */}
//                 <div className="mb-6">
//                     <label className="block text-sm font-semibold mb-2 text-gray-700">
//                         Update Status:
//                     </label>
//                     <select
//                         className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="Shipped">Shipped</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="Cancelled">Cancelled</option>
//                     </select>
//                 </div>

//                 {/* Update Button */}
//                 <button
//                     onClick={handleUpdate}
//                     className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
//                 >
//                     Update Status
//                 </button>
//             </div>

//             {/* Right Side: Order Status Overview */}
//             <div className="md:w-1/2">
//                 <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
//                     Order Status Overview
//                 </h3>
//                 <table className="w-full border-collapse border border-gray-300">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="border p-2">Order ID</th>
//                             <th className="border p-2">Customer</th>
//                             <th className="border p-2">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={order._id} className="text-center">
//                                 <td className="border p-2">{index + 1}</td>
//                                 <td className="border p-2">{order.userId.name}</td>
//                                 <td
//                                     className={`border p-2 font-semibold ${
//                                         order.status === "Pending"
//                                             ? "text-yellow-500"
//                                             : order.status === "Shipped"
//                                             ? "text-blue-500"
//                                             : order.status === "Delivered"
//                                             ? "text-green-500"
//                                             : "text-red-500"
//                                     }`}
//                                 >
//                                     {order.status}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateOrderStatus() {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/admin-manage/");
                
                // Filter orders where status is "Confirmed"
                // const confirmedOrders = res.data.data.filter(order => order.status === "Confirmed");

                // setOrders(confirmedOrders);
                setOrders(res.data.data)

                setSelectedOrderId(res.data.data[0]._id);
                setStatus(res.data.data[0].status);

                // Set default selected order and status if any confirmed orders exist
                // if (confirmedOrders.length > 0) {
                    // setSelectedOrderId(confirmedOrders[0]._id);
                    // setStatus(confirmedOrders[0].status);
                // }

            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/admin-manage/${selectedOrderId}`, { status });

            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === selectedOrderId ? { ...order, status } : order
                )
            );

            alert(`Order ${selectedOrderId} status updated to ${status}`);
        } catch (error) {
            console.error("Error updating order status:", error);
            alert("Failed to update order status. Please try again.");
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-8">
            {/* Left Side: Update Order Status */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Update Order Status
                </h2>

                {/* Order Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Select Order:
                    </label>
                    <select
                        className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
                        value={selectedOrderId}
                        onChange={(e) => {
                            const orderId = e.target.value;
                            setSelectedOrderId(orderId);
                            setStatus(orders.find((o) => o._id === orderId)?.status || "");
                        }}
                    >
                        {orders.map((order) => (
                            <option key={order._id} value={order._id}>
                                Order {order._id} - {order.userId.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Status Update */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Update Status:
                    </label>
                    <select
                        className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>

                {/* Update Button */}
                <button
                    onClick={handleUpdate}
                    className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Update Status
                </button>
            </div>

            {/* Right Side: Order Status Overview */}
            <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                    Order Status Overview
                </h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Order ID</th>
                            <th className="border p-2">Customer</th>
                            <th className="border p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className="text-center">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{order.userId.name}</td>
                                <td
                                    className={`border p-2 font-semibold ${
                                        order.status === "Pending"
                                            ? "text-yellow-500"
                                            : order.status === "Shipped"
                                            ? "text-blue-500"
                                            : order.status === "Delivered"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
