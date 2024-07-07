import axios from "axios";

export const disneyApi = {
  disneyList: async () => axios.get(`https://disney_api.nomadcoders.workers.dev/characters`).then((result) => result.data),

  disneyDetailList: async (id: number) => axios.get(`https://disney_api.nomadcoders.workers.dev/characters/${id}`).then((result) => result.data),
};
