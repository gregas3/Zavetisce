
import React from "react";
import { Helmet } from "react-helmet";
import { PawPrint, Cat, Heart, Info, FileText } from "lucide-react";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import Section from "@/components/shared/Section";
import Layout from "@/components/layout/Layout";
import StrayCatForm from "@/components/forms/StrayCatForm";
export default function StrayCats() {
  return <Layout>
      <Helmet>
        <title>Prostoživeče mačke – pomoč in nadzor populacije | Zavetišče za živali</title>
        <meta name="description" content="Informacije o prostoživečih mačkah in naših programih za njihov odlov, sterilizacijo/kastracijo in vrnitev v okolje." />
      </Helmet>

      <div className="bg-gradient-to-b from-teal-50 to-teal-100/30 py-10 md:py-16">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation="fade-in">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-800 flex items-center justify-center gap-3 mb-6">
                <PawPrint className="h-8 w-8 text-teal-600" />
                <span>Prostoživeče mačke</span>
              </h1>
              <p className="text-lg md:text-xl text-teal-700 max-w-3xl mx-auto">
                Pomoč in nadzor populacije
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      <Section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <AnimatedWrapper animation="slide-up" delay={50}>
                <div className="prose prose-lg max-w-none">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-800 mb-4">
                    <Cat className="h-6 w-6 text-teal-600" />
                    Kaj so prostoživeče mačke?
                  </h2>
                  <p className="text-slate-700">
                    Prostoživeče mačke, ki jih pogosto imenujemo tudi potepuške ali brezdomne mačke, živijo na prostem brez lastnika, običajno v večjih skupinah oziroma kolonijah. Nastanejo predvsem zaradi neodgovornega ravnanja ljudi, ki svoje živali zapustijo ali zavržejo.
                  </p>

                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-800 mt-8 mb-4">
                    <Heart className="h-6 w-6 text-teal-600" />
                    Zakaj je sterilizacija/kastracija tako pomembna?
                  </h2>
                  <p className="text-slate-700">
                    Prostoživeče mačke se brez nadzora zelo hitro razmnožujejo. Ena sama nesterilizirana samica lahko s svojim potomstvom v sedmih letih povzroči kar 420.000 novih mačjih potomcev. Sterilizacija in kastracija sta ključnega pomena za preprečevanje njihovega nekontroliranega razmnoževanja, zmanjševanje bolezni, trpljenja in izboljšanje njihove kakovosti življenja.
                  </p>

                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-800 mt-8 mb-4">
                    <FileText className="h-6 w-6 text-teal-600" />
                    Metoda TNR (Trap-Neuter-Return)
                  </h2>
                  <p className="text-slate-700">
                    Naše zavetišče aktivno uporablja metodo Trap-Neuter-Return, kar pomeni, da mačke odlovimo, veterinarsko oskrbimo, steriliziramo ali kastriramo, označimo (z odstranitvijo vrha levega uhlja do 5 mm, kar je jasno vidno brez približevanja) in jih nato vrnemo na lokacijo, kjer so bile najdene, če je okolje primerno. Ta praksa je široko sprejeta in priporočena po vsej Evropi.
                  </p>

                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-800 mt-8 mb-4">
                    <Info className="h-6 w-6 text-teal-600" />
                    Razlika med prostoživečo in izgubljeno mačko
                  </h2>
                  <p className="text-slate-700">
                    Prostoživeče mačke se ljudi praviloma izogibajo, ne iščejo kontakta, medtem ko izgubljene domače mačke običajno aktivno iščejo pozornost, stik z ljudmi, se pustijo božati in imajo pogosto znake nege (ovratnica, negovana dlaka).
                  </p>

                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-teal-800 mt-8 mb-4">
                    <Heart className="h-6 w-6 text-teal-600" />
                    Kako lahko pomagate vi?
                  </h2>
                  <p className="text-slate-700">
                    Če ste v svoji okolici opazili prostoživeče mačke, vas prosimo, da izpolnite spodnji obrazec in se prijavite v čakalno vrsto za njihov odlov, sterilizacijo in kastracijo. S tem boste pomembno prispevali k izboljšanju njihovega življenja in reševanju težav povezanih z nenadzorovano rastjo mačjih kolonij.
                  </p>
                </div>
              </AnimatedWrapper>
            </div>

            <div className="md:col-span-5">
              <AnimatedWrapper animation="slide-up" delay={100}>
                <div className="bg-teal-50 p-6 border border-teal-100 shadow-sm rounded-xl">
                  <img alt="Prostoživeče mačke" className="w-full h-auto rounded-lg shadow-md" src="/lovable-uploads/0efce035-d33a-4772-a4ae-0c1609c5ad97.jpg" />
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <AnimatedWrapper animation="fade-in" delay={150}>
              <div className="text-center mb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-800">Prijavite prostoživeče mačke</h2>
                <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                  Izpolnite spodnji obrazec za prijavo potrebe po odlovu prostoživečih mačk
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slide-up" delay={200}>
              <StrayCatForm />
            </AnimatedWrapper>
          </div>
        </div>
      </Section>
    </Layout>;
}
