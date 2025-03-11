// "use client";
// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";

// // type Order = {
// //   id: number;
// //   customerName: string;
// //   productName: string;
// //   productImage: string;
// //   category: string;
// //   subCategory: string;
// //   description: string;
// //   price: number;
// //   oldPrice: number;
// //   availableStock: number;
// //   quantity: number;
// //   status: string;
// //   total: number;
// // };

// // const initialOrders: Order[] = [
// //   {
// //     id: 1,
// //     customerName: "John Doe",
// //     productName: "Milk",
// //     productImage: "https://via.placeholder.com/50",
// //     category: "Dairy",
// //     subCategory: "Organic",
// //     description: "Fresh organic milk",
// //     price: 5,
// //     oldPrice: 6,
// //     availableStock: 100,
// //     quantity: 10,
// //     status: "Shipped",
// //     total: 150,
// //   },
// //   {
// //     id: 2,
// //     customerName: "Jane Smith",
// //     productName: "Cheese",
// //     productImage: "https://via.placeholder.com/50",
// //     category: "Dairy",
// //     subCategory: "Aged",
// //     description: "Aged cheddar cheese",
// //     price: 8, 
// //     oldPrice: 10,
// //     availableStock: 50,
// //     quantity: 5,
// //     status: "Pending",
// //     total: 200,
// //   },
// //   {
// //     id: 3,
// //     customerName: "Alice Johnson",
// //     productName: "Butter",
// //     productImage: "https://via.placeholder.com/50",
// //     category: "Dairy",
// //     subCategory: "Salted",
// //     description: "Creamy salted butter",
// //     price: 4,
// //     oldPrice: 5,
// //     availableStock: 70,
// //     quantity: 8,
// //     status: "Delivered",
// //     total: 100,
// //   },
// // ];

// // // User interface
// // interface User {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   password: string,
// //   phone: string;
// //   role: string;
// //   city: string;
// //   state: string;
// //   street: string;
// //   createdAt: string;
// // }

// // // Address interface
// // interface Address {
// //   street: string;
// //   city: string;
// //   state: string;
// //   zip: string;
// // }

// // interface Product {
// //   _id: string; // ObjectId is stored as a string in MongoDB
// //   oldPrice: number;
// //   productName: string;
// //   productDescription: string;
// //   nutritionalInfo?: string; // Optional field
// //   price: number;
// //   quantity: number;
// //   unit: string; // Assuming one unit (e.g., "kg", "pcs") instead of an array
// //   category: string[]; // Array of category names
// //   subcategory: string[]; // Array of subcategory names
// //   availableStock: number;
// //   images: string[]; // Array of image URLs
// // }

// // // Item inside the order
// // interface OrderItem {
// //   _id: string;
// //   productId: Product,
// //   action: string;
// //   quantity: number;
// //   size: string;
// //   status: string,
// //   returnRequested: boolean;
// //   returnApproved: boolean;
// //   returnReason: string;
// // }

// // // Main Order interface
// // interface Order {
// //   _id: string;
// //   userId: User;
// //   items: OrderItem[];
// //   totalAmount: number;
// //   paymentMethod: "Credit Card" | "Debit Card" | "PayPal" | "Cash on Delivery";
// //   address: Address;
// //   status: string;
// //   payment: boolean;
// //   date: string;
// //   tentativeDeliveryDate?: string;
// //   updatedAt: string;
// // }

// export default function ViewOrders() {
//   const [orders, setOrders] = useState([]);
//   const [editOrder, setEditOrder] = useState(null);


//   const handleEdit = (order) => {
//     setEditOrder(order);
//   };

//   const handleSave = () => {
//     if (editOrder) {
//       setOrders((prev) =>
//         prev.map((order) => (order.id === editOrder.id ? editOrder : order))
//       );
//       setEditOrder(null);
//     }
//   };

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   //   const { name, value } = e.target;
//   //   if (editOrder) {
//   //     setEditOrder({ ...editOrder, [name]: value });
//   //   }
//   // };

//   // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (editOrder && e.target.files && e.target.files[0]) {
//   //     const file = e.target.files[0];
//   //     const imageUrl = URL.createObjectURL(file);
//   //     setEditOrder({ ...editOrder, productImage: imageUrl });
//   //   }
//   // };

//   // const handleDelete = (id: number) => {
//   //   if (confirm("Are you sure you want to delete this order?")) {
//   //     setOrders(orders.filter((order) => order.id !== id));
//   //   }
//   // };

//   useEffect(() => {

//     const fetch = async () => {
//       const res = await axios.get('http://localhost:5000/api/admin-manage/')
//       // console.log(res.data.data[0].userId.name)
//       // console.log(res.data.data[0].items[0].productId.productName)
//       setOrders(res.data.data)
//     }

//     fetch()
//   }, [])

//   console.log(orders)
//   // console.log(orders[0].items.productId.productName)

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[1200px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {["Order ID", "Customer", "Product Name", "Product Image", "Category", "Sub Category", "Description", "Price", "Old Price", "Available Stock", "Quantity", "Status", "Total", "Actions"].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{index+1}</td>
//                 <td className="border border-gray-300 p-3">{order.userId.name}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.productName}</td>
//                 <td className="border border-gray-300 p-3"><img src={order.items[0].productId.images[0]} alt={order.productName} className="w-10 h-10 mx-auto" /></td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.category[0]}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.subcategory[0]}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.productDescription}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.price}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.oldprice}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.availableStock}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.quantity}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].status}</td>
//                 <td className="border border-gray-300 p-3">{order.totalAmount}</td>
//                 <td className="border border-gray-300 p-3 flex justify-center space-x-3">
//                   <FaEdit className="text-green-600 cursor-pointer hover:text-green-800" onClick={() => handleEdit(order)} />
//                   <FaTrash className="text-red-600 cursor-pointer hover:text-red-800" onClick={() => handleDelete(order._id)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {editOrder && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg grid grid-cols-2 gap-4">
//             <h3 className="text-xl font-bold mb-4 col-span-2">Edit Order</h3>
//             {Object.keys(editOrder).map((key) => (
//               <div key={key} className="col-span-1">
//                 <label className="block font-semibold">{key}</label>
//                 <input
//                   type={key === "productImage" ? "file" : "text"}
//                   name={key}
//                   // value={key === "productImage" ? undefined : (editOrder )[key]}
//                   // onChange={key === "productImage" ? handleFileChange : handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//             ))}
//             {/* <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded col-span-2">Save</button> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// // // "use client";
// // // import { useState } from "react";
// // // import { FaEdit, FaTrash } from "react-icons/fa";

// // // type Order = {
// // //   id: number;
// // //   customerName: string;
// // //   productImage: string;
// // //   productName: string;
// // //   category: string;
// // //   subCategory: string;
// // //   description: string;
// // //   price: number;
// // //   oldPrice: number;
// // //   availableStock: number;
// // //   quantity: number;
// // //   status: string;
// // //   total: number;
// // // };

// // // const initialOrders: Order[] = [
// // //   {
// // //     id: 1,
// // //     customerName: "John Doe",
// // //     productImage: "/mnt/data/image.png",
// // //     productName: "Milk",
// // //     category: "Dairy",
// // //     subCategory: "Organic",
// // //     description: "Fresh organic milk",
// // //     price: 5,
// // //     oldPrice: 6,
// // //     availableStock: 100,
// // //     quantity: 10,
// // //     status: "Shipped",
// // //     total: 150,
// // //   },
// // //   {
// // //     id: 2,
// // //     customerName: "Jane Smith",
// // //     productImage: "/mnt/data/image.png",
// // //     productName: "Cheese",
// // //     category: "Dairy",
// // //     subCategory: "Aged",
// // //     description: "Aged cheddar cheese",
// // //     price: 8,
// // //     oldPrice: 10,
// // //     availableStock: 50,
// // //     quantity: 5,
// // //     status: "Pending",
// // //     total: 200,
// // //   },
// // //   {
// // //     id: 3,
// // //     customerName: "Alice Johnson",
// // //     productImage: "/mnt/data/image.png",
// // //     productName: "Butter",
// // //     category: "Dairy",
// // //     subCategory: "Salted",
// // //     description: "Creamy salted butter",
// // //     price: 4,
// // //     oldPrice: 5,
// // //     availableStock: 70,
// // //     quantity: 8,
// // //     status: "Delivered",
// // //     total: 100,
// // //   },
// // // ];

// // // export default function ViewOrders() {
// // //   const [orders, setOrders] = useState<Order[]>(initialOrders);
// // //   const [editOrder, setEditOrder] = useState<Order | null>(null);

// // //   const handleEdit = (order: Order) => {
// // //     setEditOrder(order);
// // //   };

// // //   const handleSave = () => {
// // //     if (editOrder) {
// // //       setOrders((prev) =>
// // //         prev.map((order) => (order.id === editOrder.id ? editOrder : order))
// // //       );
// // //       setEditOrder(null);
// // //     }
// // //   };

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     const { name, value } = e.target;
// // //     if (editOrder) {
// // //       setEditOrder({ ...editOrder, [name]: value });
// // //     }
// // //   };

// // //   const handleDelete = (id: number) => {
// // //     if (confirm("Are you sure you want to delete this order?")) {
// // //       setOrders(orders.filter((order) => order.id !== id));
// // //     }
// // //   };

// // //   const getStatusBadge = (status: string) => {
// // //     const baseStyle = "px-3 py-1 rounded-full text-sm font-semibold";
// // //     switch (status) {
// // //       case "Shipped":
// // //         return <span className={`${baseStyle} bg-blue-100 text-blue-700`}>Shipped</span>;
// // //       case "Pending":
// // //         return <span className={`${baseStyle} bg-yellow-100 text-yellow-700`}>Pending</span>;
// // //       case "Delivered":
// // //         return <span className={`${baseStyle} bg-green-100 text-green-700`}>Delivered</span>;
// // //       case "Cancelled":
// // //         return <span className={`${baseStyle} bg-red-100 text-red-700`}>Cancelled</span>;
// // //       default:
// // //         return <span className={`${baseStyle} bg-gray-100 text-gray-700`}>{status}</span>;
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
// // //       <div className="overflow-x-auto">
// // //       <table className="border-collapse w-full border border-gray-300">
// // //   <thead className="bg-blue-600 text-black">
// // //     <tr>
// // //       {[
// // //         "Order ID", "Customer Name", "Product Image", "Product Name", "Category",
// // //         "Sub Category", "Description", "Price", "Old Price", "Available Stock",
// // //         "Quantity", "Status", "Total", "Actions"
// // //       ].map((header) => (
// // //         <th key={header} className="bg-gray-200 border border-gray-300 p-2">{header}</th>
// // //       ))}
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     {orders.map((order) => (
// // //       <tr key={order.id} className="text-center hover:bg-blue-100 transition-colors duration-200">
// // //         <td className="border border-gray-300 p-3">{order.id}</td>
// // //         <td className="border border-gray-300 p-3">{order.customerName}</td>
// // //         <td className="border border-gray-300 p-3">
// // //           <img src={order.productImage} alt={order.productName} className="w-12 h-12 mx-auto" />
// // //         </td>
// // //         <td className="border border-gray-300 p-3">{order.productName}</td>
// // //         <td className="border border-gray-300 p-3">{order.category}</td>
// // //         <td className="border border-gray-300 p-3">{order.subCategory}</td>
// // //         <td className="border border-gray-300 p-3">{order.description}</td>
// // //         <td className="border border-gray-300 p-3">{order.price}</td>
// // //         <td className="border border-gray-300 p-3">{order.oldPrice}</td>
// // //         <td className="border border-gray-300 p-3">{order.availableStock}</td>
// // //         <td className="border border-gray-300 p-3">{order.quantity}</td>
// // //         <td className="border border-gray-300 p-3">{getStatusBadge(order.status)}</td>
// // //         <td className="border border-gray-300 p-3">{order.total}</td>
// // //         <td className="border border-gray-300 p-3 flex justify-center space-x-3">
// // //           <FaEdit className="text-green-600 cursor-pointer hover:text-green-800" onClick={() => handleEdit(order)} />
// // //           <FaTrash className="text-red-600 cursor-pointer hover:text-red-800" onClick={() => handleDelete(order.id)} />
// // //         </td>
// // //       </tr>
// // //     ))}
// // //   </tbody>
// // // </table>

// // //       </div>
// // //     </div>
// // //   );
// // // }


// // 'use client'
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // // Define interfaces
// // interface User {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   password: string;
// //   phone: string;
// //   role: string;
// //   city: string;
// //   state: string;
// //   street: string;
// //   createdAt: string;
// // }

// // interface Address {
// //   street: string;
// //   city: string;
// //   state: string;
// //   zip: string;
// // }

// // interface Product {
// //   _id: string;
// //   oldPrice: number;
// //   productName: string;
// //   productDescription: string;
// //   nutritionalInfo?: string;
// //   price: number;
// //   quantity: number;
// //   unit: string;
// //   category: string[];
// //   subcategory: string[];
// //   availableStock: number;
// //   images: string[];
// // }

// // interface OrderItem {
// //   _id: string;
// //   productId: Product;
// //   action: string;
// //   quantity: number;
// //   size: string;
// //   status: string;
// //   returnRequested: boolean;
// //   returnApproved: boolean;
// //   returnReason: string;
// // }

// // interface Order {
// //   _id: string;
// //   userId: User;
// //   items: OrderItem[];
// //   totalAmount: number;
// //   paymentMethod: "Credit Card" | "Debit Card" | "PayPal" | "Cash on Delivery";
// //   address: Address;
// //   status: string;
// //   payment: boolean;
// //   date: string;
// //   tentativeDeliveryDate?: string;
// //   updatedAt: string;
// // }

// // const ViewOrders: React.FC = () => {
// //   const [orders, setOrders] = useState<Order[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await axios.get<Order[]>("http://localhost:5000/api/admin-manage/");
// //         setOrders(response.data);
// //       } catch (error) {
// //         console.error("Error fetching orders:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchOrders();
// //   }, []);

// //   const deleteOrder = async (orderId: string) => {
// //     if (!window.confirm("Are you sure you want to delete this order?")) return;
// //     try {
// //       await axios.delete(`http://localhost:5000/api/admin-manage/${orderId}`);
// //       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
// //     } catch (error) {
// //       console.error("Error deleting order:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Orders</h2>
// //       {loading ? (
// //         <p>Loading orders...</p>
// //       ) : orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         <table className="w-full border-collapse border border-gray-300">
// //           <thead>
// //             <tr className="bg-gray-200">
// //               <th className="border p-2">Order ID</th>
// //               <th className="border p-2">User</th>
// //               <th className="border p-2">Total Amount</th>
// //               <th className="border p-2">Payment</th>
// //               <th className="border p-2">Status</th>
// //               <th className="border p-2">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orders.map((order) => (
// //               <tr key={order._id} className="border">
// //                 <td className="border p-2">{order._id}</td>
// //                 <td className="border p-2">{order.userId.name}</td>
// //                 <td className="border p-2">${order.totalAmount}</td>
// //                 <td className="border p-2">{order.payment ? "Paid" : "Pending"}</td>
// //                 <td className="border p-2">{order.status}</td>
// //                 <td className="border p-2">
// //                   <button
// //                     className="bg-red-500 text-white px-3 py-1 rounded"
// //                     onClick={() => deleteOrder(order._id)}
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default ViewOrders;

// "use client";
// import { useState, useEffect } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";

// const initialOrders = [
//   {
//     id: 1,
//     customerName: "John Doe",
//     productName: "Milk",
//     productImage: "https://via.placeholder.com/50",
//     category: "Dairy",
//     subCategory: "Organic",
//     description: "Fresh organic milk",
//     price: 5,
//     oldPrice: 6,
//     availableStock: 100,
//     quantity: 10,
//     status: "Shipped",
//     total: 150,
//   },
//   {
//     id: 2,
//     customerName: "Jane Smith",
//     productName: "Cheese",
//     productImage: "https://via.placeholder.com/50",
//     category: "Dairy",
//     subCategory: "Aged",
//     description: "Aged cheddar cheese",
//     price: 8,
//     oldPrice: 10,
//     availableStock: 50,
//     quantity: 5,
//     status: "Pending",
//     total: 200,
//   },
//   {
//     id: 3,
//     customerName: "Alice Johnson",
//     productName: "Butter",
//     productImage: "https://via.placeholder.com/50",
//     category: "Dairy",
//     subCategory: "Salted",
//     description: "Creamy salted butter",
//     price: 4,
//     oldPrice: 5,
//     availableStock: 70,
//     quantity: 8,
//     status: "Delivered",
//     total: 100,
//   },
// ];

// export default function ViewOrders() {
//   const [orders, setOrders] = useState([]);
//   const [editOrder, setEditOrder] = useState(null);

//   const handleEdit = (order) => {
//     setEditOrder(order);
//   };

//   const handleSave = () => {
//     if (editOrder) {
//       setOrders((prev) =>
//         prev.map((order) => (order.id === editOrder.id ? editOrder : order))
//       );
//       setEditOrder(null);
//     }
//   };

//   const handleCancel = () => {
//     setEditOrder(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (editOrder) {
//       setEditOrder({ ...editOrder, [name]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     if (editOrder && e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const imageUrl = URL.createObjectURL(file);
//       setEditOrder({ ...editOrder, productImage: imageUrl });
//     }
//   };

//   // const handleDelete = (id) => {
//   //   if (confirm("Are you sure you want to delete this order?")) {
//   //     setOrders(orders.filter((order) => order.id !== id));
//   //   }
//   // };

//   const closeModal = (e) => {
//     if (e.target.id === "modal-background") {
//       setEditOrder(null);
//     }
//   };

//   useEffect(() => {

//     const fetch = async () => {
//       const res = await axios.get('http://localhost:5000/api/admin-manage/')
//       // console.log(res.data.data[0].userId.name)
//       // console.log(res.data.data[0].items[0].productId.productName)
//       setOrders(res.data.data)
//     }

//     fetch()
//   }, [])

//   console.log(orders)

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[1200px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {[
//                 "Order ID",
//                 "Customer",
//                 "Product Name",
//                 "Product Image",
//                 "Category",
//                 "Sub Category",
//                 "Description",
//                 "Price",
//                 "Old Price",
//                 "Available Stock",
//                 "Quantity",
//                 "Status",
//                 "Total",
//                 "Actions",
//               ].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{index + 1}</td>
//                 <td className="border border-gray-300 p-3">{order.userId.name}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.productName}</td>
//                 <td className="border border-gray-300 p-3"><img src={order.items[0].productId.images[0]} alt={order.productName} className="w-10 h-10 mx-auto" /></td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.category[0]}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.subcategory[0]}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.productDescription}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.price}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.oldprice}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.availableStock}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].productId.quantity}</td>
//                 <td className="border border-gray-300 p-3">{order.items[0].status}</td>
//                 <td className="border border-gray-300 p-3">{order.totalAmount}</td>
//                 <td className="border border-gray-300 p-3 flex justify-center items-center ">
//                   <FaEdit size={'35px'} className="text-green-600  cursor-pointer hover:text-green-800" onClick={() => handleEdit(order)} />
//                   {/* <FaTrash className="text-red-600 cursor-pointer hover:text-red-800" onClick={() => handleDelete(order.id)} /> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Modal */}
//       {editOrder && (
//         <div
//           id="modal-background"
//           className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div className="bg-white p-6 rounded shadow-lg grid grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
//             <h3 className="text-xl font-bold mb-4 col-span-2">Edit Order</h3>
//             {Object.keys(editOrder).map((key) => (
//               <div key={key} className="col-span-1">
//                 <label className="block font-semibold">{key}</label>
//                 <input
//                   type={key === "productImage" ? "file" : "text"}
//                   name={key}
//                   value={key === "productImage" ? undefined : editOrder[key]}
//                   onChange={key === "productImage" ? handleFileChange : handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//             ))}
//             <div className="col-span-2 flex justify-end space-x-3">
//               <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Save
//               </button>
//               <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit } from "react-icons/fa";
// import { GiConfirmed } from "react-icons/gi";

// export default function ViewOrders() {
//   const [orders, setOrders] = useState([]);
//   const [editOrder, setEditOrder] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/admin-manage/");
//         setOrders(res.data.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleEdit = (order) => {
//     // Extract necessary fields for editing
//     const editableData = {
//       orderId: order._id,
//       customerName: order.userId.name,
//       productName: order.items[0].productId.productName,
//       productImage: order.items[0].productId.images[0],
//       category: order.items[0].productId.category[0],
//       subCategory: order.items[0].productId.subcategory[0],
//       description: order.items[0].productId.productDescription,
//       price: order.items[0].productId.price,
//       oldPrice: order.items[0].productId.oldprice,
//       availableStock: order.items[0].productId.availableStock,
//       quantity: order.items[0].quantity,
//       status: order.items[0].status,
//       totalAmount: order.totalAmount,
//     };
//     setEditOrder(editableData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditOrder((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const imageUrl = URL.createObjectURL(file);
//       setEditOrder((prev) => ({ ...prev, productImage: imageUrl }));
//     }
//   };

//   const handleSave = async () => {
//     if (!editOrder) return;

//     setLoading(true);
//     try {
//       const updatedData = {
//         productName: editOrder.productName,
//         productImage: editOrder.productImage,
//         category: editOrder.category,
//         subCategory: editOrder.subCategory,
//         description: editOrder.description,
//         price: editOrder.price,
//         oldPrice: editOrder.oldPrice,
//         availableStock: editOrder.availableStock,
//         quantity: editOrder.quantity,
//         status: editOrder.status,
//         totalAmount: editOrder.totalAmount,
//       };

//       console.log(updatedData)

//       await axios.put(
//         `http://localhost:5000/api/admin-manage/${editOrder.orderId}`,
//         updatedData
//       );

//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === editOrder.orderId
//             ? { ...order, ...updatedData }
//             : order
//         )
//       );

//       setEditOrder(null);
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }
//     setLoading(false);
//   };

//   const closeModal = (e) => {
//     if (e.target.id === "modal-background") {
//       setEditOrder(null);
//     }
//   };

//   const handleConfirmOrder = async (order) => {
//     setLoading(true);
//     try {
//       const updatedStatus = "Confirmed";

//       await axios.put(
//         `http://localhost:5000/api/admin-manage/${order._id}`,
//         { updatedStatus }
//       );

//       const res = await axios.get("http://localhost:5000/api/admin-manage/");
//       setOrders(res.data.data);

//       // ✅ Update UI Immediately
//       setOrders((prevOrders) =>
//         prevOrders.map((o) =>
//           o._id === order._id ? { ...o, items: o.items.map(item => ({ ...item, status: "Confirmed" })) } : o
//         )
//       );

//       console.log(`Order ${order._id} confirmed successfully`);


//     } catch (error) {
//       console.error("Error confirming order:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[1200px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {[
//                 "Order ID",
//                 "Customer",
//                 "Product Name",
//                 "Product Image",
//                 "Category",
//                 "Sub Category",
//                 "Description",
//                 "Price",
//                 "Old Price",
//                 "Available Stock",
//                 "Quantity",
//                 "Status",
//                 "Total",
//                 "Actions",
//               ].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               order.status === "Confirmed" ? " " : (
//                 <tr key={index} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                   <td className="border border-gray-300 p-3">{index + 1}</td>
//                   <td className="border border-gray-300 p-3">{order.userId.name}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.productName}</td>
//                   <td className="border border-gray-300 p-3">
//                     <img
//                       src={order.items[0].productId.images[0]}
//                       alt={order.items[0].productId.productName}
//                       className="w-10 h-10 mx-auto"
//                     />
//                   </td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.category[0]}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.subcategory[0]}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.productDescription}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.price}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.oldprice}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].productId.availableStock}</td>
//                   <td className="border border-gray-300 p-3">{order.items[0].quantity}</td>
//                   <td className="border border-gray-300 p-3">{order.status}</td>
//                   <td className="border border-gray-300 p-3">{order.totalAmount}</td>
//                   <td className="border border-gray-300 p-3 flex justify-center items-center">
//                     {/* <FaEdit
//                     size={"35px"}
//                     className="text-green-600 cursor-pointer hover:text-green-800"
//                     onClick={() => handleEdit(order)}
//                   /> */}
//                     <GiConfirmed
//                       size={"35px"}
//                       className={`cursor-pointer transition-colors duration-200 ${order.items[0].status === "Confirmed" ? "text-gray-400" : "text-green-600 hover:text-green-800"
//                         }`}
//                       onClick={() => handleConfirmOrder(order)}
//                       disabled={order.items[0].status === "Confirmed" || loading}
//                     />
//                   </td>
//                 </tr>
//               )
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Modal */}
//       {editOrder && (
//         <div
//           id="modal-background"
//           className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
//           onClick={closeModal}
//         >
//           <div className="bg-white p-6 rounded shadow-lg grid grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
//             <h3 className="text-xl font-bold mb-4 col-span-2">Edit Order</h3>
//             {Object.keys(editOrder).map((key) => (
//               <div key={key} className="col-span-1">
//                 <label className="block font-semibold">{key}</label>
//                 <input
//                   type={key === "productImage" ? "file" : "text"}
//                   name={key}
//                   value={key === "productImage" ? undefined : editOrder[key]}
//                   onChange={key === "productImage" ? handleFileChange : handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//             ))}
//             <div className="col-span-2 flex justify-end space-x-3">
//               <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
//                 {loading ? "Saving..." : "Save"}
//               </button>
//               <button onClick={() => setEditOrder(null)} className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit } from "react-icons/fa";
// import { GiConfirmed } from "react-icons/gi";

// export default function ViewOrders() {
//   const [orders, setOrders] = useState([]);
//   const [editOrder, setEditOrder] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch Orders from API
//   // useEffect(() => {
//   //   const fetchOrders = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:5000/api/admin-manage/");
//   //       console.log("------",res)
//   //       setOrders(res.data.data);
//   //     } catch (error) {
//   //       console.error("Error fetching orders:", error);
//   //     }
//   //   };

//   //   fetchOrders();
//   // }, []);


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/admin-manage/");
//         console.log("------", res);

//         // Modify the orders to include the full image URL
//         const updatedOrders = res.data.data.map(order => ({
//           ...order,
//           items: order.items.map(item => ({
//             ...item,
//             productId: {
//               ...item.productId,
//               image: item?.productId?.image
//                 ? `http://localhost:5000/Images/${item?.productId?.image}`
//                 : null
//             }
//           }))
//         }));

//         setOrders(updatedOrders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);


//   // Handle Edit
//   const handleEdit = (order) => {
//     const editableData = {
//       orderId: order._id,
//       customerName: order?.userId?.name,
//       productName: order?.items[0]?.productId?.productName,
//       productImage: order?.items[0]?.productId?.images[0],
//       category: order?.items[0]?.productId?.category,
//       subCategory: order?.items[0]?.productId?.subCategory,
//       description: order?.items[0]?.productId?.productDescription,
//       price: order?.items[0]?.productId?.price,
//       // oldPrice: order?.items[0]?.productId?.oldprice,
//       availableStock: order?.items[0]?.productId?.availableStock,
//       quantity: order?.items[0]?.quantity,
//       status: order?.items[0]?.status,
//       totalAmount: order?.totalAmount,
//     };
//     setEditOrder(editableData);
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditOrder((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle File Upload
//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const imageUrl = URL.createObjectURL(file);
//       setEditOrder((prev) => ({ ...prev, productImage: imageUrl }));
//     }
//   };

//   // Save Edited Order
//   const handleSave = async () => {
//     if (!editOrder) return;
//     setLoading(true);

//     try {
//       const updatedData = {
//         productName: editOrder.productName,
//         productImage: editOrder.productImage,
//         category: editOrder.category,
//         subCategory: editOrder.subCategory,
//         description: editOrder.description,
//         price: editOrder.price,
//         // oldPrice: editOrder.oldPrice,
//         availableStock: editOrder.availableStock,
//         quantity: editOrder.quantity,
//         status: editOrder.status,
//         totalAmount: editOrder.totalAmount,
//       };

//       await axios.put(
//         `http://localhost:5000/api/admin-manage/${editOrder.orderId}`,
//         updatedData
//       );

//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === editOrder.orderId
//             ? { ...order, ...updatedData }
//             : order
//         )
//       );

//       setEditOrder(null);
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }

//     setLoading(false);
//   };

//   // Confirm Order API Call
//   const handleConfirmOrder = async (order) => {
//     if (order.status === "Confirmed") return;
//     setLoading(true);

//     try {
//       const updatedStatus = { status: "Confirmed" };

//       await axios.put(
//         `http://localhost:5000/api/admin-manage/${order._id}`,
//         updatedStatus
//       );

//       // ✅ Update Local State Immediately
//       setOrders((prevOrders) =>
//         prevOrders.map((o) =>
//           o._id === order._id
//             ? { ...o, status: "Confirmed" }      //items: o.items.map(item => ({ ...item, status: "Confirmed" }))
//             : o
//         )
//       );

//       console.log(`Order ${order._id} confirmed successfully`);
//     } catch (error) {
//       console.error("Error confirming order:", error);
//     }

//     setLoading(false);
//   };

//   // Close Modal on Background Click
//   const closeModal = (e) => {
//     if (e.target.id === "modal-background") {
//       setEditOrder(null);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[1200px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {[
//                 "Order ID",
//                 "Customer",
//                 "Product Name",
//                 "Product Image",
//                 "Category",
//                 "Sub Category",
//                 "Description",
//                 "Price",
//                 // "Old Price",
//                 "Available Stock",
//                 "Quantity",
//                 "Status",
//                 "Total",
//                 // "Actions",
//               ].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) =>

//               <tr key={index} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{index + 1}</td>
//                 <td className="border border-gray-300 p-3">{order?.userId?.name}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.productName}</td>
//                 <td className="border border-gray-300 p-3">
//                   <img
//                     src={order?.items[0]?.productId?.image} // ✅ Corrected from `images` to `image`
//                     alt={order?.items[0]?.productId?.productName || "Product Image"}
//                     className="w-10 h-10 mx-auto"
//                   />

//                 </td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.category}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.subCategory}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.productDescription}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.price}</td>
//                 {/* <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.oldprice}</td> */}
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.availableStock}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.quantity}</td>
//                 <td className="border border-gray-300 p-3">{order?.status}</td>
//                 <td className="border border-gray-300 p-3">{order?.totalAmount}</td>
//                 {/* <td className="border border-gray-300 p-3 flex justify-center items-center">
//                   <GiConfirmed
//                     size={"35px"}
//                     className="text-green-600 cursor-pointer hover:text-green-800 transition-colors duration-200"
//                     onClick={() => handleConfirmOrder(order)}
//                     disabled={loading}
//                   />
//                 </td> */}
//               </tr>

//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit } from "react-icons/fa";
// import { GiConfirmed } from "react-icons/gi";

// export default function ViewOrders() {
//   const [orders, setOrders] = useState([]);
//   const [editOrder, setEditOrder] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // ✅ Track current page
//   const itemsPerPage = 5; // ✅ Number of orders per page

//   // Fetch Orders from API
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/admin-manage/");
//         console.log("------", res);

//         // Modify the orders to include the full image URL
//         const updatedOrders = res.data.data.map(order => ({
//           ...order,
//           items: order.items.map(item => ({
//             ...item,
//             productId: {
//               ...item.productId,
//               image: item?.productId?.image
//                 ? `http://localhost:5000/Images/${item?.productId?.image}`
//                 : null
//             }
//           }))
//         }));

//         setOrders(updatedOrders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // **Pagination Logic**
//   const totalPages = Math.ceil(orders.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

//   // **Handle Page Change**
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Orders</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[1200px] border-collapse border border-gray-700 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               {[
//                 "Order ID",
//                 "Customer",
//                 "Product Name",
//                 "Product Image",
//                 "Category",
//                 "Sub Category",
//                 "Description",
//                 "Price",
//                 "Available Stock",
//                 "Quantity",
//                 "Status",
//                 "Total",
//               ].map((header) => (
//                 <th key={header} className="border border-gray-700 p-3 text-center font-bold">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentOrders.map((order, index) => (
//               <tr key={index} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
//                 <td className="border border-gray-300 p-3">{indexOfFirstItem + index + 1}</td>
//                 <td className="border border-gray-300 p-3">{order?.userId?.name}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.productName}</td>
//                 <td className="border border-gray-300 p-3">
//                   <img
//                     src={order?.items[0]?.productId?.image}
//                     alt={order?.items[0]?.productId?.productName || "Product Image"}
//                     className="w-10 h-10 mx-auto"
//                   />
//                 </td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.category}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.subCategory}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.productDescription}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.price}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.productId?.availableStock}</td>
//                 <td className="border border-gray-300 p-3">{order?.items[0]?.quantity}</td>
//                 <td className="border border-gray-300 p-3">{order?.status}</td>
//                 <td className="border border-gray-300 p-3">{order?.totalAmount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-6 space-x-2">
//         <button
//           className={`px-4 py-2 border rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           className={`px-4 py-2 border rounded-md ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");


  const itemsPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin-manage/");
        const updatedOrders = res.data.data.map(order => ({
          ...order,
          items: order.items.map(item => ({
            ...item,
            productId: {
              ...item.productId,
              image: item?.productId?.image
                ? `http://localhost:5000/Images/${item?.productId?.image}`
                : null
            }
          }))
        }));
        setOrders(updatedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // const totalPages = Math.ceil(orders.length / itemsPerPage);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredOrders = orders.filter(order =>
    order?._id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||  // ✅ Convert ObjectId to string
    order?.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order?.items[0]?.productId?.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4">All Orders</h2>

        {/* Search Bar */}
        <input
        type="text"
        placeholder="Search by Order ID, Customer, or Product Name"
        className="border p-2 rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto max-w-full border rounded-lg shadow-md">
        <table className="w-full min-w-[1000px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-700 text-white text-sm md:text-base">
              {[
                "Order ID",
                "Customer",
                "Product Name",
                "Product Image",
                "Category",
                "Sub Category",
                "Description",
                "Price",
                "Quantity",
                // "Status",
                "Total",
              ].map((header) => (
                <th key={header} className="border p-2 md:p-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order._id} className="text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <td className="border p-2">{indexOfFirstItem + order._id}</td>
                <td className="border p-2">{order?.userId?.name}</td>
                <td className="border p-2">{order?.items[0]?.productId?.productName}</td>
                <td className="border p-2">
                  <img
                    src={order?.items[0]?.productId?.image}
                    alt={order?.items[0]?.productId?.productName || "Product Image"}
                    className="w-20 h-20 mx-auto"
                  />
                </td>
                <td className="border p-2">{order?.items[0]?.productId?.category}</td>
                <td className="border p-2">{order?.items[0]?.productId?.subCategory}</td>
                <td className="border p-2 max-w-xs whitespace-normal break-words text-sm">
                  {order?.items[0]?.productId?.productDescription}
                </td>
                <td className="border p-2">{order?.items[0]?.productId?.price}</td>
                <td className="border p-2">{order?.items[0]?.quantity}</td>
                {/* <td className="border p-2">{order?.status}</td> */}
                <td className="border p-2">{order?.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 border rounded-md ${
              currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
