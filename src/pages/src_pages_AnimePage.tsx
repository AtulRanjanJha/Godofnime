import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimeList from "../components/AnimeList";
import AnimeDetail from "../components/AnimeDetail";

const AnimePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/detail/:url" element={<AnimeDetail url="" />} />
      </Routes>
    </Router>
  );
};

export default AnimePage;