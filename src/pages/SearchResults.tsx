
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SearchResult, searchContent } from "@/services/searchService";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Cat, Dog, File } from "lucide-react";
import { EmptySearchState } from "@/components/layout/navbar/EmptySearchState";

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      // Simulate a small delay for loading state
      setTimeout(() => {
        const searchResults = searchContent(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 300);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };
  
  const handleFilterByType = (type: string) => {
    setActiveTab(type);
    
    if (type === "all") {
      setResults(searchContent(query));
    } else if (type === "dogs") {
      setResults(searchContent(query, { type: ["dog"] }));
    } else if (type === "cats") {
      setResults(searchContent(query, { type: ["cat"] }));
    } else if (type === "pages") {
      setResults(searchContent(query, { type: ["page", "article"] }));
    }
  };
  
  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams({});
  };
  
  const getIconForType = (type: string) => {
    switch (type) {
      case "dog":
        return <Dog className="w-5 h-5 text-teal-500" />;
      case "cat":
        return <Cat className="w-5 h-5 text-teal-500" />;
      default:
        return <File className="w-5 h-5 text-teal-500" />;
    }
  };
  
  return (
    <Layout>
      <Helmet>
        <title>{query ? `Rezultati iskanja: ${query}` : "Iskanje"} | Zavetišče za živali Maribor</title>
        <meta name="description" content="Rezultati iskanja po vsebini zavetišča za živali Maribor." />
      </Helmet>
      
      <main className="pt-20 pb-12">
        <Section title={query ? `Rezultati iskanja: ${query}` : "Iskanje"}>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
                <Input
                  type="text"
                  placeholder="Išči po strani..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-4 pl-10 rounded-lg border border-teal-200 bg-white text-teal-800 placeholder-teal-400 focus-visible:border-teal-500 focus-visible:ring-1 focus-visible:ring-teal-500"
                />
                <Button 
                  type="submit" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8"
                >
                  Išči
                </Button>
              </div>
            </form>
            
            {query && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {isLoading ? (
                  <div className="p-8">
                    <div className="animate-pulse space-y-4">
                      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  <Tabs defaultValue="all" value={activeTab} onValueChange={handleFilterByType}>
                    <div className="border-b border-gray-100">
                      <TabsList className="bg-transparent h-12 p-0 w-full flex border-b border-transparent">
                        <TabsTrigger 
                          value="all" 
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-white data-[state=active]:shadow-none h-12"
                        >
                          Vsi rezultati ({searchContent(query).length})
                        </TabsTrigger>
                        <TabsTrigger 
                          value="dogs" 
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-white data-[state=active]:shadow-none h-12"
                        >
                          Psi ({searchContent(query, { type: ["dog"] }).length})
                        </TabsTrigger>
                        <TabsTrigger 
                          value="cats" 
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-white data-[state=active]:shadow-none h-12"
                        >
                          Mačke ({searchContent(query, { type: ["cat"] }).length})
                        </TabsTrigger>
                        <TabsTrigger 
                          value="pages" 
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-white data-[state=active]:shadow-none h-12"
                        >
                          Strani ({searchContent(query, { type: ["page", "article"] }).length})
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="all" className="p-0 m-0">
                      <div className="divide-y divide-gray-100">
                        {results.map((result) => (
                          <a 
                            key={`${result.type}-${result.id}`}
                            href={result.url}
                            className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors"
                          >
                            {result.image ? (
                              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                <img 
                                  src={result.image} 
                                  alt={result.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 rounded bg-teal-100 flex items-center justify-center flex-shrink-0">
                                {getIconForType(result.type)}
                              </div>
                            )}
                            
                            <div>
                              <h3 className="font-medium text-teal-800 mb-1">{result.title}</h3>
                              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{result.description}</p>
                              <div className="flex items-center text-xs text-teal-600">
                                <span className="capitalize">
                                  {result.type === "dog" ? "Pes" : 
                                   result.type === "cat" ? "Mačka" : 
                                   result.type === "page" ? "Stran" : "Članek"}
                                </span>
                                {result.category && (
                                  <>
                                    <span className="mx-1">•</span>
                                    <span>{result.category}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="dogs" className="p-0 m-0">
                      <div className="divide-y divide-gray-100">
                        {results
                          .filter(r => r.type === "dog")
                          .map((result) => (
                            <a 
                              key={`${result.type}-${result.id}`}
                              href={result.url}
                              className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors"
                            >
                              {result.image ? (
                                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                  <img 
                                    src={result.image} 
                                    alt={result.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 rounded bg-teal-100 flex items-center justify-center flex-shrink-0">
                                  <Dog className="w-6 h-6 text-teal-500" />
                                </div>
                              )}
                              
                              <div>
                                <h3 className="font-medium text-teal-800 mb-1">{result.title}</h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{result.description}</p>
                                <div className="flex items-center text-xs text-teal-600">
                                  <span>Pes</span>
                                  {result.category && (
                                    <>
                                      <span className="mx-1">•</span>
                                      <span>{result.category}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="cats" className="p-0 m-0">
                      <div className="divide-y divide-gray-100">
                        {results
                          .filter(r => r.type === "cat")
                          .map((result) => (
                            <a 
                              key={`${result.type}-${result.id}`}
                              href={result.url}
                              className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors"
                            >
                              {result.image ? (
                                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                  <img 
                                    src={result.image} 
                                    alt={result.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 rounded bg-teal-100 flex items-center justify-center flex-shrink-0">
                                  <Cat className="w-6 h-6 text-teal-500" />
                                </div>
                              )}
                              
                              <div>
                                <h3 className="font-medium text-teal-800 mb-1">{result.title}</h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{result.description}</p>
                                <div className="flex items-center text-xs text-teal-600">
                                  <span>Mačka</span>
                                  {result.category && (
                                    <>
                                      <span className="mx-1">•</span>
                                      <span>{result.category}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="pages" className="p-0 m-0">
                      <div className="divide-y divide-gray-100">
                        {results
                          .filter(r => r.type === "page" || r.type === "article")
                          .map((result) => (
                            <a 
                              key={`${result.type}-${result.id}`}
                              href={result.url}
                              className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-16 h-16 rounded bg-teal-100 flex items-center justify-center flex-shrink-0">
                                <File className="w-6 h-6 text-teal-500" />
                              </div>
                              
                              <div>
                                <h3 className="font-medium text-teal-800 mb-1">{result.title}</h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{result.description}</p>
                                <div className="flex items-center text-xs text-teal-600">
                                  <span>{result.type === "page" ? "Stran" : "Članek"}</span>
                                  {result.category && (
                                    <>
                                      <span className="mx-1">•</span>
                                      <span>{result.category}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <EmptySearchState query={query} onClearSearch={clearSearch} />
                )}
              </div>
            )}
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default SearchResultsPage;
