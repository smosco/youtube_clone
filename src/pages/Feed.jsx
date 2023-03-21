import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { fakeFetch } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import Sidebar from "../components/Sidebar";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    // fetchFromAPI("search?part=snippet&q=bts&maxResults=50").then((data) =>
    //   setVideos(data)
    // );
    fakeFetch("data/search.json").then((data) => setVideos(data));
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <Videos videos={videos} />
    </div>
  );
}
