
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  message?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = "Unable to load this anime. It may not exist or there might be a temporary issue."
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Anime</h1>
      <p className="text-zinc-300 mb-6">{message}</p>
      <Button 
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default ErrorState;
