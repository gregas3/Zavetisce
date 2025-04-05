
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Facebook, 
  Copy, 
  X, 
  Mail, 
  MessageSquare,
  Instagram
} from "lucide-react";
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
      case 'instagram':
        // Instagram doesn't have direct sharing URL, but we can show toast with instructions
        toast({
          title: "Instagram",
          description: "Kopiraj povezavo in jo deli na Instagramu.",
        });
        navigator.clipboard.writeText(shareUrl);
        setIsOpen(false);
        return;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'viber':
        shareLink = `viber://forward?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
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
            className="rounded-full bg-white/70 hover:bg-white absolute top-3 right-3 z-10 shadow-sm border border-gray-200"
            aria-label="Deli žival"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-xl p-0 gap-0 bg-white border-none shadow-xl">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-center text-lg">Deli profil živali: {animalName}</DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground">
            Izberi način deljenja profila
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-3 p-6">
          <ShareButton 
            platform="facebook" 
            icon={<Facebook className="h-8 w-8 text-[#1877F2]" />} 
            label="Facebook"
            onClick={() => handleShare('facebook')} 
          />
          
          <ShareButton 
            platform="twitter" 
            icon={<X className="h-8 w-8 text-black" />} 
            label="X"
            onClick={() => handleShare('twitter')} 
          />
          
          <ShareButton 
            platform="instagram" 
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="8.33%" stopColor="#FCAF45" />
                  <stop offset="16.67%" stopColor="#F77737" />
                  <stop offset="25%" stopColor="#F56040" />
                  <stop offset="33.33%" stopColor="#FD1D1D" />
                  <stop offset="41.67%" stopColor="#E1306C" />
                  <stop offset="50%" stopColor="#C13584" />
                  <stop offset="58.33%" stopColor="#833AB4" />
                  <stop offset="66.67%" stopColor="#5851DB" />
                  <stop offset="75%" stopColor="#405DE6" />
                  <stop offset="83.33%" stopColor="#5851DB" />
                  <stop offset="91.67%" stopColor="#833AB4" />
                  <stop offset="100%" stopColor="#C13584" />
                </linearGradient>
                <path d="M16 3.038c-3.551 0-3.997.015-5.39.079-1.392.064-2.343.285-3.175.609a6.392 6.392 0 0 0-2.305 1.5 6.392 6.392 0 0 0-1.5 2.305c-.324.832-.545 1.783-.609 3.175-.064 1.393-.079 1.839-.079 5.39s.015 3.997.079 5.39c.064 1.392.285 2.343.609 3.175a6.392 6.392 0 0 0 1.5 2.305 6.392 6.392 0 0 0 2.305 1.5c.832.324 1.783.545 3.175.609 1.393.064 1.839.079 5.39.079s3.997-.015 5.39-.079c1.392-.064 2.343-.285 3.175-.609a6.392 6.392 0 0 0 2.305-1.5 6.392 6.392 0 0 0 1.5-2.305c.324-.832.545-1.783.609-3.175.064-1.393.079-1.839.079-5.39s-.015-3.997-.079-5.39c-.064-1.392-.285-2.343-.609-3.175a6.392 6.392 0 0 0-1.5-2.305 6.392 6.392 0 0 0-2.305-1.5c-.832-.324-1.783-.545-3.175-.609-1.393-.064-1.839-.079-5.39-.079zm0 2.355c3.493 0 3.907.014 5.282.077 1.273.058 1.966.271 2.426.45.61.237 1.046.52 1.504.978.458.458.74.894.978 1.504.179.46.392 1.152.45 2.426.063 1.375.077 1.79.077 5.282 0 3.493-.014 3.907-.077 5.282-.058 1.273-.271 1.966-.45 2.426a4.063 4.063 0 0 1-.978 1.504 4.063 4.063 0 0 1-1.504.978c-.46.179-1.152.392-2.426.45-1.375.063-1.789.077-5.282.077-3.493 0-3.907-.014-5.282-.077-1.273-.058-1.966-.271-2.426-.45a4.063 4.063 0 0 1-1.504-.978 4.063 4.063 0 0 1-.978-1.504c-.179-.46-.392-1.152-.45-2.426-.063-1.375-.077-1.79-.077-5.282 0-3.493.014-3.907.077-5.282.058-1.273.271-1.966.45-2.426.237-.61.52-1.046.978-1.504a4.063 4.063 0 0 1 1.504-.978c.46-.179 1.152-.392 2.426-.45 1.375-.063 1.79-.077 5.282-.077z" fill="url(#instagram-gradient)"/>
                <path d="M16.001 21.334a5.335 5.335 0 1 1 0-10.669 5.335 5.335 0 0 1 0 10.669zm0-13.554a8.22 8.22 0 1 0 0 16.44 8.22 8.22 0 0 0 0-16.44zm10.454-.398a1.917 1.917 0 1 1-3.834 0 1.917 1.917 0 0 1 3.834 0z" fill="url(#instagram-gradient)"/>
              </svg>
            }
            label="Instagram"
            onClick={() => handleShare('instagram')}
          />
          
          <ShareButton 
            platform="whatsapp" 
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#25D366]">
                <path d="M27.3 4.7C24.4 1.8 20.5 0 16.3 0C7.5 0 0.3 7.2 0.3 16C0.3 18.8 1.1 21.6 2.5 24L0.2 32L8.4 29.7C10.7 31 13.5 31.7 16.3 31.7C25.1 31.7 32.3 24.5 32.3 15.7C32.3 11.5 30.2 7.6 27.3 4.7ZM16.3 29C13.9 29 11.6 28.4 9.5 27.2L9 27L4 28.4L5.4 23.5L5.2 23C3.9 20.8 3.2 18.4 3.2 16C3.2 8.7 9 2.9 16.3 2.9C19.8 2.9 23.1 4.4 25.5 6.8C27.9 9.2 29.4 12.5 29.4 16C29.4 23.3 23.6 29 16.3 29ZM23.5 19.4C23.1 19.2 21.1 18.2 20.7 18.1C20.3 18 20.1 17.9 19.8 18.3C19.5 18.7 18.8 19.6 18.5 19.9C18.3 20.2 18 20.2 17.6 20C15.3 19 13.7 18 12.1 15.5C11.7 14.8 12.5 14.9 13.3 13.3C13.4 13 13.3 12.8 13.2 12.6C13.1 12.4 12.4 10.4 12 9.6C11.7 8.9 11.3 9 11 9C10.8 9 10.5 9 10.3 9C10 9 9.5 9.1 9.2 9.5C8.8 9.9 7.7 10.9 7.7 12.9C7.7 14.9 9.2 16.9 9.4 17.2C9.7 17.5 12.3 21.5 16.2 23.2C19 24.5 20.1 24.6 21.5 24.4C22.3 24.3 24 23.4 24.4 22.5C24.8 21.5 24.8 20.7 24.7 20.6C24.6 20.4 24.3 20.3 23.9 20.1L23.5 19.4Z" fill="currentColor"/>
              </svg>
            }
            label="WhatsApp"
            onClick={() => handleShare('whatsapp')}
          />
          
          <ShareButton 
            platform="viber" 
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#7360F2]">
                <path d="M16.0007 2.66666C8.63692 2.66666 2.66699 8.35999 2.66699 15.4133C2.66699 18.2667 3.52033 20.9333 5.07359 23.1067C5.24033 23.3333 5.33359 23.6133 5.33359 23.9067V28.96C5.33359 29.6267 6.04033 30.0933 6.66699 29.84L10.4537 28.2667C10.687 28.1867 10.9403 28.1733 11.187 28.24C12.7537 28.72 14.347 28.96 16.0003 28.96C23.367 28.96 29.3337 23.2667 29.3337 16.2133C29.3337 9.15999 23.367 2.66666 16.0007 2.66666ZM21.0003 20.8533C20.747 21.3333 20.4003 21.7733 19.9603 22.1733C19.2937 22.72 18.547 23.0667 17.7337 23.2267C17.267 23.3067 16.8003 23.2533 16.3337 23.2533C15.0803 23.2533 13.8537 22.9333 12.6937 22.3067C11.7203 21.8133 10.8537 21.1467 10.0803 20.3733C9.29359 19.5867 8.61359 18.7067 8.09359 17.7467C7.63359 16.9067 7.32033 16.0267 7.14033 15.12C7.02623 14.5007 7.03238 13.8662 7.15859 13.25C7.28033 12.5333 7.58033 11.8667 8.01359 11.2933C8.57359 10.5467 9.34033 10.1333 10.1871 10.1333C10.4937 10.1333 10.7871 10.2 11.0671 10.32C11.3471 10.4533 11.6003 10.6533 11.787 10.9333L13.1737 13.0667C13.3337 13.3067 13.4537 13.5733 13.507 13.8667C13.5604 14.1333 13.5471 14.4 13.4537 14.6667C13.3604 14.9333 13.2137 15.1733 13.0137 15.3733L12.5203 15.8933C12.4403 15.9733 12.4003 16.08 12.4003 16.2C12.4003 16.32 12.4403 16.4267 12.507 16.5067C12.8537 17.0933 13.2803 17.6133 13.787 18.0533C14.2937 18.4933 14.8403 18.8533 15.4403 19.1467C15.5358 19.198 15.6446 19.2176 15.7536 19.2029C15.8625 19.1881 15.9661 19.1395 16.0537 19.0667L16.6137 18.5067C16.8137 18.2933 17.0537 18.1333 17.3337 18.0533C17.6003 17.96 17.8803 17.9467 18.147 18.0133C18.4137 18.08 18.6803 18.2 18.9203 18.3467L21.2003 19.7733C21.4803 19.9333 21.6937 20.16 21.8137 20.4267C21.9204 20.5607 21.9842 20.7193 22.0006 20.8853C22.017 21.0513 21.9855 21.2184 21.9087 21.3671C21.8319 21.5158 21.7122 21.64 21.5637 21.7244C21.4151 21.8088 21.2445 21.85 21.0703 21.8427C21.0451 21.8447 21.0236 21.8512 20.9997 21.8533L21.0003 20.8533ZM18.947 14.2667C18.8271 14.2659 18.7089 14.2387 18.6003 14.1867C18.4825 14.1338 18.3776 14.0547 18.2935 13.9547C18.2093 13.8546 18.1479 13.7362 18.1137 13.6087C18.0796 13.4811 18.0736 13.3474 18.0962 13.2173C18.1188 13.0873 18.1695 12.9639 18.2445 12.8559C18.3196 12.748 18.4171 12.6582 18.5305 12.5928C18.6439 12.5273 18.7703 12.4878 18.9006 12.4771C19.0309 12.4663 19.1621 12.4846 19.287 12.5307C19.6697 12.6533 19.9403 12.9867 19.9403 13.3867C19.9403 13.632 19.8427 13.8673 19.6692 14.0408C19.4957 14.2143 19.2603 14.3119 19.0151 14.312C19.0083 14.312 19.0018 14.3147 18.9951 14.3147C18.9797 14.3147 18.967 14.2693 18.947 14.2693V14.2667ZM20.947 12.4267C20.8271 12.4258 20.7089 12.3987 20.6003 12.3467C20.3618 12.239 20.1659 12.0428 20.0518 11.7961C19.9377 11.5495 19.9133 11.2704 19.9834 11.0079C20.0535 10.7455 20.2137 10.5169 20.4352 10.3617C20.6567 10.2066 20.9256 10.1347 21.197 10.1587C21.4137 10.1773 21.6207 10.2587 21.7936 10.394C21.9664 10.5294 22.0983 10.7133 22.1742 10.9245C22.2502 11.1358 22.2674 11.3661 22.2237 11.5879C22.18 11.8097 22.0772 12.0136 21.9282 12.1762C21.7792 12.3387 21.5891 12.4542 21.3803 12.5103C21.2398 12.5495 21.0935 12.5602 20.9482 12.5413L20.947 12.4267ZM22.853 11.5467C22.7975 11.5436 22.7428 11.532 22.6903 11.512C22.6123 11.486 22.539 11.4447 22.4742 11.3904C22.4093 11.336 22.3541 11.2696 22.3113 11.1946C22.2685 11.1195 22.2387 11.0372 22.224 10.9515C22.2092 10.8658 22.2097 10.7781 22.2252 10.6926C22.2657 10.5172 22.3662 10.3628 22.5089 10.2574C22.6515 10.152 22.8269 10.103 23.0052 10.1197C23.1834 10.1365 23.3478 10.2179 23.4668 10.3476C23.5859 10.4773 23.6511 10.645 23.6503 10.8187C23.6553 10.9217 23.6379 11.024 23.599 11.1183C23.5601 11.2125 23.5007 11.2965 23.4255 11.365C23.3502 11.4335 23.2609 11.4848 23.1642 11.5152C23.0674 11.5457 22.9655 11.5545 22.8649 11.5412L22.853 11.5467ZM23.7203 19.04C23.7124 19.0771 23.6907 19.1099 23.6593 19.1327C23.6279 19.1555 23.5889 19.1669 23.5491 19.1648C23.5093 19.1628 23.4718 19.1474 23.443 19.1213C23.4143 19.0951 23.3961 19.06 23.3923 19.0215C23.2664 16.7859 22.3079 14.6868 20.73 13.1174C19.152 11.5481 17.0471 10.6005 14.8053 10.4853C14.7654 10.4834 14.7282 10.4673 14.7013 10.4408C14.6743 10.4142 14.6595 10.3793 14.6595 10.3428C14.6595 10.3063 14.6743 10.2714 14.7013 10.2449C14.7282 10.2183 14.7654 10.2022 14.8053 10.2003C17.129 10.3133 19.3107 11.2953 20.9417 12.9313C22.5671 14.5633 23.5391 16.7413 23.6523 19.0467L23.7203 19.04Z" fill="currentColor"/>
              </svg>
            }
            label="Viber"
            onClick={() => handleShare('viber')}
          />
          
          <ShareButton 
            platform="sms" 
            icon={<MessageSquare className="h-8 w-8 text-gray-600" />} 
            label="SMS"
            onClick={() => handleShare('sms')}
          />
          
          <ShareButton 
            platform="email" 
            icon={<Mail className="h-8 w-8 text-red-500" />} 
            label="Email"
            onClick={() => handleShare('email')}
          />
          
          <ShareButton 
            platform="copy" 
            icon={<Copy className="h-8 w-8 text-gray-500" />} 
            label="Kopiraj"
            onClick={() => handleShare('copy')}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface ShareButtonProps {
  platform: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ShareButton = ({ platform, icon, label, onClick }: ShareButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className="flex flex-col items-center justify-center gap-2 h-auto py-4 px-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border-gray-100"
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700">{label}</span>
    </Button>
  );
};

export default ShareModal;
