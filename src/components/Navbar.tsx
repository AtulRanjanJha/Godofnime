
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import SearchSuggestions from './SearchSuggestions';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
    setShowSuggestions(false);
  }, [location.pathname]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 py-4 backdrop-blur-lg", 
      isScrolled 
        ? "bg-white/80 dark:bg-gray-900/80 shadow-sm" 
        : "bg-transparent dark:bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-semibold tracking-tight hover-scale">
          アニメ<span className="text-black/70 dark:text-white/70">Hub</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className={cn(
              "text-sm font-medium transition-colors hover:text-black dark:hover:text-white", 
              location.pathname === "/" 
                ? "text-black dark:text-white" 
                : "text-black/60 dark:text-white/60"
            )}>
              Home
            </Link>
            <Link to="/trending" className={cn(
              "text-sm font-medium transition-colors hover:text-black dark:hover:text-white", 
              location.pathname === "/trending" 
                ? "text-black dark:text-white" 
                : "text-black/60 dark:text-white/60"
            )}>
              Trending
            </Link>
            <Link to="/top-rated" className={cn(
              "text-sm font-medium transition-colors hover:text-black dark:hover:text-white", 
              location.pathname === "/top-rated" 
                ? "text-black dark:text-white" 
                : "text-black/60 dark:text-white/60"
            )}>
              Top Rated
            </Link>
            <Link to="/genres" className={cn(
              "text-sm font-medium transition-colors hover:text-black dark:hover:text-white flex items-center gap-1", 
              location.pathname === "/genres" 
                ? "text-black dark:text-white" 
                : "text-black/60 dark:text-white/60"
            )}>
              <Tag size={16} />
              Genres
            </Link>
          </nav>

          <div ref={searchRef} className="relative transition-all duration-300 w-64">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search anime..." 
                value={searchQuery} 
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.length >= 2) {
                    setShowSuggestions(true);
                  } else {
                    setShowSuggestions(false);
                  }
                }}
                onFocus={() => {
                  if (searchQuery.length >= 2) {
                    setShowSuggestions(true);
                  }
                }}
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-gray-300 dark:focus:border-gray-600 text-sm dark:bg-gray-800 dark:text-white" 
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Search size={16} />
              </button>
            </form>
            
            {showSuggestions && (
              <SearchSuggestions 
                query={searchQuery} 
                onSelect={() => setShowSuggestions(false)} 
              />
            )}
          </div>
          
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg animate-fade-in border-t border-gray-100 dark:border-gray-800">
          <div className="p-5 space-y-4">
            <div ref={searchRef} className="relative">
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Search anime..." 
                  value={searchQuery} 
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.length >= 2) {
                      setShowSuggestions(true);
                    } else {
                      setShowSuggestions(false);
                    }
                  }}
                  onFocus={() => {
                    if (searchQuery.length >= 2) {
                      setShowSuggestions(true);
                    }
                  }}
                  className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 focus:border-gray-300 dark:focus:border-gray-600 text-sm dark:bg-gray-800 dark:text-white" 
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Search size={16} />
                </button>
              </form>
              
              {showSuggestions && (
                <SearchSuggestions 
                  query={searchQuery} 
                  onSelect={() => {
                    setShowSuggestions(false);
                    setIsMenuOpen(false);
                  }} 
                />
              )}
            </div>

            <nav className="flex flex-col space-y-3">
              <Link to="/" className={cn(
                "text-sm font-medium px-3 py-2 rounded-md transition-colors", 
                location.pathname === "/" 
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white"
              )}>
                Home
              </Link>
              <Link to="/trending" className={cn(
                "text-sm font-medium px-3 py-2 rounded-md transition-colors", 
                location.pathname === "/trending" 
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white"
              )}>
                Trending
              </Link>
              <Link to="/top-rated" className={cn(
                "text-sm font-medium px-3 py-2 rounded-md transition-colors", 
                location.pathname === "/top-rated" 
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white"
              )}>
                Top Rated
              </Link>
              <Link to="/genres" className={cn(
                "text-sm font-medium px-3 py-2 rounded-md transition-colors flex items-center gap-2", 
                location.pathname === "/genres" 
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white" 
                  : "text-black/60 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-black dark:hover:text-white"
              )}>
                <Tag size={16} />
                Genres
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
