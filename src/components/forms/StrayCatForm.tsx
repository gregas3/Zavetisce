
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Cat, Send, MapPin, Info, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import FileUpload from "@/components/shared/FileUpload";
import LocationPicker from "@/components/shared/LocationPicker";

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

export default function StrayCatForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
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
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      console.log("Form data:", data);
      console.log("Uploaded files:", uploadedFiles);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Prijava poslana",
        description: "Vaša prijava za odlov prostoživečih mačk je bila uspešno poslana.",
      });
      
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

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-teal-800">
          <Cat className="h-6 w-6 text-teal-600" />
          Prijava za odlov prostoživečih mačk
        </CardTitle>
        <CardDescription>
          Izpolnite obrazec za prijavo potrebe po odlovu prostoživečih mačk na vaši lokaciji.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ime in priimek</FormLabel>
                    <FormControl>
                      <Input placeholder="Vnesite vaše ime in priimek" {...field} />
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
                      <Input type="tel" placeholder="npr. 041 123 456" {...field} />
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
                    <Input type="email" placeholder="npr. ime.priimek@email.com" {...field} />
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
                  <FormLabel className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-teal-600" />
                    Točna lokacija odlova
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Vnesite natančen naslov lokacije" {...field} />
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
                  <FormLabel className="flex items-center gap-1">
                    <Info className="h-4 w-4 text-teal-600" />
                    Opis situacije
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Opišite stanje živali, nujnost odlova in druge relevantne podatke..." 
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <div className="mb-2 flex items-center gap-1">
                <Upload className="h-4 w-4 text-teal-600" />
                <p className="text-sm font-medium">Priloži fotografije lokacije ali mačk (opcijsko)</p>
              </div>
              <FileUpload 
                onFilesChange={handleFileChange} 
                multiple={true} 
                accept="image/*"
                maxFiles={5}
                maxSize={5 * 1024 * 1024} // 5MB
              />
              <p className="text-xs text-muted-foreground mt-2">
                Priložite lahko do 5 fotografij (jpg, png), velikosti do 5MB.
              </p>
            </div>

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Pošiljanje..." : "Pošlji prijavo"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Prijava bo poslana na uradni email zavetišča: zavetisce.mb@snaga-mb.si
        </p>
      </CardFooter>
    </Card>
  );
}
