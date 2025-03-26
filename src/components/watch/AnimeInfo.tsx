import React from 'react';
import { ThumbsUp, ThumbsDown, ChevronLeft, ChevronRight, Star, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/api';
import { AnimeDetail } from '@/types/anime';
import { useToast } from '@/components/ui/use-toast';

interface AnimeInfoProps {
  anime: AnimeDetail | undefined;
  title: string;
  currentSeason: number;
  currentEpisode: number;
  totalEpisodes: number;
  onPreviousEpisode: () => void;
  onNextEpisode: () => void;
}

const AnimeInfo: React.FC<AnimeInfoProps> = ({
  anime,
  title,
  currentSeason,
  currentEpisode,
  totalEpisodes,
  onPreviousEpisode,
  onNextEpisode
}) => {
  const { toast } = useToast();

  const handleShare = () => {
    const currentUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: `${title} - Season ${currentSeason} Episode ${currentEpisode}`,
        url: currentUrl
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => {
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
          duration: 3000,
        });
      }).catch(err => {
        console.error('Failed to copy:', err);
        toast({
          variant: "destructive",
          title: "Failed to copy link",
          description: "Please try again.",
          duration: 3000,
        });
      });
    }
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-40 h-56 flex-shrink-0">
          {anime?.poster_path ? (
            <img 
              src={getImageUrl(anime.poster_path, 'w300')} 
              alt={title} 
              className="w-full h-full object-cover rounded-lg shadow-lg border border-purple-500/20 hover:shadow-purple-500/20 hover:shadow-md transition-all duration-300" 
            />
          ) : (
            <div className="w-full h-full bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
              <span className="text-zinc-400">No Image</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">{title}</h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4">
            <div className="px-3 py-1 bg-zinc-800/80 rounded-md text-sm text-center text-zinc-300 border border-zinc-700/50">PG-13</div>
            <div className="px-3 py-1 bg-zinc-800/80 rounded-md text-sm text-center text-zinc-300 border border-zinc-700/50">HD</div>
            <div className="px-3 py-1 bg-purple-600/90 rounded-md text-sm text-center font-medium text-white shadow-sm">SUB</div>
            <div className="px-3 py-1 bg-zinc-800/80 rounded-md text-sm text-center text-zinc-300 border border-zinc-700/50">TV</div>
            <div className="px-3 py-1 bg-zinc-800/80 rounded-md text-sm text-center text-zinc-300 border border-zinc-700/50">24m</div>
            <div className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-green-600/50 to-green-700/50 rounded-md text-sm text-white shadow-sm">
              <Star size={14} className="text-yellow-400 mr-1 fill-yellow-400" /> 
              <span>{anime?.vote_average?.toFixed(1) || '0.0'}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-5 line-clamp-3 hover:line-clamp-none transition-all duration-300 text-sm leading-relaxed">
            {anime?.overview}
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 text-purple-300">Language Options:</h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="outline" className="bg-purple-600 text-white hover:bg-purple-700 border-purple-700/70">SUB</Button>
                <Button size="sm" variant="outline" className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700/50">DUB</Button>
                <Button size="sm" variant="outline" className="bg-purple-600 text-white hover:bg-purple-700 border-purple-700/70">HD</Button>
                <Button size="sm" variant="outline" className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700/50">SD</Button>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 shadow-md">
                <Star size={16} className="mr-2" />
                Rate
              </Button>
              
              <Button variant="outline" className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-purple-500/30">
                <Heart size={16} className="mr-2 text-purple-400" />
                Add to List
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-purple-500/30"
                onClick={handleShare}
              >
                <Share2 size={16} className="mr-2 text-purple-400" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6 px-2 pt-4 border-t border-zinc-800">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onPreviousEpisode}
          disabled={currentEpisode <= 1}
          className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-purple-500/30 disabled:opacity-50"
        >
          <ChevronLeft size={16} className="mr-1 text-purple-400" />
          Previous
        </Button>
        
        <span className="text-sm text-zinc-400">Episode {currentEpisode} of {totalEpisodes}</span>
        
        <Button 
          variant="outline"
          size="sm"
          onClick={onNextEpisode}
          disabled={currentEpisode >= totalEpisodes}
          className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-purple-500/30 disabled:opacity-50"
        >
          Next
          <ChevronRight size={16} className="ml-1 text-purple-400" />
        </Button>
      </div>
    </div>
  );
};

export default AnimeInfo;
