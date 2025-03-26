
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimeDetail } from '@/types/anime';
import { Calendar, Star, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface AnimeInfoProps {
  anime: AnimeDetail;
}

const AnimeInfo: React.FC<AnimeInfoProps> = ({ anime }) => {
  const navigate = useNavigate();
  
  const title = anime?.name || anime?.title || '';
  const originalTitle = anime?.original_name || anime?.original_title || '';
  const releaseDate = anime?.first_air_date || anime?.release_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : '';
  const duration = anime?.number_of_episodes 
    ? `${anime.number_of_episodes} episodes` 
    : anime?.runtime 
      ? `${anime.runtime} min.` 
      : '';
  
  const handleWatchClick = () => {
    navigate(`/watch/${anime.id}?season=1&episode=1`);
  };
  
  const handleSeasonClick = (seasonNumber: number) => {
    navigate(`/watch/${anime.id}?season=${seasonNumber}&episode=1`);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        {anime?.genres && anime.genres.slice(0, 3).map((genre) => (
          <div 
            key={genre.id} 
            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
          >
            {genre.name}
          </div>
        ))}
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-balance">
        {title}
      </h1>
      
      {originalTitle !== title && (
        <h2 className="text-lg text-gray-500 mb-4">
          {originalTitle}
        </h2>
      )}
      
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm">
        {releaseYear && (
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 text-gray-400" />
            <span>{releaseYear}</span>
          </div>
        )}
        
        <div className="flex items-center">
          <Star size={16} className="mr-1 text-yellow-400 fill-yellow-400" />
          <span>{anime?.vote_average.toFixed(1)}</span>
          <span className="text-gray-400 ml-1">({anime?.vote_count} votes)</span>
        </div>
        
        {duration && (
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-gray-400" />
            <span>{duration}</span>
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <h3 className="font-medium mb-2">Overview</h3>
        <p className="text-gray-600 leading-relaxed text-balance">
          {anime?.overview || 'No description available.'}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Button size="lg" className="rounded-full px-6" onClick={handleWatchClick}>
          <Play size={18} className="mr-2" />
          Watch
        </Button>
      </div>
    </div>
  );
};

export default AnimeInfo;
