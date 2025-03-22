
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PawPrint, User, Mail, Phone, Calendar, SendHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import FileUpload from '@/components/shared/FileUpload';

const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Ime in priimek sta obvezna' }),
  phone: z.string().min(8, { message: 'Telefonska številka je obvezna' }),
  email: z.string().email({ message: 'Vnesite veljaven email naslov' }),
  animalType: z.string().min(1, { message: 'Izberite vrsto živali' }),
  breed: z.string().optional(),
  color: z.string().min(1, { message: 'Barva živali je obvezna' }),
  description: z.string().min(10, { message: 'Opis naj vsebuje vsaj 10 znakov' }),
  gender: z.string().optional(),
  age: z.string().optional(),
  lastSeenDate: z.string().min(1, { message: 'Datum je obvezen' }),
  locationText: z.string().min(3, { message: 'Vpišite lokacijo zadnjega videnja' }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LostAnimalFormProps {
  open: boolean;
  onClose: () => void;
}

const LostAnimalForm = ({ open, onClose }: LostAnimalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      animalType: '',
      breed: '',
      color: '',
      description: '',
      gender: '',
      age: '',
      lastSeenDate: new Date().toISOString().split('T')[0],
      locationText: '',
      additionalInfo: '',
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      
      files.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
      
      // Add email recipient
      formData.append('emailTo', 'zavetisce.mb@snaga-mb.si');
      formData.append('formType', 'lost-animal');
      
      console.log("Form data would be sent:", Object.fromEntries(formData));
      
      // Simulate API call
      await new Promise(r => setTimeout(r, 1500));
      
      setSubmitSuccess(true);
      form.reset();
      setFiles([]);
    } catch (error) {
      console.error('Error submitting form:', error);
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
            <DialogTitle className="text-center text-teal-800">Prijava uspešno poslana</DialogTitle>
            <DialogDescription className="text-center">
              Hvala za prijavo izgubljene živali. Kontaktirali vas bomo v najkrajšem možnem času.
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
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-8 w-8 rounded-full bg-teal-50 flex items-center justify-center">
              <PawPrint className="h-5 w-5 text-teal-600" />
            </div>
            <DialogTitle>Prijava izgubljene živali</DialogTitle>
          </div>
          <DialogDescription>
            Prosimo izpolnite obrazec s čim več podatki
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ime in priimek</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Janez Novak" {...field} className="pl-8" />
                        <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
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
                    <FormLabel>Telefonska številka</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="041 123 456" {...field} className="pl-8" />
                        <Phone className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email naslov</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="janez.novak@primer.si" {...field} className="pl-8" />
                      <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="animalType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vrsta živali</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Izberite vrsto živali" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Pes</SelectItem>
                          <SelectItem value="cat">Mačka</SelectItem>
                          <SelectItem value="other">Drugo</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pasma (če je znana)</FormLabel>
                    <FormControl>
                      <Input placeholder="Mešanec, labradorec..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Barva živali</FormLabel>
                    <FormControl>
                      <Input placeholder="Rjava, črna s sivimi lisami..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spol (če je znan)</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Izberite spol živali" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Samec</SelectItem>
                          <SelectItem value="female">Samica</SelectItem>
                          <SelectItem value="unknown">Neznano</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid gap-4 grid-cols-2">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Starost (če je znana)</FormLabel>
                    <FormControl>
                      <Input placeholder="3 leta, mladič..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastSeenDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datum zadnjega videnja</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="date" {...field} className="pl-8" />
                        <Calendar className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opis živali in značilne lastnosti</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Podroben opis živali, posebnosti, kakšno ima ovratnico, posebne oznake..."
                      {...field}
                      className="resize-none min-h-24"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="locationText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokacija zadnjega videnja</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Npr. Gosposvetska cesta 83, Maribor ali bližina Mestnega parka..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <Label>Fotografije živali (do 3)</Label>
              <FileUpload
                value={files}
                onChange={setFiles}
                maxFiles={3}
                accept="image/*"
              />
            </div>
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dodatne informacije</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Morebitne dodatne informacije, ki bi lahko pomagale pri iskanju..."
                      {...field}
                      className="resize-none min-h-20"
                    />
                  </FormControl>
                  <FormMessage />
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
                Z oddajo obrazca se strinjate, da bomo vaše podatke uporabili izključno za namen iskanja izgubljene živali.
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LostAnimalForm;
