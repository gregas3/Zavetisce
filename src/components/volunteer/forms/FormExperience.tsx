
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./dogWalkerFormSchema";

interface FormExperienceProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

const FormExperience = ({ form }: FormExperienceProps) => {
  return (
    <FormField
      control={form.control}
      name="experience"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Prejšnje izkušnje s psi</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Opišite vaše izkušnje s psi..." 
              {...field} 
              className="min-h-[120px]"
            />
          </FormControl>
          <FormDescription>
            Opišite vaše izkušnje s psi, posebne veščine ali znanja, ki bi lahko bile koristne.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormExperience;
