
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FileText, ArrowLeft, Check, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";

const personalInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Ime in priimek je obvezno polje." }),
  dateOfBirth: z.string().min(2, { message: "Datum rojstva je obvezno polje." }),
  permanentAddress: z.string().min(2, { message: "Stalni naslov je obvezno polje." }),
  animalAddress: z.string().min(2, { message: "Naslov kjer bo bivala žival je obvezno polje." }),
  phone: z.string().min(2, { message: "Telefon je obvezno polje." }),
  email: z.string().email({ message: "Vpišite veljaven e-poštni naslov." }),
});

const openQuestionsSchema = z.object({
  desiredAnimal: z.string().min(2, { message: "To polje je obvezno." }),
  dailyTime: z.string().min(2, { message: "To polje je obvezno." }),
  livingConditions: z.string().min(2, { message: "To polje je obvezno." }),
  livingConditionsDetails: z.string().min(2, { message: "To polje je obvezno." }),
  otherAnimals: z.string().min(2, { message: "To polje je obvezno." }),
  previousPets: z.string().min(2, { message: "To polje je obvezno." }),
  cohabitants: z.string().min(2, { message: "To polje je obvezno." }),
  backup: z.string().min(2, { message: "To polje je obvezno." }),
});

const yesNoQuestionsSchema = z.object({
  timeAndEffort: z.boolean(),
  properNutrition: z.boolean(),
  regularGrooming: z.boolean(),
  movementFreedom: z.boolean(),
  naturalLight: z.boolean(),
  fencedYard: z.boolean(),
  outdoorShelter: z.boolean(),
  separateAccommodation: z.boolean(),
  chosenVet: z.boolean(),
  provideVetCare: z.boolean(),
  trainingToPreventHarm: z.boolean(),
  landlordAware: z.boolean(),
  permitInspection: z.boolean(),
});

type FormData = z.infer<typeof personalInfoSchema> & 
                z.infer<typeof openQuestionsSchema> & 
                z.infer<typeof yesNoQuestionsSchema>;

const Questionnaire = () => {
  const [searchParams] = useSearchParams();
  const animalType = searchParams.get("animalType") || "Pes";
  const animalName = searchParams.get("animalName") || "";
  
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      permanentAddress: "",
      animalAddress: "",
      phone: "",
      email: "",
    },
  });

  const openQuestionsForm = useForm<z.infer<typeof openQuestionsSchema>>({
    resolver: zodResolver(openQuestionsSchema),
    defaultValues: {
      desiredAnimal: "",
      dailyTime: "",
      livingConditions: "",
      livingConditionsDetails: "",
      otherAnimals: "",
      previousPets: "",
      cohabitants: "",
      backup: "",
    },
  });

  const yesNoQuestionsForm = useForm<z.infer<typeof yesNoQuestionsSchema>>({
    resolver: zodResolver(yesNoQuestionsSchema),
    defaultValues: {
      timeAndEffort: false,
      properNutrition: false,
      regularGrooming: false,
      movementFreedom: false,
      naturalLight: false,
      fencedYard: false,
      outdoorShelter: false,
      separateAccommodation: false,
      chosenVet: false,
      provideVetCare: false,
      trainingToPreventHarm: false,
      landlordAware: false,
      permitInspection: false,
    },
  });

  const handlePersonalInfoSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    console.log("Personal Info:", data);
    setCurrentStep(2);
  };

  const handleOpenQuestionsSubmit = (data: z.infer<typeof openQuestionsSchema>) => {
    console.log("Open Questions:", data);
    setCurrentStep(3);
  };

  const handleYesNoQuestionsSubmit = (data: z.infer<typeof yesNoQuestionsSchema>) => {
    console.log("Yes/No Questions:", data);
    
    // Combine all form data
    const completeFormData = {
      ...personalInfoForm.getValues(),
      ...openQuestionsForm.getValues(),
      ...data,
      animalType,
      animalName,
      submissionDate: new Date().toISOString(),
    };
    
    console.log("Complete Form Data:", completeFormData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmissionComplete(true);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Posvojitveni Vprašalnik | Zavetišče za živali Maribor</title>
        <meta name="description" content="Izpolnite posvojitveni vprašalnik za posvojitev živali iz Zavetišča za živali Maribor." />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-10">
        <Section className="bg-gray-50">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Domov</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Posvojitveni Vprašalnik</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-3">Posvojitveni Vprašalnik</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Izpolnite spodnji vprašalnik, če želite posvojiti žival iz našega zavetišča. Vaši odgovori nam pomagajo zagotoviti najboljše možne domove za naše živali.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Vprašalnik za posvojitev</CardTitle>
                    <CardDescription>
                      Vrsta živali: {animalType} 
                      {animalName && ` | Ime živali: ${animalName}`}
                    </CardDescription>
                  </div>
                  <div className="text-sm font-medium">
                    Korak {currentStep} od 3
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <Form {...personalInfoForm}>
                    <form onSubmit={personalInfoForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Osebni podatki kandidata</h3>
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ime in priimek:</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Datum rojstva:</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="permanentAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Stalni naslov:</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="animalAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Naslov kjer bo bivala žival:</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon:</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={personalInfoForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mail:</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Nadaljuj</Button>
                      </div>
                    </form>
                  </Form>
                )}
                
                {currentStep === 2 && (
                  <Form {...openQuestionsForm}>
                    <form onSubmit={openQuestionsForm.handleSubmit(handleOpenQuestionsSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Vprašanja o posvojitvi</h3>
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="desiredAnimal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>1. Kakšno žival želite (spol, starost, velikost, dlaka, barva, karakter...)? </FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="dailyTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>2. Koliko časa dnevno boste namenili živali?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="livingConditions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>3. Živite v hiši, stanovanju...? Je prostor kjer živite lastniški ali v najemu?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="livingConditionsDetails"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>4. Opišite kakšne pogoje bivanja lahko nudite živali?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="otherAnimals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>5. Ali trenutno z vami bivajo še katere druge živali? Če da, katere?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="previousPets"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>6. Če ste že imeli žival, kaj se je z njo zgodilo?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="cohabitants"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>7. S kom sobivate? Ali je vaša odločitev o posvojitvi živali enotna?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={openQuestionsForm.control}
                          name="backup"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>8. Kdo bo poskrbel za žival v primeru vaše bolezni, daljše nenapovedane odsotnosti, vaše nezmožnosti, selitve...?</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                          Nazaj
                        </Button>
                        <Button type="submit">Nadaljuj</Button>
                      </div>
                    </form>
                  </Form>
                )}
                
                {currentStep === 3 && (
                  <Form {...yesNoQuestionsForm}>
                    <form onSubmit={yesNoQuestionsForm.handleSubmit(handleYesNoQuestionsSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Vprašanja DA/NE</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Pri naslednjih vprašanjih označite DA, če se strinjate, in NE, če se ne strinjate.
                        </p>
                        
                        <div className="border rounded-md">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="text-left p-3 border-b">Vprašanje</th>
                                <th className="w-24 text-center p-3 border-b">Odgovor</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="timeAndEffort"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ste pripravljeni vlagati svoj čas, trud in denar v žival, ki jo posvajate?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("timeAndEffort") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="properNutrition"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ali boste zagotavljali živali ustrezno prehrano, ki mora vsebovati vse potrebne snovi za njen zdrav razvoj?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("properNutrition") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="regularGrooming"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Se vam zdi pomembno redno negovati žival in odstranjevati zajedavce kot so bolhe, klopi, gliste in trakulje?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("regularGrooming") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="movementFreedom"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ali lahko živali zagotovite svobodo gibanja primerno vrsti, starosti, stopnji razvoja?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("movementFreedom") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="naturalLight"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Če bo žival bivala v notranjih prostorih, ali ima zagotovljeno naravno svetlobo, zadostno zračenje in pogled na neposredno okolico?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("naturalLight") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="fencedYard"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Če bo pes bival zunaj, ali imate ograjeno dvorišče ali del dvorišča, ki onemogoča pobeg? (IZPOLNITE LE V PRIMERU, DA ŽELITE POSVOJITI PSA)
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("fencedYard") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="outdoorShelter"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Če bo žival bivala zunaj, ali ima na voljo ustrezen prostor, ki ji zagotavlja zaščito pred padavinami, vetrom, mrazom in sončno pripeko?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("outdoorShelter") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="separateAccommodation"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Če z vami že biva kakšna žival, ali lahko zagotovite ločeno nastanitev živali, če bi bilo to potrebno?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("separateAccommodation") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="chosenVet"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ali že imate izbrano veterinarsko ambulanto?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("chosenVet") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="provideVetCare"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ali boste zmožni poskrbeti za žival v primeru bolezni, poškodbe, onemoglosti... in ji zagotovili takojšnjo veterinarsko oskrbo?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("provideVetCare") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="trainingToPreventHarm"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Ali boste z ustrezno vzgojo in šolanjem oziroma z drugimi ukrepi zagotovili, da pes ne bo nevaren okolici? (IZPOLNITE LE V PRIMERU, DA ŽELITE POSVOJITI PSA)
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("trainingToPreventHarm") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr className="border-b">
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="landlordAware"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          V kolikor bivate v najetem stanovanju ali je najemodajalec seznanjen z vašo namero o posvojitvi živali in bivanju le te v stanovanju?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("landlordAware") ? "DA" : "NE"}
                                </td>
                              </tr>
                              
                              <tr>
                                <td className="p-3">
                                  <FormField
                                    control={yesNoQuestionsForm.control}
                                    name="permitInspection"
                                    render={({ field }) => (
                                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Soglašate, da predstavniki zavetišča občasno preverijo, ali za žival ustrezno skrbite?
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="p-3 text-center">
                                  {yesNoQuestionsForm.watch("permitInspection") ? "DA" : "NE"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                          <p className="text-sm text-amber-800">
                            Izpolnjen vprašalnik lahko osebno prinesete v zavetišče v času uradnih ur od ponedeljka do petka med 8:00 in 12:00, ga pošljete na naslov Zavetišče za živali Maribor, Avtomobilska ulica 25, 2000 Maribor ali posredujete po elektronski pošti <a href="mailto:zavetisce.mb@snaga-mb.si" className="underline">zavetisce.mb@snaga-mb.si</a>. Upoštevali bomo le v celoti izpolnjen vprašalnik. V kolikor bomo menili, da ste primeren potencialni posvojitelj, za določeno žival vas bomo kontaktirali v roku treh (3) delovnih dni. V primeru negativnega odgovora le tega ne sporočamo.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                          Nazaj
                        </Button>
                        <Button type="submit">Pošlji vprašalnik</Button>
                      </div>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2" size={16} />
                  Nazaj na domačo stran
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Dialog open={submissionComplete} onOpenChange={setSubmissionComplete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="text-green-500" />
              Vprašalnik uspešno poslan
            </DialogTitle>
            <DialogDescription>
              Hvala za izpolnitev vprašalnika. Vaše podatke bomo pregledali in vas kontaktirali v roku 3 delovnih dni, če bomo menili, da ste primeren posvojitelj.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button asChild onClick={() => setSubmissionComplete(false)}>
              <Link to="/">Nazaj na domačo stran</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Questionnaire;
