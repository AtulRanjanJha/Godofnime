import { AnimeDetail } from "@/types/anime";
import { fetchFromTMDB } from "./core";

// Get anime details
export const getAnimeDetails = async (id: number, mediaType?: string) => {
  let details;
  let credits;
  let resolvedMediaType = mediaType;
  
  try {
    if (!mediaType) {
      try {
        details = await fetchFromTMDB<AnimeDetail>(`/tv/${id}`);
        credits = await fetchFromTMDB(`/tv/${id}/credits`);
        resolvedMediaType = 'tv';
      } catch (tvError) {
        details = await fetchFromTMDB<AnimeDetail>(`/movie/${id}`);
        credits = await fetchFromTMDB(`/movie/${id}/credits`);
        resolvedMediaType = 'movie';
        
        details.seasons = [{
          id: 1,
          name: 'Movie',
          overview: details.overview,
          air_date: details.release_date,
          episode_count: 1,
          poster_path: details.poster_path,
          season_number: 1
        }];
        details.number_of_seasons = 1;
        details.number_of_episodes = 1;
      }
    } else {
      details = await fetchFromTMDB<AnimeDetail>(`/${mediaType}/${id}`);
      credits = await fetchFromTMDB(`/${mediaType}/${id}/credits`);
      resolvedMediaType = mediaType;
      
      if (mediaType === 'movie') {
        details.seasons = [{
          id: 1,
          name: 'Movie',
          episode_count: 1,
          season_number: 1,
          poster_path: details.poster_path,
          air_date: details.release_date
        }];
        details.number_of_seasons = 1;
        details.number_of_episodes = 1;
      }
    }

    // Log a warning instead of throwing an error
    if (details.original_language !== 'ja') {
      console.warn(`Content with ID ${id} is not in Japanese. Language: ${details.original_language}`);
    }

    return {
      ...details,
      credits,
      media_type: resolvedMediaType
    };
    
  } catch (error) {
    console.error(`Failed fetching details for ID ${id}:`, error);
    throw error;
  }
};

// Special cases that need correction
export const animeCorrections: Record<string, { 
  mediaType?: 'tv' | 'movie';
  seasons?: number;
  episodesPerSeason?: Record<number, number>;
}> = {
  // Movies
  "129": { mediaType: 'movie' }, // Spirited Away
  "4977": { mediaType: 'movie' }, // Paprika
  "378064": { mediaType: 'movie' }, // A Silent Voice
  "372058": { mediaType: 'movie' }, // Your Name
  
  // TV Shows
  "127532": { // Solo Leveling
    mediaType: 'tv',
    seasons: 1,
    episodesPerSeason: { 1: 13 }
  },
  "93290": { // Rascal Does Not Dream
    mediaType: 'tv',
    seasons: 1,
    episodesPerSeason: { 1: 13 }
  },
};

// Enhanced function with corrections
export const getAnimeDetailsCorrected = async (id: number, mediaType?: string) => {
  const animeIdString = id.toString();
  const correction = animeCorrections[animeIdString];
  
  // Use corrected mediaType if specified
  const resolvedMediaType = correction?.mediaType || mediaType;
  
  const details = await getAnimeDetails(id, resolvedMediaType);
  
  // Apply other corrections if needed
  if (correction?.seasons) {
    details.seasons = Array.from({ length: correction.seasons }, (_, i) => {
      const seasonNumber = i + 1;
      return {
        id: seasonNumber,
        name: `Season ${seasonNumber}`,
        overview: "",
        air_date: details.first_air_date || details.release_date || "",
        episode_count: correction.episodesPerSeason?.[seasonNumber] || 1,
        poster_path: details.poster_path,
        season_number: seasonNumber
      };
    });
    
    details.number_of_seasons = correction.seasons;
    
    if (correction.seasons === 1 && correction.episodesPerSeason?.[1]) {
      details.number_of_episodes = correction.episodesPerSeason[1];
    }
  }
  
  return details;
};
