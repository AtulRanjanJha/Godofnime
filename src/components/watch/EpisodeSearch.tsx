
import React from 'react';
import { Search, List } from 'lucide-react';

interface EpisodeSearchProps {
  totalEpisodes: number;
  searchEpisode: string;
  onSearchChange: (value: string) => void;
}

const EpisodeSearch: React.FC<EpisodeSearchProps> = ({
  totalEpisodes,
  searchEpisode,
  onSearchChange
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <List size={16} className="text-purple-400" />
        <span className="text-zinc-300">
          {totalEpisodes > 0 
            ? `EPS: 001-${totalEpisodes.toString().padStart(3, '0')}` 
            : 'No episodes available'}
        </span>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
        <input 
          type="text" 
          placeholder="Episode #" 
          value={searchEpisode} 
          onChange={e => onSearchChange(e.target.value)} 
          className="pl-8 py-1 text-sm bg-zinc-800/80 rounded-md w-28 focus:outline-none focus:ring-1 focus:ring-purple-500 border border-zinc-700/50" 
        />
      </div>
    </div>
  );
};

export default EpisodeSearch;
