import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import { numFormat } from "../utils/count";
import Loader from "../components/Loader";

export default function ChannelDetail() {
  // const {
  //   state: {
  //     channelDetail: {
  //       snippet: {
  //         title,
  //         thumbnails: {
  //           high: { url },
  //         },
  //       },
  //       statistics: { subscriberCount },
  //     },
  //   },
  // } = useLocation();
  const { channelId } = useParams();
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);

  useEffect(() => {
    // 특정 channelId의 정보를 가져옴
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
      (data) => setChannelDetail(data[0])
    );

    // 특정 channelId의 videos을 가져옴
    fetchFromAPI(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date`
    ).then((data) => setChannelVideos(data));

    //  fakeFetch("/data/channelDetail.json").then(data=> setChannelDetail(data[0]));
    //  fakeFetch("/data/channelVideo.json").then(data=> setChannelVideos(data));
  }, [channelId]);

  if (!channelDetail?.snippet) {
    return <Loader />;
  }

  const {
    snippet: {
      title,
      thumbnails: {
        high: { url },
      },
    },
    statistics: { subscriberCount },
  } = channelDetail;

  // console.log(channelDetail, channelVideos);
  return (
    <div className="flex flex-col gap-6 px-12">
      <div className="flex items-center gap-4 border-b-[1px] pb-6">
        <img className="w-24 h-24 rounded-full" src={url} alt={title} />
        <div>
          <p className="text-3xl">{title}</p>
          {subscriberCount && (
            <p className="text-md text-gray-500">
              {numFormat(parseInt(subscriberCount))}
              &nbsp;subscribers
            </p>
          )}
        </div>
      </div>
      <Videos videos={channelVideos} />
    </div>
  );
}
