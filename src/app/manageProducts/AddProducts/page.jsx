// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function AddProduct() {
//     const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
//     const [subcategories, setSubcategories] = useState([]);
//     const [unit, setUnit] = useState(""); 
//     const [products, setProducts] = useState([]);
//     const [showForm, setShowForm] = useState(false); 

//     const categories = {
//         Bakery: ["Bread", "Cake", "Pastries", "Cookies"],
//         Beverage: ["Juice", "Tea", "Coffee", "Soda"],
//         Food: ["Rice", "Pasta", "Meat", "Dairy"],
//         Vegetables: ["Leafy Greens", "Root Vegetables", "Cruciferous", "Legumes"],
//         DairyProducts: ["Milk", "Cheese", "Butter", "Yogurt"],
//     };

//     const handleCategoryChange = (event) => {
//         const selectedCategory = event.target.value;
//         setSubcategories(categories[selectedCategory] || []);
//         setValue("subcategory", "");
//         setValue("quantity", "");
//         setUnit("");
//     };

//     const handleSubcategoryChange = (event) => {
//         const selectedSubcategory = event.target.value;
//         let selectedUnit = "";

//         if (categories.Bakery.includes(selectedSubcategory) || 
//             categories.Food.includes(selectedSubcategory) || 
//             categories.Vegetables.includes(selectedSubcategory) || 
//             categories.DairyProducts.includes(selectedSubcategory)) {
//             selectedUnit = "g";
//         } else if (categories.Beverage.includes(selectedSubcategory)) {
//             selectedUnit = "ml"; 
//         }

//         setUnit(selectedUnit);
//         setValue("quantity", "");
//     };

//     const quantity = watch("quantity");
//     const displayUnit = unit === "ml" && quantity >= 1000 ? "L" : unit;

//     const onSubmit = (data) => {
//         const newProduct = { ...data, quantity: `${data.quantity} ${displayUnit}` };
//         setProducts([...products, newProduct]);
//         reset();
//         setShowForm(false);
//     };

//     return (
//         <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-bold mb-4">Product Management</h2>

//             {/* Add Product Button */}
//             {!showForm && (
//                 <button 
//                     onClick={() => setShowForm(true)} 
//                     className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
//                 >
//                     Add Product
//                 </button>
//             )}

//             {/* Product Form */}
//             {showForm && (
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded-md">
//                     {/* Product Name */}
//                     <div>
//                         <label className="block text-gray-700">Product Name *</label>
//                         <input
//                             type="text"
//                             {...register("productName", { required: true })}
//                             className="w-full border p-2 rounded"
//                             placeholder="Enter product name"
//                         />
//                         {errors.productName && <span className="text-red-500">Product name is required</span>}
//                     </div>

//                     {/* Category */}
//                     <div>
//                         <label className="block text-gray-700">Category *</label>
//                         <select
//                             {...register("category", { required: true })}
//                             className="w-full border p-2 rounded"
//                             onChange={handleCategoryChange}
//                         >
//                             <option value="">Select Category</option>
//                             {Object.keys(categories).map((category) => (
//                                 <option key={category} value={category}>{category}</option>
//                             ))}
//                         </select>
//                         {errors.category && <span className="text-red-500">Category is required</span>}
//                     </div>

//                     {/* Subcategory */}
//                     <div>
//                         <label className="block text-gray-700">Subcategory *</label>
//                         <select
//                             {...register("subcategory", { required: true })}
//                             className="w-full border p-2 rounded"
//                             onChange={handleSubcategoryChange}
//                         >
//                             <option value="">Select Subcategory</option>
//                             {subcategories.map((sub, index) => (
//                                 <option key={index} value={sub}>{sub}</option>
//                             ))}
//                         </select>
//                         {errors.subcategory && <span className="text-red-500">Subcategory is required</span>}
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label className="block text-gray-700">Description *</label>
//                         <textarea
//                             {...register("description", { required: true })}
//                             className="w-full border p-2 rounded"
//                             placeholder="Enter product description"
//                         />
//                         {errors.description && <span className="text-red-500">Description is required</span>}
//                     </div>

//                     {/* Price */}
//                     <div>
//                         <label className="block text-gray-700">Price *</label>
//                         <input
//                             type="number"
//                             {...register("price", { required: true })}
//                             className="w-full border p-2 rounded"
//                             placeholder="Enter price"
//                         />
//                         {errors.price && <span className="text-red-500">Price is required</span>}
//                     </div>

//                     {/* Available Stock */}
//                     <div>
//                         <label className="block text-gray-700">Available Stock *</label>
//                         <input
//                             type="number"
//                             {...register("availableStock", { required: true })}
//                             className="w-full border p-2 rounded"
//                             placeholder="Enter available stock"
//                         />
//                         {errors.availableStock && <span className="text-red-500">Stock quantity is required</span>}
//                     </div>

//                     {/* Quantity */}
//                     <div>
//                         <label className="block text-gray-700">Quantity *</label>
//                         <div className="flex">
//                             <input
//                                 type="number"
//                                 {...register("quantity", { required: true, min: 1 })}
//                                 className="w-full border p-2 rounded"
//                                 placeholder="Enter quantity"
//                             />
//                             <span className="ml-2 p-2 bg-gray-200 rounded">{displayUnit}</span>
//                         </div>
//                         {errors.quantity && <span className="text-red-500">Quantity is required</span>}
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-between">
//                         <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
//                             Add Product
//                         </button>
//                         <button 
//                             type="button"
//                             onClick={() => setShowForm(false)} 
//                             className="bg-gray-500 text-white py-2 px-4 rounded"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             )}

//             {/* Display Added Products */}
//             {products.length > 0 && (
//                 <div className="mt-6">
//                     <h3 className="text-xl font-bold mb-2">Product List</h3>
//                     <table className="w-full border">
//                         <thead>
//                             <tr className="bg-gray-200">
//                                 <th className="border p-2">Name</th>
//                                 <th className="border p-2">Category</th>
//                                 <th className="border p-2">Subcategory</th>
//                                 <th className="border p-2">Price</th>
//                                 <th className="border p-2">Stock</th>
//                                 <th className="border p-2">Quantity</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {products.map((product, index) => (
//                                 <tr key={index} className="border">
//                                     <td className="border p-2">{product.productName}</td>
//                                     <td className="border p-2">{product.category}</td>
//                                     <td className="border p-2">{product.subcategory}</td>
//                                     <td className="border p-2">${product.price}</td>
//                                     <td className="border p-2">{product.availableStock}</td>
//                                     <td className="border p-2">{product.quantity}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// }
"use client";
import React, { useState } from "react";

const categoryOptions = {
  "Dairy Products": ["Milk", "Cheese", "Butter", "Yogurt"],
  "Bakery": ["Bread", "Cake", "Cookies", "Pastries"],
  "Food": ["Rice", "Pasta", "Noodles", "Cereal"],
  "Vegetables": ["Carrots", "Potatoes", "Tomatoes", "Spinach"],
  "Beverages": ["Juice", "Soda", "Coffee", "Tea"],
};

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    
    product: "",
    category: "",
    subCategory: "",
    description: "",
    price: "",
  
    stock: "",
    quantity: "",
    
  });
  const [showForm, setShowForm] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData({ ...formData, category, subCategory: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProductId !== null) {
      setProducts(products.map(product => product.id === editingProductId ? { ...formData, id: editingProductId, total: formData.price * formData.quantity } : product));
      setEditingProductId(null);
    } else {
      const newProduct = {
        ...formData,
        id: products.length + 1,
        total: formData.price * formData.quantity,
      };
      setProducts([...products, newProduct]);
    }

    setFormData({
      
      product: "",
      category: "",
      subCategory: "",
      description: "",
      price: "",
      
      stock: "",
      quantity: "",
      
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingProductId(product.id);
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {showForm ? "Hide Form" : "Add Product"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-bold mb-4">{editingProductId ? "Edit Product" : "Add Product"}</h2>
          <div className="grid grid-cols-2 gap-4">
            
            <input type="text" name="product" placeholder="Product" value={formData.product} onChange={handleChange} className="p-2 border rounded" required />
            
            <select name="category" value={formData.category} onChange={handleCategoryChange} className="p-2 border rounded" required>
              <option value="">Select Category</option>
              {Object.keys(categoryOptions).map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>

            <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="p-2 border rounded" required>
              <option value="">Select Subcategory</option>
              {formData.category && categoryOptions[formData.category].map((subCat, index) => (
                <option key={index} value={subCat}>{subCat}</option>
              ))}
            </select>
            
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border rounded" required />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border rounded" required />
            
            <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="p-2 border rounded" required />
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="p-2 border rounded" required />
            
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
            {editingProductId ? "Update Product" : "Save Product"}
          </button>
        </form>
      )}

      {products.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Added Products</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Product</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Subcategory</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Stock</th>
                <th className="border p-2">Quatity</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border">
                  <td className="border p-2 text-center">{product.id}</td>
                  <td className="border p-2">{product.product}</td>
                  <td className="border p-2">{product.category}</td>
                  <td className="border p-2">{product.subCategory}</td>
                  <td className="border p-2">{product.description}</td>
                  <td className="border p-2">{product.price}</td>
                  <td className="border p-2">{product.stock}</td>
                  <td className="border p-2">{product.quantity}</td>
                  

                  <td className="border p-2">
                    <button onClick={() => handleEdit(product)} className="bg-yellow-600 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddProduct;



