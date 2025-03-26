
// Re-export the getImageUrl function from core
export { getImageUrl, getCustomImageUrl, CUSTOM_ANIME_IMAGES } from './core';

// Re-export functions from each module
export { getTrendingAnime } from './trending';
export { getPopularAnime } from './popular';
export { getTopRatedAnime } from './top-rated';
export { getRecentAnime } from './recent';
export { getAnimeDetails, searchAnime, getAnimeVideo } from './details';
export { getAnimesByGenre, getDefaultGenreAnime } from './genres';
