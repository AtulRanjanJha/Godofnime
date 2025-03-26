
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { AnimeDetail } from '@/types/anime';

export const useWatchPageState = (
  animeId: number,
  anime: AnimeDetail | undefined,
  seasonParam: string | null,
  episodeParam: string | null
) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for player and UI
  const [currentSeason, setCurrentSeason] = useState<number | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEpisodeList, setShowEpisodeList] = useState(true);

  // Update URL when season or episode changes
  const updateUrlParams = (season: number, episode: number) => {
    navigate(`/watch/${animeId}?season=${season}&episode=${episode}`, { replace: true });
  };
  
  // Get available seasons from the anime data
  const getAvailableSeasons = () => {
    if (!anime) return [];
    
    if (anime.seasons && anime.seasons.length > 0) {
      // Some anime with weird season names (like "Specials") should be filtered out
      return anime.seasons
        .filter(s => 
          s.episode_count > 0 && 
          !s.name.toLowerCase().includes('special') &&
          !s.name.toLowerCase().includes('extra')
        )
        .map(s => s.season_number)
        .sort((a, b) => a - b);
    }
    
    // If we have number_of_seasons but no seasons array
    if (anime.number_of_seasons && anime.number_of_seasons > 0) {
      return Array.from({ length: anime.number_of_seasons }, (_, i) => i + 1);
    }
    
    // If we can't determine, default to season 1
    return [1];
  };
  
  // Get the actual episode count for a given season
  const getEpisodeCountForSeason = (seasonNumber: number) => {
    if (!anime) return 1;
    
    // Try to get episode count from the seasons data first
    if (anime.seasons && anime.seasons.length > 0) {
      const season = anime.seasons.find(s => s.season_number === seasonNumber);
      if (season && season.episode_count > 0) {
        return season.episode_count;
      }
    }
    
    // If this is the first season and we don't have specific season data,
    // use the total episode count
    if (seasonNumber === 1 && anime.number_of_episodes) {
      return anime.number_of_episodes;
    }
    
    // Default to 1 episode if we can't determine the count
    return 1;
  };

  // Set season and episode once anime data is loaded
  useEffect(() => {
    if (anime) {
      // Determine total seasons available
      const availableSeasons = getAvailableSeasons();
      
      if (availableSeasons.length === 0) {
        // If no seasons data, default to 1 season
        setCurrentSeason(1);
        
        // Use the total episodes if available, otherwise default to 1
        const episodeCount = anime.number_of_episodes || 1;
        const requestedEpisode = episodeParam ? parseInt(episodeParam) : 1;
        
        // Make sure the requested episode is valid
        const validEpisode = Math.min(Math.max(1, requestedEpisode), episodeCount);
        setCurrentEpisode(validEpisode);
        
        // If the URL had an invalid episode, update it
        if (requestedEpisode !== validEpisode) {
          updateUrlParams(1, validEpisode);
          
          if (requestedEpisode > episodeCount) {
            toast({
              title: "Episode not available",
              description: `This anime only has ${episodeCount} episode${episodeCount !== 1 ? 's' : ''}.`,
              variant: "destructive"
            });
          }
        }
      } else {
        // We have seasons data
        const requestedSeason = seasonParam ? parseInt(seasonParam) : 1;
        
        // Validate the season number
        const validSeason = availableSeasons.includes(requestedSeason) 
          ? requestedSeason 
          : availableSeasons[0];
        
        setCurrentSeason(validSeason);
        
        // Now get the episode count for this season
        const episodeCount = getEpisodeCountForSeason(validSeason);
        const requestedEpisode = episodeParam ? parseInt(episodeParam) : 1;
        
        // Make sure the requested episode is valid for this season
        const validEpisode = Math.min(Math.max(1, requestedEpisode), episodeCount);
        setCurrentEpisode(validEpisode);
        
        // If URL had invalid season/episode, update it
        if (requestedSeason !== validSeason || requestedEpisode !== validEpisode) {
          updateUrlParams(validSeason, validEpisode);
          
          if (requestedSeason !== validSeason) {
            toast({
              title: "Season not available",
              description: `This anime doesn't have Season ${requestedSeason}.`,
              variant: "destructive"
            });
          } else if (requestedEpisode > episodeCount) {
            toast({
              title: "Episode not available",
              description: `Season ${validSeason} only has ${episodeCount} episode${episodeCount !== 1 ? 's' : ''}.`,
              variant: "destructive"
            });
          }
        }
      }
    }
  }, [anime, seasonParam, episodeParam]);

  // Get total episodes for the current season
  const totalEpisodes = currentSeason ? getEpisodeCountForSeason(currentSeason) : 0;
  
  // Get available seasons
  const availableSeasons = getAvailableSeasons();

  const handleEpisodeClick = (episode: number) => {
    if (currentSeason === null) return;
    setCurrentEpisode(episode);
    updateUrlParams(currentSeason, episode);
  };

  const handleSeasonChange = (season: number) => {
    setCurrentSeason(season);
    // Always reset to first episode when changing season
    setCurrentEpisode(1);
    updateUrlParams(season, 1);
  };

  const handlePreviousEpisode = () => {
    if (currentEpisode === null || currentSeason === null) return;
    if (currentEpisode > 1) {
      handleEpisodeClick(currentEpisode - 1);
    }
  };

  const handleNextEpisode = () => {
    if (currentEpisode === null || currentSeason === null) return;
    if (currentEpisode < totalEpisodes) {
      handleEpisodeClick(currentEpisode + 1);
    }
  };

  const toggleEpisodeList = () => setShowEpisodeList(!showEpisodeList);

  return {
    currentSeason,
    currentEpisode,
    isMuted,
    isPlaying,
    showEpisodeList,
    totalEpisodes,
    availableSeasons,
    handleEpisodeClick,
    handleSeasonChange,
    handlePreviousEpisode,
    handleNextEpisode,
    toggleEpisodeList
  };
};
