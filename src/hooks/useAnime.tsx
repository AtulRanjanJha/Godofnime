import { useQuery } from "@tanstack/react-query";
import {
  getTrendingAnime,
  getPopularAnime,
  getTopRatedAnime,
  getAnimeDetails,
  searchAnime,
  getRecentAnime,
  getAnimeVideo
} from "@/lib/api";

export const useTrendingAnime = (timeWindow: 'day' | 'week' = 'week', page: number = 1) => {
  return useQuery({
    queryKey: ['trending-anime', timeWindow, page],
    queryFn: () => getTrendingAnime(timeWindow, page),
  });
};

export const usePopularAnime = (page: number = 1) => {
  return useQuery({
    queryKey: ['popular-anime', page],
    queryFn: () => getPopularAnime(page),
  });
};

export const useTopRatedAnime = (page: number = 1) => {
  return useQuery({
    queryKey: ['top-rated-anime', page],
    queryFn: () => getTopRatedAnime(page),
  });
};

export const useRecentAnime = (page: number = 1) => {
  return useQuery({
    queryKey: ['recent-anime', page],
    queryFn: () => getRecentAnime(page),
  });
};

export const useAnimeDetails = (id: number, mediaType?: string) => {
  return useQuery({
    queryKey: ['anime-details', id, mediaType],
    queryFn: () => getAnimeDetails(id, mediaType),
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    retry: (failureCount, error) => {
      if ((error as Error).message?.includes('404')) {
        return failureCount < 2;
      }
      return failureCount < 3;
    }
  });
};

export const useAnimeVideo = (animeId: number, title: string, season: number = 1, episode: number = 1) => {
  return useQuery({
    queryKey: ['anime-video', animeId, title, season, episode],
    queryFn: () => getAnimeVideo(animeId, title, season, episode),
    enabled: !!animeId && !!title,
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchAnime = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['search-anime', query, page],
    queryFn: () => searchAnime(query, page),
    enabled: query.length > 0,
  });
};
