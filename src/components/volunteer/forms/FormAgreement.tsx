
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./dogWalkerFormSchema";

interface FormAgreementProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

const FormAgreement = ({ form }: FormAgreementProps) => {
  return (
    <FormField
      control={form.control}
      name="agreement"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-teal-100 bg-teal-50/50">
          <FormControl>
            <Checkbox 
              checked={field.value} 
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-teal-500" />
              Potrjujem, da sem polnoleten/polnoletna in sprehajam pse na lastno odgovornost
            </FormLabel>
            <FormDescription>
              S potrditvijo te izjave se strinjate, da v zavetišču podpišete pristopno izjavo, da sprehajate pse na lastno odgovornost.
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormAgreement;
