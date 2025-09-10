import RegistrationForm from "@/app/components/RegistrationForm";

interface PageProps {
  params: { role: string };
}

export default function RegistrationPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* pass role explicitly */}
      <RegistrationForm role={params.role} />
    </div>
  );
}
