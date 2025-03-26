import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAnimeDetails, useAnimeVideo } from '@/hooks/useAnime';
import NavigationHeader from '@/components/watch/NavigationHeader';
import EpisodeList from '@/components/watch/EpisodeList';
import VideoPlayer from '@/components/watch/VideoPlayer';
import EpisodeDetails from '@/components/watch/EpisodeDetails';
import AnimeInfo from '@/components/watch/AnimeInfo';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const WatchPage = () => {
  const { id } = useParams<{ id: string; }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const queryParams = new URLSearchParams(location.search);
  const episodeParam = queryParams.get('episode');
  const seasonParam = queryParams.get('season');
  
  const animeId = parseInt(id || '0');
  const { data: anime, isLoading: isLoadingAnime, error } = useAnimeDetails(animeId);
  
  const [currentSeason, setCurrentSeason] = useState<number | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEpisodeList, setShowEpisodeList] = useState(true);
  
  // Enhanced season/episode initialization
  useEffect(() => {
    if (!anime) return;

    // Special handling for movies
    const isMovie = anime.media_type === 'movie' || 
                   (!anime.seasons?.length && anime.number_of_episodes === 1);

    if (isMovie) {
      setCurrentSeason(1);
      setCurrentEpisode(1);
      // Ensure URL reflects movie format
      if (seasonParam !== '1' || episodeParam !== '1') {
        updateUrlParams(1, 1);
      }
      return;
    }

    // Normal TV show handling
    const availableSeasons = getAvailableSeasons();
    const defaultSeason = availableSeasons[0] || 1;
    
    const requestedSeason = seasonParam ? parseInt(seasonParam) : defaultSeason;
    const validSeason = availableSeasons.includes(requestedSeason) 
      ? requestedSeason 
      : defaultSeason;

    const episodeCount = getEpisodeCountForSeason(validSeason);
    const requestedEpisode = episodeParam ? parseInt(episodeParam) : 1;
    const validEpisode = Math.min(Math.max(1, requestedEpisode), episodeCount);

    setCurrentSeason(validSeason);
    setCurrentEpisode(validEpisode);

    // Update URL if invalid
    if (requestedSeason !== validSeason || requestedEpisode !== validEpisode) {
      updateUrlParams(validSeason, validEpisode);
      showErrorToast(validSeason, requestedSeason, requestedEpisode, episodeCount);
    }
  }, [anime, seasonParam, episodeParam]);

  // Helper functions
  const getAvailableSeasons = () => {
    if (!anime) return [];
    
    if (anime.seasons?.length > 0) {
      return anime.seasons
        .filter(s => 
          s.episode_count > 0 && 
          !s.name.toLowerCase().includes('special') &&
          !s.name.toLowerCase().includes('extra')
        )
        .map(s => s.season_number)
        .sort((a, b) => a - b);
    }
    
    return anime.number_of_seasons 
      ? Array.from({ length: anime.number_of_seasons }, (_, i) => i + 1)
      : [1];
  };

  const getEpisodeCountForSeason = (seasonNumber: number) => {
    if (!anime) return 1;
    
    const season = anime.seasons?.find(s => s.season_number === seasonNumber);
    return season?.episode_count || 
      (seasonNumber === 1 ? anime.number_of_episodes || 1 : 1);
  };

  const updateUrlParams = (season: number, episode: number) => {
    navigate(`/watch/${animeId}?season=${season}&episode=${episode}`, { 
      replace: true,
      state: { from: location.pathname }
    });
  };

  const showErrorToast = (
    validSeason: number,
    requestedSeason: number,
    requestedEpisode: number,
    episodeCount: number
  ) => {
    if (requestedSeason !== validSeason) {
      toast({
        title: "Season not available",
        description: `Showing Season ${validSeason} instead.`,
        variant: "destructive"
      });
    } else if (requestedEpisode > episodeCount) {
      toast({
        title: "Episode not available",
        description: `Season ${validSeason} only has ${episodeCount} episodes.`,
        variant: "destructive"
      });
    }
  };

  // Video data hook
  const { 
    data: videoData, 
    isLoading: isLoadingVideo,
    error: videoError
  } = useAnimeVideo(
    animeId,
    anime?.name || anime?.title || '',
    currentSeason || 1,
    currentEpisode || 1
  );

  // Loading and error states
  const isLoading = isLoadingAnime || !anime || isLoadingVideo;
  const title = anime?.name || anime?.title || 'Loading...';
  const totalEpisodes = currentSeason ? getEpisodeCountForSeason(currentSeason) : 0;
  const availableSeasons = getAvailableSeasons();
  const isMovie = anime?.media_type === 'movie' || 
                 (!anime?.seasons?.length && anime?.number_of_episodes === 1);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Anime</h1>
        <p className="text-zinc-300 mb-6">{error.message}</p>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col">
      <NavigationHeader animeId={animeId} />
      
      <div className="flex flex-1 overflow-hidden">
        {!isMovie && showEpisodeList && (
          <EpisodeList
            animeId={animeId}
            seasons={availableSeasons}
            currentSeason={currentSeason || 1}
            currentEpisode={currentEpisode || 1}
            totalEpisodes={totalEpisodes}
            onSeasonChange={handleSeasonChange}
            onEpisodeClick={handleEpisodeClick}
            onClose={toggleEpisodeList}
          />
        )}
        
        <div className="flex-1 flex flex-col overflow-y-auto">
          <VideoPlayer
            videoId={videoData?.id}
            isLoading={isLoading}
            isMuted={isMuted}
            showEpisodeList={showEpisodeList}
            onToggleEpisodeList={toggleEpisodeList}
            isDriveLink={videoData?.isDrive}
            title={`${title} - ${isMovie ? 'Movie' : `S${currentSeason}E${currentEpisode}`}`}
          />
          
          <EpisodeDetails
            title={title}
            currentSeason={currentSeason || 1}
            currentEpisode={currentEpisode || 1}
            isMovie={isMovie}
          />
          
          <AnimeInfo
            anime={anime}
            title={title}
            currentSeason={currentSeason || 1}
            currentEpisode={currentEpisode || 1}
            totalEpisodes={totalEpisodes}
            onPreviousEpisode={handlePreviousEpisode}
            onNextEpisode={handleNextEpisode}
            isMovie={isMovie}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WatchPage;
