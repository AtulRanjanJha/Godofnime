import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { useAnimeDetails } from '@/hooks/useAnime';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackdrop from '@/components/anime/HeroBackdrop';
import AnimePoster from '@/components/anime/AnimePoster';
import AnimeInfo from '@/components/anime/AnimeInfo';
import CastSection from '@/components/anime/CastSection';
import SeasonsSection from '@/components/anime/SeasonsSection';
import DetailsSection from '@/components/anime/DetailsSection';

const AnimeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const mediaType = queryParams.get('type') || undefined;
  
  const animeId = parseInt(id || '0');
  const { data: anime, isLoading, error } = useAnimeDetails(animeId, mediaType);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // New function to handle watch navigation
  const handleWatchClick = () => {
    const isMovie = anime?.media_type === 'movie' || 
                   (anime?.number_of_seasons === 1 && anime?.number_of_episodes === 1);
    
    if (isMovie) {
      navigate(`/watch/${animeId}?season=1&episode=1`);
    } else {
      const firstSeason = anime?.seasons?.[0]?.season_number || 1;
      navigate(`/watch/${animeId}?season=${firstSeason}&episode=1`);
    }
  };
  
  const handleSeasonClick = (seasonNumber: number) => {
    navigate(`/watch/${animeId}?season=${seasonNumber}&episode=1`);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 max-w-7xl mx-auto px-4 md:px-10">
          <div className="w-full h-[40vh] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            <Skeleton className="aspect-[2/3] w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-10 w-32 mt-4" /> {/* Watch button skeleton */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !anime) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 max-w-7xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Failed to load anime information</h2>
          <p className="text-gray-500 mb-6">{error?.message || 'Something went wrong'}</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" />
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const title = anime?.name || anime?.title || '';
  const castMembers = anime?.credits?.cast?.slice(0, 10) || [];
  const isMovie = anime?.media_type === 'movie' || 
                 (anime?.number_of_seasons === 1 && anime?.number_of_episodes === 1);

  return (
    <div className="min-h-screen pb-0">
      <Navbar />
      
      <HeroBackdrop anime={anime} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-20 md:-mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8">
          <AnimePoster 
            animeId={animeId} 
            posterPath={anime.poster_path} 
            title={title} 
          />
          
          <div>
            {/* Add Watch Button at the top */}
            <div className="mb-6">
              <Button 
                onClick={handleWatchClick}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                size="lg"
              >
                {isMovie ? 'Watch Movie' : 'Watch Now'}
              </Button>
            </div>
            
            <AnimeInfo anime={anime} />
            
            <Separator className="my-8" />
            
            <CastSection cast={castMembers} />
            
            {!isMovie && (
              <SeasonsSection 
                anime={anime}
                onSeasonClick={handleSeasonClick}
              />
            )}
            
            <DetailsSection anime={anime} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AnimeDetail;
