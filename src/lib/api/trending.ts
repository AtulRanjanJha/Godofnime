
import { Anime, TMDBResponse } from "@/types/anime";
import { fetchFromTMDB, ANIME_TYPE_ID, ANIME_KEYWORDS } from "./core";

// Get trending anime
export const getTrendingAnime = async (timeWindow: 'day' | 'week' = 'week', page: number = 1) => {
  // Fetch from multiple pages to get more variety
  const promises = [1, 2].map(pageNum => 
    fetchFromTMDB<TMDBResponse<Anime>>(`/trending/all/${timeWindow}`, {
      page: pageNum.toString(),
      with_genres: ANIME_TYPE_ID.toString(),
      with_keywords: ANIME_KEYWORDS,
    })
  );
  
  const responses = await Promise.all(promises);
  
  // Combine results from both pages
  let allResults: Anime[] = [];
  responses.forEach(response => {
    allResults = [...allResults, ...response.results];
  });
  
  // Filter results to include only TV shows and movies with Japanese original language
  const filteredResults = allResults.filter(item => 
    (item.media_type === 'tv' || item.media_type === 'movie') && 
    (item.original_language === 'ja') &&
    item.backdrop_path !== null // Ensure it has a backdrop image
  );
  
  // Ensure we have a diverse set by shuffling the results
  const shuffledResults = [...filteredResults].sort(() => Math.random() - 0.5);
  
  // Take the requested page worth of results
  const pageSize = 20;
  const startIndex = (page - 1) * pageSize;
  const paginatedResults = shuffledResults.slice(startIndex, startIndex + pageSize);
  
  return {
    ...responses[0], // Use the metadata from the first response
    results: paginatedResults
  };
};
