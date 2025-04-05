
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { SearchResults } from "./SearchResults";
import { searchContent, SearchResult } from "@/services/searchService";
import { Input } from "@/components/ui/input";
import { useOnClickOutside } from "@/hooks/use-click-outside";

type SearchBarProps = {
  searchActive: boolean;
  onClose?: () => void;
};

export const SearchBar = ({ searchActive, onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Close results when clicking outside
  useOnClickOutside(searchRef, () => {
    setShowResults(false);
  });
  
  // Focus input when search bar becomes active
  useEffect(() => {
    if (searchActive && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [searchActive]);
  
  // Handle search
  const handleSearch = (value: string) => {
    setQuery(value);
    
    // Clear previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    
    // If input is empty, clear results
    if (!value.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }
    
    // Set loading state
    setIsLoading(true);
    setShowResults(true);
    
    // Debounce search for better performance
    searchTimeout.current = setTimeout(() => {
      const searchResults = searchContent(value);
      setResults(searchResults);
      setIsLoading(false);
    }, 300);
  };
  
  const handleClearSearch = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  const handleResultClick = () => {
    setShowResults(false);
    setQuery("");
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <div 
      className={`container mx-auto px-4 overflow-hidden transition-all duration-300 ${
        searchActive ? "max-h-16 opacity-100 py-4" : "max-h-0 opacity-0"
      }`}
      ref={searchRef}
    >
      <div className="relative">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" 
        />
        
        <Input 
          ref={inputRef}
          type="text" 
          placeholder="Išči..." 
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full py-2 px-4 pl-10 pr-10 rounded-lg border border-teal-200 bg-white text-teal-800 placeholder-teal-400 focus-visible:border-teal-500 focus-visible:ring-1 focus-visible:ring-teal-500 outline-none transition-normal"
        />
        
        {query && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-600 p-1"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
        
        {/* Results dropdown */}
        {showResults && (
          <div className="absolute left-0 right-0 top-full mt-1 z-50">
            <SearchResults 
              results={results}
              query={query}
              isLoading={isLoading}
              onResultClick={handleResultClick}
              onClearSearch={handleClearSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};
