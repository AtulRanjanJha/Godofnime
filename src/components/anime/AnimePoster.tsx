
import React, { useState, useEffect } from 'react';
import { getImageUrl, getCustomImageUrl } from '@/lib/api';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimePosterProps {
  animeId: number;
  posterPath: string | null;
  title: string;
}

const AnimePoster: React.FC<AnimePosterProps> = ({ animeId, posterPath, title }) => {
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const [fallbackImage, setFallbackImage] = useState<string | null>(null);
  
  const customImage = getCustomImageUrl(animeId);
  
  // Try to find a fallback image from different sources
  useEffect(() => {
    if ((posterError || !posterPath) && !customImage && !fallbackImage) {
      console.log(`Fetching fallback image for: ${title}`);
      // Try to fetch a fallback image from an external API
      fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`)
        .then(response => response.json())
        .then(data => {
          if (data.data && data.data.length > 0 && data.data[0].images?.jpg?.image_url) {
            console.log(`Found fallback image for: ${title}`);
            setFallbackImage(data.data[0].images.jpg.image_url);
            setPosterError(false); // Reset error state since we found a fallback
          }
        })
        .catch(err => {
          console.error('Error fetching fallback image:', err);
        });
    }
  }, [posterError, posterPath, customImage, title, fallbackImage]);
  
  const isCustomOrFallback = customImage || fallbackImage;
  const posterImage = isCustomOrFallback 
    ? (customImage || fallbackImage)
    : (posterError || !posterPath
      ? '/placeholder.svg'
      : getImageUrl(posterPath, 'w500'));

  const handleImageError = () => {
    console.log(`Image error for: ${title} using path: ${posterImage}`);
    if (!fallbackImage && !customImage) {
      setPosterError(true);
    }
  };

  return (
    <div className="relative aspect-[2/3] w-full max-w-[250px] md:max-w-none mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
      {!posterLoaded && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
          <ImageIcon size={32} className="text-gray-400" />
        </div>
      )}
      
      <img
        src={posterImage}
        alt={title}
        className={cn(
          "w-full h-full object-cover",
          !posterLoaded && "opacity-0"
        )}
        onLoad={() => setPosterLoaded(true)}
        onError={handleImageError}
      />
      
      {posterError && !customImage && !fallbackImage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 bg-opacity-80 text-gray-500">
          <ImageIcon size={32} />
          <span className="mt-2 text-sm text-center">No poster available</span>
        </div>
      )}
    </div>
  );
};

export default AnimePoster;
