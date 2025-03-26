
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationHeaderProps {
  animeId: number;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ animeId }) => {
  const navigate = useNavigate();
  
  return (
    <div className="p-4 bg-gradient-to-r from-zinc-950 to-zinc-900 border-b border-zinc-800">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white mr-4 hover:bg-white/10" 
          onClick={() => navigate(`/anime/${animeId}`)}
        >
          <ChevronLeft size={20} className="mr-1 text-purple-400" />
          <span>Back</span>
        </Button>
        
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/tv" className="text-white hover:text-purple-400 transition-colors">TV</Link>
          <Link to="/trending" className="text-white hover:text-purple-400 transition-colors">Trending</Link>
          <Link to="/top-rated" className="text-white hover:text-purple-400 transition-colors">Top Rated</Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
