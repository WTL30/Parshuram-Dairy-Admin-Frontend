// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Pencil, Trash2 } from "lucide-react"

// export default function AdminProductList() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [editId, setEditId] = useState(null)
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     category: "",
//     subCategory: "",
//     // colors: [],
//     sizes: [],
//     price: "",
//     oldPrice: "",
//     stock: "",
//   })

//   // Fetch products data
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // In a real app, you would fetch from your API
//         // For now, we'll use sample data
//         const sampleProducts = [
//           {
//             _id: "1",
//             name: "Allen Solly Men's Solid Regular Fit Polo",
//             image: "/placeholder.svg?height=80&width=80",
//             category: "men",
//             subCategory: "Casual Wear",
//             // colors: [{ name: "Black" }],
//             sizes: ["S"],
//             price: "Rs 399",
//             oldPrice: "Rs 499",
//             stock: 23,
//           },
//           {
//             _id: "2",
//             name: "Noble Monk Men's Solid Casual Shirt |Full Sleeve|Stylish Shirt for Men",
//             image: "/placeholder.svg?height=80&width=80",
//             category: "men",
//             subCategory: "Winter Wear",
//             // colors: [{ name: "PeachPuff" }, { name: "Navy" }, { name: "DarkOliveGreen" }, { name: "SkyBlue" }],
//             sizes: ["S", "XS", "L", "XL", "XXL", "M"],
//             price: "Rs 299",
//             oldPrice: "Rs 1299",
//             stock: 100,
//           },
//           {
//             _id: "3",
//             name: "Symbol Men's Solid Cotton Shirt",
//             image: "/placeholder.svg?height=80&width=80",
//             category: "men",
//             subCategory: "Formal Wear",
//             // colors: [{ name: "Black" }, { name: "Beige" }, { name: "Maroon" }],
//             sizes: ["S", "M", "L", "XL"],
//             price: "Rs 599",
//             oldPrice: "Rs 799",
//             stock: 25,
//           },
//         ]

//         setProducts(sampleProducts)
//         setLoading(false)
//       } catch (err) {
//         setError(err.message)
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   // Handle input changes for editing
//   const handleChange = (e) => {
//     const { name, value } = e.target

//     // Handle stock as a number and prevent negative values
//     if (name === "stock" && value < 0) {
//       setNewProduct({ ...newProduct, [name]: 0 })
//       return
//     }

//     setNewProduct({ ...newProduct, [name]: value })
//   }

//   // Start editing a product
//   const startEditing = (product) => {
//     setEditId(product._id)
//     setNewProduct({
//       name: product.name,
//       category: product.category,
//       subCategory: product.subCategory,
//     //   colors: product.colors,
//       sizes: product.sizes,
//       price: product.price,
//       oldPrice: product.oldPrice,
//       stock: product.stock,
//     })
//   }

//   // Update a product
//   const updateProduct = async () => {
//     try {
//       // In a real app, you would call your API
//       // For now, we'll update the local state
//       setProducts(products.map((product) => (product._id === editId ? { ...product, ...newProduct } : product)))

//       setEditId(null)
//       setNewProduct({
//         name: "",
//         category: "",
//         subCategory: "",
//         // colors: [],
//         sizes: [],
//         price: "",
//         oldPrice: "",
//         stock: "",
//       })
//     } catch (error) {
//       console.error("Error updating product:", error)
//     }
//   }

//   // Delete a product
//   const deleteProduct = async (id) => {
//     try {
//       // In a real app, you would call your API
//       // For now, we'll update the local state
//       setProducts(products.filter((product) => product._id !== id))
//     } catch (error) {
//       console.error("Error deleting product:", error)
//     }
//   }

//   // Filter products based on search term
//   const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   if (loading) return <p className="text-center p-8">Loading product data...</p>
//   if (error) return <p className="text-center p-8 text-red-500">Error: {error}</p>

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Admin Product List</h1>

//       {/* Search bar */}
//       <div className="mb-6">
//         <div className="relative max-w-xs mx-auto">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Edit form */}
//       {editId && (
//         <div className="mb-6 p-4 border rounded-md bg-gray-50">
//           <h3 className="font-bold mb-3">Edit Product</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={newProduct.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Sub Category</label>
//               <input
//                 type="text"
//                 name="subCategory"
//                 value={newProduct.subCategory}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Price</label>
//               <input
//                 type="text"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Old Price</label>
//               <input
//                 type="text"
//                 name="oldPrice"
//                 value={newProduct.oldPrice}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Stock</label>
//               <input
//                 type="number"
//                 name="stock"
//                 value={newProduct.stock}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//                 min="0"
//               />
//             </div>
//           </div>
//           <div className="mt-4 flex justify-end">
//             <button
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
//               onClick={() => setEditId(null)}
//             >
//               Cancel
//             </button>
//             <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={updateProduct}>
//               Update
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Products table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-800 text-white">
//               <th className="border border-gray-700 px-4 py-2 text-center">SR. NO</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">IMAGE</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">NAME</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">CATEGORY</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">SUB CATEGORY</th>
//               {/* <th className="border border-gray-700 px-4 py-2 text-center">COLORS</th> */}
//               <th className="border border-gray-700 px-4 py-2 text-center">SIZES</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">PRICE</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">OLD PRICE</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">STOCK</th>
//               <th className="border border-gray-700 px-4 py-2 text-center">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product, index) => (
//               <tr key={product._id} className="border-b hover:bg-gray-50">
//                 <td className="border px-4 py-2 text-center text-orange-500 font-bold">{index + 1}</td>
//                 <td className="border px-4 py-2 text-center">
//                   <div className="flex justify-center">
//                     <Image
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       width={60}
//                       height={60}
//                       className="object-cover"
//                     />
//                   </div>
//                 </td>
//                 <td className="border px-4 py-2">{product.name}</td>
//                 <td className="border px-4 py-2 text-center">{product.category}</td>
//                 <td className="border px-4 py-2 text-center">{product.subCategory}</td>
//                 {/* <td className="border px-4 py-2">
//                   {product.colors.map((color, index) => (
//                     <div key={index} className="mb-1">
//                       {`{"name":"${color.name}"}`}
//                     </div>
//                   ))}
//                 </td> */}
//                 <td className="border px-4 py-2 text-center">{`["${product.sizes.join('","')}"]`}</td>
//                 <td className="border px-4 py-2 text-center">{product.price}</td>
//                 <td className="border px-4 py-2 text-center">{product.oldPrice}</td>
//                 <td className="border px-4 py-2 text-center">{product.stock}</td>
//                 <td className="border px-4 py-2 text-center">
//                   <div className="flex flex-col gap-2 items-center">
//                     <button
//                       className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
//                       onClick={() => startEditing(product)}
//                     >
//                       <Pencil size={16} />
//                     </button>
//                     <button
//                       className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
//                       onClick={() => deleteProduct(product._id)}
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6">
//         <nav>
//           <ul className="flex items-center">
//             <li>
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded-md mr-1 bg-white disabled:opacity-50"
//               >
//                 Prev
//               </button>
//             </li>
//             {[1, 2, 3, 4].map((page) => (
//               <li key={page}>
//                 <button
//                   onClick={() => handlePageChange(page)}
//                   className={`px-3 py-1 border rounded-md mx-1 ${
//                     currentPage === page ? "bg-blue-500 text-white" : "bg-white"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === 4}
//                 className="px-3 py-1 border rounded-md ml-1 bg-white disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   )
// }




// "use client";

// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CheckStockLevels() {
//     const [stocks, setStocks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [editId, setEditId] = useState(null);
//     const [newStock, setNewStock] = useState({
//         productName: "",
//         category: "",
//         quantity: "",
//         unit: "",
//         availableStock: "",
//         price: "",
//         image: ""
//     });

//     const categories = ["Dairy Products", "Sauce", "Beverage", "Vegetables", "Bakery"];
//     const units = ["L", "ml", "kg", "gm"];

//     useEffect(() => {
//         const fetchStock = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/stocks/getStock");
//                 if (!response.ok) throw new Error("Failed to fetch stock data");

//                 const data = await response.json();
//                 setStocks(data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };
//         fetchStock();
//     }, []);

//     const handleChange = (e) => {
//         let { name, value } = e.target;
//         if ((name === "quantity" || name === "availableStock" || name === "price" ) && value < 0) {
//             value = 0;
//         }
//         setNewStock({ ...newStock, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setNewStock({ ...newStock, image: reader.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const deleteStock = async (id) => {
//         try {
//             await fetch(`http://localhost:5000/api/stocks/${id}`, { method: "DELETE" });
//             setStocks(stocks.filter(stock => stock._id !== id));
//             toast.success("Stock deleted successfully");
//         } catch (error) {
//             console.error("Error deleting stock:", error);
//             toast.error("Failed to delete stock");
//         }
//     };

//     const startEditing = (stock) => {
//         setEditId(stock._id);
//         setNewStock({
//             productName: stock.productName,
//             category: stock.category?.[0] || "",
//             quantity: stock.quantity,
//             unit: stock.unit?.[0] || "",
//             availableStock: stock.availableStock || 0,
//             price: stock.price || 0,
//             image: stock.image || ""
//         });
//     };

//     const updateStock = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/stocks/${editId}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newStock)
//             });

//             if (!response.ok) throw new Error("Failed to update stock");

//             const updatedProduct = await response.json();
//             setStocks((prevStocks) =>
//                 prevStocks.map((stock) =>
//                     stock._id === editId ? updatedProduct : stock
//                 )
//             );

//             toast.success("Stock updated successfully!");
//             closeForm();
//         } catch (error) {
//             console.error("Error updating stock:", error);
//             toast.error("Failed to update stock");
//         }
//     };

//     const closeForm = () => {
//         setEditId(null);
//         setNewStock({ productName: "", category: "", quantity: "", unit: "", availableStock: "", price: "", image: "" });
//     };

//     if (loading) return <p className="text-center text-lg font-semibold">Loading stock data...</p>;
//     if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

//     return (
//         <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <ToastContainer position="top-right" autoClose={3000} />

//             <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Stock Management</h2>

//             {editId && (
//                 <div className="mb-6 p-6 border rounded-lg bg-gray-50 shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-700 mb-4">Editing Product</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <label className="block font-medium">Product Name:
//                             <input type="text" name="productName" value={newStock.productName} onChange={handleChange} className="border p-3 w-full rounded-lg" />
//                         </label>
//                         <label className="block font-medium">Category:
//                             <select name="category" value={newStock.category || ""} onChange={handleChange} className="border p-3 w-full rounded-lg">
//                                 <option value="">Select Category</option>
//                                 {categories.map((cat) => (
//                                     <option key={cat} value={cat}>{cat}</option>
//                                 ))}
//                             </select>
//                         </label>
//                         <label className="block font-medium">Quantity:
//                             <input type="number" name="quantity" value={newStock.quantity} onChange={handleChange} className="border p-3 w-full rounded-lg" min="0" />
//                         </label>
//                         <label className="block font-medium">Available Stock:
//                             <input type="number" name="availableStock" value={newStock.availableStock} onChange={handleChange} className="border p-3 w-full rounded-lg" min="0" />
//                         </label>
//                         <label className="block font-medium">Price:
//                             <input type="number" name="price" value={newStock.price} onChange={handleChange} className="border p-3 w-full rounded-lg" min="0" />
//                         </label>
//                         <label className="block font-medium">Image:
//                             <input type="file" accept="image/*" onChange={handleFileChange} className="border p-3 w-full rounded-lg" />
//                             {newStock.image && <img src={newStock.image} alt="Preview" className="w-20 h-20 object-cover mt-2" />}
//                         </label>
//                     </div>

//                     <div className="mt-4 flex space-x-3">
//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" onClick={updateStock}>
//                             Update
//                         </button>
//                         <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600" onClick={closeForm}>
//                             Close Form
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-700 text-white">
//                         <th className="border p-4">Image</th>
//                         <th className="border p-4">Product</th>
//                         <th className="border p-4">Category</th>
//                         <th className="border p-4">Quantity</th>
//                         <th className="border p-4">Available Stock</th>
//                         <th className="border p-4">Price</th>
//                         <th className="border p-4">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stocks.map((stock) => (
//                         <tr key={stock._id} className="border">
//                             <td className="border p-3">
//                                 {stock.image ? <img src={stock.image} alt="Product" className="w-16 h-16 object-cover" /> : "No Image"}
//                             </td>
//                             <td className="border p-3">{stock.productName}</td>
//                             <td className="border p-3">{stock.category?.[0] || ""}</td>
//                             <td className="border p-3">{stock.quantity}</td>
//                             <td className="border p-3">{stock.availableStock || 0}</td>
//                             <td className="border p-3">{stock.price}</td>
//                             <td className="border p-3 space-x-2">
//                                 <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => startEditing(stock)}>Edit</button>
//                                 <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => deleteStock(stock._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductList() {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editId, setEditId] = useState(null);
    const [newStock, setNewStock] = useState({
        productName: "",
        category: "",
        quantity: "",
        unit: "",
        availableStock: "",
        price: "",
        image: ""
    });

    const categories = ["Dairy Products", "Sauce", "Beverage", "Vegetables", "Bakery"];
    const units = ["L", "ml", "kg", "gm"];

    useEffect(() => {
        const fetchStock = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/stocks/getStock");
                if (!response.ok) throw new Error("Failed to fetch stock data");

                const data = await response.json();

                // Ensure image URL is correct
                const updatedData = data.map(stock => ({
                    ...stock,
                    image: stock.image ? `http://localhost:5000/Images/${stock.image}` : null
                }));

                console.log(updatedData)
                setStocks(updatedData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchStock();
    }, []);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if ((name === "quantity" || name === "availableStock" || name === "price") && value < 0) {
            value = 0;
        }
        setNewStock({ ...newStock, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewStock({ ...newStock, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const deleteStock = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/stocks/${id}`, { method: "DELETE" });
            setStocks(stocks.filter(stock => stock._id !== id));
            toast.success("Stock deleted successfully");
        } catch (error) {
            console.error("Error deleting stock:", error);
            toast.error("Failed to delete stock");
        }
    };

    const startEditing = (stock) => {
        setEditId(stock._id);
        setNewStock({
            productName: stock.productName,
            category: stock.category?.[0] || "",
            quantity: stock.quantity,
            unit: stock.unit?.[0] || "",
            availableStock: stock.availableStock || 0,
            price: stock.price || 0,
            image: stock.image || ""
        });
    };

    const updateStock = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/stocks/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newStock)
            });

            if (!response.ok) throw new Error("Failed to update stock");

            const updatedProduct = await response.json();
            setStocks((prevStocks) =>
                prevStocks.map((stock) =>
                    stock._id === editId ? updatedProduct : stock
                )
            );

            toast.success("Stock updated successfully!");
            closeForm();
        } catch (error) {
            console.error("Error updating stock:", error);
            toast.error("Failed to update stock");
        }
    };

    const closeForm = () => {
        setEditId(null);
        setNewStock({ productName: "", category: "", quantity: "", unit: "", availableStock: "", price: "", image: "" });
    };

    if (loading) return <p className="text-center text-lg font-semibold">Loading stock data...</p>;
    if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <ToastContainer position="top-right" autoClose={3000} />

            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Stock Management</h2>

            {editId && (
                <div className="mb-6 p-6 border rounded-lg bg-gray-50 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Editing Product</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className="block font-medium">Product Name:
                            <input type="text" name="productName" value={newStock.productName} onChange={handleChange} className="border p-3 w-full rounded-lg" />
                        </label>
                        <label className="block font-medium">Category:
                            <select name="category" value={newStock.category || ""} onChange={handleChange} className="border p-3 w-full rounded-lg">
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </label>
                        <label className="block font-medium">Quantity:
                            <input type="number" name="quantity" value={newStock.quantity} onChange={handleChange} className="border p-3 w-full rounded-lg" min="0" />
                        </label>
                        <label className="block font-medium">Price:
                            <input type="number" name="price" value={newStock.price} onChange={handleChange} className="border p-3 w-full rounded-lg" min="0" />
                        </label>
                        <label className="block font-medium">Image:
                            <input type="file" accept="image/*" onChange={handleFileChange} className="border p-3 w-full rounded-lg" />
                            {newStock.image && <img src={newStock.image} alt="Preview" className="w-20 h-20 object-cover mt-2" />}
                        </label>
                    </div>

                    <div className="mt-4 flex space-x-3">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" onClick={updateStock}>
                            Update
                        </button>
                        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600" onClick={closeForm}>
                            Close Form
                        </button>
                    </div>
                </div>
            )}

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="border p-4">Image</th>
                        <th className="border p-4">Product</th>
                        <th className="border p-4">Category</th>
                        <th className="border p-4">Quantity</th>
                        <th className="border p-4">Available Stock</th>
                        <th className="border p-4">Price</th>
                        <th className="border p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock._id} className="border">
                            <td className="border p-3">
                                <td className="border p-3">
                                    {stock.image ? (
                                        <img src={stock.image} alt={stock.productName} className="w-16 h-16 object-cover" />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                            </td>
                            <td className="border p-3">{stock.productName}</td>
                            {/* <td className="border p-3">{stock.category?.[0] || ""}</td> */}
                            <td className="border p-3">{stock.category}</td>
                            <td className="border p-3">{stock.quantity}</td>
                            <td className="border p-3">{stock.availableStock || 0}</td>
                            <td className="border p-3">${stock.price}</td>
                            <td className="border p-3 space-x-2">
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => startEditing(stock)}>Edit</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => deleteStock(stock._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}