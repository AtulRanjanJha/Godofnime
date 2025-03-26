
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import AnimeDetail from "./pages/AnimeDetail";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import WatchPage from "./pages/WatchPage";
import TV from "./pages/TV";
import Trending from "./pages/Trending";
import TopRated from "./pages/TopRated";
import Genres from "./pages/Genres";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Wrapper component to conditionally render the footer
const AppContent = () => {
  const location = useLocation();
  const isAnimeDetailPage = location.pathname.includes("/anime/");
  const isWatchPage = location.pathname.includes("/watch/");
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isAnimeDetailPage && !isWatchPage && <Footer />}
    </div>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
