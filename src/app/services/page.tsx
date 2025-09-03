"use client"; // because we are using state
import { useState } from "react";

export default function LayoutWithServices() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceDetails = [
    { title: "Bus", description: "City buses, intercity buses, charter services." },
    { title: "Cycle", description: "Bicycle rentals, repair, and maintenance." },
    { title: "Car", description: "Sedans, SUVs, rentals, and taxi services." },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Your Company</div>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-yellow-300"
            >
              Services
            </button>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Accordion: Services */}
      {servicesOpen && (
        <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
