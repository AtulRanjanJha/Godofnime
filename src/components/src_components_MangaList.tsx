import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MangaService } from "../services/MangaService";

const MangaList: React.FC = () => {
  const { data, isLoading, error } = useQuery(["manga", "latest"], () =>
    MangaService.getLatest(1)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading manga list</p>;

  return (
    <div>
      <h1>Latest Manga</h1>
      <ul>
        {data.map((manga: any) => (
          <li key={manga.id}>
            <img src={manga.cover} alt={manga.title} width="100" />
            <p>{manga.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangaList;