
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type DonationAmount = 5 | 10 | 20 | 50 | "custom";

const CardDonationForm = () => {
  const [amount, setAmount] = useState<number>(10);
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount>(10);
  const [animalName, setAnimalName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDonationAmountClick = (value: DonationAmount) => {
    setSelectedAmount(value);
    if (value !== "custom") {
      setAmount(value);
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    } else {
      setAmount(0);
    }
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (amount <= 0) {
      toast({
        title: "Napaka pri znesku",
        description: "Prosimo, vnesite veljaven donacijski znesek.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Here we would normally call a Stripe-initialized checkout
      // For demo purposes, we're just showing a success message
      setTimeout(() => {
        toast({
          title: "Hvala za vašo donacijo!",
          description: `Uspešno ste donirali ${amount}€${animalName ? ` za ${animalName}` : ""}.`,
        });
        setIsProcessing(false);
        setIsDialogOpen(false);
        setAnimalName("");
        setAmount(10);
        setSelectedAmount(10);
      }, 1500);
    } catch (error) {
      toast({
        title: "Napaka pri obdelavi plačila",
        description: "Prišlo je do napake. Prosimo, poskusite znova.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-6 bg-[#f3fbef] p-6 rounded-lg border border-[#e4f4df]">
      <h3 className="text-lg font-semibold mb-3">Doniraj s kartico</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Donirajte enostavno s svojo kartico – hitro, varno in neposredno preko spleta.
      </p>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="teal" className="w-full sm:w-auto">
            <CreditCard className="mr-2 h-4 w-4" />
            Doniraj zdaj
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Donacija zavetišču</DialogTitle>
            <DialogDescription>
              S svojo donacijo boste pomagali živalim v našem zavetišču. Hvala!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDonationSubmit}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Izberite znesek donacije</Label>
                <div className="flex flex-wrap gap-2">
                  {[5, 10, 20, 50].map((value) => (
                    <Button 
                      key={value} 
                      type="button"
                      variant={selectedAmount === value ? "default" : "outline"}
                      onClick={() => handleDonationAmountClick(value as DonationAmount)}
                      className="flex-1"
                    >
                      {value}€
                    </Button>
                  ))}
                  <Button
                    type="button" 
                    variant={selectedAmount === "custom" ? "default" : "outline"}
                    onClick={() => handleDonationAmountClick("custom")}
                    className="flex-1"
                  >
                    Po meri
                  </Button>
                </div>
                
                {selectedAmount === "custom" && (
                  <div className="pt-2">
                    <Label htmlFor="customAmount">Vnesite znesek</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      min="1"
                      step="any"
                      className="mt-1"
                      placeholder="EUR"
                      onChange={handleCustomAmountChange}
                      autoFocus
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="animalName" className="text-sm">
                  Za specifično žival (opcijsko)
                </Label>
                <Input
                  id="animalName"
                  placeholder="Vnesite ime živali"
                  value={animalName}
                  onChange={(e) => setAnimalName(e.target.value)}
                />
              </div>
              
              <div className="rounded-md bg-amber-50 p-3 mt-2">
                <p className="text-sm text-amber-800">
                  Skupni znesek: <span className="font-bold">{amount}€</span>
                </p>
              </div>
              
              <div className="text-xs text-muted-foreground mt-1">
                Za plačilo boste preusmerjeni na varno Stripe stran.
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                disabled={isProcessing}
              >
                Prekliči
              </Button>
              
              <Button
                type="submit"
                disabled={isProcessing}
                className="relative"
              >
                {isProcessing ? "Obdelava..." : "Nadaljuj na plačilo"}
                {isProcessing && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardDonationForm;
