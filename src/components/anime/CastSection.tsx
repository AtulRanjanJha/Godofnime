import React from 'react';
import { User } from 'lucide-react';
import { getImageUrl } from '@/lib/api';
import { CastMember } from '@/types/anime';

interface CastSectionProps {
  cast: CastMember[];
}

const CastSection: React.FC<CastSectionProps> = ({ cast }) => {
  if (cast.length === 0) return <div>No cast information available.</div>;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Cast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cast.map((person) => (
          <div key={person.id} className="space-y-2 text-center">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              {person.profile_path ? (
                <img
                  src={getImageUrl(person.profile_path, 'w300')}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-200">
                  <User size={32} className="text-gray-400" />
                </div>
              )}
            </div>
            <div>
              <p className="font-medium text-sm line-clamp-1">{person.name}</p>
              <p className="text-xs text-gray-500 line-clamp-1">{person.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastSection;
