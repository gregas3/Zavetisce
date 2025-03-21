
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1A3B3A] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zavetišče za živali Maribor</h3>
            <p className="text-gray-300 mb-4">
              Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in 
              odvzetim živalim.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link to="https://facebook.com" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="mailto:info@zavetisce-mb.si" aria-label="Email" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-300 mt-0.5" />
                <span className="text-gray-300">
                  Avtomobilska ulica 25, 2000 Maribor, Slovenija
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+386 40 880 839</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-300" />
                <a href="mailto:info@zavetisce-mb.si" className="text-gray-300 hover:text-primary transition-colors">
                  info@zavetisce-mb.si
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Povezave</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/posvojitev/psi" className="hover:text-primary transition-colors">Posvojitve</Link>
              </li>
              <li>
                <Link to="/izgubljeni-najdeni" className="hover:text-primary transition-colors">Izgubljene živali</Link>
              </li>
              <li>
                <Link to="/prostovoljstvo" className="hover:text-primary transition-colors">Prostovoljstvo</Link>
              </li>
              <li>
                <Link to="/donacije" className="hover:text-primary transition-colors">Donacije</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Zavetišče za živali Maribor. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
