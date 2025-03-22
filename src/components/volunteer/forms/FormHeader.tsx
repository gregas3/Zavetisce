
import React from "react";
import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Dog } from "lucide-react";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <SheetHeader className="mb-6">
      <SheetTitle className="text-2xl font-bold text-teal-800 flex items-center gap-2">
        <Dog className="text-teal-600" />
        {title}
      </SheetTitle>
      <SheetDescription>
        {description}
      </SheetDescription>
    </SheetHeader>
  );
};

export default FormHeader;
