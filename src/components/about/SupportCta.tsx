
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupportCta = () => {
  return (
    <section className="bg-[#1A3B3A] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Podprite naše poslanstvo</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Pomagajte nam zagotoviti boljše življenje zapuščenim živalim. Vsak prispevek šteje, ne glede na to, kako majhen je.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-lg text-lg">
            <Link to="/donacije">Donirajte</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg">
            <Link to="/prostovoljstvo">Postanite prostovoljec</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportCta;
