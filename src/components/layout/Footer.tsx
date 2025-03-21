
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zavetišče za živali Maribor</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in
              odvzetim živalim.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100064510547105" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/zavetisce_za_zivali_maribor/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:zavetisce.mb@snaga-mb.si" className="text-teal-300 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <a 
                href="https://www.google.com/maps/place/Avtomobilska+ulica+25,+2000+Maribor,+Slovenija" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-teal-300 transition-colors"
              >
                <MapPin size={18} className="text-teal-300 shrink-0 mt-1" />
                <p>Avtomobilska ulica 25, 2000 Maribor, Slovenija</p>
              </a>
              <a 
                href="tel:024801660" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Phone size={18} className="text-teal-300 shrink-0" />
                <div>
                  <p>02 480 16 60</p>
                  <p className="text-xs text-gray-400">Telefonska številka</p>
                </div>
              </a>
              <a 
                href="tel:031788822" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Phone size={18} className="text-teal-300 shrink-0" />
                <div>
                  <p>031-788-822</p>
                  <p className="text-xs text-gray-400">Številka za nujne primere</p>
                </div>
              </a>
              <a 
                href="mailto:zavetisce.mb@snaga-mb.si" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Mail size={18} className="text-teal-300 shrink-0" />
                <span>zavetisce.mb@snaga-mb.si</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Povezani</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/posvojitev/psi" className="hover:text-teal-300 transition-colors">
                  Psi za posvojitev
                </Link>
              </li>
              <li>
                <Link to="/posvojitev/mačke" className="hover:text-teal-300 transition-colors">
                  Mačke za posvojitev
                </Link>
              </li>
              <li>
                <Link to="/izgubljeni-najdeni" className="hover:text-teal-300 transition-colors">
                  Izgubljeni in najdeni
                </Link>
              </li>
              <li>
                <Link to="/prostovoljstvo" className="hover:text-teal-300 transition-colors">
                  Prostovoljstvo
                </Link>
              </li>
              <li>
                <Link to="/donacije" className="hover:text-teal-300 transition-colors">
                  Donacije
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Delovni čas</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-300">Ponedeljek - Petek:</p>
                <p className="text-teal-300">10:00 - 18:00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-300">Sobota:</p>
                <p className="text-teal-300">10:00 - 16:00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-300">Nedelja:</p>
                <p className="text-teal-300">10:00 - 14:00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-300">Prazniki:</p>
                <p className="text-teal-300">10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-teal-700" />
        
        <div className="text-center text-gray-400 text-sm">
          © 2025 Zavetišče za živali Maribor. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
}
