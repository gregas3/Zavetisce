
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { sl } from "date-fns/locale";
import { CalendarIcon, User, Phone, Mail } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./dogWalkerFormSchema";

interface FormPersonalInfoProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  disabledDays: (date: Date) => boolean;
}

const FormPersonalInfo = ({ form, disabledDays }: FormPersonalInfoProps) => {
  return (
    <>
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
          <FormItem className="flex flex-col">
            <FormLabel>Datum rojstva</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    className={`w-full pl-10 text-left font-normal flex justify-between items-center ${!field.value && "text-muted-foreground"}`}
                  >
                    {field.value ? (
                      format(field.value, "d. MMMM yyyy", { locale: sl })
                    ) : (
                      <span>Izberite datum rojstva</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={disabledDays}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
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
    </>
  );
};

export default FormPersonalInfo;
