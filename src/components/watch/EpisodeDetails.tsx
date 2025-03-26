
import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EpisodeDetailsProps {
  title: string;
  currentSeason: number;
  currentEpisode: number;
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({ title, currentSeason, currentEpisode }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-zinc-900 to-zinc-800 border-y border-zinc-800">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gradient-to-r from-white to-purple-100">
          {title} - <span className="text-purple-400">S{currentSeason} E{currentEpisode}</span>
        </h2>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700 hover:border-purple-400/50 transition-colors">
            <ThumbsUp size={16} className="mr-1 text-green-400" />
            {Math.floor(Math.random() * 1000) + 100}
          </Button>
          <Button variant="outline" size="sm" className="bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700 hover:border-purple-400/50 transition-colors">
            <ThumbsDown size={16} className="mr-1 text-red-400" />
            {Math.floor(Math.random() * 100)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
