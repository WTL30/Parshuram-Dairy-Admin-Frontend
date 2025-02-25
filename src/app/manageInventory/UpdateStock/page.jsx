"use client";
import { useEffect, useState } from "react";

export default function UpdateStock() {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState("");
    const [quantity, setQuantity] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/stocks") // Replace with your backend API
            .then((response) => response.json())
            .then((data) => setStocks(data))
            .catch((err) => console.error("Error fetching stock data:", err));
    }, []);

    const handleUpdateStock = (e) => {
        e.preventDefault();
        if (!selectedStock || !quantity) {
            setMessage("Please select a stock and enter a valid quantity.");
            return;
        }

        const updatedStock = { id: selectedStock, quantity: parseInt(quantity) };

        fetch(`http://localhost:8080/api/stocks/update/${selectedStock}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedStock),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to update stock.");
                return response.json();
            })
            .then(() => {
                setMessage("Stock updated successfully!");
                setQuantity("");
            })
            .catch(() => setMessage("Error updating stock. Please try again."));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Update Stock Levels</h2>

            {message && <p className="mb-2 text-center text-blue-600">{message}</p>}

            <form onSubmit={handleUpdateStock}>
                <label className="block mb-2 font-semibold">Select Product:</label>
                <select
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value)}
                    className="w-full p-2 border rounded-md mb-4"
                >
                    <option value="">-- Select Product --</option>
                    {stocks.map((stock) => (
                        <option key={stock.id} value={stock.id}>
                            {stock.name} ({stock.quantity} {stock.unit})
                        </option>
                    ))}
                </select>

                <label className="block mb-2 font-semibold">New Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Enter new quantity"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Update Stock
                </button>
            </form>
        </div>
    );
}
