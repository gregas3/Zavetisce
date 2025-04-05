
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, ClipboardList, Search, FileText, Syringe, Dog, Cat, Scale, CheckCircle2 } from "lucide-react";

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2 mb-2">
    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const AnimalCare = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oskrba živali po sprejemu | Zavetišče za živali Maribor</title>
        <meta name="description" content="V ambulanti zavetišča za živali Maribor vse sprejete živali primerno oskrbimo. Spoznajte postopek oskrbe živali po sprejemu v zavetišče." />
      </Helmet>
      
      <main className="min-h-screen pt-24">
        <Section 
          title="Oskrba živali po sprejemu" 
          animation="fade-in"
          className="bg-gradient-to-b from-teal-50/50 to-transparent"
        >
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center gap-2">
                  <Scissors className="text-teal-500" />
                  Postopek oskrbe
                </CardTitle>
                <CardDescription>Kaj se zgodi po sprejemu v zavetišče</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-700">
                <p>
                  V ambulanti vse sprejete živali primerno oskrbimo. Postopek:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-lg">
                    <ClipboardList className="text-teal-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Vpis v evidenco</h3>
                      <p className="text-sm">Evidentiranje osnovnih podatkov o najdeni živali.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-lg">
                    <Search className="text-teal-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Preverjanje pogrešanih živali</h3>
                      <p className="text-sm">Preverjanje ujemanja s prijavljenimi pogrešanimi živalmi.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-lg">
                    <FileText className="text-teal-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Iskanje mikročipa</h3>
                      <p className="text-sm">Pregledovanje evidence označenih živali.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-lg">
                    <FileText className="text-teal-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Postopek za brez lastnika</h3>
                      <p className="text-sm">Dokumentiranje in začetek postopka oskrbe.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 mb-6">
                  <h3 className="font-medium flex items-center gap-2 mb-2">
                    <Syringe className="text-yellow-600" />
                    Osnovna veterinarska oskrba v 24h
                  </h3>
                  <p className="text-sm">
                    Vsaka žival prejme osnovno veterinarsko oskrbo v prvih 24 urah po sprejemu v zavetišče, skladno s predpisi in potrebami živali.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-teal-700 text-lg flex items-center gap-2">
                    <Dog className="text-teal-500" />
                    Psi – priprava na posvojitev
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="pl-1 mt-2">
                    <CheckListItem>Veterinarski pregled</CheckListItem>
                    <CheckListItem>Cepljenje proti kužnim boleznim</CheckListItem>
                    <CheckListItem>Cepljenje proti steklini (nad 3 mesece)</CheckListItem>
                    <CheckListItem>Sterilizacija</CheckListItem>
                    <CheckListItem>Mikročip</CheckListItem>
                    <CheckListItem>EU potni list</CheckListItem>
                    <CheckListItem>Sredstva proti zajedalcem</CheckListItem>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-teal-700 text-lg flex items-center gap-2">
                    <Cat className="text-teal-500" />
                    Mačke – priprava na posvojitev
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="pl-1 mt-2">
                    <CheckListItem>Veterinarski pregled</CheckListItem>
                    <CheckListItem>Cepljenje</CheckListItem>
                    <CheckListItem>Mikročip</CheckListItem>
                    <CheckListItem>Sterilizacija / kastracija</CheckListItem>
                    <CheckListItem>EU potni list</CheckListItem>
                    <CheckListItem>Test na FIV (nad 6 mesecev)</CheckListItem>
                    <CheckListItem>Navajenost na mačje stranišče</CheckListItem>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-8">
              <CardContent className="p-4">
                <p className="flex items-center gap-2 text-slate-700">
                  <Scale className="text-teal-500" />
                  <span>Vse živali se stehtajo in zabeležijo v sistem.</span>
                </p>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <Link to="/about/veterinarski-koticek" className="text-teal-600 hover:text-teal-700 flex items-center gap-1">
                Preberite več o veterinarskem kotičku →
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default AnimalCare;
