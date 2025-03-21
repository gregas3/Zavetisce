
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { syncDogData } from "@/utils/dogUtils";
import Layout from "@/components/layout/Layout";
import DogProfileSkeleton from "@/components/dogs/DogProfileSkeleton";
import DogProfileError from "@/components/dogs/DogProfileError";
import DogProfileContent from "@/components/dogs/DogProfileContent";
import { fetchDogById } from "@/services/dogService";

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: dog, isLoading, error } = useQuery({
    queryKey: ["dog", id],
    queryFn: () => fetchDogById(id || ""),
    enabled: !!id,
  });

  if (isLoading) {
    return <DogProfileSkeleton />;
  }

  if (error || !dog) {
    return <DogProfileError />;
  }

  if (dog && dog.images.length > 0) {
    syncDogData(parseInt(dog.id), dog.images[0]);
  }

  return (
    <Layout>
      <Helmet>
        <title>{dog.name} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${dog.name} - ${dog.breed}, ${dog.age}. ${dog.description}`} />
      </Helmet>

      <main className="pt-20 pb-10">
        <DogProfileContent dog={dog} />
      </main>
    </Layout>
  );
};

export default DogProfile;
