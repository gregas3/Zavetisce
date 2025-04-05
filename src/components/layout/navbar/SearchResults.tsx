
import { useNavigate } from "react-router-dom";
import { Cat, Dog, File, X } from "lucide-react";
import { SearchResult, highlightMatch } from "@/services/searchService";
import { Button } from "@/components/ui/button";
import { EmptySearchState } from "./EmptySearchState";

type SearchResultsProps = {
  results: SearchResult[];
  query: string;
  isLoading: boolean;
  onResultClick: () => void;
  onClearSearch: () => void;
  groupByCategory?: boolean;
};

export const SearchResults = ({
  results,
  query,
  isLoading,
  onResultClick,
  onClearSearch,
  groupByCategory = true
}: SearchResultsProps) => {
  const navigate = useNavigate();
  
  // Get unique categories
  const categories = groupByCategory && results.length > 0
    ? Array.from(new Set(results.map(result => result.category || "Ostalo")))
    : [];
  
  const getIconForType = (type: string) => {
    switch (type) {
      case "dog":
        return <Dog className="w-4 h-4 text-teal-500" />;
      case "cat":
        return <Cat className="w-4 h-4 text-teal-500" />;
      default:
        return <File className="w-4 h-4 text-teal-500" />;
    }
  };
  
  const handleResultClick = (url: string) => {
    navigate(url);
    onResultClick();
  };
  
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 max-h-[70vh] overflow-y-auto">
        <div className="animate-pulse space-y-2">
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }
  
  if (results.length === 0 && query.trim()) {
    return (
      <div className="bg-white rounded-lg shadow-lg max-h-[70vh] overflow-y-auto">
        <EmptySearchState query={query} onClearSearch={onClearSearch} />
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-h-[70vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <p className="text-teal-800 font-medium">
          {results.length} {results.length === 1 ? 'zadetek' : results.length < 5 ? 'zadetki' : 'zadetkov'} za "{query}"
        </p>
        <Button variant="ghost" size="sm" onClick={onClearSearch} className="text-teal-600 hover:text-teal-700">
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      {groupByCategory ? (
        categories.map(category => {
          const categoryResults = results.filter(r => (r.category || "Ostalo") === category);
          return (
            <div key={category} className="mb-4">
              <h4 className="text-xs uppercase text-teal-600 font-semibold tracking-wide mb-2">{category}</h4>
              <div className="space-y-2">
                {categoryResults.map(result => (
                  <div 
                    key={`${result.type}-${result.id}`}
                    className="p-2 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors"
                    onClick={() => handleResultClick(result.url)}
                  >
                    <div className="flex items-start gap-3">
                      {result.image ? (
                        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={result.image} 
                            alt={result.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-md bg-teal-100 flex items-center justify-center flex-shrink-0">
                          {getIconForType(result.type)}
                        </div>
                      )}
                      <div className="overflow-hidden">
                        <h4 className="font-medium text-teal-800 truncate" 
                          dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }}>
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: highlightMatch(result.description, query) }}>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="space-y-2">
          {results.map(result => (
            <div 
              key={`${result.type}-${result.id}`}
              className="p-2 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors"
              onClick={() => handleResultClick(result.url)}
            >
              <div className="flex items-start gap-3">
                {result.image ? (
                  <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={result.image} 
                      alt={result.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-md bg-teal-100 flex items-center justify-center flex-shrink-0">
                    {getIconForType(result.type)}
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-teal-800" 
                    dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }}>
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: highlightMatch(result.description, query) }}>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
