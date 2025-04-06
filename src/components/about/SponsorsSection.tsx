
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import AnimatedWrapper from "../shared/AnimatedWrapper";

// Sponsors data
const sponsors = [
  {
    id: 1,
    name: "Zavarovalnica Sava",
    logoUrl: "/lovable-uploads/26024ab8-81da-451e-96d2-00032e7c132e.png", 
    logoPosition: "0% 0%",
    description: "Velika slovenska zavarovalnica, ki je zavetišču donirala 5.000 € v praznični kampanji.",
    supportType: "Finančna donacija",
    website: "https://www.zav-sava.si",
    delay: 0,
  },
  {
    id: 2,
    name: "Priori Zavarovanje d.o.o.",
    logoUrl: "/lovable-uploads/26024ab8-81da-451e-96d2-00032e7c132e.png",
    logoPosition: "25% 0%",
    description: "Lokalni zavarovalni posrednik, ki je podprl zavetišče z nakupom veterinarske opreme.",
    supportType: "Finančna donacija za opremo",
    website: "https://www.priori.si",
    delay: 150,
  },
  {
    id: 3,
    name: "OTP Banka",
    logoUrl: "/lovable-uploads/26024ab8-81da-451e-96d2-00032e7c132e.png",
    logoPosition: "50% 0%",
    description: "Zaposleni banke so donirali hrano in pomagali pri zasaditvi dreves v zavetišču.",
    supportType: "Materialna donacija in prostovoljstvo",
    website: "https://www.otpbanka.si",
    delay: 300,
  },
  {
    id: 4,
    name: "SKB banka d.d.",
    logoUrl: "/lovable-uploads/26024ab8-81da-451e-96d2-00032e7c132e.png",
    logoPosition: "75% 0%",
    description: "Pomagali so z donacijami hrane in prostovoljsko pomočjo pri urejanju okolice.",
    supportType: "Materialna donacija in prostovoljstvo",
    website: "https://www.skb.si",
    delay: 450,
  },
  {
    id: 5,
    name: "Marprom d.o.o.",
    logoUrl: "/lovable-uploads/26024ab8-81da-451e-96d2-00032e7c132e.png",
    logoPosition: "100% 0%",
    description: "Mestni prevoznik, ki je postal boter živali v zavetišču in doniral hrano ter opremo.",
    supportType: "Botrstvo, materialna pomoč, prostovoljstvo",
    website: "https://www.marprom.si",
    delay: 600,
  },
];

export default function SponsorsSection() {
  return (
    <div className="py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {sponsors.map((sponsor) => (
          <AnimatedWrapper 
            key={sponsor.id} 
            animation="zoom-in"
            delay={sponsor.delay}
            className="h-full"
          >
            {/* For larger screens use HoverCard */}
            <div className="hidden md:block h-full">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`Obiščite spletno stran ${sponsor.name}`}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-md hover:scale-105 flex flex-col border border-teal-200 bg-white/80">
                      <CardContent className="p-4 flex flex-col items-center justify-center flex-grow">
                        {/* Logo with image sprite technique */}
                        <div 
                          className="w-full h-24 mb-2 bg-contain bg-no-repeat bg-center"
                          style={{ 
                            backgroundImage: `url(${sponsor.logoUrl})`,
                            backgroundPosition: sponsor.logoPosition 
                          }}
                          aria-label={`Logo ${sponsor.name}`}
                        />
                        <div className="text-center text-sm font-medium text-teal-700 mt-2">
                          {sponsor.name}
                        </div>
                      </CardContent>
                      <CardFooter className="p-2 bg-teal-50/50 flex justify-end">
                        <ExternalLink size={14} className="text-teal-600" />
                      </CardFooter>
                    </Card>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white border-teal-200 shadow-md">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-teal-800">{sponsor.name}</h3>
                    <p className="text-sm text-gray-600">{sponsor.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-teal-100/50 text-teal-700">
                        {sponsor.supportType}
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            {/* For mobile use tooltip */}
            <div className="block md:hidden h-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                      aria-label={`Obiščite spletno stran ${sponsor.name}`}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-md border border-teal-200 bg-white/80">
                        <CardContent className="p-3 flex flex-col items-center justify-center">
                          {/* Logo with image sprite technique */}
                          <div 
                            className="w-full h-16 mb-1 bg-contain bg-no-repeat bg-center"
                            style={{ 
                              backgroundImage: `url(${sponsor.logoUrl})`,
                              backgroundPosition: sponsor.logoPosition 
                            }}
                            aria-label={`Logo ${sponsor.name}`}
                          />
                          <div className="text-center text-xs font-medium text-teal-700 mt-1">
                            {sponsor.name}
                          </div>
                        </CardContent>
                        <CardFooter className="p-2 bg-teal-50/50 flex justify-between items-center">
                          <CardDescription className="text-xs truncate max-w-[80%]">
                            {sponsor.supportType}
                          </CardDescription>
                          <ExternalLink size={14} className="text-teal-600 flex-shrink-0" />
                        </CardFooter>
                      </Card>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">{sponsor.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
      
      <div className="mt-8 text-center text-sm text-teal-700 italic">
        Hvala vsem, ki s svojo podporo pomagate našemu zavetišču ustvarjati boljši svet za živali.
      </div>
    </div>
  );
}
