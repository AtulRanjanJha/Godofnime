
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface EpisodePaginationProps {
  currentEpisodePage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const EpisodePagination: React.FC<EpisodePaginationProps> = ({
  currentEpisodePage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => onPageChange(Math.max(1, currentEpisodePage - 1))}
            className={cn(
              currentEpisodePage === 1 ? "pointer-events-none opacity-50" : "",
              "hover:bg-zinc-800 border border-zinc-700/50"
            )}
          />
        </PaginationItem>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageToShow;
          if (totalPages <= 5) {
            pageToShow = i + 1;
          } else if (currentEpisodePage <= 3) {
            pageToShow = i + 1;
          } else if (currentEpisodePage >= totalPages - 2) {
            pageToShow = totalPages - 4 + i;
          } else {
            pageToShow = currentEpisodePage - 2 + i;
          }
          
          return (
            <PaginationItem key={i}>
              <PaginationLink 
                onClick={() => onPageChange(pageToShow)}
                isActive={currentEpisodePage === pageToShow}
                className={currentEpisodePage === pageToShow ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white" : "hover:bg-zinc-800 border border-zinc-700/50"}
              >
                {pageToShow}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        
        <PaginationItem>
          <PaginationNext 
            onClick={() => onPageChange(Math.min(totalPages, currentEpisodePage + 1))}
            className={cn(
              currentEpisodePage === totalPages ? "pointer-events-none opacity-50" : "",
              "hover:bg-zinc-800 border border-zinc-700/50"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default EpisodePagination;
