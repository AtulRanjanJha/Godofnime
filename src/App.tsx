import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/anime">Anime</Link> | <Link to="/manga">Manga</Link>
      </nav>
      <Routes>
        <Route path="/anime/*" element={<AnimePage />} />
        <Route path="/manga/*" element={<MangaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
