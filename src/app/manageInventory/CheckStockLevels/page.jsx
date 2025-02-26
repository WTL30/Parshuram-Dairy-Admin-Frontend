"use client";
import { useState } from "react";

export default function CheckStockLevels() {
    const [stocks, setStocks] = useState([
        { id: 1, name: "Milk", category: "Dairy Products", quantity: 20, unit: "L" },
        { id: 2, name: "Cheese", category: "Dairy Products", quantity: 8, unit: "kg" },
        { id: 3, name: "Butter", category: "Dairy Products", quantity: 5, unit: "kg" },
        { id: 4, name: "Yogurt", category: "Dairy Products", quantity: 15, unit: "L" },
    ]);

    const categories = ["Dairy Products", "Sauce", "Beverage", "Vegetables", "Bakery"];
    const units = ["L", "ml", "kg", "gm"];
    
    const [newStock, setNewStock] = useState({ name: "", category: "", quantity: "", unit: "" });
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        setNewStock({ ...newStock, [e.target.name]: e.target.value });
    };

    const addStock = () => {
        if (!newStock.name || !newStock.category || !newStock.quantity || !newStock.unit) return;

        const newEntry = { id: stocks.length + 1, ...newStock, quantity: Number(newStock.quantity) };
        setStocks([...stocks, newEntry]);
        setNewStock({ name: "", category: "", quantity: "", unit: "" });
    };

    const deleteStock = (id) => {
        setStocks(stocks.filter(stock => stock.id !== id));
    };

    const startEditing = (stock) => {
        setEditId(stock.id);
        setNewStock({ name: stock.name, category: stock.category, quantity: stock.quantity, unit: stock.unit });
    };

    const updateStock = () => {
        setStocks(stocks.map(stock => stock.id === editId ? { ...stock, ...newStock, quantity: Number(newStock.quantity) } : stock));
        setEditId(null);
        setNewStock({ name: "", category: "", quantity: "", unit: "" });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Check Stock Levels</h2>
            
            <div className="mb-4 flex space-x-2">
                <input type="text" name="name" value={newStock.name} onChange={handleChange} placeholder="Product Name" className="border p-2 w-1/5" />
                
                <select name="category" value={newStock.category} onChange={handleChange} className="border p-2 w-1/5">
                    <option value="">Select Category</option>
                    {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                
                <input type="number" name="quantity" value={newStock.quantity} onChange={handleChange} placeholder="Quantity" className="border p-2 w-1/5" />
                
                <select name="unit" value={newStock.unit} onChange={handleChange} className="border p-2 w-1/5">
                    <option value="">Select Unit</option>
                    {units.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                </select>
                
                {editId ? (
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={updateStock}>Update</button>
                ) : (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={addStock}>Add Stock</button>
                )}
            </div>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Product</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Unit</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.id} className="border">
                            <td className="border p-2">{stock.name}</td>
                            <td className="border p-2">{stock.category}</td>
                            <td className={`border p-2 ${stock.quantity < 10 ? "text-red-500 font-bold" : ""}`}>{stock.quantity}</td>
                            <td className="border p-2">{stock.unit}</td>
                            <td className="border p-2 flex space-x-2">
                                <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600" onClick={() => startEditing(stock)}>Edit</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" onClick={() => deleteStock(stock.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
