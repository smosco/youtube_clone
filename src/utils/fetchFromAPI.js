const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const data = await fetch(`https://youtube-v31.p.rapidapi.com/${url}`, options)
    .then((res) => res.json())
    .then((data) => data.items);
  return data; //꼭 리턴 해주기
};

export const fakeFetch = async (url) => {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.items);
  return data; //꼭 리턴 해주기
};

//relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&
