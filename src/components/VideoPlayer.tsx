
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
  isDriveLink?: boolean;
}

const VideoPlayer = ({ videoId, isOpen, onClose, isDriveLink = false }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Mount effect
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // Start loading indicator
      setIsLoading(true);
    } else {
      // Delayed unmount for smooth exit animation
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  // Generate the appropriate video source URL
  const videoSrc = isDriveLink 
    ? `https://drive.google.com/file/d/${videoId}/preview?usp=sharing&embedded=true&rm=minimal` 
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&color=white`;

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300",
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
      <div className="relative w-full max-w-5xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close video"
        >
          <X size={24} className="text-white" />
        </button>
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        
        <div className="relative w-full h-full">
          <iframe
            src={videoSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={isDriveLink ? "Google Drive Video Player" : "YouTube Video Player"}
            className={cn(
              "bg-black rounded-lg shadow-2xl transition-opacity duration-500",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setIsLoading(false)}
            loading="eager"
            sandbox={isDriveLink ? "allow-scripts allow-same-origin" : ""}
          ></iframe>
          
          {/* CSS overlay to hide the pop-out button on Google Drive embeds */}
          {isDriveLink && (
            <div className="absolute top-2 right-2 w-10 h-10 bg-black pointer-events-none"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
