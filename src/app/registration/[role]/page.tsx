"use client";

import RegistrationForm from "@/app/components/RegistrationForm";
import VendorForm from "@/app/components/VendorForm";

interface PageProps {
  params: { role: string };
}

export default function RegistrationPage({ params }: PageProps) {
  const { role } = params;

  let FormComponent;
  switch (role) {
    case "client":
      FormComponent = RegistrationForm;
      break;
    case "vendor":
      FormComponent = VendorForm;
      break;
    default:
      // Fixed JSX quotes issue
      return <p>Registration form for {role} is coming soon!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Pass role explicitly to the form */}
      <FormComponent role={role} />
    </div>
  );
}
