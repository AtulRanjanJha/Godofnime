
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchAnime } from '@/hooks/useAnime';
import AnimeGrid from '@/components/AnimeGrid';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  const [page, setPage] = useState(1);
  
  const { data, isLoading, error } = useSearchAnime(searchQuery, page);
  
  useEffect(() => {
    // Reset page when search query changes
    setPage(1);
    // Scroll to top
    window.scrollTo(0, 0);
  }, [searchQuery]);
  
  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      
      <div className="pt-28 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-gray-500">
            {searchQuery ? (
              <>
                Results for <span className="font-medium text-black">"{searchQuery}"</span>
                {data && ` - ${data.total_results} results`}
              </>
            ) : (
              'Please enter a search query'
            )}
          </p>
        </div>
        
        {searchQuery ? (
          <>
            <AnimeGrid
              animes={data?.results || []}
              isLoading={isLoading}
              error={error as Error}
            />
            
            {data && data.total_pages > 1 && (
              <div className="mt-10 flex justify-center gap-2">
                <Button 
                  variant="outline" 
                  disabled={page === 1} 
                  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                >
                  Previous
                </Button>
                
                <div className="flex items-center justify-center px-4 py-2 border rounded-md min-w-[3rem]">
                  {page}
                </div>
                
                <Button
                  variant="outline"
                  disabled={page === data.total_pages}
                  onClick={() => setPage(prev => Math.min(prev + 1, data.total_pages))}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="py-16 flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-6">
              <SearchIcon size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-medium mb-2">Search for Anime</h2>
            <p className="text-gray-500 max-w-md">
              Enter a search term in the search field above to find your favorite anime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
