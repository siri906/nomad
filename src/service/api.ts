import axios from "axios";

const API_KEY = "4ba693ad899aac9d3d93346625108483";
const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = async () => {
  return await axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=1`)
    .then((resultData) => resultData.data);
};

export const getMovieDetail = async (movieId: number) => {
  return await axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=1`)
    .then((resultData) => resultData.data);
};
