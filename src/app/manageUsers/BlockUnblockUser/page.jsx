"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

export default function Page() {
  const [customers, setCustomers] = useState([]);
  // State for the Add User modal
  const [addUserModal, setAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserGmail, setNewUserGmail] = useState("");

  useEffect(() => {
    // On mount, read from localStorage or set default data if none found
    const stored = localStorage.getItem("myCustomers");
    if (stored) {
      let data = JSON.parse(stored);
      // Ensure each user has a 'gmail' property
      data = data.map((c) => ({
        ...c,
        gmail: c.gmail || c.email || "unknown@gmail.com",
      }));
      setCustomers(data);
      localStorage.setItem("myCustomers", JSON.stringify(data));
    } else {
      const defaults = [
        { id: 1, name: "John Doe", gmail: "john@gmail.com", status: "Active" },
        { id: 2, name: "Jane Smith", gmail: "jane@gmail.com", status: "Blocked" },
        { id: 3, name: "Michael Brown", gmail: "michael@gmail.com", status: "Active" },
      ];
      setCustomers(defaults);
      localStorage.setItem("myCustomers", JSON.stringify(defaults));
    }
  }, []);

  // Toggle user status and update localStorage
  const toggleStatus = (id) => {
    setCustomers((prev) => {
      const updated = prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "Blocked" : "Active" }
          : c
      );
      localStorage.setItem("myCustomers", JSON.stringify(updated));
      return updated;
    });
  };

  // Handle form submission for adding a new user
  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = customers.length ? Math.max(...customers.map((u) => u.id)) + 1 : 1;
    const newUser = { id: newId, name: newUserName, gmail: newUserGmail, status: "Active" };
    const updated = [...customers, newUser];
    setCustomers(updated);
    localStorage.setItem("myCustomers", JSON.stringify(updated));
    setNewUserName("");
    setNewUserGmail("");
    setAddUserModal(false);
  };

  if (!customers.length) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Block/Unblock Users</h2>
        {/* Plus Icon Button to open Add User modal */}
        <button
          onClick={() => setAddUserModal(true)}
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
        >
          <FaPlus size={16} />
          <span>Add User</span>
        </button>
      </div>

      <table className="border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Gmail</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user) => (
            <tr key={user.id} className="text-center hover:bg-gray-50 transition-colors">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.gmail}</td>
              <td
                className={`border p-2 font-bold ${
                  user.status === "Blocked" ? "text-red-500" : "text-green-500"
                }`}
              >
                {user.status}
              </td>
              <td className="border p-2">
                <button
                  className={`px-4 py-2 rounded text-white ${
                    user.status === "Blocked" ? "bg-green-500" : "bg-red-500"
                  }`}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status === "Blocked" ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Modal */}
      {addUserModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New User</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Gmail</label>
                <input
                  type="email"
                  value={newUserGmail}
                  onChange={(e) => setNewUserGmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setAddUserModal(false)}
                  className="px-4 py-2 rounded bg-gray-300"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}