
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Euro } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function CardDonationForm() {
  const [amount, setAmount] = useState<string>("20");
  const [animalName, setAnimalName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This function would process the payment with Stripe
    // For now we'll just show a toast notification
    setIsLoading(true);
    
    try {
      // Here you would make a call to your backend to create a Stripe checkout session
      // const response = await fetch('/api/create-checkout-session', {...})
      
      // For demonstration, simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Hvala za vašo donacijo!",
        description: `Vaš prispevek v višini ${amount}€ je v obdelavi.`,
      });
      
      // Reset form
      setAmount("20");
      setAnimalName("");
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Napaka pri plačilu",
        description: "Prišlo je do napake pri obdelavi plačila. Prosimo, poskusite znova.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const predefinedAmounts = [10, 20, 50, 100];

  return (
    <form onSubmit={handleDonation} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="donation-amount">Izberite znesek donacije</Label>
        <div className="grid grid-cols-4 gap-2">
          {predefinedAmounts.map((presetAmount) => (
            <Button
              key={presetAmount}
              type="button"
              variant={amount === presetAmount.toString() ? "primary" : "outline"}
              onClick={() => setAmount(presetAmount.toString())}
              className="flex items-center justify-center"
            >
              {presetAmount}€
            </Button>
          ))}
        </div>
        <div className="mt-2 relative">
          <Input
            id="donation-amount"
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="pl-8"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Euro className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="animal-name">Ime živali (neobvezno)</Label>
        <Input
          id="animal-name"
          type="text"
          placeholder="Če donirate za specifično žival"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Če želite donirati sredstva za specifično žival, vpišite njeno ime.
        </p>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        variant="primary"
        disabled={isLoading || !amount || Number(amount) <= 0}
      >
        <CreditCard className="mr-2 h-4 w-4" /> 
        {isLoading ? "Obdelava..." : "Doniraj s kartico"}
      </Button>
    </form>
  );
}
