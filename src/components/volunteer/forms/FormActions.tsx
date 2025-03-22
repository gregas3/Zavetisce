
import React from "react";
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onClose: () => void;
}

const FormActions = ({ onClose }: FormActionsProps) => {
  return (
    <div className="flex gap-3 pt-4">
      <Button type="submit" variant="primary" className="flex-1">
        Pošlji prijavo
      </Button>
      <Button type="button" variant="outline" onClick={onClose} className="flex-1">
        Prekliči
      </Button>
    </div>
  );
};

export default FormActions;
