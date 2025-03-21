
import { Link } from "react-router-dom";
import { PawPrint, Search, Heart, Calendar, Euro, Mail } from "lucide-react";
import AnimatedWrapper from "../shared/AnimatedWrapper";

const links = [
  {
    title: "Posvojitev",
    description: "Posvoji psa ali mačko iz našega zavetišča",
    icon: PawPrint,
    link: "/posvojitev/psi",
    color: "bg-blue-50 text-blue-600",
    delay: 0,
  },
  {
    title: "Izgubljene & najdene živali",
    description: "Prijavi izgubljeno ali najdeno žival",
    icon: Search,
    link: "/izgubljeni-najdeni",
    color: "bg-purple-50 text-purple-600",
    delay: 100,
  },
  {
    title: "Prostovoljstvo",
    description: "Postani prostovoljec in pomagaj živalim",
    icon: Heart,
    link: "/prostovoljstvo",
    color: "bg-pink-50 text-pink-600",
    delay: 200,
  },
  {
    title: "Termini",
    description: "Rezerviraj termin za obisk živali",
    icon: Calendar,
    link: "/termini",
    color: "bg-green-50 text-green-600",
    delay: 300,
  },
  {
    title: "Donacije",
    description: "Finančno ali materialno podpri zavetišče",
    icon: Euro,
    link: "/donacije",
    color: "bg-amber-50 text-amber-600",
    delay: 400,
  },
  {
    title: "Kontakt",
    description: "Kontaktirajte nas za več informacij",
    icon: Mail,
    link: "/kontakt",
    color: "bg-teal-50 text-teal-600",
    delay: 500,
  },
];

export default function QuickLinks() {
  return (
    <div className="py-8 bg-gradient-to-b from-[#dfecea]/80 to-[#dcebe9]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {links.map((link, index) => (
            <AnimatedWrapper
              key={index}
              animation="zoom-in"
              delay={link.delay}
              className="h-full"
            >
              <Link
                to={link.link}
                className="group p-6 md:p-8 rounded-xl border border-teal-500/20 bg-white/80 backdrop-blur-sm flex flex-col h-full hover-lift overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`p-3 rounded-lg w-fit ${link.color} mb-4 transition-normal group-hover:scale-110`}>
                  <link.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 transition-normal group-hover:text-primary">
                  {link.title}
                </h3>
                <p className="text-muted-foreground">{link.description}</p>
                <div className="absolute bottom-0 right-0 w-24 h-24 -m-8 bg-teal-50 rounded-full opacity-0 group-hover:opacity-50 transition-normal"></div>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
