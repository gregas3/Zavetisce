
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, Dog, Mail, User, Phone, Clock, CheckCircle, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

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
  isOpen: boolean;
  onClose: () => void;
}

const DogWalkerForm = ({ isOpen, onClose }: DogWalkerFormProps) => {
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

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto p-0">
        <div className="p-6 space-y-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" 
            onClick={onClose}
          >
            <X size={24} />
          </Button>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
              <Dog className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Postani prostovoljec sprehajalec</h3>
              <p className="text-sm text-gray-500">Izpolnite obrazec za prijavo kot prostovoljec za sprehajanje psov v zavetišču.</p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ime in priimek</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Vnesite ime in priimek" {...field} className="pl-10" />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-teal-500" />
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
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-12 bg-[#f1faf8] border-input justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-teal-500" />
                            {field.value ? (
                              format(new Date(field.value), "dd. MM. yyyy")
                            ) : (
                              <span>Izberite datum</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormDescription>
                      Potrditev polnoletnosti (starost vsaj 18 let).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefonska številka</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Vnesite telefonsko številko" {...field} className="pl-10" />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-teal-500" />
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
                        <Input placeholder="Vnesite e-poštni naslov" {...field} className="pl-10" />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-teal-500" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        className="min-h-[120px] bg-[#f1faf8] border-input"
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
                <div className="text-sm font-medium text-gray-700">Želeni termini za sprehajanje</div>
                
                <FormField
                  control={form.control}
                  name="preferredTimes.weekdayMornings"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0 rounded-md p-3 bg-[#f1faf8] border border-input">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
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
                    <FormItem className="flex items-start space-x-3 space-y-0 rounded-md p-3 bg-[#f1faf8] border border-input">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
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
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-teal-100 bg-teal-50/50">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
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

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1 border-gray-300">
                  Prekliči
                </Button>
                <Button type="submit" className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
                  Pošlji prijavo
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DogWalkerForm;
