
import React from 'react';
import EpisodeList from './EpisodeList';
import VideoPlayer from './VideoPlayer';
import EpisodeDetails from './EpisodeDetails';
import AnimeInfo from './AnimeInfo';
import { AnimeDetail } from '@/types/anime';

interface WatchPageContentProps {
  animeId: number;
  title: string;
  anime: AnimeDetail | undefined;
  videoId: string | undefined;
  isLoading: boolean;
  isMuted: boolean;
  isDriveLink: boolean;
  currentSeason: number;
  currentEpisode: number;
  totalEpisodes: number;
  availableSeasons: number[];
  showEpisodeList: boolean;
  onToggleEpisodeList: () => void;
  onSeasonChange: (season: number) => void;
  onEpisodeClick: (episode: number) => void;
  onPreviousEpisode: () => void;
  onNextEpisode: () => void;
}

const WatchPageContent: React.FC<WatchPageContentProps> = ({
  animeId,
  title,
  anime,
  videoId,
  isLoading,
  isMuted,
  isDriveLink,
  currentSeason,
  currentEpisode,
  totalEpisodes,
  availableSeasons,
  showEpisodeList,
  onToggleEpisodeList,
  onSeasonChange,
  onEpisodeClick,
  onPreviousEpisode,
  onNextEpisode
}) => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {showEpisodeList && (
        <EpisodeList
          animeId={animeId}
          seasons={availableSeasons}
          currentSeason={currentSeason}
          currentEpisode={currentEpisode}
          totalEpisodes={totalEpisodes}
          onSeasonChange={onSeasonChange}
          onEpisodeClick={onEpisodeClick}
          onClose={onToggleEpisodeList}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <VideoPlayer
          videoId={videoId}
          isLoading={isLoading}
          isMuted={isMuted}
          showEpisodeList={showEpisodeList}
          onToggleEpisodeList={onToggleEpisodeList}
          isDriveLink={isDriveLink}
        />
        
        <EpisodeDetails
          title={title}
          currentSeason={currentSeason}
          currentEpisode={currentEpisode}
        />
        
        <AnimeInfo
          anime={anime}
          title={title}
          currentSeason={currentSeason}
          currentEpisode={currentEpisode}
          totalEpisodes={totalEpisodes}
          onPreviousEpisode={onPreviousEpisode}
          onNextEpisode={onNextEpisode}
        />
      </div>
    </div>
  );
};

export default WatchPageContent;
