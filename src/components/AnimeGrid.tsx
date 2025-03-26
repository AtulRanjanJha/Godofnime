
import React from 'react';
import AnimeCard from './AnimeCard';
import { Anime } from '@/types/anime';
import { Skeleton } from "@/components/ui/skeleton";

interface AnimeGridProps {
  animes: Anime[];
  isLoading: boolean;
  title?: string;
  error?: Error | null;
}

const AnimeGrid = ({ animes = [], isLoading, title, error }: AnimeGridProps) => {
  // Generate skeleton cards for loading state
  const renderSkeletons = () => {
    return Array(12)
      .fill(0)
      .map((_, index) => (
        <div key={`skeleton-${index}`} className="flex flex-col space-y-2">
          <Skeleton className="aspect-[2/3] w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ));
  };

  return (
    <section className="w-full py-8">
      {title && (
        <h2 className="text-xl font-semibold mb-6 px-4 md:px-0">{title}</h2>
      )}
      
      {error ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-red-500 font-medium mb-2">Failed to load anime</p>
          <p className="text-sm text-gray-500">{error.message}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 md:gap-6">
          {isLoading
            ? renderSkeletons()
            : animes.map((anime, index) => (
                <AnimeCard 
                  key={anime.id} 
                  anime={anime} 
                  priority={index < 8}
                />
              ))}
        </div>
      )}
    </section>
  );
};

export default AnimeGrid;
