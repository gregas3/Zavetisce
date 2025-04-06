
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Cat } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import CatProfileBreadcrumb from "@/components/cats/CatProfileBreadcrumb";
import CatProfileHeader from "@/components/cats/CatProfileHeader";
import CatImageCarousel from "@/components/cats/CatImageCarousel";
import CatBasicInfo from "@/components/cats/CatBasicInfo";
import CatContactInfo from "@/components/cats/CatContactInfo";
import CatAboutTab from "@/components/cats/CatAboutTab";
import CatHealthTab from "@/components/cats/CatHealthTab";
import CatProfileSkeleton from "@/components/cats/CatProfileSkeleton";
import CatProfileError from "@/components/cats/CatProfileError";
import { Badge } from "@/components/ui/badge";
import { Cat as CatType, cats } from "@/data/catsData";
import { useToast } from "@/components/ui/use-toast";
import ShareAnimalDialog from "@/components/shared/ShareAnimalDialog";

const CatProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cat, setCat] = useState<CatType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadCat = async () => {
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const catId = Number(id);
        if (isNaN(catId)) {
          setError(true);
          return;
        }

        const foundCat = cats.find(c => c.id === catId);
        if (!foundCat) {
          setError(true);
          return;
        }

        setCat(foundCat);
      } catch (err) {
        console.error("Error fetching cat:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadCat();
  }, [id]);

  const handleScheduleAppointment = () => {
    navigate(`/termini?animalId=${cat?.id}&animalName=${cat?.name}&animalType=Mačka`);
    toast({
      title: "Termin za ogled",
      description: `Ustvarjanje termina za ogled mačke ${cat?.name}`,
    });
  };
  
  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${cat?.name}&animalType=Mačka`);
    toast({
      title: "Vprašalnik za posvojitev",
      description: `Izpolnjevanje vprašalnika za posvojitev mačke ${cat?.name}`,
    });
  };

  const handleVolunteerClick = () => {
    navigate('/prostovoljstvo');
  };

  if (loading) return <CatProfileSkeleton />;
  if (error || !cat) return <CatProfileError />;

  // Use images array if available, otherwise fallback to single image in an array
  const catImages = cat.images || [cat.image];

  return (
    <Layout>
      <Helmet>
        <title>{cat.name} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${cat.name}, ${cat.gender} mačko, ki išče nov dom.`} />
      </Helmet>

      <main className="pt-20 pb-10">
        <Section>
          <div className="container">
            <CatProfileBreadcrumb catName={cat.name} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <CatProfileHeader name={cat.name} status="Na voljo za posvojitev" />
                  
                  <ShareAnimalDialog
                    animalName={cat.name}
                    animalType="mačka"
                    animalId={cat.id}
                    triggerClassName="ml-2"
                  />
                </div>
                
                <CatImageCarousel 
                  images={catImages} 
                  videos={cat.videos} 
                  catName={cat.name}
                  isDetailPage={true}
                />

                <Tabs defaultValue="about" className="mt-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="about">O mački</TabsTrigger>
                    <TabsTrigger value="health">Zdravje</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="mt-4">
                    <CatAboutTab
                      name={cat.name}
                      description={cat.description}
                      suitableFor={cat.goodWith.join(", ") || ""}
                      notSuitableFor={cat.gender === "samec" ? "nervozna okolja, majhni otroci brez nadzora" : "hrupna okolja, zelo aktivne družine"}
                      additionalInfo="Mačka je bila najdena kot zapuščena in ima za seboj težko preteklost, vendar je zdaj pripravljena na nov začetek v ljubečem domu."
                    />
                  </TabsContent>
                  
                  <TabsContent value="health" className="mt-4">
                    <CatHealthTab
                      name={cat.name}
                      vaccinated={cat.vaccinated}
                      neutered={cat.neutered}
                      microchipped={true}
                      gender={cat.gender}
                    />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-6">
                <CatBasicInfo
                  age={cat.age}
                  color={cat.color}
                  gender={cat.gender}
                  size={cat.size}
                  dateArrived="2023-06-15"
                />
                
                {/* Action buttons moved here, between basic info and contact */}
                <div className="flex flex-col gap-2 p-3 bg-teal-50/80 rounded-lg shadow-sm border border-teal-100">
                  <Button asChild variant="outline" size="sm" className="h-8 justify-start text-sm">
                    <Link to="/posvojitev/mačke">
                      Nazaj na seznam mačk
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="teal" 
                    size="sm" 
                    className="h-8 justify-start text-black text-sm" 
                    onClick={handleScheduleAppointment}
                  >
                    <Calendar className="mr-2 h-3.5 w-3.5" />
                    Prijava na ogled
                  </Button>
                  
                  <Button 
                    variant="teal" 
                    size="sm" 
                    className="h-8 justify-start text-sm" 
                    onClick={handleFillQuestionnaire}
                  >
                    <FileText className="mr-2 h-3.5 w-3.5" />
                    Izpolni vprašalnik
                  </Button>
                </div>
                
                <CatContactInfo 
                  name={cat.name}
                  contactInfo={{
                    phone: "+386 2 480 1660",
                    email: "info@zavetisce-maribor.si",
                  }}
                />
                
                <div className="bg-card rounded-xl border border-border p-4">
                  <h3 className="text-base font-semibold mb-2">Lastnosti</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.characteristics.map((trait, i) => (
                      <Badge 
                        key={i}
                        variant="outline" 
                        className="bg-primary/5 text-xs"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default CatProfile;
