
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./dogWalkerFormSchema";

interface FormPreferredTimesProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

const FormPreferredTimes = ({ form }: FormPreferredTimesProps) => {
  return (
    <div className="space-y-3">
      <div className="text-sm font-medium">Želeni termini za sprehajanje</div>
      
      <FormField
        control={form.control}
        name="preferredTimes.weekdayMornings"
        render={({ field }) => (
          <FormItem className="flex items-start space-x-3 space-y-0 rounded-md p-2 border border-muted">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-teal-500" />
                Med tednom dopoldne (7.00 - 13.00)
              </FormLabel>
              <FormDescription>
                Ponedeljek - petek
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="preferredTimes.weekendMornings"
        render={({ field }) => (
          <FormItem className="flex items-start space-x-3 space-y-0 rounded-md p-2 border border-muted">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-teal-500" />
                Vikendi in prazniki dopoldne (8.00 - 12.00)
              </FormLabel>
              <FormDescription>
                Sobote, nedelje in prazniki
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      <FormMessage>{form.formState.errors.preferredTimes?.message}</FormMessage>
    </div>
  );
};

export default FormPreferredTimes;
