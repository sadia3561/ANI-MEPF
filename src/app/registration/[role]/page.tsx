// src/app/registration/[role]/page.tsx
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
      return (
        <p>
          Registration form for &quot;{role}&quot; is coming soon!
        </p>
      );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Client component receives role prop */}
      <FormComponent role={role} />
    </div>
  );
}
