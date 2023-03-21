import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

export default function VideoDetail() {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    // fetchFromAPI(
    //   `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    // ).then((data) => setVideoDetail(data));
    fakeFetch("data/videoDetail.json").then((data) => setVideoDetail(data));
    fakeFetch("data/related.json").then((data) => setRelatedVideos(data));

    // fetchFromAPI(
    //   `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
    // ).then((data) => setRelatedVideo(data));
  }, [videoId]);

  console.log(relatedVideos);

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail;
  return (
    <div className="flex">
      <div>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameborder="0"
        ></iframe>
        <div className="content">{videoDetail.title}</div>
        <div className="detail">{videoDetail.channelTitle}</div>
      </div>
      <Videos videos={relatedVideos} />
    </div>
  );
}
