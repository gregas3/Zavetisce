
import { z } from "zod";

// Define the form validation schema using Zod
export const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Ime in priimek mora vsebovati vsaj 3 znake.",
  }),
  dateOfBirth: z.date({
    required_error: "Izbira datuma rojstva je obvezna.",
  }).refine((value) => {
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();
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

export type DogWalkerFormData = z.infer<typeof formSchema>;
