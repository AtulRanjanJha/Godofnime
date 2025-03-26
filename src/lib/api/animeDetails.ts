
import { AnimeDetail } from "@/types/anime";
import { fetchFromTMDB } from "./core";

// Get anime details
export const getAnimeDetails = async (id: number, mediaType?: string) => {
  // If media type is not specified, try first as TV show, then as movie
  let details;
  if (!mediaType) {
    try {
      details = await fetchFromTMDB<AnimeDetail>(`/tv/${id}`);
      mediaType = 'tv';
    } catch (error) {
      // If not found as TV show, try as movie
      details = await fetchFromTMDB<AnimeDetail>(`/movie/${id}`);
      mediaType = 'movie';
    }
  } else {
    details = await fetchFromTMDB<AnimeDetail>(`/${mediaType}/${id}`);
  }
  
  // Fetch cast information
  const credits = await fetchFromTMDB(`/${mediaType}/${id}/credits`);
  
  // Make sure the anime is Japanese (has 'ja' as original language)
  if (details.original_language !== 'ja') {
    throw new Error("This content is not an anime");
  }
  
  // Return combined data
  return {
    ...details,
    credits
  };
};

// Mapping of anime IDs to their correct season and episode counts
// This helps override incorrect data from the API
export const animeCorrections: Record<string, { seasons: number, episodesPerSeason: Record<number, number> }> = {
  // Solo Leveling (ID: 127532) - Has 1 season with 13 episodes
  "127532": {
    seasons: 1,
    episodesPerSeason: { 1: 13 }
  },
  // Rascal Does Not Dream of a Dreaming Girl (ID depends on exact mapping)
  "93290": {
    seasons: 1,
    episodesPerSeason: { 1: 13 }
  },
  // Add more anime corrections as needed
};

// Enhanced function to get details for an anime with correct season/episode info
export const getAnimeDetailsCorrected = async (id: number, mediaType?: string) => {
  const details = await getAnimeDetails(id, mediaType);
  const animeIdString = id.toString();
  
  // Apply corrections if we have them for this anime
  if (animeCorrections[animeIdString]) {
    const correction = animeCorrections[animeIdString];
    
    // Override seasons data if needed
    if (correction.seasons && correction.seasons > 0) {
      // Create corrected seasons array
      details.seasons = Array.from({ length: correction.seasons }, (_, i) => {
        const seasonNumber = i + 1;
        return {
          id: seasonNumber,
          name: `Season ${seasonNumber}`,
          overview: "",
          air_date: details.first_air_date || "",
          episode_count: correction.episodesPerSeason[seasonNumber] || 1,
          poster_path: details.poster_path,
          season_number: seasonNumber
        };
      });
      
      // Update number_of_seasons
      details.number_of_seasons = correction.seasons;
      
      // If this is a single season anime, also update number_of_episodes
      if (correction.seasons === 1 && correction.episodesPerSeason[1]) {
        details.number_of_episodes = correction.episodesPerSeason[1];
      }
    }
  }
  
  return details;
};
