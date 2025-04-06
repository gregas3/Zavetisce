
import React from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from "@/components/ui/card";
import TikTokIcon from "@/components/shared/TikTokIcon";

interface CatContactInfoProps {
  name: string;
  contactInfo: {
    phone: string;
    email: string;
  };
}

const CatContactInfo = ({ 
  name, 
  contactInfo
}: CatContactInfoProps) => {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>Kontakt</CardTitle>
        <CardDescription>
          Za več informacij o mački {name} nas kontaktirajte
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Phone className="h-4 w-4" />
          </Button>
          <div>
            <p className="text-sm text-muted-foreground">Telefon</p>
            <p className="font-medium">{contactInfo.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Mail className="h-4 w-4" />
          </Button>
          <div>
            <p className="text-sm text-muted-foreground">E-pošta</p>
            <p className="font-medium">{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5 mt-4 pt-4 border-t">
          <a href="https://www.facebook.com/profile.php?id=100064510547105" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full p-3 bg-background hover:bg-secondary transition-colors w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/zavetisce_za_zivali_maribor/" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full p-3 bg-background hover:bg-secondary transition-colors w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@zavetisce" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full p-3 bg-background hover:bg-secondary transition-colors w-12 h-12">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatContactInfo;
