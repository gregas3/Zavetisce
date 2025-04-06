
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Copy, Facebook, MessageCircle, Mail, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ShareOption {
  name: string;
  icon: React.ReactNode;
  color: string;
  action: (url: string, text: string) => void;
}

interface ShareAnimalDialogProps {
  animalName: string;
  animalType: "pes" | "mačka";
  animalId: number | string;
  triggerClassName?: string;
}

const ShareAnimalDialog = ({
  animalName,
  animalType,
  animalId,
  triggerClassName,
}: ShareAnimalDialogProps) => {
  const { toast } = useToast();
  const url = `${window.location.origin}/posvojitev/${animalType === "pes" ? "psi" : "mačke"}/${animalId}`;
  const text = `Spoznajte ${animalName}, ${animalType === "pes" ? "psa" : "mačko"}, ki išče nov dom v Zavetišču za živali Maribor.`;

  const shareOptions: ShareOption[] = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      color: "bg-blue-600",
      action: (url) => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
      },
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
      action: () => {
        toast({
          title: "Instagram Sharing",
          description: "Kopirajte povezavo in jo delite preko Instagram zgodbe.",
        });
        navigator.clipboard.writeText(url);
      },
    },
    {
      name: "X",
      icon: <X size={20} />,
      color: "bg-black",
      action: (url, text) => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
      },
    },
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      color: "bg-green-500",
      action: (url, text) => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`);
      },
    },
    {
      name: "Viber",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.7 11c.4-.8.9-1.2 1.5-1.2h.3c1.1 0 2.7.6 2.7 1.8 0 .9-.6 1.4-1.2 1.9-.5.5-1.1.9-1.1 1.5 0 .4.3.7.7.7h.1"></path>
          <path d="M12 19h.01"></path>
          <path d="M19.4 15c-.8.8-1.7 1.2-2.8 1.3-5.7.4-8.6-2.5-9.4-8.3C6.8 2.6 9 .5 14.3.1c5.7-.4 8.6 2.5 9.4 8.3.1.6 0 1.3-.1 1.9"></path>
        </svg>
      ),
      color: "bg-purple-700",
      action: (url, text) => {
        window.open(`viber://forward?text=${encodeURIComponent(text + " " + url)}`);
      },
    },
    {
      name: "SMS",
      icon: <MessageCircle size={20} />,
      color: "bg-blue-400",
      action: (url, text) => {
        window.open(`sms:?body=${encodeURIComponent(text + " " + url)}`);
      },
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      color: "bg-red-500",
      action: (url, text) => {
        window.open(`mailto:?subject=Posvojite ${animalName}&body=${encodeURIComponent(text + "\n\n" + url)}`);
      },
    },
    {
      name: "Kopiraj",
      icon: <Copy size={20} />,
      color: "bg-gray-600",
      action: (url) => {
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: "Povezava kopirana",
            description: "Povezava do profila živali je bila kopirana v odložišče."
          });
        });
      },
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-white/90 hover:bg-white border border-gray-100 shadow-md ${triggerClassName}`}
        >
          <Share2 className="h-[18px] w-[18px] text-gray-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deli profil: {animalName}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {shareOptions.map((option) => (
              <Button
                key={option.name}
                variant="outline"
                onClick={() => option.action(url, text)}
                className={`flex flex-col items-center space-y-1 p-3 h-[80px] w-[80px] ${option.color} text-white hover:opacity-90 hover:text-white border-none`}
                aria-label={`Share on ${option.name}`}
              >
                <span className="p-1">{option.icon}</span>
                <span className="text-xs font-medium">{option.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareAnimalDialog;
