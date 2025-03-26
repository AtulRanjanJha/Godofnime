
import { Anime, TMDBResponse } from "@/types/anime";
import { fetchFromTMDB, ANIME_TYPE_ID, POPULAR_ANIME_TITLES } from "./core";

// Get recent anime with popular titles
export const getRecentAnime = async (page: number = 1) => {
  const currentDate = new Date();
  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);
  
  const formattedCurrentDate = currentDate.toISOString().split('T')[0];
  const formattedThreeYearsAgo = threeYearsAgo.toISOString().split('T')[0];
  
  // Create requests to search for specific anime by titles
  const searchPromises = POPULAR_ANIME_TITLES.map(title => 
    fetchFromTMDB<TMDBResponse<Anime>>('/search/multi', {
      query: title,
      page: '1',
      include_adult: 'false',
    })
  );
  
  // Execute all requests in parallel
  const searchResults = await Promise.all(searchPromises);
  
  // Get recent anime series (main stream)
  const tvResponse = await fetchFromTMDB<TMDBResponse<Anime>>('/discover/tv', {
    page: page.toString(),
    'air_date.gte': formattedThreeYearsAgo,
    'air_date.lte': formattedCurrentDate,
    sort_by: 'first_air_date.desc',
    with_genres: ANIME_TYPE_ID.toString(),
    with_original_language: 'ja',
  });
  
  // Collect all results from title searches
  let popularTitles: Anime[] = [];
  searchResults.forEach(response => {
    // Filter only anime with Japanese original language
    const filtered = response.results.filter(item => 
      (item.media_type === 'tv' || item.media_type === 'movie') && 
      item.original_language === 'ja'
    );
    popularTitles = [...popularTitles, ...filtered];
  });
  
  // Remove duplicates by ID
  const uniquePopularTitles = popularTitles.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  );
  
  // Combine found popular titles with regular results
  const combinedResults = [...uniquePopularTitles, ...tvResponse.results]
    .slice(0, 24); // Limit to 24 results
  
  return {
    ...tvResponse,
    results: combinedResults
  };
};
