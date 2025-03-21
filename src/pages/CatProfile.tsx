
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, FileText } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";
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
import { Cat, cats } from "@/data/catsData";

const CatProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    navigate("/termini", { state: { petName: cat?.name, petType: "mačka" } });
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

  // Mock contact info for the shelter
  const contactInfo = {
    phone: "+386 2 480 1660",
    email: "info@zavetisce-maribor.si",
  };

  // Mock additional info about the cat
  const additionalInfo = {
    suitableFor: cat?.goodWith.join(", ") || "",
    notSuitableFor: cat?.gender === "samec" ? "nervozna okolja, majhni otroci brez nadzora" : "hrupna okolja, zelo aktivne družine",
    additionalInfo: "Mačka je bila najdena kot zapuščena in ima za seboj težko preteklost, vendar je zdaj pripravljena na nov začetek v ljubečem domu.",
  };

  if (loading) return <CatProfileSkeleton />;
  if (error || !cat) return <CatProfileError />;

  return (
    <Layout>
      <Helmet>
        <title>{cat?.name || 'Loading...'} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${cat?.name || 'mačko'}, ${cat?.gender || ''} mačka, ki išče nov dom.`} />
      </Helmet>

      {loading ? (
        <CatProfileSkeleton />
      ) : error || !cat ? (
        <CatProfileError />
      ) : (
        <main className="pt-20 pb-10">
          <Section>
            <CatProfileBreadcrumb catName={cat.name} />
            <CatProfileHeader name={cat.name} status="Na voljo za posvojitev" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <CatImageCarousel images={[cat.image]} />
              </div>
              <div className="space-y-6">
                <CatBasicInfo
                  age={cat.age}
                  color={cat.color}
                  gender={cat.gender}
                  size={cat.size}
                  dateArrived="2023-06-15"
                />
                
                <CatContactInfo
                  name={cat.name}
                  contactInfo={{
                    phone: "+386 2 480 1660",
                    email: "info@zavetisce-maribor.si",
                  }}
                  handleScheduleAppointment={handleScheduleAppointment}
                />

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.characteristics.map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="about" className="mt-8">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="about">O mački</TabsTrigger>
                <TabsTrigger value="health">Zdravstveno stanje</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-0">
                <CatAboutTab
                  name={cat.name}
                  description={cat.description}
                  suitableFor={cat.goodWith.join(", ") || ""}
                  notSuitableFor={cat.gender === "samec" ? "nervozna okolja, majhni otroci brez nadzora" : "hrupna okolja, zelo aktivne družine"}
                  additionalInfo="Mačka je bila najdena kot zapuščena in ima za seboj težko preteklost, vendar je zdaj pripravljena na nov začetek v ljubečem domu."
                />
              </TabsContent>
              
              <TabsContent value="health" className="mt-0">
                <CatHealthTab
                  name={cat.name}
                  vaccinated={cat.vaccinated}
                  neutered={cat.neutered}
                  microchipped={true}
                  gender={cat.gender}
                />
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={handleScheduleAppointment}>
                <Calendar className="mr-2 h-5 w-5" />
                Rezerviraj termin za obisk
              </Button>
              
              <div className="mt-4">
                <Button variant="teal" size="lg" onClick={handleFillQuestionnaire}>
                  <FileText className="mr-2 h-5 w-5" />
                  Izpolni vprašalnik
                </Button>
              </div>
              
              <div className="mt-6 flex justify-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+38624801660">
                    <Phone className="mr-2 h-4 w-4" />
                    +386 2 480 1660
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:info@zavetisce-maribor.si">
                    <Mail className="mr-2 h-4 w-4" />
                    info@zavetisce-maribor.si
                  </a>
                </Button>
              </div>
            </div>
          </Section>
        </main>
      )}
      <Footer />
    </Layout>
  );
};

export default CatProfile;
