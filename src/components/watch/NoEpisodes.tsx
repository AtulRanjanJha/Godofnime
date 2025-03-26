
import React from 'react';
import { AlertCircle } from 'lucide-react';

const NoEpisodes: React.FC = () => {
  return (
    <div className="py-10 text-center">
      <AlertCircle className="w-12 h-12 text-purple-400 mx-auto mb-3 opacity-70" />
      <p className="text-zinc-400 font-medium">No episodes available for this season</p>
      <p className="text-zinc-500 text-sm mt-2">Try selecting a different season or anime</p>
    </div>
  );
};

export default NoEpisodes;
