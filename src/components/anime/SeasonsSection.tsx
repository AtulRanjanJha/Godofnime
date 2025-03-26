
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/api';
import { AnimeDetail } from '@/types/anime';

interface SeasonsSectionProps {
  anime: AnimeDetail;
  onSeasonClick: (seasonNumber: number) => void;
}

const SeasonsSection: React.FC<SeasonsSectionProps> = ({ anime, onSeasonClick }) => {
  if (!anime.seasons || anime.seasons.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Seasons</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {anime.seasons.map((season) => (
          <div 
            key={season.id} 
            className="rounded-lg border bg-card shadow-sm hover:scale-105 transition-transform cursor-pointer"
            onClick={() => onSeasonClick(season.season_number)}
          >
            <div className="aspect-video rounded-t-lg overflow-hidden">
              <img
                src={getImageUrl(season.poster_path, 'w300') || getImageUrl(anime.poster_path, 'w300')}
                alt={season.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm line-clamp-1">{season.name}</h4>
              <p className="text-xs text-gray-500 mt-1">
                {season.episode_count} episodes
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Play size={12} className="mr-1" /> Watch
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsSection;
