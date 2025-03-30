
// Core API utilities and constants
const TMDB_API_KEY = "de83af9bf3f4cf2d61cb8a9467045768";
const BASE_URL = "https://api.themoviedb.org/3";
const ANIME_TYPE_ID = 16; // Animation genre ID in TMDB
const LANGUAGE = "en-US"; // English language
const ANIME_KEYWORDS = "anime"; // Keyword for anime search

// Custom anime images mapping
export const CUSTOM_ANIME_IMAGES: Record<string, string> = {
  // Add anime ID and custom image URL pairs here
  // "228663": "https://example.com/custom-image.jpg"
};

// Helper function to create image URLs with better fallback handling
export const getImageUrl = (path: string | null, size: string = "original") => {
  if (!path) return "/placeholder.svg";
  
  // Make sure path starts with a slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  return `https://image.tmdb.org/t/p/${size}${formattedPath}`;
};

// Get custom image for an anime if available
export const getCustomImageUrl = (animeId: string | number) => {
  const id = animeId.toString();
  return CUSTOM_ANIME_IMAGES[id] || null;
};

// Generic fetch function with error handling
export const fetchFromTMDB = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: LANGUAGE,
    ...params,
  });
  
  const url = `${BASE_URL}${endpoint}?${queryParams}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch from TMDB:", error);
    throw error;
  }
};

// Constants for filtering and searches
export const POPULAR_ANIME_TITLES = [
  "One Punch Man", 
  "Solo Leveling",
  "Wolf Children",
  "Batman Ninja vs. Yakuza League",
  "My Oni Girl",
  "Look Back",
  "The Garden of Words",
  "A Silent Voice: The Movie",
  "I Want to Eat Your Pancreas",
  "A Whisker Away",
  "Words Bubble Up Like Soda Pop",
  "Shinchan",
  "The Tunnel to Summer, the Exit of Goodbyes",
  "In This Corner of the World",
  "Kamisama Kiss",
  "Shinchan",
  "Demon Slayer: Kimetsu no Yaiba",
  "Your Name", 
  "Weathering with You ",
  "Josee, the Tiger and the Fish",
  "Jujutsu Kaisen",
  "Violet Evergarden",
  "sakamoto days",
  "Violet Evergarden: The Movie",
  "Spirited Away",
  "Cowboy Bebop",
  "Chainsaw Man",
  "The Imaginary",
  "The Girl Who Leapt Through Time",
  "Bleach",
  "Mirai",
  "Death Note",
  "Hunter x Hunter",
  "Tokyo Ghoul",
  "Sword Art Online",
  "Black Clover",
  "The Promised Neverland",
  "Vinland Saga",
  "Grave of the Fireflies",
  "Paprika",
  "Howl's Moving Castle",



];

export {
  TMDB_API_KEY,
  BASE_URL,
  ANIME_TYPE_ID,
  LANGUAGE,
  ANIME_KEYWORDS
};
