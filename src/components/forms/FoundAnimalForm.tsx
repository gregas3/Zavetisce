import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PawPrint, User, Mail, Phone, Info, Calendar, Image, SendHorizontal, Loader2, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
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
  foundDate: z.string().min(1, { message: 'Datum je obvezen' }),
  locationText: z.string().min(3, { message: 'Vpišite lokacijo najdbe' }),
  currentLocation: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface FoundAnimalFormProps {
  onSuccess?: () => void;
}

const FoundAnimalForm = ({ onSuccess }: FoundAnimalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
      foundDate: new Date().toISOString().split('T')[0],
      locationText: '',
      currentLocation: '',
      additionalInfo: '',
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      
      files.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
      
      formData.append('formType', 'found-animal');
      
      console.log("Form data would be sent:", Object.fromEntries(formData));
      
      await new Promise(r => setTimeout(r, 1500));
      
      setSubmitStatus('success');
      
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
      
      form.reset();
      setFiles([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm border border-teal-100">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
            <Check size={32} />
          </div>
          <h3 className="text-2xl font-bold text-teal-800">Prijava uspešno poslana</h3>
          <p className="text-gray-600 mt-2">
            Hvala za prijavo najdene živali. Kontaktirali vas bomo v najkrajšem možnem času.
          </p>
        </div>
        
        <Button 
          variant="teal" 
          className="w-full"
          onClick={() => {
            setSubmitStatus('idle');
            window.scrollTo(0, 0);
          }}
        >
          Prijavi novo žival
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-teal-100">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
          <PawPrint size={20} className="text-teal-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-800">Prijava najdene živali</h3>
          <p className="text-sm text-gray-500">Prosimo izpolnite obrazec s čim več podatki</p>
        </div>
      </div>
      
      {submitStatus === 'error' && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Napaka pri oddaji prijave</AlertTitle>
          <AlertDescription>
            Prišlo je do težave pri oddaji prijave. Prosimo, poskusite znova ali nas kontaktirajte na telefonsko številko.
          </AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ime in priimek</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Janez Novak" {...field} />
                      <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
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
                      <Input placeholder="041 123 456" {...field} />
                      <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
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
                    <Input placeholder="janez.novak@primer.si" {...field} />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="animalType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vrsta živali</FormLabel>
                  <FormControl>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
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
          
          <div className="grid gap-6 md:grid-cols-2">
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
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
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
          
          <div className="grid gap-6 md:grid-cols-2">
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
              name="foundDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Datum najdbe</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="date" {...field} />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
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
                  <div className="relative">
                    <Textarea 
                      placeholder="Podroben opis najdene živali, posebnosti, kakšno ima ovratnico, posebne oznake..."
                      {...field}
                      className="resize-none min-h-24"
                    />
                    <Info className="absolute right-3 top-3 text-gray-400" size={16} />
                  </div>
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
                <FormLabel>Lokacija najdbe</FormLabel>
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
          
          <FormField
            control={form.control}
            name="currentLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trenutna lokacija živali (če ni v zavetišču)</FormLabel>
                <FormControl>
                  <Input placeholder="Npr. Žival je trenutno pri meni doma na naslovu..." {...field} />
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
                    placeholder="Morebitne dodatne informacije, ki bi lahko pomagale pri identificiranju lastnika..."
                    {...field}
                    className="resize-none min-h-20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Pošiljam...
              </>
            ) : (
              <>
                <SendHorizontal className="mr-2 h-4 w-4" />
                Oddaj prijavo
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            Z oddajo obrazca se strinjate, da bomo vaše podatke uporabili izključno za namen iskanja lastnika najdene živali.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default FoundAnimalForm;
