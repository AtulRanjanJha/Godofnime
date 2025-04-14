import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MangaService } from "../services/MangaService";

interface MangaDetailProps {
  mangaId: string;
}

const MangaDetail: React.FC<MangaDetailProps> = ({ mangaId }) => {
  const { data, isLoading, error } = useQuery(["manga", "detail", mangaId], () =>
    MangaService.getDetail(mangaId)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading manga detail</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.cover} alt={data.title} />
      <p>{data.description}</p>
      <h2>Chapters</h2>
      <ul>
        {data.chapters.map((chapter: any) => (
          <li key={chapter.id}>{chapter.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MangaDetail;