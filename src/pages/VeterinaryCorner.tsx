
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import FaqAccordion, { FaqItem } from '@/components/shared/FaqAccordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, HelpCircle, Syringe, Shield, Hospital, Cross } from "lucide-react";

const faqItems: FaqItem[] = [
  {
    question: "Ali lahko pripeljem svojo žival na pregled?",
    answer: <p className="flex items-center gap-2"><span className="text-red-500 font-bold">❌</span> Ne, ambulanta je namenjena izključno živalim iz zavetišča.</p>,
    icon: <HelpCircle size={20} />
  },
  {
    question: "Kaj se zgodi z živaljo, ko pride v zavetišče?",
    answer: <p className="flex items-center gap-2"><span className="text-green-500 font-bold">✅</span> Vpiše se v evidenco, veterinarsko pregleda, preveri čip in prejme oskrbo.</p>,
    icon: <Syringe size={20} />
  },
  {
    question: "Ali so vse živali cepljene?",
    answer: <p className="flex items-center gap-2"><span className="text-green-500 font-bold">✅</span> Da, po protokolu ob prihodu.</p>,
    icon: <Shield size={20} />
  },
  {
    question: "Kje opravite večje kirurške posege?",
    answer: <p className="flex items-center gap-2 space-x-1">
      <span>V partnerski kliniki </span>
      <a 
        href="https://mzvet.si" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-teal-600 hover:text-teal-700 flex items-center gap-1 underline"
      >
        MZVet Pesnica <ExternalLink size={14} />
      </a>
    </p>,
    icon: <Hospital size={20} />
  }
];

const VeterinaryCorner = () => {
  return (
    <Layout>
      <Helmet>
        <title>Veterinarski kotiček | Zavetišče za živali Maribor</title>
        <meta name="description" content="V zavetišču za živali Maribor imamo organizirano interno veterinarsko ambulanto, v kateri oskrbimo vse živali, ki pridejo v zavetišče." />
      </Helmet>
      
      <main className="min-h-screen pt-24">
        <Section 
          title="Veterinarski kotiček" 
          animation="fade-in"
          className="bg-gradient-to-b from-teal-50/50 to-transparent"
        >
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center gap-2">
                  <Cross className="text-teal-500" />
                  Veterinarska ambulanta
                </CardTitle>
                <CardDescription>Strokovna oskrba vseh sprejetih živali</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  V zavetišču imamo organizirano interno veterinarsko ambulanto, v kateri oskrbimo vse živali, ki pridejo v zavetišče.
                </p>
                <p>
                  Ambulanta je namenjena samo zdravljenju in obravnavi živali, ki so sprejete v zavetišče, saj je slovenska zakonodaja na tem področju izjemno stroga in ne dopušča mešanja lastniških in izgubljenih živali.
                </p>
                <p>
                  V naši ambulanti opravljamo vse posege, ki jih po pravilniku o pogojih za zavetišča za izgubljene živali moramo, večje in zahtevnejše posege pa izvedejo v partnerski kliniki, s katero sodelujemo:
                </p>
                <div className="mt-4">
                  <a 
                    href="https://mzvet.si" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium"
                  >
                    🔗 MZVet Pesnica Veterinary Clinic <ExternalLink size={14} />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-teal-700 flex items-center gap-2">
                <HelpCircle className="text-teal-500" />
                Pogosta vprašanja
              </h2>
              <FaqAccordion items={faqItems} className="mt-2" />
            </div>
            
            <div className="mt-8">
              <Link to="/about/oskrba-zivali" className="text-teal-600 hover:text-teal-700 flex items-center gap-1">
                Preberite več o oskrbi živali po sprejemu →
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default VeterinaryCorner;
