
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SeasonSelectorProps {
  seasons: number[];
  currentSeason: number;
  onSeasonChange: (season: number) => void;
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  seasons,
  currentSeason,
  onSeasonChange
}) => {
  if (!seasons || seasons.length === 0) return null;

  return (
    <div className="mb-6">
      <h4 className="text-sm text-purple-200 mb-2">Season:</h4>
      <div className="flex flex-wrap gap-2">
        {seasons.map(season => (
          <Button 
            key={season} 
            variant={currentSeason === season ? "default" : "outline"} 
            size="sm" 
            onClick={() => onSeasonChange(season)} 
            className={cn(
              "relative group overflow-hidden", 
              currentSeason === season 
                ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:from-purple-400 hover:to-indigo-500 shadow-md shadow-purple-500/20" 
                : "bg-zinc-800/70 backdrop-blur-sm hover:bg-zinc-700 border border-zinc-700/50 transition-all duration-300"
            )}
          >
            <span className="relative z-10">{season}</span>
            {currentSeason === season && <div className="absolute inset-0 bg-white/10 animate-pulse"></div>}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-purple-500/20 to-transparent transition-opacity duration-300"></div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelector;
