import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Comments from "../components/Comments";

export default function VideoDetail() {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetchFromAPI(
    //   `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    // ).then((data) => setVideoDetail(data[0]));

    // 이렇게 해도 문제 없네? 경로 앞에 /안붙여서 그런가?=> 그랬던거다.
    fakeFetch("/data/videoDetail.json").then((data) => setVideoDetail(data[0]));
    fakeFetch("/data/related.json").then((data) => setRelatedVideos(data));
    fakeFetch("/data/comments.json").then((data) => setComments(data));
    // fetchFromAPI(
    //   `commentThreads?part=snippet&videoId=${videoId}&maxResults=100`
    // ).then((data) => console.log(data));

    // fetchFromAPI(
    //   `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
    // ).then((data) => setRelatedVideo(data));
  }, [videoId]);

  console.log(relatedVideos, videoDetail);

  if (!videoDetail?.snippet) return <Loader />;

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail;

  //이상하게 ?를 붙이면 잘 되고 안 붙이면 not found가 뜬다.
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
        <div className="content">{videoDetail?.snippet?.title}</div>
        <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
          {videoDetail?.snippet?.channelTitle}
        </Link>
        <div>{videoDetail?.statistics?.viewCount}</div>
      </div>
      <Comments comments={comments} />
      <Videos videos={relatedVideos} />
    </div>
  );
}
