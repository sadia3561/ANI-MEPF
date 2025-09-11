
// This is a server component (no "use client" here)
import RegistrationForm from "@/app/components/RegistrationForm";
import VendorForm from "@/app/components/VendorForm";

interface PageProps {
  params: { role: string };
}

export default async function RegistrationPage({ params }: PageProps) {
  const { role } = params;

  // Decide which form to render
  let FormComponent;
  switch (role.toLowerCase()) {
    case "client":
      FormComponent = RegistrationForm; // client form is a client component
      break;
    case "vendor":
      FormComponent = VendorForm; // vendor form is a client component
      break;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl font-semibold">
            Registration form for "{role}" is coming soon!
          </p>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <FormComponent role={role} /> {/* pass role to client component */}
    </div>
  );
}
