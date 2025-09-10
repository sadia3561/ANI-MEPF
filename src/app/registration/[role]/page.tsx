"use client";

import { useParams } from "next/navigation";
import RegistrationForm from "../../components/RegistrationForm";


export default function RoleRegistrationPage() {
  const { role } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        {role?.toString().toUpperCase()} Registration
      </h1>
      <RegistrationForm role={role as string} />
    </div>
  );
}
