"use client";


import { useRouter } from "next/navigation";

export default function ManageUsers() {
  const router = useRouter();

  const users = [
    { id: "1", name: "John Doe", status: "Active", email: "john@example.com" },
    { id: "2", name: "Jane Smith", status: "Blocked", email: "jane@example.com" },
    { id: "3", name: "Michael Brown", status: "Active", email: "michael@example.com" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className={`border px-4 py-2 ${user.status === "Blocked" ? "text-red-500" : "text-green-500"}`}>
                {user.status}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => router.push(`/app/manageUsers/viewCustomer?id=${user.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
