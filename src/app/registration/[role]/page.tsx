"use client";

import RegistrationForm from "@/app/components/RegistrationForm";
import VendorForm from "@/app/components/VendorForm";
//import SupplierForm from "@/app/components/SupplierForm";
//import ConsultantForm from "@/app/components/ConsultantForm";
//import EngineerForm from "@/app/components/EngineerForm";
//import DesignerForm from "@/app/components/DesignerForm";
//import TransporterForm from "@/app/components/TransporterForm";

interface PageProps {
  params: { role: string };
}

export default function RegistrationPage({ params }: PageProps) {
  const { role } = params;

  // Role ke hisaab se form select karo
  let FormComponent = RegistrationForm; // default form

  switch (role.toLowerCase()) {
    case "vendor":
      FormComponent = VendorForm;
      break;
  //  case "supplier":
     // FormComponent = SupplierForm;
      break;
    //case "consultant":
      //FormComponent = ConsultantForm;
      break;
    //case "engineer":
      //FormComponent = EngineerForm;
      break;
    //case "designer":
      //FormComponent = DesignerForm;
      break;
    //case "transporter":
      //FormComponent = TransporterForm;
      break;
    //case "client":
      FormComponent = RegistrationForm; // ya koi ClientRegistrationForm agar bana ho
      break;
    default:
    return <p>Registration form for "{role}" is coming soon!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl font-bold mb-6 capitalize">{role} Registration</h1>
      <FormComponent role={role} />
    </div>
  );
}
