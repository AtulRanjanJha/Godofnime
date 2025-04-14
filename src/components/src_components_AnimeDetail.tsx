import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimeService } from "../services/AnimeService";

interface AnimeDetailProps {
  url: string;
}

const AnimeDetail: React.FC<AnimeDetailProps> = ({ url }) => {
  const { data, isLoading, error } = useQuery(["anime", "detail", url], () =>
    AnimeService.getDetail(url)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading anime detail</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.cover} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
};

export default AnimeDetail;