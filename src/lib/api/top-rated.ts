
import { Anime, TMDBResponse } from "@/types/anime";
import { fetchFromTMDB, ANIME_TYPE_ID } from "./core";

// Get top rated anime
export const getTopRatedAnime = async (page: number = 1) => {
  // First get top anime series
  const tvResponse = await fetchFromTMDB<TMDBResponse<Anime>>('/discover/tv', {
    page: page.toString(),
    sort_by: 'vote_average.desc',
    with_genres: ANIME_TYPE_ID.toString(),
    'vote_count.gte': '100',
    with_original_language: 'ja',
  });
  
  // Then get top anime movies
  const movieResponse = await fetchFromTMDB<TMDBResponse<Anime>>('/discover/movie', {
    page: page.toString(),
    sort_by: 'vote_average.desc',
    with_genres: ANIME_TYPE_ID.toString(),
    'vote_count.gte': '100',
    with_original_language: 'ja',
  });
  
  // Combine and sort results by rating
  const combinedResults = [...tvResponse.results, ...movieResponse.results]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 24); // Increase to 24 results
  
  return {
    ...tvResponse,
    results: combinedResults
  };
};
