import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotels-com-provider.p.rapidapi.com/v1",
  headers: {
    "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  },
});

export default instance;
