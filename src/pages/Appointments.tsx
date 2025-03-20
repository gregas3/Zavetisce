
import { useState } from "react";
import { Helmet } from "react-helmet";
import { CalendarIcon, Clock, Phone, Mail, Calendar } from "lucide-react";
import { format, addDays, startOfWeek, isBefore, isSameDay } from "date-fns";
import { sl } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

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

// Working hours
const workingHours = {
  monday: { open: "8:00", close: "16:00" },
  tuesday: { open: "8:00", close: "16:00" },
  wednesday: { open: "8:00", close: "16:00" },
  thursday: { open: "8:00", close: "16:00" },
  friday: { open: "8:00", close: "16:00" },
  saturday: { open: "9:00", close: "13:00" },
  sunday: { open: "9:00", close: "13:00" }
};

// Available time slots
const timeSlots = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", 
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"
];

// Mock booked appointments - in a real app, this would come from a backend
const bookedAppointments = [
  { date: new Date(2023, 10, 15), time: "10:00", type: "Posvojitev" },
  { date: new Date(2023, 10, 15), time: "11:30", type: "Posvojitev" },
  { date: new Date(2023, 10, 16), time: "9:30", type: "Ogled živali" },
  { date: new Date(2023, 10, 18), time: "14:00", type: "Posvojitev" },
];

const isSlotBooked = (date: Date, time: string) => {
  return bookedAppointments.some(
    appointment => 
      isSameDay(appointment.date, date) && 
      appointment.time === time
  );
};

const Appointments = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState("posvojitev");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime) {
      toast({
        title: "Napaka",
        description: "Izberite datum in čas termina.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Napaka",
        description: "Prosimo, izpolnite vsa obvezna polja.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, we would send this data to a backend
    toast({
      title: "Termin rezerviran!",
      description: `Vaš termin za ${format(date, "d. MMMM yyyy", { locale: sl })} ob ${selectedTime} je bil uspešno rezerviran. Na vaš e-naslov in telefon smo poslali potrditev.`,
    });

    // Reset form
    setSelectedTime(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: ""
    });
  };

  // Disable past dates in calendar
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
                  <TabsTrigger value="calendar">Koledar terminov</TabsTrigger>
                  <TabsTrigger value="info">Informacije</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calendar" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rezervacija termina</CardTitle>
                      <CardDescription>
                        Izberite datum in čas za vaš obisk zavetišča.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-1 space-y-4">
                            <div>
                              <Label htmlFor="appointment-type">Vrsta termina</Label>
                              <select 
                                id="appointment-type"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={appointmentType}
                                onChange={(e) => setAppointmentType(e.target.value)}
                              >
                                <option value="posvojitev">Posvojitev živali</option>
                                <option value="ogled">Ogled živali</option>
                                <option value="oddaja">Oddaja živali v zavetišče</option>
                                <option value="svetovanje">Svetovanje</option>
                              </select>
                            </div>
                            
                            <div>
                              <Label htmlFor="name">Ime in priimek*</Label>
                              <Input 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                required 
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="email">E-pošta*</Label>
                              <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                required 
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone">Telefon*</Label>
                              <Input 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleInputChange} 
                                required 
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="notes">Opombe</Label>
                              <Textarea 
                                id="notes" 
                                name="notes" 
                                value={formData.notes} 
                                onChange={handleInputChange} 
                                placeholder="Dodatne informacije o vašem obisku..." 
                              />
                            </div>
                          </div>
                          
                          <div className="md:col-span-1 space-y-6">
                            <div>
                              <Label className="mb-2 block">Izberite datum*</Label>
                              <div className="border rounded-md p-2">
                                <CalendarComponent
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  disabled={disabledDays}
                                  className="mx-auto"
                                  locale={sl}
                                />
                              </div>
                            </div>
                            
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
                                        variant={selectedTime === time ? "default" : isBooked ? "outline" : "outline"}
                                        className={`${
                                          isBooked 
                                            ? "opacity-50 cursor-not-allowed bg-red-50 text-red-500 hover:bg-red-50" 
                                            : selectedTime === time 
                                              ? "bg-green-500 hover:bg-green-600 text-white" 
                                              : "hover:bg-green-50"
                                        }`}
                                        onClick={() => !isBooked && setSelectedTime(time)}
                                        disabled={isBooked}
                                      >
                                        {time}
                                      </Button>
                                    );
                                  })}
                                </div>
                                <div className="flex items-center gap-3 text-sm mt-2">
                                  <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span>Izbrano</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-red-50 border border-red-200 rounded-full"></div>
                                    <span>Zasedeno</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-white border rounded-full"></div>
                                    <span>Prosto</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full md:w-auto">
                          Potrdi rezervacijo
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="info" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informacije o terminih</CardTitle>
                      <CardDescription>
                        Pomembne informacije glede obiska zavetišča in rezervacije termina.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Delovni čas zavetišča</h3>
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
                        <h3 className="text-lg font-semibold mb-2">Pravila obiska</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Obiski so možni le z rezervacijo termina.</li>
                          <li>Prihod na termin naj bo točen, zamuda več kot 15 minut pomeni odpoved termina.</li>
                          <li>Otroci morajo biti v spremstvu odrasle osebe.</li>
                          <li>Živali v zavetišču ne hranite brez dovoljenja osebja.</li>
                          <li>Ne vznemirjajte živali in upoštevajte navodila osebja.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Kontaktni podatki</h3>
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
                      Da, za kakovostno obravnavo obiskovalcev in dobrobit živali je potrebna rezervacija termina.
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
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:info@zavetisce-mb.si">
                      Pošljite nam vprašanje
                    </a>
                  </Button>
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
