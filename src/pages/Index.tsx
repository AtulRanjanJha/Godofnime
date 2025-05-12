
import React from 'react';
import { usePopularAnime, useTopRatedAnime, useTrendingAnime, useRecentAnime } from '@/hooks/useAnime';
import HeroSection from '@/components/HeroSection';
import AnimeGrid from '@/components/AnimeGrid';
import Navbar from '@/components/Navbar';

const Index = () => {
  const {
    data: trendingData,
    isLoading: trendingLoading,
    error: trendingError
  } = useTrendingAnime();
  const {
    data: popularData,
    isLoading: popularLoading,
    error: popularError
  } = usePopularAnime();
  const {
    data: topRatedData,
    isLoading: topRatedLoading,
    error: topRatedError
  } = useTopRatedAnime();
  const {
    data: recentData,
    isLoading: recentLoading,
    error: recentError
  } = useRecentAnime();

  return (
    <div className="min-h-screen pb-10">
      <Navbar />
      
      {/* Hero Section - Using more trending anime for rotation */}
      <section className="w-full">
        <HeroSection animes={trendingData?.results?.slice(0, 15) || []} />
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Recent Anime */}
        <AnimeGrid title="Recent & Popular Anime" animes={recentData?.results || []} isLoading={recentLoading} error={recentError as Error} />

        {/* Trending Anime */}
        <AnimeGrid title="Trending Now" animes={trendingData?.results || []} isLoading={trendingLoading} error={trendingError as Error} />
        
        {/* Popular Anime */}
        <AnimeGrid title="Popular Anime" animes={popularData?.results || []} isLoading={popularLoading} error={popularError as Error} />
        
        {/* Top Rated Anime */}
        <AnimeGrid title="Top Rated" animes={topRatedData?.results || []} isLoading={topRatedLoading} error={topRatedError as Error} />
      </div>
    </div>
  );
};

export default Index;
