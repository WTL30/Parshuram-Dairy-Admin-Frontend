import React from "react";
import CustomerList from "./CustomerList";

export default function ManageUsers() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <CustomerList />
    </div>
  );
}
