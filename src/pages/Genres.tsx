
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAnimesByGenre, getDefaultGenreAnime } from '@/lib/api/genres';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AnimeGrid from '@/components/AnimeGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Tag, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';

// All letters of the alphabet for filtering
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Common anime genres
const GENRES = [
  { id: 16, name: 'Animation' },
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const Genres = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Get current filters from URL
  const currentGenre = searchParams.get('genre') || '';
  const currentLetter = searchParams.get('letter') || '';
  
  // State for the active genre and letter
  const [selectedGenre, setSelectedGenre] = useState<string>(currentGenre);
  const [selectedLetter, setSelectedLetter] = useState<string>(currentLetter);
  
  // Update URL when filters change
  const updateFilters = (genre: string, letter: string) => {
    const params = new URLSearchParams();
    
    if (genre) params.set('genre', genre);
    if (letter) params.set('letter', letter);
    
    navigate(`/genres?${params.toString()}`);
    
    setSelectedGenre(genre);
    setSelectedLetter(letter);
  };
  
  // Fetch animes based on selected genre and letter
  const { data: filteredData, isLoading: isFilteredLoading, error: filteredError } = useQuery({
    queryKey: ['animes', 'genre', selectedGenre, selectedLetter],
    queryFn: () => getAnimesByGenre(selectedGenre, selectedLetter),
    enabled: !!selectedGenre,
  });
  
  // Fetch default anime when no genre is selected
  const { data: defaultData, isLoading: isDefaultLoading, error: defaultError } = useQuery({
    queryKey: ['animes', 'genre', 'default'],
    queryFn: getDefaultGenreAnime,
    enabled: !selectedGenre,
  });
  
  // Determine which data to display
  const displayData = selectedGenre ? filteredData : defaultData;
  const isLoading = selectedGenre ? isFilteredLoading : isDefaultLoading;
  const error = selectedGenre ? filteredError : defaultError;
  
  return (
    <div className="min-h-screen pt-16 pb-8 bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Anime Genres</h1>
            <p className="text-muted-foreground mb-6">
              Browse anime by genre and filter by first letter
            </p>
          </div>
          
          {/* Genre Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Genres</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {GENRES.map((genre) => (
                <Button
                  key={genre.id}
                  variant={selectedGenre === genre.id.toString() ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilters(genre.id.toString(), selectedLetter)}
                  className="rounded-full"
                >
                  {genre.name}
                </Button>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Alphabet Filtering */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Filter by First Letter</h2>
            </div>
            
            <div className="grid grid-cols-9 md:grid-cols-13 gap-2">
              <Button
                variant={selectedLetter === '' ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters(selectedGenre, '')}
              >
                All
              </Button>
              
              {ALPHABET.map((letter) => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilters(selectedGenre, letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Results Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedGenre 
                ? `${GENRES.find(g => g.id.toString() === selectedGenre)?.name || 'Genre'} Anime${selectedLetter ? ` starting with "${selectedLetter}"` : ''}`
                : <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <span>Popular Anime Across All Genres</span>
                  </div>
              }
            </h2>
            
            <AnimeGrid 
              animes={displayData?.results || []} 
              isLoading={isLoading} 
              error={error as Error} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Genres;
