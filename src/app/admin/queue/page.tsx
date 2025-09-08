"use client";
import { useEffect, useState } from "react";

interface Registration {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function AdminQueue() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  const fetchRegistrations = async () => {
    const res = await fetch("http://localhost:3000/registration?status=pending");
    const data = await res.json();
    setRegistrations(data);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleAction = async (id: number, action: "approve" | "reject") => {
    await fetch(`http://localhost:3000/registration/${action}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminId: 1 }), // replace with actual admin ID
    });
    fetchRegistrations();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Registration Queue</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.id} className="text-center">
              <td className="p-2 border">{reg.name}</td>
              <td className="p-2 border">{reg.email}</td>
              <td className="p-2 border">{reg.role}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleAction(reg.id, "approve")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(reg.id, "reject")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
