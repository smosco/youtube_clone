import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const data = await axios
      .get(`${BASE_URL}/${url}`, options)
      .then((res) => res.data.items);
    return data; //꼭 리턴 해주기
  } catch (err) {
    console.log(err.message);
  }
};

export const fakeFetch = async (url) => {
  const data = await axios //
    .get(url) //
    .then((res) => res.data.items);
  return data; //꼭 리턴 해주기
};
