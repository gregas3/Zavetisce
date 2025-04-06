
import { Link } from "react-router-dom";
import { Dog, Search, Heart, Calendar, Euro, Mail, Users, Video } from "lucide-react";
import AnimatedWrapper from "../shared/AnimatedWrapper";

const links = [
  {
    title: "Posvojitev",
    description: "Posvoji psa ali mačko iz našega zavetišča",
    icon: Dog,
    link: "/posvojitev/psi",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    hoverColor: "group-hover:bg-blue-100 group-hover:text-blue-700",
    delay: 0,
    ariaLabel: "Posvojitev živali",
  },
  {
    title: "Izgubljene & najdene živali",
    description: "Prijavi izgubljeno ali najdeno žival",
    icon: Search,
    link: "/izgubljeni-najdeni",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    hoverColor: "group-hover:bg-purple-100 group-hover:text-purple-700",
    delay: 100,
    ariaLabel: "Izgubljene in najdene živali",
  },
  {
    title: "Prostovoljstvo",
    description: "Postani prostovoljec in pomagaj živalim",
    icon: Heart,
    link: "/prostovoljstvo",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    hoverColor: "group-hover:bg-pink-100 group-hover:text-pink-700",
    delay: 200,
    ariaLabel: "Prostovoljstvo",
  },
  {
    title: "Članstvo",
    description: "Postani član zavetišča in podpri naše poslanstvo",
    icon: Users,
    link: "/donacije#clanarina",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    hoverColor: "group-hover:bg-indigo-100 group-hover:text-indigo-700",
    delay: 300,
    ariaLabel: "Članstvo v zavetišču",
  },
  {
    title: "Termini",
    description: "Rezerviraj termin za obisk živali",
    icon: Calendar,
    link: "/termini",
    color: "bg-green-50 text-green-600 border-green-100",
    hoverColor: "group-hover:bg-green-100 group-hover:text-green-700",
    delay: 400,
    ariaLabel: "Rezervacija termina",
  },
  {
    title: "Donacije",
    description: "Finančno ali materialno podpri zavetišče",
    icon: Euro,
    link: "/donacije",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    hoverColor: "group-hover:bg-amber-100 group-hover:text-amber-700",
    delay: 500,
    ariaLabel: "Donacije za zavetišče",
  },
  {
    title: "360° izkušnja",
    description: "Doživite zavetišče skozi oči psa",
    icon: Video,
    link: "/about/virtualni-koticek",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    hoverColor: "group-hover:bg-cyan-100 group-hover:text-cyan-700",
    delay: 600,
    ariaLabel: "360 stopinjska izkušnja pogleda psa",
  },
  {
    title: "Kontakt",
    description: "Kontaktirajte nas za več informacij",
    icon: Mail,
    link: "/kontakt",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    hoverColor: "group-hover:bg-teal-100 group-hover:text-teal-700",
    delay: 700,
    ariaLabel: "Kontaktni obrazec",
  },
];

export default function QuickLinks() {
  return (
    <div className="py-10 md:py-12 bg-gradient-to-b from-[#dfecea]/80 to-[#dcebe9]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-teal-800">Naše storitve</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {links.map((link, index) => (
            <AnimatedWrapper
              key={index}
              animation="zoom-in"
              delay={link.delay}
              className="h-full"
            >
              <Link
                to={link.link}
                className="group flex flex-col h-full overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300"
                aria-label={link.ariaLabel}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-teal-500/20 rounded-xl p-5 md:p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                  <div className={`p-3 rounded-lg w-fit ${link.color} border mb-3 md:mb-4 transition-all duration-300 ${link.hoverColor} transform group-hover:scale-110`}>
                    <link.icon size={22} />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-teal-900 transition-all duration-300 group-hover:text-primary">
                    {link.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">{link.description}</p>
                  
                  <div className="absolute bottom-0 right-0 w-20 h-20 -m-6 bg-gradient-to-br from-teal-50/80 to-teal-100/50 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
                </div>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
