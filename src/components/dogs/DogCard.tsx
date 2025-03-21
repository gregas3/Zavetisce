
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DogImageCarousel from "@/components/dogs/DogImageCarousel";
import { Dog } from "@/data/dogsData";

interface DogCardProps {
  dog: Dog;
}

const DogCard = ({ dog }: DogCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/posvojitev/psi/${dog.id}`);
  };
  
  // Create an array of images for the carousel
  const dogImages = Array.isArray(dog.images) ? dog.images : [dog.image];
  
  return (
    <Card 
      className="overflow-hidden group hover-lift transition-normal h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <DogImageCarousel 
          dogName={dog.name}
          images={dogImages}
          dogId={dog.id}
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-normal">
            {dog.name}
          </h3>
          <Badge variant={dog.gender === 'samec' ? 'default' : 'secondary'}>
            {dog.gender}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          {dog.breed} • {dog.age} • {dog.size}
        </div>
        <p className="line-clamp-3 mb-4 text-muted-foreground">
          {dog.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {dog.characteristics.slice(0, 3).map((char, i) => (
            <Badge key={i} variant="outline" className="bg-primary/5">
              {char}
            </Badge>
          ))}
          {dog.characteristics.length > 3 && (
            <Badge variant="outline" className="bg-primary/5">
              +{dog.characteristics.length - 3}
            </Badge>
          )}
        </div>
        <Button asChild className="w-full">
          <Link to={`/posvojitev/psi/${dog.id}`} onClick={(e) => e.stopPropagation()}>
            Več informacij
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DogCard;
