import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-soft-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Zavetišče za živali Maribor</h3>
            <p className="text-muted-foreground">
              Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in odvzetim živalim.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/zavetisce.maribor"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-normal"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/zavetiscemaribor"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-normal"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:info@zavetisce-mb.si"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-normal"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Avtomobilska ulica 25, 2000 Maribor, Slovenija
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+38640880839"
                  className="text-muted-foreground hover:text-primary transition-normal"
                >
                  +386 40 880 839
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@zavetisce-mb.si"
                  className="text-muted-foreground hover:text-primary transition-normal"
                >
                  info@zavetisce-mb.si
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Povezani</h3>
            <div className="space-y-2">
              <Link 
                to="/posvojitev/psi" 
                className="block text-muted-foreground hover:text-primary transition-normal"
              >
                Psi za posvojitev
              </Link>
              <Link 
                to="/posvojitev/mačke" 
                className="block text-muted-foreground hover:text-primary transition-normal"
              >
                Mačke za posvojitev
              </Link>
              <Link 
                to="/izgubljeni-najdeni" 
                className="block text-muted-foreground hover:text-primary transition-normal"
              >
                Izgubljeni in najdeni
              </Link>
              <Link 
                to="/prostovoljstvo" 
                className="block text-muted-foreground hover:text-primary transition-normal"
              >
                Prostovoljstvo
              </Link>
              <Link 
                to="/donacije" 
                className="block text-muted-foreground hover:text-primary transition-normal"
              >
                Donacije
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Delovni čas</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex justify-between">
                <span>Ponedeljek - Petek:</span>
                <span>10:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sobota:</span>
                <span>10:00 - 16:00</span>
              </p>
              <p className="flex justify-between">
                <span>Nedelja:</span>
                <span>10:00 - 14:00</span>
              </p>
              <p className="flex justify-between">
                <span>Prazniki:</span>
                <span>10:00 - 14:00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Zavetišče za živali Maribor. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
}
