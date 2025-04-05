
import { cats } from "@/data/catsData";
import { dogs } from "@/data/dogsData";

export type SearchResultType = "dog" | "cat" | "page" | "article";

export interface SearchResult {
  id: string | number;
  title: string;
  description: string;
  type: SearchResultType;
  url: string;
  image?: string;
  category?: string;
  tags?: string[];
}

// Static pages for search
const pages: SearchResult[] = [
  {
    id: "posvojitev-postopek",
    title: "Postopek posvojitve",
    description: "Informacije o postopku posvojitve živali iz zavetišča.",
    type: "page",
    url: "/posvojitev/postopek",
    category: "posvojitev"
  },
  {
    id: "prostozivece-macke",
    title: "Prostoživeče mačke",
    description: "Informacije o prostoživeči mačkah in programu za njihovo oskrbo.",
    type: "page",
    url: "/prostozivece-macke",
    category: "mačke"
  },
  {
    id: "izgubljeni-najdeni",
    title: "Izgubljene in najdene živali",
    description: "Prijavite izgubljene ali najdene živali v naši bazi podatkov.",
    type: "page",
    url: "/izgubljeni-najdeni",
    category: "izgubljene-najdene"
  },
  {
    id: "prostovoljstvo",
    title: "Prostovoljstvo",
    description: "Postanite prostovoljec in pomagajte živalim v zavetišču.",
    type: "page",
    url: "/prostovoljstvo",
    category: "pomoč"
  },
  {
    id: "donacije",
    title: "Donacije",
    description: "Podprite zavetišče z donacijo in pomagajte živalim v stiski.",
    type: "page",
    url: "/donacije",
    category: "pomoč"
  },
  {
    id: "o-nas",
    title: "O nas",
    description: "Spoznajte zavetišče za živali Maribor in naše poslanstvo.",
    type: "page",
    url: "/o-nas",
    category: "info"
  },
  {
    id: "veterinarski-koticek",
    title: "Veterinarski kotiček",
    description: "Nasveti in informacije od naših veterinarjev.",
    type: "page",
    url: "/about/veterinarski-koticek",
    category: "info"
  },
  {
    id: "oskrba-zivali",
    title: "Oskrba živali",
    description: "Informacije o oskrbi živali v zavetišču.",
    type: "page",
    url: "/about/oskrba-zivali",
    category: "info"
  },
];

// Convert animal data to search results format
const dogResults: SearchResult[] = dogs.map(dog => ({
  id: dog.id,
  title: dog.name,
  description: dog.description,
  type: "dog",
  url: `/posvojitev/psi/${dog.id}`,
  image: dog.image,
  category: "psi",
  tags: [...dog.characteristics, dog.breed, dog.gender, dog.size]
}));

const catResults: SearchResult[] = cats.map(cat => ({
  id: cat.id,
  title: cat.name,
  description: cat.description,
  type: "cat",
  url: `/posvojitev/mačke/${cat.id}`,
  image: cat.image,
  category: "mačke",
  tags: [...cat.characteristics, cat.color, cat.gender]
}));

// Combine all searchable content
const allSearchableContent: SearchResult[] = [
  ...dogResults,
  ...catResults,
  ...pages,
];

export function searchContent(query: string, filters?: { type?: SearchResultType[] }): SearchResult[] {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  // Simple search function that checks title, description, and tags
  let results = allSearchableContent.filter(item => {
    // Check title
    if (item.title.toLowerCase().includes(normalizedQuery)) return true;
    
    // Check description
    if (item.description.toLowerCase().includes(normalizedQuery)) return true;
    
    // Check category
    if (item.category?.toLowerCase().includes(normalizedQuery)) return true;
    
    // Check tags
    if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) return true;
    
    return false;
  });
  
  // Apply filters if provided
  if (filters?.type && filters.type.length > 0) {
    results = results.filter(item => filters.type!.includes(item.type));
  }
  
  // Return maximum 20 results
  return results.slice(0, 20);
}

// Function to highlight query matches in text
export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) return text;
  
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedText = text.toLowerCase();
  
  // Find the index of the query in the text
  const index = normalizedText.indexOf(normalizedQuery);
  if (index === -1) return text;
  
  // Extract the matched part using the original text's casing
  const before = text.substring(0, index);
  const match = text.substring(index, index + query.length);
  const after = text.substring(index + query.length);
  
  return `${before}<mark class="bg-yellow-200 text-teal-800 px-0.5 rounded-sm">${match}</mark>${after}`;
}
