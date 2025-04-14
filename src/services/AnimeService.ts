import axios from "axios";

const BASE_URL = "https://jimov-api.vercel.app";

export const AnimeService = {
  async getLatest(page: number) {
    const response = await axios.get(`${BASE_URL}/latest?type=anime&page=${page}`);
    return response.data;
  },

  async search(keyword: string, page: number) {
    const response = await axios.get(`${BASE_URL}/search?type=anime&keyword=${keyword}&page=${page}`);
    return response.data;
  },

  async getDetail(url: string) {
    const response = await axios.get(`${BASE_URL}/detail?type=anime&url=${encodeURIComponent(url)}`);
    return response.data;
  },

  async getWatchLinks(url: string) {
    const response = await axios.get(`${BASE_URL}/watch?url=${encodeURIComponent(url)}`);
    return response.data;
  },
};