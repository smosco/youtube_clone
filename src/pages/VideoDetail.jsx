import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";

export default function VideoDetail() {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  useEffect(() => {
    // fetchFromAPI(
    //   `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    // ).then((data) => setVideoDetail(data));
    fakeFetch("data/videoDetail.json").then((data) => setVideoDetail(data));
  }, [videoId]);

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`http://www.youtube.com/embed/${videoId}`}
        frameborder="0"
      ></iframe>
      <div className="content">{title}</div>
      <div className="detail"></div>
    </div>
  );
}
