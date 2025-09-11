// src/app/registration/[role]/page.tsx
import RegistrationForm from "@/app/components/RegistrationForm";
import VendorForm from "@/app/components/VendorForm";
// import other role forms when ready
// import SupplierForm from "@/app/components/SupplierForm";
// import ConsultantForm from "@/app/components/ConsultantForm";
// import EngineerForm from "@/app/components/EngineerForm";
// import DesignerForm from "@/app/components/DesignerForm";
// import TransporterForm from "@/app/components/TransporterForm";

type Role =
  | "client"
  | "vendor"
  | "supplier"
  | "consultant"
  | "engineer"
  | "designer"
  | "transporter";

interface PageProps {
  params: { role: Role };
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
    // uncomment when forms are ready
    // case "supplier":
    //   FormComponent = SupplierForm;
    //   break;
    // case "consultant":
    //   FormComponent = ConsultantForm;
    //   break;
    // case "engineer":
    //   FormComponent = EngineerForm;
    //   break;
    // case "designer":
    //   FormComponent = DesignerForm;
    //   break;
    // case "transporter":
    //   FormComponent = TransporterForm;
    //   break;
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
      <FormComponent role={role} />
    </div>
  );
}
