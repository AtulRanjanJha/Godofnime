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
  const mediaType = queryParams.get('type') || 'tv'; // Default to 'tv' if not specified
  
  const animeId = parseInt(id || '0');
  const { data: anime, isLoading, error } = useAnimeDetails(animeId, mediaType);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleSeasonClick = (seasonNumber: number) => {
    navigate(`/watch/${animeId}?season=${seasonNumber}&episode=1&type=${mediaType}`); // Pass mediaType to the watch page
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
  
  return (
    <div className="min-h-screen pb-0">
      <Navbar />
      
      <HeroBackdrop anime={anime} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-20 md:-mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <AnimePoster posterPath={anime?.poster_path} title={title} />
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <p className="text-gray-400 mt-2">{anime?.tagline}</p>
            </div>
            
            <AnimeInfo anime={anime} />
            
            <Separator />
            
            <DetailsSection anime={anime} />
            
            <Separator />
            
            <CastSection cast={castMembers} />
            
            {anime?.seasons && (
              <>
                <Separator />
                <SeasonsSection seasons={anime.seasons} onSeasonClick={handleSeasonClick} />
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AnimeDetail;
