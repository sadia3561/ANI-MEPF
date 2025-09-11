"use client";

import { useState } from "react";

interface RegistrationFormProps {
  role: string; // Only "client" for now
}

export default function RegistrationForm({ role }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    // Section A: Client Information
    clientName: "",
    registeredAddress: "",
    branchAddress: "",
    contactPerson: "",
    designation: "",
    mobile: "",
    email: "",
    website: "",

    // Section B: Business Details
    industry: "",
    natureOfBusiness: "",
    yearEstablished: "",
    annualTurnover: "",
    preferredCommunication: "",

    // Section C: Project Requirements with ANI
    scopeOfWork: "",
    estimatedProjectSize: "",
    projectTimeline: "",
    previousBusiness: "",

    // Section D: Statutory Information
    gstin: "",
    pan: "",
    cin: "",
    msmeIso: "",

    // Section E: Banking / Payment Information
    preferredPaymentMethod: "",
    billingContact: "",
    billingAddress: "",

    // Section F: Documents
    gstCertificate: null as File | null,
    panCard: null as File | null,
    incorporationProof: null as File | null,
    msmeIsoCertificates: null as File | null,
    previousWorkOrders: null as File | null,

    // Section G: Declaration
    declaration: false,
    authorizedSignatory: "",
    signatoryNameDesignation: "",
    companySeal: "",
    declarationDate: "",
    declarationPlace: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).files?.[0] || null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client Form Submitted:", formData);
    alert("Client form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto bg-white rounded-lg shadow"
    >
      {/* Section A */}
      <h2 className="text-xl font-semibold">Section A: Client Information</h2>
      {["clientName", "registeredAddress", "branchAddress", "contactPerson", "designation", "mobile", "email", "website"].map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1")}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      {/* Section B */}
      <h2 className="text-xl font-semibold">Section B: Business Details</h2>
      <input
        type="text"
        name="industry"
        placeholder="Industry / Sector"
        value={formData.industry}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="natureOfBusiness"
        placeholder="Nature of Business / Services"
        value={formData.natureOfBusiness}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="yearEstablished"
        placeholder="Year of Establishment"
        value={formData.yearEstablished}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="annualTurnover"
        placeholder="Approximate Annual Turnover"
        value={formData.annualTurnover}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4 mt-2">
        {["Email", "Phone", "Both"].map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="preferredCommunication"
              value={option}
              checked={formData.preferredCommunication === option}
              onChange={handleChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Section C */}
      <h2 className="text-xl font-semibold">Section C: Project Requirements with ANI</h2>
      {["scopeOfWork", "estimatedProjectSize", "projectTimeline", "previousBusiness"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1")}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      {/* Section D */}
      <h2 className="text-xl font-semibold">Section D: Statutory Information</h2>
      {["gstin", "pan", "cin", "msmeIso"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.toUpperCase()}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      {/* Section E */}
      <h2 className="text-xl font-semibold">Section E: Banking / Payment Information</h2>
      {["Bank Transfer", "Cheque", "Other"].map((option) => (
        <label key={option} className="flex items-center mr-4">
          <input
            type="radio"
            name="preferredPaymentMethod"
            value={option}
            checked={formData.preferredPaymentMethod === option}
            onChange={handleChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
      <input
        type="text"
        name="billingContact"
        placeholder="Billing Contact Person"
        value={formData.billingContact}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="billingAddress"
        placeholder="Billing Address"
        value={formData.billingAddress}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Section F: File Uploads */}
      <h2 className="text-xl font-semibold">Section F: Documents to be Attached</h2>
      {["gstCertificate", "panCard", "incorporationProof", "msmeIsoCertificates", "previousWorkOrders"].map((field) => (
        <input
          key={field}
          type="file"
          name={field}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      {/* Section G: Declaration */}
      <h2 className="text-xl font-semibold">Section G: Declaration</h2>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="declaration"
          checked={formData.declaration}
          onChange={handleChange}
          className="mr-2"
        />
        I/We declare that the information provided is true and agree to ANI terms & conditions.
      </label>
      {["authorizedSignatory", "signatoryNameDesignation", "companySeal"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1")}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label>Date</label>
          <input
            type="date"
            name="declarationDate"
            value={formData.declarationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Place</label>
          <input
            type="text"
            name="declarationPlace"
            value={formData.declarationPlace}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
