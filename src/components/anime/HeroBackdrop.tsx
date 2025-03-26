
import React, { useState } from 'react';
import { getImageUrl } from '@/lib/api';
import { AnimeDetail } from '@/types/anime';

interface HeroBackdropProps {
  anime: AnimeDetail;
}

const HeroBackdrop: React.FC<HeroBackdropProps> = ({ anime }) => {
  const [backdropLoaded, setBackdropLoaded] = useState(false);

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-gray-100">
        {anime.backdrop_path && (
          <img
            src={getImageUrl(anime.backdrop_path, 'original')}
            alt={anime.name || anime.title || ''}
            className="w-full h-full object-cover object-top"
            onLoad={() => setBackdropLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default HeroBackdrop;
