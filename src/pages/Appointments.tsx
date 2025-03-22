import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CalendarIcon, Clock, Phone, Mail, Calendar, Info, PawPrint } from "lucide-react";
import { format, addDays, startOfWeek, isBefore, isSameDay } from "date-fns";
import { sl } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const workingHours = {
  monday: { open: "8:00", close: "16:00" },
  tuesday: { open: "8:00", close: "16:00" },
  wednesday: { open: "8:00", close: "16:00" },
  thursday: { open: "8:00", close: "16:00" },
  friday: { open: "8:00", close: "16:00" },
  saturday: { open: "9:00", close: "13:00" },
  sunday: { open: "9:00", close: "13:00" }
};

const timeSlots = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", 
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"
];

const bookedAppointments = [
  { date: new Date(2023, 10, 15), time: "10:00", type: "Posvojitev" },
  { date: new Date(2023, 10, 15), time: "11:30", type: "Posvojitev" },
  { date: new Date(2023, 10, 16), time: "9:30", type: "Ogled živali" },
  { date: new Date(2023, 10, 18), time: "14:00", type: "Posvojitev" },
];

const fetchAvailableAnimals = async () => {
  return [
    { id: "1", name: "Rex", type: "Pes", breed: "Mešanec" },
    { id: "2", name: "Luna", type: "Pes", breed: "Nemški ovčar" },
    { id: "3", name: "Miki", type: "Pes", breed: "Labradorec" },
    { id: "4", name: "Piki", type: "Mačka", breed: "Evropska kratkodlaka" },
    { id: "5", name: "Črt", type: "Mačka", breed: "Perzijska" },
  ];
};

const isSlotBooked = (date: Date, time: string) => {
  return bookedAppointments.some(
    appointment => 
      isSameDay(appointment.date, date) && 
      appointment.time === time
  );
};

const formSchema = z.object({
  appointmentType: z.string({
    required_error: "Izberite vrsto termina",
  }),
  animalId: z.string().optional(),
  name: z.string().min(2, {
    message: "Ime mora vsebovati vsaj 2 znaka",
  }),
  email: z.string().email({
    message: "Vnesite veljaven e-poštni naslov",
  }),
  phone: z.string().min(8, {
    message: "Vnesite veljaven telefonski številko",
  }),
  notes: z.string().optional(),
  date: z.date({
    required_error: "Izbira datuma je obvezna",
  }),
});

const Appointments = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAnimalName, setSelectedAnimalName] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appointmentType: "ogled",
      name: "",
      email: "",
      phone: "",
      notes: "",
      date: new Date(),
    },
  });

  useEffect(() => {
    if (date) {
      form.setValue("date", date);
    }
  }, [date, form]);

  const { data: animals = [] } = useQuery({
    queryKey: ["animals"],
    queryFn: fetchAvailableAnimals,
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const animalId = params.get("animalId");
    const animalName = params.get("animalName");
    const animalType = params.get("animalType");
    
    if (animalId && animalName) {
      form.setValue("animalId", animalId);
      form.setValue("appointmentType", "specific");
      setSelectedAnimalName(animalName);
    }
  }, [location.search, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!selectedTime) {
      toast({
        title: "Napaka",
        description: "Izberite čas termina.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Termin uspešno rezerviran!",
        description: `Vaš termin za ${format(values.date, "d. MMMM yyyy", { locale: sl })} ob ${selectedTime} je bil uspešno rezerviran. Na vaš e-naslov smo poslali potrditev.`,
      });

      form.reset();
      setSelectedTime(null);
      setSelectedAnimalName("");
    }, 1500);
  };

  const disabledDays = (date: Date) => {
    return isBefore(date, new Date()) && !isSameDay(date, new Date());
  };

  return (
    <>
      <Helmet>
        <title>Termini | Zavetišče za živali Maribor</title>
        <meta name="description" content="Rezervirajte termin za obisk ali posvojitev živali v Zavetišču za živali Maribor." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16">
        <Section
          title="Termini za obisk"
          description="Rezervirajte termin za obisk zavetišča, ogled ali posvojitev živali. Za zagotovitev kakovostne obravnave vsakega obiskovalca in živali vam priporočamo, da si pred obiskom rezervirate termin."
          className="bg-[url('/dog-pattern-light.svg')] bg-fixed bg-opacity-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calendar">Rezerviraj termin</TabsTrigger>
                  <TabsTrigger value="info">Informacije</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calendar" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rezervacija termina</CardTitle>
                      <CardDescription>
                        Izberite datum, čas in namen vašega obiska zavetišča.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-1 space-y-4">
                              <FormField
                                control={form.control}
                                name="appointmentType"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Vrsta termina*</FormLabel>
                                    <Select 
                                      onValueChange={(value) => {
                                        field.onChange(value);
                                        if (value !== "specific") {
                                          form.setValue("animalId", undefined);
                                          setSelectedAnimalName("");
                                        }
                                      }}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Izberite vrsto termina" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="dog-viewing">Splošni ogled psov</SelectItem>
                                        <SelectItem value="cat-viewing">Splošni ogled mačk</SelectItem>
                                        <SelectItem value="specific">Ogled specifične živali</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              {form.watch("appointmentType") === "specific" && (
                                <FormField
                                  control={form.control}
                                  name="animalId"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Izbrana žival*</FormLabel>
                                      <Select 
                                        onValueChange={(value) => {
                                          field.onChange(value);
                                          const animal = animals.find(a => a.id === value);
                                          if (animal) {
                                            setSelectedAnimalName(animal.name);
                                          }
                                        }}
                                        value={field.value || ""}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Izberite žival za ogled" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {animals.map((animal) => (
                                            <SelectItem key={animal.id} value={animal.id}>
                                              {animal.name} ({animal.type} - {animal.breed})
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormDescription>
                                        {selectedAnimalName && (
                                          <span className="text-primary font-medium">
                                            Ogled živali: {selectedAnimalName}
                                          </span>
                                        )}
                                      </FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}
                              
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Ime in priimek*</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
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
                                    <FormLabel>E-pošta*</FormLabel>
                                    <FormControl>
                                      <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Telefon*</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Opombe</FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        {...field} 
                                        placeholder="Dodatne informacije o vašem obisku..." 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="md:col-span-1 space-y-6">
                              <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col">
                                    <FormLabel>Izberite datum*</FormLabel>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <FormControl>
                                          <Button
                                            variant="outline"
                                            className={`w-full pl-3 text-left font-normal flex justify-between items-center ${!field.value && "text-muted-foreground"}`}
                                          >
                                            {field.value ? (
                                              format(field.value, "d. MMMM yyyy", { locale: sl })
                                            ) : (
                                              <span>Izberite datum</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                          </Button>
                                        </FormControl>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0" align="start">
                                        <CalendarComponent
                                          mode="single"
                                          selected={field.value}
                                          onSelect={(date) => {
                                            if (date) {
                                              field.onChange(date);
                                              setDate(date);
                                            }
                                          }}
                                          disabled={disabledDays}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              {date && (
                                <div className="space-y-3">
                                  <Label className="block">Izberite čas*</Label>
                                  <div className="grid grid-cols-3 gap-2">
                                    {timeSlots.map((time) => {
                                      const isBooked = isSlotBooked(date, time);
                                      return (
                                        <Button
                                          key={time}
                                          type="button"
                                          variant={selectedTime === time ? "default" : "outline"}
                                          className={`
                                            ${selectedTime === time 
                                              ? "bg-green-500 hover:bg-green-600 text-white border-green-600" 
                                              : isBooked 
                                                ? "bg-red-50 text-red-500 border-red-200 hover:bg-red-50 opacity-60 cursor-not-allowed" 
                                                : "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                                            }
                                          `}
                                          onClick={() => !isBooked && setSelectedTime(time)}
                                          disabled={isBooked}
                                        >
                                          {time}
                                        </Button>
                                      );
                                    })}
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-sm mt-3 border rounded-md p-3 bg-gray-50">
                                    <div className="flex items-center gap-2">
                                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                      <span>Izbrano</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="w-4 h-4 bg-red-50 border border-red-200 rounded-full"></div>
                                      <span>Zasedeno</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded-full"></div>
                                      <span>Prosto</span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Shranjujem..." : "Potrdi rezervacijo"}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="info" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info size={20} />
                        Informacije o terminih
                      </CardTitle>
                      <CardDescription>
                        Pomembne informacije glede obiska zavetišča in rezervacije termina.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Clock size={18} className="text-primary" /> 
                          Delovni čas zavetišča
                        </h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Dan</TableHead>
                              <TableHead>Čas</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Ponedeljek - Petek</TableCell>
                              <TableCell>8:00 - 16:00</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Sobota, Nedelja in prazniki</TableCell>
                              <TableCell>9:00 - 13:00</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <PawPrint size={18} className="text-primary" /> 
                          Pravila obiska
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Obiski so možni le z rezervacijo termina.</li>
                          <li>Prihod na termin naj bo točen, zamuda več kot 15 minut pomeni odpoved termina.</li>
                          <li>Otroci morajo biti v spremstvu odrasle osebe.</li>
                          <li>Živali v zavetišču ne hranite brez dovoljenja osebja.</li>
                          <li>Ne vznemirjajte živali in upoštevajte navodila osebja.</li>
                          <li>Za posvojitev živali potrebujete veljavno osebno izkaznico ali potni list.</li>
                          <li>Varnostna razdalja med obiskovalci in živalmi je obvezna, razen če vas spremlja osebje.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Phone size={18} className="text-primary" /> 
                          Kontaktni podatki
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone size={16} className="text-muted-foreground" />
                            <span>+386 (0)2 480 16 60</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-muted-foreground" />
                            <span>info@zavetisce-mb.si</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={18} />
                    Pogosta vprašanja
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Ali moram rezervirati termin?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Da, za kakovostno obravnave obiskovalcev in dobrobit živali je potrebna rezervacija termina.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Koliko časa traja obisk?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Obisk običajno traja 30-45 minut, odvisno od namena obiska.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Kaj naj prinesem s seboj?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Za posvojitev potrebujete osebni dokument. Če želite prinesti donacije, preverite našo stran za trenutne potrebe.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Ali lahko takoj odpeljem žival?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ne, posvojitev poteka v več korakih. Po prvem obisku in izbiri živali sledi izpolnjevanje dokumentacije in priprava na posvojitev.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Kako se lahko pripravim na posvojitev?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Priporočamo, da si preberete naš vodič za nove posvojitelje in pripravite osnovne potrebščine za žival (ležišče, posode, hrano).
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:info@zavetisce-mb.si">
                      Pošljite nam vprašanje
                    </a>
                  </Button>
                  
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="secondary" className="w-full">Pomoč pri rezervaciji</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Pomoč pri rezervaciji termina</DrawerTitle>
                        <DrawerDescription>
                          Kako enostavno rezervirati termin v zavetišču?
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Izberite vrsto termina (splošni ogled, ogled specifične živali, posvojitev...)</li>
                          <li>Če želite ogledati specifično žival, jo izberite s seznama</li>
                          <li>Vnesite svoje kontaktne podatke</li>
                          <li>Izberite datum in uro obiska</li>
                          <li>Preverite vnesene podatke in potrdite rezervacijo</li>
                          <li>Na vaš e-naslov bo poslana potrditev rezervacije</li>
                        </ol>
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                          <p className="text-sm text-amber-800">
                            <strong>Pomembno:</strong> Pridite točno ob dogovorjenem času. V primeru zamude več kot 15 minut se termin lahko prekliče.
                          </p>
                        </div>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Zapri</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Appointments;
