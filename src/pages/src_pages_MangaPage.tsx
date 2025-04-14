import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MangaList from "../components/MangaList";
import MangaDetail from "../components/MangaDetail";

const MangaPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MangaList />} />
        <Route path="/detail/:id" element={<MangaDetail mangaId="" />} />
      </Routes>
    </Router>
  );
};

export default MangaPage;