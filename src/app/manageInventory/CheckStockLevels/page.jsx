"use client";
import { useState } from "react";

export default function CheckStockLevels() {
    const [stocks] = useState([
        { id: 1, name: "Milk", category: "Dairy", quantity: 20, unit: "Liters" },
        { id: 2, name: "Cheese", category: "Dairy", quantity: 8, unit: "Kg" },
        { id: 3, name: "Butter", category: "Dairy", quantity: 5, unit: "Kg" },
        { id: 4, name: "Yogurt", category: "Dairy", quantity: 15, unit: "Liters" },
    ]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Check Stock Levels</h2>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Product</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.id} className="border">
                            <td className="border p-2">{stock.name}</td>
                            <td className="border p-2">{stock.category}</td>
                            <td className={`border p-2 ${stock.quantity < 10 ? "text-red-500 font-bold" : ""}`}>
                                {stock.quantity}
                            </td>
                            <td className="border p-2">{stock.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
