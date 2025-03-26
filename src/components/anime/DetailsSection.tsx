
import React from 'react';
import { AnimeDetail } from '@/types/anime';

interface DetailsSectionProps {
  anime: AnimeDetail;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ anime }) => {
  const releaseDate = anime?.first_air_date || anime?.release_date;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Status</span>
          <span className="font-medium">{anime?.status}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Type</span>
          <span className="font-medium">{anime?.media_type === 'movie' ? 'Movie' : anime?.type || 'TV'}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Release Date</span>
          <span className="font-medium">{releaseDate || 'Unknown'}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Original Language</span>
          <span className="font-medium capitalize">{anime?.original_language === 'ja' ? 'Japanese' : anime?.original_language}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Popularity</span>
          <span className="font-medium">{anime?.popularity.toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
