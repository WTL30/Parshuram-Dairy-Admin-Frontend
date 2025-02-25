"use client"; // Required for state management

import { useState } from "react";

export default function ManagePayments() {
  const [transactions, setTransactions] = useState([
    { id: 1, user: "John Doe", amount: 1000, status: "Pending" },
    { id: 2, user: "Jane Smith", amount: 500, status: "Verified" },
  ]);

  const [cashOnDelivery, setCashOnDelivery] = useState([
    { id: 1, user: "Alice Brown", amount: 1200, status: "Pending" },
    { id: 2, user: "Bob Johnson", amount: 800, status: "Delivered" },
  ]);

  const [confirmedUsers, setConfirmedUsers] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  // Function to update transaction status
  const handleTransactionStatusChange = (id, newStatus, user, amount) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((tx) =>
        tx.id === id ? { ...tx, status: newStatus } : tx
      )
    );
    setConfirmedUsers((prevUsers) => [...prevUsers, user]);
    setTotalProfit((prevProfit) => prevProfit + amount);
  };

  // Function to update cash on delivery status
  const handleCashOnDeliveryStatusChange = (id, newStatus, user, amount) => {
    setCashOnDelivery((prevCOD) =>
      prevCOD.map((cod) =>
        cod.id === id ? { ...cod, status: newStatus } : cod
      )
    );
    setConfirmedUsers((prevUsers) => [...prevUsers, user]);
    setTotalProfit((prevProfit) => prevProfit + amount);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center">Manage Payments</h1>

      {/* Display Total Profit */}
      <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold">Total Profit: Rs. {totalProfit}</h2>
      </div>

      {/* Pending Requests to Confirm Payment Section */}
      <section className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Pending Requests to Confirm Payment</h2>
        <ul>
          {[...transactions, ...cashOnDelivery].filter(tx => tx.status === "Pending").map(tx => (
            <li key={`pending_${tx.user}_${tx.id}`} className="p-3 border-b flex flex-col sm:flex-row justify-between items-center">
              <span className="text-center sm:text-left">{tx.user} - Rs. {tx.amount}</span>
              <button 
                onClick={() => handleTransactionStatusChange(tx.id, "Resolved", tx.user, tx.amount)}
                className="mt-2 sm:mt-0 bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Confirm Payment
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Cash on Delivery Payment Confirmation */}
      <section className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Cash on Delivery Payments</h2>
        <ul>
          {cashOnDelivery.filter(cod => cod.status === "Pending").map(cod => (
            <li key={`cod_pending_${cod.user}_${cod.id}`} className="p-3 border-b flex flex-col sm:flex-row justify-between items-center">
              <span className="text-center sm:text-left">{cod.user} - Rs. {cod.amount}</span>
              <button 
                onClick={() => handleCashOnDeliveryStatusChange(cod.id, "Delivered", cod.user, cod.amount)}
                className="mt-2 sm:mt-0 bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Confirm COD Payment
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Show Confirmed Customers */}
      {confirmedUsers.length > 0 && (
        <div className="mt-6 bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold">Payment Confirmed</h2>
          <ul className="text-green-700">
            {confirmedUsers.map((user, index) => (
              <li key={`confirmed_${index}`} className="mt-1">Payment confirmed for {user}.</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}