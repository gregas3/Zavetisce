
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share, Facebook, MessageSquare, Mail, Twitter, Copy, X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface ShareModalProps {
  animalName: string;
  animalType: 'pes' | 'mačka';
  animalId: number;
  trigger?: React.ReactNode;
}

const ShareModal = ({ animalName, animalType, animalId, trigger }: ShareModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const path = animalType === 'pes' ? 'psi' : 'mačke';
    return `${baseUrl}/posvojitev/${path}/${animalId}`;
  };

  const shareUrl = getShareUrl();
  const shareText = `Spoznajte ${animalName}, ${animalType === 'pes' ? 'psa' : 'mačko'}, ki išče nov dom v Zavetišču za živali Maribor.`;

  const handleShare = (platform: string) => {
    let shareLink = '';
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent(`Žival za posvojitev: ${animalName}`)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
        break;
      case 'sms':
        shareLink = `sms:?body=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          toast({
            title: "Povezava kopirana",
            description: "Povezava do profila živali je bila kopirana v odložišče."
          });
        });
        setIsOpen(false);
        return;
      default:
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank');
    }
    
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/70 hover:bg-white absolute top-3 right-3 z-10"
            aria-label="Deli žival"
          >
            <Share className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deli profil živali: {animalName}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="h-8 w-8 text-blue-600" />
            <span className="text-xs">Facebook</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="h-8 w-8 text-sky-500" />
            <span className="text-xs">Twitter</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('whatsapp')}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
              <path d="M27.3 4.7C24.4 1.8 20.5 0 16.3 0C7.5 0 0.3 7.2 0.3 16C0.3 18.8 1.1 21.6 2.5 24L0.2 32L8.4 29.7C10.7 31 13.5 31.7 16.3 31.7C25.1 31.7 32.3 24.5 32.3 15.7C32.3 11.5 30.2 7.6 27.3 4.7ZM16.3 29C13.9 29 11.6 28.4 9.5 27.2L9 27L4 28.4L5.4 23.5L5.2 23C3.9 20.8 3.2 18.4 3.2 16C3.2 8.7 9 2.9 16.3 2.9C19.8 2.9 23.1 4.4 25.5 6.8C27.9 9.2 29.4 12.5 29.4 16C29.4 23.3 23.6 29 16.3 29ZM23.5 19.4C23.1 19.2 21.1 18.2 20.7 18.1C20.3 18 20.1 17.9 19.8 18.3C19.5 18.7 18.8 19.6 18.5 19.9C18.3 20.2 18 20.2 17.6 20C15.3 19 13.7 18 12.1 15.5C11.7 14.8 12.5 14.9 13.3 13.3C13.4 13 13.3 12.8 13.2 12.6C13.1 12.4 12.4 10.4 12 9.6C11.7 8.9 11.3 9 11 9C10.8 9 10.5 9 10.3 9C10 9 9.5 9.1 9.2 9.5C8.8 9.9 7.7 10.9 7.7 12.9C7.7 14.9 9.2 16.9 9.4 17.2C9.7 17.5 12.3 21.5 16.2 23.2C19 24.5 20.1 24.6 21.5 24.4C22.3 24.3 24 23.4 24.4 22.5C24.8 21.5 24.8 20.7 24.7 20.6C24.6 20.4 24.3 20.3 23.9 20.1L23.5 19.4Z" fill="currentColor"/>
            </svg>
            <span className="text-xs">WhatsApp</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('sms')}
          >
            <MessageSquare className="h-8 w-8 text-gray-600" />
            <span className="text-xs">SMS</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('email')}
          >
            <Mail className="h-8 w-8 text-red-500" />
            <span className="text-xs">Email</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center gap-2 h-auto py-4"
            onClick={() => handleShare('copy')}
          >
            <Copy className="h-8 w-8 text-gray-500" />
            <span className="text-xs">Kopiraj</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
