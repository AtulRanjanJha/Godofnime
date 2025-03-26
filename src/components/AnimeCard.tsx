
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Anime } from '@/types/anime';
import { getImageUrl, getCustomImageUrl } from '@/lib/api';
import { Star, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimeCardProps {
  anime: Anime;
  priority?: boolean;
}

const AnimeCard = ({ anime, priority = false }: AnimeCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const formattedRating = anime.vote_average.toFixed(1);
  const title = anime.name || anime.title || '';
  const releaseDate = anime.first_air_date || anime.release_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : '???';
  const mediaType = anime.media_type || 'tv';
  
  // Check for custom image first, then fallback to poster path or placeholder
  const customImage = getCustomImageUrl(anime.id);
  const imageSrc = customImage || (imageError || !anime.poster_path
    ? '/placeholder.svg'
    : getImageUrl(anime.poster_path, 'w500'));
  
  return (
    <Link 
      to={`/anime/${anime.id}?type=${mediaType}`}
      className="group h-full w-full overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg transition-all duration-300 hover-scale">
        <div className={cn(
          "absolute inset-0 bg-gray-100",
          !imageLoaded && "animate-pulse"
        )} />
        
        <img
          src={imageSrc}
          alt={title}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        
        {imageError && !customImage && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-80 text-gray-500">
            <ImageIcon size={24} />
            <span className="mt-2 text-xs text-center">No image</span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium">{formattedRating}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-2 space-y-1 px-1">
        <h3 className="text-sm font-medium line-clamp-1 text-balance">
          {title}
        </h3>
        <p className="text-xs text-gray-500">{releaseYear}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;
