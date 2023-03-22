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
    //   fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
    //     (data) => setChannelDetail(data)
    //   );
    // 이것때문에 없다고 나왔구나 [{}]이 상태로 받으니까 자꾸 없다고 뜬거다. 그냥 {}상태로 받아야함
    // 초기를 null로 해도 어차피 data.items를 반환해서 배열이기 때문에 [0]써줘야 한다.

    //이건 또 경로를 이렇게 잡아줘야 하는건가? => 차라리 이럴바에 data를 src 안에 넣는게 더 낫다.
    // fakeFetch("/data/channelDetail.json").then((data) =>
    //   setChannelDetail(data[0])
    // );

    // fakeFetch("../data/channelVideo.json").then((data) =>
    //   setChannelVideos(data)
    // );

    //2개를 한번에 하는 함수가 필요했다.? 확실한가?

    const fetchResults = async () => {
      // const data = await fetchFromAPI(
      //   `channels?part=snippet%2Cstatistics&id=${channelId}`
      // );
      const data = await fakeFetch("/data/channelDetail.json");

      setChannelDetail(data[0]);

      // const videosData = await fetchFromAPI(
      //   `search?channelId=${channelId}&part=snippet%2Cid&order=date`
      // );
      const videosData = await fakeFetch("/data/channelVideo.json");

      setChannelVideos(videosData);
    };

    fetchResults();
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
