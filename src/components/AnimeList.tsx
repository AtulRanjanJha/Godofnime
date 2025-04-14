import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimeService } from "../services/AnimeService";

const AnimeList: React.FC = () => {
  const { data, isLoading, error } = useQuery(["anime", "latest"], () =>
    AnimeService.getLatest(1)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading anime list</p>;

  return (
    <div>
      <h1>Latest Anime</h1>
      <ul>
        {data.map((anime: any) => (
          <li key={anime.id}>
            <img src={anime.cover} alt={anime.title} width="100" />
            <p>{anime.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
