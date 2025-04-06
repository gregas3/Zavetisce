
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PawPrint, Home, Heart, Check, Users, Brain, Car, Mail, Scissors } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Button } from "@/components/ui/button";

const SterilizacijaKastracija = () => {
  return (
    <Layout>
      <Helmet>
        <title>Steriliziraj & kastriraj | Zavetišče za živali Maribor</title>
        <meta name="description" content="Zakaj so posegi sterilizacije in kastracije priporočljivi tudi pri lastniških živalih? Spoznajte razloge in prednosti teh posegov." />
        <meta name="keywords" content="sterilizacija, kastracija, mačke, psi, prostoživeče, zdravje živali, živali" />
      </Helmet>

      <div className="bg-gradient-to-b from-[#e2efed]/80 via-[#dfecea]/80 to-[#e2efed]/80 pt-10 md:pt-16">
        <Section className="pb-6 md:pb-10">
          <div className="container">
            <nav className="flex mb-6 md:mb-10" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link to="/" className="inline-flex items-center text-sm text-teal-600 hover:text-teal-800">
                    <Home size={16} className="mr-2" />
                    Domov
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-1">/</span>
                    <Link to="/prostozivece-macke" className="text-sm text-teal-600 hover:text-teal-800">
                      Prostoživeče mačke
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="text-gray-400 mx-1">/</span>
                    <span className="text-sm text-gray-500">Steriliziraj & kastriraj</span>
                  </div>
                </li>
              </ol>
            </nav>

            <AnimatedWrapper animation="fade-in">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 md:mb-14">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-100 mb-5">
                    <Scissors size={32} className="text-teal-600" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-800 mb-4">
                    Steriliziraj in kastriraj!
                  </h1>
                  <p className="text-lg md:text-xl text-teal-700/90 max-w-3xl mx-auto">
                    Naše živali, ki so na voljo za posvojitev, tudi kastriramo oziroma steriliziramo. Zakaj so ti posegi priporočljivi tudi pri lastniških živalih?
                  </p>
                </div>

                <div className="space-y-12 md:space-y-16">
                  {/* Section 1 */}
                  <AnimatedWrapper animation="fade-in" delay={100}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex items-start">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 shrink-0 mr-6">
                          <PawPrint size={24} className="text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 flex items-center">
                            <PawPrint size={24} className="text-teal-500 sm:hidden mr-2" />
                            Ker je parjenje težko preprečiti
                          </h2>
                          <ul className="space-y-3 text-teal-700">
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Psice se gonijo približno dvakrat letno, ciklus traja 21 dni.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Mačke se gonijo trikrat ali štirikrat letno, ciklus traja 6 do 7 dni.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Samci zavohajo gonečo samico tudi do 3 km daleč.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Če niso kastrirani, se gonijo ob vsakem vonju goneče samice.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Parjenje je zelo težko fizično preprečiti.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>

                  {/* Section 2 */}
                  <AnimatedWrapper animation="fade-in" delay={200}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex items-start">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 shrink-0 mr-6">
                          <Home size={24} className="text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 flex items-center">
                            <Home size={24} className="text-teal-500 sm:hidden mr-2" />
                            Zaradi prevelikega števila živali
                          </h2>
                          <ul className="space-y-3 text-teal-700">
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>V Sloveniji je vsako leto zavrženih več kot 4000 psov in mačk.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Mnogi teh najdenčkov žal nikoli ne najdejo doma.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>

                  {/* Section 3 */}
                  <AnimatedWrapper animation="fade-in" delay={300}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex items-start">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 shrink-0 mr-6">
                          <Brain size={24} className="text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 flex items-center">
                            <Brain size={24} className="text-teal-500 sm:hidden mr-2" />
                            Zaradi pozitivnega vpliva na vedenje živali
                          </h2>
                          <ul className="space-y-3 text-teal-700">
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Sterilizirane in kastrirane živali se manj potepajo in izgubijo.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Manj se pretepajo, so bolj umirjene in zvesto ostajajo doma.</span>
                            </li>
                            <li className="flex items-start">
                              <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                              <span>Kastrirani samci običajno manj označujejo svoj teritorij.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>

                  {/* Section 4 */}
                  <AnimatedWrapper animation="fade-in" delay={400}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex items-start">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 shrink-0 mr-6">
                          <Heart size={24} className="text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 flex items-center">
                            <Heart size={24} className="text-teal-500 sm:hidden mr-2" />
                            Zaradi pozitivnega vpliva na zdravje živali
                          </h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-bold text-teal-700 mb-3">Sterilizirane samice:</h3>
                              <ul className="space-y-3 text-teal-700">
                                <li className="flex items-start">
                                  <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                                  <span>Ne zbolijo za vnetjem rodil</span>
                                </li>
                                <li className="flex items-start">
                                  <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                                  <span>Močno zmanjšana verjetnost raka na maternici in seskih</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-bold text-teal-700 mb-3">Kastrirani samci:</h3>
                              <ul className="space-y-3 text-teal-700">
                                <li className="flex items-start">
                                  <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                                  <span>Ne zbolijo za rakom na prostati ali modih</span>
                                </li>
                                <li className="flex items-start">
                                  <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                                  <span>Manj izpostavljeni spolno prenosljivim boleznim</span>
                                </li>
                                <li className="flex items-start">
                                  <Check size={20} className="text-teal-500 mt-1 mr-2 shrink-0" />
                                  <span>Manj verjetnosti za vnetja sečil</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>

                  {/* Section 5 */}
                  <AnimatedWrapper animation="fade-in" delay={500}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex items-start">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 shrink-0 mr-6">
                          <Car size={24} className="text-teal-600" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4 flex items-center">
                            <Car size={24} className="text-teal-500 sm:hidden mr-2" />
                            Manj možnosti, da jih povozi avto
                          </h2>
                          <p className="text-teal-700">
                            Sterilizirane ali kastrirane živali običajno pogosteje ostajajo doma, tudi v času parjenja.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>

                  {/* Contact Section */}
                  <AnimatedWrapper animation="fade-in" delay={600}>
                    <div className="bg-teal-50 rounded-2xl p-6 md:p-8 shadow-sm border border-teal-100">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                          <Mail size={24} className="text-teal-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4">
                          Potrebujete pomoč?
                        </h2>
                        <p className="text-teal-700 mb-6 max-w-2xl">
                          Če naletite na kakšno specifično težavo, o kateri bi se radi posvetovali z našo veterinarko, nam pišite. Pomagali vam bomo po najboljših močeh, saj smo vašega novega družinskega člana spoznali tudi mi.
                        </p>
                        <Link to="/kontakt">
                          <Button size="lg" className="shadow-md">
                            <Mail size={16} className="mr-2" />
                            Kontaktirajte nas
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default SterilizacijaKastracija;
