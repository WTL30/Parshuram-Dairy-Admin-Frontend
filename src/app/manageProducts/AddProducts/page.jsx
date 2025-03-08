// "use client";
// import React, { useState } from "react";

// const categoryOptions = {
//   "Dairy Products": ["Milk", "Cheese", "Butter", "Yogurt"],
//   "Bakery": ["Bread", "Cake", "Cookies", "Pastries"],
//   "Food": ["Rice", "Pasta", "Noodles", "Cereal"],
//   "Vegetables": ["Carrots", "Potatoes", "Tomatoes", "Spinach"],
//   "Beverages": ["Juice", "Soda", "Coffee", "Tea"],
// };

// const AddProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({

//     product: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     price: "",


//     stock: "",
//     quantity: "",

//   });
//   const [showForm, setShowForm] = useState(false);
//   const [editingProductId, setEditingProductId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setFormData({ ...formData, category, subCategory: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingProductId !== null) {
//       setProducts(products.map(product => product.id === editingProductId ? { ...formData, id: editingProductId, total: formData.price * formData.quantity } : product));
//       setEditingProductId(null);
//     } else {
//       const newProduct = {
//         ...formData,
//         id: products.length + 1,
//         total: formData.price * formData.quantity,
//       };
//       setProducts([...products, newProduct]);
//     }

//     setFormData({

//       product: "",
//       category: "",
//       subCategory: "",
//       description: "",
//       price: "",

//       stock: "",
//       quantity: "",

//     });
//     setShowForm(false);
//   };

//   const handleDelete = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditingProductId(product.id);
//     setShowForm(true);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         {showForm ? "Hide Form" : "Add Product"}
//       </button>

//       {showForm && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
//           <h2 className="text-2xl font-bold mb-4">{editingProductId ? "Edit Product" : "Add Product"}</h2>
//           <div className="grid grid-cols-2 gap-4">

//             <input type="text" name="product" placeholder="Product" value={formData.product} onChange={handleChange} className="p-2 border rounded" required />

//             <select name="category" value={formData.category} onChange={handleCategoryChange} className="p-2 border rounded" required>
//               <option value="">Select Category</option>
//               {Object.keys(categoryOptions).map((cat, index) => (
//                 <option key={index} value={cat}>{cat}</option>
//               ))}
//             </select>

//             <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="p-2 border rounded" required>
//               <option value="">Select Subcategory</option>
//               {formData.category && categoryOptions[formData.category].map((subCat, index) => (
//                 <option key={index} value={subCat}>{subCat}</option>
//               ))}
//             </select>

//             <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border rounded" required />
//             <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border rounded" required />

//             <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="p-2 border rounded" required />
//             <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="p-2 border rounded" required />

//           </div>
//           <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
//             {editingProductId ? "Update Product" : "Save Product"}
//           </button>
//         </form>
//       )}

//       {products.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold mb-2">Added Products</h2>
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Product</th>
//                 <th className="border p-2">Category</th>
//                 <th className="border p-2">Subcategory</th>
//                 <th className="border p-2">Description</th>
//                 <th className="border p-2">Price</th>
//                 <th className="border p-2">Stock</th>
//                 <th className="border p-2">Quatity</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="border">
//                   <td className="border p-2 text-center">{product.id}</td>
//                   <td className="border p-2">{product.product}</td>
//                   <td className="border p-2">{product.category}</td>
//                   <td className="border p-2">{product.subCategory}</td>
//                   <td className="border p-2">{product.description}</td>
//                   <td className="border p-2">{product.price}</td>
//                   <td className="border p-2">{product.stock}</td>
//                   <td className="border p-2">{product.quantity}</td>


//                   <td className="border p-2">
//                     <button onClick={() => handleEdit(product)} className="bg-yellow-600 text-white px-2 py-1 rounded mr-2">Edit</button>
//                     <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;


// "use client";
// import React, { useState } from "react";

// const categoryOptions = {
//   "Dairy Products": ["Milk", "Cheese", "Butter", "Yogurt"],
//   "Bakery": ["Bread", "Cake", "Cookies", "Pastries"],
//   "Sauce": ["Tomato Sauce", "Soy Sauce", "Barbecue Sauce", "Chili Sauce", "Pesto Sauce", "Mayonnaise", "Mustard", "Hot Sauce", "Alfredo Sauce", "Teriyaki Sauce"]
// ,
//   "Vegetables": ["Carrots", "Potatoes", "Tomatoes", "Spinach"],
//   "Beverages": ["Juice", "Soda", "Coffee", "Tea"],
// };

// const unitOptions = ["L", "ml", "gm", "kg"];

// const AddProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     product: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     price: "",
//     stock: "",
//     quantity: "",
//     nutrientInfo: "",
//     unit: "",
//     image: null,
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setFormData({ ...formData, category, subCategory: "" });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, image: file });
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingProductId !== null) {
//       setProducts(products.map(product => 
//         product.id === editingProductId ? { ...formData, id: editingProductId, total: formData.price * formData.quantity } : product
//       ));
//       setEditingProductId(null);
//     } else {
//       const newProduct = {
//         ...formData,
//         id: products.length + 1,
//         total: formData.price * formData.quantity,
//       };
//       setProducts([...products, newProduct]);
//     }

//     setFormData({
//       product: "",
//       category: "",
//       subCategory: "",
//       description: "",
//       price: "",
//       stock: "",
//       quantity: "",
//       nutrientInfo: "",
//       unit: "",

//       image: null,
//     });
//     setImagePreview(null);
//     setShowForm(false);
//   };

//   const handleDelete = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditingProductId(product.id);
//     setShowForm(true);
//     setImagePreview(product.image ? URL.createObjectURL(product.image) : null);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         {showForm ? "Hide Form" : "Add Product"}
//       </button>

//       {showForm && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
//           <h2 className="text-2xl font-bold mb-4">{editingProductId ? "Edit Product" : "Add Product"}</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" name="product" placeholder="Product Name" value={formData.product} onChange={handleChange} className="p-2 border rounded" required />
//             <select name="category" value={formData.category} onChange={handleCategoryChange} className="p-2 border rounded" required>
//               <option value="">Select Category</option>
//               {Object.keys(categoryOptions).map((cat, index) => (
//                 <option key={index} value={cat}>{cat}</option>
//               ))}
//             </select>

//             <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="p-2 border rounded" required>
//               <option value="">Select Subcategory</option>
//               {formData.category && categoryOptions[formData.category].map((subCat, index) => (
//                 <option key={index} value={subCat}>{subCat}</option>
//               ))}
//             </select>

//             <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border rounded" required />
//             <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border rounded" required />

//             <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="p-2 border rounded" required />
//             <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="p-2 border rounded" required />

//             <input type="text" name="nutrientInfo" placeholder="Nutrient Information" value={formData.nutrientInfo} onChange={handleChange} className="p-2 border rounded" required />

//             <select name="unit" value={formData.unit} onChange={handleChange} className="p-2 border rounded" required>
//               <option value="">Select Unit</option>
//               {unitOptions.map((unit, index) => (
//                 <option key={index} value={unit}>{unit}</option>
//               ))}
//             </select>

//             <input type="file" accept="image/*" onChange={handleImageUpload} className="p-2 border rounded" required />
//             {imagePreview && <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover mt-2" />}
//           </div>
//           <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
//             {editingProductId ? "Update Product" : "Save Product"}
//           </button>
//         </form>
//       )}

//       {products.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold mb-2">Added Products</h2>
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Product</th>
//                 <th className="border p-2">Category</th>
//                 <th className="border p-2">Subcategory</th>
//                 <th className="border p-2">Description</th>
//                 <th className="border p-2">Nutrients</th>
//                 <th className="border p-2">Price</th>
//                 <th className="border p-2">Stock</th>
//                 <th className="border p-2">Quantity</th>
//                 <th className="border p-2">Unit</th>
//                 <th className="border p-2">Image</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="border">
//                   <td className="border p-2 text-center">{product.id}</td>
//                   <td className="border p-2">{product.product}</td>
//                   <td className="border p-2">{product.category}</td>
//                   <td className="border p-2">{product.subCategory}</td>
//                   <td className="border p-2">{product.description}</td>
//                   <td className="border p-2">{product.nutrientInfo}</td>
//                   <td className="border p-2">{product.price}</td>
//                   <td className="border p-2">{product.stock}</td>
//                   <td className="border p-2">{product.quantity}</td>
//                   <td className="border p-2">{product.unit}</td>

//                   <td className="border p-2"><img src={URL.createObjectURL(product.image)} alt="Product" className="h-12 w-12 object-cover" /></td>

//                   <td className="border p-2">
//                     <button onClick={() => handleEdit(product)} className="bg-yellow-600 text-white px-2 py-1 rounded mr-2">Edit</button>
//                     <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
//                    </td>

//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categoryOptions = {
  "Dairy Products": ["Milk", "Paneer & Cheese", "Ghee & Butter", "Curd & Yogurt","Sweetened Dairy Beverages"],
  "Baking & Cooking Essentials": ["Dessert Premixes"],
  "Bakery": ["Bread", "Cake", "Cookies", "Pastries"],
  "Sauce": ["Tomato Sauce", "Soy Sauce", "Barbecue Sauce", "Chili Sauce","Chocolate Sauce"],
  "Vegetables": ["Carrots", "Potatoes", "Tomatoes", "Spinach","Fresh Vegetables"],
  "Frozen Foods / Fresh Vegetables": ["Frozen Snacks","Frozen Vegetbles"],
  "Beverages": ["Juice", "Soda", "Coffee", "Tea","Instant Drink Mixes / Hot Beverages"],
};

const unitOptions = ["L", "ml", "gm", "kg"];

export default function AddProduct() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    productDescription: "",
    nutritionalInfo: "",
    price: "",
    quantity: "",
    unit: "",
    availableStock: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value, subCategory: "" });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formdata = new FormData();
    for (let key in formData) {
      formdata.append(key, formData[key]);
    }
    if (file) formdata.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload/", formdata);
      console.log(res.data);
      setImage(res.data.image);
      toast.success("Product uploaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed! Please try again.");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/upload/get-image")
      .then(res => {
        console.log(res.data);
        setImage(res.data[0]?.image);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">Upload Product</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="productName" placeholder="Product Name" className="border p-2 rounded w-full" onChange={handleInputChange} required />
        <select name="category" value={formData.category} onChange={handleCategoryChange} className="p-2 border rounded" required>
          <option value="">Select Category</option>
          {Object.keys(categoryOptions).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select name="subCategory" value={formData.subCategory} onChange={handleInputChange} className="p-2 border rounded" required disabled={!formData.category} >
          <option value="">Select Subcategory</option>
          {formData.category && categoryOptions[formData.category].map((subCat) => (
            <option key={subCat} value={subCat}>{subCat}</option>
          ))}
        </select>
        <input type="number" name="price" placeholder="Price" className="border p-2 rounded w-full" onChange={handleInputChange} required />

        <textarea
          name="productDescription"
          placeholder="Product Description"
          className="border p-2 rounded w-full max-w-xl resize-none h-24"
          onChange={handleInputChange}
          required
        />
        <textarea
          name="nutritionalInfo"
          placeholder="Nutritional Info."
          className="border p-2 rounded w-full max-w-xl resize-none h-24"
          onChange={handleInputChange}
          required
        />        <input type="text" name="quantity" placeholder="Quantity" className="border p-2 rounded w-full" onChange={handleInputChange} required />
        <select name="unit" value={formData.unit} onChange={handleInputChange} className="p-2 border rounded" required>
          <option value="">Select Unit</option>
          {unitOptions.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <input type="number" name="availableStock" placeholder="Available Stock" className="border p-2 rounded w-full" onChange={handleInputChange} required />
        <input type="file" className="border p-2 rounded w-full" onChange={handleFileChange} />
      </div>

      <button className="bg-gray-800 text-white px-4 py-2 rounded mt-4 w-full " onClick={handleUpload}>
        Upload Product
      </button>

      {/* {image && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold">Uploaded Image:</h2>
          <img src={`http://localhost:5000/Images/${image}`} alt="Uploaded" className="w-40 mx-auto mt-2 rounded-lg shadow" />
        </div>
      )} */}
    </div>
  );
}