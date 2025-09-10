"use client";

import { useState } from "react";

export default function RegistrationForm({ role }: { role: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gstin: "",
    experience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { role, ...formData });
    alert(`${role} registration submitted! (Check console for payload)`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 border rounded-lg shadow"
    >
      <div>
        <label className="block mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
      </div>

      {role !== "client" && (
        <div>
          <label className="block mb-1">GSTIN</label>
          <input
            type="text"
            name="gstin"
            className="w-full border rounded p-2"
            onChange={handleChange}
          />
        </div>
      )}

      <div>
        <label className="block mb-1">Experience (Years)</label>
        <input
          type="number"
          name="experience"
          className="w-full border rounded p-2"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Registration
      </button>
    </form>
  );
}
