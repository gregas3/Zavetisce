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
    logoUrl: "/lovable-uploads/54435c79-63fc-48aa-aaf6-5e634fe2ae99.png",
    description: "Velika slovenska zavarovalnica, ki je zavetišču donirala 5.000 € v praznični kampanji.",
    supportType: "Finančna donacija",
    website: "https://www.zav-sava.si",
    delay: 0,
  },
  {
    id: 2,
    name: "Priori Zavarovanje d.o.o.",
    logoUrl: "/lovable-uploads/520622a8-48e0-48b5-844f-1cf058dabae4.png",
    description: "Lokalni zavarovalni posrednik, ki je podprl zavetišče z nakupom veterinarske opreme.",
    supportType: "Finančna donacija za opremo",
    website: "https://www.priori.si",
    delay: 150,
  },
  {
    id: 3,
    name: "OTP Banka",
    logoUrl: "/lovable-uploads/985fc7e7-e4e2-412f-8358-1602a52a4dbc.png",
    description: "Zaposleni banke so donirali hrano in pomagali pri zasaditvi dreves v zavetišču.",
    supportType: "Materialna donacija in prostovoljstvo",
    website: "https://www.otpbanka.si",
    delay: 300,
  },
  {
    id: 4,
    name: "Mr. Pet",
    logoUrl: "/lovable-uploads/812e6cb5-60e9-4796-a0d3-401d64242705.png",
    description: "Trgovina za male živali, ki redno donira hrano in opremo za živali v zavetišču.",
    supportType: "Materialna donacija",
    website: "https://www.mrpet.si",
    delay: 450,
  },
  {
    id: 5,
    name: "Marprom d.o.o.",
    logoUrl: "/lovable-uploads/b3252ad0-d343-40a2-b7cc-6adf6741a967.png",
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
                        {sponsor.id === 1 || sponsor.id === 2 || sponsor.id === 3 || sponsor.id === 4 || sponsor.id === 5 ? (
                          // Use the direct image for these sponsors
                          <img 
                            src={sponsor.logoUrl} 
                            alt={`Logo ${sponsor.name}`}
                            className="w-full h-24 mb-2 object-contain"
                          />
                        ) : (
                          // For other sponsors, use a different approach without relying on logoPosition
                          <div 
                            className="w-full h-24 mb-2 bg-contain bg-no-repeat bg-center"
                            style={{ 
                              backgroundImage: `url(${sponsor.logoUrl})`
                            }}
                            aria-label={`Logo ${sponsor.name}`}
                          />
                        )}
                        <div className="text-center text-sm font-medium text-teal-700 mt-2">
                          {sponsor.name}
                        </div>
                      </CardContent>
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
                          {sponsor.id === 1 || sponsor.id === 2 || sponsor.id === 3 || sponsor.id === 4 || sponsor.id === 5 ? (
                            // Use direct image for these sponsors on mobile too
                            <img 
                              src={sponsor.logoUrl} 
                              alt={`Logo ${sponsor.name}`}
                              className="w-full h-16 mb-1 object-contain"
                            />
                          ) : (
                            // For other sponsors, use a different approach without relying on logoPosition
                            <div 
                              className="w-full h-16 mb-1 bg-contain bg-no-repeat bg-center"
                              style={{ 
                                backgroundImage: `url(${sponsor.logoUrl})`
                              }}
                              aria-label={`Logo ${sponsor.name}`}
                            />
                          )}
                          <div className="text-center text-xs font-medium text-teal-700 mt-1">
                            {sponsor.name}
                          </div>
                        </CardContent>
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
