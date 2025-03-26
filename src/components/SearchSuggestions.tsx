
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchAnime } from '@/hooks/useAnime';
import { getImageUrl } from '@/lib/api';
import { Anime } from '@/types/anime';
import { Skeleton } from '@/components/ui/skeleton';

interface SearchSuggestionsProps {
  query: string;
  onSelect: () => void;
}

const SearchSuggestions = ({ query, onSelect }: SearchSuggestionsProps) => {
  const { data, isLoading } = useSearchAnime(query, 1);
  
  if (!query || query.length < 2) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[60vh] overflow-y-auto">
      {isLoading ? (
        <div className="p-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="w-12 h-16 rounded" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : data && data.results.length > 0 ? (
        <div>
          {data.results.slice(0, 6).map((anime) => (
            <Link
              key={anime.id}
              to={`/anime/${anime.id}?type=${anime.media_type || 'tv'}`}
              className="flex items-center p-3 hover:bg-gray-50 transition-colors"
              onClick={onSelect}
            >
              <div className="w-12 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={getImageUrl(anime.poster_path, 'w92')}
                  alt={anime.title || anime.name || ''}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-sm">{anime.title || anime.name || ''}</h4>
                <p className="text-xs text-gray-500">
                  {anime.media_type === 'movie' ? 'Movie' : 'Series'} • {' '}
                  {(anime.first_air_date || anime.release_date) ? 
                    new Date(anime.first_air_date || anime.release_date || '').getFullYear() : 
                    'Unknown'
                  }
                </p>
              </div>
            </Link>
          ))}
          <Link
            to={`/search?q=${encodeURIComponent(query)}`}
            className="block p-3 text-center text-sm text-blue-600 hover:bg-gray-50 border-t border-gray-100"
            onClick={onSelect}
          >
            View all results for "{query}"
          </Link>
        </div>
      ) : (
        <div className="p-4 text-center text-sm text-gray-500">
          No anime found matching "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
