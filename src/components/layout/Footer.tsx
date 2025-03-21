
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A3B3A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zavetišče za živali Maribor</h3>
            <p className="text-gray-300 mb-4">
              Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in 
              odvzetim živalim.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/zavetiscemaribor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/zavetiscemaribor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Second Column - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Avtomobilska ulica 25, 2000 Maribor, Slovenija</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-400 flex-shrink-0" />
                <a href="tel:+38640880839" className="hover:text-teal-400 transition-colors">
                  +386 40 880 839
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@zavetisce-mb.si" className="hover:text-teal-400 transition-colors">
                  info@zavetisce-mb.si
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Povezave</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/posvojitev/psi" className="hover:text-teal-400 transition-colors">
                  Posvojitev psov
                </Link>
              </li>
              <li>
                <Link to="/posvojitev/mačke" className="hover:text-teal-400 transition-colors">
                  Posvojitev mačk
                </Link>
              </li>
              <li>
                <Link to="/izgubljeni-najdeni" className="hover:text-teal-400 transition-colors">
                  Izgubljene/najdene živali
                </Link>
              </li>
              <li>
                <Link to="/prostovoljstvo" className="hover:text-teal-400 transition-colors">
                  Prostovoljstvo
                </Link>
              </li>
              <li>
                <Link to="/donacije" className="hover:text-teal-400 transition-colors">
                  Donacije
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zavetišče za živali Maribor. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
