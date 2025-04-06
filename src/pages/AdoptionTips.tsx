
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, PawPrint, Shield, Calendar, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdoptionTips() {
  return (
    <Layout>
      <AnimatedWrapper animation="fade-in" delay={50}>
        <div className="relative overflow-hidden pt-24 pb-8 md:pb-12 lg:pb-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 to-white"></div>
          
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="col-span-1 md:col-span-12 lg:col-span-10 lg:col-start-2">
                <div className="text-center mb-10">
                  <h1 className="font-display text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl md:text-5xl mb-4">
                    Napotki za oskrbo živali po posvojitvi
                  </h1>
                  <p className="text-lg text-teal-700/90 max-w-3xl mx-auto">
                    Vaš dom je bogatejši za novega družinskega člana. Veseli smo, da ste se odločili za posvojitev in tako kosmatincu omogočili lepo pasje ali mačje življenje v srčnem domu.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto mb-12">
                  <p className="text-teal-700 mb-6">
                    Zavedajmo pa se, da je obdobje medsebojnega prilagajanja lahko naporno – za obe strani. Zato si preberite nekaj nasvetov, kako bosta v kratkem času vi in vaš kosmatinec postala najboljša prijatelja.
                  </p>
                </div>
                
                <AnimatedWrapper animation="fade-in" delay={100}>
                  <Card className="mb-8">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-8 w-8 text-red-500" />
                        <CardTitle className="text-2xl text-teal-800">Odgovornost lastnika živali</CardTitle>
                      </div>
                      <CardDescription className="text-base text-teal-700">
                        Kako biti odgovoren lastnik živali, moramo razmišljati še preden si omislimo žival. Zavedati se moramo, da bo žival popolnoma odvisna od nas in da smo v celoti zanjo odgovorni.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="fade-in" delay={150}>
                  <Card className="mb-8 overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <PawPrint className="h-8 w-8 text-teal-500" />
                        <CardTitle className="text-2xl text-teal-800">Kaj žival potrebuje</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 pl-2">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">primerno hrano in tekočino</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">veterinarsko oskrbo (ko jo potrebuje)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">redna cepljenja (proti kužnim boleznim in steklini)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">odpravljanje (notranjih in zunanjih) zajedalcev</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">vsakodnevno gibanje in ljubezen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">primerno namestitev, ki varuje pred vremenskimi vplivi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-teal-500"></div>
                          <span className="text-teal-700">primerno vzgojo in socializacijo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="fade-in" delay={200}>
                  <Card className="mb-10 border-l-4 border-l-green-500">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-1">
                        <Heart className="h-7 w-7 text-green-500" />
                        <CardTitle className="text-2xl text-green-700">Zaključek</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-teal-700">
                        Ja, dobili ste novega družinskega člana. Predvsem poskrbite, da bo dobil vsakodnevni odmerek ljubezni in topline. Verjemite, vračal vam bo. Vsak dan znova.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="fade-in" delay={250}>
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl shadow-sm border border-teal-100 mb-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                      <div className="bg-white p-3 rounded-full shadow-md">
                        <Mail className="h-8 w-8 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-teal-800 mb-2">Potrebujete pomoč?</h3>
                        <p className="text-teal-700 mb-4">
                          Če naletite na kakšno specifično težavo, o kateri bi se radi posvetovali z našo veterinarko, nam pišite. Pomagali vam bomo po najboljših močeh, saj smo vašega novega družinskega člana spoznali tudi mi.
                        </p>
                        <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
                          <Link to="/kontakt">
                            Kontaktirajte nas
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </Layout>
  );
}
