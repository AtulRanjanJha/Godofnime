
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Play, Calendar, Star, Clock } from 'lucide-react';
import { Anime } from '@/types/anime';
import { getImageUrl } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  animes: Anime[];
}

const HeroSection = ({ animes = [] }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  
  const currentAnime = animes[currentIndex];
  
  useEffect(() => {
    if (!animes.length) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animes.length);
        setImageLoaded(false);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [animes.length]);
  
  if (!currentAnime) return null;
  
  const title = currentAnime.name || currentAnime.title || '';
  const releaseDate = currentAnime.first_air_date || currentAnime.release_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : null;
  const mediaType = currentAnime.media_type || 'tv';
  
  const handleWatchClick = () => {
    navigate(`/watch/${currentAnime.id}`);
  };
  
  return (
    <div className="relative w-full overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh]">
      {/* Background media (image or video) */}
      <div className="absolute inset-0 bg-gray-100">
        {isVideoBackground ? (
          <video
            ref={videoRef}
            className={cn(
              "w-full h-full object-cover object-top transition-opacity duration-500",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
            autoPlay
            muted
            loop
            playsInline
          >
            {/* Video source would be set dynamically when needed */}
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={getImageUrl(currentAnime.backdrop_path, 'original')}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "w-full h-full object-cover object-top transition-opacity duration-500",
              imageLoaded ? "opacity-100" : "opacity-0",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 flex flex-col justify-end md:justify-center md:items-start">
        <div 
          className={cn(
            "max-w-2xl transition-all duration-500 transform",
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-medium">
              {mediaType === 'movie' ? 'Movie' : 'Series'}
            </div>
            
            {releaseYear && (
              <div className="flex items-center space-x-1 text-gray-300">
                <Calendar size={14} />
                <span className="text-xs">{releaseYear}</span>
              </div>
            )}
            
            <div className="flex items-center space-x-1 text-gray-300">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs">{currentAnime.vote_average.toFixed(1)}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 text-balance">
            {title}
          </h1>
          
          <p className="text-gray-200 mb-6 line-clamp-3 md:line-clamp-4 text-balance">
            {currentAnime.overview}
          </p>
          
          <div className="flex items-center space-x-4">
            <Button 
              size="lg" 
              className="rounded-full px-6"
              onClick={handleWatchClick}
            >
              <Play size={18} className="mr-2" />
              Watch
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Link to={`/anime/${currentAnime.id}?type=${mediaType}`}>
                Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-2">
          {animes.slice(0, 8).map((_, index) => (
            <button 
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setImageLoaded(false);
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 100);
                }, 500);
              }}
              className={cn(
                "w-8 h-1 rounded-full transition-all",
                currentIndex === index 
                  ? "bg-white/80 w-12" 
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
