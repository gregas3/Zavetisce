
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";

// Import form components
import FormHeader from "./forms/FormHeader";
import FormPersonalInfo from "./forms/FormPersonalInfo";
import FormExperience from "./forms/FormExperience";
import FormPreferredTimes from "./forms/FormPreferredTimes";
import FormAgreement from "./forms/FormAgreement";
import FormActions from "./forms/FormActions";
import { formSchema } from "./forms/dogWalkerFormSchema";

// Define the props for the DogWalkerForm component
interface DogWalkerFormProps {
  open: boolean;
  onClose: () => void;
}

const DogWalkerForm = ({ open, onClose }: DogWalkerFormProps) => {
  // Initialize the form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: undefined,
      phone: "",
      email: "",
      experience: "",
      preferredTimes: {
        weekdayMornings: false,
        weekendMornings: false,
      },
      agreement: false,
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real application, you would send the form data to a server here
      console.log("Form values:", values);
      
      // Simulate sending email (in a real app, this would be handled by a server)
      // Here we're just showing a success message
      toast({
        title: "Prijava poslana!",
        description: "Vaša prijava za prostovoljca sprehajalca je bila uspešno poslana.",
      });
      
      // Reset the form and close the sheet
      form.reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Napaka pri pošiljanju",
        description: "Prišlo je do napake pri pošiljanju obrazca. Poskusite ponovno.",
        variant: "destructive",
      });
    }
  };

  // Function to disable future dates and dates under 18 years ago
  const disabledDays = (date: Date) => {
    const today = new Date();
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
    
    return date > eighteenYearsAgo;
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
        <FormHeader 
          title="Postani prostovoljec sprehajalec"
          description="Izpolnite obrazec za prijavo kot prostovoljec za sprehajanje psov v zavetišču."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormPersonalInfo form={form} disabledDays={disabledDays} />
            <FormExperience form={form} />
            <FormPreferredTimes form={form} />
            <FormAgreement form={form} />
            <FormActions onClose={onClose} />
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default DogWalkerForm;
