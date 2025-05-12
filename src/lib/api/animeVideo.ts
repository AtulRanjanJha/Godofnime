// Interface for the video source
export interface VideoSource {
  id: string;        // Stream URL
  isDrive: boolean;  // Always false now, since we no longer use Google Drive
}

// Fetch anime video dynamically using the Zoro API via Consumet
export const getAnimeVideo = async (
  animeId: number,
  title: string,
  season: number = 1,
  episode: number = 1
): Promise<VideoSource | null> => {
  try {
    // Step 1: Search for the anime by title
    const searchResponse = await fetch(`https://api.consumet.org/anime/zoro/${encodeURIComponent(title)}`);
    const animeData = await searchResponse.json();

    if (!animeData || !animeData.episodes || animeData.episodes.length < episode) {
      console.warn(`Episode ${episode} not found for "${title}"`);
      return null;
    }

    // Step 2: Get the episode ID from the search results
    const episodeId = animeData.episodes[episode - 1]?.id;
    if (!episodeId) {
      console.warn(`Episode ID not found for "${title}" episode ${episode}`);
      return null;
    }

    // Step 3: Fetch the streaming URL for that episode
    const streamResponse = await fetch(`https://api.consumet.org/anime/zoro/watch?episodeId=${encodeURIComponent(episodeId)}`);
    const streamData = await streamResponse.json();

    // Step 4: Return the stream URL (fallback to the first available source)
    const streamUrl = streamData.sources?.[0]?.url;
    if (!streamUrl) {
      console.warn(`No streaming URL found for episode ID ${episodeId}`);
      return null;
    }

    return {
      id: streamUrl,
      isDrive: false
    };
  } catch (error) {
    console.error("Error fetching anime video:", error);
    return null;
  }
};

