import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import { numFormat } from "../utils/count";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import RelatedVideos from "../components/RelatedVideos";
import ChannelInfo from "../components/ChannelInfo";

export default function VideoDetail() {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [fold, setFold] = useState(true);

  useEffect(() => {
    // fetchFromAPI(
    //   `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    // ).then((data) => setVideoDetail(data[0]));
    // fetchFromAPI(
    //   `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
    // ).then((data) => setRelatedVideos(data));
    // fetchFromAPI(
    //   `commentThreads?part=snippet&videoId=${videoId}&maxResults=100`
    // ).then((data) => setComments(data));

    // 이렇게 해도 문제 없네? 경로 앞에 /안붙여서 그런가?=> 그랬던거다.
    fakeFetch("/data/videoDetail.json").then((data) => setVideoDetail(data[0]));
    fakeFetch("/data/related.json").then((data) => setRelatedVideos(data));
    fakeFetch("/data/comments.json").then((data) => setComments(data));
  }, [videoId]);

  console.log(relatedVideos, videoDetail);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  //이상하게 ?를 붙이면 잘 되고 안 붙이면 not found가 뜬다.
  return (
    <div className="flex flex-col gap-2 lg:flex-row p-[24px] lg:gap-4">
      <div className="basis-4/6">
        <iframe
          className=""
          id="player"
          width="100%"
          height="640"
          type="text/html"
          src={`http://www.youtube.com/embed/${videoId}`}
        ></iframe>
        <div className="text-xl font-semibold mt-2">{title}</div>
        <ChannelInfo id={channelId} title={channelTitle} />
        <div className="bg-gray-200 p-4 rounded-xl">
          <div className="font-semibold">
            {viewCount}&nbsp;views&nbsp;
            {publishedAt.slice(0, 10)}
          </div>
          <p className="whitespace-pre-wrap">
            {fold ? description.slice(0, 200) + "..." : description}
          </p>
          <button
            className="font-semibold text-blue-500"
            onClick={() => {
              setFold((prev) => !prev);
            }}
          >
            {fold ? "show more" : "show less"}
          </button>
        </div>
        <Comments comments={comments} />
      </div>
      <div className="basis-2/6">
        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  );
}
