import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { fakeFetch } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import Sidebar from "../components/Sidebar";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState("Trending");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data)
    );
    // fakeFetch("data/search.json").then((data) => setVideos(data));
  }, [selected]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-auto md:h-[92vh]">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>
      <div className="">
        <p className="text-2xl font-semibold pt-2 pb-4 px-4">
          {selected}&nbsp; videos
        </p>
        <Videos videos={videos} />
      </div>
    </div>
  );
}
