
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Cat, User, Mail, Phone, MapPin, SendHorizontal, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import FileUpload from "@/components/shared/FileUpload";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Ime in priimek sta obvezna." }),
  phoneNumber: z.string().min(8, { message: "Vnesite veljavno telefonsko številko." }),
  email: z.string().email({ message: "Vnesite veljaven e-poštni naslov." }),
  location: z.string().min(5, { message: "Vnesite natančno lokacijo odlova." }),
  catCount: z.string().min(1, { message: "Vnesite približno število mačk." }),
  description: z.string().min(10, { message: "Dodajte kratek opis situacije." }),
  consent: z.boolean().refine(val => val === true, {
    message: "Za oddajo prijave morate sprejeti pogoje.",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface StrayCatFormProps {
  open: boolean;
  onClose: () => void;
}

export default function StrayCatForm({ open, onClose }: StrayCatFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      location: "",
      catCount: "",
      description: "",
      consent: false,
    },
  });

  const handleFileChange = (files: File[]) => {
    setUploadedFiles(files);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          formData.append(key, value ? 'true' : 'false');
        } else {
          formData.append(key, value as string);
        }
      });
      
      uploadedFiles.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
      
      // Add email recipient
      formData.append('emailTo', 'zavetisce.mb@snaga-mb.si');
      formData.append('formType', 'stray-cat');
      
      console.log("Form data would be sent:", Object.fromEntries(formData));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      form.reset();
      setUploadedFiles([]);
    } catch (error) {
      toast({
        title: "Napaka pri pošiljanju",
        description: "Prišlo je do napake. Poskusite znova ali nas kontaktirajte.",
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
            <DialogTitle className="text-center text-teal-800">Prijava poslana</DialogTitle>
            <DialogDescription className="text-center">
              Vaša prijava za odlov prostoživečih mačk je bila uspešno poslana.
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
              <Cat className="h-5 w-5 text-teal-600" />
            </div>
            <DialogTitle>Prijava za odlov prostoživečih mačk</DialogTitle>
          </div>
          <DialogDescription>
            Izpolnite obrazec za prijavo potrebe po odlovu prostoživečih mačk na vaši lokaciji.
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
                        <Input placeholder="Vnesite vaše ime in priimek" {...field} className="pl-8" />
                        <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kontaktna telefonska številka</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="tel" placeholder="npr. 041 123 456" {...field} className="pl-8" />
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
                  <FormLabel>E-poštni naslov</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="email" placeholder="npr. ime.priimek@email.com" {...field} className="pl-8" />
                      <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Točna lokacija odlova</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Vnesite natančen naslov lokacije" {...field} className="pl-8" />
                      <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Vpišite točen naslov, kjer ste opazili prostoživeče mačke.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="catCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Približno število mačk na lokaciji</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" placeholder="npr. 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opis situacije</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Opišite stanje živali, nujnost odlova in druge relevantne podatke..." 
                      rows={4}
                      {...field} 
                      className="resize-none min-h-24"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Priloži fotografije lokacije ali mačk (opcijsko)</FormLabel>
              <FileUpload 
                onChange={handleFileChange} 
                value={uploadedFiles}
                accept="image/*"
                maxFiles={3}
              />
            </div>

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0 pt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Strinjam se z obdelavo osebnih podatkov
                    </FormLabel>
                    <FormDescription>
                      Vaši podatki bodo uporabljeni izključno za namen prijave in odlova prostoživečih mačk.
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
}
