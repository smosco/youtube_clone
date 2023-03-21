import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import axios from "axios";
export default function Feed() {
  const fetchFromAPI = async () => {
    const { data } = await axios.get("data/trend.json");
    return data.items;
  };

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    const { data } = await axios.get("data/trend.json");
    return data.items;
    //return fetchFromAPI();
  });

  return (
    <div>
      {isLoading && <Loading />}
      {error && <p>something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
