
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { CalendarIcon, Dog, Mail, User, Phone, Clock, SendHorizontal } from "lucide-react";

// Define the form validation schema using Zod
const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Ime in priimek mora vsebovati vsaj 3 znake.",
  }),
  dateOfBirth: z.string().refine((value) => {
    const date = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    return age >= 18;
  }, {
    message: "Prostovoljec mora biti polnoleten (18+).",
  }),
  phone: z.string().min(8, {
    message: "Prosimo vnesite veljavno telefonsko številko.",
  }),
  email: z.string().email({
    message: "Prosimo vnesite veljaven e-poštni naslov.",
  }),
  experience: z.string().min(10, {
    message: "Prosimo opišite vaše izkušnje (vsaj 10 znakov).",
  }),
  preferredTimes: z.object({
    weekdayMornings: z.boolean().optional(),
    weekendMornings: z.boolean().optional(),
  }).refine((data) => data.weekdayMornings || data.weekendMornings, {
    message: "Izberite vsaj en termin za sprehajanje.",
  }),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Morate se strinjati s pogoji za oddajo prijave.",
  }),
});

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
      dateOfBirth: "",
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

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the form data to a server here
      console.log("Form values:", values);
      
      const formData = new FormData();
      
      // Convert nested object to flat key-value pairs
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'preferredTimes') {
          Object.entries(value).forEach(([timeKey, timeValue]) => {
            formData.append(`preferredTimes.${timeKey}`, timeValue ? 'true' : 'false');
          });
        } else if (typeof value === 'boolean') {
          formData.append(key, value ? 'true' : 'false');
        } else {
          formData.append(key, value as string);
        }
      });
      
      // Add email recipient
      formData.append('emailTo', 'zavetisce.mb@snaga-mb.si');
      formData.append('formType', 'dog-walker-volunteer');
      
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Napaka pri pošiljanju",
        description: "Prišlo je do napake pri pošiljanju obrazca. Poskusite ponovno.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Dialog open={open} onOpenChange={() => {
        setSubmitSuccess(false);
        onClose();
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-teal-800">Prijava poslana!</DialogTitle>
            <DialogDescription className="text-center">
              Vaša prijava za prostovoljca sprehajalca je bila uspešno poslana.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => {
              setSubmitSuccess(false);
              onClose();
            }}>
              Zapri
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-8 w-8 rounded-full bg-teal-50 flex items-center justify-center">
              <Dog className="h-5 w-5 text-teal-600" />
            </div>
            <DialogTitle>Postani prostovoljec sprehajalec</DialogTitle>
          </div>
          <DialogDescription>
            Izpolnite obrazec za prijavo kot prostovoljec za sprehajanje psov v zavetišču.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ime in priimek</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Vnesite ime in priimek" {...field} className="pl-8" />
                      <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Datum rojstva</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="date" {...field} className="pl-8" />
                      <CalendarIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Potrditev polnoletnosti (starost vsaj 18 let).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefonska številka</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Vnesite telefonsko številko" {...field} className="pl-8" />
                        <Phone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-poštni naslov</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Vnesite e-poštni naslov" {...field} className="pl-8" />
                        <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                      className="min-h-[100px] resize-none"
                    />
                  </FormControl>
                  <FormDescription>
                    Opišite vaše izkušnje s psi, posebne veščine ali znanja, ki bi lahko bile koristne.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormLabel>Želeni termini za sprehajanje</FormLabel>
              
              <FormField
                control={form.control}
                name="preferredTimes.weekdayMornings"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0 p-2 border border-input rounded-md">
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
                  <FormItem className="flex items-start space-x-3 space-y-0 p-2 border border-input rounded-md">
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

            <FormField
              control={form.control}
              name="agreement"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0 p-2 border border-teal-100 bg-teal-50/50 rounded-md">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Potrjujem, da sem polnoleten/polnoletna in sprehajam pse na lastno odgovornost
                    </FormLabel>
                    <FormDescription>
                      S potrditvijo te izjave se strinjate, da v zavetišču podpišete pristopno izjavo, da sprehajate pse na lastno odgovornost.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={isSubmitting}
              >
                <SendHorizontal className="mr-2 h-4 w-4" />
                {isSubmitting ? "Pošiljam..." : "Oddaj prijavo"}
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Prijava bo poslana na uradni email zavetišča: zavetisce.mb@snaga-mb.si
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DogWalkerForm;
