
import React from 'react';
import { useTopRatedAnime } from '@/hooks/useAnime';
import Navbar from '@/components/Navbar';
import AnimeGrid from '@/components/AnimeGrid';
import { Skeleton } from '@/components/ui/skeleton';

const TV = () => {
  const { data, isLoading, error } = useTopRatedAnime(1);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">TV Shows</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="aspect-[2/3] w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">Failed to load TV shows</p>
          </div>
        ) : (
          <AnimeGrid animes={data?.results || []} isLoading={isLoading} error={error} />
        )}
      </div>
    </div>
  );
};

export default TV;
