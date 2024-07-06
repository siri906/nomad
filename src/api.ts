import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
};

export const fetchCoinTickers = async (coinId: string | undefined) => {
  return await axios.get(`${BASE_URL}/tickers/${coinId}`).then((res) => res.data);
};

export const fetchChartData = async (coinId: string | undefined) => {
  // floor => 내림, ceil => 올림
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24;
  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`, {
      // params: {
      //   start: startDate,
      //   end: endDate,
      // },
    })
    .then((res) => res.data);
};
