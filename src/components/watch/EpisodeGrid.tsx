
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EpisodeGridProps {
  currentPageEpisodes: number[];
  currentEpisode: number;
  onEpisodeClick: (episode: number) => void;
}

const EpisodeGrid: React.FC<EpisodeGridProps> = ({ 
  currentPageEpisodes,
  currentEpisode,
  onEpisodeClick
}) => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {currentPageEpisodes.map(episode => (
        <Button 
          key={episode} 
          variant={currentEpisode === episode ? "default" : "ghost"} 
          size="sm" 
          className={cn(
            "h-10 w-full relative group overflow-hidden", 
            currentEpisode === episode 
              ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:from-purple-400 hover:to-indigo-500 shadow-md shadow-purple-500/20" 
              : "bg-zinc-800/70 backdrop-blur-sm hover:bg-zinc-700 border border-zinc-700/50 transition-all duration-300"
          )} 
          onClick={() => onEpisodeClick(episode)}
        >
          <span className="relative z-10">{episode}</span>
          {currentEpisode === episode && <div className="absolute inset-0 bg-white/10 animate-pulse"></div>}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-purple-500/20 to-transparent transition-opacity duration-300"></div>
        </Button>
      ))}
    </div>
  );
};

export default EpisodeGrid;
