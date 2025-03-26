
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import our new components
import SeasonSelector from './SeasonSelector';
import EpisodeSearch from './EpisodeSearch';
import EpisodeGrid from './EpisodeGrid';
import EpisodePagination from './EpisodePagination';
import NoEpisodes from './NoEpisodes';

interface EpisodeListProps {
  animeId: number;
  seasons: number[];
  currentSeason: number;
  currentEpisode: number;
  totalEpisodes: number;
  onSeasonChange: (season: number) => void;
  onEpisodeClick: (episode: number) => void;
  onClose: () => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  animeId,
  seasons,
  currentSeason,
  currentEpisode,
  totalEpisodes,
  onSeasonChange,
  onEpisodeClick,
  onClose
}) => {
  const [searchEpisode, setSearchEpisode] = useState('');
  const [currentEpisodePage, setCurrentEpisodePage] = useState(1);
  const episodesPerPage = 30;

  // Create array of available episodes (handle 0 totalEpisodes case gracefully)
  const episodes = Array.from({ length: Math.max(1, totalEpisodes) }, (_, i) => i + 1);
  
  const filteredEpisodes = searchEpisode ? 
    episodes.filter(ep => ep.toString().includes(searchEpisode)) : 
    episodes;

  const totalPages = Math.ceil(filteredEpisodes.length / episodesPerPage);
  const currentPageEpisodes = filteredEpisodes.slice(
    (currentEpisodePage - 1) * episodesPerPage,
    currentEpisodePage * episodesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentEpisodePage(page);
  };

  useEffect(() => {
    setCurrentEpisodePage(1);
  }, [searchEpisode]);

  useEffect(() => {
    if (currentEpisode) {
      const pageIndex = Math.ceil(currentEpisode / episodesPerPage);
      setCurrentEpisodePage(pageIndex || 1);
    }
  }, [currentEpisode, episodesPerPage]);

  useEffect(() => {
    setCurrentEpisodePage(1);
    setSearchEpisode('');
  }, [currentSeason]);

  const hasNoEpisodes = totalEpisodes <= 0;

  return (
    <div className="w-80 bg-gradient-to-b from-zinc-900 to-zinc-950 border-r border-zinc-800 flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-purple-300">Episodes</h3>
          <Button variant="ghost" size="sm" className="text-white hover:bg-zinc-800/50" onClick={onClose}>
            <ChevronLeft size={16} />
          </Button>
        </div>
        
        <SeasonSelector 
          seasons={seasons} 
          currentSeason={currentSeason} 
          onSeasonChange={onSeasonChange} 
        />
        
        {!hasNoEpisodes && (
          <EpisodeSearch 
            totalEpisodes={totalEpisodes} 
            searchEpisode={searchEpisode} 
            onSearchChange={setSearchEpisode} 
          />
        )}
        
        {hasNoEpisodes ? (
          <NoEpisodes />
        ) : (
          <>
            <EpisodeGrid 
              currentPageEpisodes={currentPageEpisodes} 
              currentEpisode={currentEpisode} 
              onEpisodeClick={onEpisodeClick} 
            />
            
            <EpisodePagination 
              currentEpisodePage={currentEpisodePage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EpisodeList;
