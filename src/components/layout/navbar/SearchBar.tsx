
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Loader2 } from "lucide-react";
import { searchAnimals, getAnimalProfileUrl, getSearchUrl } from "@/utils/searchUtils";

type SearchBarProps = {
  searchActive: boolean;
};

export const SearchBar = ({ searchActive }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    try {
      // Simulate a small delay for better UX
      const results = searchAnimals(query);
      
      setTimeout(() => {
        setIsSearching(false);
        
        if (results.length === 0) {
          // No results, navigate to search page with query
          navigate(getSearchUrl(query));
        } else if (results.length === 1) {
          // Single result, navigate directly to animal profile
          navigate(getAnimalProfileUrl(results[0]));
        } else {
          // Multiple results, navigate to search page
          navigate(getSearchUrl(query));
        }
        
        // Reset query after navigation
        setQuery("");
      }, 300);
    } catch (error) {
      console.error("Search error:", error);
      setIsSearching(false);
      
      // Navigate to search page even on error
      navigate(getSearchUrl(query));
      setQuery("");
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className={`container mx-auto px-4 overflow-hidden transition-all duration-300 ${
      searchActive ? "max-h-16 opacity-100 py-4" : "max-h-0 opacity-0"
    }`}>
      <form onSubmit={handleSearch} className="relative">
        <input 
          type="text" 
          placeholder="Išči..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 px-4 pl-10 pr-10 rounded-lg border border-teal-200 bg-white text-teal-800 placeholder-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-normal" 
        />
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" 
        />
        
        {isSearching ? (
          <Loader2 
            size={18} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 animate-spin" 
          />
        ) : query ? (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-700"
          >
            <X size={18} />
          </button>
        ) : null}
      </form>
    </div>
  );
};
