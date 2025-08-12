import axios from "axios";

const API_KEY = "6da4c57a20a9ff3cd17f8bc3f551d726";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query, page = 1) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
        language: "pt-BR",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Erro ao buscar filmes");
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Erro ao buscar detalhes do filme");
  }
};
