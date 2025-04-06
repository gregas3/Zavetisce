
import { Mail, Phone, Clock, MapPin, AlertTriangle, Navigation, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import Layout from "@/components/layout/Layout";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Kontakt() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const isMobile = useIsMobile();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      (e.target as HTMLFormElement).reset();
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const navigateToLocation = () => {
    // For mobile devices, open in maps app with navigation
    if (isMobile) {
      window.open('https://www.google.com/maps/dir/?api=1&destination=Avtomobilska+ulica+25,+2000+Maribor,+Slovenia&travelmode=driving', '_blank');
    } else {
      // For desktop, just open Google Maps with the location
      window.open('https://www.google.com/maps/place/Avtomobilska+ulica+25,+2000+Maribor,+Slovenia', '_blank');
    }
  };

  // TikTok icon SVG component to match Lucide icon style
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-teal-600"
    >
      <path d="M9 12a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"></path>
      <path d="M16 8v8"></path>
      <path d="M12 16v-8"></path>
      <path d="M20 12V8h-4"></path>
      <path d="M16 4.99v0.01"></path>
    </svg>
  );
  
  return <Layout>
      <Section id="kontakt-hero" title="Kontakt" description="Stopite v stik z nami za vse informacije o posvojitvah, prostovoljstvu ali drugih vprašanjih." centered className="pt-24 md:pt-32" animation="fade-in-up">
        <div className="flex flex-col items-center w-full mt-8">
          {/* Updated grid container with proper centering for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {/* Contact card - Added mx-auto to ensure centering on mobile */}
            <AnimatedWrapper animation="slide-in-right" delay={300} className="w-full flex justify-center">
              <Card className="glass-card p-6 overflow-hidden relative h-full w-full max-w-full mx-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500"></div>
                <h3 className="text-2xl font-bold mb-6 text-teal-800">Zavetišče za živali Maribor</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <button 
                        onClick={navigateToLocation}
                        className="font-medium hover:text-teal-600 transition-colors text-left"
                      >
                        <p className="font-medium">Avtomobilska ulica 25</p>
                        <p>2000 Maribor</p>
                        <p className="text-xs text-teal-600 flex items-center gap-1 mt-1">
                          <Navigation size={12} /> Pridobi navigacijo
                        </p>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-teal-600 flex-shrink-0" />
                    <div>
                      <a 
                        href="tel:+38624801660" 
                        className="font-medium hover:text-teal-600 transition-colors"
                      >
                        <p className="font-medium">02 480 16 60</p>
                      </a>
                      <p className="text-sm text-muted-foreground">Splošne informacije</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="text-amber-500 flex-shrink-0" />
                    <div>
                      <a 
                        href="tel:+38631788822" 
                        className="font-medium hover:text-amber-600 transition-colors"
                      >
                        <p className="font-medium">031-788-822</p>
                      </a>
                      <p className="text-sm font-semibold text-amber-600">Dežurna telefonska številka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-teal-600 flex-shrink-0" />
                    <a 
                      href="mailto:zavetisce.mb@snaga-mb.si" 
                      className="font-medium hover:text-teal-600 transition-colors"
                    >
                      <p className="font-medium">zavetisce.mb@snaga-mb.si</p>
                    </a>
                  </div>

                  <div className="flex gap-3 mt-3">
                    <a 
                      href="https://www.facebook.com/profile.php?id=100064510547105" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-teal-600" />
                    </a>
                    <a 
                      href="https://www.instagram.com/zavetisce_za_zivali_maribor/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-teal-600" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@zavetisce" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors"
                    >
                      <TikTokIcon />
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-teal-100">
                  <h4 className="text-xl font-bold mb-4 text-teal-800">Uradne ure</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Uradne ure za splošne informacije:</p>
                        <p><span className="italic">pon.-pet.:</span> 8:00 - 12:00</p>
                        <p><span className="italic">Sobota, nedelja, prazniki:</span> ni uradnih ur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Sprehajanje psov:</p>
                        <p><span className="italic">pon.-pet.:</span> 7:00 - 13:00</p>
                        <p><span className="italic">Sobota, nedelja in prazniki:</span> 8:00 - 12:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-teal-600 mt-1 flex-shrink-0" />
                      <p className="font-medium">Ogledi živali samo po predhodni najavi</p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={600} className="w-full">
              <Card className="glass-card p-6 overflow-hidden relative h-full mx-auto">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500"></div>
                <h3 className="text-2xl font-bold mb-6 text-teal-800">Pišite nam</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-teal-800">Ime in priimek</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-teal-800">E-pošta</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium text-teal-800">Zadeva</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium text-teal-800">Sporočilo</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500" required></textarea>
                  </div>
                  
                  <Button type="submit" variant="teal" className="w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Pošiljanje...' : formStatus === 'success' ? 'Poslano!' : 'Pošlji sporočilo'}
                  </Button>
                  
                  {formStatus === 'success' && <p className="text-green-600 text-center font-medium animate-fade-in">
                      Vaše sporočilo je bilo uspešno poslano. Hvala!
                    </p>}
                  
                  {formStatus === 'error' && <p className="text-red-600 text-center font-medium animate-fade-in">
                      Prišlo je do napake. Poskusite znova.
                    </p>}
                </form>
              </Card>
            </AnimatedWrapper>
          </div>
        </div>
      </Section>
      
      <Section id="location-map" className="pb-24" animation="fade-in">
        <AnimatedWrapper animation="zoom-in" delay={300}>
          <Card className="glass-card overflow-hidden shadow-md h-[400px] relative max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.3333936849866!2d15.637945912413895!3d46.55484246280721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f778fb02fd879%3A0x13b1d05e2cf13a3c!2sAvtomobilska%20ulica%2025%2C%202000%20Maribor!5e0!3m2!1sen!2ssi!4v1717270120012!5m2!1sen!2ssi&maptype=satellite" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokacija Zavetišča za živali Maribor"></iframe>
          </Card>
        </AnimatedWrapper>
      </Section>
    </Layout>;
}
