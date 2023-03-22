import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { fakeFetch } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

export default function SearchFeed() {
  const { searchTerm } = useParams();
  // console.log(searchTerm);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`).then(
    //   (data) => setVideos(data)
    // );
    fakeFetch("/data/search.json").then((data) => setVideos(data));
  }, [searchTerm]);
  return (
    <div>
      <div className="text-xl m-4 font-semibold">
        This is the results about&nbsp;
        <span className="text-red-600">"{searchTerm}"</span>
      </div>
      <Videos videos={videos} />
    </div>
  );
}
