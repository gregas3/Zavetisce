
import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  searchActive: boolean;
};

export const SearchBar = ({ searchActive }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`container mx-auto px-4 overflow-hidden transition-all duration-300 ${
      searchActive ? "max-h-16 opacity-100 py-4" : "max-h-0 opacity-0"
    }`}>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Išči..." 
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full py-2 px-4 pl-10 rounded-lg border border-teal-200 bg-white text-teal-800 placeholder-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-normal" 
        />
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" 
        />
      </div>
    </div>
  );
};
