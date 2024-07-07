import axios from "axios";

export const disneyApi = {
  disneyList: async () => {
    try {
      return axios.get(`https://disney_api.nomadcoders.workers.dev/characters`).then((result) => result.data);
    } catch (error) {
      console.log(error);
    }
  },

  disneyDetailList: async (id: number) => {
    try {
      return axios.get(`https://disney_api.nomadcoders.workers.dev/characters/${id}`).then((result) => result.data);
    } catch (error) {
      console.log(error);
    }
  },
};
