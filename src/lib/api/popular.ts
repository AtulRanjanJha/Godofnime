
import { Anime, TMDBResponse } from "@/types/anime";
import { fetchFromTMDB, ANIME_TYPE_ID } from "./core";

// Get popular anime
export const getPopularAnime = async (page: number = 1) => {
  // First get popular anime series
  const tvResponse = await fetchFromTMDB<TMDBResponse<Anime>>('/discover/tv', {
    page: page.toString(),
    sort_by: 'popularity.desc',
    with_genres: ANIME_TYPE_ID.toString(),
    with_original_language: 'ja', // Only with Japanese original language
  });
  
  // Then get popular anime movies
  const movieResponse = await fetchFromTMDB<TMDBResponse<Anime>>('/discover/movie', {
    page: page.toString(),
    sort_by: 'popularity.desc',
    with_genres: ANIME_TYPE_ID.toString(),
    with_original_language: 'ja', // Only with Japanese original language
  });
  
  // Combine and sort results by popularity
  const combinedResults = [...tvResponse.results, ...movieResponse.results]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 24); // Increase to 24 results
  
  return {
    ...tvResponse,
    results: combinedResults
  };
};
