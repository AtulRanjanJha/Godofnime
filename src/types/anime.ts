
export interface Anime {
  id: number;
  name?: string;
  title?: string;
  original_name?: string;
  original_title?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  first_air_date?: string;
  release_date?: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  genre_ids: number[];
  media_type?: 'tv' | 'movie';
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: {
    id: number;
    name: string;
    job: string;
    department: string;
    profile_path: string | null;
  }[];
}

export interface AnimeDetail extends Omit<Anime, 'genre_ids'> {
  genres: {
    id: number;
    name: string;
  }[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  runtime?: number;
  status: string;
  type?: string;
  homepage: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
  seasons?: {
    id: number;
    name: string;
    overview: string;
    air_date: string;
    episode_count: number;
    poster_path: string;
    season_number: number;
  }[];
  credits?: Credits;
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
