import axios from "axios";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(url);
  return data.items;
};
