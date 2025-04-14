import axios from "axios";

const BASE_URL = "https://api.mangadex.org";

export const MangaService = {
  async getLatest(page: number) {
    const offset = page > 1 ? (page - 1) * 30 : 0;
    const response = await axios.get(`${BASE_URL}/manga?order[rating]=desc&limit=30&offset=${offset}&includes[]=cover_art`);
    return response.data.data.map((item: any) => {
      const coverArt = item.relationships.find((rel: any) => rel.type === "cover_art");
      return {
        id: item.id,
        title: item.attributes.title.en,
        cover: `https://uploads.mangadex.org/covers/${item.id}/${coverArt.attributes.fileName}.256.jpg`,
      };
    });
  },

  async search(keyword: string, page: number) {
    const offset = (page - 1) * 30;
    const response = await axios.get(`${BASE_URL}/manga?title=${keyword}&limit=30&offset=${offset}&includes[]=cover_art`);
    return response.data.data.map((item: any) => {
      const coverArt = item.relationships.find((rel: any) => rel.type === "cover_art");
      return {
        id: item.id,
        title: item.attributes.title.en,
        cover: `https://uploads.mangadex.org/covers/${item.id}/${coverArt.attributes.fileName}.256.jpg`,
      };
    });
  },

  async getDetail(mangaId: string) {
    const response = await axios.get(`${BASE_URL}/manga/${mangaId}?includes[]=cover_art`);
    const manga = response.data.data;
    const coverArt = manga.relationships.find((rel: any) => rel.type === "cover_art");

    const chaptersRes = await axios.get(`${BASE_URL}/manga/${mangaId}/feed?order[volume]=asc&order[chapter]=asc&limit=500`);
    const chapters = chaptersRes.data.data;

    return {
      id: manga.id,
      title: manga.attributes.title.en,
      description: manga.attributes.description.en,
      cover: `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}`,
      chapters: chapters.map((chapter: any) => ({
        name: `Chapter ${chapter.attributes.chapter}`,
        id: chapter.id,
      })),
    };
  },

  async getChapterImages(chapterId: string) {
    const response = await axios.get(`${BASE_URL}/at-home/server/${chapterId}`);
    const { baseUrl, chapter } = response.data;
    return chapter.data.map((filename: string) => `${baseUrl}/data/${chapter.hash}/${filename}`);
  },
};
